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
              <span className="text-white/40 text-sm">May 13, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Microsoft Shipped a $99-a-Seat Agent Control Plane This Month. NFIB Says 34% of Main Street Can&apos;t Fill a Seat at All.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Microsoft Agent 365 hit GA May 1 with a Shadow-AI governance page priced for enterprises with too many agents. The same week, NFIB showed Main Street&apos;s problem is the opposite — zero agents and an empty chair open since March.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Microsoft Shipped a $99-a-Seat Agent Control Plane. NFIB Says 34% of Main Street Can't Fill a Seat at All."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 1, <strong>Microsoft Agent 365 hit general availability</strong> — $15/user standalone, or bundled into the new Microsoft 365 E7 &ldquo;Frontier Suite&rdquo; at <strong>$99 per user per month</strong>. The headline feature is a Shadow AI page, powered by Defender and Intune, that surfaces unauthorized agents on Windows devices. It is a beautifully built product. It also has almost nothing to do with the company down the street from you.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                This morning, the <strong>NFIB Jobs Report</strong> dropped. A seasonally adjusted 34% of small business owners reported job openings they couldn&apos;t fill in April — the highest level since June 2025. Eighty-seven percent of owners trying to hire reported few or zero qualified applicants. Two stories, same week. Same problem, looked at from opposite ends.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Microsoft&apos;s pitch is <em>governance</em>. The premise: you have an agent sprawl problem. Sixteen ChatGPT plug-ins. Four Copilot Studio bots. Agent 365 finds them, registers them, gates them with Intune, and bills per seat. That is a real problem — at Boeing, Anthem, or a hospital network.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                But the median small business has the opposite problem. Zero agents. Their &ldquo;AI strategy&rdquo; is the owner&apos;s personal ChatGPT tab. The pain isn&apos;t &ldquo;too much AI running unchecked.&rdquo; It&apos;s the rep seat open since March, the customer service queue at 11 PM, the bookkeeping two months behind. A $99-a-seat governance stack solves problem #1. NFIB just confirmed 87% of small businesses are still living in problem #2.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The enterprise agent stack — Microsoft Agent 365, Google&apos;s Gemini Enterprise Agent Platform, OpenAI Frontier, Salesforce Headless 360 — is being designed for organizations with too many agents and too much data, not too few people. Per-seat pricing scales beautifully across a 50,000-person company. For an 8-person services business with two unfilled roles, that pricing is upside-down. You&apos;re paying per <em>seat</em> for a stack designed to <em>manage</em> seats. You don&apos;t need seats managed. You need work done that nobody is doing. That&apos;s the trickle-down lie of the moment.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">One — we quote against the unfilled role, not the tool.</strong> If you&apos;ve had a sales coordinator job posted for six weeks, we scope to that. The deliverable is <em>that calendar gets booked, that quote gets sent, that follow-up gets logged</em>. Not &ldquo;an agent.&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Two — we build inside GHL, not on top of an enterprise control plane.</strong> GHL&apos;s AI Agent action runs inside the same CRM where your contacts and conversations already live. Governance is the workflow itself — what it touches, what it doesn&apos;t, what gets approved. No second admin console.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">Three — we don&apos;t sell per-seat. We sell per-outcome.</strong> Microsoft will sell you $99/seat to govern agents you don&apos;t have. We sell the agent that picks up the work the empty chair was supposed to do — flat fee, and you don&apos;t pay until you see traction.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;How many full-time employees do I have, and how many of them are in the seat-management category your pricing assumes?&rdquo; If the answer is fewer than 20, you&apos;re being sold a Boeing stack to run a barbershop.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;What seat on my org chart is this replacing?&rdquo; If the proposal can&apos;t point at a specific role that doesn&apos;t get filled, you&apos;re being sold a science project.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Agent governance will be a multi-billion-dollar category. Microsoft, Google, and OpenAI will win it inside the Fortune 1000. None of that money is coming out of the pocket of the 10-person plumbing company or the regional med spa — because those businesses don&apos;t have the problem the governance stack solves. They have the opposite one.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want the Empty Chair Filled, Not Governed?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We scope against the unfilled role — not the tool. No per-seat pricing. No enterprise control plane. Just the work the open chair was supposed to do.</p>
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
