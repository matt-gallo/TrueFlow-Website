'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'agents-run-seven-days-notice-window'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Google's Agents Can Now Run for Seven Days. Yours Should Be Capped at Your Notice Window."

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
              <span className="text-white/50 text-sm">August 5, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Google&apos;s Agents Can Now Run for Seven Days. Yours Should Be Capped at Your Notice Window.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              On July 29, Google made Agent Runtime generally available &mdash; agents that run continuously for up to seven days. It shipped alongside identity, audit, and observability tooling, and that pairing is the whole lesson. Here&apos;s the Notice Window, the one number that should govern how long your automations run unattended.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On July 29, 2026, Google moved Agent Runtime to general availability on the Gemini Enterprise Agent Platform. The headline capability: agents that run continuously for up to seven days. Google&apos;s own examples &mdash; a week-long sales sequence, a multi-stage onboarding, ongoing vendor compliance monitoring &mdash; are exactly the processes a small service business would love to hand off and stop thinking about.</p>

              <p>Here&apos;s the unpopular part: you should not want that yet, and the same announcement tells you why.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Until now, the practical ceiling on an agent wasn&apos;t ambition. It was that the thing lost the plot. It forgot context, timed out, or needed a person to restart it. Agent Runtime and Agent Memory Bank going generally available removes that ceiling. An agent can now hold state across a week and keep making decisions while nobody is looking at it.</p>

              <p>That&apos;s a real advance. It also moves the hard question. The constraint used to be &ldquo;can it run long enough.&rdquo; The constraint now is &ldquo;can you tell whether it&apos;s going well on day three.&rdquo;</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part of the Announcement Nobody Quoted</h2>
              <p>Google didn&apos;t ship seven-day autonomy by itself. In the same post it made Agent Identity, Agent Gateway, Agent Registry, Agent Evaluation, and Agent Observability generally available &mdash; a permissions model, a central control point, an inventory, a drift monitor, and end-to-end tracing. Duration and supervision shipped together, on purpose.</p>

              <p>Read the customer quote Google chose to include. Best Buy&apos;s cloud platform engineering lead: &ldquo;In the past, we&apos;ve struggled with orphaned service accounts, unclear ownership, and permissions that kept growing over time.&rdquo;</p>

              <p>That&apos;s a company with a dedicated platform engineering team admitting it lost track of automated things it built itself. Google&apos;s answer for them is a registry, a non-repudiable audit trail, and a live evaluation engine watching for behavioral drift in production.</p>

              <p>You don&apos;t have any of that. You have an inbox, a phone, and a rough sense of whether this week felt normal.</p>

              <p>That asymmetry is the whole story. Enterprises are getting seven-day agents because they&apos;re also buying the instruments to watch them. Take the duration without the instruments and you haven&apos;t bought autonomy &mdash; you&apos;ve bought a week of unverified work.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Do Differently</h2>
              <p>We size an agent&apos;s leash to something we call the <strong className="text-white">Notice Window</strong>: how long a process can run wrong before a human in your business would notice on their own, without being told by a customer.</p>

              <p>Three columns, one page, per automated process.</p>

              <p><strong className="text-white">Task.</strong> What the agent actually owns.</p>

              <p><strong className="text-white">Daily blast radius.</strong> What one day of wrong output costs &mdash; in dollars, or in customers touched.</p>

              <p><strong className="text-white">Notice window.</strong> Honestly, when would you find out? Most answers we get are &ldquo;when someone complains&rdquo; or &ldquo;at Monday&apos;s report.&rdquo; Write down the real one, not the flattering one.</p>

              <p>Then one rule: an agent&apos;s unattended run length must be shorter than the notice window for its task. If your notice window on outbound messaging is a week, the agent doesn&apos;t get a week. It gets a day, and a checkpoint.</p>

              <p>Second thing we build in: a heartbeat, not a completion notice. A daily two-line &ldquo;here&apos;s what I did, here&apos;s what I&apos;m about to do&rdquo; beats a polished report on day seven, because it turns a silent failure into a boring email.</p>

              <p>Third, and this is the one that gets pushback: we shorten notice windows before we lengthen leashes. Adding visibility to a step is cheaper than adding autonomy to it, and it&apos;s what makes the autonomy safe to add later. Agencies sell the leash because the leash demos well. The counter nobody sees is what keeps you out of trouble.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Take your most automated process. If it started producing wrong output tomorrow morning, who finds out first &mdash; you, or your customer? And how many days does that take?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Seven-day autonomy is genuinely new, and the vendors shipping it are being unusually honest about its price: identity, audit, observability, evaluation. Most small businesses will buy the first half of that sentence and skip the second. The number that should govern your automations isn&apos;t the vendor&apos;s maximum run length &mdash; it&apos;s your own notice window. For most owners we talk to, that window is far longer than they expected, and finding that out is worth more than any new agent.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help setting notice windows and checkpoints for the automations you already run, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Google Cloud Blog, &ldquo;What&apos;s new in Gemini Enterprise Agent Platform,&rdquo; July 29, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
