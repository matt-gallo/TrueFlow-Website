'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/">
            <Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Automation</span>
              <span className="text-white/40 text-sm">May 25, 2026</span>
              <span className="text-white/40 text-sm">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zendesk Killed The Support Seat At Relate On May 19. That&apos;s Three Major Platforms Pricing AI On Outcomes In One Quarter &mdash; Your Flat Retainer Is Now The Anomaly.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On May 19 at Relate 2026, Zendesk unveiled an Autonomous Service Workforce priced only on verified resolutions. Combined with HubSpot&apos;s $1-a-lead Prospecting Agent and Intercom Fin at $0.99 a resolution, the per-seat AI license is dead. The fixed-fee &ldquo;AI chatbot management retainer&rdquo; is the only thing still acting like it&apos;s 2024.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Zendesk Killed The Support Seat At Relate On May 19. Three Platforms Now Price AI On Outcomes — Your Flat Retainer Is The Anomaly."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On <strong>May 19, 2026</strong>, at the Relate conference in San Francisco, Zendesk unveiled its <strong>Autonomous Service Workforce</strong> &mdash; specialized AI agents across messaging, email, and voice, sitting on the new Resolution Platform trained on roughly 20 billion ticket interactions. The pricing rollout had already started on <strong>May 11</strong>: the old &ldquo;Essential&rdquo; and &ldquo;Advanced&rdquo; AI tiers collapsed into one, and the bill moved to a flat <strong>$1.50&ndash;$2.00 per automated resolution</strong>. No resolution, no charge.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That is the third major CRM/support platform this quarter to throw out the per-seat AI license. HubSpot&apos;s Breeze Prospecting Agent did the same on April 14 at <strong>$1 per qualified lead</strong>. Intercom Fin has been at <strong>$0.99 per resolution</strong> for months. And on June 15, the Claude Agent SDK splits its billing from the Claude subscription &mdash; separate metered credits, separate quota.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The retainer model didn&apos;t survive the quarter. Most agencies haven&apos;t told their clients yet.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                For two years the standard pitch from an &ldquo;AI implementation agency&rdquo; was this: $4K&ndash;$8K a month flat, we&apos;ll set up your chatbot, monitor it, tweak it, send you a monthly report. The platform charged per seat. The agency charged per month. Both invoices were stable, predictable, and almost entirely uncoupled from whether the AI resolved anything.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Zendesk just deleted the seat side of that math. So did HubSpot. So did Intercom. The platform charges only when the AI does the job. The agency, sitting on top, is still billing like the platform charges by the seat.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Do the subtraction. If your chatbot resolved 200 tickets last month, Zendesk now charges you $300&ndash;$400 for the AI. If your &ldquo;AI management retainer&rdquo; is $5,000, you are paying $4,600 for a Slack channel and a weekly status email.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The platforms aren&apos;t doing this because they&apos;re generous &mdash; outcome pricing is the only honest price for software that decides for itself what to do. Per Futurum&apos;s 1H 2026 vendor survey, <strong>43% of enterprise AI buyers now prefer consumption-based pricing and 27% prefer outcome-based</strong> &mdash; 70% of buyers actively rejecting the seat-based license they bought in 2024.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Inside the SMB economy the pressure is worse. NFIB&apos;s April print showed <strong>34% of owners with unfilled jobs</strong>, and ADP&apos;s late-2025 Market Pulse had <strong>labor costs as the #2 concern for 24% of owners</strong>, with a third pausing hires because of it. The owner who can&apos;t afford a new rep is not in a tolerant mood for a flat $5K AI retainer that doesn&apos;t move on volume.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Three platforms moved to outcome billing. Buyers want consumption billing. SMBs can&apos;t carry the slack. The fixed monthly fee is the last domino.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We mirror the platform&apos;s unit, period.</strong> If Zendesk charges per resolution, our fee meters against resolutions. If HubSpot charges per surfaced lead, we meter on leads, not seats. We will not quote a flat monthly retainer for a workflow the platform now sells per outcome.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. The 3-day build is free up front and pay-only-on-traction.</strong> It was a positioning bet in 2024. As of May 19 it&apos;s just matching the platforms we deploy on. If Zendesk doesn&apos;t charge until the bot resolves a ticket, neither do we.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. We meter Agent SDK separately starting June 15.</strong> Anthropic split Agent SDK and <code className="text-cyan-400 bg-white/10 px-1 rounded">claude -p</code> out of the Claude subscription quota. We&apos;ve already moved every production SDK workload onto its own credit pool ($20 Pro / $100 Max 5x / $200 Max 20x) so the client invoice ties to runtime, not to &ldquo;Claude Pro.&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. Audit-then-meter is the new opening contract.</strong> Cut the old flat retainer that came with the chatbot the client already owns. Replace it with a metered services line keyed to the platform&apos;s unit. Most clients save 40&ndash;60% in month one without losing coverage.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If Zendesk charges $1.50&ndash;$2.00 a resolution and Fin charges $0.99, what is my agency&apos;s retainer pricing per resolution? Run the number. If they can&apos;t tell you, that&apos;s the answer.</em></span></li>
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>Why is my &ldquo;AI implementation&rdquo; invoice flat while the underlying platform&apos;s invoice swings with usage? Who is absorbing the variance &mdash; me, or the agency?</em></span></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If both answers point at you, you&apos;ve found the markup.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The seat license for AI is dead at the platform layer. HubSpot killed it for sales on April 14. Anthropic is killing it for builders on June 15. Zendesk just killed it for service on May 19. The agencies that survive 2026 are the ones already pricing the way the platforms price &mdash; per surfaced lead, per resolved ticket, per booked call, per runtime hour. Everyone else is selling a flat fee on top of a metered cost, and that markup has a six-month shelf life.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: Zendesk Relate 2026 keynote and CMSWire coverage, &ldquo;Zendesk Launches AI Agents Priced on Resolutions, Not Seats&rdquo; (May 19, 2026); Zendesk Support, &ldquo;Announcing expanded access to AI agent capabilities&rdquo; (May 11 rollout); HubSpot Breeze Prospecting Agent pricing (April 14, 2026); Anthropic Help Center, &ldquo;Use the Claude Agent SDK with your Claude plan&rdquo; (June 15, 2026 billing change); Futurum Group 1H 2026 AI Pricing Survey; NFIB Small Business Optimism Index, April 2026.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Outcome-Based Pricing, Not a Flat Retainer?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We meter against the same unit the platform uses. Discovery is free. You don&apos;t pay until the system produces the outcome we agreed on &mdash; not when the invoice auto-renews.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">Take the Free Assessment</Link>
              <Link href="https://trueflow.ai" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">See If You Qualify</Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
