'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'flow-can-reply-to-customer-email-send-roster'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "On September 14, a Flow at Your Company Can Reply to a Customer's Email. The Switch Ships Six Days Earlier."

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
              <span className="text-white/50 text-sm">September 7, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              On September 14, a Flow at Your Company Can Reply to a Customer&apos;s Email. The Switch Ships Six Days Earlier.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Google added four automation steps to Workspace Studio. Three of them move files around inside your company. The fourth sends mail out of it. Here&apos;s the Send Roster &mdash; every mechanism that can put a message in front of someone outside your business, and who is able to add another one.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 2, Google published a changelog entry adding four automation steps to Workspace Studio Flows: Copy Drive file, Move Drive file, Send a Chat reply, and Reply to email.</p>

              <p>Read the rollout dates in order. Admin controls for the Drive and Chat steps began September 1; those two features arrive September 8. For the Gmail step, admin controls arrive September 8 and the feature itself lands September 14. Google shipped the switch before the thing the switch governs, which is the correct order and not the order most vendors use.</p>

              <p>The availability line is the part that reaches you. Business Starter, Standard, and Plus. Not an enterprise tier, not an add-on you had to buy. And in Google&apos;s own words, the step is available by default if you allow Gemini for Google Workspace steps.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Three of the Four Stay Inside the Building</h2>
              <p>Copy a Drive file, move a Drive file, post a Chat reply. If those go wrong, someone who works for you finds a document in the wrong folder. Recoverable, and nobody outside the company knows it happened.</p>

              <p>Reply to email is a different object. It sends into an existing thread, which means it carries the conversation history and lands as continuity rather than as a new message from a machine. Google&apos;s own description names the intended uses: support, triage, task tracking. All three are conversations with people who do not work for you.</p>

              <p>Google saw this. The admin settings include the ability to disable individual steps and to require end-user approval when a step may share data with audiences outside the organization. That control exists because the exposure exists.</p>

              <p>So on September 14 the number of things at your company that can send mail out of the business, unattended, changes. Not by hiring. By a default in a release note.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Nobody on the Call Could Name the Account</h2>
              <p>On September 1 we spent a call reorganizing a client&apos;s Meta Business Manager portfolios. The reason was billing &mdash; assets from several businesses sat in one portfolio, and you cannot put separate cards on them that way.</p>

              <p>Partway through, we opened the user list on one portfolio and found an account with full access that nobody on the call could identify. Not a contractor someone half-remembered. Not a name anyone recognized. Full access there means publishing ads under that business&apos;s name and spending its money.</p>

              <p>We downgraded it to basic on the call and flagged it. We had been working in that account. We found it because we happened to be in there for an unrelated reason.</p>

              <p>That is the shape of the problem, and Google has nothing to do with it. The list of things that can act as your business is not a list anyone keeps. It grows by installation, by invitation, and by a default that ships in someone else&apos;s changelog. It gets read when you are already looking at something else.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Send Roster</h2>
              <p>Write down every mechanism that can put a message in front of a person outside your business. For each one: what triggers it, what it is able to say, and who at your company can create another one.</p>

              <p>Most of the roster you will produce from memory. The CRM automation. The scheduler&apos;s reminder texts. The invoicing tool&apos;s overdue notices. The form autoresponder. The review request that goes out three days after a job closes.</p>

              <p>The last two columns are the ones that do work.</p>

              <p><strong className="text-white">What it is able to say.</strong> A template you approved two years ago and a step that composes a reply on the spot are not the same instrument, even when both send from the same address. Mark which is which. The first has a ceiling you set. The second does not.</p>

              <p><strong className="text-white">Who can add another.</strong> This is the column that dates the document. If the answer for a given tool is &ldquo;any user with a license,&rdquo; then what you have written is not an inventory of what exists. It is an inventory of what existed the morning you wrote it, and release notes are what change it.</p>

              <p>Then set the interval and put it on a calendar. Quarterly covers most businesses. The calendar entry is the whole mechanism, because the failure here is never a wrong decision. It is that nothing prompts the reading.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>An account nobody can name is not a security story. It is a bookkeeping one. Somebody had a reason to add it, and the reason left before the access did.</p>

              <p className="italic text-white/60 pt-4">Sources: Google Workspace Updates, &ldquo;Automate Drive, Gmail, and Google Chat actions with new steps in Workspace Studio,&rdquo; September 2, 2026; Google Workspace Updates Weekly Recap, September 4, 2026.</p>
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
