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
            <Image
              src={logoSrc}
              alt="TrueFlow"
              width={280}
              height={70}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
              priority
              style={{ maxWidth: '100%', objectFit: 'contain' }}
            />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                Automation
              </span>
              <span className="text-white/40 text-sm">May 10, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Anthropic Just Added a &lsquo;Defer&rsquo; Decision to AI Agents. The &lsquo;Set It and Forget It&rsquo; Pitch Just Died.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Claude&apos;s Agent SDK quietly shipped a fourth permission outcome this month — defer — and it exposes what every fully-autonomous AI agent pitch has been hiding.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  const url = window.location.href
                  const text = "Anthropic Just Added a 'Defer' Decision to AI Agents. The 'Set It and Forget It' Pitch Just Died."
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm"
              >
                Share on X
              </button>
              <button
                onClick={() => {
                  const url = window.location.href
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm"
              >
                Share on LinkedIn
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm"
              >
                Copy Link
              </button>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                Anthropic&apos;s Agent SDK release this month added a fourth value to the PreToolUse hook&apos;s permissionDecision field. Until now you had three: allow, deny, or ask. As of Claude Code v2.1.89, you also have <strong>defer</strong>. When a hook returns &ldquo;defer,&rdquo; the agent stops, the pending tool call is preserved in the transcript, and the calling process — your app, your UI, your orchestrator — gets handed control to do whatever it needs before deciding whether to resume.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That&apos;s the news. Here&apos;s the part nobody on AI Twitter is saying out loud.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What Just Changed (In English)
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                &ldquo;Allow&rdquo; lets the tool run. &ldquo;Deny&rdquo; blocks it. &ldquo;Ask&rdquo; stops the agent and asks the user inside Claude. &ldquo;Defer&rdquo; is something else entirely — it pauses the agent, hands the open tool call to whatever process is running Claude as a subprocess, and waits.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                In plain terms: the platform itself has now shipped first-class support for human-in-the-loop checkpoints, mid-run, in production agents. Not as a hack. Not as a wrapper script. As a built-in permission outcome you write into your hook. That matters because every &ldquo;fully autonomous AI agent&rdquo; pitch in this market has been a quiet bet that the platform would never make this easy. The bet just lost.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Trend Nobody&apos;s Saying Out Loud
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The SBE Council&apos;s 2026 Small Business Tech Use Survey put hard numbers on what we&apos;ve been watching in client builds: 82% of small business employers have invested in AI tools, with the average SMB spending around $18,000 a year on AI subscriptions and services. They are not under-bought. They are over-bought, under-checked, and quietly burned out from agents that confidently did the wrong thing at 2 a.m. The agency response? Most of the market is still selling &ldquo;set it and forget it.&rdquo; Anthropic just made the correct architecture native. The agent does 80% of the run, defers at the three or four moments that actually matter, and a human or a second system signs off.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What TrueFlow Is Actually Doing Differently
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We&apos;ve stopped designing agents as flat chains.</strong> Every build now starts with a list of checkpoints — the specific tool calls where being wrong is expensive. Sending money. Replying to a buyer. Updating a CRM stage that closes a deal. Booking against a calendar that has a deposit attached. Those become explicit defer points wired into the hook, not best-effort prompts.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We don&apos;t deploy fully autonomous on day one. Ever.</strong> Every new agent ships with defer turned on at the expensive checkpoints, a human in the loop on the dashboard for the first 7–14 days, and a release plan that swaps defer to allow only after we&apos;ve watched the agent decide right against real traffic.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">We don&apos;t take outcome-based payment until the checkpoints survive a real week.</strong> The &ldquo;you don&apos;t pay until you see traction&rdquo; model is what defer architecture forces. If your agent can&apos;t make a week of decisions without a human override at the checkpoints, we haven&apos;t earned the bill yet.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What You Should Be Asking Right Now
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Ask whoever is building your agents two questions today: Where are the checkpoints, and how are you implementing them? If the answer is &ldquo;we tell the agent in the prompt to be careful,&rdquo; you don&apos;t have checkpoints — you have hope.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                And ask: when the platform changes underneath us, who rebuilds this for free? If the answer is anything other than &ldquo;we do, immediately,&rdquo; your agency is pricing for the version of AI that just shipped its replacement.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Final Take
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                The agency-selling-autonomous-agents era is ending the way the agency-selling-Zapier-glue era ended last quarter — with a single platform release that absorbs the work. Defer is not a small SDK feature. It&apos;s the platform telling builders what production-grade actually looks like. The shops that ignore it will keep pitching autonomy. The shops that build for it will quietly own the next two years of this category. We picked the second one a while ago.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Want Agents With Real Checkpoints?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We wire defer into every expensive decision point from day one. You stay in the loop until the agent earns autonomy — and you don&apos;t pay until it does.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assessment"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Take the Free Assessment
              </Link>
              <Link
                href="https://trueflow.ai"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors"
              >
                See If You Qualify
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
