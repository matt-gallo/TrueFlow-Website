'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'intelligence-is-a-dial-your-automations-one-setting'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Anthropic Just Turned Intelligence Into a Dial. Your Automations Are Stuck on One Setting."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">AI Trends</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 30, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Anthropic Just Turned Intelligence Into a Dial. Your Automations Are Stuck on One Setting.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Claude Opus 5 shipped on July 24 with a per-request effort toggle, and downstream tools are already passing the savings through. Capability is now something you choose per task &mdash; but almost every small-business automation still runs one setting for every job. Here&apos;s how to sort them.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On July 24, 2026, Anthropic shipped Claude Opus 5. Most of the coverage led with the price &mdash; frontier-class agentic performance at $5 per million tokens in and $25 out, unchanged from the last Opus and half of Fable 5&apos;s input rate. That&apos;s not the part that matters to you.</p>

              <p>The part that matters is a toggle. Opus 5 ships with a low/medium/high effort setting you choose per request, plus a Fast mode that runs about 2.5&times; quicker for double the rate. You are no longer buying &ldquo;a model.&rdquo; You are setting three dials &mdash; capability, speed, cost &mdash; one job at a time.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Every lab is converging on the same idea from a different direction. OpenAI&apos;s GPT-5.6 does it in reverse with Ultra Mode: one request gets decomposed across as many as eight parallel subagents when the work warrants it. Anthropic gives you a knob to turn the thinking down. OpenAI gives you a knob to turn it up. Same admission underneath &mdash; most tasks never needed the flagship in the first place.</p>

              <p>The pass-through is already happening downstream. On July 30, Framer emailed customers to say GPT-5.6 Terra and Luna now consume 50% fewer credits inside its Agents product. Not a discount. A routing change: cheaper model, same job, half the meter.</p>

              <p>Here&apos;s the problem. Almost every automation running inside a small service business had its setting chosen exactly once &mdash; at build time, by whoever set it up, usually by accepting a default &mdash; and never revisited. One dial position applied to a hundred different jobs.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>We route by consequence, not by task type. Three tiers, and every automated step lands in one of them.</p>

              <p><strong className="text-white">Tier 1 &mdash; Retrieval.</strong> Reversible, verifiable, boring. Look up a booking, tag a contact, pull a number off a form, sync a record. Cheapest and fastest setting available, no reasoning budget. If a step is deterministic, it shouldn&apos;t be paying for judgment it isn&apos;t using.</p>

              <p><strong className="text-white">Tier 2 &mdash; Judgment with a human downstream.</strong> Draft the reply, summarize the call, classify the inbound lead. Middle setting. A person sees the output before a customer does, so the cost of being 90% right is a five-second edit.</p>

              <p><strong className="text-white">Tier 3 &mdash; Consequence.</strong> Anything that reaches a customer unsupervised or can&apos;t be walked back: the email that actually sends, the record of record getting changed, money moving. Highest setting, plus a check that isn&apos;t the model itself.</p>

              <p>We re-run this sort every time the labs ship something. Opus 5 landed six days ago. The useful question was never &ldquo;should we switch to it&rdquo; &mdash; it was &ldquo;which tier of our work just moved,&rdquo; and the honest answer that week was Tier 2, not Tier 3.</p>

              <p>Here&apos;s the line another agency will push back on: most of the &ldquo;the AI isn&apos;t good enough&rdquo; complaints we get called in to fix are not model problems. They&apos;re one setting applied to work that needed three. And the expensive direction is more common than anyone says out loud &mdash; plenty of businesses are paying flagship rates to look up a phone number.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p><strong className="text-white">First:</strong> for each automation you&apos;re running, what setting is it on, and who chose it? &ldquo;Whatever the tool defaulted to&rdquo; is a real answer and a bad one. Defaults are set by vendors optimizing for their demo, not your invoice.</p>

              <p><strong className="text-white">Second:</strong> which of your automated steps would you be comfortable running on the cheapest, least capable setting available? If your instinct is &ldquo;none of them,&rdquo; you haven&apos;t sorted your work &mdash; you&apos;ve just never had to look at it that way. Most stacks we open have a clear majority sitting in Tier 1.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The labs stopped selling you a model this month and started selling you a dial. That&apos;s a genuine gift to small businesses, because it means capability is now something you allocate instead of something you buy. But a dial only helps if someone turns it. The businesses that get real leverage over the next year won&apos;t be the ones running the best model everywhere. They&apos;ll be the ones who sorted their work first, and then spent accordingly.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help routing your automations by consequence, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Anthropic Claude Opus 5 launch and pricing coverage, July 24, 2026; OpenAI GPT-5.6 Ultra Mode subagent orchestration, July 2026; Framer product update email to customers, July 30, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
