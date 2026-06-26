'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'your-crm-now-charges-per-outcome-run-the-math'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Salesforce Made $800M Charging Per AI Task. For a Small Business, Per-Outcome Pricing Can Be the More Expensive Deal."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Industry</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 25, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Salesforce Made $800M Charging Per AI Task. For a Small Business, Per-Outcome Pricing Can Be the More Expensive Deal.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The whole CRM industry just switched from charging per seat to charging per outcome. It sounds fairer &mdash; but for a healthy, growing small business, the math can quietly turn against you. Here&apos;s how to check before you switch.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>For twenty years your software charged you the same way: a seat, a month, a flat number you could write on a whiteboard and forget. That model is being dismantled right now, and the numbers behind the shift are big enough that you should pay attention.</p>
              <p>Salesforce reported its Agentforce business hit roughly $800 million in annual recurring revenue by the close of its fiscal 2026, delivering 2.4 billion &ldquo;Agentic Work Units&rdquo; &mdash; its term for discrete tasks an AI agent completes. To get there it now runs three pricing models at once: conversation-based, per-user, and Flex Credits that bill roughly $0.10 every time an agent takes an action. HubSpot moved its Breeze agents to outcome pricing on April 14 &mdash; $0.50 per resolved support conversation, $1 per qualified lead. Intercom&apos;s Fin charges $0.99 per resolution. The pattern is now the category, not the exception.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Your tools used to charge for <em>access</em>. Increasingly, they charge for <em>results</em> &mdash; a resolved ticket, a qualified lead, an action taken. On the surface this is the fairer deal everyone asked for: you only pay when the software does something.</p>
              <p>Here&apos;s the part nobody selling it will lead with. Per-seat pricing is a fixed cost &mdash; it doesn&apos;t care how busy you are. Per-outcome pricing is a variable cost that climbs with your volume. The vendor just moved the meter from &ldquo;how many of you there are&rdquo; to &ldquo;how much work you&apos;re doing,&rdquo; and for a business that&apos;s growing, the second meter runs faster. The fairer-sounding model is the one that bills you more precisely the more successful you get.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Second Number Worth Sitting With</h2>
              <p>Deloitte and several SaaS analysts now expect flat subscriptions to give way to hybrid pricing &mdash; a base fee plus variable AI consumption &mdash; across most business software in the next few years. So this isn&apos;t one vendor&apos;s experiment you can wait out. The reminder app, the CRM, the inbox tool, the scheduler: assume each is going to start metering something.</p>
              <p>Which means the relevant skill for an owner in 2026 isn&apos;t picking the cheapest tool. It&apos;s knowing your own volume &mdash; how many tickets, leads, and actions you actually generate in a month &mdash; well enough to predict what a per-outcome bill will do at your scale.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>We do the unit-economics math <em>before</em> a client switches plans, not after the first surprising invoice. That means pulling their real monthly volume of whatever the vendor wants to meter and computing the per-outcome total against the old flat number &mdash; including the months where volume spikes.</p>
              <p>We treat predictability as a feature. For a lot of small businesses, a slightly higher flat bill they can forecast beats a variable bill that&apos;s cheaper on a slow month and brutal in December. We&apos;ll say so even when the &ldquo;modern&rdquo; option looks better in the demo.</p>
              <p>And we count the outcome ourselves. If a vendor defines a &ldquo;qualified lead&rdquo; or a &ldquo;resolved conversation,&rdquo; we check whether their definition matches yours before a dollar rides on it &mdash; because the party that defines the unit controls the bill.</p>
              <p>We&apos;re not theorizing here. We spent part of this week mapping our own service tiers and arguing about how to price a single unit of our work fairly. It is genuinely hard to do well, which is exactly why you shouldn&apos;t accept a vendor&apos;s version on faith.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Two questions before you move to any per-outcome plan. First: <em>what is my actual monthly volume of the thing they&apos;re metering, and at what volume does this cost more than my flat plan?</em> Second: <em>who counts the outcome &mdash; me, or the vendor whose revenue depends on the count?</em></p>
              <p>The takeaway is simple. Outcome-based pricing isn&apos;t a scam, but it isn&apos;t automatically a win either. It&apos;s a bet on your own volume, and you should only take it after you&apos;ve done the arithmetic the salesperson is hoping you&apos;ll skip.</p>
              <p className="text-white/50 text-sm italic">Sources: Salesforce Agentforce results via SaaStr; HubSpot Breeze outcome pricing via CX Today; SaaS/agentic pricing trend via Deloitte and SaaS Mag (all 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want to run the per-outcome math on your own stack?</h3>
            <p className="text-white/60 mb-6">We do the unit economics before you switch &mdash; not after the first surprising invoice.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
