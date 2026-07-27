'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'hubspot-no-code-agents-building-was-never-the-bottleneck'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "HubSpot Just Made AI Agents a No-Code Afternoon Project. Building Was Never Your Bottleneck."

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
              <span className="text-white/40 text-sm">July 27, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                HubSpot Just Made AI Agents a No-Code Afternoon Project. Building Was Never Your Bottleneck.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              HubSpot&apos;s new Agent Builder lets anyone spin up a CRM agent in plain language &mdash; but the hard part of an AI agent was never building it. Here&apos;s the part a no-code canvas doesn&apos;t fix.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">On July 23, 2026, HubSpot opened Agent Hub and Agent Builder to public beta for every Professional and Enterprise account. Agent Builder is a no-code canvas: you describe what you want in plain language, it pulls the customer data already sitting in your CRM, and it assembles a working AI agent. No developer, no prompt engineer, no long build. Anyone on your team can spin one up before lunch.</p>
              <p className="text-white/80 leading-relaxed mb-6">This is genuinely impressive. It&apos;s also aimed at the wrong problem for most of the businesses we work with.</p>
              <p className="text-white/80 leading-relaxed mb-6">Here&apos;s the sacred cow worth killing: the hard part of an AI agent was never building it. It was deciding what deserves one, and keeping it alive after launch. HubSpot just collapsed the cost of the easy part to near-zero and left the hard part exactly where it was.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What Just Changed (In English)</h2>
              <p className="text-white/80 leading-relaxed mb-6">Building an agent used to be the gate. You needed someone technical, or an agency, or a weekend with the docs. That gate is gone. A no-code builder wired straight into your CRM means the cost of creating an agent has dropped to almost nothing &mdash; and when the cost of doing something falls that far, people do far too much of it.</p>
              <p className="text-white/80 leading-relaxed mb-6">Watch what happens next in most offices: someone builds a lead-follow-up agent. Someone else builds a review-request agent. A third person builds an FAQ responder. Within a month you have six agents nobody&apos;s tracking, all running on the same customer records, and no single person who can tell you which ones actually fired this week.</p>
              <p className="text-white/80 leading-relaxed mb-6">HubSpot clearly saw this coming. Their own launch example is telling: a sales-prospecting agent contacts a customer the same week a service agent is handling that account&apos;s open complaint &mdash; neither aware of the other. That&apos;s not a building problem. That&apos;s a coordination-and-oversight problem, and it shows up the moment building gets easy.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">The Second Half of the Picture</h2>
              <p className="text-white/80 leading-relaxed mb-6">Adoption is already high and already messy. A Constant Contact survey found 54% of small-business owners are using AI marketing tools today, with another 27% planning to start this year. Owners aren&apos;t short on AI. They&apos;re short on AI that reliably does the one job it was turned on to do. Handing that same owner a tool that makes it trivial to add three more agents doesn&apos;t close the gap &mdash; it widens it.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-white/80 leading-relaxed mb-6">We treat &ldquo;easy to build&rdquo; as a reason to slow down, not speed up.</p>
              <p className="text-white/80 leading-relaxed mb-6">We still run the subtraction pass first. Before an agent gets built &mdash; no-code or not &mdash; we ask what the task is, whether it should exist at all, and what number it moves. Most agent ideas don&apos;t survive that question, and a builder that removes friction makes the question more important, not less.</p>
              <p className="text-white/80 leading-relaxed mb-6">We build one agent that owns one job, and we prove it fires every time before anyone builds a second. One reliable agent beats six half-watched ones, every time.</p>
              <p className="text-white/80 leading-relaxed mb-6">We instrument it so you can see it ran &mdash; a log, a heartbeat, a plain &ldquo;this happened today.&rdquo; A no-code canvas gets you to launch. It doesn&apos;t tell you the agent went quiet three weeks later, which is exactly when most of them start costing you money.</p>
              <p className="text-white/80 leading-relaxed mb-6">And we stay inside the tools you already pay for. If your agents live in HubSpot, good &mdash; the point isn&apos;t the platform, it&apos;s the discipline you bring to it.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What You Should Be Asking Right Now</h2>
              <p className="text-white/80 leading-relaxed mb-6">Two questions before you let anyone loose in Agent Builder. First: what single job in my business already runs reliably, start to finish, without me touching it? If the honest answer is &ldquo;none,&rdquo; a no-code builder will hand you five unreliable agents instead of one &mdash; start with one. Second: when one of these stops firing, who finds out, and how fast? If the answer is &ldquo;we&apos;d notice eventually, when a customer complains,&rdquo; you don&apos;t have a building problem. You have an oversight problem, and adding agents only makes it louder.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">The Takeaway</h2>
              <p className="text-white/80 leading-relaxed mb-6">Cheap building is good news for people who already know what to build and how to watch it. For everyone else, a no-code agent factory is a faster way to make the same mess. The constraint was never the canvas. It was judgment about what deserves an agent, and the discipline to keep the one you launched alive. Buy the tool if you want it &mdash; HubSpot&apos;s is good. Just don&apos;t confuse &ldquo;easy to build&rdquo; with &ldquo;worth building.&rdquo;</p>
              <p className="text-white/50 text-sm italic mt-8">Sources: HubSpot &ldquo;Meet Agent Hub and Agent Builder&rdquo; company announcement and CMSWire coverage, July 23, 2026; Martech Notes, July 23, 2026; Constant Contact small-business AI marketing adoption survey, 2026.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want help deciding which single job in your business actually deserves an agent?</h3>
            <p className="text-white/60 mb-6">Book a strategy call and we&apos;ll figure it out together &mdash; and show you how to watch it after launch.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
