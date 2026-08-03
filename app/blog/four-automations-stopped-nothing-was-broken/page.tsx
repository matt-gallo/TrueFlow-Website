'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'four-automations-stopped-nothing-was-broken'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Four of Our Automations Stopped Last Week. Not One of Them Was Broken."

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
              <span className="text-white/50 text-sm">August 3, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Four of Our Automations Stopped Last Week. Not One of Them Was Broken.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The most common way an automation dies isn&apos;t a bug &mdash; it&apos;s a consumable running out. Here&apos;s the Refill List: the three things every automation quietly burns, and the four-column page that catches them before your customers do.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week, four automations in our orbit stopped doing their job. Here&apos;s the honest list, because it&apos;s more useful than a case study.</p>

              <p>A call-recording tool switched itself off &mdash; the account had hit its cloud storage ceiling, so recordings simply stopped being saved. A notetaker joined a meeting and never got admitted by the host, so an hour of conversation now exists only in people&apos;s memory. A CRM sub-account went to a negative wallet balance after an auto-recharge attempt failed, which puts every message that account sends on a clock. And a weekly reporting job flagged an error that had been sitting unread since its last run.</p>

              <p>Not one of those is a bug. Nothing was misconfigured. Every one of those workflows was built correctly and would pass a review today. They stopped because something ran out.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Failure Mode Nobody Builds For</h2>
              <p>We spend enormous energy protecting automations from breaking and almost none protecting them from emptying.</p>

              <p>A bug is a one-time event. You fix it and it stays fixed &mdash; our own publishing pipeline jammed on a file lock in July, we fixed the lock, and it hasn&apos;t jammed since. A consumable is a different animal. It runs out, you refill it, and it immediately starts running out again. There is no version of &ldquo;fixed.&rdquo;</p>

              <p>Consumables also don&apos;t announce themselves the way bugs do. A bug throws an error with a timestamp and a stack trace. A drained consumable produces a system that reports success while doing nothing &mdash; the tool is up, the workflow fired, the log says complete, and the actual work quietly stopped happening two Tuesdays ago.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Refill List</h2>
              <p>Every automation you run burns at least one of three things. Sort yours.</p>

              <p><strong className="text-white">Capacity.</strong> Storage, credits, message quotas, seats, API calls, contact limits &mdash; anything with a ceiling and a meter. Ceiling failures are the sneakiest, because everything works perfectly right up until it doesn&apos;t, and the tool usually keeps running. It just stops saving, sending, or enriching.</p>

              <p><strong className="text-white">Money.</strong> Cards on file, wallet balances, auto-recharge thresholds, annual renewals, and the expiration date on the card funding all of it. A failed auto-recharge is one of the most common causes of an &ldquo;our automation stopped&rdquo; call we get, and it never looks like a technical problem, because it isn&apos;t one.</p>

              <p><strong className="text-white">Permission.</strong> OAuth tokens, API keys, admin approvals, domain authentication records, and someone clicking &ldquo;admit.&rdquo; Permissions decay on their own schedule. An employee leaves and their token walks out with them. A grant expires at ninety days. DNS gets edited during a website refresh and the sending domain quietly loses its authentication &mdash; the emails still send, they just stop arriving.</p>

              <p>Now the math. The median small business runs about five AI tools (SBE Council, April 2026). Three consumable classes each is roughly fifteen quiet countdowns running underneath a stack the owner describes as &ldquo;set up.&rdquo; Most owners can&apos;t name the renewal date on a single one.</p>

              <p>The list itself is deliberately boring, which is why it works. For every automation: what does it burn, what&apos;s the ceiling, who refills it by name, and what tells you <em>before</em> it empties rather than after. Four columns, one page, reviewed on a fixed calendar date instead of on the day a customer notices.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part Another Agency Will Push Back On</h2>
              <p>Monitoring your automations for errors is the wrong monitoring. Error alerts catch the failures that were going to get caught anyway &mdash; someone was going to notice a workflow throwing red. The expensive failures are the ones where every dashboard reports green and the output is zero.</p>

              <p>And a build handed over without a Refill List isn&apos;t an asset you own. It&apos;s a countdown you&apos;re paying for. We won&apos;t hand one off without it, which occasionally means a launch slips a week &mdash; which is a strange week to spend, right up until you realize it&apos;s the document that decides whether the thing is still running in November.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Before you build anything else this month, go look at what your current automations are burning. Pick the one you&apos;d be most embarrassed to find dead, and answer four questions about it: what runs out, when, who refills it, and what warns you first. If you can&apos;t answer the fourth one, you don&apos;t have monitoring &mdash; you have a subscription and some optimism.</p>

              <p>Nothing in your stack has to break for it to stop working. That&apos;s the part worth writing down.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: internal TrueFlow and client-stack incidents, July 27 &ndash; August 3, 2026 (anonymized); SBE Council 2026 Small Business Technology Use Survey, April 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
