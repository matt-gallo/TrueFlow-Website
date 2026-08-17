'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'stripe-turned-off-our-integration-shutoff-list'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Stripe Switched Off One of Our Integrations. The Notice Arrived Nine Days Later."

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
              <span className="text-white/50 text-sm">August 13, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Stripe Switched Off One of Our Integrations. The Notice Arrived Nine Days Later.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A vendor disabled a live connection on our own account and told us by email. Nothing on our side reported a problem. Here&apos;s the Shutoff List &mdash; the twenty-minute inventory of every connection a third party can turn off without asking you.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On August 12 we got an email from Stripe. A webhook endpoint on our account had been automatically disabled after nine consecutive days of failed delivery, three of which returned HTTP 500. Stripe had been retrying, backing off, retrying, and had finally stopped.</p>

              <p>Nothing on our side reported a problem. No alert fired. The database rows that endpoint writes were still landing &mdash; we&apos;d checked those in early August and they looked normal. What was failing was the step after the write, and for nine days the only party who knew was Stripe.</p>

              <p>So a company we don&apos;t work at made a decision about our infrastructure, told us by email, and we read the email nine days into the outage. We sell operations work. This one is ours.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part That Generalizes</h2>
              <p>The specifics of our bug don&apos;t matter to you. The shape does.</p>

              <p>Stripe&apos;s documented behavior is to retry a failing endpoint with exponential backoff for up to three days in live mode, then notify and disable it. That isn&apos;t hostile. It&apos;s how a platform at that scale protects itself from an endpoint that keeps erroring.</p>

              <p>Now look at the rest of your stack. Meta will pause an ad account. Google will suspend an API project. Twilio will deregister a number that fails compliance. Your email provider will throttle a sending domain. Your CRM will stop retrying a webhook it can&apos;t reach.</p>

              <p>Every one of those is a switch a third party can throw without your approval. And every one of them announces itself the same way &mdash; an email, sent to whichever address happened to be in the field the day the connection was made.</p>

              <p>That address is the actual vulnerability. Ours went to the right place. It still took nine days, because nobody had a standing reason to be looking there.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Shutoff List</h2>
              <p>Twenty minutes, three columns, one page.</p>

              <p><strong className="text-white">1. The connection.</strong> Payment processor, ad account, SMS number, sending domain, calendar sync, CRM webhook, every API key that touches money or bookings.</p>

              <p><strong className="text-white">2. Who can switch it off.</strong> The vendor, not you. Write the vendor&apos;s name.</p>

              <p><strong className="text-white">3. Where the notice lands.</strong> The exact email address, and the name of the human who opens that inbox on a normal Tuesday.</p>

              <p>Column three is the whole exercise. Columns one and two are inventory; column three is the answer.</p>

              <p>Most stacks fail the same way here. Connections get made by whoever was free that afternoon, using whatever address was handy &mdash; an admin@ nobody monitors, the personal account of someone who has since left, a shared inbox with four thousand unread. The integration is fine. The notification path is a guess made two years ago in a hurry.</p>

              <p>This is a different question from what expires. A card, a domain, a license &mdash; those run out on a date you can see coming and put on a calendar. A shutoff has no date. It&apos;s a decision made by someone else, in response to a fault you didn&apos;t know you had, delivered as a message.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What To Do With It</h2>
              <p>Two moves, and neither is a purchase.</p>

              <p>Move every address in column three to an inbox a named person reads daily. Not a group alias with unclear ownership. A person. If you have to pick one place, use the address you&apos;d notice a client email arriving at.</p>

              <p>Then, for the two or three connections where money or bookings pass through, add a check that doesn&apos;t depend on email at all. Ours is now a weekly line in a report we already run: last successful delivery, per endpoint, with the date. If the date stops moving, something is off &mdash; and we learn it from our own system rather than from a vendor&apos;s apology.</p>

              <p>You don&apos;t need a monitoring product for this. A monitoring product bought for one incident becomes the eleventh tool nobody opens. You need to know which inbox each vendor writes to, and one number per critical connection that would look wrong if the connection were dead.</p>

              <p>Ours would have. We just weren&apos;t looking at it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Run the list on your own stack this week. Start with whatever takes payments.</p>

              <p>Nine days is not a long outage. It&apos;s a long time to be the last to know.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Stripe webhook retry and endpoint-disabling behavior, docs.stripe.com/webhooks/process-undelivered-events (accessed August 13, 2026); TrueFlow&apos;s own Stripe endpoint-disabled notice, August 12, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
