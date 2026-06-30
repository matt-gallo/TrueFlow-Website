'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'crm-pipeline-graveyard-audit'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The First Thing We Do Inside a New Client's CRM Isn't Automate. It's Count the Pipelines Nobody Finished."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Behind the Build</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 30, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The First Thing We Do Inside a New Client&apos;s CRM Isn&apos;t Automate. It&apos;s Count the Pipelines Nobody Finished.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              When we take over a small business&apos;s CRM, we don&apos;t start building &mdash; we run a body count. Here&apos;s the Pipeline Graveyard Audit we run first, and why the best CRM has one pipeline, not six.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>When we take over a small business&apos;s CRM, the owner usually expects us to start building &mdash; new automations, new sequences, the works. We do the opposite. The first hour is a body count: how many pipelines exist, and how many of them anyone actually finished.</p>
              <p>This week we onboarded a new salesperson into a client&apos;s system and ran exactly that pass. What we found is the most common thing we find: a stack of half-built pipelines, none of them wrong, none of them done. Someone had started a &ldquo;cold database&rdquo; flow, a &ldquo;new sales&rdquo; flow, a reactivation idea &mdash; each one a reasonable instinct, each abandoned about two-thirds of the way through. The business wasn&apos;t running on any of them. It was running on the rep&apos;s memory, with the CRM as expensive decoration.</p>
              <p>That&apos;s not an automation problem. It&apos;s a graveyard problem. And you can&apos;t automate a graveyard &mdash; you have to clear it first.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why Half-Built Is Worse Than Nothing</h2>
              <p>A blank CRM at least tells the truth: nothing is automated here, do it by hand. A pile of abandoned pipelines lies. Each one looks like a system, so nobody rebuilds it &mdash; but none of them fires reliably, so the work quietly falls back on a human who now also has to remember which of them is the &ldquo;real&rdquo; one. You&apos;ve paid for software and gotten yourself a second job.</p>
              <p>The damage isn&apos;t tidiness. Every unfinished pipeline is a place a lead can fall through, because nobody&apos;s sure which system owns them. That&apos;s the leak hiding under the mess.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Pipeline Graveyard Audit</h2>
              <p>Four steps, about twenty minutes, no new software.</p>
              <p><strong className="text-white">1. Count.</strong> Open your CRM and list every pipeline and workflow that exists &mdash; including the ones you forgot you built. Write them down. The number is almost always higher than you&apos;d guess, and that gap between what you think you have and what&apos;s actually there is the whole problem.</p>
              <p><strong className="text-white">2. Map to money.</strong> For each one, ask a single question: does a real deal travel through this, start to paid? Almost always, exactly one pipeline survives that question &mdash; the one that mirrors how money actually moves through your business. The rest are ideas, not systems.</p>
              <p><strong className="text-white">3. Bury or merge.</strong> Everything that isn&apos;t the survivor gets deleted or folded into it. This is the step owners resist, because deleting a half-built thing feels like admitting defeat. It&apos;s the opposite. You&apos;re trading six fictions for one fact.</p>
              <p><strong className="text-white">4. Fix the feeders.</strong> Then &mdash; and only then &mdash; check that the survivor&apos;s fields actually fill in. This week we found a field that silently never populated, so reps couldn&apos;t tell which product a lead had asked about. The pipeline looked fine; the data feeding it was broken. A clean pipeline with broken feeders is still a graveyard, just a tidier one.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part Another Agency Won&apos;t Say</h2>
              <p>The best CRM we build has one pipeline, not six. Agencies sell you pipelines because more looks like more value &mdash; more boxes, more automations, more line items on the invoice. But one pipeline that runs is worth more than a dashboard full of impressive, dead ones. Subtraction is the upgrade here, and almost nobody will charge you for it.</p>
              <p>Clear the graveyard and something strange happens: the same team, on the same software, suddenly looks twice as competent. Not because anyone worked harder &mdash; because now there&apos;s exactly one place a deal lives, and exactly one path it takes.</p>
              <p>So before you build one more automation, count the ones you already started and never finished. The cleanup is usually the upgrade.</p>
              <p className="text-white/50 text-sm italic">Source: internal TrueFlow client onboarding audits, June 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">One fix like this, every week</h3>
            <p className="text-white/60 mb-6">Get one operational fix like this in your inbox every week &mdash; short, practical, no fluff.</p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Subscribe &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
