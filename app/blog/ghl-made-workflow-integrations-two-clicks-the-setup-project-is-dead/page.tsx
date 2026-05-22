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
              <span className="text-white/40 text-sm">May 22, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Made Workflow Integrations Two Clicks on May 21. Why Are Agencies Still Quoting It as a Project?
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              GHL shipped a common integration experience inside Workflow Automations — locked-state previews, multi-account support, connect-without-leaving-the-flow. The standalone &ldquo;integration audit&rdquo; line item just lost its job.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL Made Workflow Integrations Two Clicks on May 21. Why Are Agencies Still Quoting It as a Project?"; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On May 21, 2026, GoHighLevel shipped a <strong>common integration experience</strong> for Workflow Automations. Integration-powered actions and triggers now show required fields upfront. If the integration isn&apos;t connected, the panel opens with a locked-state preview and a <strong>Connect your account</strong> banner that fires the OAuth in a new tab — you finish wiring up Slack or Stripe, switch back, and the fields unlock. Multiple connected accounts are supported per integration.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That paragraph used to be a $3,000 line item on an &ldquo;AI integration scoping&rdquo; SOW. As of yesterday, it is a button.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Wiring a third-party tool into a GHL workflow used to be a four-step dance: discovery call to inventory what the workflow needs, separate setup session for the OAuth, follow-up to debug which fields were required, then a billable hour to extend the build. Agencies have quoted all four steps as a &ldquo;Phase 1 Integration Audit&rdquo; for two years. GHL just collapsed those four steps into the workflow builder itself. There is no audit left to do.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Futurum&apos;s 1H 2026 vendor survey shows <strong>43% of buyers now prefer consumption-based pricing and 27% prefer outcome-based</strong>, while seat-based pricing collapsed from 21% of companies to <strong>just 15% in a single year</strong>. Zendesk launched its AI agent at <strong>$1.50 per automated resolution</strong>. Intercom&apos;s Fin charges <strong>$0.99 per resolved customer support conversation</strong>. That is the new reference point a buyer brings into your sales call. They are reading about $0.99-per-outcome AI on the same Tuesday they&apos;re being quoted a $3,000 integration audit. The numbers don&apos;t survive the comparison.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We deleted &ldquo;Integration Setup&rdquo; as a billable phase.</strong> It&apos;s bundled into the 3-day build. With the May 21 update, the wiring is mostly clicks. We won&apos;t bill you for clicks.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. We build the integration inside the GHL workflow, not on top of it.</strong> No Zapier middle layer for things GHL now does natively. Every external connection lives inside the workflow&apos;s integration panel, so the client can audit and rotate accounts themselves.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. Our pricing is outcome-based, full stop.</strong> Built in 3 days, free until you see traction. That mirrors what Zendesk and Intercom are doing — you only pay once the system produces the result we agreed on.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. We don&apos;t bill discovery time.</strong> If we can&apos;t see the build inside the first conversation, we say no instead of selling a $2,500 &ldquo;audit.&rdquo; A two-hour &ldquo;we can&apos;t build this for you&rdquo; is more honest than a four-week scoping engagement that ends in the same answer.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                &ldquo;If GHL just made workflow integrations a 2-click setup, why is my current automation provider still quoting integration as a separate paid phase?&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                &ldquo;If Zendesk and Intercom are selling AI at $0.99 to $1.50 per outcome, why am I paying my agency a flat retainer that doesn&apos;t move when the work gets easier?&rdquo; If you can&apos;t get clean answers, you are not buying automation. You are subsidizing your provider&apos;s old pricing model through a release cycle that has already obsoleted it.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                The May 21 release is small if you only read the changelog. It is enormous if you read the invoice. Integration setup was one of the last places agencies could quietly mark up clicks as &ldquo;expertise.&rdquo; GHL just turned those clicks into default UX. The next twelve months will sort agencies into two camps: the ones who repriced for the new reality, and the ones still selling a discovery deck. Your customer already has.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want Outcome-Based Pricing, Not an Audit SOW?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Integration setup is included. Discovery is free. You don&apos;t pay until the system produces the outcome we agreed on — not when the OAuth fires.</p>
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
