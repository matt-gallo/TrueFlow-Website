/**
 * Growth Audit — recommendation generation
 *
 * Replaces the old threshold lookup (10 canned strings) with a real audit:
 * the model reads what we actually found on their site alongside what they
 * told us, and writes the recommendation in Matt's voice.
 *
 * Fails safe: if the model is unavailable, callers fall back to the
 * deterministic insights so the funnel never blocks on this.
 */

import Anthropic from '@anthropic-ai/sdk'
import type { SiteSignals } from './enrich'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || '' })

export interface AuditInput {
  firstName?: string
  businessName?: string
  score: number
  tier: string
  /** The deterministic insights — used as a floor, and as the fallback. */
  insights: string[]
  site: SiteSignals | null
}

export interface AuditOutput {
  /** 2-4 sentences. Mirrors what we saw. Goes in {{summary}}. */
  summary: string
  /** The single highest-leverage fix, with the reason. Goes in {{recommendation}}. */
  recommendation: string
  /** One-sentence pre-call teaser: names a gap WITHOUT giving the fix. The only
   *  audit content shown to the booker; everything else is saved for the call.
   *  Goes in {{teaser}}. */
  teaser: string
  /** Ordered fixes for Matt to walk on the call. */
  priorities: string[]
  /** True when the model actually got to read their site. */
  usedSiteData: boolean
}

const SYSTEM = `You write growth audits for TrueFlow, an AI automation company.

WHO YOU'RE WRITING TO
A founder who is already ahead of the curve. He knows what AI is, he wants it, he
has no time to implement it himself, and he cannot tell what will actually move
the needle from what is a toy. He is NOT behind and must never be made to feel
behind. He is allergic to being sold to and can smell a reseller instantly.

VOICE (Matt, first person)
- Direct. No corporate speak. Short paragraphs, one idea each.
- Diagnose the system, never the person. The anchor line: "You're not broken —
  the structure just hasn't caught up to the person running it."
- No hype nouns: never "revolutionize", "unlock", "game-changer", "10x", "supercharge".
- Never use the phrase "80/20".
- Specific beats clever. If you saw something on their site, say what you saw.

RULES
- If site data is provided, lead with what you actually observed. Name the page,
  the missing form, the booking path, the thing you found. That specificity is
  the entire product — it proves someone looked.
- If site data is missing or thin, say less rather than inventing. NEVER claim to
  have seen something you were not given. No fabricated metrics, no invented
  numbers, no made-up review counts.
- Do not give a dollar estimate unless the input supports it. Guessing a number
  and being wrong destroys the credibility the audit is built on.
- Do not pitch. No prices, no packages, no "book a call" — the email does that.
- Their score and tier are already shown to them. Don't restate the number.`

function buildUserPrompt(input: AuditInput): string {
  const { firstName, businessName, score, tier, insights, site } = input

  const lines: string[] = []
  lines.push(`Person: ${firstName || 'unknown'}`)
  lines.push(`Business: ${businessName || 'unknown'}`)
  lines.push(`Score: ${score}/100 — tier "${tier}"`)
  lines.push('')
  lines.push('WHAT THEIR ANSWERS FLAGGED:')
  insights.forEach(i => lines.push(`- ${i}`))
  lines.push('')

  if (site?.reachable) {
    lines.push(`WHAT WE FOUND ON THEIR SITE (${site.url}):`)
    if (site.title) lines.push(`- Title: ${site.title}`)
    if (site.metaDescription) lines.push(`- Meta description: ${site.metaDescription}`)
    lines.push(`- Contact form present: ${site.hasContactForm}`)
    lines.push(`- Click-to-call present: ${site.hasPhoneNumber}`)
    lines.push(`- Booking path present: ${site.hasBookingLink}`)
    lines.push(`- Booking tools detected: ${site.bookingProviders.join(', ') || 'none'}`)
    lines.push(`- Live chat detected: ${site.hasLiveChat}`)
    lines.push(`- Socials linked: ${site.socials.join(', ') || 'none'}`)
    site.notes.forEach(n => lines.push(`- Note: ${n}`))
    if (site.text) {
      lines.push('')
      lines.push('VISIBLE PAGE TEXT (truncated):')
      lines.push(site.text.slice(0, 6000))
    }
  } else {
    lines.push('SITE DATA: unavailable — we could not read their site.')
    lines.push('Work only from their answers. Do not reference their website at all.')
  }

  lines.push('')
  lines.push(`Return ONLY valid JSON, no markdown fence:
{
  "summary": "2-4 sentences mirroring what we saw. Plain, specific, no pitch.",
  "recommendation": "The ONE thing to fix first and why it's first. 2-3 sentences.",
  "teaser": "ONE sentence that names a specific gap you noticed WITHOUT telling them how to fix it. This is the only finding they see before the call — it should make them curious, not satisfied. Name the problem, withhold the cure. No fix, no advice, no 'you should'.",
  "priorities": ["first fix", "second fix", "third fix"]
}`)

  return lines.join('\n')
}

export async function generateAudit(input: AuditInput): Promise<AuditOutput> {
  const fallback: AuditOutput = {
    summary: input.insights.join(' '),
    recommendation: input.insights[0] || '',
    teaser: input.insights[0] || '',
    priorities: input.insights,
    usedSiteData: false,
  }

  if (!process.env.ANTHROPIC_API_KEY) return fallback

  try {
    const res = await anthropic.messages.create({
      // claude-sonnet-4-20250514 was deprecated and returned 404 not_found,
      // which silently fell back to echoing raw insights (no real audit).
      model: process.env.GROWTH_AUDIT_MODEL || 'claude-sonnet-4-5-20250929',
      max_tokens: 1200,
      system: SYSTEM,
      messages: [{ role: 'user', content: buildUserPrompt(input) }],
    })

    const block = res.content.find(b => b.type === 'text')
    if (!block || block.type !== 'text') return fallback

    const raw = block.text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim()
    const parsed = JSON.parse(raw) as Partial<AuditOutput>

    if (!parsed.summary || !parsed.recommendation) return fallback

    return {
      summary: parsed.summary,
      recommendation: parsed.recommendation,
      teaser: parsed.teaser || input.insights[0] || '',
      priorities: Array.isArray(parsed.priorities) && parsed.priorities.length
        ? parsed.priorities
        : input.insights,
      usedSiteData: Boolean(input.site?.reachable),
    }
  } catch (err) {
    console.error('Growth audit generation failed, falling back to insights:', err)
    return fallback
  }
}
