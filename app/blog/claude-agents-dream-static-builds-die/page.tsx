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
              <span className="text-white/40 text-sm">May 16, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Claude Just Taught Its Agents to Dream. If Your AI Build Stopped Learning at Handoff, You Bought a Souvenir.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Anthropic&apos;s May 2026 Managed Agents wave shipped a research-preview feature called Dreaming — agents that review past sessions and self-improve their own memory. Most AI agency builds freeze on handoff day.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Claude Just Taught Its Agents to Dream. If Your AI Build Stopped Learning at Handoff, You Bought a Souvenir."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 14, Anthropic rolled out the next wave of Claude Managed Agents alongside Opus 4.7. Quietly buried in the release notes was a research-preview feature called <strong>Dreaming</strong>: between sessions, the agent reviews its own prior runs, surfaces patterns, and rewrites the parts of its memory that weren&apos;t pulling weight. Same model, smarter agent, no human in the loop.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That&apos;s a small line on a changelog page. It&apos;s a big swing at the entire AI-agency build model.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Until last week, an &ldquo;AI build&rdquo; was basically a snapshot. Your agency stood up a workflow on Day 1 — prompts, tools, branching, a CRM connection — and from that moment forward the thing was frozen in amber. If a new lead source showed up six weeks later or a sales motion shifted, you opened a ticket and waited.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Dreaming pushes the agent in the other direction. The build doesn&apos;t ship done — it ships <strong>directionally correct and gets better while you sleep.</strong> Conversations from Monday inform Tuesday&apos;s prompts. Failed handoffs become tightened triggers. Repeating questions become new tools. You don&apos;t have to write the SOP because the agent is writing it from its own logs. That&apos;s a different product. And it makes a static build feel like buying a treadmill that doesn&apos;t plug in.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Pricing is shifting under the same builds. A 1H 2026 Futurum survey has <strong>27% of buyers now preferring outcome-based pricing</strong>. Zendesk and Intercom are billing <strong>per successful AI resolution</strong>. Stack those together: self-improving agents on one side, outcome-based invoices on the other. Agencies who shipped a &ldquo;fire and forget&rdquo; automation in 2024 and have been collecting $3k/mo retainers ever since are getting squeezed from both ends — the product they sold is obsolete, and the pricing model they used is indefensible.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We rebuilt our GHL infrastructure to be multi-subaccount and memory-aware per client.</strong> When the agent starts patterning its own memory, you do <em>not</em> want one giant mixed pool; you want clean per-client lanes so improvements compound for that business and don&apos;t leak.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We stopped designing from templates and started designing from sessions.</strong> On a client build this week, we found a cleaner pipeline architecture <em>mid-meeting</em> because we were reviewing actual call recordings instead of slotting them into a prebuilt template. That&apos;s the same instinct Dreaming runs on autopilot.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">3. We kept our outcome-based offer in writing.</strong> Three days. Free build. You don&apos;t pay until you see traction. If our build doesn&apos;t move a number, we don&apos;t get paid. We don&apos;t charge for &ldquo;AI orchestration&rdquo; as a line item. You&apos;re paying for the trained behavior, the per-client memory, and the result — not the YAML file.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;Will the build I&apos;m buying today be measurably better in 60 days without me opening a ticket?&rdquo; If the answer is no, you&apos;re buying a snapshot in a market that just shipped a movie.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;What happens to your invoice if the agent doesn&apos;t produce the outcome you promised?&rdquo; If the answer is &ldquo;nothing&rdquo; — they&apos;re not actually accountable for the thing you hired them for.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The build matters less than the loop. The agencies that survive the next 12 months are the ones that ship systems which improve themselves, on infrastructure they can isolate per client, under contracts that only pay when traction shows up. Everything else is a souvenir from the era when AI was a feature instead of a coworker.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want a Build That Gets Better Without Tickets?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build on per-client memory infrastructure, price only on outcomes, and ship systems that compound — not snapshots that decay.</p>
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
