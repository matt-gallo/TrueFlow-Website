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
              <span className="text-white/40 text-sm">May 24, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Turned Recordings Into Community Posts on May 22. Your $8K Course-Portal Build Just Got a Button.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On May 22 GHL shipped one-click &ldquo;Share as Post&rdquo; from any recording into Communities, plus Conditional Visibility for whole layouts. Pair that with Skool at $99/mo and a labor-starved SMB market, and the customer community is no longer a build &mdash; it&apos;s a default.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL Turned Recordings Into Community Posts on May 22. Your $8K Course-Portal Build Just Got a Button."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On <strong>May 22, 2026</strong>, GoHighLevel shipped a deceptively small update. From inside any meeting recording, you now click three dots, hit <strong>Share as Post</strong>, pick the Community and channel, and publish. No download, no Loom link, no editing pass, no agency. The recording you just took with a customer is now a discussion thread in the community they already belong to &mdash; in two clicks.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That release reads like a quality-of-life update. It is actually a quiet shot at every agency still selling &ldquo;client community portals&rdquo; or &ldquo;course implementation&rdquo; as a separate paid phase.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                For four years the standard SMB content stack has been: Zoom for the call, Loom for the cleanup clip, Notion for the recap, Skool or Circle for the community post, email blast for everyone who wasn&apos;t logged in. Five tools, five renewals, five places the link can break, and one agency happy to maintain the chain for $2K&ndash;$4K a month.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                GHL just put a button inside the workspace your customers already log into. The recording action publishes natively to a Community thread, with replies feeding the same CRM your booking calendar runs on. <strong>Conditional Visibility</strong> shipped the same day for entire layouts &mdash; meaning your private course, your members-only post, and your VIP channel can all be gated by a tag or custom field without a developer rebuilding the wall for every audience.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Five tools just collapsed into one workflow. The button is free. The retainer that was justifying the chain is not.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Two market forces are converging on this release.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                First, <strong>Skool sits at $99/mo for unlimited members</strong>, and Circle and Mighty Networks are still north of $300/mo at any scale that matters. Owned community is no longer a luxury build &mdash; it&apos;s a $97-line-item on a stack most SMBs already own.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Second, the demand signal is screaming for it. <strong>82% of small business employers have invested in AI tools</strong> per the SBE Council&apos;s 2026 survey, <strong>66% report saving $500&ndash;$2,000 per month</strong>, and <strong>61% of owners report operating disruptions from tight labor</strong> per NFIB. Owners are not hiring their way out of the bottleneck &mdash; they are routing customer questions back into systems the customer can self-serve from.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                If your customer can&apos;t find the recording of the call they were on Tuesday, they will call you on Wednesday to ask the same question. That call is now a button you didn&apos;t push &mdash; not a build you needed.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We stopped quoting &ldquo;Community Build&rdquo; as a separate phase.</strong> It ships inside the 3-day build, gated by the CRM the customer already pays for. If GHL ships the button, we don&apos;t bill you to push it.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. Sales calls auto-publish to the right channel.</strong> Every recorded discovery, kickoff, and check-in call routes from the recording library to the matching Community thread with a one-line AI-generated recap. Kills the &ldquo;where can I find that conversation?&rdquo; Slack thread that used to eat your Wednesday.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. We deleted Loom and Notion from the customer-facing layer.</strong> They&apos;re great internal tools. They are no longer in our client deliverables, because the recording, the recap, and the discussion now live in the place the customer already logs into. Every dependency we cut is one less renewal, one less SSO, one less audit log that doesn&apos;t talk to your CRM.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. Conditional Visibility runs the tiers.</strong> VIP, paid, free, trial &mdash; gated by tag, edited once, applied to whole layouts. The &ldquo;we need a developer for the membership wall&rdquo; line item is over.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If GHL turned a recording into a Community post in two clicks, why is my provider still quoting &ldquo;client portal&rdquo; as a separate $5K&ndash;$10K build?</em></span></li>
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If Skool gives me a community for $99 and GHL gives me one inside the CRM I already pay for, what exactly is my agency&apos;s &ldquo;community management retainer&rdquo; buying?</em></span></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If those answers come back vague, you are paying for the friction GHL just deleted.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The agency-services industry spent two years selling the customer community as a strategic build. GHL just turned the build into a button and the strategy into a default. The agencies that win the next twelve months will repackage around what&apos;s <em>left</em> after the platform absorbs the work &mdash; not invoice for the part the platform just made free.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: HighLevel Changelog &mdash; May 22, 2026 (Share Recordings to Communities; Conditional Visibility Enhancements for Layouts); SBE Council 2026 Small Business Tech Use Survey; NFIB Small Business Optimism Index, April 2026; Skool / Circle / Mighty Networks public pricing.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want the Community Build Included, Not Invoiced?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Community setup ships inside the 3-day build. Discovery is free. You don&apos;t pay until the system produces the outcome we agreed on &mdash; not when the button gets clicked.</p>
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
