'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'both-processes-documented-week-in-between-seam-check'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Both Processes Were Documented. A Signed Client Could Still Sit a Week in Between.'

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
              <span className="text-white/50 text-sm">August 30, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Both Processes Were Documented. A Signed Client Could Still Sit a Week in Between.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Our offer process ended at signature. Our launch process started at campaign build. Each one was complete on its own, and the space between them had no owner. Here&apos;s the Seam Check &mdash; the half hour that finds every place one of your documented processes ends and names the person who carries the work to the next one.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Our own written procedure for what happens after a client signs opens with a sentence we would rather not have had to write.</p>

              <p>The offer process ended at signature and the launch process began at building campaigns, and the space between them was where a signed client could sit for a week with nobody holding the ball.</p>

              <p>Both documents existed. Both were correct. Neither was missing a step. The first ran to signature and stopped, because that is where an offer ends. The second started at campaign build, because that is where a launch begins. Read either one alone and it looks finished. That is the whole trouble. Completeness gets judged inside the document, and the failure lives outside it.</p>

              <p>Write down your processes is the advice everyone gives, and it is not wrong. It is aimed at the wrong place. The processes are usually fine. What almost nobody writes down is who carries the work from the end of one to the start of the next.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Signature Day and Launch Day Are Different Dates</h2>
              <p>In our trial agreement the most valuable term is a date. The thirty-day clock starts the day ads go live, not the day the client signs. Delay on the client&apos;s side moves the launch date rather than eating their thirty days.</p>

              <p>Which means the clock depends on one person moving one record on one day. That same stage change is what puts the day-23 conversion call on a calendar. Nothing about it is difficult. It sits in the seam &mdash; after the person who builds finishes, before the person who manages the account starts. When the seam has no owner, the record does not move, the clock does not start, and the call that carries the close is on nobody&apos;s schedule.</p>

              <p>The honest state of it: the procedure that closes that gap is still marked Draft. The pipeline it depends on has to be built by hand, because the API can create and move opportunities but cannot create the stages they move through. Until that exists the notification is manual, and no client has been through the whole thing end to end. We found the seam. We have not finished closing it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Quote Was Attached to the Person, Not the Deal</h2>
              <p>On August 28 we sat down with a client&apos;s sales team. The complaint was that reps could not find the right quote.</p>

              <p>Nothing was broken. Quotes were going out. Agreements were coming back signed. Both steps did exactly what they were written to do. But the quote attached to the contact record rather than the deal, and the system opens a new contact for every inquiry, so a repeat buyer has three or four records. A rep looking for one quote was opening all of them and reading dates.</p>

              <p>The fix was not a new process. We added a Document Links field on the deal itself and pointed the workflows that already existed at it: quote sent writes the quote link, document signed writes the agreement link. Two documented processes now hand something to the person standing between them.</p>

              <p>We did not write a procedure for this, and would push back on anyone who suggested it. Writing another document is the reflex. The seam did not need describing. It needed an owner and a field.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Seam Check</h2>
              <p><strong className="text-white">The Seam Check.</strong> Every place one documented process ends and another begins, with the person who carries the work across named in both documents.</p>

              <p>1. List every process you have written down. Put them in the order the work actually moves, not the order they were written.</p>

              <p>2. Wherever one ends and another begins, write a single sentence: who carries it across, what they receive, and what event tells them to start. If you cannot name a person, you have found one.</p>

              <p>3. Put that sentence in both documents &mdash; as the last step of the first and the first step of the second. It ends in two places or it ends in neither.</p>

              <p>Most businesses can do this in half an hour, because most businesses have fewer written processes than they think. What comes out is not a list of problems. It is a set of handoffs with names on them.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>A process can be documented, correct, current, and still not connected to the one standing next to it. Every document ends. The work does not.</p>

              <p className="italic text-white/60 pt-4">Drawn from TrueFlow&apos;s own SOP index in Notion and a client working session on August 28, 2026.</p>
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
