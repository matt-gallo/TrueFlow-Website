/**
 * Growth Audit — enrichment
 *
 * Goes and looks at the prospect's actual website instead of relying on what
 * they told us in a form. Everything here is best-effort: if a fetch fails or
 * a site is JS-rendered and returns a shell, we degrade to whatever we got and
 * let the model work with less. Nothing in here should ever throw.
 */

export interface SiteSignals {
  url: string
  reachable: boolean
  title?: string
  metaDescription?: string
  /** Visible text, truncated — what the model actually reads. */
  text?: string
  /** Things we look for because each one maps to a known revenue leak. */
  hasContactForm: boolean
  hasPhoneNumber: boolean
  hasBookingLink: boolean
  hasLiveChat: boolean
  bookingProviders: string[]
  socials: string[]
  /** Rough proxy for "is this a real business site or a placeholder". */
  wordCount: number
  notes: string[]
}

const FETCH_TIMEOUT_MS = 8000
const MAX_TEXT_CHARS = 12000

function normalizeUrl(input: string): string | null {
  const raw = input.trim()
  if (!raw) return null
  const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
  try {
    const u = new URL(withProto)
    // Guard against SSRF into our own infra / private ranges.
    if (!/^https?:$/.test(u.protocol)) return null
    if (/^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.)/i.test(u.hostname)) return null
    return u.toString()
  } catch {
    return null
  }
}

/** Derive a likely website from an email domain when they didn't give us one. */
export function siteFromEmail(email: string): string | null {
  const domain = email.split('@')[1]?.toLowerCase()
  if (!domain) return null
  const freemail = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
    'aol.com', 'proton.me', 'protonmail.com', 'live.com', 'msn.com',
  ]
  if (freemail.includes(domain)) return null
  return `https://${domain}`
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

export async function enrichSite(input: string): Promise<SiteSignals> {
  const url = normalizeUrl(input)
  const empty: SiteSignals = {
    url: input,
    reachable: false,
    hasContactForm: false,
    hasPhoneNumber: false,
    hasBookingLink: false,
    hasLiveChat: false,
    bookingProviders: [],
    socials: [],
    wordCount: 0,
    notes: [],
  }
  if (!url) return { ...empty, notes: ['Could not parse a usable URL.'] }

  let html = ''
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        // Identify honestly. Some sites block unknown agents outright.
        'User-Agent': 'TrueFlowGrowthAudit/1.0 (+https://trueflow.ai)',
        Accept: 'text/html,application/xhtml+xml',
      },
    })
    clearTimeout(timer)
    if (!res.ok) return { ...empty, url, notes: [`Site returned ${res.status}.`] }
    html = await res.text()
  } catch {
    return { ...empty, url, notes: ['Site did not respond in time.'] }
  }

  const lower = html.toLowerCase()
  const text = stripHtml(html).slice(0, MAX_TEXT_CHARS)
  const notes: string[] = []

  const bookingProviders: string[] = []
  const providerMap: Record<string, string> = {
    'calendly.com': 'Calendly',
    'leadconnectorhq.com': 'GoHighLevel',
    'msgsndr.com': 'GoHighLevel',
    'acuityscheduling.com': 'Acuity',
    'squarespace-scheduling': 'Acuity',
    'hubspot.com/meetings': 'HubSpot Meetings',
    'cal.com': 'Cal.com',
    'youcanbook.me': 'YouCanBook.me',
    'setmore.com': 'Setmore',
    'mindbodyonline.com': 'Mindbody',
    'janeapp.com': 'Jane',
  }
  for (const [needle, name] of Object.entries(providerMap)) {
    if (lower.includes(needle) && !bookingProviders.includes(name)) bookingProviders.push(name)
  }

  const chatVendors = ['intercom', 'drift.com', 'tawk.to', 'crisp.chat', 'hubspot-messages', 'tidio', 'livechatinc', 'zendesk']
  const hasLiveChat = chatVendors.some(v => lower.includes(v))

  const socials: string[] = []
  const socialMap: Record<string, string> = {
    'instagram.com': 'Instagram',
    'facebook.com': 'Facebook',
    'linkedin.com': 'LinkedIn',
    'youtube.com': 'YouTube',
    'tiktok.com': 'TikTok',
    'x.com/': 'X',
    'twitter.com': 'X',
  }
  for (const [needle, name] of Object.entries(socialMap)) {
    if (lower.includes(needle) && !socials.includes(name)) socials.push(name)
  }

  const hasContactForm = /<form[\s>]/i.test(html) || lower.includes('type="email"')
  const hasPhoneNumber = /tel:\+?[\d\-().\s]{7,}/i.test(html)
  const hasBookingLink =
    bookingProviders.length > 0 ||
    /(book\s+(a\s+)?(call|demo|appointment|consult)|schedule\s+(a\s+)?(call|demo))/i.test(text)

  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)

  const wordCount = text ? text.split(/\s+/).length : 0
  if (wordCount < 120) {
    notes.push('Very little readable text — likely a JavaScript-rendered site, so this read is partial.')
  }
  if (!hasContactForm && !hasPhoneNumber && !hasBookingLink) {
    notes.push('No form, phone link, or booking path found on the landing page.')
  }

  return {
    url,
    reachable: true,
    title: titleMatch?.[1]?.trim(),
    metaDescription: descMatch?.[1]?.trim(),
    text,
    hasContactForm,
    hasPhoneNumber,
    hasBookingLink,
    hasLiveChat,
    bookingProviders,
    socials,
    wordCount,
    notes,
  }
}
