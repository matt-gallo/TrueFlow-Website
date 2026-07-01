'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-hours-back-owner-benefits-least'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Team Is Getting 11.5 Hours Back From AI. You're Getting 5. Here's Why the Owner Benefits Least."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Market Signal</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 1, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Team Is Getting 11.5 Hours Back From AI. You&apos;re Getting 5. Here&apos;s Why the Owner Benefits Least.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A 2026 survey found employees save more than double the weekly hours owners do from AI. It&apos;s structural &mdash; and it means most owners are aiming their automation at the wrong person.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>A survey landed this spring that should bother every owner who&apos;s been footing the AI bill. In the SBE Council&apos;s 2026 Small Business Tech Use Survey &mdash; 517 small-business employers, fielded in February &mdash; the people who got the most time back from AI weren&apos;t the owners. Employees saved a median of 11.5 hours a week. Owners saved five.</p>
              <p>You bought the tools. You approved the spend. And you&apos;re getting less than half the refund your own team is.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why the Owner Benefits Least (In English)</h2>
              <p>It&apos;s not a fluke, and it&apos;s not because you&apos;re using the tools wrong. It&apos;s structural. AI is best at repetitive, well-defined execution &mdash; the reminders, the data entry, the first-draft emails, the lookups. A lot of employee work is exactly that shape, so it automates cleanly. Your day is the opposite: exceptions, judgment calls, the deal that doesn&apos;t fit the template, the decision only you can make. Those are the tasks that resist automation hardest. The more senior the work, the less of it a tool lifts off your plate directly.</p>
              <p>So the standard advice &mdash; &ldquo;automate your inbox, automate your calendar&rdquo; &mdash; quietly fails owners. You can shave minutes off the edges, but the core of your week is decisions, and a chatbot can&apos;t make them for you.</p>
              <p>Same survey, second number: 82% of small-business employers have already invested in AI tools, and 62% plan to increase that spend this year. So owners are pouring more money into a category that, so far, pays their staff back roughly twice as well as it pays them.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Do Differently</h2>
              <p>Here&apos;s the reframe we run with clients, and the sentence another agency would argue with: stop trying to automate the owner&apos;s tasks. Automate the owner&apos;s <em>decisions</em> instead &mdash; by fixing what feeds them.</p>
              <p>The owner&apos;s real time sink isn&apos;t doing the work. It&apos;s assembling the context to make the call: pulling the numbers, chasing the one missing update, reconstructing what happened before you can decide what happens next. That prep is repetitive and well-defined &mdash; which is exactly what AI is good at. Three concrete behaviors:</p>
              <p><strong className="text-white">We automate the pre-work, not the decision.</strong> The AI walks into your Monday with the deal already summarized, the exceptions already flagged, and a recommendation already drafted &mdash; so your five hours go to deciding, not hunting.</p>
              <p><strong className="text-white">We route the automatable work to the team, not the owner.</strong> If a task can run unsupervised, it should never land on the owner&apos;s plate first. Owners hoard the fiddly stuff out of habit; part of the build is moving it off you.</p>
              <p><strong className="text-white">We measure the owner&apos;s hours, not the system&apos;s task count.</strong> A build that saves the business forty hours and the owner zero has missed the point. The number we care about is the one you got back.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Question to Ask</h2>
              <p>Look at your own AI spend and ask one thing: of the hours it&apos;s handed back, how many were mine? If the honest answer is &ldquo;almost none,&rdquo; you don&apos;t have an AI problem. You have an automation pointed at the wrong person.</p>
              <p>The tools work &mdash; the survey settles that. But left on the default setting, they reward the people doing repeatable work and skip the person who signs the checks. Point them at the context feeding your decisions, and the owner finally gets a share of the refund.</p>
              <p className="text-white/50 text-sm italic">Sources: SBE Council 2026 Small Business Tech Use Survey (fielded February 2026), as reported by the Small Business &amp; Entrepreneurship Council and ColoradoBiz.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Getting your own hours back?</h3>
            <p className="text-white/60 mb-6">We&apos;ll help you point your automation at the owner&apos;s hours &mdash; not just everyone else&apos;s.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
