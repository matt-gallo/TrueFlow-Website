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
              <span className="text-white/40 text-sm">May 15, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Salesforce Just Shipped Multi-Agent Back-Office Orchestration. The Single-Agent Pitch Most Agencies Sell Just Got Buried.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Agentforce Operations shipped with specialist agents handing work to each other and 70% cycle-time cuts. The unit of value just changed — here&apos;s what TrueFlow builds for SMBs in 3 days instead.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Salesforce Just Shipped Multi-Agent Back-Office Orchestration. The Single-Agent Pitch Most Agencies Sell Just Got Buried."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On April 29, Salesforce shipped <strong>Agentforce Operations</strong> to general availability. It&apos;s not one agent. It&apos;s a fleet of them — a compliance-check agent, an approval-routing agent, a data-verification agent, a supply-chain coordinator — all handing work to each other inside a single orchestrated workflow. Salesforce is publicly claiming <strong>70% cycle-time cuts and 80% fewer manual back-office tasks</strong>.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The headline isn&apos;t what each agent does. It&apos;s that the agents <em>coordinate</em>. The build everyone has been quoting — &ldquo;we&apos;ll set you up a custom AI agent&rdquo; — just got packaged at the enterprise tier as the wrong shape entirely.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                For two years the agency pitch has been one agent doing many jobs. That&apos;s not how Salesforce shipped it. Agentforce Operations is <strong>specialist agents with clean handoffs</strong> — each one narrow, each one auditable, each one with a defined input and output. The agent that verifies the data doesn&apos;t approve the deal. The agent that routes approvals doesn&apos;t run compliance. They pass work between each other under a controller.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The cycle-time gains aren&apos;t from any single agent being smarter. They&apos;re from the <em>orchestration</em> — the work moving cleanly between five narrow brains instead of stalling inside one wide one. That&apos;s the shape that won. Same release window, Salesforce shipped <strong>Testing Center custom scoring evals</strong> — brand voice, compliance, and resolution quality, run via multi-turn simulations before any agent touches a customer. The enterprise multi-agent stack now ships with a built-in graded test harness.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Agencies still pitching &ldquo;we&apos;ll spin up a custom AI agent&rdquo; are selling the 2024 shape into a 2026 market. The buyer doesn&apos;t always know that yet — but the operations director who used Agentforce at her last job before joining a 12-person services firm absolutely does.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">One — we stopped scoping single-agent builds.</strong> Every project now ships as an agent team inside GHL workflows: intake, qualification, scheduler, follow-up, reporting. Each is a separate AI Agent action doing one job. They hand off inside the workflow. You get the Salesforce orchestration pattern without the Salesforce per-seat bill.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Two — we run evals before we ship, not after.</strong> Every agent gets a scoring rubric — brand voice, accuracy, handoff cleanliness — and a 20-conversation test run against synthetic personas before it sees a live lead. If a node scores below threshold, we rewrite it.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">Three — we name the controller.</strong> Every agent team has one orchestrator workflow that owns sequencing, retries, and human checkpoints. If something breaks at 11 PM, you know which agent failed and what it was supposed to do next.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;If Salesforce just shipped multi-agent back-office orchestration as the new enterprise default, why is your build still one agent doing nine jobs?&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;Where is the scoring rubric for the agent you&apos;re handing me — and what specifically did it score on brand voice, compliance, and handoff accuracy <em>before</em> it went live?&rdquo; If the answer is a shrug or a screenshot, you&apos;re buying the old shape.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The shift isn&apos;t about Salesforce being cheaper or better. It&apos;s the <strong>unit of value moving from agent to orchestration</strong>. The agent is the easy part. The handoffs, the evals, the controller — that&apos;s where the cycle-time math actually comes from. SMBs don&apos;t need Salesforce to get there. They need the same pattern, built in the tools they already pay for.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Orchestration, Not a Single Agent?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build specialist agent teams with clean handoffs inside GHL — the Salesforce orchestration pattern without the Salesforce per-seat bill. Evals run before you see it.</p>
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
