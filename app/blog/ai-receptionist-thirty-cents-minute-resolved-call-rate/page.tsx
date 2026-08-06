'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-receptionist-thirty-cents-minute-resolved-call-rate'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "An AI Receptionist Now Costs 30 Cents a Minute. The Mistake Is Paying for Answered Calls."

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
              <span className="text-white/50 text-sm">August 6, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              An AI Receptionist Now Costs 30 Cents a Minute. The Mistake Is Paying for Answered Calls.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              On July 9, Zoom unbundled its AI receptionist from its phone system and priced it at $29.99 per 100 minutes. That changes the buying question from &ldquo;which vendor&rdquo; to &ldquo;what am I actually buying&rdquo; &mdash; and almost every owner will measure the wrong number. Here&apos;s the Resolved-Call Rate.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On July 9, 2026, Zoom released a standalone version of its Virtual Agent Receptionist. Until then it only worked if you were on Zoom Phone. Now it drops onto any business telephony setup, starts at $29.99 a month for 100 minutes ($24.99 on annual billing), and does the front-desk basics: answering in more than ten languages, live transcription, appointment scheduling, and routing calls to the right person.</p>

              <p>Two things changed at once, and only one of them is being talked about.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>The obvious change is that your phone provider no longer controls who answers your phone. AI front-desk software used to be a reason to migrate your entire phone system. Now it&apos;s an add-on, and that excuse is gone.</p>

              <p>The change nobody&apos;s discussing is the shape of the price. $29.99 for 100 minutes is roughly 30 cents a minute. That is a meter. Most of this category has been sold as a flat monthly fee &mdash; as of mid-July 2026, the full-featured tier for AI phone agents was widely quoted at $149 to $299 a month for unlimited calls. Same job, two completely different economics.</p>

              <p>Here&apos;s the sentence that gets us pushback: for most small service businesses, <strong className="text-white">we&apos;d rather you start on the metered plan.</strong> Unlimited plans are more comfortable and they hide the exact number you need to see. A meter forces you to look at what each conversation costs you, which is the only way to find out whether the agent is doing work or just talking.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Number Everyone Is About to Measure Wrong</h2>
              <p>The stat driving this whole category is real: roughly 62% of inbound calls to small businesses go unanswered, and in home services it&apos;s past 74%. So the pitch writes itself &mdash; you&apos;re missing calls, this answers them, done.</p>

              <p>That leads owners straight to the wrong scoreboard. &ldquo;Calls answered&rdquo; is not an outcome. It&apos;s an activity. An answered call that ends with your office manager calling the person back tomorrow cost you the minutes <em>and</em> the labor. You didn&apos;t remove the miss; you moved it one step downstream and put it on a bill.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Do Differently</h2>
              <p>We size a phone agent against one metric we call the <strong className="text-white">Resolved-Call Rate</strong>. Three numbers, all of which sit on your first invoice and your calendar. No new dashboard.</p>

              <p><strong className="text-white">One: calls handled.</strong> How many conversations the agent actually took.</p>

              <p><strong className="text-white">Two: calls resolved.</strong> How many of those ended in the outcome you wanted &mdash; booked, rescheduled, question answered and closed &mdash; with no human touching it afterward. Not &ldquo;transferred successfully.&rdquo; Not &ldquo;logged.&rdquo; Finished.</p>

              <p><strong className="text-white">Three: total bill.</strong> Subscription plus every overage minute.</p>

              <p>Resolved-Call Rate is two divided by one. Cost per resolved call is three divided by two.</p>

              <p>Run it on the entry tier. At 30 cents a minute and a three-and-a-half-minute average call, $29.99 buys you about 28 conversations. If 12 of those end in a booked appointment nobody had to touch, your resolved-call rate is 43% and each booking cost you about $2.50. Now compare that to what a booking is worth to you &mdash; not to a receptionist&apos;s salary. The salary comparison is the vendor&apos;s frame, and it makes every plan look like a bargain.</p>

              <p>Two more things we build in before turning one of these on. We write the escalation path first and test it with a deliberately messy call, because a graceful handoff with context attached is the difference between a good deployment and a lost customer. And we put the meter on a watch list. We wrote last week about four automations in our orbit that stopped &mdash; none were broken, they&apos;d each run out of a consumable. A minute-metered front desk hits its ceiling on your busiest week, which is exactly the week you can&apos;t afford silence on the line.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Of the calls you took last week, how many were finished by whoever answered them &mdash; and how many became a callback on someone&apos;s list? That ratio is your resolved-call rate today, with humans. If it&apos;s low, an agent won&apos;t fix it. It&apos;ll produce the same unfinished calls faster and invoice you for them.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Unbundling the AI receptionist from the phone system is a good development, and 30 cents a minute puts a real front desk within reach of a two-person clinic. But the meter is the feature, not the drawback. Buy the plan that makes you count &mdash; then count resolved calls, not answered ones. The number of conversations your business finishes is the only phone metric that has ever tracked revenue.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Zoom press release, &ldquo;Deploy Zoom Virtual Agent Receptionist across any telephony environment,&rdquo; July 9, 2026; Beancount.io, &ldquo;AI Phone Agents for Small Businesses in 2026,&rdquo; July 16, 2026 (pricing tiers and missed-call rates).</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
