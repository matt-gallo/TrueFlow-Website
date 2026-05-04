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
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Small Businesses Did 100% of the Net Hiring in Q1. 45% Still Can&apos;t Find Applicants. Your Next Hire Was Already Going to Be a Workflow.</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>May 2, 2026</span><span>•</span><span>4 min read</span><span>•</span><span>Growth</span>
            </div>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Small businesses did 100% of net hiring in Q1 2026.\n\n45% can't find qualified applicants. Turnover at a 9-year low.\n\nYour next hire was already going to be a workflow. #SMB #BusinessAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </a>
              <button onClick={() => { const u = typeof window !== 'undefined' ? window.location.href : ''; if (navigator.share) { navigator.share({ title: "Your Next Hire Was Already Going to Be a Workflow", url: u }) } else { navigator.clipboard.writeText(u); alert('Link copied!') } }} className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-white/80">On April 1, ADP&apos;s National Employment Report landed with a number the financial press mostly skipped: small businesses with <strong className="text-white">fewer than 20 employees added 112,000 jobs in March 2026</strong>. Medium and large employers, same month, went <strong className="text-white">net negative</strong>. Q1 total: tiny shops added roughly <strong className="text-white">169,000 people</strong> — out-hiring every larger employer-size category combined.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">ADP buried the harder numbers below the fold. <strong className="text-white">Turnover at firms with fewer than 50 employees hit 3.9%</strong> — the lowest in nine years of ADP tracking. <strong className="text-white">32% of small business owners</strong> report unfilled openings (historical average: 24%). <strong className="text-white">45% of those actively hiring</strong> say few or no qualified applicants are even applying. If you own a small business in 2026, you are doing all the net hiring in this economy and disproportionately staring at an empty applicant pool.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What Just Changed (In English)</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">For a decade, &quot;labor shortage&quot; was a Wall Street Journal headline. In Q1 2026, it&apos;s your inbox. Big companies are running headcount-down strategies because they can — automation budgets, scale, offshore arms. Small businesses don&apos;t have those. So when an ops coordinator quits, the next 90 days play out the same in every shop: post the role, get six unqualified applicants, raise the price, re-post, watch the existing team absorb the queue. Record-low turnover at this level means the pipeline is empty <em>and</em> the chairs are full. No room for growth without burning out the team already in the building.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Trend Nobody&apos;s Saying Out Loud</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">Yesterday we wrote about the cost of hiring going up — small-group health premiums reset 11% on May 1. Today&apos;s data point completes the trap from the other side: even when the budget is there, the labor isn&apos;t. The &quot;I&apos;ll just hire someone&quot; reflex fails in two independent ways at once. Premiums up 11%. Applicants gone. Most agencies are still selling &quot;more leads.&quot; Wrong sale for May 2026. The bottleneck isn&apos;t demand. It&apos;s the seat behind the keyboard that handles the lead the moment it lands.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">Every build starts at the unfilled role.</strong> Walking into Elite Ambulance Sales last week, the question wasn&apos;t &quot;can we drive more inquiries.&quot; It was &quot;what does inventory work look like if the coordinator is out a day.&quot; The answer became a Power Automate flow finalized this week — OneDrive trigger, conditional logic, GHL inventory sync. The queue still exists. The coordinator doesn&apos;t have to be in it for it to move.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We pair the system with the role-stack hire, not the entry-level hire.</strong> Elite added Joanna last week — generalist EA with IT, software dev, comptroller, and marketing background. One person, four hats. That&apos;s the shape that works in 2026. Junior staff aren&apos;t coming. Correct sequence: build the system, then hire one operator who can run it.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We dropped &ldquo;AI orchestration&rdquo; as a billable line on April 22.</strong> It&apos;s priced into the platform — GHL&apos;s native multi-model workflow actions, Anthropic and OpenAI as Workflow AI providers, MCP live. Charging for orchestration in 2026 is charging for stair-climbing on an escalator. We bill the work that absorbs the empty seat. Not the wiring.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80"><strong className="text-white">No builds where the math doesn&apos;t replace 60% of an unfilled role inside 90 days.</strong> If a workflow can&apos;t move 24+ hours of weekly queue out of the team&apos;s inbox in a quarter, it&apos;s a productivity tool, not a hire substitute. Productivity tools belong in a SaaS subscription, not on an agency invoice.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Takeaway</h2>
              <p className="text-lg leading-relaxed mb-8 text-white">The labor story for SMBs in 2026 is short. Big companies stopped hiring. Small companies became the engine. The applicant pool went dry. Turnover hit a 9-year low. The platforms that absorb the empty role got dramatically cheaper in the same 30 days. This isn&apos;t a productivity story. It&apos;s a survival math problem with a finite list of sane answers. Your next hire was already going to be a workflow — the March ADP print just made that explicit.</p>
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
