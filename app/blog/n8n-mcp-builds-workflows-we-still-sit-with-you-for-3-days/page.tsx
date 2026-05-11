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
              <span className="text-white/40 text-sm">May 8, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                n8n&apos;s MCP Server Now Builds Workflows From a Prompt. We Still Sit With You for 3 Days — Here&apos;s Why.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              n8n shipped a public preview that lets Claude or ChatGPT build, validate, and self-heal n8n workflows on demand. Most agencies will rebrand it as their new offer. We&apos;d rather tell you what it doesn&apos;t fix.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  const url = window.location.href
                  const text = "n8n's MCP Server Now Builds Workflows From a Prompt. We Still Sit With You for 3 Days — Here's Why."
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
                On May 5, n8n quietly shipped the upgrade every automation agency has been bracing for: their MCP server can now create workflows, not just run them. Point Claude or ChatGPT at your n8n instance, describe what you want, and the AI builds the workflow, validates it, runs it, and patches itself when it breaks. Public preview. Already in daily use by the n8n team itself.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                If you read the agency Twitter timeline this week, you&apos;d think the entire automation industry just got its job description rewritten. Some of that is correct. Most of it is the wrong takeaway.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What Just Changed (In English)
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Until last week, MCP-connected tools could <em>trigger</em> an n8n workflow. They couldn&apos;t <em>write</em> one. A builder still had to sit in n8n, drag nodes, set credentials, hand-validate the run. The new release flips it: a sentence becomes a wired-up, executing workflow. If something fails, the agent reads the error, fixes the node, re-runs. It&apos;s the same shift GHL pulled when the AI Workflow Builder graduated from &ldquo;drafts a recipe&rdquo; to &ldquo;ships the recipe.&rdquo; The platforms decided the <em>building</em> part of automation is no longer the hard part.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Trend Nobody&apos;s Saying Out Loud
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Here&apos;s the part agencies don&apos;t want on a sales call: <strong>&ldquo;AI builds your workflows&rdquo; was never the actual job.</strong>
              </p>
              <p className="text-white/80 leading-relaxed mb-4">The hard part of automation has never been the YAML. It&apos;s been:</p>
              <ul className="text-white/80 mb-8 space-y-2 pl-6 list-disc">
                <li>Figuring out what your business actually does versus what your team <em>says</em> it does.</li>
                <li>Sitting through a 90-minute discovery call with a founder who&apos;s defending six contradictory processes at once.</li>
                <li>Picking which of your seven phone systems is the system of record before you port any number anywhere.</li>
                <li>Knowing that the GHL agent action handles this part, n8n handles that part, and a Claude Code script handles the gnarly third part — and that any one of them alone produces a half-built mess.</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                n8n&apos;s update doesn&apos;t touch any of that. It makes the <em>last 20%</em> faster. The first 80% — the human, contextual, &ldquo;what are we actually building and why&rdquo; part — is now more leveraged than ever, because the build cost just collapsed and the <em>judgment</em> cost didn&apos;t.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What TrueFlow Is Actually Doing Differently
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. Day 1 is humans, not prompts.</strong> Discovery, GHL audit, AI readiness mapping. We write down the actual sequence of how a lead becomes a paying customer in your business. n8n&apos;s MCP can&apos;t do this and never will. Skipping it is how agencies ship workflows that demo well and never get used.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. Day 2 is Claude Code + Cowork, not n8n-by-prompt.</strong> We use Claude Code to write the integration logic that lives outside the CRM, GHL agent actions for everything CRM-native, and yes — n8n where the workflow is genuinely a directed graph of API calls. We pick the tool the <em>problem</em> asks for, not the one that ships the cheapest demo on Twitter.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">3. Day 3 you don&apos;t pay if it&apos;s not live.</strong> Three workflows running, training session done, or the install fee comes off. 30-day cancel-anytime on the retainer. The platforms are getting cheap enough that the agency margin lives in <em>certainty of delivery</em>, not in hours billed.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  What You Should Be Asking Right Now
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                If you&apos;re already paying an agency a five-figure monthly retainer, two questions:
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;What part of what we pay you for survives n8n&apos;s MCP update?&rdquo; If the answer is &ldquo;we build the workflow,&rdquo; you&apos;re paying for something that just got commoditized.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;What&apos;s your three-day install playbook?&rdquo; If they don&apos;t have one, they&apos;re selling you the discovery call as a deliverable.
              </p>

              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Final Takeaway
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                n8n didn&apos;t kill the AI agency. It killed the <em>bad version</em> of one — the kind that charged $4,000/month to drag nodes around a canvas. What&apos;s left is the part that always mattered: a senior operator sitting next to you for three days, making the right call about which tool builds which piece, and not leaving until the thing runs. The build is no longer the moat. The install is.
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
              Want the Install, Not Just the Build?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Three days. A senior operator in the room. Three workflows running before you pay. The build cost collapsed — the judgment cost is what you&apos;re actually paying for.
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
