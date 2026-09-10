'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'person-that-brings-the-coffee-activity-vs-value'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "“You're Just the Person That Brings the Coffee.” A Rep Named His Own Problem Better Than We Could Have."

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
              &ldquo;You&apos;re Just the Person That Brings the Coffee.&rdquo; A Rep Named His Own Problem Better Than We Could Have.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A medical-device rep described his own worst days in the field, and it decided the order we built his system in. The intelligent part came second. The boring part came first.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>A medical-device rep we&apos;re building a system with said this on a call last week, describing his own worst days in the field:</p>

              <p>&ldquo;If you&apos;re just running around doing random activities and buying coffees, but you never bring value&hellip; you&apos;re just like the person that brings coffees.&rdquo;</p>

              <p>He was not being hard on himself. He was being precise.</p>

              <p>His territory runs on a two-year clock. Getting a physician to adopt a new therapy takes about that long, because the patient outcomes that would convince anyone take three to twelve months to appear. Against a clock like that, a day of drop-ins feels like work and produces nothing you can point at by Friday. His pipeline lived in a spreadsheet he updated once a week. Sometimes once every two.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Nobody Can Count What a Visit Was Worth. Everybody Can Count Visits.</h2>
              <p>That is the whole trap, and it is not a discipline problem.</p>

              <p>Value in a job like his is slow, indirect, and mostly invisible at the moment it happens. A ten-minute conversation that changes how one physician thinks about a device shows up as revenue eleven months later, filed under something else. Activity is instant and countable. Visits made. Emails sent.</p>

              <p>So activity becomes the score. Not because anyone chose it, but because it was the only thing the system could see. He said the quiet part himself on the same call: &ldquo;being busy is good, but being busy isn&apos;t always good.&rdquo;</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Fastest Way to Do More of the Wrong Thing</h2>
              <p>This is the part that has changed, and it has changed against you.</p>

              <p>Dan Martell, in a video published September 9, on handing AI a badly defined problem: &ldquo;If you hand it the wrong problem, it&apos;ll research it. It&apos;ll plan it. It&apos;ll build it. It feels so good.&rdquo; His point is that the friction which used to stop people from executing bad ideas at volume is gone.</p>

              <p>Activity was already the easy thing to count. Now it is also nearly free to produce. In an episode published to Greg Isenberg&apos;s channel on August 31, the framing was blunter: messages sent is activity, and activity is not a business result.</p>

              <p>Point an agent at a job whose success metric is &ldquo;touches,&rdquo; and you will get touches. Thousands of them. Every one logged.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Built the Boring Half First</h2>
              <p>So the first phase of his build had almost no intelligence in it. It was capture and memory.</p>

              <p>Calendar, email and voice notes into one place. A briefing that lands at 4:30 in the morning, before he is in the car. A summary at eight at night. A contact log that assembles itself weekly instead of being retyped. The one behavior change we asked for was a habit, not a tool: dictate an after-action report in the parking lot before pulling out, while the conversation is still exact.</p>

              <p>The reason to do the unglamorous layer first is in that same August 31 episode: without somewhere durable to put context, &ldquo;next week the AI is starting from scratch again.&rdquo; A model with no memory of the last visit can only generate more activity.</p>

              <p>Two weeks in, his Salesforce and Outlook connectors are still with his IT admin. On most of these builds the blocker is a permissions ticket, not a technical problem. Plan for it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Got Wrong</h2>
              <p>By the second session we had moved his capture onto our own software, and immediately hit a ceiling we had built ourselves: voice notes cut off at ten minutes. A real debrief after a real visit does not always fit in ten minutes.</p>

              <p>We are raising it. The part worth admitting is how we found out &mdash; not from testing, but from someone using it for real work in a parking lot, the first week we handed it over.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Write Down What It Is Scored On</h2>
              <p>Before you automate anything, run the Win Condition on it: write the sentence naming what the system is scored on, and put it beside the sentence naming the outcome you actually want.</p>

              <p>For him, the first sentence was &ldquo;visits logged.&rdquo; The second is &ldquo;physicians who tried the therapy.&rdquo; Those are not the same sentence, and a system built against the first will produce a great deal of the first.</p>

              <p>He got there before we did, in his own words, about his own day: &ldquo;what did I actually do? What was really valuable?&rdquo;</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Activity is what a system can see. Value is what the business runs on. Anything you automate before you have written down the difference will give you more of whichever one is easier to count.</p>

              <p className="italic text-white/60 pt-4">Sources: Dan Martell, &ldquo;Do This With AI, It Will Change Your Life,&rdquo; published September 9, 2026; &ldquo;Marketing Engineer: The $1M Job with AI Agents,&rdquo; Greg Isenberg&apos;s channel, published August 31, 2026; TrueFlow client build sessions, September 2 and September 9, 2026.</p>
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
