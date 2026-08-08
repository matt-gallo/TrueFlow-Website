'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'openai-cut-prices-eighty-percent-does-it-reach-your-invoice'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "OpenAI Cut Its Prices 80% Last Week. Check Whether Any of It Reaches Your Invoice."

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
              <span className="text-white/50 text-sm">August 8, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              OpenAI Cut Its Prices 80% Last Week. Check Whether Any of It Reaches Your Invoice.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              On July 30, OpenAI dropped GPT-5.6 Luna&apos;s input price by 80%. Almost no small business will feel it, because you don&apos;t buy tokens &mdash; you buy seats and subscriptions from vendors who do. Here&apos;s the twenty-minute line-item test that tells you which of your AI costs can actually fall.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On July 30, 2026, OpenAI cut the price of GPT-5.6 Luna by 80% &mdash; from $1.00 to $0.20 per million input tokens, and from $6.00 to $1.20 on output. Terra dropped 20%. Sol, the flagship, didn&apos;t move. All of this three weeks after the GPT-5.6 family launched on July 9.</p>

              <p>If you run a clinic, an agency, or a home services company, here&apos;s the honest answer to what that means for your business: probably nothing. That&apos;s the part worth ten minutes of your attention.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>The raw cost of thinking got cheaper. The price of the products built on top of it did not.</p>

              <p>You don&apos;t buy tokens. You buy an AI receptionist subscription, a CRM seat with an AI add-on, an inbox assistant, a notetaker. Every one of those vendors buys tokens, marks them up, and sells you a monthly plan. When their input cost drops by 80%, the first-order effect is a wider margin on their side of the invoice. Your bill renews at exactly the same number unless somebody makes it move.</p>

              <p>Why the cut happened tells you how much room is in there. CNBC reported on July 7 that Chinese models had taken roughly 46% of US enterprise token usage on OpenRouter, with DeepSeek V4 Pro priced around $0.435 per million input tokens. OpenAI then priced Luna underneath it. This is a price war between suppliers, and the savings stop dead at whichever layer of your stack has no competition.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Line-Item Test</h2>
              <p>Open last month&apos;s card statement and sort every AI-related charge into three columns. Twenty minutes, once.</p>

              <p><strong className="text-white">Metered.</strong> You&apos;re billed per minute, per conversation, per resolution, per credit. These can fall when model prices fall &mdash; occasionally on their own, usually only at renewal. This is the one column the 80% can actually reach.</p>

              <p><strong className="text-white">Flat.</strong> A fixed monthly fee with usage that&apos;s unlimited or generous enough that you never think about it. Nothing about last week changes this number. What changed is your leverage: your vendor&apos;s cost of goods just dropped, and now you know it.</p>

              <p><strong className="text-white">Per-seat.</strong> An AI feature bundled into a license you pay for by headcount. This is the worst place to be holding AI spend right now, because the price is tied to how many people you employ and has no relationship to how much work the AI does. If you pay for twelve seats and four people touch the AI feature, you are funding somebody&apos;s expansion revenue.</p>

              <p>Then write one number at the bottom: the share of your AI spend sitting in the flat and per-seat columns. For most small businesses we look at, it&apos;s nearly all of it. That number is the entire reason headlines about collapsing AI costs never turn up in your bookkeeping.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Do Differently</h2>
              <p>We keep a renewal date next to every AI line item, with a letter marking which of the three columns it belongs to. It lives beside the automation inventory, not in someone&apos;s head.</p>

              <p>Thirty days before a metered contract renews, we send the vendor a plain email asking whether their per-unit price has moved with the market since we signed. Sometimes it has and nobody applied it. That&apos;s not a negotiation, it&apos;s a question.</p>

              <p>And we don&apos;t chase the cheap model. Here&apos;s the sentence other agencies will argue with: for a small service business, migrating your working automations to a cheaper model is almost never worth the afternoon it costs. The savings are measured in dollars. The risk &mdash; a wrong quote, a mis-routed lead, a summary that drops the one detail that mattered &mdash; is measured in customers. Take the price cuts that arrive automatically, and spend the afternoon fixing the workflow instead.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Which of your AI tools would send you a smaller invoice next month if the underlying model became free tomorrow?</p>

              <p>If the answer is none of them, you haven&apos;t bought AI. You&apos;ve bought software with AI inside it at a fixed price, and every efficiency gain this industry produces belongs to your vendor.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Model prices are falling fast and will keep falling. That&apos;s real, and it&apos;s genuinely good news for what will be possible at your size in a year. It just isn&apos;t automatically yours. The 80% reaches you through a metered contract or a renewal conversation, and nowhere else.</p>

              <p>Sort the line items once. Mark the renewal dates. Then you&apos;ll know which of these headlines is about you.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help sorting your AI line items and finding the ones that can actually fall at renewal, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: CNBC, &ldquo;OpenAI cuts prices for two of its GPT-5.6 AI models as companies grow sensitive to costs,&rdquo; July 30, 2026; VentureBeat, &ldquo;AI price wars: OpenAI cuts GPT-5.6 Luna prices by 80% as model competition shifts toward cost,&rdquo; July 30, 2026; CNBC reporting on Chinese model share of US enterprise token usage via OpenRouter, July 7, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
