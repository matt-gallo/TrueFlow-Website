'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'confusion-isnt-a-reminder-problem-count-your-sources-of-truth'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "When People Keep Asking the Same Question, Stop Adding Reminders. Count Your Sources of Truth."

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
              <span className="text-white/50 text-sm">June 19, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              When People Keep Asking the Same Question, Stop Adding Reminders. Count Your Sources of Truth.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Confusion is rarely a signal to communicate more &mdash; it&apos;s a signal your information lives in too many places. Here&apos;s the audit we run before we automate a single reminder.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>A coaching business we work with kept getting the same question from students, week after week: <em>what time is class?</em></p>
              <p>They had already automated the answer. Reminder emails. Calendar invites. Posts in their community. The questions didn&apos;t slow down. They got worse.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why More Reminders Made It Worse</h2>
              <p>The class time lived in five places: a calendar invite, a reminder email, a pinned community post, an old chat thread, and the owner&apos;s head. Those five places didn&apos;t agree. One showed a time from before a schedule change. Another was in the wrong time zone for students overseas. The owner&apos;s memory was a day off.</p>
              <p>Every automated reminder didn&apos;t reduce the confusion. It added another voice to an argument nobody could win.</p>
              <p>Then it got expensive. A batch of reminder emails went out completely blank &mdash; the automation fired against records that had been created the wrong way, so the fields it was supposed to fill had nothing to pull from. Now the one channel that was supposed to be authoritative was actively wrong. That&apos;s the lesson most owners learn the hard way: more automation on a fractured foundation doesn&apos;t clarify anything. It scales the mess faster.</p>
              <p>The instinct, when people are confused, is to communicate more. Send another reminder. Add a notification. Turn on the SMS too. That instinct is backwards, and it&apos;s one of the most common mistakes we see owners make with automation &mdash; they automate the output before they fix the source.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Source Count</h2>
              <p>Before you automate any reminder, notification, or status update, do this: count the number of places a person could look to answer the same question. Write the number down.</p>
              <p>If it&apos;s more than one, you don&apos;t have a reminder problem. You have a source-of-truth problem, and automation will make it worse, not better.</p>
              <p>The fix runs in the order we run every audit &mdash; <strong className="text-white">Delete, Condense, Automate:</strong></p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span><strong className="text-white">Delete</strong> the places that shouldn&apos;t exist. The owner&apos;s head is not a source of truth. Neither is a six-week-old chat thread.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span><strong className="text-white">Condense</strong> what&apos;s left into one canonical source. For this business, that became a single, printable schedule &mdash; one document, every class, every time zone, one place to look. Boring on purpose.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span><strong className="text-white">Automate</strong> last, and only then. Every reminder now points back to that one document instead of restating the information in its own words. When the schedule changes, you change it once, and every channel inherits the change.</span></li>
              </ul>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why This Goes Beyond Reminders</h2>
              <p>The average digital worker already toggles between apps and tabs nearly 1,200 times a day (Harvard Business Review, 2022). Your customers and your team are drowning in places to look before your business adds a single one. When you create five disagreeing sources for one piece of information, you&apos;re not being thorough &mdash; you&apos;re taxing the exact attention you&apos;re trying to win.</p>
              <p>So pick the question your customers or team ask most this month. <em>When is it? What&apos;s the status of my order? Where&apos;s the link?</em> Run the Source Count on that one question. We&apos;d bet the answer is three or more. Collapse it to one before you touch a single automation.</p>
              <p>Here&apos;s the part a lot of agencies won&apos;t tell you, because consolidation isn&apos;t a build they can put on an invoice: most &ldquo;we need better notifications&rdquo; projects are actually &ldquo;we have too many sources of truth&rdquo; projects wearing a disguise. The reminder was never the problem.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Confusion is rarely a signal to communicate more. It&apos;s a signal that your information lives in too many places. Count the sources, cut them to one, then let automation repeat that single source &mdash; never compete with it.</p>
              <p className="text-white/50 text-sm italic">Source: Harvard Business Review, &ldquo;How Much Time and Energy Do We Waste Toggling Between Applications?&rdquo; (2022). Operational pattern drawn from a live TrueFlow client engagement; client details anonymized.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Ready to fix the source before you automate the noise?</h3>
            <p className="text-white/60 mb-6">We audit first. Delete, Condense, then Automate.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
