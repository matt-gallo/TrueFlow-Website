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
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Best Agent Won&apos;t Come From Your CRM — HubSpot Just Said It Out Loud</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>May 6, 2026</span><span>•</span><span>4 min read</span><span>•</span><span>AI &amp; Technology</span>
            </div>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("HubSpot just publicly said \"the best agent will often come from the ecosystem, not from us.\"\n\nThe platform is the plumbing. The specialist intelligence comes from somewhere else.\n\n#HubSpot #AIAgents #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </a>
              <button onClick={() => { const u = typeof window !== 'undefined' ? window.location.href : ''; if (navigator.share) { navigator.share({ title: "The Best Agent Won't Come From Your CRM — HubSpot Just Said It Out Loud", url: u }) } else { navigator.clipboard.writeText(u); alert('Link copied!') } }} className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-white/80">On Monday, May 4, HubSpot&apos;s Chief Product and Technology Officer Duncan Lennox published a strategy note titled &quot;Our Vision for Building an Open Ecosystem for the Agent Era.&quot; Buried three paragraphs in is a sentence most CRM founders would never let through legal:</p>
              <blockquote className="border-l-4 border-cyan-400 bg-white/5 rounded-r-xl px-6 py-4 mb-8">
                <p className="text-lg italic text-white/90 m-0">&ldquo;The best agent for a specialized industry or workflow will often come from the ecosystem, not from us.&rdquo;</p>
              </blockquote>
              <p className="text-lg leading-relaxed mb-8 text-white/80">Read that twice. A multi-billion-dollar CRM with its own first-party agent suite — Breeze — just publicly conceded that for vertical work, somebody else&apos;s agent will win. The same announcement confirmed HubSpot&apos;s MCP server and APIs are now live, with native connectors already running for Claude, ChatGPT, Gemini, and Copilot. They&apos;re handing the keys over.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What Just Changed (In English)</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">For 18 months every CRM sold the same story: their AI is the only AI you&apos;d need. Breeze, Agentforce, GHL&apos;s AI Employee — buy the platform, the platform handles everything from prospecting to ticket resolution. No plug-ins required. That story died on May 4. HubSpot is the first major CRM to publicly admit it. Their new framing has three layers — a data layer (contacts, deals, tickets), an intelligence layer (their scores and benchmarks), and an open MCP/API surface any external agent can read and write through. Build whatever vertical agent you want. HubSpot will host the data and the rails, but it has stopped pretending to own your specialist work. This is a structural pivot, not a feature release. The platform&apos;s job is plumbing. The intelligence comes from somewhere else.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Trend Nobody&apos;s Saying Out Loud</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">The next day, May 5, Fortune reported that Anthropic was shipping ten ready-to-run agent templates — pitchbook builders, KYC screeners, month-end-close agents — alongside full Microsoft 365 integration spanning Excel, PowerPoint, Word, and Outlook. Anthropic&apos;s Managed Agents service, in public beta since April 8, hosts long-running agents on their infrastructure for <strong className="text-white">eight cents per agent runtime hour</strong> plus model usage. Stack the two: CRM opens up. Model vendor hosts the runtime. Integration layer ships cross-app. The middle of the stack — &quot;we&apos;ll set up your custom agent on top of your CRM&quot; — collapsed. Fine if your agency builds specialist agents. Brutal if your agency was repackaging the platform&apos;s first-party tools and charging $4,000 a month to administer them.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We don&apos;t compete with the platform&apos;s first-party agents.</strong> GHL&apos;s AI Builder rebuild, HubSpot Breeze, Salesforce Agentforce — these are getting better every quarter and they ship free with the seat. We assume the platform will out-ship us on the generic stuff. So we don&apos;t build it.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We build the vertical on top.</strong> A wellness coach&apos;s intake bot that knows the difference between hot-and-cold therapy and a flag-the-doctor symptom. A roofing operator&apos;s storm-claim sequence that knows local carrier patterns. An equipment financier&apos;s risk-scoring agent pulling from Plaid and bank statements. The platform doesn&apos;t ship that. We do.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We host inside the platform, not next to it.</strong> GHL Workflow + AI Agent Action. HubSpot MCP server. We do not spin up a parallel n8n or external orchestration layer to do what the CRM already does natively. Every external service we kill is one fewer recurring fee and one fewer failure point on the client&apos;s tab.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80"><strong className="text-white">We bill on outcomes, not hours.</strong> Anthropic priced Managed Agents at 8¢ per runtime hour. The era of agencies billing $200/hour to babysit a workflow is over. We charge for the result — booked calls, qualified leads, tickets resolved.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What You Should Be Asking Right Now</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><em>&ldquo;If HubSpot or GHL ships this feature in their next quarterly release, does our retainer still make sense?&rdquo;</em></p>
              <p className="text-lg leading-relaxed mb-4 text-white/80">If your provider can&apos;t answer without flinching, they&apos;re billing you for work the platform is about to do for free.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><em>&ldquo;Where is our agent specialist? Show me the prompt, the eval set, and the last three runs.&rdquo;</em></p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">Generic CRM agents are a commodity now. Specialist agents are not. If your agency can&apos;t show you both the build and the receipts, they&apos;re selling you the platform&apos;s free layer at a markup.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Takeaway</h2>
              <p className="text-lg leading-relaxed mb-8 text-white">When the biggest CRM in the world publicly says &quot;the best agent will come from someone else,&quot; the agencies that survive are the ones who already weren&apos;t trying to be the platform. Pick a vertical. Build the specialist. Ship inside the rails. The platforms are giving general intelligence away — stop selling it.</p>
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
