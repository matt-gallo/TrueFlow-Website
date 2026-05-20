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
              <span className="text-white/40 text-sm">May 19, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL&apos;s Conversation AI V3 Now Writes Its Own Flows. The $5K AI Setup Fee Just Became a Saturday Project.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              HighLevel&apos;s Conversation AI V3 ships a drag-and-drop Flow Builder with AI-generated flows baked in. Here&apos;s why the &ldquo;AI bot setup&rdquo; line-item is the next casualty — and what TrueFlow stopped charging for.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL's Conversation AI V3 Now Writes Its Own Flows. The $5K AI Setup Fee Just Became a Saturday Project."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                HighLevel just pushed Conversation AI V3 live with a visual, drag-and-drop Flow Builder — and tucked inside it is the line that should worry every &ldquo;AI implementation specialist&rdquo; reselling GHL for a living: <strong className="text-white">AI-Generated Flows.</strong> Type a sentence describing the bot you want. The builder drafts the nodes, branches, triggers, and calendar logic for you. Then you tweak.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                That&apos;s the same deliverable an agency was charging $3,500 to $9,500 to &ldquo;build&rdquo; three months ago.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Stack that on top of V3&apos;s other capabilities — multi-calendar routing, custom webhooks mid-flow, bot-to-bot transfers, custom triggers — and the visual chat-bot build is officially a commodity.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Until this changelog drop, building a real AI chat bot inside GHL took either an agency or a stubborn weekend. Map a conversation tree, translate it into GHL&apos;s old form-based setup, wire the calendar, hope the bot didn&apos;t loop, iterate for two weeks while leads piped in raw.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                V3 collapses every step. Drag a node. Connect it. Or tell the AI &ldquo;build a flow that qualifies a roofing lead, books a free inspection, and tags storm-damage leads for priority follow-up&rdquo; — and you get a draft you can refine in 20 minutes.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The price floor for the build just went to zero.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                This is the third &ldquo;agency line-item just got obsoleted&rdquo; event from HighLevel in a month.
              </p>
              <ul className="text-white/80 leading-relaxed mb-6 space-y-2 list-none">
                <li><span className="text-cyan-400">•</span> <strong className="text-white">April 28</strong> — GHL native Stripe Tax shipped, and the bookkeeping-as-a-service add-on shrank.</li>
                <li><span className="text-cyan-400">•</span> <strong className="text-white">May 13</strong> — Voice AI Outbound started dialing from your existing personal mobile, and the AI receptionist SaaS resell collapsed.</li>
                <li><span className="text-cyan-400">•</span> <strong className="text-white">May 19</strong> — Conversation AI V3 ships with AI-Generated Flows, and the &ldquo;we&apos;ll build your bot&rdquo; line-item is on the clock.</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-6">
                Three months. Three deliverables agencies used to charge for. All absorbed into the base platform.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Meanwhile the macro keeps tightening the screws. NFIB&apos;s April Jobs Report dropped the Small Business Employment Index 1.2 points to 100.4 — second straight monthly decline, now below the 2025 average. Labor quality jumped to <strong className="text-white">18% of owners&apos; #1 problem</strong>, up 3 points in a month and well above the 12% historical norm. Owners can&apos;t hire, can&apos;t fill chairs, and the platform they already pay for is shipping faster than the agency hired to glue features together.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The &ldquo;build&rdquo; was never the product. It was the part that was hard to copy. It&apos;s not hard to copy anymore.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                We stopped charging for builds. Literally — our offer is <strong className="text-white">3 days, built for free, you don&apos;t pay until you see traction.</strong> That sounds insane until you realize the build is now the cheap part. We&apos;re not selling labor hours. We&apos;re selling the part the AI can&apos;t generate from a sentence:
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. The customer journey map</strong> — not what the bot says, but where in the funnel each conversation matters, which leads to skip the bot entirely, and where the handoff to a human pays for itself in close rate. AI-Generated Flows draft the nodes; we draft the <em>strategy</em> the nodes are protecting.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. The integration spine</strong> — V3 booking an appointment is table-stakes. What&apos;s <em>not</em> table-stakes is the appointment landing on the right calendar, in the right pipeline stage, with the right notification, against the right contact, across Stripe, your phone system, your inbox, and the two old tools you forgot you were paying for.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. The opinion</strong> — we tell clients which features to skip. The V3 Builder is powerful enough that you can over-build a bot that should have been three pre-written replies. Restraint is a service now.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. The audit, not the build</strong> — half of new clients already have a GHL account with three half-finished workflows. The high-leverage move is killing two and finishing one.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Two questions for whoever is quoting you a five-figure &ldquo;AI implementation&rdquo;:
              </p>
              <ol className="text-white/80 leading-relaxed mb-6 space-y-2 pl-6 list-decimal">
                <li><em>&ldquo;What part of this can the V3 Flow Builder draft from a sentence — and what are you actually charging me for beyond that?&rdquo;</em></li>
                <li><em>&ldquo;If the build itself is now generated, what&apos;s your refund policy if the journey we mapped is wrong?&rdquo;</em></li>
              </ol>
              <p className="text-white/80 leading-relaxed mb-8">
                If they can&apos;t answer in plain English, they&apos;re selling you the part that just went free.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                When the platform ships the build, the agencies still charging for the build are running on borrowed time. The work that survives is the work AI can&apos;t see from a sentence — judgment, sequencing, and the unglamorous decision to <em>not</em> automate something. Anyone selling you the demo as the deliverable is selling you a relic.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want This Built in 3 Days — Free?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build your Conversation AI inside V3 in 3 days, free, and you don&apos;t pay until you see traction. No five-figure setup fee. No vendor lock-in.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-readiness-assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">Take the Free Assessment</Link>
              <Link href="https://trueflow.ai" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">See If You Qualify</Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
