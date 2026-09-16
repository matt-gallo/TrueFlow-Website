'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'time-back-is-not-a-product-focus-is-the-constraint'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Every AI Company Is Selling You Time Back. I Had All of It Once, and Nothing Got Done."

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
              <span className="text-white/50 text-sm">September 16, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Every AI Company Is Selling You Time Back. I Had All of It Once, and Nothing Got Done.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              After I sold my gym I had unlimited time and I watched every Star Wars movie. The 20% that moves the needle still didn&apos;t get done. Time was never the constraint, which means most of what this industry sells you is aimed at the wrong thing.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>After I sold the CrossFit gym, I had all the time in the world.</p>

              <p>I watched every Star Wars movie. I rewatched the Matrix trilogy to see whether I&apos;d miss anything the second time. I had four or five business ideas I was half-pursuing in sporadic bursts, and a calendar with nothing on it.</p>

              <p>None of the things that would have actually moved the needle got done.</p>

              <p>Not some of them. None. I had the maximum possible amount of time, no boss, no payroll, no excuse, and the 20% that drives the outcome sat exactly where it was in month one.</p>

              <p>That&apos;s the experience I keep coming back to, because it disproves the thing my entire industry sells.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Twenty Hours Back Is Not a Product</h2>
              <p>Open any AI automation company&apos;s homepage. <em>Save 20 hours a week. Get your time back. Stop doing admin.</em></p>

              <p>We&apos;ve said versions of it here too, which is the part I&apos;m less comfortable with. It&apos;s an easy promise because it&apos;s measurable and it sounds like generosity.</p>

              <p>It&apos;s also aimed at the wrong thing. If hours were the constraint, my couch would have been the most productive year of my life. Hand a man twenty hours and no change to what&apos;s occupying his head, and you&apos;ve handed him more couch. He&apos;ll fill it the way I filled mine.</p>

              <p>What was actually missing had a different name.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Stick Breaks on a Dark Trail</h2>
              <p>Focus is what happens when your conscious awareness unifies on one thing. You hear a stick break on a trail at night and your whole body stops. Everything else in your head is gone. That&apos;s it. That&apos;s the whole mechanism, and it lasts about a second.</p>

              <p>The reason you can&apos;t summon that at your desk is that nothing at your desk breaks a stick.</p>

              <p>Instead there are tabs. Not browser tabs &mdash; the other kind. The follow-up you owe someone. The post you were going to write. The invoice you haven&apos;t chased. The thing your wife asked you about on Sunday. None of them are urgent, all of them are open, and every one takes a slice of the attention you were about to spend on the work that matters.</p>

              <p>You can block Thursday afternoon for your kid and still spend it running the tabs. I did. That is the tax, and it gets paid by your nervous system whether or not you&apos;re at work.</p>

              <p>So the honest version of the problem isn&apos;t <em>I don&apos;t have enough hours.</em> It&apos;s <em>I have never once been in a position where exactly one thing was demanded of me and everything else was genuinely handled.</em></p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Question Isn&apos;t What You Could Do</h2>
              <p>Here&apos;s the part that made the difference, and it&apos;s smaller than it sounds.</p>

              <p>Most productivity tooling answers the question <em>what could I do?</em> It produces a list. A hundred items, sorted by project or by date, every one of them technically available to you right now. That list is not a relief. It&apos;s the tabs, written down and given a nicer interface.</p>

              <p>The useful question is narrower: <strong>what is demanded of me in this moment?</strong> Not what&apos;s possible, not what&apos;s on deck for Thursday. What has a red light on it right now.</p>

              <p>We built our own answer to that this month. Long-form audio goes straight into the app &mdash; a two-hour conversation, whatever it is &mdash; and comes back as a task list where each item is small, carries the context to actually do it, and can be pushed with one tap. Schedule it. Do it later. Don&apos;t worry about it. What&apos;s left at the top is the thing with a red light.</p>

              <p>The list didn&apos;t get shorter. A hundred things are still a hundred things. What changed is that ninety-nine of them stopped asking me for anything. The weight comes off, and what&apos;s in front of you is in front of you.</p>

              <p>That build took me under half a day. A year ago I&apos;d have budgeted one to three weeks, and the last time I tried something like it the whole thing was slow and burdensome enough that I put it down. That gap &mdash; between the idea and the working thing &mdash; is the part of this era most people haven&apos;t noticed yet.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What This Costs You If You Get It Backwards</h2>
              <p>If you buy automation to remove work, you&apos;ll get what you paid for and you&apos;ll carry the same load. The stress doesn&apos;t disappear when the task does. It relocates. You&apos;ll stop doing the follow-up yourself and start worrying about whether the system did it, which is the same tab with a new label.</p>

              <p>If you buy automation to remove <em>decisions</em> &mdash; to shrink the number of things allowed to ask you for attention at any given moment &mdash; something different happens. You get the second before the stick breaks back. That&apos;s where the work you&apos;re actually good at lives.</p>

              <p>I&apos;d rather sell a man one hour he&apos;s fully present for than five he spends half-somewhere-else. So would he, if anyone asked.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Time was never the constraint. I proved that to myself on a couch with a year of it and two streaming subscriptions. The constraint is how many things are allowed to ask you for attention at once &mdash; and that is a design problem, which means it&apos;s solvable, which means it&apos;s worth being deliberate about. Ask what your systems are removing. If the answer is hours and not decisions, you bought the wrong thing.</p>

              <p className="italic text-white/60 pt-4">First-party: our own build log and founder interview, September 16, 2026.</p>
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
