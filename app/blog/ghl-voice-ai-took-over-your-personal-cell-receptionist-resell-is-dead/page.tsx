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
              <span className="text-white/40 text-sm">May 18, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Just Let Voice AI Answer Your Personal Cell. The AI Receptionist Resell Is Done.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              HighLevel rolled Voice AI Outbound on top of a pricing update — and Voice AI can now dial from your existing personal mobile number. The $497/month AI receptionist SaaS just got obsoleted by a checkbox.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL Just Let Voice AI Answer Your Personal Cell. The AI Receptionist Resell Is Done."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 13, HighLevel quietly pushed a fresh SMS and voice pricing update. That alone would be a footnote. The reason it matters is what it sits on top of: HighLevel&apos;s Voice AI Outbound now connects directly to existing mobile numbers — including the personal cell you&apos;ve been handing out for ten years — and books appointments from a live phone call without a human anywhere in the loop.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The number your customers already have saved as &ldquo;Mike from the roofing place&rdquo; can now be answered, called back, and used to book an appointment by an AI agent. No new business line. No port-out drama. The AI receptionist SaaS your buddy is reselling for $497 a month just got obsoleted by a checkbox.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Until this spring, if you wanted &ldquo;an AI that answers the phone,&rdquo; you bought one of three things: a standalone AI receptionist SaaS at $300–$900 a month, a custom Twilio + LLM build from an agency at $5k–$15k upfront, or you punted and forwarded calls to a real human.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                HighLevel collapsed all three into a workflow action. Voice AI Agent now lives inside the Workflow Builder, supports 19 languages and 340+ voices, checks your calendar in real time, books the appointment on the call, and can run outbound from a number you already own. The whole loop — pick up, qualify, calendar, confirm, log to the contact — runs inside the same platform that already has your forms, your pipeline, and your follow-up automations.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The SMB labor squeeze isn&apos;t softening. The 2026 Small Business Tech Use Survey clocked 82% of small business employers as already invested in AI tools, with SMBs saving $500–$2,000 a month and 20+ hours per business per month from AI deployments. None of that is from a chatbot. That&apos;s from AI doing actual operational work — phones, scheduling, follow-up, intake. Pair that with where agency pricing is moving: buyer surveys put outcome-based and consumption-based pricing at a combined 70% preference. The &ldquo;$1,500/month retainer for an AI receptionist seat&rdquo; line-item is going to look like a Blockbuster late fee inside six months.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We stopped quoting third-party AI receptionist SaaS.</strong> When a client walks in with a &ldquo;we need someone to answer the phones&rdquo; problem, we now spec it as a GHL Voice AI workflow on their existing main line, billed against their HighLevel voice usage — not as a separate $497/month software seat.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We govern the call schedule, hard.</strong> Voice AI Outbound enforces real limits — 1 call per contact per day, max 4 calls over a rolling 14 days, only 10 AM–6 PM local. We bake those into the workflow. Most agencies will skip this. We won&apos;t.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">3. We tie pricing to booked appointments, not seats.</strong> Our Voice AI builds now ship with a clean dashboard that counts confirmed appointments booked by the agent. That&apos;s the unit a client actually cares about.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                If you&apos;re paying for a separate AI receptionist tool: &ldquo;Is this just a wrapper on GHL Voice AI plus a logo?&rdquo; Half the time, it is.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                If you&apos;re paying an agency to build voice automation: &ldquo;Are you using my existing GHL voice usage, or are you billing me twice — once for the build, once for a SaaS reseller margin you don&apos;t disclose?&rdquo;
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The boring version of this story is &ldquo;GHL added a feature.&rdquo; The actual version is that the entire category of &ldquo;AI answers your phone&rdquo; just got absorbed by the CRM. Your existing cell number is now a candidate for an AI agent. Your CRM bills the minutes. The middle layer — the agency that sells you a separate tool to do this — has roughly one quarter to reposition. If your provider is still quoting a per-seat receptionist license in June, they&apos;re not selling AI. They&apos;re selling friction.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Voice AI on Your Existing Number?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build Voice AI into GHL on the number you already own — no separate SaaS, no hidden reseller margin, priced per appointment booked not per seat licensed.</p>
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
