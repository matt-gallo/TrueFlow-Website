'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'every-quote-opened-two-deals'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Every Quote Opened Two Deals. Both Workflows Were Doing Exactly What They Were Told."

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
              <span className="text-white/50 text-sm">September 22, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Every Quote Opened Two Deals. Both Workflows Were Doing Exactly What They Were Told.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Two automations on a pipeline we built listened for the same event, and each quote produced a real deal and a blank twin. Neither workflow was wrong. The system was, and the cost was never the duplicate &mdash; it was the person who stops trusting the board.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>This one is ours.</p>

              <p>A sales pipeline we built started doing something small and irritating. Every time a quote went out, the deal moved to Submitted Pricing, which was correct. And a second deal appeared beside it. Same contact, same stage, completely blank.</p>

              <p>Nothing errored. The board just got longer.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two Workflows Heard the Same Click</h2>

              <p>On a call this morning we traced it. Two workflows were listening for the same event: Quote Sent.</p>

              <p>The first was created on August 28 to make sure every quote had a deal attached. Its instruction was simple. When a quote is sent, create an opportunity.</p>

              <p>The second existed to keep deal values accurate. Its instruction was also simple. When a quote is sent, find the deal and update its value.</p>

              <p>Both were correct. Each would have passed any test you gave it on its own. Run together, one updated the real deal and the other built an empty one next to it, every time a quote went out.</p>

              <p>This is the failure that does not look like failure. Two reasonable instructions, written at different times, each answering a different question about the same moment. Nobody had asked which one owned it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Duplicate Costs a Moment. The Doubt Costs the Pipeline.</h2>

              <p>A blank deal takes a moment to delete. That is not the damage.</p>

              <p>The damage lands on whoever is looking at the board. The first time a rep sees two deals for one customer, he checks which one is real. The second time, he starts checking every deal. A few weeks in, the pipeline is something he verifies instead of something he trusts, and the reason it was built &mdash; so nobody has to carry the state of every deal in his head &mdash; is gone. He is carrying it again, plus a board.</p>

              <p>That is the part owners feel and rarely name. Not &ldquo;our CRM is buggy.&rdquo; A low hum of not quite believing the screen.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">More Workflows Is Not More Automation</h2>

              <p>Here is the position, and a fair number of agencies will dispute it.</p>

              <p>The common way to build is one workflow per request. Someone asks for a deal on every quote, and a workflow appears. Someone asks for values to stay current, and another appears. Each one is tidy, each one is easy to explain on an invoice, and the account fills up. Nobody draws the map of which ones fire on the same event, because no single request ever asked for the map.</p>

              <p>The number of workflows in an account is not a measure of how automated the business is. Past a point, it measures how many things can collide.</p>

              <p>What we build to now: every trigger has exactly one workflow responsible for what happens next. If two jobs need to happen when a quote goes out, they live in the same workflow, in order, where each can see what the other did.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Did Not Add a Third Workflow</h2>

              <p>The instinct is to add a cleanup automation that finds and deletes the blank twins. That treats the symptom and adds a third thing listening to the same event.</p>

              <p>We merged the two instead. One workflow now owns Quote Sent. It looks for an open deal on that contact with no quote attached yet. If it finds one, this is the first quote, and it updates that deal with the link, the value and the stage. If it finds none, the quote belongs to new work, and it creates a new deal with the quote number in the name.</p>

              <p>The old second workflow went to draft. Parked, not deleted, so there is a record of what it used to do.</p>

              <p>One thing from the same call is still open. The merged workflow is running minutes behind the action. A quote sent at 12:09 moved its deal at 12:11. We do not know why yet, and we are saying so, because a board that lags two minutes produces the same hum as a board that duplicates. The person in front of it starts checking.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>Two correct automations on one trigger make one wrong system. The duplicate is cheap to delete. What it costs is the person who stops believing the board and goes back to carrying the pipeline in his head.</p>

              <p className="italic text-white/70 pt-4">If you&apos;d like help finding which of your automations are listening for the same event, <a href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</a>.</p>

              <p className="italic text-white/60 pt-4">Source: TrueFlow pipeline troubleshooting call, September 22, 2026, and the workflow history of the pipeline involved.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Find out which of your automations are listening for the same event.
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
