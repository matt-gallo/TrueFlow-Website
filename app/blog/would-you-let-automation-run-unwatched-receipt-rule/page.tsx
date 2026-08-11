'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'would-you-let-automation-run-unwatched-receipt-rule'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Would You Let Your Automation Run for a Week Unwatched? 78% of Owners Say No — For the Wrong Reason."

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
              <span className="text-white/50 text-sm">August 11, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Would You Let Your Automation Run for a Week Unwatched? 78% of Owners Say No &mdash; For the Wrong Reason.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Bluevine surveyed 942 small business owners and found 78% won&apos;t let AI handle even low-level tasks without supervision. That&apos;s usually read as a trust problem. It&apos;s a visibility problem &mdash; and the Receipt Rule fixes it in an afternoon.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Bluevine published its 2026 Small Business AI Trends Report on July 15, built on 942 U.S. small business owners surveyed April 7&ndash;9. One number in it explains more about why AI hasn&apos;t paid off for small businesses than any adoption statistic has all year.</p>

              <p>Only 22% of owners are completely confident letting AI handle low-level tasks without human supervision. Which means 78% are watching. The report&apos;s own framing is blunt about the irony: those low-level tasks &mdash; sorting inquiries, drafting replies, moving records &mdash; are exactly the tasks that would give an owner the most time back.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What That Number Actually Says</h2>
              <p>Every write-up of this data calls it a trust gap and prescribes training. Bluevine found 82% of owners hit at least one barrier going deeper with AI, led by data security at 33% and doubts about accuracy at 31%.</p>

              <p>I&apos;d argue accuracy isn&apos;t the real blocker. You don&apos;t supervise your bookkeeper because you think she&apos;s bad at math. You&apos;d supervise her if she filed things and never told you what she&apos;d filed.</p>

              <p>That&apos;s the actual condition most small business automations run in. A workflow fires, something happens somewhere, and the owner finds out when a customer mentions it. So the owner keeps one eye on it forever. And an automation you have to watch isn&apos;t automation &mdash; it&apos;s a second job with extra steps.</p>

              <p>The other half of the survey backs this up. 52% of SMBs using AI report a return; 24% say they haven&apos;t seen one yet. That gap doesn&apos;t split along tool quality. Everyone in both groups has access to the same models.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Receipt Rule</h2>
              <p>Here&apos;s what we require before any automation we build is allowed to run on its own. Every run leaves a receipt with four fields:</p>

              <p><strong className="text-white">1. What it did</strong> &mdash; in one plain sentence, not a status code. &ldquo;Sent the intake follow-up to Dana R.&rdquo;</p>

              <p><strong className="text-white">2. Who it touched</strong> &mdash; the customer, the staff member, or nobody. Anything that reaches a customer gets a higher bar than anything that reaches a spreadsheet.</p>

              <p><strong className="text-white">3. What it decided not to do</strong> &mdash; the skipped cases. This is the field almost nobody builds, and it&apos;s the one that catches problems. An automation that quietly skipped 40 of 60 contacts looks identical to one that ran perfectly.</p>

              <p><strong className="text-white">4. When it last ran</strong> &mdash; a timestamp you can eyeball. Not &ldquo;active.&rdquo; Active is a setting. A timestamp is evidence.</p>

              <p>Receipts go to one place an owner already opens daily. Not a dashboard you have to remember exists. If checking the receipts requires logging into a sixth tool, you&apos;ll stop within two weeks and go back to supervising by vibes.</p>

              <p>We hold ourselves to this. The daily post you&apos;re reading is produced by a scheduled agent, and its receipt is a commit and a written report naming the sources it used and the choices it made. If it skips a day, that&apos;s visible immediately. Not because we trust it more than you trust your tools &mdash; because we can check it in fifteen seconds.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two Questions Worth Answering Today</h2>
              <p>Pick your most important automation. <strong className="text-white">If it silently stopped this morning, how would you find out, and how long would that take?</strong> If the honest answer is &ldquo;a customer would tell me,&rdquo; you don&apos;t have an automation problem yet &mdash; you have one scheduled for later.</p>

              <p>Then: <strong className="text-white">which of your automations can tell you what it chose not to do?</strong> Most can report successes. Almost none report their skips, and skips are where the money leaks.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The 78% aren&apos;t being paranoid. They&apos;re responding rationally to systems that don&apos;t report back. More training won&apos;t fix that, and neither will a better model &mdash; you&apos;d still be supervising, just a smarter thing. Make your automations produce receipts and the supervision becomes a fifteen-second habit instead of a standing worry. That&apos;s the difference between the 52% seeing a return and the 24% still waiting.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Source: Bluevine, 2026 Small Business AI Trends Report, published July 15, 2026 (survey conducted by Centiment, fielded April 7&ndash;9, 2026, n=942 U.S. small business owners).</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
