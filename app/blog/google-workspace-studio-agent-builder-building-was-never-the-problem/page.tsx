'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'google-workspace-studio-agent-builder-building-was-never-the-problem'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Google Just Put an AI Agent Builder Inside Gmail and Docs. Building Was Never Your Problem.'

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">AI Tools</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 14, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Google Just Put an AI Agent Builder Inside Gmail and Docs. Building Was Never Your Problem.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Google&apos;s Workspace Studio lets anyone build automations by typing a sentence into Gmail. That removes the last bit of friction protecting most owners from automating their own chaos.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On April 22, 2026, at Cloud Next, Google announced Workspace Studio &mdash; a no-code agent builder that lives directly inside Gmail, Docs, Sheets, Drive, Meet, and Chat. You describe an automation in plain English &mdash; &ldquo;every Friday, remind me to update the project tracker, and pull this week&apos;s new leads into a sheet&rdquo; &mdash; and Gemini builds it. It connects out to Asana, Jira, Mailchimp, and Salesforce, calls external APIs through webhooks, and is rolling out to Workspace business and enterprise plans now. No agency, no platform fee, no setup ticket.</p>
              <p>Translation: the ability to build a small automation just got bundled into software your business already pays for.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>For years, the thing standing between an owner and &ldquo;I&apos;ll automate that&rdquo; was a builder &mdash; a person, an agency, or a tool that knew how to wire the steps together. That was the gate. That gate is now a text box inside the inbox you already check 80 times a day.</p>
              <p>This is genuinely useful, and it&apos;s also the part most people will read exactly backward. The arrival of a near-effortless native builder is not good news for most owners. It&apos;s a risk. Friction was the only thing protecting them from automating their own chaos. When building something takes a week and a budget, you think hard about whether it&apos;s worth it. When it takes one sentence, you don&apos;t think at all &mdash; you just start wiring, and three months later you have eleven half-working automations nobody can explain.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Number That Should Worry You</h2>
              <p>Google published its own AI Agent Trends report ahead of the conference. It found that 89% of business teams already use AI agents, and the average organization now runs twelve of them. Twelve.</p>
              <p>That number isn&apos;t a milestone. It&apos;s a warning. The constraint in your business was never &ldquo;can someone build this.&rdquo; It was &ldquo;should this exist, and which of the things I&apos;ve already automated are actually earning their keep.&rdquo; Workspace Studio makes the first question free and leaves the second one entirely up to you. Most owners will answer it by never asking it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Actually Doing Differently</h2>
              <p>We&apos;re telling clients to treat Workspace Studio as a tool, not a strategy &mdash; and to keep their hands off it until they&apos;ve done the boring part first.</p>
              <p>We audit before we build. Our order is Delete, Condense, Automate, in that sequence. A clinic owner we worked with this week wanted to automate a weekly report that, on inspection, three people read and none acted on. We didn&apos;t build the agent. We killed the report. That&apos;s a delete, and it&apos;s worth more than any automation we could have shipped on top of it.</p>
              <p>We point the builder at the process that survives the audit &mdash; not the one that&apos;s loudest. And we work inside the tools you already own, now including Workspace Studio itself, instead of selling you a migration to somewhere new. If the automation belongs in your Google account, that&apos;s where it goes.</p>
              <p>The unpopular version of all this: a &ldquo;build me an automation&rdquo; invoice should look strange to you now. The build is the cheap part. Knowing what not to build is the expensive part, and it&apos;s the only part worth paying for.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Before you create a single Workspace Studio agent: of the steps in this process, which should exist at all? Automating a step you could delete just makes the waste run faster and quieter.</p>
              <p>And if you already run a dozen automations across your tools: which three could you switch off tomorrow without anyone noticing? If you can&apos;t answer that quickly, you don&apos;t have an automation strategy. You have a collection.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>A builder bundled into Gmail doesn&apos;t make automation easy. It makes deciding what deserves to be automated the entire job. The owners who win the next year won&apos;t be the ones who built the most agents. They&apos;ll be the ones who built the fewest, on purpose.</p>
              <p className="text-white/50 text-sm italic">Sources: Google Cloud Next 2026 keynote and Workspace Studio announcement (April 22, 2026), reported by The Next Web; Google&apos;s AI Agent Trends report (2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want help deciding what to automate &mdash; and what to delete?</h3>
            <p className="text-white/60 mb-6">We audit before we build. That&apos;s the difference.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
