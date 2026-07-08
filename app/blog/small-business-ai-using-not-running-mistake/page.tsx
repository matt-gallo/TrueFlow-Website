'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'small-business-ai-using-not-running-mistake'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "68% of Small Businesses Use AI Now. Most Are Making the Same Expensive Mistake."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Playbook</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 8, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              68% of Small Businesses Use AI Now. Most Are Making the Same Expensive Mistake.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Adoption is no longer the problem &mdash; most owners use AI daily. The mistake is that they open it instead of running it, and the hidden costs are quietly doubling the bill.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>By mid-2026, using AI stopped being the differentiator. A 2025 U.S. Chamber of Commerce and Teneo survey put small-business AI adoption around 68%, and every survey since has pushed the number up, not down. If you run a clinic, an agency, or a local service business, odds are you already use AI most days. That is not the win it sounds like &mdash; because the same surveys that show near-universal adoption also show that most owners are &ldquo;winging it.&rdquo; That&apos;s the mistake, and almost everyone is making it the same way.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>The bar moved. Two years ago, &ldquo;we use AI&rdquo; meant you were ahead. Now it means almost nothing, because your competitor down the street is doing the exact thing you are: opening ChatGPT, pasting in a job, copying the answer back into an email or a doc, and closing the tab. That is not automation. It is a faster typewriter. The AI never touched your business &mdash; it touched your clipboard. When you close the laptop, nothing keeps running, nothing follows up, nothing gets logged. You did the work; the tool just helped you do it slightly quicker.</p>
              <p>Here&apos;s the line another agency won&apos;t say out loud: selling you more AI seats is the easiest sale in the world and close to the least useful thing anyone could do for you. Another login doesn&apos;t remove work from your plate. It adds a tab.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Second Number Nobody Quotes</h2>
              <p>Ad hoc AI isn&apos;t just low-leverage &mdash; it&apos;s quietly expensive. The average small business now spends around $2,400 a year on AI subscriptions, but that&apos;s the sticker price. Once you add the time your team spends learning each tool, the disruption of switching between them, and the integrations you half-build and never finish, the real cost lands closer to $4,000&ndash;$5,000 a year for a 10&ndash;20 person team (DigitalApplied, 2026). You&apos;re paying a system-level bill for tool-level results: five subscriptions, zero things that run without a human in the chair.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>We don&apos;t start by adding an AI. We start by finding the three things you already do by hand every single day &mdash; the follow-up text, the intake summary, the end-of-day recap &mdash; and we make one of them run without you. Not &ldquo;help you do it.&rdquo; Run it. The test we use is blunt: if it stops the moment you close the tab, it isn&apos;t done.</p>
              <p>That usually means fewer tools, not more. This week we onboarded a business onto a new CRM and spent the first session deleting dead fields and collapsing its pipeline &mdash; not bolting on another AI subscription. The owner didn&apos;t need a sixth tool. They needed one workflow that ran on its own so the other five had something to plug into. Subtraction first, then automation &mdash; the boring order, and the one that actually gives you time back.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>One question cuts through it: name one thing AI did in your business yesterday while you weren&apos;t watching. If you can&apos;t &mdash; if every AI &ldquo;win&rdquo; this week required you sitting there, prompting it &mdash; then you don&apos;t have automation. You have a smarter assistant who goes home every night, and you&apos;re paying retail for the privilege. Then the follow-up: of the tasks you did by hand yesterday, which one do you do the exact same way every time? That&apos;s the one worth making run without you first.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Adoption was the easy part, and you&apos;ve already done it. The gap now isn&apos;t whether you use AI &mdash; it&apos;s whether any of it runs when you&apos;re not in the room. Using AI is a habit. Running it is a system. The owners who feel the difference this year will be the ones who stopped opening tools and started deleting the work.</p>
              <p className="text-white/70 italic">If you&apos;d like help turning your daily copy-paste AI habits into one workflow that runs without you, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: small-business AI adoption ~68% (U.S. Chamber of Commerce &amp; Teneo, 2025); AI subscription and hidden-cost figures (DigitalApplied, 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Is any of your AI actually running without you?</h3>
            <p className="text-white/60 mb-6">We&apos;ll help you turn your daily copy-paste AI habits into one workflow that runs on its own &mdash; and delete the tools you don&apos;t need.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
