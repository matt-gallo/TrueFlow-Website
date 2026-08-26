'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'agents-hand-off-work-without-you-write-list'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Agents Can Now Hand Work to Each Other Without Asking You. Nobody Wrote Down What They May Change.'

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Operations</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">August 24, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Agents Can Now Hand Work to Each Other Without Asking You. Nobody Wrote Down What They May Change.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              On August 17 Google&apos;s Agent2Agent protocol moved in alongside Anthropic&apos;s MCP under one Linux Foundation roof. The spec&apos;s own phrase for the feature is &ldquo;without a human brokering the handoff.&rdquo; Here&apos;s the Write List &mdash; twenty minutes to find what every connection into your business is allowed to change.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On August 17, 2026, Google&apos;s Agent2Agent protocol moved to the Agentic AI Foundation, the Linux Foundation body that already governs Anthropic&apos;s Model Context Protocol. Axios had it first. AAIF says it has gone from fewer than 40 members at its December 2025 launch to more than 250, including Google, Microsoft, Amazon, Anthropic, OpenAI, Shopify and Block.</p>

              <p>Two protocols, one roof. MCP is how an agent reaches your tools. A2A is how one agent hands work to another.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Read AAIF&apos;s own description of the mechanism. An agent publishes an agent card &mdash; a structured description of what it can do and how to reach it. Other agents read that card, discover the capability, and delegate the task.</p>

              <p>The phrase in their post is &ldquo;without a human brokering the handoff.&rdquo; That is the feature, stated plainly, and it is also the whole story.</p>

              <p>Until now, connecting two systems in your business required somebody to decide they should be connected. Somebody clicked authorize. That person was a bottleneck, and incidentally a review step. The standard that just got a permanent home removes the bottleneck. It does not replace the review, because the review was never a product. It was a side effect of the work being annoying.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The People Building This Already Separated the Two Questions</h2>
              <p>Watch what happens where money enters. Google Cloud and PayPal are extending A2A into commerce through a second protocol, AP2, which exists to handle payment authorization. Agents talk over A2A; a different layer decides whether a purchase is allowed. Huawei&apos;s OS assistant and Tencent&apos;s WeChat run assistant-initiated calls and messages under what AAIF describes as dual authorization.</p>

              <p>A2A v1.0, shipped March 2026, added cryptographically signed agent cards. Identity verification, written into the specification, because &ldquo;which agent is this&rdquo; turned out to matter.</p>

              <p>Nobody building this treats delegation and permission as the same question. That care stops at the edge of the standard. Inside a nine-person business, the equivalent question has no owner.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part That&apos;s Ours</h2>
              <p>On August 17 our own publisher rewrote the featured image on 46 blog posts in one run. We wrote about undoing it. What we did not write is why it could reach 46 records at all.</p>

              <p>Nothing about that job required write access to 46 posts. It needed write access to one. The credential it ran under simply had more reach than the job did, because nobody had ever sat down and matched the two. That is not an agent problem. It is a permission that was set once and never read again, and it is in every stack we have audited.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Write List</h2>
              <p>Twenty minutes, one page.</p>

              <p>List every connection into your business that can change a record without a person present. Integrations, Zaps, webhooks, scheduled jobs, assistants with tool access, an agency&apos;s API key. Then three columns.</p>

              <p>1. <strong className="text-white">What it can read.</strong> Usually everything. Note it and move on.</p>

              <p>2. <strong className="text-white">What it can change.</strong> Be specific. Not &ldquo;contacts&rdquo; &mdash; which field. Not &ldquo;invoices&rdquo; &mdash; create, edit, or void.</p>

              <p>3. <strong className="text-white">What it should be able to change</strong>, based on the job you installed it to do.</p>

              <p><strong className="text-white">The Write List</strong> is finished when columns two and three match on every row.</p>

              <p>They will not match. Column two was set at install by clicking through a scope screen that asked for everything at once, and column three has never been written down anywhere. The distance between them is the surface an agent-to-agent handoff inherits &mdash; not because agents are reckless, but because a delegated task runs with whatever the delegator was already holding.</p>

              <p>If twenty minutes is too many, sort by what a wrong write costs. A connection that can edit a phone number is a bad afternoon. A connection that can void an invoice or send from your domain is a different category.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Which connection in your business has the widest write access, and what job did you install it to do?</p>

              <p>If something you never authorized asked that connection to act today, would anything in your stack refuse?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Interoperability arrived as a standard. Permission arrived as your problem.</p>

              <p className="italic text-white/60 pt-4">Sources: Axios, &ldquo;Exclusive: Google-backed agentic A2A protocol gets a new home,&rdquo; August 17, 2026; Agentic AI Foundation, &ldquo;A2A joins AAIF&apos;s open agentic stack,&rdquo; August 17, 2026; Linux Foundation press release announcing the AAIF, December 9, 2025; TrueFlow site repository commit history, August 17, 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              If you&apos;d like help scoping what each connection into your business is allowed to change, book a strategy call with our team.
            </p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Book a Strategy Call
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
