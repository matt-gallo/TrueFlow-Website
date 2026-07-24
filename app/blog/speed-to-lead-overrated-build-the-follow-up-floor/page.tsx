'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'speed-to-lead-overrated-build-the-follow-up-floor'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Speed-to-Lead Is Overrated. The Money Is in the Follow-Up Nobody Sends."

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
              <span className="text-white/50 text-sm">July 24, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Speed-to-Lead Is Overrated. The Money Is in the Follow-Up Nobody Sends.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Every automation demo sells a faster first reply. But speed only matters on touch one, and most deals close past touch five. Here&apos;s the Follow-Up Floor &mdash; a fixed minimum every lead gets, on autopilot, so no sale dies in someone&apos;s memory.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Every automation demo you&apos;ve sat through sells the same promise: reply to a new lead in under five minutes and you&apos;ll win. Speed-to-lead. It&apos;s the most quoted metric in this industry, and it&apos;s the wrong thing to automate first.</p>

              <p>Speed only matters on touch one. The reason most leads never buy isn&apos;t that you answered in nine minutes instead of five &mdash; it&apos;s that you answered once. A fast first reply followed by silence loses to a slower first reply backed by a guaranteed sequence, every single time.</p>

              <p>The data isn&apos;t subtle about this. Sales follow-up figures compiled for 2026 put the share of reps who quit after a single follow-up at around 44%, and only about a fifth of leads get any real follow-up at all (ZoomInfo, 2026). Meanwhile most deals close somewhere past the fifth touch. So the whole industry is busy optimizing the one contact that&apos;s already handled and abandoning the four that actually decide the sale.</p>

              <p>Here&apos;s how the drop-off happens in your business. A lead comes in and your team is sharp &mdash; they reply, maybe twice. Then a busy week hits, the lead cools, and nobody circles back. Not because anyone decided to give up. Because following up is invisible work that lives in a person&apos;s memory, and memory is the least reliable system you run.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Stop Automating Speed. Automate the Floor.</h2>
              <p>Instead of buying a faster first reply, build a floor underneath every lead. A <strong>Follow-Up Floor</strong> is a fixed minimum number of touches that every inbound lead receives, across a fixed window, on more than one channel, whether or not a human is available. You set the numbers once &mdash; say six touches over fourteen days across email and text, spaced so they never stack. The automation has exactly one job: guarantee that floor exists for every lead, forever. Your people handle everything above it &mdash; the real conversations, the judgment calls, the leads that light up. The machine handles the part humans reliably drop.</p>

              <p>Three rules make it work:</p>

              <p><strong>The floor runs no matter what.</strong> It doesn&apos;t wait for a rep to be free &mdash; that&apos;s the entire point. A lead should never vanish because someone was slammed on a Tuesday.</p>

              <p><strong>Any human reply pauses the machine.</strong> The moment a lead responds, the sequence steps back and a person steps in. Nothing torches trust faster than an automated &ldquo;just checking in&rdquo; landing after the prospect already booked.</p>

              <p><strong>The floor is a minimum, not a cap.</strong> Great reps go far past six touches on the leads worth it. The floor exists so your median lead gets the same discipline your best day would have given it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What This Looked Like Last Week</h2>
              <p>We sat with a clinic owner whose team replied to new inquiries within minutes &mdash; genuinely fast, the thing every consultant tells them to be. But they stopped after one or two tries. Leads weren&apos;t being lost at the front door; they were dying on day three, in silence. We didn&apos;t add a faster reply. We added a floor under the leads that would otherwise disappear &mdash; same CRM, no new tools. The speed was never the problem. The drop-off was.</p>

              <p>Here&apos;s the sentence another agency will push back on: a shop that sells you a five-minute speed-to-lead bot and calls the job done has automated the easy 20% and left the 80% that actually closes deals sitting in your team&apos;s memory.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Before you pay for anything that promises a faster first reply, ask a cheaper question: what happens to a lead on day four? If the answer depends on whether someone remembered, you don&apos;t have a speed problem. You have a missing floor &mdash; and the floor is what you build first.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help putting a Follow-Up Floor under your pipeline so no lead depends on someone remembering, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Data source: ZoomInfo, &ldquo;Sales Follow-Up Statistics&rdquo; (2026 compilation of rep follow-up persistence and lead-touch data).</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
