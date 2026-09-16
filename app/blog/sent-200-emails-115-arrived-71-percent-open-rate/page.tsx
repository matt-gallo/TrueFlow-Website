'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'sent-200-emails-115-arrived-71-percent-open-rate'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Sent 200 Emails and 115 Arrived. The Report Said the Open Rate Was 71%."

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
              <span className="text-white/50 text-sm">September 16, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Sent 200 Emails and 115 Arrived. The Report Said the Open Rate Was 71%.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Sending platforms calculate open rate against messages delivered, not messages sent &mdash; so the number that gets celebrated is computed on a base that already excludes your biggest problem. Here is the arithmetic on one of our own test batches, and the ninety-second recalculation to run before you read any rate.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 1 we sat down and read the numbers on a cold email campaign we&apos;re running. Two hundred contacts in the test batch, thirty going out every ten minutes between 9 and 5 Eastern.</p>

              <p>One hundred fifteen were delivered.</p>

              <p>The reporting screen said the open rate was 71 percent. Both of those numbers are correct. Only one of them is about the business.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">71 Percent of What</h2>
              <p>An open rate is a fraction, and the denominator is almost never the number you had in mind. Mailchimp&apos;s own documentation defines it as &ldquo;a percentage that tells you how many successfully delivered emails were opened by recipients&rdquo; &mdash; delivered, not sent. Every major sending platform does it this way. So the 85 addresses that bounced, got filtered, or hit a dead domain don&apos;t drag the rate down. They leave the calculation entirely.</p>

              <p>Run the arithmetic on our batch. Seventy-one percent of 115 is about 82 opens. Against the 200 people we set out to reach, that is 41 percent. Same campaign, same week, same inbox. One number reads like a result worth repeating. The other reads like a list that is half dead.</p>

              <p>Neither is a lie. The first one answers a narrower question than the one you asked.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Opens Are a Poor Measure of Interest and a Fine Measure of Arrival</h2>
              <p>Apple&apos;s Mail Privacy Protection has been pre-fetching message content since iOS 15 in 2021, which means some share of any open count is a machine rather than a person. Mailchimp&apos;s help docs say plainly that this kind of bot activity &ldquo;can falsely inflate open and click metrics.&rdquo;</p>

              <p>The common correction was to declare the metric dead and move to clicks. That was the wrong correction.</p>

              <p>Opens are close to worthless for telling you whether somebody was interested. They remain the cheapest signal available for telling you whether your mail is landing anywhere at all &mdash; inbox, promotions tab, or nowhere. Used for that one job they still work. Grade your subject lines on them and you are reading noise.</p>

              <p>Which is why the campaign above was not run to produce leads. It was run to find out whether the mail arrives and to clean the list. Four clicks out of two hundred is not a result to celebrate or apologize for. Leads were never the job.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Second Send Is the Measurement</h2>
              <p>Twelve hours after the first send, a follow-up went to everyone who had not opened. It produced 19 more opens.</p>

              <p>The instinct is to read that as persistence paying off. Mostly it isn&apos;t. Those 19 people sat in the non-opener column for half a day. The second message did not change their mind about the offer &mdash; most of them never read the first one closely enough to have one. It changed which bucket they belonged in: never arrived, arrived and ignored, arrived and read.</p>

              <p>That is what a resend is for on a list you don&apos;t know yet. It isn&apos;t a nag. It is the second data point that separates a delivery problem from an interest problem, and one send cannot tell those apart.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two Numbers, Written Down Before You Read Any Rate</h2>
              <p>Before you look at a single percentage in a sending tool, write down two numbers.</p>

              <p><strong>Intended.</strong> How many people you meant to reach.</p>

              <p><strong>Delivered.</strong> How many the platform says it handed off.</p>

              <p>Then recompute every rate in the report against <em>intended</em> instead of delivered. It takes a calculator and about ninety seconds. If the two versions of a number land close together, the report is telling you the truth about your business. If they are far apart, the gap is your list, and no subject line closes it.</p>

              <p>Do this before the copy conversation, not after. We have written three rounds of subject lines against a number that was never about subject lines.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>A 71 percent open rate and a 57 percent delivery rate describe the same campaign. Only one of them describes the list.</p>

              <p className="italic text-white/60 pt-4">Delivery and open figures from our own campaign review on September 1, 2026; open-rate definition and bot-inflation caveat from Mailchimp&apos;s &ldquo;About Open and Click Rates&rdquo; documentation; Apple Mail Privacy Protection shipped with iOS 15 in September 2021.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Get one operational fix like this in your inbox every week.
            </p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Subscribe
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
