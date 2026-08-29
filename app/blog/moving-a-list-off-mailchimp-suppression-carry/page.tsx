'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'moving-a-list-off-mailchimp-suppression-carry'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We're Moving a Client Off Mailchimp This Week. The Export Carries Everyone Who Said Yes and Nobody Who Said No."

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
              <span className="text-white/50 text-sm">August 27, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We&apos;re Moving a Client Off Mailchimp This Week. The Export Carries Everyone Who Said Yes and Nobody Who Said No.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A list export is a file of people who opted in. The people who opted out live somewhere else in the account and do not ride along. Here&apos;s the Suppression Carry &mdash; the four steps that move the nos before the yeses.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>The line on our own task list this week reads: export the Mailchimp list to GoHighLevel, segment by engagement, exclude all unsubscribes.</p>

              <p>The last three words are the whole job. Everything before them is a CSV download.</p>

              <p>A list export is a file of people who said yes. The people who said no are a different object. Mailchimp holds them as contacts with an Email Marketing Status of Unsubscribed or Cleaned. GoHighLevel holds its own version as DND flags, set per channel. Neither platform knows what the other one has been told. The only thing connecting them is a step somebody has to remember.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Export Has a Status Column. The Import Doesn&apos;t Have to Read It.</h2>
              <p>An import wizard maps the columns you tell it to map. Marketing status is not one it honors on its own &mdash; in Mailchimp you pick that status from a dropdown at step sixteen, and if you pick Subscribed for the whole file, the file is subscribed.</p>

              <p>There&apos;s a second constraint underneath that one, and it is the one that decides the order of operations. Mailchimp&apos;s own documentation on suppression imports says the process &ldquo;can&apos;t mark existing contacts as unsubscribed or cleaned.&rdquo; It only sets status on records it creates. So if you load your active list first and your opt-outs second, the second import does nothing to anyone already in the audience. Every platform has a version of this rule. Load order is not a preference.</p>

              <p>What comes out the other side is a first campaign that reaches people who told this business to stop, some of them years ago. A few unsubscribe again. A few press the spam button, which is the worse outcome, because that is a deliverability event and it lands on the sending domain of everybody else on the list.</p>

              <p>Then there&apos;s the part that isn&apos;t about deliverability. The FTC&apos;s CAN-SPAM compliance guide requires an opt-out to be honored within 10 business days, and says that once someone has told you to stop, &ldquo;you can&apos;t sell or transfer their email addresses, even in the form of a mailing list.&rdquo; Whether moving your own list between two platforms you own is a transfer is a question for a lawyer. The send that comes out of it is not a close question. Each separate email in violation carries a penalty of up to $53,088, and the same guide is explicit that hiring someone to run the migration does not move the responsibility to them.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Suppression Carry</h2>
              <p>Before any list moves between systems, the nos move first, as their own file, and you prove the destination is honoring them before a single campaign goes out.</p>

              <p>Four steps.</p>

              <p><strong>Export the negatives as their own file, first.</strong> Every contact marked Unsubscribed or Cleaned, plus bounce and complaint records. Not a tab in the migration sheet. A separate file with its own name.</p>

              <p><strong>Load the negatives before the actives.</strong> This is the step the platform documentation quietly makes mandatory, and the step every rushed migration inverts.</p>

              <p><strong>Count both files and reconcile.</strong> Actives plus suppressed should add up to the old platform&apos;s total contact count. If it doesn&apos;t, there&apos;s a status you didn&apos;t export, and it is almost always the bounces.</p>

              <p><strong>Send to a segment of one.</strong> Use an address you already unsubscribed in the old system. If the test arrives, the carry failed, and you learned that at a cost of zero instead of at $53,088 a message.</p>

              <p>That last step is the only one that produces evidence. The first three produce confidence, which is not the same thing.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Every Migration Moves the Assets and Drops the Negatives</h2>
              <p>Suppression is the clearest case because the consequence is legal, but the pattern is general. Move a phone system and the opt-outs from text campaigns stay behind. Move a helpdesk and the blocked senders stay behind. Move a CRM and the do-not-call flags stay behind. Positive records &mdash; the contacts, the deals, the history &mdash; are what vendors build importers for, because those are what the buyer counted before signing. Nobody demos the suppression import.</p>

              <p>We&apos;d rather hold a launch a week than import an active list ahead of a suppression list. That opinion costs us calendar time on a client project roughly once a quarter, and it has never once cost anything else.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Your list is two files. Most migrations move one.</p>

              <p className="italic text-white/60 pt-4">Sources: Federal Trade Commission, &ldquo;CAN-SPAM Act: A Compliance Guide for Business,&rdquo; penalty figure current as of the January 2024 inflation adjustment, read August 27, 2026; Mailchimp Help Center, &ldquo;Import Suppression Lists,&rdquo; read August 27, 2026.</p>
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
