'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'break-even-line-worth-automating'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Break-Even Line: How to Know a Task Is Actually Worth Automating"

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
              <span className="text-white/50 text-sm">July 23, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Break-Even Line: How to Know a Task Is Actually Worth Automating
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Most tasks you want to automate aren&apos;t worth automating &mdash; the honest math says delete them, not build them. Here&apos;s the Break-Even Line: three numbers, two minutes, and a rule that tells you whether to build, leave it alone, or kill the task entirely.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Most of the tasks you want to automate aren&apos;t worth automating. Not because automation is hard &mdash; because the math says delete them, not build them.</p>

              <p>Here&apos;s how owners get here. Something at work is annoying, so the instinct is &ldquo;automate it.&rdquo; But annoyance and expense are two different things. A task that irritates you twice a month and a task that quietly eats six hours a week look identical on your to-do list. They cost wildly different amounts. Automate the first one and you&apos;ve added another line to a tool stack that already isn&apos;t paying for itself. The median small business now runs about five AI tools, and 61% say cost is their biggest barrier to getting more out of AI (SBE Council, 2026). The problem was never access. It&apos;s that nobody runs the numbers before they build.</p>

              <p>So run them. Three numbers, about two minutes. Call it the Break-Even Line.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">One: Frequency Times Time</h2>
              <p>How many minutes does the task take, times how many times it runs per month. That&apos;s your monthly load in minutes.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two: Convert to Money at a Loaded Hour</h2>
              <p>Not a fantasy rate &mdash; the real cost of whoever does the task. If it&apos;s a $25/hour admin, use roughly $35 loaded. If it&apos;s you, use what an hour of your time is worth when spent on the work only you can do: selling, delivery, closing. That&apos;s the number the task is actually stealing from.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Three: Compare Against the True Cost to Automate</h2>
              <p>Build cost plus monthly maintenance. And be honest about maintenance &mdash; every automation has a tax. Tools change, an API shifts, something breaks silently, and someone has to notice. An automation you never check isn&apos;t free; it&apos;s a liability with a delay on it.</p>

              <p>The line itself: automate only if the monthly value clears the monthly maintenance by a wide margin <em>and</em> the build pays back inside roughly three months. If it doesn&apos;t clear the line, you have two honest options &mdash; and building is not one of them. Leave it manual, or delete the task.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Run the Two Examples</h2>
              <p>Illustrative numbers. Task A: copying quote details into an invoice by hand, 9 minutes a run, 60 runs a month. That&apos;s 9 hours, about $360 a month at a $40 loaded hour, on a build that rarely breaks. It clears the line without a second thought &mdash; automate it. Task B: reformatting a board report, 40 minutes, once a month. That&apos;s about $27 a month of time. Any custom build for it will cost more to babysit than it ever saves. It fails the line. Leave it manual &mdash; or ask whether that report needs to exist at all.</p>

              <p>Now the uncomfortable part: run this against your current wish list and most items fail. That isn&apos;t a sign you&apos;re behind. It&apos;s exactly why we audit before we build. Last week we sat with an owner who wanted three new automations. Two failed the line on the first pass, and the third turned out to be a step we could delete instead of automate. On another call, we talked a client out of switching tools entirely &mdash; the one they already had did the job, and the switch would have cost more than it saved. Neither conversation produced a build. Both produced a better month.</p>

              <p>Here&apos;s the sentence another agency will hate: a shop that will build anything you point at, without running this math first, is selling you speed on tasks that should have died. The most profitable automation is usually the one you never build, because you deleted the task instead.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Before you automate anything this quarter, put three numbers next to it &mdash; frequency, loaded cost, maintenance. If it clears the Break-Even Line, build it and don&apos;t look back. If it doesn&apos;t, the win was never a build. It was a delete.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Data source: SBE Council 2026 Small Business Technology Use Survey (small-business AI tool counts and cost-barrier figures, April 2026).</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
