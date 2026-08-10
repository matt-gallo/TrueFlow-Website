'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'booking-form-second-kind-of-visitor'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Booking Form Has a Second Kind of Visitor Now. Nobody Told You."

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
              <span className="text-white/50 text-sm">August 10, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Booking Form Has a Second Kind of Visitor Now. Nobody Told You.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              ChatGPT Atlas stopped working yesterday, and agentic browsing moved into the apps your customers already have open. The question for a service business isn&apos;t whether to build an agent &mdash; it&apos;s whether an agent can finish a booking on your side. Here&apos;s the cold-path test.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On August 9, 2026 &mdash; yesterday &mdash; ChatGPT Atlas stopped working. OpenAI retired its standalone browser about nine months after launch and moved the browser-based agentic work into places people already are: a Chrome extension, an in-app browser inside the ChatGPT desktop app, and a cloud browser for agents inside ChatGPT Work.</p>

              <p>Most of the coverage read that as a failure. Read it the other way.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>A separate destination died. The capability got distributed.</p>

              <p>Until now, a customer who wanted an AI to go look something up on your site and act on it had to download a new browser and change a habit. Almost nobody does that. Starting now, the same capability rides along inside an extension and an app they already have open. The friction that was keeping agents off your website was never technical. It was a download.</p>

              <p>Here&apos;s the second number. HUMAN Security&apos;s 2026 State of AI Traffic benchmark, built on more than a quadrillion interactions, found agentic AI traffic grew 7,851% year over year in 2025, with AI-driven traffic overall up 187% and automation growing roughly eight times faster than human traffic.</p>

              <p>So the question every automation vendor is asking a small service business right now &mdash; should you build an AI agent? &mdash; is the less urgent one. The nearer question is whether an agent can complete a task <em>on your side</em>. Your competitors are spending this quarter buying agents. The higher-return move is making sure the ones your customers already have can book you.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Actually Doing Differently</h2>
              <p><strong className="text-white">We test the booking path cold.</strong> Logged out, no autofill, no saved card, no session history, no memory of a previous visit. That is the state an agent arrives in, and it&apos;s also the state a real person arrives in at 11:40pm on a phone they just picked up. Every step that survives only because you&apos;re already logged in is a step that fails both of them.</p>

              <p><strong className="text-white">We put the facts in text.</strong> Hours, service list, service area, price ranges, what to bring to a first appointment, whether you take that insurance. If those live inside a JPEG on the homepage or a PDF menu, a machine cannot read them. Neither can a screen reader &mdash; which means this isn&apos;t a new problem, it&apos;s the accessibility problem with a new business case attached.</p>

              <p><strong className="text-white">We watch machine-to-machine failures the way we watch human ones.</strong> Yesterday a Stripe webhook to our own app started failing delivery. Nothing on any screen looked wrong. We found out because Stripe emailed a person. That&apos;s the whole category in one line: automated traffic fails quietly at the edges of your business and tells you late, if at all.</p>

              <p><strong className="text-white">We don&apos;t blanket-block.</strong> The instinct when you hear &ldquo;bots on my site&rdquo; is to turn on the strictest filter your host offers. In 2026 that setting increasingly blocks demand. Separate the traffic &mdash; scrapers are not the same thing as a customer&apos;s assistant trying to fill out your intake form.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Open your own site in a private window on your phone and try to book yourself. Where does it stop? A CAPTCHA, a required account, a field that only makes sense if you&apos;ve been there before, a phone number as the only real path.</p>

              <p>Then: which facts about your business exist only inside an image?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Agentic browsing just stopped being a destination and became a feature. That doesn&apos;t mean you need to buy anything. It means the front door of your business is now being tried by something that can&apos;t call you, can&apos;t squint at a graphic, and won&apos;t email to ask. If your booking path only works for a warm, logged-in, patient human on a desktop, you don&apos;t have an AI problem. You have a door that only opens from the inside.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help making your booking and intake paths completable by a machine, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: OpenAI Help Center, &ldquo;Evolving Atlas into ChatGPT for browser-based agentic work&rdquo; (Atlas end date August 9, 2026); HUMAN Security, 2026 State of AI Traffic &amp; Cyberthreat Benchmark Report; internal TrueFlow monitoring, August 9, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
