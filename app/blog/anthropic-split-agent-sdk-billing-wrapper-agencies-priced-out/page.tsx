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
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">AI Tools</span>
              <span className="text-white/40 text-sm">May 17, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Anthropic Just Split Agent SDK Billing From the $200 Claude Plan. The Wrapper Agency Has Until June 15.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On May 14, Anthropic announced that Claude Agent SDK usage stops counting against Claude Pro/Max subscriptions on June 15 — moving to a fixed credit billed at API rates. The AI agency model built on personal $200 plans just got a 60-day eviction notice.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Anthropic Just Split Agent SDK Billing From the $200 Claude Plan. The Wrapper Agency Has Until June 15."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 14, Anthropic announced a quiet but enormous change to how the Claude Agent SDK is billed. Starting June 15, <strong>programmatic usage no longer counts against your Claude Pro, Max, Team, or Enterprise plan</strong>. Subscription limits are reserved for interactive use — Claude Code, Cowork, Claude.ai. Agent SDK and <code>claude -p</code> get their own monthly credit pool, $20–$200 by plan, non-rollover, billed at API rates once it runs out.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                A $200 Claude Max plan that used to absorb thousands of dollars of agent runtime becomes $200 of API credit, hard cap. The Community Note math already pegs the effective increase for serious workloads at 12x–175x. The &ldquo;build a workflow on a personal Claude plan and bill the client a retainer&rdquo; model has 28 days left.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Until last week, a lot of AI agencies were running client workloads through their own $200/month Claude Max plan. The retainer pricing made sense because the model cost was effectively zero. Anthropic just pulled the subsidy. From June 15 forward, if the agent runs on the SDK, it bills against a separate $20–$200 bucket. After that empties, every token bills at list price ($3/$15 per million on Sonnet, $15/$75 on Opus).
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong>This isn&apos;t a price hike. It&apos;s a re-categorization.</strong> Anthropic is drawing a line between humans-in-a-chat-window and code-talking-to-code, and saying the second one pays its own way. Same move every cloud provider made when the free tier got abused.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Three repricings in three days: May 13, GoHighLevel raised SMS and Voice rates. May 14, Anthropic splits Agent SDK billing, effective June 15. May 12, NFIB&apos;s April survey confirms 46% of small business owners report few or no qualified applicants. All pointing the same direction: the cheap, unmetered version of every channel agencies sell on top of — chat, SMS, voice, model calls — is over. Agencies who built pricing on &ldquo;we&apos;ll glue Claude to your CRM for $2,500/month&rdquo; are about to discover their margin was the subsidy.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We build inside the CRM, not on top of it.</strong> Our agents run as native GoHighLevel AI Agent actions or workflow triggers — they don&apos;t burn API tokens on every step. The model gets called only where it genuinely outperforms a rule.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We stopped quoting &ldquo;AI seats.&rdquo;</strong> The retainer math that worked at $0 marginal cost doesn&apos;t work at API rates. We price the outcome — the booked call, the routed lead, the recovered invoice — and eat the model cost.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">3. We never run client agents on personal Claude plans.</strong> Workspace API keys with billing alerts. The June 15 cutover changes nothing for our existing builds because they weren&apos;t wired that way.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;After June 15, whose API key is running our workflows, and what&apos;s the per-run cost?&rdquo; If the answer is &ldquo;ours, on Claude Max,&rdquo; you need a new agency by mid-June.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;Is what you charge me tied to the work we got done, or to your access to the tool?&rdquo; If it&apos;s the second one, the next twelve months get uncomfortable.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Every wrapper agency had a clock on it the moment models got commodified. May 14 just put a date on the clock. The agencies that survive aren&apos;t the ones with the best Claude prompts — they&apos;re the ones who already moved their value out of the model call and into the system around it. Build on the CRM. Price the outcome. Don&apos;t run your clients on your personal plan.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want an Agency That Survives June 15?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build inside your CRM, run on workspace API keys, and price per outcome — not per seat, not on a personal plan. The billing change is already priced in.</p>
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
