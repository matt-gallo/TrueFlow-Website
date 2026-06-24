'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'we-sent-236-blank-reminder-emails-back-door-test'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Sent 236 Blank Reminder Emails Last Week. The Automation Did Exactly What We Built It To Do."

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
              <span className="text-white/50 text-sm">June 23, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Sent 236 Blank Reminder Emails Last Week. The Automation Did Exactly What We Built It To Do.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A perfectly working automation still fired hundreds of blank emails &mdash; because the records were created through a door the trigger wasn&apos;t watching. Here&apos;s the Back-Door Test we now run on every build.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week, one of our own builds sent 236 blank reminder emails to real people. Empty subject context, missing dates, a greeting with no name behind it. The kind of message that makes a member wonder if you&apos;ve lost the plot.</p>
              <p>Here&apos;s the uncomfortable part: the automation didn&apos;t break. It ran exactly the way we built it. The reminder workflow we&apos;d set up for a membership community we operate fires when an appointment is booked through the normal flow &mdash; booking comes in, workflow wakes up, pulls the details, sends a clean reminder. That part worked flawlessly every time it was asked.</p>
              <p>It just wasn&apos;t asked.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What actually happened</h2>
              <p>Someone needed to stand up a full class schedule fast, so instead of booking each appointment through the normal path, they used the AI bulk-create tool inside the CRM (GoHighLevel&apos;s Ask AI) to spin up all 236 at once. Smart move on the time front. One problem: that creation path doesn&apos;t trip the booking trigger. So the workflow that populates the reminder &mdash; the one that fills in the date, the name, the Zoom link &mdash; never ran. The reminders went out anyway, on their default schedule, with every merge field empty.</p>
              <p>The automation was never the weak link. The assumption was: that there&apos;s only one way an appointment gets into the system. There are at least five.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Back-Door Test</h2>
              <p>This is the check we now run on every build before we trust it, and you can run it on yours today. It takes about ten minutes per automation.</p>
              <p>Write down every way a record can get created or changed in that system. Not the one you designed &mdash; all of them. For most service businesses that list looks like: the booking form, a manual add by a staff member, a CSV import, a Zap or webhook from another tool, an AI or bulk-action shortcut, and the raw API. Then, next to each door, mark whether it actually fires your trigger.</p>
              <p>Every door that bypasses the trigger is a silent failure waiting for the day someone&apos;s in a hurry. And someone is always, eventually, in a hurry. The bulk button exists precisely to be used on the worst possible afternoon.</p>
              <p>Most automation agencies test the happy path once, watch one clean reminder go out, and ship it. We&apos;ve stopped doing that. We now assume every build will eventually be fed through the wrong door, because in five years of doing this, every build has been.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">How to close the doors</h2>
              <p>Once you&apos;ve got the list, three moves fix almost everything.</p>
              <p>First, route every door through the trigger, or add a second trigger that catches the ones that don&apos;t &mdash; most platforms let you fire on &ldquo;record created&rdquo; generally, not just &ldquo;booked via form.&rdquo; Second, test a record through each door, not just the one you built. The CSV import and the AI tool deserve their own dry run. Third, put a guardrail on the output: a reminder with an empty date field should never be allowed to send. Gate the send on the required fields actually being present. That one rule would have caught all 236 before a single member saw them.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The takeaway</h2>
              <p>An automation that runs perfectly on the one path you tested isn&apos;t reliable &mdash; it&apos;s lucky. Reliability is knowing every door into your system and exactly what fires at each one. We learned that again the expensive way last week so that, ideally, you don&apos;t have to learn it on your own members.</p>
              <p className="text-white/50 text-sm italic">Source: a real TrueFlow build, June 2026; appointment counts and the failure drawn from our own internal records.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want your automations Back-Door Tested before they go live?</h3>
            <p className="text-white/60 mb-6">We test every entry path, not just the one we built.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
