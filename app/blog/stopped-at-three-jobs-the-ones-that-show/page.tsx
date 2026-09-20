'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'stopped-at-three-jobs-the-ones-that-show'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Most Companies Using AI Stopped at Three Jobs. The Three They Picked Are the Ones That Show."

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
              <span className="text-white/50 text-sm">September 20, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">5 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Most Companies Using AI Stopped at Three Jobs. The Three They Picked Are the Ones That Show.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Census data puts 57% of AI-using firms at three business functions or fewer, and names which three. Every one of them produces something you can look at. The job that has been costing you the most produces nothing at all, which is why nobody has offered to automate it.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>In April the Census Bureau published a working paper on where AI actually lands inside a company. Between November 2025 and January 2026, 18% of firms reported using AI in a business function. Of the firms that did, 57% used it in three functions or fewer.</p>

              <p>Three is the number worth sitting with. Not eighteen.</p>

              <p>The paper names the three, too. Sales and marketing, 52% of adopters. Strategy and business development, 45%. IT, 41%.</p>

              <p>Read that list again and notice what it has in common. Every one of them produces something you can look at.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Ours Went Into the Function With an Audience</h2>

              <p>Before diagnosing anyone else, ours.</p>

              <p>This blog is written by a scheduled agent and committed without a human in the loop. The first thing we automated in our own business was content. Sales and marketing &mdash; line one of the Census list.</p>

              <p>We did not pick it because it was the most expensive thing we were doing. We picked it because we could watch it work. A post appears every morning, and there is something to show for it by breakfast. That is a satisfying thing to build and a legible thing to point at, and neither of those reasons has anything to do with what it was costing us.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Five Months, and the Number for Four-Person Shops Did Not Move</h2>

              <p>A separate Census release in May, drawn from the Business Trends and Outlook Survey between December 14, 2025 and May 3, 2026, put AI use at 37% among firms with 250 or more employees. Among firms with fewer than 20 employees it barely shifted across the entire period. For firms with four or fewer, it sat under 20%.</p>

              <p>Five months. Flat.</p>

              <p>The standard reading is that small businesses are behind and need to catch up, which is the reading that sells a subscription. It does not survive contact with the list. Nothing in the fifteen functions the Census measures requires scale. The tools the 250-person firm is using are sold to anyone with a card, at prices a four-person shop pays without a meeting.</p>

              <p>What the large firm has is not access. It is somebody whose job includes deciding what gets automated next. The four-person shop has an owner who automated the satisfying one in a burst of momentum eight months ago and has not revisited the question since, because no part of his week is reserved for revisiting it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Nobody Is Calling You About the Fourth Job</h2>

              <p>Here is what the three-function ceiling actually is.</p>

              <p>You adopt where the work is visible. Marketing produces posts. Strategy produces documents. IT produces tickets that close. All three hand you an artifact, and an artifact is how anything gets noticed inside a business.</p>

              <p>The jobs that eat an owner produce nothing. Rescheduling the week after one cancellation. Re-reading a thread to remember what was promised. Re-keying the same information into the second system because the first one does not talk to it. Chasing the approval. Rewriting the quote. None of that leaves an artifact. It leaves a light on in the office at 9pm.</p>

              <p>There is no vendor category for it, either, because it is shaped differently in every business. A software company sells into a category. The thing draining you is not a category. It is the specific seam between two things you happen to do.</p>

              <p>The working paper also found a positive correlation between commercial performance and how broadly AI is integrated across functions. It is a correlation and the authors present it as one. But the agency down the street will read that line and sell you functions four, five and six as a bundle this quarter.</p>

              <p>That is the wrong conclusion and it is the expensive one. Breadth bought as a package is three more visible functions. What moves is which one is next, and that is a decision, not a purchase.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Ask What the Week Should Look Like Before We Ask What to Build</h2>

              <p>Three things, in this order.</p>

              <p>We write down the destination first. Not the problem &mdash; the week. Hours worked, what you never touch again, what you never miss, what you are no longer the backup for. Everything we build gets read against that, and most proposals die there.</p>

              <p>Then we go looking for the job with no output. It is the hardest one to find precisely because it leaves no trace in any system you could query, so we ask for it in words instead. It is usually the sentence that starts &ldquo;and then I have to.&rdquo;</p>

              <p>Then we build that one first, even when the visible one would demo better. This summer we took a recorded client call, unlimited length, straight into our own app and had it come out as organized task lists with the context and the relevant procedure already attached. Under half a day to build. A year ago that was one to three weeks, and our last attempt at it was slow enough that we stopped using it. Nobody will ever see that system. It is the reason the visible work gets done at all.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The One That Starts &ldquo;And Then I Have To&rdquo;</h2>

              <p>You do not need to go looking for it. You already know which one it is.</p>

              <p>It is the thing you would describe to a friend in that exact construction, the clause you add at the end of explaining your day. It has no dashboard, no vendor, no line item, and no one has ever offered to take it from you.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>Three functions is not where the capability ran out. It is where the visible work ran out. The fourth job in your business has no demo, no category and no one calling you about it, and it is the one that has been costing you the whole time.</p>

              <p className="italic text-white/70 pt-4">If you would like help picking the fourth job &mdash; the one in your business that produces nothing anyone can look at &mdash; <a href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</a>.</p>

              <p className="italic text-white/60 pt-4">Sources: U.S. Census Bureau working paper CES-26-25, &ldquo;The Microstructure of AI Diffusion: Evidence from Firms, Business Functions, and Worker Tasks,&rdquo; April 2026; U.S. Census Bureau, &ldquo;Large Firms With at Least 20 Employees Biggest AI Users,&rdquo; May 2026, drawing on the Business Trends and Outlook Survey, December 14, 2025 to May 3, 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Find the fourth job in your business &mdash; the one that produces nothing anyone can look at.
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
