'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'fixed-the-bug-conversation-happened-without-it'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Fixed the Recording Bug. The Conversation Worth Keeping Still Happened Without It."

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
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">&larr; Back to Blog</Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Operations</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">September 26, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Fixed the Recording Bug. The Conversation Worth Keeping Still Happened Without It.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A bug in our app was stopping a client&apos;s recordings, and we fixed it. The most valuable hour his business produced last month happened anyway with nothing running &mdash; and so did a set of his scheduled tasks that were enabled, correct, and waiting on a person nobody had asked to be there.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 25 I sat down with a client to go through how he is actually using our app. The first item was ours: a bug was causing his recordings to fail. That is fixed, and a recording now processes the moment he stops it.</p>

              <p>The second item was worse, and it was not a bug.</p>

              <p>Some time in the previous two weeks he had spent an hour with a senior physician going through the clinical guidelines that govern how his device gets used in surgery. He sells that device. The physician was not being sold anything. He was explaining, at length and in his own words, why the procedure is done the way it is done.</p>

              <p>Nothing recorded it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Rep Cannot Say What That Physician Said</h2>

              <p>The hour was not valuable because it held facts my client didn&apos;t know. He knows the guidelines. It was valuable because of who was saying them. When a surgeon hears the case for a device from the person selling it, he discounts it, and he is right to. When he hears the same case in the words of a physician with no commercial interest, it lands. That hour was the best raw material his business produced in a month, and it now exists only as whatever he remembers of it.</p>

              <p>There is also a reason that recording has to start by itself rather than be remembered. In that hour his job was to listen and ask the next good question. Any attention he spends checking whether the software is running is taken from the only part of the hour a machine cannot do for him.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Every Status Was Green</h2>

              <p>The recorder was installed. He had gone as far as reordering the shortcuts on his phone to put Record Meeting first. Paid for, working, one tap away, and it was not running.</p>

              <p>On the same call we opened his scheduled tasks &mdash; automations meant to fire each evening and write the day&apos;s work back into his account. They were enabled. The schedules were right. The instructions were right. Every run had been pausing to ask a human for permission, at an hour when no human was going to answer. They had been on for weeks and had produced nothing.</p>

              <p>We set each one to skip approvals, reconnected the connector, set its permissions to always allow, and moved the evening summary onto a stronger model. It ran that afternoon and put real items into his account for the first time.</p>

              <p>Two failures, one shape. Both configured. Both correct. Both reporting that they were on. Both producing nothing, because each was waiting on a person to start it &mdash; him for the recorder, a click for the tasks.</p>

              <p>This is the gap no dashboard covers. A dashboard reports on runs that happened. It has no row for the meeting you did not record, and no row for the eleven nights a task sat waiting for an answer. Look at the number a process produced, not the state it reports. Both of those readings were zero while both statuses were fine.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Reminder Is Discipline Wearing a System&apos;s Clothes</h2>

              <p>His answer, and it was the honest one available that day, was to put reminders on his calendar. Mine was the same class of answer: I am building a daily report email that doubles as a nudge to record. Neither of those is a system. They are discipline with better packaging, and discipline is what his day is already made of.</p>

              <p>The real fix is to delete the moment where a person has to start the thing. His calendar integration is blocked right now &mdash; a verification block on Google&apos;s side, ours to clear &mdash; and the native app we ship in roughly thirty days routes around it. When that lands, the recording starts because the meeting starts. That is not a better reminder. That is the removal of the thing being reminded about.</p>

              <p>Most of this industry sells the reminder, because a reminder is cheap to build and it moves the failure onto the customer. If the tool didn&apos;t get used, he didn&apos;t use it. True, and useless.</p>

              <p>So the question to put to anything running in your business is not whether it is working. It is: what event starts this, and is that event a person choosing to? If the answer is a person choosing to, you have bought a capability and kept the job.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>A tool is in your business when something that already happens starts it. Until then you own a correctly configured thing that is waiting, and every light you can see will be green.</p>

              <p className="italic text-white/70 pt-4">If you would like help finding where your systems are waiting on a person to start them, <a href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</a>.</p>

              <p className="italic text-white/60 pt-4">Source: an internal client systems review, September 25, 2026, and TrueFlow build records from the same week.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Find out where your systems are waiting on you to start them.
            </p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Book a Strategy Call
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
