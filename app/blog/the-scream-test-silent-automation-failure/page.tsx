'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'the-scream-test-silent-automation-failure'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'The Most Expensive Automation Is the One That Breaks Without Telling You'

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
              <span className="text-white/50 text-sm">June 13, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Most Expensive Automation Is the One That Breaks Without Telling You
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Silent automation failures don&apos;t announce themselves &mdash; you find out from a customer. Here&apos;s the Scream Test we run on every workflow we build so a broken one can&apos;t hide.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Here&apos;s the failure mode nobody warns you about when you finally automate something: it works perfectly for six weeks, then quietly stops, and you don&apos;t find out until a customer asks why nobody followed up.</p>
              <p>The automation didn&apos;t error out with a red banner. A field renamed itself upstream, an API key expired, a calendar disconnected over the weekend &mdash; and the workflow just started doing nothing. No alert. No bounce. The dashboard still says &ldquo;active.&rdquo; Meanwhile leads pile up in a stage no one is watching, and the first sign of trouble is a refund request or a one-star review.</p>
              <p>This is the part of automation that the people who sold it to you have no incentive to mention. A silent failure is invisible by definition, so it never shows up in a monthly report. We&apos;d say it plainly: most agencies wire the build and skip the alarm, because the alarm is the thing that exposes when their build stops working.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why &ldquo;it&apos;s automated&rdquo; is not the same as &ldquo;it&apos;s running&rdquo;</h2>
              <p>An automation has two states people conflate. <em>Built</em> means the logic exists and once passed a test. <em>Running</em> means it actually fired today, on real data, and did what it was supposed to. The gap between those two is where money leaks, and it widens silently because nothing about a stalled workflow looks different from a working one until you go check.</p>
              <p>The cost compounds because the work that gets automated is usually the work that&apos;s time-sensitive. Follow-up is the classic case. MIT&apos;s lead-response research &mdash; still the most cited number in the 2026 speed-to-lead benchmarks &mdash; found a lead contacted within five minutes is 21x more likely to qualify than one contacted at thirty. So a follow-up sequence that silently dies isn&apos;t losing you a task. It&apos;s quietly converting your best-responding leads into your worst ones, and the damage is done weeks before you notice the pipeline looks thin.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Scream Test</h2>
              <p>The fix is a rule we apply to every workflow before we&apos;ll call it done: <strong className="text-white">if it can fail silently, it isn&apos;t finished.</strong> We make it pass the Scream Test &mdash; three wires on every automation that matters.</p>
              <p><strong className="text-white">A heartbeat.</strong> The automation confirms success, not just attempts. A weekly line that says &ldquo;fired 43 times this week&rdquo; tells you it&apos;s alive. Silence on the heartbeat is itself the signal.</p>
              <p><strong className="text-white">An alarm.</strong> When a step fails &mdash; auth drops, a record won&apos;t write, a send bounces past a threshold &mdash; something pings a human in a channel they actually read. Not a log file. Not an inbox folder nobody opens. A message that interrupts.</p>
              <p><strong className="text-white">An owner.</strong> One named person gets the alarm. &ldquo;The team&rdquo; is not an owner; a thing everyone can see and no one is responsible for is a thing that rots. If you can&apos;t name who gets paged when this breaks, it doesn&apos;t have an owner yet.</p>
              <p>Heartbeat, alarm, owner. A workflow with all three can still break &mdash; but it can&apos;t break quietly, and a failure you find out about in an hour costs a fraction of one you find out about in three weeks.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Apply it this week</h2>
              <p>Pick your three most important automations &mdash; the ones touching money or customers: lead follow-up, intake, invoicing. For each, ask the only question that matters: <em>if this stopped right now, how would I find out, and how long would it take?</em> If the honest answer is &ldquo;a customer would tell me,&rdquo; you don&apos;t have an automation. You have a liability that happens to work most of the time.</p>
              <p>You don&apos;t need new software for this. A scheduled summary message and one failure alert into the channel you already live in covers most of it. The discipline is the product, not the tooling.</p>
              <p>The takeaway is simple: don&apos;t measure your automations by how clever they are. Measure them by how loudly they scream when they break. The clever ones that fail politely are the ones that cost you the most.</p>
              <p className="text-white/50 text-sm italic">Source: MIT lead-response research, as compiled in 2026 speed-to-lead benchmark roundups (Apten, LeadResponse).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want automations that scream when they break?</h3>
            <p className="text-white/60 mb-6">We build the alarm into every workflow we ship.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
