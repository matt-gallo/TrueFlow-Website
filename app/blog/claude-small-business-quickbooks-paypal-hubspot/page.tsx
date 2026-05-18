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
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">AI Tools</span>
              <span className="text-white/40 text-sm">May 14, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Claude Just Walked Into QuickBooks, PayPal, and HubSpot. Your AI Agency&apos;s Retainer Just Got Awkward.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Anthropic shipped Claude for Small Business on May 13 — putting agents inside QuickBooks, HubSpot, and PayPal. Here&apos;s why we stopped charging for the agent and started charging for the outcome.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Claude Just Walked Into QuickBooks, PayPal, and HubSpot. Your AI Agency's Retainer Just Got Awkward."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 13, Anthropic shipped <strong>Claude for Small Business</strong>. Not a model. Not a research preview. A packaged SKU with prebuilt connectors into QuickBooks, PayPal, HubSpot, Docusign, Canva, Google Workspace, and Microsoft 365. The use cases on the launch page weren&apos;t &ldquo;experiment with AI.&rdquo; They were: plan payroll, close the month, run a sales campaign, chase invoices.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Read that again. Those are line items on your bookkeeper&apos;s, your ops manager&apos;s, and your SDR&apos;s task list. Anthropic shipped them as default skills.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                The wall between &ldquo;AI you talk to in a chatbot tab&rdquo; and &ldquo;AI sitting inside the books&rdquo; came down — for a flat per-seat number. The exact thing your agency has been quoting at $2,500/month to glue together — Claude reading your invoices, drafting the follow-up, syncing it back into QuickBooks — Anthropic now ships as the box you check on signup.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Same day, GoHighLevel pushed a carrier-driven SMS and voice rate increase. The cost of doing follow-up the old way went up. The cost of follow-up as a reasoning agent inside QuickBooks and HubSpot went to roughly zero on the marginal task. Two cost curves crossed in one calendar day. Most agencies are still building offers on the wrong side of that crossover.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We stopped line-iteming &ldquo;AI agent build.&rdquo;</strong> The agent is now a commodity. The wiring between five systems — your CRM, your books, your payment processor, your e-sign, your scheduler — is not. That&apos;s where the work lives.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We killed the &ldquo;implementation retainer&rdquo; on month 2+.</strong> After handoff, you don&apos;t pay us to babysit Claude. You pay us when revenue moves. If the agent doesn&apos;t earn its keep, neither do we.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. We pick the agent layer to match what the client already owns.</strong> GHL&apos;s native AI agent for SMBs that live in GHL. Claude for Small Business when the operation is QuickBooks- and HubSpot-heavy. We stopped dragging every client onto one stack — the stack follows the books, not the other way around.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. We rewrote our intake.</strong> First question used to be &ldquo;what CRM.&rdquo; First question is now &ldquo;what does month-end actually look like.&rdquo; Because the agent layer is no longer a CRM feature — it&apos;s the layer that sits <em>across</em> the CRM, the books, and the inbox at the same time.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                If your agency is charging a build fee for a workflow that Claude for Small Business now ships as a default skill, <strong>what specifically are you paying for</strong> — the build, or the badge?
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                If you&apos;re paying a retainer to &ldquo;manage your AI,&rdquo; ask for the agent runtime logs from last month. If they can&apos;t pull them, your retainer is for the dashboard, not the work.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The era of &ldquo;AI agency as glue contractor&rdquo; is ending in real time. The work you actually want done — invoices chased, leads followed up, contracts drafted, payroll planned — got dramatically cheaper this week. The product is the outcome. Anthropic made that math obvious on Wednesday. If your provider is still quoting you for the agent and not for the outcome, you&apos;re paying 2024 prices for 2026 software.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Outcomes, Not Agent Builds?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We pick the agent layer your books already live in, wire it to the outcomes you need, and don&apos;t invoice for babysitting software you already pay for.</p>
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
