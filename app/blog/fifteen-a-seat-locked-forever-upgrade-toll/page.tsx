'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'fifteen-a-seat-locked-forever-upgrade-toll'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "$15 a Seat, Locked “Forever.” The AI Agent Is on the $35 Plan, and You Can't Buy One Seat of It."

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
              <span className="text-white/50 text-sm">September 9, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              $15 a Seat, Locked &ldquo;Forever.&rdquo; The AI Agent Is on the $35 Plan, and You Can&apos;t Buy One Seat of It.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Kommo raised its plans on September 1 and left legacy customers alone &mdash; on the condition they never switch plans. The feature most of them want is on the other side of that condition. Here&apos;s the Upgrade Toll &mdash; the four numbers that price a tier change as the account-wide repricing it actually is.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 1, Kommo raised its Base plan from $15 to $25 per user per month, and Advanced from $25 to $35. Pro sits at $45. Every tier is billed per seat.</p>

              <p>If you were already on Base, nothing happened to your bill. Kommo calls the old tiers Legacy plans, and its own pricing FAQ says they remain active and fully supported. There is one clause attached to that.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">&ldquo;Unless You Choose to Switch to One of the Current Kommo Plans&rdquo;</h2>
              <p>That is the end of the sentence, from Kommo&apos;s pricing page. Your subscription and features stay unchanged unless you choose to switch.</p>

              <p>Read it as a price and it reads as generous. Read it as a condition and it reads differently. The old rate holds for exactly as long as you never want anything new.</p>

              <p>Now look at where the new things live. Kommo AI&apos;s writing assistance, summaries and suggested replies are on every plan. The AI agent &mdash; the part that actually replies in chat and runs automations &mdash; starts on Advanced. The AI analyst is Pro and up.</p>

              <p>So a legacy Base customer who decides in October that he wants the agent is not making a feature decision. He is making a repricing decision, and the feature is what got him to open the billing page.</p>

              <p>Most of the AI capability sold to small businesses this year works this way. It is not only a product. It is also a reason to move you onto a current plan.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Subscription Applies to the Account, Not to a User</h2>
              <p>Kommo&apos;s FAQ is direct about this: a subscription applies to the entire account, all users share the same plan, and plans cannot be mixed within one account.</p>

              <p>There is no small version of the test. You cannot put one seat on Advanced, run the agent for a month, and decide from that. Every seat moves or none do. The minimum subscription term is six months.</p>

              <p>Then the meter starts. Each seat carries a monthly credit allowance &mdash; 750 on Base, 1,250 on Advanced, 2,250 on Pro &mdash; and unused credits do not carry over. An agent reply runs about 15 credits. An analyst request runs 100 to 200. If a seat runs dry, credit packages are bought upfront, minimum three months on a new purchase, and a package cannot outlast the subscription it sits on.</p>

              <p>None of that is hidden. It is all published. It is just not on the page you are looking at when you are thinking about one feature.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Upgrade Toll</h2>
              <p>Before you turn on anything gated behind a higher tier, write down four numbers.</p>

              <p>What you pay now, per month, for the whole account.</p>

              <p>What the account costs at the new tier &mdash; every seat, same month.</p>

              <p>The difference, multiplied by the months left in your committed term.</p>

              <p>What the feature has to save or earn per month to clear that difference.</p>

              <p>The fourth number is the one that changes decisions. A feature that saves a few hours a month is a good feature. Set against an account-wide repricing on a six-month floor, it is frequently not a good purchase. The arithmetic takes four minutes and almost nobody does it, because the tier page shows a per-seat delta and the mind quietly multiplies by one.</p>

              <p>This is not the Line-Item Test, which sorts charges you already pay into metered, flat and per-seat. The Upgrade Toll runs before the charge exists, on a switch nobody has flipped yet.</p>

              <p>We are not clean on this. There are tools in our own stack sitting on rates we locked in months ago, and until this week we could not have told you what condition holds each one in place.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Price the Switch Before We Price the Feature</h2>
              <p>Three things, in this order.</p>

              <p>We check whether the thing the client wants is actually gated. Often it is not. It is sitting on their current plan, documented somewhere nobody reads, and the conversation ends there.</p>

              <p>When it is genuinely gated, we price the account rather than the feature. The number that goes in front of the client is the account-wide difference across the remaining term. Never the tier&apos;s per-seat sticker.</p>

              <p>Then we ask which already-paid-for tool does the same job badly. Repairing a bad configuration on something you own beats buying a tier to route around it. We would rather delete a step than add one.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Grandfathered pricing is not a discount. It is a standstill agreement, and the vendor chooses which feature sits on the other side of it.</p>

              <p className="italic text-white/60 pt-4">Source: Kommo pricing and subscription plans page (kommo.com), accessed September 9, 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              If you&apos;d like help running an Upgrade Toll before your next tier change, book a strategy call with our team.
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
