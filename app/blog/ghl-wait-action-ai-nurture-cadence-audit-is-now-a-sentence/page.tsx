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
              <span className="text-white/40 text-sm">May 23, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Just Put AI Behind the Wait Action. Your &lsquo;Nurture Cadence Audit&rsquo; Is Now a Sentence.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              GoHighLevel&apos;s Wait action got an AI-powered redesign with recurring schedules and natural-language setup &mdash; the same week Anthropic shipped &ldquo;outcomes&rdquo; as a first-class agent primitive. Configuration is no longer billable. Outcomes are.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL Just Put AI Behind the Wait Action. Your 'Nurture Cadence Audit' Is Now a Sentence."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                GoHighLevel rebuilt the <strong>Wait action</strong> this month and the change is bigger than the changelog headline suggests. The old dropdown is gone. There is now a card-based intent picker (&ldquo;What should the contact wait for?&rdquo;), native recurring schedules (weekly, monthly, yearly &mdash; with specific days and times), and a &ldquo;Wait AI&rdquo; CTA that lets you type <em>&ldquo;hold this lead until 9am Tuesday after their first reply, then escalate&rdquo;</em> and get back a configured Wait card. Date-based waits &mdash; which used to require two stitched actions &mdash; collapsed into a single step.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                If you have ever paid an agency for a &ldquo;follow-up cadence audit,&rdquo; that line item just got auto-generated.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                For most of GHL&apos;s history, nurture cadence was <em>the</em> part of an automation build agencies billed against. Pick the right wait windows. Decide between business-hours and absolute-time delays. Build the reply branches. Wire in the timeout fallbacks. Enough small decisions to plausibly bill a thousand dollars for a &ldquo;drip campaign architecture&rdquo; call.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Wait AI just took the architecture call and turned it into one sentence inside the workflow builder. <em>&ldquo;Wait 24 hours after form submit, retry every Tuesday at 9am until they reply, escalate to voicemail at the 5-day mark.&rdquo;</em> That&apos;s the cadence. That used to be a deck.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The recurring schedule piece is the part most agencies will under-appreciate. Annual renewals, holiday reactivations, weekly check-ins &mdash; those used to require external scheduling tools or a chain of Set Event Date &rarr; Wait actions glued together. Now it&apos;s a single card inside the workflow you already had open.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                This isn&apos;t a one-platform story. At <strong>Code w/ Claude on May 22</strong>, Anthropic shipped <strong>outcomes</strong> as a first-class primitive inside the Claude Agent SDK &mdash; you specify a desired result and the agent runs in a loop until that outcome is reached, no human in the middle asking &ldquo;are we done yet?&rdquo; They also added managed-agent webhooks and a coordinator-spawns-subagents orchestration primitive.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Two platforms, one week, one direction: <strong>the configuration layer is being deleted.</strong> You describe the outcome. The system builds the cadence, picks the wait windows, retries on failure, calls the sub-agent, fires the webhook when the work is done.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Configuration was 60% of what most automation agencies billed for. That work just collapsed.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We deleted &ldquo;cadence architecture&rdquo; as a separate deliverable.</strong> Nurture timing lives inside the build conversation now, not inside a 40-slide Notion doc you&apos;re charged to read. If Wait AI can turn a sentence into a working card, we will not bill you to write that sentence ourselves over four meetings.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We use GHL&apos;s recurring Wait natively for renewals and check-ins.</strong> No more Zapier scheduled triggers gluing a calendar tool to a workflow. The Wait action does it inside the CRM. Every external dependency we cut is one less thing your team has to renew, audit, or watch break on a Sunday.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. We define the outcome, not the steps.</strong> Mirroring the Anthropic SDK shift, our builds start with a single line &mdash; <em>&ldquo;qualified booked call on the calendar&rdquo;</em> &mdash; and the cadence is whatever loops we have to wire to get there. If the loops change next month because the data says so, that is inside the engagement, not a change order.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. No retainers on configuration work.</strong> If the platform just made the work disappear, we will not invoice you to do it slower. We charge against the outcome (booked calls, recovered carts, closed-loop replies). Built in 3 days, free until you see traction.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If GHL&apos;s Wait action now takes natural-language input, why is my provider quoting a &ldquo;drip cadence build&rdquo; as a separate paid phase?</em></span></li>
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If Claude can run an agent in a loop until an outcome is met, why am I still buying a flat-fee retainer for &ldquo;ongoing optimization&rdquo; that never gets measured against any outcome at all?</em></span></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If you ask those out loud and your provider gets defensive instead of crisp, you have your answer.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Cadence used to be craft. This week it became a sentence. The agencies that survive 2026 are the ones who repriced when the configuration layer collapsed &mdash; not the ones still selling a slide deck about wait windows. Pick the side that matches where the product is going, not the one that matches last year&apos;s invoice.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: HighLevel Changelog &mdash; &ldquo;Wait Action: Major Revamp&rdquo; (May 2026); Anthropic Code w/ Claude developer conference (May 22, 2026) Claude Managed Agents updates covering outcomes, multi-agent orchestration, and webhooks.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Outcomes, Not a Configuration Deck?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Cadence architecture is included. Discovery is free. You don&apos;t pay until the system produces the outcome we agreed on &mdash; not when the Wait card fires.</p>
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
