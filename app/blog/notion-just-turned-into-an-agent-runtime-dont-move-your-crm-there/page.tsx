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
              <span className="text-white/40 text-sm">May 21, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Notion Just Turned Into an Agent Runtime. Don&apos;t Move Your CRM There.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Notion launched Workers, an External Agents API, and Database Sync on May 13. Here&apos;s the one workflow SMBs should move there, the three they shouldn&apos;t, and why the customer relationship stays in the CRM.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Notion Just Turned Into an Agent Runtime. Don't Move Your CRM There."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 13, 2026, Notion shipped its Developer Platform — <strong>Workers</strong> (a hosted code runtime), an <strong>External Agents API</strong>, <strong>Database Sync</strong> to systems like Salesforce, Zendesk, and Postgres, and a CLI called <code>ntn</code>. Eight days later, more than a million agents are running inside Notion workspaces, Custom Agents went paid at <strong>$10 per 1,000 credits</strong>, and the AI-agency timeline is already shouting <em>&ldquo;move everything to Notion.&rdquo;</em>
              </p>
              <p className="text-white/80 leading-relaxed mb-8">Don&apos;t.</p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">Notion is no longer just a doc tool. As of last week it&apos;s also:</p>
              <ul className="text-white/80 mb-6 space-y-2 pl-6 list-disc">
                <li><strong>A code runtime.</strong> Workers run custom code inside a Notion-hosted sandbox at roughly $0.0023 per run — about 4,348 runs per $10 of credits.</li>
                <li><strong>An agent host.</strong> The External Agents API lets Claude, Codex, Decagon, and any custom agent show up <em>inside</em> the workspace.</li>
                <li><strong>A data bridge.</strong> Database Sync pulls live data from any API-enabled system of record into a Notion database and keeps it current.</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                That combination is going to ship 80% of the &ldquo;we should build an internal AI tool&rdquo; projects sitting on operations roadmaps. Most teams are already in Notion all day. Of course they&apos;re going to build there. The mistake is going to be <em>what they build there.</em>
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The NFIB Small Business Optimism Index sat at <strong>95.9 in April 2026</strong>, below the 52-year average of 98.0. 34% of small businesses report unfilled job openings. SMB owners are routing around the bottleneck. Notion just put a button on that exact move. Here&apos;s the problem: when the only tool a founder can &ldquo;ship something&rdquo; in is their wiki, they start treating the wiki like the operating system. By July, half the people reading the Notion launch will be migrating contacts, opportunities, and call notes into a doc app. That&apos;s the move that&apos;s about to get sold to them. It&apos;s the wrong one.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">We&apos;ve been deploying Notion Workers since the beta, and we&apos;ve built a hard line about what we will and won&apos;t build inside them.</p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Notion stays where it belongs — internal triage, knowledge, summaries.</strong> We&apos;ll happily ship a Worker that reads your GHL pipeline through our 73-tool MCP server, summarizes the last 24 hours of opportunities, and posts a digest into a Notion page your team actually opens at 9 AM. Pennies per run. High-leverage. That is the right job for the new runtime.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We will not move your CRM into Notion.</strong> Notion does not have a phone, a calendar booking engine, billing, deliverability, or compliance scope for being a system of record on customer data. GoHighLevel does. We keep customer relationships, pipeline state, conversation history, and payments inside the subaccount that already owns them. Notion gets the summary, not the source of truth.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">External Agents API, scoped — not yolo&apos;d.</strong> When Claude shows up inside a client&apos;s Notion, it&apos;s calling the same subaccount-scoped MCP server we already operate. The agent can read across the workspace, but it cannot invent contacts, dispatch SMS, or run a charge from inside a Notion comment.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">Workers are billed inside the client account, not ours.</strong> We deploy into your workspace, against your credits, with your CLI auth. If you part ways with us, the Workers keep running and the agents stay yours.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;If our agent has to choose between writing to Notion and writing to our CRM, which one is the system of record — and who decided?&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;Are we paying a Worker to summarize a CRM we already pay for, or are we quietly trying to replace the CRM with a wiki and hoping no one notices when a renewal slips?&rdquo; If the answers are fuzzy, you don&apos;t have a Notion strategy. You have a future migration project disguised as a productivity win.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Notion just gave small businesses a real, well-priced agent runtime, and that is genuinely a gift. The mistake is treating <em>&ldquo;I can run code in Notion&rdquo;</em> as a license to move ops there too. Workspaces summarize. CRMs transact. Keep the line clean, and the Developer Platform is one of the best things that happened to SMB automation this year. Blur it, and you&apos;ll spend Q4 migrating data back to a system you should never have left.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want the Right Tool for the Right Job?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We keep CRM data in the CRM and use Notion for what it&apos;s actually good at — summaries, triage, knowledge. Deployed in your workspace, billed to your credits, owned by you.</p>
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
