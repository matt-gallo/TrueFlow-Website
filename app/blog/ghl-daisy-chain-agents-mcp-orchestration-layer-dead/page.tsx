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
              <span className="text-white/40 text-sm">May 27, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Just Gave Workflow Agents 8,000 MCP Tools And A Daisy-Chain. The Orchestration Layer Was The Last Markup Left.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              GoHighLevel&apos;s May 2026 release lets one AI Agent step trigger another, with Zapier MCP wired in for 8,000+ external tools &mdash; all inside a Workflow. The standalone CrewAI/LangGraph &ldquo;orchestration layer&rdquo; agencies have been billing for is now a dropdown.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL Just Gave Workflow Agents 8,000 MCP Tools And A Daisy-Chain. The Orchestration Layer Was The Last Markup Left."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                GoHighLevel shipped the AI Agent workflow action with full MCP support this month. As of the May 2026 release, the agent step inside a Workflow comes pre-loaded with native GHL actions &mdash; opportunity updates, contact creation, SMS sending, one-time link generation &mdash; and now accepts MCP connections to <strong>Zapier (8,000+ tools), Make, Composio, or any custom MCP server you point it at</strong>. Natively integrated apps include Airtable, Basecamp, Monday.com, Notion, Google Forms, Google Contacts, Open Router, and Manus.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The headline feature most agencies missed: <strong>one agent can trigger the next</strong>. Daisy-chain a research agent into a writer agent into a Slack notifier into a CRM updater, inside one workflow, with no external orchestrator. That single capability obsoletes a category of agency work that was billed all of 2025.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                A year ago, if you wanted multiple AI agents handing off to each other &mdash; agent A pulls intent data, agent B writes the outreach, agent C books the call &mdash; you needed CrewAI, LangGraph, or a custom Node script running outside the CRM. Agencies billed $4K&ndash;$8K to &ldquo;stand up the orchestration layer&rdquo; and another $1,500/month to babysit it. The orchestration was a separate product on the SOW.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                GHL just made that a dropdown. You add an AI Agent step, write the prompt, pick the tools (native or via MCP), and connect the output to another AI Agent step. The workflow editor handles the orchestration. The runtime is GHL&apos;s. The retainer for &ldquo;managing the agent stack&rdquo; no longer maps to a deliverable.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Stack this against where pricing is moving. Futurum&apos;s 1H 2026 vendor survey shows <strong>43% of buyers now prefer consumption-based pricing and 27% prefer outcome-based</strong> &mdash; seat-based collapsed to 15%. Zendesk&apos;s Autonomous Service Workforce launched May 11 at <strong>$1.50&ndash;$2.00 per automated resolution</strong>. Intercom Fin sits at <strong>$0.99 per resolved conversation</strong>. HubSpot&apos;s Breeze Prospecting Agent runs at <strong>$1 per qualified lead</strong>.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                When a buyer is being quoted <strong>$1 per lead</strong> by HubSpot and <strong>$0.99 per resolution</strong> by Intercom on the same Tuesday they&apos;re being told their custom orchestration build is $7,500 plus a $1,500 monthly retainer, the conversation ends. The market is publishing per-outcome numbers and the orchestration line item has no per-outcome equivalent. It is the last unmetered piece of the stack.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The agencies still quoting orchestration as a separate phase are pricing against a market that closed.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. No external orchestrator unless GHL can&apos;t do it natively.</strong> Every agent chain we build now lives inside a single GHL Workflow with daisy-chained AI Agent steps. We pull Zapier MCP in when we need a tool outside the native catalog &mdash; we don&apos;t pull in n8n or CrewAI just to look sophisticated.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We stopped quoting &ldquo;agent stack management&rdquo; as a retainer.</strong> If the runtime is GHL&apos;s, the babysitting is GHL&apos;s too. Charging a monthly fee to log into a workflow editor and toggle steps is a 2024 line item.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. Pricing follows the platforms.</strong> Our offer is <em>built in 3 days, free until you see traction.</em> That mirrors what Zendesk and Intercom are doing &mdash; outcome-tied. If we ever quote a fixed retainer, it is because the client asked us to predict spend, not because we are protecting margin.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. We teach the workflow before we leave.</strong> The client owns the chain. They can see every agent step, every MCP connection, every handoff. No black-box orchestrator they can&apos;t audit and we can&apos;t be fired from.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If GHL now runs daisy-chained agents natively, why is my current provider still quoting CrewAI or LangGraph as a &ldquo;platform layer&rdquo;?</em></span></li>
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>Can my agency tell me, in one sentence, what outcome each AI Agent step in my workflow produces &mdash; or is &ldquo;the orchestration&rdquo; being sold as the deliverable?</em></span></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If they can&apos;t answer those cleanly, the orchestration layer in your contract is overhead, not infrastructure.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Every release cycle this year has deleted one more billable line from the typical AI agency invoice. Integration setup went on May 21. Single-agent custom builds went in April. The orchestration layer went this month. What&apos;s left is the part nobody can platform-ize: knowing which agents to chain, what outcomes to wire them to, and how fast you can prove it works. That is the only thing worth pricing now. Everything else, GHL just shipped for free.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: HighLevel Changelog and Help Portal &mdash; May 2026 release notes for the AI Agent workflow action and MCP server integration; Futurum Group 1H 2026 vendor pricing survey; Zendesk, Intercom, and HubSpot public per-outcome AI pricing pages.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Agent Chains Built Right, Not Invoiced Separately?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Orchestration ships inside the 3-day build. Discovery is free. You don&apos;t pay until the agent chain produces the outcome we agreed on &mdash; not when the daisy-chain connects.</p>
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
