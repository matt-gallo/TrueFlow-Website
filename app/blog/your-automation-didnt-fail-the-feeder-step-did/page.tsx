'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'your-automation-didnt-fail-the-feeder-step-did'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Automation Didn't Fail. The Step Feeding It Did."

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
              <span className="text-white/50 text-sm">June 16, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Automation Didn&apos;t Fail. The Step Feeding It Did.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Every automation depends on one manual input upstream &mdash; and that quiet &ldquo;feeder step&rdquo; is where most systems actually break, not in the software.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>A client we produce content for almost ran their pipeline dry last week. Not because an automation broke. Every workflow downstream was running fine &mdash; the editing queue, the scheduling, the posting, all of it humming. The problem was three weeks of silence at the very top. The raw footage simply stopped arriving.</p>
              <p>Nothing errored. No alert fired, because there was nothing to alert on &mdash; the machine wasn&apos;t broken, it was just idling, waiting for input that never came. By the time anyone noticed, the content calendar was nearly empty.</p>
              <p>This is the failure mode almost nobody plans for, and it&apos;s the one we see most often.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The thing everyone automates, and the thing they forget</h2>
              <p>When an owner says &ldquo;let&apos;s automate our content&rdquo; or &ldquo;automate our intake&rdquo; or &ldquo;automate our follow-up,&rdquo; they&apos;re almost always talking about the visible middle: the steps that are tedious, repetitive, and obviously mechanical. Those are the easy wins. They feel like progress because you can watch them run.</p>
              <p>But every automation has a <strong className="text-white">feeder step</strong> &mdash; the single manual action at the very front that the entire system depends on. Someone uploads the footage. Someone forwards the lead. Someone marks the deal &ldquo;won.&rdquo; The downstream machine is only as alive as that one input.</p>
              <p>And here&apos;s the uncomfortable part: the feeder step is usually the one step you can&apos;t see on your dashboard. Your monitoring tools watch the automation. They don&apos;t watch the human who&apos;s supposed to start it. So when that person gets busy, travels, or just forgets, the whole system goes quiet &mdash; and quiet looks identical to &ldquo;working fine.&rdquo;</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Feeder Step audit</h2>
              <p>Before you add another tool or another workflow, run this on any automation you already own. It takes about ten minutes per system.</p>
              <p><strong className="text-white">One: trace it back to step zero.</strong> Follow the workflow upstream until you hit the first action a human has to take for the whole thing to run. That&apos;s your feeder step. If you can&apos;t name the person responsible, you&apos;ve already found your risk.</p>
              <p><strong className="text-white">Two: ask what happens when that person stops.</strong> Not <em>if</em> &mdash; <em>when</em>. They will, eventually. If the answer is &ldquo;the system silently does nothing,&rdquo; you have a single point of failure dressed up as an automation.</p>
              <p><strong className="text-white">Three: automate the input, not the alarm.</strong> Most agencies will sell you a monitoring layer here &mdash; a notification that fires when no footage arrives, when no lead comes in. That&apos;s solving the wrong problem, and we&apos;ll say what most won&apos;t: the alert is often busywork you&apos;re paying for. An alert still needs a human to act on it. The better fix is to remove the human from the feeder step entirely. For the content client, that meant switching on the camera&apos;s auto-upload-over-WiFi feature &mdash; the footage now lands the moment recording stops, no one in the loop. The feeder step stopped being a person and became a setting.</p>
              <p>You can&apos;t always eliminate the feeder step. But you can almost always make it automatic at the source instead of dependent on someone&apos;s memory.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What to ask this week</h2>
              <p>Pick your most important automation &mdash; the one that, if it quietly stopped, would cost you real money. Now answer one question: <em>who has to do something for it to start, and what happens the week they don&apos;t?</em></p>
              <p>If that question makes you uneasy, that&apos;s the signal. The fragile part of your business isn&apos;t the part that throws errors. It&apos;s the part that goes silent and looks exactly like success.</p>
              <p>Automation doesn&apos;t fail loudly very often. It fails by going quiet at the top while everything below it keeps pretending to work. Find your feeder step before it finds you.</p>
              <p className="text-white/50 text-sm italic">Source: internal TrueFlow client production notes (June 2026); supporting context from Expert Market&apos;s 2026 SMB technology survey.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want to find the feeder steps hiding in your business?</h3>
            <p className="text-white/60 mb-6">We audit before we build &mdash; and we find the step zero others miss.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
