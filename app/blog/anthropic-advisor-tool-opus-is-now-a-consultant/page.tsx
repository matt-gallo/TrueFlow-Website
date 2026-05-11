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
                AI Tools
              </span>
              <span className="text-white/40 text-sm">May 11, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Anthropic Just Demoted Opus to Consultant. The &ldquo;Run Everything On The Big Model&rdquo; Era Is Over.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Claude&apos;s new advisor tool just landed in public beta — and it ends the agency flex of quoting &ldquo;powered by Opus.&rdquo; Here&apos;s what changed in our build process the week the header flipped on.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  const url = window.location.href
                  const text = 'Anthropic Just Demoted Opus to Consultant. The "Run Everything On The Big Model" Era Is Over.'
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
                Last week, Anthropic turned on the <strong>advisor tool</strong> in public beta on the Claude API. Claude Opus — the model every AI agency has been quietly quoting as &ldquo;we use Anthropic&apos;s most capable model&rdquo; on — is now demoted to a part-time consultant. The actual work runs on Sonnet (or Haiku). Opus tags in, drops a short plan or correction into the shared context, and tags back out. One Messages API request. Built-in spend caps. Live behind a single header: <code>anthropic-beta: advisor-tool-2026-03-01</code>.
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
                For two years, the AI build market has been split into two ugly camps. <strong>Camp A</strong> ran every workflow on the biggest model their client would tolerate paying for — Opus, GPT-5, whatever was top of the leaderboard. They quoted intelligence and quietly burned the client&apos;s token budget. <strong>Camp B</strong> ran everything on Haiku or Sonnet to protect margin, and shipped brittle agents that fell apart the second a customer typed something unexpected.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                The advisor tool collapses both camps into one default pattern. Your agent runs on Sonnet end-to-end. Opus sits behind it, sees the full shared context, and only speaks when the executor is stuck or about to do something dumb. The advisor never calls tools and never produces user-facing output — it just hands a 400-to-700-token correction back to the worker and disappears. Anthropic&apos;s own benchmark on SWE-bench Multilingual: <strong>+2.7 percentage points of accuracy, 11.9% lower cost per task</strong> vs. running Sonnet alone. That is not an incremental win. That is a build-pattern reset.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Trend Nobody&apos;s Saying Out Loud
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Most AI agency decks still anchor on a sentence like &ldquo;we use Anthropic&apos;s most powerful model.&rdquo; As of this month, that sentence is no longer a credential — it&apos;s an admission of bad architecture. The new flex isn&apos;t <em>how often</em> you call Opus. It&apos;s <em>how rarely</em>. Anthropic just made tier-mixing the sane default. If you&apos;re paying an agency a flat $4K–$8K/month retainer that includes &ldquo;AI inference,&rdquo; ask which model handles which step. If the answer is &ldquo;Opus, because it&apos;s the best,&rdquo; you&apos;re not paying for intelligence. You&apos;re funding the agency&apos;s margin and calling it a feature.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What TrueFlow Is Actually Doing Differently
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">One — every new agent ships with Sonnet as the executor and Opus as advisor by default.</strong> We don&apos;t quote &ldquo;Opus-powered&rdquo; builds anymore. We quote outcomes. Model routing is our problem, not the client&apos;s pitch deck.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Two — we added a router audit step to every Three-Day Build.</strong> We trace which prompts trigger an Opus consult and which don&apos;t. The client sees the call counts. If the executor is reaching for the advisor on more than ~8% of routine runs, we redesign the prompt before we reach for a bigger model. Bigger model is the last resort, not the first.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">Three — we stopped writing client proposals that name model versions at all.</strong> The conversation moved to: appointments booked, leads qualified, hours of admin reclaimed. The infrastructure is implementation detail. If your current provider&apos;s deck still leads with &ldquo;we use GPT-4 / Claude Opus / Gemini 1.5,&rdquo; that deck was written for a market that ended this quarter.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What You Should Be Asking Right Now
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;Which model handles which step in my workflow — and why that one?&rdquo; If they can&apos;t answer in one sentence per step, they&apos;re not architecting. They&apos;re vibing.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;When my volume doubles next quarter, does my AI inference bill double too?&rdquo; The advisor pattern decouples cost growth from intelligence. Their answer tells you whether they&apos;ve updated their stack since March.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Final Takeaway
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                The big-model arms race is over for SMB automation. The teams that win the next twelve months won&apos;t be the ones with the most expensive model on the invoice — they&apos;ll be the ones who know exactly when to call it. Opus as consultant, Sonnet as worker, Haiku for the boring stuff. That&apos;s the shape of a sane build now.
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
              Want Intelligent Routing, Not Just a Big Model?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We build with the advisor pattern from day one — Sonnet as worker, Opus as consultant, cost decoupled from intelligence. You get the accuracy without the bill.
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
