'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'zendesk-three-words-for-resolved-done-gap'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Zendesk Has Three Words for "Resolved." Your Business Has One.'

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
              <span className="text-white/50 text-sm">August 21, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Zendesk Has Three Words for &ldquo;Resolved.&rdquo; Your Business Has One.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              AI vendors now bill for finished work, which forced them to write down what finished means. Zendesk sorts every conversation into three tiers and only charges for one. Here&apos;s the Done Gap &mdash; twenty minutes to find the distance between what your system marks complete and what your customer would call finished.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>In May 2026 Zendesk changed what it bills for. Not the price. The event.</p>

              <p>Its AI agents now sort every conversation into three tiers. <strong className="text-white">Assisted Escalation:</strong> the AI gathered information or routed the ticket, and a human finished it. Not billed. <strong className="text-white">Contained Resolution:</strong> the AI replied, the customer never came back, and a separate evaluation step could not confirm the customer was actually helped. Not billed. <strong className="text-white">Verified Resolution:</strong> the AI handled it, and a second model confirmed the outcome after 72 hours of inactivity. That one is billed, at roughly $1.50 per resolution on committed volume and $2.00 pay-as-you-go.</p>

              <p>Read the middle tier again. A software company built a formal category for &ldquo;the conversation ended and nobody can tell whether it worked,&rdquo; gave it a name, and then declined to charge for it.</p>

              <p>Your business almost certainly has no such category.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Software used to bill for access. You paid for a seat, and what happened inside it was your problem. Then AI vendors started billing for work, and the moment you bill for work you have to define what finished work is. That definition is now written down, in a contract, with money attached to it.</p>

              <p>The definitions are not converging. HubSpot moved its Breeze Customer Agent from $1.00 per conversation to $0.50 per <em>resolved</em> conversation on April 14, 2026. Intercom&apos;s Fin charges $0.99 per resolution. Salesforce Agentforce still lists $2.00 per conversation, where a conversation is a 24-hour session billed whether or not the customer&apos;s problem went anywhere.</p>

              <p>Same category of product. Two of them get paid when it works. One gets paid when it runs.</p>

              <p>That is not a pricing footnote. It is four companies publishing four different answers to &ldquo;what does done mean,&rdquo; in a market where most buyers have never written down their own.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">You Already Have a Definition</h2>
              <p>It is just implicit, and it is almost always the cheapest event to record.</p>

              <p>A booking is done when the calendar row is created. A quote is done when the PDF sends. A support reply is done when the thread closes. Every one of those is a fact about your software. Not one of them is a fact about your customer.</p>

              <p>We hit our own version of this on Wednesday. Our definition of a finished blog post was that a file existed, so on a day when no file was written, nothing in the system had an opinion about it.</p>

              <p>The gap matters because it is where the quiet losses live. A calendar row exists for a customer who never received the confirmation. A quote sends to an address with one wrong character. A thread closes because the customer gave up and called a competitor, which looks identical in your reporting to a thread that closed because you solved it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Done Gap</h2>
              <p>Here is the instrument. It takes about twenty minutes.</p>

              <p><strong className="text-white">The Done Gap.</strong> For each of your highest-volume outcomes, write two sentences: the event your system records as complete, and the event your customer would call finished. The distance between them is the part you are not measuring.</p>

              <p>Three steps.</p>

              <p>1. Pick your three most common recurring outcomes. A booking. A quote. A reply. Three, not ten.</p>

              <p>2. For each, write the exact event your system marks as done. Be literal. &ldquo;Row written to the appointments table.&rdquo; &ldquo;Email handed to the sending provider.&rdquo; Not &ldquo;booking confirmed&rdquo; &mdash; that phrase is the problem.</p>

              <p>3. Then write what the customer would have to experience to call the same thing finished. &ldquo;Received a confirmation and knows the time.&rdquo; &ldquo;Opened the quote and knows the price.&rdquo;</p>

              <p>Where the two sentences match, you are fine. Where they do not, you have found something worth instrumenting, and you now know the exact event to start counting.</p>

              <p>Zendesk arrived here first because it had to. It cannot invoice against a definition it cannot defend.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking</h2>
              <p>If you already pay for an AI agent: which tier is your invoice counting, and can you pull the list of conversations that landed in the middle one? A vendor who cannot show you that list is grading its own work.</p>

              <p>If you do not: of your three outcomes, which has the widest gap, and what does a month cost if a tenth end up in the middle tier with nobody noticing?</p>

              <p>Your software can tell you a record closed. It cannot tell you a customer was finished. Those have always been two different facts. The only thing that changed this year is that vendors started pricing them separately.</p>

              <p className="italic text-white/60 pt-4">Sources: SaaStr on HubSpot&apos;s April 14, 2026 Breeze pricing change and Zendesk&apos;s automated-resolution terms (April 9, 2026); Intercom&apos;s Fin pricing comparison, July 8, 2026; Quickchat AI&apos;s 2026 agent pricing survey, April 29, 2026. The last two are vendor-published.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              If you&apos;d like help closing the gap between what your systems mark complete and what your customers would call finished, book a strategy call with our team.
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
