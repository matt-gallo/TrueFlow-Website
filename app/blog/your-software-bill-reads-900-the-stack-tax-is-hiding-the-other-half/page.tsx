'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'your-software-bill-reads-900-the-stack-tax-is-hiding-the-other-half'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Software Bill Reads $900 a Month. The Stack Tax Is Hiding the Other Half."

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
              <span className="text-white/50 text-sm">June 21, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Software Bill Reads $900 a Month. The Stack Tax Is Hiding the Other Half.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The sticker price of your tools is the smallest line in what they actually cost you. Here&apos;s a three-line audit &mdash; the Stack Tax &mdash; to find the rest before you buy one more subscription.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Add up your software subscriptions right now. The number you land on &mdash; call it $900 a month &mdash; is the one you think you&apos;re paying. It&apos;s also the least honest number in your business.</p>
              <p>Because the subscription is the cheapest part of owning a tool. The expensive part never shows up on the invoice.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Problem Isn&apos;t the Price. It&apos;s the Three Hidden Lines.</h2>
              <p>We audited a service business this month whose owner could rattle off her monthly tools from memory: a CRM, a scheduler, an email platform, a community app, a form builder, two AI subscriptions she&apos;d bought in a burst of optimism. Each one looked reasonable on its own. Forty here, ninety there. Nobody buys a $40 tool and thinks they have a cost problem.</p>
              <p>But &ldquo;each one looked reasonable on its own&rdquo; is exactly how the bill gets you. The damage isn&apos;t in any single line. It&apos;s in the three costs that never get itemized &mdash; what we call the <strong className="text-white">Stack Tax</strong>.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Stack Tax: A Three-Line Audit</h2>
              <p>Run this on your own stack before you add one more thing.</p>
              <p><strong className="text-white">Line 1 &mdash; Dead seats.</strong> Open every subscription and count the licenses and features you&apos;re actually using versus paying for. Zylo&apos;s 2026 SaaS Management Index, built on more than 40 million licenses, found that organizations leave an average of <strong className="text-white">36% of their SaaS licenses unused</strong>. A third of your stack may be a recurring charge for software nobody opens. That&apos;s not a price problem you can negotiate &mdash; it&apos;s a line item you can delete today.</p>
              <p><strong className="text-white">Line 2 &mdash; The seams.</strong> Every tool that doesn&apos;t talk to the next one creates a manual handoff: someone copies a name from the form into the CRM, exports a list, re-uploads it somewhere else. Count those handoffs. Each one is a salaried human being doing data entry your software was supposed to eliminate. Five tools don&apos;t cost you five subscriptions &mdash; they cost you the ten seams between them.</p>
              <p><strong className="text-white">Line 3 &mdash; The switch.</strong> Every app is a tab, a login, a place to check. The real tax of a sprawling stack is the attention it takes to operate it. When your team holds the integration in their heads, &ldquo;where does this live again?&rdquo; becomes a question they ask forty times a week.</p>
              <p>Add those three lines to your sticker number. For most owners we audit, the true carrying cost lands at roughly double the invoice. The $900 was never $900.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Apply It: Subtract Before You Add</h2>
              <p>Here&apos;s the opinion other agencies won&apos;t say out loud: the answer to a messy stack is almost never another tool, and it&apos;s frequently <em>fewer</em> tools doing more. The instinct when something breaks is to buy the thing that fixes it. The Stack Tax is what you accumulate by following that instinct ten times in a row.</p>
              <p>So before the next purchase, run the three lines. Cancel the dead seats first &mdash; that&apos;s free money this week. Then look at your seams and ask whether two tools could become one, or whether the platform you already pay for does the job of the thing you&apos;re about to buy. Only after you&apos;ve subtracted should you automate what&apos;s left. Automating a bloated stack just makes the bloat run faster.</p>
              <p>The owner we audited didn&apos;t need a new system. She needed to cancel two subscriptions, collapse two more into a platform she already owned, and connect the three seams that were eating her assistant&apos;s mornings. Her bill went down and her week got quieter. Nothing got &ldquo;added.&rdquo;</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Your software bill is a sticker price, not a cost. Count the dead seats, the seams, and the switching &mdash; then decide whether your next move is to buy, or to delete. The cheapest, fastest automation you&apos;ll do all year is usually a cancellation.</p>
              <p className="text-white/50 text-sm italic">Source: Zylo 2026 SaaS Management Index (published 2026), zylo.com/2026-saas-management-index.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want a Stack Tax audit on your business?</h3>
            <p className="text-white/60 mb-6">We find what to cancel before we build anything new.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
