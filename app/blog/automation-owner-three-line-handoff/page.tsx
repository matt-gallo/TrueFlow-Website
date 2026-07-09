'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'automation-owner-three-line-handoff'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Last Thing We Do on Every Build Isn't Code — It's Deciding Who Owns It When It Breaks."

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between px-6 py-6 max-w-4xl mx-auto">
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={140} height={35} className="h-8 w-auto" /></Link>
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">← Back to Blog</Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Playbook</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 9, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Last Thing We Do on Every Build Isn&apos;t Code &mdash; It&apos;s Deciding Who Owns It When It Breaks.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Most agencies hand you a login and disappear. Here&apos;s the Three-Line Handoff we write before any automation goes live &mdash; Owner, Signal, Move &mdash; and why a build without a named owner is a liability, not a system.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>We finished a build for a client last week, and the last thing we did before calling it done had nothing to do with automation. We didn&apos;t add a workflow. We took a responsibility away from the software and handed it to a person. We wrote down a name.</p>
              <p>That&apos;s the step almost every automation agency skips, and it&apos;s the reason so many builds quietly die three weeks after the invoice clears.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Usually Happens After the Build</h2>
              <p>An agency builds you something impressive &mdash; a lead-routing workflow, an intake sequence, a reporting agent. They record a walkthrough video, hand you a login, and move on. For two weeks it works. Then a field name changes, or a lead comes in through a channel nobody mapped, or the AI misreads one message &mdash; and the automation starts doing the wrong thing quietly. Nobody notices, because nobody was watching. It was never anyone&apos;s job to watch.</p>
              <p>Here&apos;s the sentence another agency will push back on: if your agency handed you a video and a password and called that a handoff, they didn&apos;t finish the job. They moved the failure to a date after they got paid.</p>
              <p>An automation without an owner isn&apos;t a system. It&apos;s a liability with good production values.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Three-Line Handoff</h2>
              <p>So before we call any build done, we write three lines &mdash; three sentences, in the client&apos;s own doc, right next to the automation.</p>
              <p><strong className="text-white">The Owner.</strong> One named human &mdash; not &ldquo;the team,&rdquo; not &ldquo;ops,&rdquo; one person &mdash; is accountable for the <em>output</em> of this automation. Not for maintaining the code. For the result. If the follow-up sequence is supposed to book calls, someone owns whether calls actually get booked. The moment ownership is shared between two people, it belongs to neither.</p>
              <p><strong className="text-white">The Signal.</strong> How will that person know it broke without going to check? Automations fail silently &mdash; that&apos;s the whole danger. So we define the one signal that surfaces trouble on its own: a daily count that should never hit zero, an alert when a step errors, a number on a dashboard they already look at every morning. If catching the failure depends on someone remembering to go look, they won&apos;t, and you&apos;re back to hoping.</p>
              <p><strong className="text-white">The Move.</strong> When the signal trips, what does the owner actually do? Pause the workflow? Call us? Handle the stuck records by hand while it gets fixed? Deciding this on a calm Tuesday takes five minutes. Deciding it live, mid-failure, with leads piling up, takes a bad afternoon and usually the wrong call.</p>
              <p>Owner, Signal, Move. Three lines, written where the team can see them, before the build goes live.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">It&apos;s Usually a Name, Not Better Code</h2>
              <p>The client team we trained last week is the clean example. The thing that finally made a months-old process stick wasn&apos;t a cleverer automation &mdash; it was assigning one person to own the output, giving them a single number to watch, and telling them exactly what to do when it looked off. The software had been fine the whole time. What was missing was a name.</p>
              <p>You can retrofit this onto everything you already run, today, without touching a single workflow. Open the list of things running in your business on autopilot. For each one, answer three questions: Who owns the result? How would they know it broke? What do they do then? Any automation that can&apos;t answer all three isn&apos;t saving you time &mdash; it&apos;s accruing risk you can&apos;t see yet.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The best automation in the world still fails eventually. The difference between a system and a time bomb is whether a specific person notices, and knows what to do, before your customers do. Build the automation second. Assign the owner first.</p>
              <p className="text-white/70 italic">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Source: TrueFlow client onboarding and build-handoff process, June&ndash;July 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">One fix like this, every week</h3>
            <p className="text-white/60 mb-6">Get one operational fix like this in your inbox every week &mdash; short, practical, no fluff.</p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Subscribe &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
