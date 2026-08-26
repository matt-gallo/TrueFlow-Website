'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'blog-skipped-a-day-nothing-ran-zero-check'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Our Blog Skipped a Day. Nothing Errored, Because Nothing Ran."

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
              <span className="text-white/50 text-sm">August 20, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Blog Skipped a Day. Nothing Errored, Because Nothing Ran.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              There is no post on this site dated August 19. Nothing failed, because nothing was attempted, and every monitor we had was attached to a run. Here&apos;s the Zero Check &mdash; the twenty-minute pass that gives every recurring process a floor instead of a status.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>There is no post on this blog dated August 19. Not a short one, not a broken one. None.</p>

              <p>The generator that writes this runs at 4:22 every morning. On Wednesday it produced nothing. Nothing errored, nothing turned red, and no part of the system we built around it said a word. We found the gap this morning by reading a list of filenames, which is the worst way to find anything.</p>

              <p>That is the failure worth writing about, and it is not really about a blog.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Every Alert You Own Is Attached to Something Happening</h2>
              <p>Look at what we were actually watching. Did the job finish. Did the file write. Did the commit reach the repository. Each of those is a reasonable question, and each has the same defect: you can only ask it about a run that took place.</p>

              <p>We published a piece here on August 11 arguing that every unattended automation should report back &mdash; four fields, every time, so you know what it did. That still holds, and it would not have caught this. A report describes a run. There was no run. Absence produces no evidence, so there was nothing for the monitor to read.</p>

              <p>This is what most monitoring sold to small businesses gets wrong. It assumes failure is loud. Failure is usually a smaller number.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What This Looks Like in a Business That Isn&apos;t Ours</h2>
              <p>Your booking confirmations stop sending on a Tuesday. The dashboard shows no errors, because no message was attempted. You find out when someone shows up on the wrong day.</p>

              <p>A lead form disconnects from your CRM. Nine leads on Monday, six on Tuesday, zero on Wednesday. Zero on Wednesday looks exactly like a slow Wednesday. There is no month in which that difference is cheap.</p>

              <p>The weekly report that goes to three inboxes quietly stops going. Nobody writes in to say they did not receive an email.</p>

              <p>In none of those cases did the system break. It stopped. Stopping is quieter than breaking, and it is the one failure mode with no notification attached to it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Zero Check</h2>
              <p>So here is the correction, and it takes about twenty minutes.</p>

              <p><strong className="text-white">The Zero Check.</strong> For every process that is supposed to produce something on a schedule, write down the smallest number it can produce and still be working. Then watch the number, not the status.</p>

              <p>Four steps:</p>

              <p>1. List every recurring process in your business that produces an output &mdash; messages sent, records created, reports delivered, posts published. Stop at ten. The ten that matter are obvious.</p>

              <p>2. Next to each one, write the expected count per period. At least three booking confirmations per weekday. At least one invoice on Friday. At least one post per day.</p>

              <p>3. Write down where you would go to see that count. If you cannot name a screen, a report, or a query, that process is not monitored, whatever your tools cost.</p>

              <p>4. Set each floor deliberately low, then check the counts once a week against the floors.</p>

              <p>The instrument rests on step two. A count can be zero. A status cannot &mdash; a status is green, and green is what a system that did nothing at all reports, because it also did nothing wrong.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Changed</h2>
              <p>Our publisher now checks a floor rather than a run: one post per day, and a missing day gets named.</p>

              <p>We are also adding one line to every build we hand off &mdash; what this is supposed to produce, and the smallest number that still counts as working. It is a sentence. It should have been in the first one.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Every alert you own is triggered by something happening. What cost us Wednesday was the absence of something happening, and absence does not trigger.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: TrueFlow&apos;s own site repository &mdash; commit history and published post index, August 13&ndash;20, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
