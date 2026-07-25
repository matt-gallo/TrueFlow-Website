'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'on-demand-agents-killed-the-retainer'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Scheduled Agents Cost Nothing Now. The Retainer Model Doesn't Survive That."

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} /></Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Industry</span>
              <span className="text-white/40 text-sm">July 19, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Scheduled Agents Cost Nothing Now. The Retainer Model Doesn&apos;t Survive That.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Anthropic made scheduled agents free earlier this month. HubSpot moved Prospecting Agent to $1 per qualified lead. When the infrastructure is free and the outcomes are metered, recurring setup fees become indefensible. Here&apos;s what actually replaces them.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">Anthropic shipped free scheduled agents earlier this month &mdash; agents that run on their infrastructure while your laptop is off, checking email, flagging leads, running sequences, whatever you told them to do. Not a trial. Not a tier. Free.</p>
              <p className="text-white/80 leading-relaxed mb-6">HubSpot did the math differently. Prospecting Agent used to cost a monthly retainer per account. This month they flipped to $1 per qualified lead surfaced. You don&apos;t pay unless the agent worked.</p>
              <p className="text-white/80 leading-relaxed mb-6">Both are saying the same thing, just in different accents: the machine that runs the system doesn&apos;t cost money anymore. Which means the business model that wraps it stopped making sense last Thursday.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What Just Changed (In English)</h2>
              <p className="text-white/80 leading-relaxed mb-6">Five years ago, automation was hard. Building it required a person with skill, time in your business, and ongoing maintenance. You paid for all three: a setup fee that looked like $5k&ndash;$20k, plus a retainer &mdash; usually $2,000&ndash;$4,000 a month &mdash; that covered &ldquo;updates, monitoring, and if something breaks, I&apos;ll fix it.&rdquo; That math was honest then. None of that is true anymore.</p>
              <p className="text-white/80 leading-relaxed mb-6">The cheapest LLMs now run at scale for a quarter of what they cost eighteen months ago. A scheduled agent doesn&apos;t <em>need</em> monitoring because the architecture is stateless: it runs a prompt, executes actions, and reports. And if it fails, you see it in your lead flow, your email, your calendar. You don&apos;t need a person watching logs. The vendor eats the infrastructure cost because the infrastructure is free.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What That Means for the Retainer</h2>
              <p className="text-white/80 leading-relaxed mb-6">An automation agency built on $2,500/mo retainers just met a math problem it can&apos;t solve. If the platform charges zero to run a scheduled agent on their hardware, the value you&apos;re paying for is not the infrastructure. It&apos;s not the maintenance. It has to be the design.</p>
              <p className="text-white/80 leading-relaxed mb-6">You&apos;re charging for three things only: (1) auditing which processes are worth automating, (2) building them correctly, and (3) handling exceptions. One-time work. A recurring retainer for a system that runs itself and doesn&apos;t require maintenance is a pricing model that&apos;s now running on fumes. The smartest agencies have moved to outcome-based pricing, fixed project fees, or success fees. The ones still selling retainers are selling inertia.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What You Should Be Asking Right Now</h2>
              <p className="text-white/80 leading-relaxed mb-6">If you&apos;re paying a retainer for an automation that lives in platforms that now ship their own infrastructure: what is the retainer for? Ask your vendor. Get a specific answer. &ldquo;Ongoing optimization&rdquo; is not an answer. If your automation runs itself and you haven&apos;t asked for a change in ninety days, nothing changed.</p>
              <p className="text-white/80 leading-relaxed mb-6">The infrastructure was expensive. The infrastructure was the retainer. The infrastructure is free now. The retainer is not.</p>
              <p className="text-white/50 text-sm italic mt-8">Sources: Anthropic Claude Platform release notes (July 2026); HubSpot July 2026 Product Updates; HubSpot Prospecting Agent outcome pricing model.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want automation priced on outcomes, not retainers?</h3>
            <p className="text-white/60 mb-6">We charge for design and results &mdash; not for keeping the lights on.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
