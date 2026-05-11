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
              <span className="text-white/40 text-sm">May 9, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Just Built Linear Inside Your Workflows. Your Middleware Stack Just Got Audited.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              HighLevel&apos;s new Linear integration collapses another integration line-item into the platform — and quietly tells every agency renting middleware to reposition.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  const url = window.location.href
                  const text = "GHL Just Built Linear Inside Your Workflows. Your Middleware Stack Just Got Audited."
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
                The HighLevel changelog dropped a Linear integration this week — twelve instant, webhook-backed triggers and thirteen actions, all native inside the Workflow Builder. A new customer issue in Linear can now fire a workflow in GHL. A workflow in GHL can spin up a Linear issue, attach context, tag the right project, and update the customer when it ships. No Zapier in the middle. No n8n container running on someone&apos;s DigitalOcean droplet. No retainer line-item paying an agency to &ldquo;maintain the integration layer.&rdquo;
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What Just Changed (In English)
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Until last week, if your engineering team lived in Linear and your sales/CS team lived in GHL, you had three real options: copy-paste between them, hire someone to keep a Zapier or Make.com bridge from breaking, or pay an agency to &ldquo;build a custom integration.&rdquo; That third option was a real revenue line for a lot of agencies — hundreds to a few thousand a month, forever, to maintain glue.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                GHL just made the glue native. A bug reported by a customer becomes a properly labeled Linear issue with the conversation history already attached. A Linear status change can fire a customer text. Twelve triggers cover issues, projects, customers, customer needs, initiatives, and documents. Thirteen actions cover the same data model in reverse. You don&apos;t need a middle layer for this anymore. The middle layer is the platform.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Trend Nobody&apos;s Saying Out Loud
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                This isn&apos;t one feature. It&apos;s the third or fourth GHL release in the last six weeks that quietly absorbs work the integration economy used to bill for. Mistral chat completion and embeddings shipped as native workflow actions on April 28. Stripe Tax went native a few days before that. Version control for AI agents shipped the next week. Now Linear. Pair that with what Anthropic did the same month: Claude Managed Agents added webhook support and multiagent sessions in public beta — orchestration that used to require glue is moving inside the agent platform itself. Two different vendors. One direction. The orchestration layer is collapsing into the platforms above and below it.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What TrueFlow Is Actually Doing Differently
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We design the end state first.</strong> We map what the GHL workflow looks like the day it runs — and only reach for a middle layer (n8n, Make, custom code) when the customer is genuinely operating outside the GHL surface. A Shopify line-haul ops shop, sure. A Notion-only services business, sure. A team running Linear plus GHL, no — that&apos;s a native workflow now.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We don&apos;t bill for tools we&apos;re set up to retire.</strong> If a feature drops that absorbs three workflow steps we built last quarter, we rebuild on the native version and we don&apos;t charge to do it. The math has to keep getting better for the customer, not just for us.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We rate a build by what it removes, not what it adds.</strong> The strongest deliverables of the last 60 days have been ones where the customer&apos;s stack got simpler — fewer logins, fewer Zaps, fewer &ldquo;where does this data live&rdquo; questions.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">We name the trade-off out loud.</strong> The new Linear workflow components are flagged premium, so they consume action credits at GHL&apos;s automation rate. Cheaper than a Zapier seat plus an agency maintenance retainer, but not free. We size that into the build instead of pretending the savings are infinite.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What You Should Be Asking Right Now
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                What percentage of your monthly automation spend is currently glue between two systems your CRM now talks to natively? And if your agency hasn&apos;t proactively rebuilt one of those bridges in the last 30 days, what exactly are you paying them to maintain?
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Final Take
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                The integration layer is the canary. When a CRM platform pulls another tool inside its workflow builder, the agencies pricing themselves around that bridge have about one quarter to reposition. We&apos;d rather lose that revenue line ourselves than have a customer notice it first.
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
              Want a Stack That Keeps Getting Simpler?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We build on native platform integrations, retire the middleware when the platform absorbs it, and don&apos;t charge you to make the swap.
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
