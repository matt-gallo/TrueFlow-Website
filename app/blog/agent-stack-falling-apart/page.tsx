'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'agent-stack-falling-apart'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "7 Signs Your Agent Stack Is Falling Apart (Most Owners Have 4)"

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
              <span className="text-white/50 text-sm">July 20, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">6 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              7 Signs Your Agent Stack Is Falling Apart (Most Owners Have 4)
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              ICML 2026 just had 60+ workshops on agentic AI. Your competitors are adding agents fast. But you already bought five AI tools last year. Here&apos;s what happens next &mdash; and why adding another agent breaks more than it fixes.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>ICML 2026 opens this week with a record 23,918 submissions and an unusual emphasis: 60 of its 247 workshop proposals center on some variant of &ldquo;agentic AI.&rdquo; For enterprise teams, this is exciting. For a clinic owner using Calendly, Slack, HubSpot, Zapier, and ChatGPT, it&apos;s a problem disguised as an opportunity.</p>
              <p>The problem is not agents. The problem is that you already own five tools. And now everyone is shipping agents <em>inside</em> those tools. So you&apos;ll be tempted to buy six, then seven, then a $500/mo agent orchestration layer to glue them together.</p>
              <p>By then you&apos;ve gone backwards.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Actually Seeing</h2>
              <p>Eighty-two percent of small business owners have bought AI tools. The median is using five of them. Ninety-three percent plan to increase AI spending next year.</p>
              <p>None of them have a map. Most don&apos;t have a process owner. A lot are asking: &ldquo;Is my agent supposed to talk to my CRM? Which one&apos;s supposed to handle scheduling? Who writes the prompts?&rdquo;</p>
              <p>And the honest answer right now is that <em>consolidation</em> hasn&apos;t kept up with <em>capability</em>. So every new agent release feels like an upgrade when it&apos;s actually another brick in a wall that&apos;s already too tall.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Warning Signs (Check Your Stack)</h2>
              <p>Here&apos;s what we&apos;re seeing in owners who are about to get crushed by their own tools:</p>
              <p><strong>1. You own three agents doing basically the same job.</strong> Different tools, same outcome. One&apos;s in Slack, one&apos;s in your CRM, one&apos;s in Make/Zapier.</p>
              <p><strong>2. You&apos;re paying for features you&apos;ve never turned on.</strong> Three different AI tools with scheduling. Two with lead scoring. Four with &ldquo;advanced memory.&rdquo; You use one, not all four.</p>
              <p><strong>3. Your team doesn&apos;t know which tool to use when.</strong> They use the fastest one, which breaks consistency. Or they use the first one they learned, which means the best tool stays a demo.</p>
              <p><strong>4. You&apos;re stitching five tools together with Zapier, and Zapier is now your critical system.</strong> When Zapier breaks, everything breaks. You&apos;ve built complexity on complexity.</p>
              <p><strong>5. Your &ldquo;agent&rdquo; is really just a bot doing what a $50/mo workflow could do.</strong> An agent <em>should</em> think. Should adapt. Should handle ambiguity. If it&apos;s just running the same prompt every time, it&apos;s not an agent, it&apos;s a faster script.</p>
              <p><strong>6. You&apos;re losing time training people instead of saving time with automation.</strong> Each tool has a learning curve. Five tools means five curves. At a certain point, the overhead becomes the work.</p>
              <p><strong>7. You just bought agent tool #6 because the vendor said it &ldquo;plays nice with the others.&rdquo;</strong> Nobody plays nice. They promise integration and deliver a webhook. You&apos;re betting your workflow on a patch that breaks twice a year.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Comes After &ldquo;More Tools&rdquo;</h2>
              <p>We talk to owners every week who&apos;ve hit this wall. The pattern is consistent: they&apos;ve been solving a <em>tool problem</em> with more tools. But the problem was never <em>which tool</em>. It was <em>how many</em>.</p>
              <p>The move that actually works looks different. It&apos;s:</p>
              <p><strong>1. Map what you own.</strong> Five spreadsheets. Five tools. List them. Don&apos;t judge it yet.</p>
              <p><strong>2. Delete what you&apos;re not using.</strong> You have three AI note-takers. Use the best one. Cancel two. Call that a win.</p>
              <p><strong>3. Consolidate around the tool you actually live in.</strong> For most service businesses, that&apos;s your CRM or your email. Buy the agent <em>there</em>, not somewhere else.</p>
              <p><strong>4. Automate inside that tool before you buy a new one.</strong> Your CRM probably has workflow automation you&apos;ve never opened. Most owners find 30 hours a week hiding in there before they need a fourth tool.</p>
              <p><strong>5. When you do add something, it should kill something else.</strong> Not replace it. Kill it. New agent = canceled subscription. If you&apos;re only adding, you&apos;re losing.</p>
              <p>The businesses winning with agents right now aren&apos;t the ones with the fanciest toolstack. They&apos;re the ones who said &ldquo;no&rdquo; to four things so they could say &ldquo;yes&rdquo; to one.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Question to Ask Right Now</h2>
              <p>Before you evaluate the next agent platform or AI tool that lands in your inbox: <em>Is this solving a real problem, or am I solving a problem I created by buying too many tools?</em></p>
              <p>If you can&apos;t answer that in one sentence, it&apos;s the second one.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help auditing your automation stack and figuring out which tools are actually earning their seat, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>. We&apos;ll map what you own, find what&apos;s broken, and tell you what actually needs to stay.</p>
              <p className="text-white/50 text-sm italic">Sources: ICML 2026 Workshop Program, accessed July 2026; Thryv 2026 AI and Small Business Adoption Survey; U.S. Census Bureau data on small business AI adoption rates, Q2 2026; internal TrueFlow client audits, July 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
