'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'who-owns-your-accounts-title-check'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Checked Who Actually Owns Our Accounts. One Answer Was a Person Who Doesn't Work Here."

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
              <span className="text-white/50 text-sm">August 17, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Checked Who Actually Owns Our Accounts. One Answer Was a Person Who Doesn&apos;t Work Here.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Access and ownership are not the same thing, and almost nobody has written down which one they have. Here&apos;s the Title Check &mdash; a twenty-minute pass over every account your business runs on, and whose name is actually on it.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week we sat down and wrote out every account this business runs on, and next to each one, whose name it is actually in. Twenty minutes, one page. One row came back wrong.</p>

              <p>A code repository that renders part of our own website still lists a collaborator account we moved off of as its origin. Nothing about it is broken. The site builds, the history is intact, the work is ours. But the login sitting on the ownership record belongs to someone who is not part of this company anymore. We have access. We do not have title.</p>

              <p>That distinction has no symptoms until the day it does.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The version with symptoms</h2>
              <p>A business owner in our orbit lost her Facebook business page a few weeks ago. Not suspended &mdash; gone. The personal Facebook account that had created the page years earlier was permanently banned, and the page went with it. So did the ad account attached to it, the review history, and the audience.</p>

              <p>Getting back meant standing up a new business portfolio, a new page, and waiting on identity verification before a single ad could run again. Weeks of a booking calendar with nothing feeding it.</p>

              <p>Nothing on her side failed. Her business was fine. She had simply never been the owner of the thing her customers arrived through, and there was no way to find that out except by losing it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Title Check</h2>
              <p><strong className="text-white">The Title Check</strong> is a written record of every account your business depends on and whose name it is in. Four columns, twenty minutes, no purchase required.</p>

              <p>1. <strong className="text-white">The account.</strong> Domain registrar. DNS. Business page and ad account. Payment processor. Phone numbers. Review profiles. Code repository and web host. The address you send email from. Booking calendar.<br />2. <strong className="text-white">The login it was created under.</strong> The actual email address, typed out. Not &ldquo;the office account.&rdquo; Not &ldquo;our bookkeeper has it.&rdquo; The address.<br />3. <strong className="text-white">Who recovers it</strong> if that login stops existing tomorrow &mdash; banned, closed, or attached to somebody who left.<br />4. <strong className="text-white">What stops</strong> while you sort it out.</p>

              <p>Column two is where it goes wrong. Most accounts in a small business were opened in a hurry by whoever was sitting there, and the record still says so four years later. That is not carelessness. It is what happens when the thing gets built before the business exists to own it.</p>

              <p>Column four is the one that decides your order of operations. An account whose loss costs you a morning is a different problem from one whose loss costs you every inbound call.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The two rows that fail most</h2>
              <p>The domain registrar and the phone number.</p>

              <p>Both tend to be in a founder&apos;s personal name, a former contractor&apos;s, or a web guy&apos;s from 2019. Both are slow to unwind &mdash; you cannot fix either one in an afternoon while your site is down. And both sit underneath everything else on the list, which means their failure is not confined to their own row.</p>

              <p>Fix the registrar first, and fix it on a quiet Tuesday. ICANN&apos;s Transfer Policy places a 60-day transfer lock on a domain after a change to the registrant contact. The GNSO Council voted in late 2024 to eliminate that lock; it has not been implemented. So today, updating the ownership record on your domain means you cannot move that domain to another registrar for two months afterward.</p>

              <p>That is a fine trade to make now. It is a terrible one to discover mid-emergency.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The part that applies to us</h2>
              <p>Most agencies ask for access. Access is the cheaper conversation, and it happens to favor the agency &mdash; admin rights with no transfer of title is leverage, whether or not anyone intends to use it.</p>

              <p>Ask for title. When you hire someone to build on your accounts, the business owns the account and the vendor gets a seat on it. If a vendor is unwilling to work that way, you have learned something worth more than the build.</p>

              <p>We are writing our own row this week.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Access lets you use an account. Title lets you keep it. Nothing on your systems will tell you which one you have &mdash; you have to go read the record.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: ICANN Transfer Policy (60-day change-of-registrant lock; GNSO Council recommendation to remove it approved late 2024, not yet implemented); internal TrueFlow account review, August 2026; anonymized client conversation, August 12, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
