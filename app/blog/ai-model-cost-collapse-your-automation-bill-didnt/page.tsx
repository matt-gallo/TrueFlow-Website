'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-model-cost-collapse-your-automation-bill-didnt'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Intelligence Under Your Automation Got 10x Cheaper This Year. Your Bill Didn't."

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between px-6 py-6 max-w-4xl mx-auto">
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={140} height={35} className="h-8 w-auto" /></Link>
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">← Back to Blog</Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Playbook</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 10, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Intelligence Under Your Automation Got 10x Cheaper This Year. Your Bill Didn&apos;t.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              On July 8 OpenAI put GPT-5.6-level intelligence on the market at half the old price, and raw model costs have fallen roughly 80% since 2023. So why is your automation invoice going up? Here&apos;s who&apos;s pocketing the difference &mdash; and the one question that finds out.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On July 8, OpenAI said it would publicly release its GPT-5.6 lineup this week &mdash; and the headline number wasn&apos;t the intelligence, it was the price. The mid-tier model, Terra, delivers roughly the same capability as last cycle&apos;s flagship at about half the cost. That&apos;s not a one-off. GPT-4-class inference that ran near $30 per million tokens two years ago now costs under $3. The raw intelligence powering your automations has gotten about 10 times cheaper since 2023, and it keeps dropping.</p>
              <p>Now look at your software bill. The average small business now spends around $156 per user per month on SaaS, up from $112 in 2023, and 41% of owners say their software costs went <em>up</em> in the last year. Two lines on the same graph, moving in opposite directions: the cost of the AI is collapsing, and the amount you pay for AI-powered tools is climbing.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>The thing your automations actually run on &mdash; the model &mdash; is now a cheap, fast-moving commodity. OpenAI shipped Terra at half the old price. Anthropic launched Claude Sonnet 5 on June 30 at $2 per million tokens on the way in. Google&apos;s newest image models generate for pennies per thousand. Every few weeks, the engine under the hood gets cheaper or better or both.</p>
              <p>But your invoice doesn&apos;t know that, because most tools and most agencies didn&apos;t price you on the engine. They priced you on a flat monthly retainer or a per-seat plan set back when tokens cost ten times more. When the underlying cost drops 80%, that saving lands somewhere. The uncomfortable part: if nobody renegotiated anything, it landed in your vendor&apos;s margin, not your pocket.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>We treat the model as a swappable part, not the product. The automation is the asset &mdash; the follow-up sequence, the intake process, the reporting agent. The model underneath is an engine we can pull out and replace the week a cheaper or smarter one ships, without rebuilding what you rely on.</p>
              <p>We do this on our own systems in real time. Last week we were mid-discussion about ripping the image model out of one of our internal tools and dropping in a newer, cheaper API to fix quality and cut cost at the same time. That&apos;s the posture: read the release notes, run the math, swap the part. Same output for you, lower cost for us &mdash; and because we price the outcome, not the tokens, we&apos;re not quietly billing you 2023 prices for 2026 inference.</p>
              <p>Here&apos;s the line another agency will push back on: if your automation is hard-wired to one vendor&apos;s model and can&apos;t be swapped without a rebuild, you don&apos;t own a system &mdash; you own a bet that that vendor&apos;s price never moves against you. It always does.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Two questions. First: when the model powering your tools got cheaper this year, did your invoice move at all? If it didn&apos;t, ask who kept the difference. Second: is anything you run locked to a single model, or can whoever operates it swap the engine when a better one lands? If the answer is &ldquo;we&apos;d have to rebuild,&rdquo; that&apos;s not resilience &mdash; it&apos;s a repricing risk with your name on it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Falling model costs are the best news small businesses have had in years, but the savings don&apos;t reach you automatically. They reach you only if someone is watching the changelogs, doing the math, and building your systems so the cheap new engine drops right in. Intelligence is getting cheaper every quarter. Make sure your bill is on the same graph.</p>
              <p className="text-white/70 italic">If you&apos;d like help figuring out whether the AI under your systems is priced like a commodity or a markup, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: OpenAI GPT-5.6 release (CNBC, July 8, 2026); AI/SaaS pricing and token-cost trends (Monetizely 2026 Pricing Guide; ValueShips, 2026); SMB SaaS spend (Zylo SaaS statistics, 2026); Claude Sonnet 5 pricing (Anthropic, June 30, 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Is your AI priced like a commodity or a markup?</h3>
            <p className="text-white/60 mb-6">We&apos;ll help you find out whether the models under your systems can be swapped as they get cheaper &mdash; or whether you&apos;re locked into last year&apos;s prices.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
