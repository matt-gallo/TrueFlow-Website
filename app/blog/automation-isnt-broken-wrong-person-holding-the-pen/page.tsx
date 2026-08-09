'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'automation-isnt-broken-wrong-person-holding-the-pen'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Automation Isn't Broken. You're Asking Customers for Answers Only You Have."

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
              <span className="text-white/50 text-sm">August 9, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Automation Isn&apos;t Broken. You&apos;re Asking Customers for Answers Only You Have.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A deal went missing in a client&apos;s pipeline last week. The automation ran perfectly &mdash; a customer had typed one wrong character into a field that keyed the whole workflow. Here&apos;s the Field Owner Pass, the one-hour review that finds every field currently assigned to the wrong person.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week a deal went quiet in a client&apos;s pipeline. Quote sent, buyer said they&apos;d completed the intake form, and the record never moved. The message we got wasn&apos;t &ldquo;your form is broken.&rdquo; It was &ldquo;we&apos;re having issues with your system&rdquo; &mdash; because when one record disappears, owners don&apos;t suspect a field. They suspect the whole thing.</p>

              <p>The automation had run perfectly. The form submitted, the workflow fired, every step executed. The buyer had typed an invalid email address. Every downstream step keyed off that email: matching the submission to the open deal, advancing the stage, drafting the agreement. With a bad key, there was nothing to match. Nothing errored. The record just sat there, orphaned, while three people assumed the software had eaten it.</p>

              <p>Then the more interesting thing happened. Once it was fixed, the client wrote back about a different field on the same form: <em>&ldquo;This also needs to be done by me. Not the customer.&rdquo;</em></p>

              <p>Two failures, one root cause. The wrong person was holding the pen.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Fields Are Not All the Same Thing</h2>
              <p>Most form advice is about length &mdash; fewer fields, less friction, higher conversion. That&apos;s the wrong axis, and it&apos;s the sentence other agencies will argue with. A short form filled out by someone who doesn&apos;t know the answers produces confident, wrong data, and confident wrong data is far more expensive than a blank.</p>

              <p>Every field on every intake form in your business is one of two things.</p>

              <p><strong className="text-white">Keys.</strong> Email, phone, order number, account ID. These aren&apos;t information &mdash; they&apos;re how records find each other. When a key is wrong, nothing throws an error. Your automation quietly attaches to nothing.</p>

              <p><strong className="text-white">Content.</strong> Notes, preferences, quantities, terms. When content is wrong, a human eventually notices and asks.</p>

              <p>Keys fail silently. That asymmetry is the entire problem, and it&apos;s why data quality is always worse than it looks from the inside: Validity&apos;s State of CRM Data Management research found 76% of CRM users say less than half of their organization&apos;s data is accurate and complete. Nobody believes that about their own records until a deal goes missing.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Field Owner Pass</h2>
              <p>One hour, every intake form you own, three columns.</p>

              <p><strong className="text-white">1. The field. 2. Who actually knows this reliably. 3. Who you currently ask.</strong></p>

              <p>Any row where columns two and three disagree is a broken record with a date on it. In this case, a terms field sat in the customer&apos;s column and belonged in the CFO&apos;s. It wasn&apos;t a hard field. It was just his answer, not the buyer&apos;s.</p>

              <p>Then run a second pass over the key fields only, and ask one question of each: if a human types this wrong, what happens? If the answer is &ldquo;the automation attaches to nothing and nobody is told,&rdquo; you have three fixes and you need all three. Validate the format at entry. Add a fallback match &mdash; name plus phone will usually find the record an email typo lost. And build an exception queue, a single place where unmatched submissions land loudly instead of evaporating.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Do Differently</h2>
              <p>We split forms by owner instead of by step. If a workflow needs four answers from the customer and two from your team, that&apos;s two forms &mdash; and the shorter customer-facing one converts better anyway. Owners resist this because two forms feels like more work. It is considerably less work than reconstructing a deal from an email thread.</p>

              <p>We also treat &ldquo;where did that submission go?&rdquo; as a design defect rather than a support ticket. If an owner has to ask us where a record went, the system failed to say something it should have said on its own.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Pick the workflow you&apos;d least like to lose. Find the one field the whole thing hangs on. If someone typed a single character wrong in it this morning, who would find out, and how long would that take?</p>

              <p>If the honest answer is &ldquo;the customer, when they follow up annoyed,&rdquo; that field isn&apos;t automated. It&apos;s unattended.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Your automations mostly don&apos;t fail because the logic is wrong. They fail because a key was wrong, or because the person filling in the field was never the person who knew the answer. Both are found by reading your forms, not your workflows &mdash; and both take an hour to fix, not a rebuild.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Validity, State of CRM Data Management (CRM data accuracy survey); anonymized client pattern from TrueFlow support and build work, week of August 3&ndash;7, 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
