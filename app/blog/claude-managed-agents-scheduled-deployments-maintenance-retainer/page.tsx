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
                Claude Agents Now Run on a Cron Schedule With No Server &mdash; The &ldquo;Hosting and Maintenance&rdquo; Retainer Just Lost Its Job
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On June 9, Anthropic shipped scheduled deployments and credential vaults for Claude Managed Agents &mdash; and quietly deleted the infrastructure line item most automation agencies bill you for every month.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Claude Agents Now Run on a Cron Schedule With No Server — The 'Hosting and Maintenance' Retainer Just Lost Its Job"; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On June 9, 2026, Anthropic put two features into public beta on the Claude Platform: Managed Agents can now run on a cron schedule with no scheduler to build or host, and credential vaults can inject API keys into an agent&apos;s sandbox as environment variables &mdash; without the agent ever seeing the actual key. One of Anthropic&apos;s own launch customers, Actively AI, described using scheduled deployments to replace &ldquo;scheduling infrastructure the team initially built themselves.&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Read that last part again. The infrastructure an AI company built for itself is now a checkbox. Now ask what your automation provider is hosting on your behalf &mdash; and what they charge you for it.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Until this week, if you wanted an AI agent to do recurring work &mdash; a nightly data sync, a weekly report, a daily follow-up sweep &mdash; somebody had to run a server. An n8n instance, a VPS with cron jobs, a Zapier stack, something that wakes the agent up on time and keeps it alive. That &ldquo;something&rdquo; is what a chunk of every automation retainer quietly pays for: hosting, monitoring, and the privilege of restarting it when it falls over.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                As of June 9, you give the agent a schedule and Anthropic runs it. Each time the schedule fires, a fresh session starts, does the work, and ends. Pause it, resume it, trigger an extra run on demand. Rakuten is using it to turn spreadsheet data into weekly reports and decks. Ando uses it to chase follow-ups and send meeting reminders automatically.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The vault piece matters just as much. Your API keys live in a vault, scoped to domains you approve, and the real key gets attached at the network boundary &mdash; the agent only ever holds a placeholder. The &ldquo;just send us your passwords&rdquo; handoff that&apos;s always been the sketchiest part of hiring an automation agency now has a correct answer: no.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Six days before this release &mdash; June 3 &mdash; Anthropic also launched the Services Track of its Partner Network: a $100 million program with tiered credentials, 40,000 firms applied, 10,000+ consultants already certified. Hold both announcements up at once and the picture is blunt: the same company absorbed the infrastructure layer and started credentialing the services layer in the same week. The platforms are coming for both ends of the agency stack &mdash; what gets hosted and who&apos;s qualified to build on it. What&apos;s left in the middle is judgment: knowing which recurring task is worth automating, defining it precisely, and owning the result.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We already run our own business on scheduled agents &mdash; including this post.</strong> The article you&apos;re reading was researched, written, and committed by a scheduled agent that reads vendor changelogs, pulls our internal meeting notes, and ships every morning. We sell what we use.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We killed the hosting line item.</strong> New recurring builds get quoted as outcomes &mdash; reports delivered, leads followed up, inboxes cleared &mdash; not as &ldquo;automation hosting and monitoring.&rdquo; If a platform runs the schedule for free, billing you rent on it is margin theater.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We stopped collecting raw API keys.</strong> Vault-style, domain-scoped credentials are now the default in our builds. If a provider still asks you to paste keys into a shared doc, that&apos;s a 2024 habit with 2026 risk.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">We&apos;re moving &ldquo;owner drudgery&rdquo; onto schedules first.</strong> Last week we sat with a clinic owner staring down 150+ unread emails a day. That&apos;s not a software problem, it&apos;s a recurrence problem &mdash; triage is now a daily scheduled run, not a heroic Sunday catch-up.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Ask your provider: <em>&ldquo;What exactly are you hosting for me, and what does it cost you now that scheduled agents run on the platform?&rdquo;</em> Then the harder one: <em>&ldquo;Do your agents hold my actual credentials &mdash; and why?&rdquo;</em>
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Every quarter, the platforms absorb another thing agencies used to bill for. This week it was the scheduler and the keyring. Providers selling uptime should be nervous. Providers selling outcomes shouldn&apos;t even notice.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: Anthropic&apos;s Claude Managed Agents announcement and Developer Platform release notes (June 9, 2026) and the Claude Partner Network Services Track announcement (June 3, 2026).</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Scheduled Agents, Not a Hosting Bill?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build recurring agent workflows that run on the platform&apos;s schedule. Discovery is free. You don&apos;t pay until the agent delivers the outcome we agreed on &mdash; not when the server stays up.</p>
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
