'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'stopped-asking-what-to-automate-reading-interruptions'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Stopped Asking Clients What to Automate. We Started Reading Their Interruptions."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Operations</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">August 7, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Stopped Asking Clients What to Automate. We Started Reading Their Interruptions.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The wishlist of tasks you hate is not your build list. The Interruption Log is a five-day exercise that finds the work actually eating your week &mdash; and most of what it surfaces doesn&apos;t need an automation at all.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Every automation conversation used to start the same way. We&apos;d ask an owner what they wanted to automate, and we&apos;d get a wishlist: chasing invoices, scheduling, data entry, the follow-up nobody remembers to send. Honest answers. Usually the wrong build list.</p>

              <p>We stopped asking that question. Now we ask a different one: over the last two weeks, when did a person have to step in and rescue something that was supposed to run on its own?</p>

              <p>That list is shorter, more specific, and much cheaper to fix. We call it the <strong className="text-white">Interruption Log</strong>.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why the Wishlist Misleads You</h2>
              <p>A wishlist is a list of tasks you find unpleasant. Unpleasant and expensive are not the same thing.</p>

              <p>The tasks you hate are the ones you&apos;re aware of &mdash; visible, hands-on, sitting in front of you. The work that actually eats a small business is the invisible patching around the edges of systems you already paid for. Someone re-typing an address the form never asked for. Someone forwarding a summary because the tool couldn&apos;t reach the right inbox. Someone approving a $180 expense that only needs approval because nobody ever wrote down the threshold.</p>

              <p>None of that shows up on a wishlist. All of it shows up in an Interruption Log.</p>

              <p>Here&apos;s one of ours from this week, since we&apos;d rather show our own than a client&apos;s. Our notetaker sat outside a call it was scheduled to record because the host never admitted it to the meeting. Nothing broke. The system did exactly what it was designed to do and produced nothing, and a person quietly filled the gap by taking notes by hand. No wishlist in the world would have caught that.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Interruption Log</h2>
              <p>Five working days. Every time a human touches a process that was supposed to run itself, one line: what happened, what they did, roughly how long it took. No tooling. A note on your phone is fine.</p>

              <p>Then sort every line into exactly three buckets.</p>

              <p><strong className="text-white">One &mdash; a missing rule.</strong> Someone made a decision that has an obvious right answer nobody has written down. Approvals under a threshold. Which lead goes to which person. When a discount is allowed. These are the cheapest things in your business to fix, because the fix is a sentence, not software.</p>

              <p><strong className="text-white">Two &mdash; missing data.</strong> The system couldn&apos;t act because a field was empty, a form didn&apos;t ask, or an integration didn&apos;t pass the value through. Fix these upstream at the point of capture. Never downstream by adding a step that goes and gets it.</p>

              <p><strong className="text-white">Three &mdash; real judgment.</strong> A pricing exception, an angry customer, a call about somebody&apos;s health. Leave these alone. Design <em>for</em> them: make it faster for a person to be reached, not harder.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part Our Own Industry Won&apos;t Like</h2>
              <p>In most stacks we open, buckets one and two account for the large majority of interruptions &mdash; and neither one needs a new automation. They need a rule written down and a field captured at intake.</p>

              <p>That is a bad week for anybody selling builds. It&apos;s a very good month for the business.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">How to Rank It</h2>
              <p>Sort the log by frequency times minutes. Not by annoyance.</p>

              <p>The interruption that costs four minutes and happens eleven times a week beats the one that costs an hour and happens once a quarter. And the four-minute one is almost always a missing rule, which means you can close it before lunch without touching a single tool.</p>

              <p>Run the log again two weeks later. Same three buckets. If total interruptions are falling while bucket three grows as a <em>share</em> of what&apos;s left, your systems are working &mdash; you&apos;ve deleted the rules-and-data problems and what remains is genuine human work. That&apos;s the shape you&apos;re aiming for. If bucket one keeps refilling with the same decision, you don&apos;t have an automation problem. You have an undocumented business.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>You already have your build list. It isn&apos;t the list of tasks you&apos;d love to hand off. It&apos;s the list of moments this week when a person had to step in and hold something together.</p>

              <p>Write those down for five days before you buy anything else.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Source: TrueFlow&apos;s bi-weekly automation and funnel audit, plus interruption patterns collected across client operations reviews in July and early August 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
