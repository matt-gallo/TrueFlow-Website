'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'six-percent-automated-anything-unprompted-count'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Half of Small Business Workers Use AI. Six Percent of Them Have Automated Anything.'

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
              <span className="text-white/50 text-sm">August 26, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Half of Small Business Workers Use AI. Six Percent of Them Have Automated Anything.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The first Main Street AI Monitor put the adoption number at half of all small business workers. Four paragraphs down, six percent said they use it to run work with minimal human involvement. Here&apos;s the Unprompted Count &mdash; the only version of that question that survives contact with your P&amp;L.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On June 17, 2026, the U.S. Chamber of Commerce Foundation published the first Main Street AI Monitor, run with Ipsos on a nationally representative panel of 1,070 people employed at U.S. businesses with 2 to 499 staff, fielded May 8&ndash;11. The headline is the number everyone quoted: half of small business workers already use AI at work.</p>

              <p>The number nobody quoted sits four paragraphs down. Among the workers who use it, 64% say their main application is personal productivity &mdash; drafting, summarizing, brainstorming. Another 26% use it on recurring tasks. Six percent use it to automate workflows with minimal human involvement.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Nothing did. That is the finding.</p>

              <p>Six percent means that for nineteen of every twenty people who tell a pollster they use AI, the tool is a faster way to do the work by hand. Open the tab. Type. Read it back. Paste it somewhere. That is real value, and it is not automation, because it stops the second the person stops. Adoption, as the survey measures it, is a headcount of people with a habit.</p>

              <p>The same survey carries a second number that explains the first. At businesses with two to nine employees, 43% use AI for work tasks, against 59% at businesses with 100 to 249. About one in ten workers has been offered any formal training. And where adoption happened, 19% say it came from employees finding tools on their own, against 11% who say it came from any direction by the business.</p>

              <p>So at the small end: a few people, no training, each with a private tab open, each doing their own work somewhat faster, none of it written down. That is not a system. It is a set of habits, and every one of them leaves when the person does.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>We ran the count on ourselves first and it did not come back clean. There are 18 scheduled jobs on our list. Three of them produce nothing &mdash; one disabled, one retired earlier this month, and one that has sat in the list labeled as a scheduled task since March 31 with its schedule reading &ldquo;manual only.&rdquo; It has never fired on its own. On paper we had 18. The honest number was 15.</p>

              <p>That number has a name now, because we need it in client conversations.</p>

              <p><strong className="text-white">The Unprompted Count.</strong> The number of jobs in your business that produced an output in the last seven days without a person starting them.</p>

              <p>Three rules make it usable.</p>

              <p>A job counts once, whatever the volume. A hundred emails out of one workflow is one job, not a hundred.</p>

              <p>It only counts if you can name the output and go find it &mdash; a record written, a message sent, a file placed, a booking made. &ldquo;It&apos;s running&rdquo; is not an output.</p>

              <p>A job you review every morning still counts. A check is not a start. The question is whether the work happens without you, not whether you look at it afterward.</p>

              <p>Run it honestly and the count usually comes in below what the software bill implies. That gap &mdash; between what you are paying for and what runs on its own &mdash; is the thing worth fixing, and it is the same question the six percent number is asking.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Which of the AI tasks you do every week are you the trigger for, and what would have to be true for the trigger to be a time, an inbound message, or a change in a record instead?</p>

              <p>And when the person who found that tool is out for a week, what stops?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Half of small business workers use AI. Six percent of them have automated anything. Those are the same people, describing the same tool, answering two different questions.</p>

              <p className="italic text-white/60 pt-4">Sources: U.S. Chamber of Commerce Foundation and Ipsos, Main Street AI Monitor, published June 17, 2026, fielded May 8&ndash;11, 2026, n=1,070; TrueFlow scheduled-task register, read August 26, 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              If you&apos;d like help turning one of your prompted tasks into an unprompted one, book a strategy call with our team.
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
