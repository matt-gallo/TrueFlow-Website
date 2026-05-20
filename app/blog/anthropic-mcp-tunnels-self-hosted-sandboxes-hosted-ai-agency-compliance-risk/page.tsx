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
              <span className="text-white/40 text-sm">May 20, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Anthropic Just Shipped Private MCP Tunnels and Self-Hosted Sandboxes. The &ldquo;We Host Your AI&rdquo; Agency Is Now a Compliance Risk.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On May 19, Anthropic put Claude Managed Agents inside your firewall — MCP tunnels and self-hosted sandboxes. Here&apos;s why the central &ldquo;AI control plane&rdquo; agency model just got an expiration date, and what TrueFlow has been building inside client perimeters all along.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "Anthropic Just Shipped Private MCP Tunnels and Self-Hosted Sandboxes. The 'We Host Your AI' Agency Is Now a Compliance Risk."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 19, Anthropic added two features to Claude Managed Agents that most AI agencies will pretend not to see: <strong className="text-white">MCP tunnels</strong> and <strong className="text-white">self-hosted sandboxes</strong>. In English — Claude agents can now run inside your firewall, talking to MCP servers on your private network, without anything routing through a shared vendor-hosted control plane.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That single release reshapes what &ldquo;AI infrastructure&rdquo; is allowed to look like in 2026.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                For about six months, the default AI agency build has looked like this. You sign up. You hand over a few API keys. The agency spins up an &ldquo;AI control plane&rdquo; on <em>its own</em> infrastructure — usually a hosted MCP server with your business name in the URL, sitting on the public internet, holding tokens to your CRM, inbox, Stripe, and calendar. You get a slick portal. They get the keys to your business.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Anthropic just signaled that&apos;s not the architecture enterprise will tolerate anymore. <strong className="text-white">Self-hosted sandboxes</strong> let an organization run the agent&apos;s compute, file access, and integrations inside its own perimeter, under its own audit logging. <strong className="text-white">MCP tunnels</strong> let an agent reach an MCP server on a private network without ever exposing that endpoint to the public internet. Public beta on sandboxes, research preview on tunnels. The direction of travel is obvious.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Stack this against the last two weeks. On May 14, Anthropic split Agent SDK billing off the $200 Claude Pro/Max plans. On May 16, they shipped Dreaming for agents. Now this. Three releases, one pattern — Anthropic is rebuilding the Claude stack around enterprise-grade isolation and metered usage. The &ldquo;shared control plane&rdquo; model a lot of AI agencies still sell is the <em>exact opposite</em> of that direction.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Here&apos;s the kicker — even if your current agency says &ldquo;you don&apos;t need that, you&apos;re not enterprise,&rdquo; you don&apos;t make that call alone anymore. Your insurance carrier, your auditor, and your bank all do. The moment one of them writes <em>&ldquo;where does your AI live and who holds your tokens?&rdquo;</em> into a renewal form, the hosted-control-plane agency becomes a renewal risk you bought yourself.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-6">
                We don&apos;t host your AI. We build it inside the perimeter you already own.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. Every agent lives inside your GHL subaccount.</strong> Conversation AI, Voice AI, Workflows — they run on HighLevel&apos;s infrastructure, scoped to your locationId, using your PIT token. We don&apos;t spin up a &ldquo;TrueFlow control plane&rdquo; that holds the keys to your business. If you fire us tomorrow, the agent stays in your account and keeps running. Most agencies can&apos;t say that out loud.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. Our MCP server is subaccount-scoped, not multi-tenant.</strong> This past week we shipped a refactor of our 73-tool GHL MCP server. Every tool call now takes a required <code className="bg-white/10 px-1.5 py-0.5 rounded text-cyan-300 text-sm">subaccount</code> parameter — your build only ever sees your subaccount. There is no shared pool, no cross-tenant blast radius, no &ldquo;oops we leaked the wrong contacts&rdquo; headline waiting to happen.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. No middleware on a public URL.</strong> When a build needs orchestration outside HighLevel, we use n8n or workflow nodes inside your account — not a TrueFlow-branded webhook proxy sitting on the open internet. The moment Anthropic&apos;s MCP tunnels go GA, we&apos;ll route through them. Until then, no keys parked in public DNS.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. Pricing is outcome-based, not access-based.</strong> We don&apos;t charge to <em>host</em> an agent. We charge when it books a call, recovers a missed lead, or saves a renewal. The build is free for three days. You don&apos;t pay until you see traction.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="text-white/80 leading-relaxed mb-6 space-y-3 list-none">
                <li><span className="text-cyan-400">•</span> <em>If we walk away from our current AI agency tomorrow, do our agents keep running — and where, exactly, do they live?</em></li>
                <li><span className="text-cyan-400">•</span> <em>Is the MCP server holding our tokens on a private network, or behind one API key on the open internet?</em></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If either answer is fuzzy, that&apos;s not an &ldquo;AI build.&rdquo; That&apos;s a vendor lock-in story dressed up in a Notion doc.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The &ldquo;we host your AI&rdquo; agency was a smart 2024 model. In 2026, it&apos;s a compliance event waiting to happen. Anthropic just made the standard explicit: agents belong inside the perimeter that owns the data. If yours don&apos;t, you don&apos;t have an AI strategy — you have an insurance problem with a monthly invoice attached.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want This Built Inside Your Own Perimeter?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build inside the systems you already own — your GHL subaccount, your tokens, your data. 3 days, free, you don&apos;t pay until you see traction.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-readiness-assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">Take the Free Assessment</Link>
              <Link href="https://trueflow.ai" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">See If You Qualify</Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
