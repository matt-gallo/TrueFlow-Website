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
              <span className="text-white/40 text-sm">May 12, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                OpenAI Started Charging for Workspace Agents on May 6. Most Agencies Are Quoting You for the $20 Part.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              ChatGPT&apos;s Salesforce/Slack/Notion agent just hit paid pricing the same week HubSpot&apos;s MCP went GA. The agent shell is now a $20/seat commodity — here&apos;s what changed in our scopes the day the meter turned on.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "OpenAI Started Charging for Workspace Agents on May 6. Most Agencies Are Quoting You for the $20 Part."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 6, OpenAI flipped the meter on <strong>Workspace Agents</strong> — the Codex-powered agents that live inside ChatGPT and plug directly into Slack, Salesforce, Google Drive, Microsoft 365, Notion, and Atlassian Rovo. They launched April 22 as a free research preview. Two weeks later, credit-based pricing kicked in on a $20/user ChatGPT Business seat.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That same week, HubSpot&apos;s <strong>remote MCP server went GA</strong> — any MCP-compatible client can now read and write the entire HubSpot CRM with structured, permission-aware natural language calls. The agent isn&apos;t a project anymore. It&apos;s a SKU.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                For two years, the AI agency pitch has looked like this: <em>&ldquo;We&apos;ll build you a custom agent for your CRM. Six weeks. $15K to $50K. Maybe a retainer on top.&rdquo;</em> As of last Wednesday, the agent shell that talks to your CRM ships with a ChatGPT Business seat. GoHighLevel did the equivalent in March. Salesforce did it in February. The build everyone was paying for — <em>we&apos;ll connect an agent to your customer data</em> — is now a checkbox in a $20/user subscription.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That&apos;s not a death sentence for done-for-you AI work. It&apos;s a death sentence for a specific <em>kind</em> of done-for-you AI work — the kind where the deliverable was the agent.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The agent was never the expensive part. What&apos;s expensive — and what nobody&apos;s productizing — is the <em>operational fit</em>. Which 3 of your 17 systems should the agent actually touch on day one? Which actions get approved automatically and which get held for a human? When the agent guesses wrong on a lead score, who notices and who fixes the prompt? When your VA quits, which 14 workflows fall over because they were undocumented in her head? That work has never been a SKU. Every agency still leading with <em>&ldquo;we build custom AI agents&rdquo;</em> is selling you the $20 piece. The $20 piece now ships from OpenAI with a credit card on file.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">One — we stopped quoting &ldquo;agent builds.&rdquo; We quote outcomes wired into existing agents.</strong> The ChatGPT Workspace Agent is yours. The GHL AI Agent is yours. The Breeze agent is yours. Our job is deciding which one runs which workflow, which data each one is allowed to touch, and where the human checkpoints live. We don&apos;t bill for what&apos;s already in your subscription.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Two — every build now ships with a one-page Kill List.</strong> The MCP era means the agent technically <em>can</em> do almost anything. That&apos;s the bug, not the feature. The Kill List is the explicit set of things the agent won&apos;t decide alone — refunds over $X, status changes on accounts in escalation, outbound to anyone with an open complaint.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">Three — the first $20 of any new build is the model subscription, and we don&apos;t mark it up.</strong> Other agencies bury that $20 in a $4K line item called &ldquo;AI inference.&rdquo; We refuse to.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;ChatGPT Business is $20/user and already connects to my Salesforce via MCP. What specifically am I paying you the other $4,980 for?&rdquo; If the answer is &ldquo;the agent,&rdquo; walk. If the answer is which workflows it runs, which actions it skips, and which mistakes get caught — that&apos;s a real build.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;Show me my Kill List.&rdquo; If they don&apos;t have one, the agent is one bad prompt away from emailing a refund offer to your top 50 accounts.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The agent has joined the commodity layer. It now lives next to web hosting, email sending, and SMS routing — a line item, not a project. The agencies that survive the next two quarters are the ones who never sold the agent in the first place. They sold the <em>fit</em>. Everyone else is about to look like the people charging $5K to install WordPress in 2014.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want the Fit, Not Just the Agent?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We wire the agents you already own to the outcomes you actually need — with a Kill List on day one and no markup on the $20 subscription.</p>
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
