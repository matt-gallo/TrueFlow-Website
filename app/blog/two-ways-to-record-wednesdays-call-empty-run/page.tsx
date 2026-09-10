'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'two-ways-to-record-wednesdays-call-empty-run'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Had Two Ways to Record Wednesday's Client Call. Nothing Downstream Noticed That Neither One Did."

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
              <span className="text-white/50 text-sm">September 10, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Had Two Ways to Record Wednesday&apos;s Client Call. Nothing Downstream Noticed That Neither One Did.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Our meeting bot sat in a waiting room and our cloud recording had quietly run out of storage. Every system that reads from transcripts ran on schedule anyway. Here&apos;s the Empty Run &mdash; what an unattended process produces on the day its input never arrives, and whether you could tell.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On Wednesday, September 9, at 10:00 AM Mountain, we had a client call. Ten minutes in, Otter sent an email: the Notetaker had tried to join and the host had not admitted it. The bot sat in the waiting room for the whole call. Nobody saw the email until the call was over.</p>

              <p>That should have been fine, because Zoom records to the cloud on our account. Except that on the evening of September 8, and again on the 9th, Zoom had sent a notice we had not read either. Cloud recording was disabled. The account had used up its storage.</p>

              <p>Two recorders. Both configured. Both on, in the sense that matters to the person who set them up. Zero minutes of audio.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Missing Recording Is Not the Problem</h2>
              <p>A missed recording is an inconvenience. We took notes by hand and the client got what they needed.</p>

              <p>The problem is what sits downstream of the recording. At TrueFlow, the transcript from a call is the raw material for most of what runs unattended. The morning brief that lists yesterday&apos;s verified work. The end-of-day summary. The Friday recap. The Wednesday newsletter issue, which is written from that week&apos;s calls. The nightly job that mines the day for changed procedures and updates our SOPs.</p>

              <p>Every one of those runs on a schedule. Not one of them is built to say: a meeting happened today that I have no record of. They report the day they can see. On a day with a missing transcript, the day they can see is simply shorter, and the output is the same length, the same shape, and arrives at the same time.</p>

              <p>Nothing errored. We keep writing that sentence on this blog, and this week it was about us.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Missing Input Does Not Look Like a Failure. It Looks Like a Quiet Day.</h2>
              <p>The same dependency shows up in client work. A rep we are building a command center for feeds his daily and weekly summaries from voice notes he dictates after each office visit. That is the right design; a note spoken in the parking lot beats a spreadsheet updated every other week. But the summary generates on the days he does not dictate, too. It just has less in it, and it does not say why.</p>

              <p>That is the general shape. An automation gets built around an input that arrives so reliably nobody writes down what happens when it does not. A form submission. A calendar event. A file landing in a folder. A transcript. The process is tested on days the input exists, because those are the only days anyone was watching.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Empty Run</h2>
              <p>For every unattended process you rely on, answer one question: what does it produce on the day its input never arrives, and could you tell that output apart from a real one?</p>

              <p>Three steps.</p>

              <p>Name the input. Not the tool, the thing. Not &ldquo;Otter,&rdquo; but &ldquo;a transcript of every external call.&rdquo; Not &ldquo;the CRM,&rdquo; but &ldquo;a new contact record within an hour of a form submit.&rdquo;</p>

              <p>Name the sensor. Which run, if any, would report the input&apos;s absence in a form you would read? Not a log line. A sentence in something you already open.</p>

              <p>If there is no sensor, decide whether you need one. Sometimes an empty day is fine. Sometimes it is a client call that never makes it into the week&apos;s record, and three systems downstream told you the week was normal.</p>

              <p>This is not the Receipt Rule, which governs what an unattended run must report about the work it did. The Empty Run is about the work it did not do, and whether anything would say so.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Sensor We Did Not Have</h2>
              <p>For the transcript case, the sensor is one comparison: calendar events with an external attendee, set against the recordings that exist. Any event with no match gets listed by name at the top of the morning brief, before anything else. It is a short addition. We did not have it until Wednesday made the case for it.</p>

              <p>The Zoom storage limit goes on the Refill List, where it should have been from the start.</p>

              <p>The waiting-room problem stays unsolved. A bot that needs a human to click admit will keep needing one. Admitting it belongs on the call checklist, next to the line about confirming the recording is on.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>An automation that cannot see its input is not broken. It is running, and what it produces is a report on nothing, formatted exactly like a report on something.</p>

              <p className="italic text-white/60 pt-4">Sources: Otter.ai notification, September 9, 2026; Zoom cloud-recording notices, September 8 and 9, 2026; TrueFlow internal scheduled-task configuration.</p>
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
