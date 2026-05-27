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
              <span className="text-white/40 text-sm">May 26, 2026</span>
              <span className="text-white/40 text-sm">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                HubSpot&apos;s &ldquo;Run Agent&rdquo; Workflow Action Just Hit Private Beta. Four Major CRMs Now Sell The AI Agent As One Workflow Line. The Custom Build Is Cooked.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              HubSpot quietly opened the private beta on its Run Agent workflow action this spring &mdash; the same pattern GHL, Salesforce, and Microsoft already shipped. With Breeze billing $10 per 1,000 credits and SMB owners staring down a $6,214 median onboarding cost, the $25K custom agent build pitch just lost the room.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "HubSpot's 'Run Agent' Workflow Action Just Hit Private Beta. Four Major CRMs Now Sell The AI Agent As One Workflow Line. The Custom Build Is Cooked."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                HubSpot opened the private beta on its <strong>Run Agent workflow action</strong> this spring &mdash; a single Breeze step you drop into any workflow, pick an agent from a dropdown, and route the output to the next step. No middleware. No custom code. That makes it the <strong>fourth major CRM in six weeks</strong> to turn AI agent invocation into one line of workflow config &mdash; alongside GoHighLevel&apos;s AI Agent action, Salesforce Agentforce Operations (April 16), and Microsoft Agent 365 in Dynamics.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Stop selling custom agent builds. The platforms just made that line item embarrassing to quote.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                For two years the B2B sale was: &ldquo;We&apos;ll build you a custom AI sales agent. $18K&ndash;$25K upfront, $2K&ndash;$3K a month to run it.&rdquo; It worked because CRMs had no native way to invoke an agent. You needed Zapier, n8n, or a custom Node script gluing it to the stack.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That gap closed. Every major CRM now ships a &ldquo;Run Agent&rdquo; step in the workflow editor. HubSpot&apos;s is in private beta, GA likely Q3. Agent picked from a dropdown. Context passed via merge fields. Output written back with a click. A revops manager who can configure &ldquo;Send Email&rdquo; can now configure &ldquo;Run Agent&rdquo; &mdash; same UX.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The agent is no longer the project. The platform owns the runtime. Your job is designing which agents run when, on what data, against what outcome &mdash; a different skill set, and a fraction of the work the old &ldquo;custom agent&rdquo; SOW described.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Pricing is the other half. HubSpot&apos;s Breeze runs on a <strong>credit model: $10 per 1,000 credits</strong>, with each agent burning credits at a different rate. Run Agent inherits the meter. So does Salesforce Agentforce ($2 per conversation), and Zendesk ($1.50&ndash;$2.00 per resolution, since May 19). The Run Agent action isn&apos;t just a UX win &mdash; it&apos;s a billing wedge that puts every agent invocation on the platform&apos;s tab, not the agency&apos;s.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Stack the macro layer. The <strong>2026 SMB workforce cost data</strong> pegs median onboarding at <strong>$6,214</strong> &mdash; effectively pricing most small businesses out of one new hire per quarter. NFIB&apos;s April print: <strong>32% of owners with unfilled jobs</strong>, <strong>27% unable to staff skilled roles</strong>, and <strong>72% of employers under 1,000 headcount now rank medical costs the #1 stressor</strong> &mdash; first time since 2022.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The SMB owner is not in the mood for a $20K custom agent line item when the CRM ships the invocation as a dropdown and meters runtime in dollar-cents.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We stopped quoting &ldquo;agent build&rdquo; as a line item.</strong> If the agent runs as a workflow step on the platform the client already pays for, we don&apos;t charge $18K to write a dropdown. We charge for orchestration design, context engineering, and outcome ownership.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We deploy where the client already is.</strong> HubSpot &rarr; Breeze. GHL &rarr; AI Agent action. Salesforce &rarr; Agentforce. No Zapier-and-n8n middleware tier when the CRM has the invocation native.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. We meter our fee against the platform&apos;s unit.</strong> HubSpot burns credits. GHL burns conversation-AI credits. Our retainer floats on top of that meter &mdash; not a fixed monthly hiding the variance.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. The 3-day build is now orchestration, not invocation.</strong> Day 1: map workflows and pick insertion points. Day 2: wire the Run Agent steps and write context. Day 3: wire the outcome SLA and the credit ceiling. What used to be a 6-week SOW. We don&apos;t bill until the client sees traction.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If HubSpot, GHL, Salesforce, and Microsoft all ship the AI agent as a single workflow step, what specifically is my agency building that the dropdown doesn&apos;t already do?</em></span></li>
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>Who owns the credit budget &mdash; me, or the agency hiding it inside their retainer? If they can&apos;t show you the credit burn per workflow, the markup is the budget.</em></span></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If they can&apos;t answer either, you&apos;ve found the line item you can cut tomorrow.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The AI agent stopped being the project the day every CRM shipped a &ldquo;Run Agent&rdquo; step. HubSpot&apos;s private beta closes the last gap. The agencies surviving the back half of 2026 already moved upmarket &mdash; from &ldquo;we&apos;ll build you an agent&rdquo; to &ldquo;we&apos;ll design which agents run, against which outcomes, on the credit budget you can defend to your CFO.&rdquo; Everyone else is selling a $25K wrapper on a $10-per-1,000-credit dropdown. That math doesn&apos;t survive the next renewal.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: HubSpot product team and partner-network coverage of the Breeze Run Agent workflow action private beta (spring 2026); HubSpot Breeze pricing page, &ldquo;$10 per 1,000 credits&rdquo; (May 2026 update); GoHighLevel changelog, AI Agent workflow action GA; Salesforce Agentforce Operations launch (April 16, 2026); Zendesk Relate 2026 keynote (May 19, 2026); 2026 SMB Workforce Cost Report; NFIB Small Business Optimism Index, April 2026.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Orchestration Design, Not a $25K Build SOW?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We wire the Run Agent steps and own the outcome. Discovery is free. You don&apos;t pay until the system produces the result we agreed on &mdash; not when the dropdown is configured.</p>
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
