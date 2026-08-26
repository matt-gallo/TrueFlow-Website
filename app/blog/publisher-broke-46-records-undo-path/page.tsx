'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'publisher-broke-46-records-undo-path'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Our Publisher Broke 46 Records in a Single Run. Undoing It Took One Command.'

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
              <span className="text-white/50 text-sm">August 23, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Publisher Broke 46 Records in a Single Run. Undoing It Took One Command.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              One bad run rewrote the image address on 46 posts and every one of them returned a 403. Undoing it was cheap, and that was luck rather than design. Here&apos;s the Undo Path &mdash; twenty minutes to find out which of your automations can be taken back and which ones cannot.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On August 17 our publisher rewrote the featured image on 46 blog posts in a single run. It rebuilt each address from parts instead of copying the one it had been handed, and dropped a date segment out of every filename. Every one of those images returned a 403. The manifest it wrote looked correct the whole time.</p>

              <p>Undoing it took one command. The thing it had written to was a git repository, which keeps every prior version of every file by default. We reverted the commit, redeployed, and the images came back.</p>

              <p>That is not a story about good engineering. Forty-six wrong records came out of one bad run, and the only reason it cost an afternoon instead of a week is that this particular automation happened to write into the one system in our stack that never throws anything away. Nobody designed for that. We inherited it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Question That Comes After &ldquo;Does It Work&rdquo;</h2>
              <p>Nearly all the checking that happens before an automation goes live is about whether it does the right thing. Almost none of it is about what happens on the day it does the wrong thing at full speed. The second question is the more useful one, because the first has an answer that changes every time the software updates underneath you.</p>

              <p>The Kore.ai Agent Productivity Index, fielded in May 2026 by Propeller Insights among 400-plus IT leaders at U.S. organizations with 2,000 or more employees, found that 79% had reversed an action taken by an AI agent.</p>

              <p>That sample looks nothing like a nine-person service business and the number does not transfer. Take one thing from it. Reversal is not the exception case. It is routine, at companies that employ people whose entire job is catching this before it ships.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Undo Path</h2>
              <p><strong className="text-white">The Undo Path.</strong> For every automation that writes something, write down the literal steps that take back one run, and how long they take.</p>

              <p>Four steps, about twenty minutes.</p>

              <p>1. List every automation that <em>writes</em>. Not the ones that read or report. The ones that send a message, create a record, change a field, charge a card, publish a page, move a file. Stop at fifteen.</p>

              <p>2. Next to each, write the largest number of things one run can touch. Not the average &mdash; the worst case. Ours was 46.</p>

              <p>3. Write the undo as instructions, in order, as if you were handing them to somebody else at 6pm on a Friday. &ldquo;Revert the commit, redeploy&rdquo; is an undo. &ldquo;Contact support&rdquo; is not an undo. It is a hope with a ticket number.</p>

              <p>4. Put a time on it. If you cannot write step three at all, write &ldquo;none&rdquo; and move on. That is the answer, and it is the most valuable line on the page.</p>

              <p>Every row lands in one of three places. Reversible by you, in minutes. Reversible by somebody else, on their schedule. Not reversible at all.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Third Column Is Longer Than It Looks</h2>
              <p>A delivered email is in it. So is a text message. A review request sent to the wrong customer, a payment captured, a record deleted in a tool with no trash, a listing pushed to a directory that caches. None of those have an undo. An apology is not an undo. It is a second message.</p>

              <p>Which means reversibility is mostly a property of the system you write into, not of the automation you built. You rarely get to choose it. You only get to know it in advance and size the run to match.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Changed</h2>
              <p>Anything landing in that third column now gets a cap on how much one run can touch. Our publisher writes a single post per run, so the worst version of that Monday is one broken record instead of forty-six. And every build we hand off now carries one more line in the handoff doc: what one run of this touches, and how to take it back.</p>

              <p>A client of ours opens a cold-email campaign this week into a twelve-thousand-contact list. Nothing about a delivered email is reversible, so the work went upstream of the send &mdash; the list, the fields, a small batch first. Once it goes there is no correction available. There is only a second email, which is a worse product than the first one.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>You will not catch every bad run. What a bad run costs you was decided earlier, by whether the thing it writes into keeps what was there before.</p>

              <p className="italic text-white/60 pt-4">Sources: TrueFlow&apos;s own site repository &mdash; commit history and image manifest, August 17, 2026; Kore.ai Agent Productivity Index, surveyed by Propeller Insights in May 2026, released June 17, 2026.</p>
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
