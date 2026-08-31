'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'lead-alert-left-out-which-one-round-trip'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'We Wrote the Email That Says a Lead Came In. We Left Out the Part That Says Which One.'

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
              <span className="text-white/50 text-sm">August 31, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Wrote the Email That Says a Lead Came In. We Left Out the Part That Says Which One.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Our lead notification carries a name and a question and no identifier, so every rep who reads it starts by searching. Here&apos;s the Round Trip &mdash; the pass that checks whether a person can get from an automated message to the record it came from, and whether their reply lands back on it.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Our lead notification email says a new lead came in. It carries the name and what the person asked about. It does not carry a number.</p>

              <p>A rep who reads it and wants the record does the only thing available. Opens the CRM, types the name, gets several results, starts reading dates to work out which one arrived this morning. We wrote that email. That search is ours.</p>

              <p>It surfaced on August 28, in a working session with the sales team that uses it &mdash; not as a complaint about the email, but as a complaint about finding things. Nothing had failed. The form captured, the workflow fired, the email delivered, the record saved. Every part of the chain did its job, and the person at the end of it still had to go looking.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">More Detail in the Email Makes It Worse</h2>
              <p>The reflex fix is to put more into the message. Phone number, source, the full form submission, a tidy summary at the top. It feels like helping.</p>

              <p>An email carrying the contents of a record is a copy of that record, made at one moment, that will never update again. The rep reads the copy, works from the copy, and never opens the system. Then someone corrects the phone number, and the version sitting in the inbox is quietly wrong from that afternoon onward. You did not shorten the search. You created a second source of truth and put it somewhere you cannot edit.</p>

              <p>One identifier does more work than a page of detail. A lead number a rep can paste into search costs nothing to carry and cannot go stale, because it is not a fact about the lead. It is a pointer at where the facts live.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Reply Reaches the Customer and Never Reaches the Record</h2>
              <p>The second half is worse, and it was in the same hour.</p>

              <p>When a rep replies to that notification, the reply goes wherever the send address points &mdash; usually an inbox nobody has made a decision about. The customer hears back. The record does not. The next person to open that contact sees a lead nobody has touched, because from the system&apos;s point of view nobody has. The conversation is real. It lives in one person&apos;s sent folder.</p>

              <p>Every message your business sends automatically should be able to make two trips. A human out to the record. The human&apos;s answer back into it. Most alerts are built for one direction and manage neither.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Round Trip</h2>
              <p><strong className="text-white">The Round Trip.</strong> For any automated notification a human receives, both directions work: they can reach the record it came from in one action, and their reply lands on that record without anyone retyping it.</p>

              <p>1. Open the last automated notification your business sent to a person. Not the template &mdash; the message that actually arrived.</p>

              <p>2. Get from that message to the record it is about. One click or one paste is the standard. If the route runs through searching a name, it fails, and it fails harder every time that customer comes back, because repeat buyers are exactly the people with more than one record.</p>

              <p>3. Reply to it as though you were the person who received it, and find out where the reply lands. If the answer is somebody&apos;s personal inbox, the record will never carry the conversation, and every report built on that record is describing a quieter business than the one you have.</p>

              <p>4. Fix the cheap direction first. An identifier in the subject line, or a direct link to the record, takes minutes and removes the search permanently. Routing replies back into the system is the larger job and can wait a week.</p>

              <p>The list is shorter than it sounds. New lead, booking, form submission, failed payment, cancellation is usually most of it. Ours failed step two.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>An alert that reports an event without pointing at the record is not automation. It is a message telling a person to go run a search.</p>

              <p className="italic text-white/60 pt-4">Drawn from a client sales-team working session on August 28, 2026, and TrueFlow&apos;s own lead notification templates.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Get one operational fix like this in your inbox every week.
            </p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Subscribe
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
