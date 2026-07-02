'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-agents-die-before-production-not-the-model'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "88% of AI Agent Pilots Never Reach Production. The Math — Not the Model — Kills Them."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Market Signal</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 2, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              88% of AI Agent Pilots Never Reach Production. The Math &mdash; Not the Model &mdash; Kills Them.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The 2026 agent reports are in: only about 12% of AI agent pilots make it to production. The reason isn&apos;t intelligence &mdash; it&apos;s compounding reliability and missing plumbing, and it&apos;s the most fixable problem in your business.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>The 2026 agent reports are in, and the headline number is brutal. Across the surveys compiled this year, only about 12% of enterprise AI agent pilots reach production at scale. The other 88% die somewhere between the demo that wowed everyone in the room and the Tuesday morning they were supposed to run on their own. RAND already put general AI project failure north of 80% &mdash; roughly twice the rate of ordinary IT projects. Agents are doing worse.</p>
              <p>You saw the demo. It worked. So what happens between &ldquo;it worked&rdquo; and &ldquo;it&apos;s live&rdquo;?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>The model didn&apos;t get dumber between the demo and go-live. Reliability compounds, and that&apos;s the whole story. An agent that&apos;s 85% reliable on any single step sounds excellent. String ten of those steps together &mdash; read the email, find the record, check the field, update the CRM, draft the reply, log the note, and so on &mdash; and your end-to-end success rate is 0.85 to the tenth power. About 20%. A chain of &ldquo;pretty reliable&rdquo; steps is a coin flip that loses four times out of five.</p>
              <p>The demo only ran one clean path. Production runs the other nine.</p>
              <p>Second number, and it&apos;s the important one. When researchers looked at <em>why</em> pilots die, the top three causes had nothing to do with intelligence: integration complexity (67%), no monitoring (58%), and unclear escalation paths (52%). Plumbing, not brains. Only about 14% of organizations even ship an agent with security or IT sign-off. The model was never the bottleneck. The wiring around it was.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>Here&apos;s the sentence another agency will argue with: your small business is a <em>better</em> place to run an AI agent than a Fortune 500 &mdash; not despite having no governance committee, but because you have fewer steps to chain and you&apos;re allowed to delete half of them this week.</p>
              <p><strong className="text-white">We shorten the chain before we automate.</strong> Subtraction isn&apos;t a nicety here, it&apos;s arithmetic. Cut a ten-step process to five, and 0.85-to-the-fifth lifts your odds from ~20% to ~44% before we&apos;ve improved a single step. Every step we delete makes the whole thing more reliable for free.</p>
              <p><strong className="text-white">We test on real, messy data &mdash; not the demo&apos;s clean data.</strong> We caught this in our own build recently: parts of our product were quietly rendering mock data that looked perfect and would not have survived real traffic. Demos run on the happy path. We run yours on the record with the blank field, the duplicate contact, the phone number formatted three different ways.</p>
              <p><strong className="text-white">We build the escalation path first.</strong> Before an agent runs unsupervised, we decide what happens when step four fails at 2am &mdash; who gets told, what pauses, what quietly does <em>not</em> fire. Most of the automations we inherit have no answer to that question. One client we onboarded recently had six half-finished pipelines, each one a broken chain nobody was watching.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Two questions. First: how many steps is your automation actually chaining together &mdash; and have you multiplied the odds, or just admired each step one at a time? Second: when a step in the middle fails silently, who finds out, and how long does it take them?</p>
              <p>If you can&apos;t answer the second one, you don&apos;t have an automation. You have a demo that hasn&apos;t broken in front of you yet.</p>
              <p>The 88% failure rate isn&apos;t an AI problem. It&apos;s a chain-length-and-plumbing problem &mdash; and that makes it the most fixable thing on this list. Delete steps, watch the ones that remain, and decide in advance what happens when they break. That&apos;s the game.</p>
              <p className="text-white/70 italic">If you&apos;d like help pressure-testing an AI workflow before it goes live &mdash; shortening the chain and building the escalation path &mdash; <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: 2026 AI agent production reports (Composio 2026 AI Agent Report; RAND Corporation AI project-failure research), reporting compiled June 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Getting an AI workflow past the demo?</h3>
            <p className="text-white/60 mb-6">We&apos;ll help you shorten the chain and build the escalation path &mdash; so it survives production, not just the pitch.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
