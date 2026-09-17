'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'rule-to-stop-hype-cost-three-months-of-saying-anything'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Wrote a Rule to Stop Our AI Writing Hype. It Worked, and It Cost Us Three Months of Saying Anything."

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
              <span className="text-white/50 text-sm">September 17, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">5 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Wrote a Rule to Stop Our AI Writing Hype. It Worked, and It Cost Us Three Months of Saying Anything.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The rulebook that governs this blog banned every hype word, and it worked exactly as written &mdash; including on the sentences worth reading. Guardrails are the part of an automated system that goes stale first, and reviewing output will never show you which ones have.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On June 11 we wrote a rulebook for this blog. It governs every post here, including the ones a scheduled agent writes at 4:20 in the morning while nobody is awake to argue with it.</p>

              <p>The section on voice ended with a line about register: <em>no praise adjectives, no hype, no exclamation points, understated.</em></p>

              <p>We wrote that for a reason. Our industry writes like someone selling a timeshare. Every release is the one that changes everything, every screenshot is a record, and every number is either invented or calculated on a base that quietly excludes the problem. We wanted the opposite, and we got it. Go back through the summer archive: zero exclamation points, no invented client figures, every external claim carrying a source and a date.</p>

              <p>It also did something we did not ask for, and it took three months to see.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Machine Given a Direction Drives to the End of the Road</h2>

              <p>&ldquo;Understated&rdquo; is not a dial. It&apos;s a heading, and an automated writer holds a heading.</p>

              <p>Every sentence that takes a position is, strictly speaking, an overstatement. It says more than the evidence compels. So those went first, and nothing flagged their absence, because what was left was impeccable: a changelog date, a pricing change, a four-field checklist, a warning about a migration window. Correct. Sourced. Unarguable.</p>

              <p>Three months of posts that could not be wrong, because they never said anything.</p>

              <p>We rewrote the rulebook on September 16. The new one opens with a note on the old one &mdash; that it &ldquo;was built to prevent hype and succeeded so completely that it prevented assertion.&rdquo;</p>

              <p>That is not a rule failing. That is a rule working.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Forty-Six Posts, One Photograph, Nobody Alarmed</h2>

              <p>The same thing had already happened somewhere it left a mark you could count.</p>

              <p>Our publishing script had a single line in it that set the image for every auto-published post. When it was written we published about once a week and one stock photo was a reasonable answer. By the time anyone looked at the listing page properly, forty-six posts had gone out carrying the same picture of an orange laptop. We fixed it on August 17.</p>

              <p>Nothing broke. Every post published on schedule, rendered correctly, landed in the grid. The instruction was followed precisely. It was simply written by someone with a once-a-week blog in front of him, who had no occasion to think about the forty-sixth post.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">You Are Reading the Wrong Half of the System</h2>

              <p>Both of these ran for months in plain view, and they went unnoticed for the same reason: we were reviewing output.</p>

              <p>Reviewing output finds the thing that broke. It cannot find the thing that is working as instructed. A post with a stock photo looks like a post. A paragraph with no position in it does not read as damage &mdash; it reads as discipline, which is exactly why it survived three months of Mondays.</p>

              <p>The decision does not live in the output. It lives in the instruction, and the instruction is the part with a date on it. Yours was written against the failure you had that week, by a version of you with less information than you have now. The week ended. The rule is still running, in your voice, to your customers, while you are somewhere else.</p>

              <p>This is the half of automation nobody sells, because there is no product in it. A monitoring dashboard will tell you a workflow ran. It holds no opinion on whether what that workflow was told to do is still what you want.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Our Rules Now Have a Date at the Top, and the Date Is What We Check</h2>

              <p><strong>Every automated system we run keeps its instructions in one file, in plain English, with a date at the top.</strong> Not spread across a workflow builder&apos;s config panels and a prompt field and somebody&apos;s memory of a call. One file a person can read start to finish in ten minutes.</p>

              <p><strong>The review question is the date, not the runs.</strong> When did a human last read what this thing was told to do? For the rulebook the honest answer was ninety-seven days, and the cost of that was every post published inside it.</p>

              <p><strong>A new constraint gets one sentence naming what else it will stop.</strong> Write the trade down while you still know you are making one. &ldquo;Understated&rdquo; would have carried the line <em>this will also remove any sentence that takes a side.</em> We would have seen it in June instead of September.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">One Rule Will Talk to a Customer This Week</h2>

              <p>Something automated in your business will send a message to a customer this week. Which rule decides what it says, who wrote that rule, and what was true on the day they wrote it?</p>

              <p>If you can&apos;t answer the third part, you are not running a system. You are running someone&apos;s notes from a meeting they&apos;ve forgotten.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>A rule is a decision you make once and then keep making, long after the conditions that justified it have moved. Ours cost three months of writing that was technically flawless and not worth reading, and nothing in the pipeline reported a problem the whole time. The systems are not the maintenance job. The instructions are.</p>

              <p className="italic text-white/70 pt-4">Get one operational fix like this in your inbox every week &mdash; <a href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</a>.</p>

              <p className="italic text-white/60 pt-4">First-party: our own blog rulebook (June 11 and September 16, 2026) and publishing build log (August 17, 2026).</p>
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
