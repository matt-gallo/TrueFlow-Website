'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'price-increase-cancelled-meter-still-changed'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Price Increase Scheduled for Tuesday Was Cancelled. The Meter Behind It Still Changed."

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
              <span className="text-white/50 text-sm">August 29, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Price Increase Scheduled for Tuesday Was Cancelled. The Meter Behind It Still Changed.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Anthropic called off a 50% rate increase three weeks early. A footnote in the same post says the same text now maps to up to 35% more billable units. Here&apos;s the Unit Check &mdash; the pass that reads what your vendors are counting, not what they charge per count.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On June 30, 2026, Anthropic released Claude Sonnet 5 at $2 per million input tokens and $10 per million output tokens. The launch post called that introductory pricing and named the date it would end: standard pricing of $3 and $15 would take effect September 1.</p>

              <p>September 1 is Tuesday. It is not happening. On August 10 Anthropic edited that post &mdash; the introductory rate is permanent, and the scheduled increase no longer applies. The pricing documentation carries the same note.</p>

              <p>We run our own content pipeline on these models, and we had budgeted for the higher number. We found out it had been called off nineteen days after the edit, by reading a pricing page for an unrelated reason.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Footnote 2 of the Same Post</h2>
              <p>The launch post carries a footnote that did not travel nearly as far as the price did.</p>

              <p>Sonnet 5 uses an updated tokenizer &mdash; the mechanism that chops your text into the units you are billed for. Anthropic&apos;s own wording: <em>&ldquo;the same input can map to more tokens: roughly 1.0&ndash;1.35&times; depending on the content type.&rdquo;</em> The pricing documentation states it more plainly for the whole model family: the newer tokenizer <em>&ldquo;produces approximately 30% more tokens for the same text.&rdquo;</em></p>

              <p>Set the two facts side by side. The price per unit went down. The number of units went up. Same prompt, same document, same job.</p>

              <p>Run the arithmetic honestly and it still lands in your favor: two-thirds the rate against as much as 1.35 times the count is roughly a ten percent saving, not a bill shock. That is the correct answer this quarter. It is a coincidence of two numbers moving in opposite directions by similar amounts, and nobody at either end of the transaction promised you they would keep doing that.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Both Numbers Are Public. Neither One Is on Your Invoice.</h2>
              <p>Nothing here was hidden. The rate is on a pricing page. The tokenizer change is in a footnote on a launch post and a callout in the docs. Both are dated, both are the vendor&apos;s own words, both were published before the bill arrived.</p>

              <p>Your invoice reports the product of the two and shows you neither.</p>

              <p>That is not an Anthropic problem. It is the shape of every metered thing you buy. Somebody decides what a message is, what a contact is, what a run is, what counts as resolved. That definition is a lever, it sits with the seller, and it moves on a different schedule than the price does. We think the per-unit price is the least useful number on a metered invoice, which is an unpopular thing to say to anyone who just finished a cost review built entirely out of price comparisons.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Unit Check</h2>
              <p><strong>The Unit Check</strong> is one pass over every metered line you pay for, reading what the vendor counts rather than what they charge per count.</p>

              <p>Four columns, one row per line item.</p>

              <p><strong>The unit.</strong> Not the price. The noun. Tokens, messages, segments, conversations, contacts, resolutions, runs, seats, minutes.</p>

              <p><strong>Who defines it.</strong> It is the vendor, every time. Write it in anyway. Seeing the same name twelve times down a column is the point of the column.</p>

              <p><strong>When the definition last changed.</strong> Go to the changelog, the pricing page, the release post footnotes. If you cannot find a date, you have not found the answer &mdash; you have found that you were not tracking it.</p>

              <p><strong>Charge divided by your own volume.</strong> Take last month&apos;s charge and divide it by the volume you measured yourself, not the count the vendor reported. Do the same for two months prior. If those two figures differ and the published price did not, the unit moved underneath you.</p>

              <p>Twenty minutes for most stacks. The fourth column is the one that finds things, because it is the only one that does not depend on the vendor having told you.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Would Have to Change Before You Noticed?</h2>
              <p>If a vendor redefined its billing unit tomorrow and left the price alone, which line on which invoice would move first, and who reads that invoice closely enough to see it?</p>

              <p>And the version of that question with more money in it: which of your vendors bills by an outcome &mdash; a resolution, a qualified lead, a completed run &mdash; where the definition of the outcome is written by the party that gets paid for it?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>The rate is on the pricing page. The count is in the footnote. You are billed for both.</p>

              <p className="italic text-white/60 pt-4">Sources: Anthropic, &ldquo;Introducing Claude Sonnet 5&rdquo; (June 30, 2026; changelog edit August 10, 2026), including footnote 2 on tokenizer behavior; Claude Platform pricing documentation, model pricing and tokenizer notes (retrieved August 29, 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Want help running the Unit Check across your AI and messaging stack?
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
