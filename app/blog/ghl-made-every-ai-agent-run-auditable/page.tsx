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
            <Image
              src={logoSrc}
              alt="TrueFlow"
              width={280}
              height={70}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
              priority
              style={{ maxWidth: '100%', objectFit: 'contain' }}
            />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                Automation
              </span>
              <span className="text-white/40 text-sm">May 5, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Just Made Every AI Agent Run Auditable — and Half the Agencies Don&apos;t Want You Looking
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On May 1, GoHighLevel turned the AI Agent execution log into a structured feedback flow — every reasoning step, every tool call, every token, scored. The &ldquo;trust me, the bot&apos;s working&rdquo; agency pitch just got retired.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  const url = window.location.href
                  const text = "GHL Just Made Every AI Agent Run Auditable — and Half the Agencies Don't Want You Looking"
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm"
              >
                Share on X
              </button>
              <button
                onClick={() => {
                  const url = window.location.href
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm"
              >
                Share on LinkedIn
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm"
              >
                Copy Link
              </button>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On Friday, May 1, alongside the Call Transcript tool and the AI Builder rebuild, GoHighLevel shipped one more thing most agencies skimmed past because the changelog called it &ldquo;Stability Improvements.&rdquo; Inside that release: a structured <strong>Feedback Flow inside the AI Agent execution logs</strong>. Every run produces a trace — every LLM reasoning step, every tool call with inputs and outputs, timestamps, token counts, success or failure. From that trace, you can submit structured feedback flagging what worked, what broke, and feed it straight back into the agent&apos;s evaluation loop.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That doesn&apos;t sound revolutionary. It is. It&apos;s the moment GHL stopped trusting agencies to grade their own homework and built the gradebook into the platform.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What Just Changed (In English)
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Before May 1, when you hired an AI agency to deploy a GHL Conversation AI or Voice AI agent, you got two things back: the bot itself, and a monthly screenshot of &ldquo;engagement metrics.&rdquo; If the bot fumbled a refund request on Tuesday, nobody saw it unless the customer escalated. If it hallucinated a policy that doesn&apos;t exist, you found out three weeks later. The agent was a black box, and the agency liked it that way — because the black box was the moat.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                After May 1, the workflow builder ships an Execution Logs tab that exposes the entire trace. Every reasoning step. Every tool call. Every token. Every failure. Next to that trace: a structured feedback widget where the operator — or the client — can flag a run as wrong, mark what should have happened, and feed it back into the eval loop. The receipts are now standard, the gradebook is now public, and &ldquo;trust me, the bot&apos;s working&rdquo; is no longer a deliverable.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Trend Nobody&apos;s Saying Out Loud
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                This isn&apos;t GHL playing catch-up. It&apos;s GHL aligning with where every serious agent platform pivoted in Q1 2026. Datadog&apos;s March State of AI Engineering report named quality the top barrier to AI agent deployment for 32% of teams running agents in production. Salesforce&apos;s <em>8 Ways AI Agents Are Evolving in 2026</em> lists observability and evaluation infrastructure as the single largest gap between agent prototypes and agent products. IBM&apos;s 2026 Observability Trends paper went further: enterprise teams that don&apos;t ship traces, evals, and governance from day one won&apos;t have agents in production by Q4.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The grown-up software side has known this for six months. The SMB-AI agency space pretended it didn&apos;t apply. GHL just closed that gap inside the tool 1.4 million SMBs already use. Voluntary becomes mandatory the moment your CRM ships the feature for free. Pair that with the labor backdrop: the latest NFIB jobs report flagged 32% of small business owners reporting unfilled openings — well above the 24% historical mean. Owners are leaning harder on automation to cover roles they can&apos;t fill at the wage they can afford. They cannot afford automation that fails silently.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What TrueFlow Is Actually Doing Differently
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. Every build now ships with a &ldquo;Run Review&rdquo; deliverable.</strong> Once a week, for the first 30 days, we pull the execution log of every agent run on a client&apos;s account, review the trace, mark wins and misses, and share the report. The client sees the bot&apos;s actual work — not a vanity dashboard.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We grade our own agents inside the platform&apos;s feedback flow.</strong> GHL&apos;s structured feedback widget is the eval loop. We use it. Our prompts get sharper run-by-run because the platform tells us where the agent reasoned wrong.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">3. We stopped pitching &ldquo;ongoing optimization&rdquo; as a separate retainer line.</strong> The platform is the optimization loop. If we&apos;re charging for what GHL now does for free, we&apos;re charging for nothing. The per-month fee — when it exists — is for new workflows, not for grading old ones.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What You Should Be Asking Right Now
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Ask your current agency: &ldquo;Pull up the AI Agent Execution Logs tab in my workflow builder. Walk me through the last three runs.&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Then: &ldquo;Show me how you used the Feedback Flow on an agent build last week. What did you flag, what changed because of it?&rdquo; If they can&apos;t do either in five minutes, they&apos;re not building agents in 2026. They&apos;re selling 2024 deliverables on a 2026 platform.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Takeaway
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                The interesting AI agency in May 2026 isn&apos;t the one with the cleanest landing page or the longest tool stack. It&apos;s the one that wants you looking at every run. The platforms have closed the &ldquo;you&apos;d never check anyway&rdquo; loophole. The receipts are free. The gradebook is built in. Anyone still selling opacity is selling 2024.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Want Full Visibility Into Every Agent Run?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We build with the execution logs open from day one. You see every trace, every decision, every result — not a monthly screenshot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Take the Free Assessment
              </Link>
              <Link
                href="https://trueflow.ai"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors"
              >
                See If You Qualify
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
