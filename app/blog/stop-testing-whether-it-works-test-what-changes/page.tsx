'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'stop-testing-whether-it-works-test-what-changes'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Stop Testing Whether It Works. Test What Happens When It Changes."

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
              <span className="text-white/50 text-sm">August 15, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Stop Testing Whether It Works. Test What Happens When It Changes.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Every system in your business was verified against the first version of a record &mdash; the first quote, the first booking, the first contact. The failures live in the second. Here&apos;s the Revision Test, a twenty-minute walk-through of what your customer is actually holding after you change something.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Yesterday a client opened a report we built for them and showed us what it said. It runs every weekday morning, summarizes the day&apos;s open deals, and lands in three inboxes before anyone gets to the office.</p>

              <p>One of the deals in it covers several units. The report listed one.</p>

              <p>Nothing errored. The job ran on schedule, the formatting was clean, the email arrived on time. It described the quote accurately &mdash; just not the version of the quote that exists now. Line items had been added after the fact, and the summary was still reading the shape the deal had the day it was created.</p>

              <p>That one is ours. It was also the third instance of the same failure on a single call.</p>

              <p>The other two came from the client&apos;s side of the screen. Editing a live quote and re-sending it locked the customer out of viewing it &mdash; a permissions error on their end, caused by a change on ours. And a contact whose name had been corrected still carried the old name on the deal attached to it, because the contact name and the deal name are two fields and only one of them got edited.</p>

              <p>Three problems, one shape. Every one of those systems handled the creation of a record correctly and had no defined behavior for the change.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The first version is the only one anybody tests</h2>
              <p>Think about how a workflow actually gets verified. You make a test contact. You submit a test form. You build a test quote and send it to yourself. The email arrives, the record moves, the stage advances. Done, and it goes live.</p>

              <p>You almost never come back the next morning, edit that test record, and watch what the customer receives. Which means the entire change path &mdash; the reschedule, the revised price, the corrected email address, the added line item, the cancellation &mdash; shipped without being read once.</p>

              <p>Here&apos;s the part another agency will argue with: most of what gets called a training problem is an untested change path. Nobody needs to be taught not to edit a quote. Somebody needed to check what editing a quote does, once, before a customer did it for them.</p>

              <p>And changes are not the edge case. Creating a record happens once per customer. Changing it happens as many times as the job takes.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Revision Test</h2>
              <p>Twenty minutes, three records, one page.</p>

              <p>Pick the three records your customers actually see. For most service businesses that is a quote or estimate, an appointment, and an invoice. Then, for each one, three columns.</p>

              <p>1. <strong className="text-white">The record.</strong><br />2. <strong className="text-white">What the customer is holding.</strong> The email in their inbox. The link they bookmarked. The text with a time in it. The PDF somebody downloaded and forwarded to a colleague.<br />3. <strong className="text-white">What they are holding after you change it.</strong> Not what your screen shows. What is on the copy already in their possession.</p>

              <p>Then make the change and watch. Reschedule the appointment. Add a line to the quote. Correct the name.</p>

              <p>There are only three outcomes, and one of them is safe.</p>

              <p><strong className="text-white">It updates.</strong> The customer&apos;s copy reflects the change with nobody doing anything. Worth knowing exactly which of your records behave this way, because it is fewer than you would guess.</p>

              <p><strong className="text-white">It does not update.</strong> The customer holds the old version indefinitely, and both of you believe they have the current one. This is the quiet outcome, and it is the one that turns into a disagreement about what was agreed to.</p>

              <p><strong className="text-white">It breaks.</strong> The change revokes their access, invalidates the link, or errors on their end. Loud, awkward, and at least it tells you.</p>

              <p>Any row that lands in the second or third outcome needs a written rule, not a reminder.</p>

              <p>Ours is now blunt: do not edit a sent quote. Build a new one, void the original, send the new link. That reads like a workaround for a limitation, and it is. It is also a policy with a second benefit &mdash; every version stays on the record, so the question of what was quoted and when has an answer that isn&apos;t somebody&apos;s memory.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What to do this week</h2>
              <p>Take the record you would least like a customer to be wrong about. Change it. Then go look at what they have, from their side, not yours.</p>

              <p>Your systems were designed around making things. Your week is spent changing them.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Source: internal TrueFlow client sessions and build reviews, August 12&ndash;14, 2026; client details anonymized.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
