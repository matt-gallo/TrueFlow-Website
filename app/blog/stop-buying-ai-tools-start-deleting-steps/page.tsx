'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/">
            <Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Automation</span>
              <span className="text-white/40 text-sm">June 11, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                The Average Small Business Now Spends $18,000 a Year on AI Tools. Stop Buying. Start Deleting.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              SMB AI adoption hit 82% in 2026 &mdash; and most owners are stacking tools on top of broken processes. The fix isn&apos;t another subscription. It&apos;s subtraction.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "The Average Small Business Now Spends $18,000 a Year on AI Tools. Stop Buying. Start Deleting."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                The average small business now spends about $18,000 a year on AI tools and subscriptions, and per the SBE Council&apos;s 2026 survey, 82% of small business employers have bought in. The median owner runs five separate AI tools. And yet the same surveys show cost is now the #1 barrier owners cite &mdash; 61% of them &mdash; which is a strange thing to say about tools that were supposed to save money.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Here&apos;s what&apos;s actually happening: owners aren&apos;t buying solutions anymore. They&apos;re buying guilt insurance. Another subscription is proof you&apos;re &ldquo;doing AI&rdquo; &mdash; even if nothing about your week changed.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                We talk to owners every week who are drowning in exactly this. Last week it was a clinic owner with 150+ unread emails a day, a task list spread across three apps, and &mdash; yes &mdash; AI tools in the stack. The tools weren&apos;t the problem. The problem is that nobody ever asked which of those 150 emails should exist at all.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Tools Multiply. Steps Don&apos;t Disappear.</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Every tool you add does two things: it handles a task, and it creates a surface. A login. A notification stream. A place where information goes to hide from the rest of your business. Five AI tools means five places your customer data half-lives, five things your team checks (or doesn&apos;t), and five monthly charges that each look small.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Software companies are happy to sell you a sixth. Their incentive is seats and subscriptions. Nobody selling you a tool gets paid more when your business has <em>fewer</em> moving parts &mdash; except a company that charges on outcomes. That&apos;s the quiet conflict of interest at the center of the entire SMB software economy, and almost nobody says it out loud.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Subtraction Audit: Delete &rarr; Condense &rarr; Automate</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                When we start a build, we don&apos;t open a tool. We open the owner&apos;s calendar and inbox, and we run three passes &mdash; in this exact order:
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. Delete.</strong> For each recurring task: what happens if this just stops? Most businesses run reports nobody reads, send internal updates nobody acts on, and collect form fields nobody uses. Deleting a step costs nothing and can never break. In a typical audit, 20&ndash;30% of recurring tasks fail the &ldquo;would anyone notice?&rdquo; test.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. Condense.</strong> Of what survives, what can collapse into one place? Three intake forms become one. Two status meetings become an automated digest. The five half-used AI tools usually condense to two that actually get worked. This is where most of that $18,000 gets clawed back.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">3. Automate.</strong> Only now &mdash; with a shorter, cleaner process &mdash; do you automate. Automating a bloated process just makes the bloat run faster. Automating a subtracted process is where the leverage lives, because every automated step is one a human never touches again.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Most providers run this backwards. They start at step three because that&apos;s what they can invoice for. Automating first isn&apos;t just suboptimal &mdash; it pours concrete over your worst processes.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Pull up your software spend and ask, for each line item: <em>&ldquo;If this disappeared tomorrow, what specifically breaks?&rdquo;</em> If you can&apos;t name it in one sentence, that&apos;s a deletion candidate. Then ask whoever builds your systems: <em>&ldquo;What did you remove from my business last quarter?&rdquo;</em> A provider who has only ever added things isn&apos;t engineering your operation. They&apos;re decorating it.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The owners winning with AI in 2026 aren&apos;t the ones with the most tools &mdash; the data says everyone has tools now. They&apos;re the ones with the fewest steps. Subtraction is the highest-ROI move in your business precisely because nobody can sell it to you in a checkout cart.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: SBE Council 2026 Small Business Tech Use Survey and 2026 SMB AI adoption research compiled by Medha Cloud and BizBuySell.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want a Subtraction Audit, Not Another Tool?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We delete before we automate. Discovery is free. You don&apos;t pay until the subtracted system produces the outcome we agreed on &mdash; not when the next subscription renews.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">Take the Free Assessment</Link>
              <Link href="https://trueflow.ai" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">See If You Qualify</Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
