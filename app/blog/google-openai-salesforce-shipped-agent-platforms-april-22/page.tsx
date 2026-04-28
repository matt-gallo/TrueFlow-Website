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
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} /></Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Google, OpenAI, and Salesforce All Shipped Agent Platforms on April 22 — Here&apos;s the Bet We&apos;re Refusing to Make</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>April 26, 2026</span><span>•</span><span>5 min read</span><span>•</span><span>AI &amp; Technology</span>
            </div>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Google, OpenAI, and Salesforce all shipped agent platforms on April 22.\n\nSMBs are being courted with stacks they can't actually operate. Here's the bet we're refusing to make.\n\n#AIAgents #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </a>
              <button onClick={() => { const u = typeof window !== 'undefined' ? window.location.href : ''; if (navigator.share) { navigator.share({ title: "Google, OpenAI, and Salesforce Shipped Agent Platforms — Here's the Bet We're Refusing", url: u }) } else { navigator.clipboard.writeText(u); alert('Link copied!') } }} className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-white/80">On April 22, three of the biggest names in enterprise software pushed competing &quot;agent platforms&quot; into production inside 24 hours. OpenAI launched ChatGPT Workspace Agents. Google opened Cloud Next 2026 by renaming Vertex AI to the <strong className="text-white">Gemini Enterprise Agent Platform</strong> and shipping the A2A (Agent-to-Agent) protocol to 150 organizations. Salesforce and Google announced Agentforce wired directly into Gemini.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">Three press releases. One day. Same word in every headline: <em>agents</em>. For a small business owner skimming the trade press, this looks like good news — more options, more competition. It is not. It&apos;s the moment the agent layer fragmented, and the bill for choosing wrong is going to land on SMBs first.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What Just Changed (In English)</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">As of April 22, agents are software that runs inside your CRM, your inbox, your Slack, and your help desk — and talks to other agents on your behalf. These platforms — Workspace Agents, Agentforce-Gemini, Gemini Enterprise — are not designed for a 12-person services business. They&apos;re designed for the IT department of a 12,000-person enterprise. SMB owners are exactly the buyers who <em>need</em> agents, and exactly the buyers being courted with platforms they&apos;ll never operate.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We will not lock a client into a proprietary agent layer.</strong> No Workspace Agents implementations. No Agentforce-only builds. The lock-in risk for an SMB whose entire pipeline lives inside one vendor&apos;s runtime is not worth the 90 days of velocity you save up front.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We build on GHL because it&apos;s a CRM, not a platform bet.</strong> GHL&apos;s AI Agent action already supports MCP tool connections. Whatever wins the standards war — A2A, MCP, both — your follow-up logic and contact data don&apos;t have to be re-platformed.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We use MCP for tool integrations and treat A2A as wait-and-see.</strong> A2A at 150 orgs is real but early. We&apos;re not committing client systems to a protocol whose v1 governance hasn&apos;t survived a real conflict yet.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80"><strong className="text-white">The bet we&apos;re refusing:</strong> &quot;Build your own agent in five minutes.&quot; You can build one in five minutes. You cannot <em>operate</em> one. The cost of an agent that books the wrong appointment or replies to the wrong lead is paid in customer trust, not compute.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Takeaway</h2>
              <p className="text-lg leading-relaxed mb-8 text-white">The agent layer isn&apos;t consolidating. It&apos;s fragmenting. April 22 was day one of a multi-year standards war. The right move for an SMB is not to pick a side — it&apos;s to keep your data, your CRM, and your follow-up logic in places that are agnostic to whichever side wins.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4">Get Your Sales System Built in 3 Days — Free</h2>
            <p className="text-xl mb-8 text-white/80">Take the free 2-minute AI Readiness Assessment — get a personalized report on your top automation opportunities.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/ai-readiness-assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1">Take the Free Assessment →</a>
              <a href="/sign-up" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">See If You Qualify</a>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
