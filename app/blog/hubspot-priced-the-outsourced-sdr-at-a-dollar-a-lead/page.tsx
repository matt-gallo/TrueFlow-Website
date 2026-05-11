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
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">April&apos;s Jobs Print: Small Business Carried The Whole Number. The Middle Is Bleeding. HubSpot Just Repriced An SDR At $1 A Lead.</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>May 7, 2026</span><span>•</span><span>4 min read</span><span>•</span><span>Automation</span>
            </div>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("ADP April: Small biz did 65K of the 109K. Middle is bleeding.\n\nHubSpot's Breeze Prospecting Agent: $1 per recommended lead, 28-day free trial.\n\nThe outsourced SDR retainer just got priced into oblivion.\n\n#SMB #AIAgents #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </a>
              <button onClick={() => { const u = typeof window !== 'undefined' ? window.location.href : ''; if (navigator.share) { navigator.share({ title: "April's Jobs Print: Small Business Carried The Whole Number. The Middle Is Bleeding. HubSpot Just Repriced An SDR At $1 A Lead.", url: u }) } else { navigator.clipboard.writeText(u); alert('Link copied!') } }} className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-white/80">On May 6, ADP dropped the April National Employment Report. Private payrolls grew <strong className="text-white">109,000</strong> for the month. Small businesses (1–49 employees) added <strong className="text-white">65,000</strong> of them. Pay for stayers held at 4.4% year-over-year. ADP&apos;s chief economist, Nela Richardson, said the quiet part out loud:</p>
              <blockquote className="border-l-4 border-cyan-400 bg-white/5 rounded-r-xl px-6 py-4 mb-8">
                <p className="text-lg italic text-white/90 m-0">&ldquo;Small and large employers are hiring, but we&apos;re seeing softness in the middle.&rdquo;</p>
              </blockquote>
              <p className="text-lg leading-relaxed mb-8 text-white/80">The softness in the middle is the whole story. The 50–500 employee shops — the segment that for two decades absorbed the labor market&apos;s overflow and ran the productized SDR services — are flat to negative. The trap we called two weeks ago is now confirmed in the data.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What Just Changed (In English)</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80">For ten years the SMB labor playbook had three moves: hire, outsource, or eat the queue. Hiring is broken — small group premiums reset 11% on May 1, and 45% of small employers actively hiring report few or no qualified applicants. Eating the queue burns the team you already have.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80">That left outsource — specifically, the productized &ldquo;AI SDR&rdquo; agency. Buy a list, plug in a sequencer, pay $3,000–$10,000 a month, get a Slack channel and a meeting target. As of April 14&apos;s Spring Spotlight, HubSpot&apos;s Breeze Prospecting Agent prices that exact same workflow at <strong className="text-white">$1 per recommended lead</strong>, 28-day free trial, native Apollo and ZoomInfo data, outreach drafts pulled from your CRM history. Pay only when the agent surfaces a contact and a rep enrolls them.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">That&apos;s not a feature. That&apos;s a price floor on a $4 billion service category.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Trend Nobody&apos;s Saying Out Loud</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80">HubSpot is not the only one. GoHighLevel&apos;s AI Voice Agent now books appointments live on the call. Anthropic&apos;s Managed Agents run at 8¢ per agent runtime hour. Zapier Agents and n8n 2.0 ship native autonomous agents inside the workflow tools your stack already runs. Every layer the outsourced SDR agency repackaged — the dialer, the data, the sequencer, the orchestrator — just got a metered, outcome-tied price from the platform that hosts it.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">The middle is softening because the cost of doing what the middle did just collapsed. The shops paying $4K/month SDR retainers in 2024 are running the same plays through their CRM in 2026 for high three-digits. Most agencies still selling that retainer haven&apos;t told their clients. We&apos;re calling it.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We don&apos;t sell &ldquo;AI SDR-as-a-service.&rdquo; We sell the agent operations layer.</strong> If your stack is HubSpot, we wire Breeze Prospecting Agent into your real signals — tag map, deal-stage logic, qualification rubric, hand-off rules. If it&apos;s GHL, the same thing through the AI Agent action with MCP tool connections. The agent comes from the platform. The judgment comes from us.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We bill on the same unit the platform does.</strong> $1 per surfaced lead. 8¢ per runtime hour. $X per booked, qualified call. If the platform meters it, we meter on top of it. We won&apos;t build a flat retainer for outsourced prospecting and we won&apos;t renew one.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We pull SDR-tier work back into the existing stack instead of bolting on a parallel one.</strong> Most &ldquo;AI SDR&rdquo; providers run a separate Apollo + Smartlead + Slack stack next to your CRM. Breeze and GHL natively pull from CRM history now. We delete the duplicate.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80"><strong className="text-white">We ship in three days, free, paid only when traction shows.</strong> That&apos;s the only honest pricing in a market where the platform itself charges per result.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What You Should Be Asking Right Now</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><em>&ldquo;If our $5K-a-month SDR retainer was repriced today at $1 per qualified lead, what would the bill be?&rdquo;</em></p>
              <p className="text-lg leading-relaxed mb-4 text-white/80">Run the math. If it&apos;s less than half what you&apos;re paying, the retainer is the problem.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><em>&ldquo;What part of our outsourced SDR&apos;s work is the CRM not already shipping natively in 2026?&rdquo;</em></p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">If your provider can&apos;t name three specific things — with prompts, eval set, and last month&apos;s run logs — you&apos;re paying agency margin for platform-grade work.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Takeaway</h2>
              <p className="text-lg leading-relaxed mb-8 text-white">The May 6 ADP print is the third leg of the story we&apos;ve been writing all month. Premiums up. Applicants gone. Middle-market employers softening. The SMB that can&apos;t hire and won&apos;t bleed has one move left, and it isn&apos;t a $5K SDR retainer. It&apos;s an agent priced per outcome, wired into the CRM you already pay for, run by an operator who knows the difference between a configured prompt and a real qualification rubric. The retainer model lasted exactly as long as the platforms let it. The platforms stopped letting it on April 14.</p>
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
