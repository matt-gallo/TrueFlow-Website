'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'four-fields-customers-to-do-list'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Four Fields Sat on the Customer's To-Do List. We Moved Them to Ours."

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
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">&larr; Back to Blog</Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Operations</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">September 24, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Four Fields Sat on the Customer&apos;s To-Do List. We Moved Them to Ours.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A form on a client&apos;s pipeline had a completion problem and a data-quality problem, and both of them looked like form problems. Nothing on it was unnecessary. It was pointed at the wrong person, at the wrong hour of their week.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 23 we sat down with a client&apos;s sales team to walk the pipeline we built for them. The first item on the list was ours.</p>

              <p>The email our automation sends when a customer responds to a quote says &ldquo;Quote is Accepted.&rdquo; Nothing has been accepted. The customer has acknowledged receiving it. The same email promises a PDF of the quote and does not attach one, and it points the customer at a form we had already taken out of the process. Three wrong things in one send, going out automatically, every time.</p>

              <p>That email is a small fix. The reason we were on the call was the form it points at.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Buyer Was Doing the Company&apos;s Paperwork</h2>

              <p>The old sequence: rep sends a quote, customer responds, customer receives a Buyer&apos;s Info Form. The form asked for the legal name of whoever would sign the purchase agreement, that person&apos;s email, the exact registered company name &mdash; with the LLC or Inc. spelled the way the state has it &mdash; and the company&apos;s street address.</p>

              <p>Every one of those is a real requirement. You cannot draft an enforceable purchase agreement for a six-figure piece of equipment without them. The form was not asking for anything unnecessary.</p>

              <p>It was asking the wrong person, at the wrong hour of their week. Someone who has just received a quote and has not decided anything yet is handed a small administrative job that requires him to go and look up his own entity registration. That goes on the pile. And the ones who do fill it in guess at the legal entity, which is worse than a blank, because a guess travels all the way to a signed contract before anyone notices it.</p>

              <p>So we had a form with a completion problem and a data-quality problem, and both of them looked like form problems.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Nothing Got Deleted. It Changed Hands.</h2>

              <p>The four fields are still required. They are now filled in by the sales rep, on the opportunity card, before the quote is acknowledged. The rep is already on the phone with this person. Asking for the exact legal name of the buying entity is one sentence inside a conversation that is happening anyway. For the customer it costs nothing, because the customer never sees a form.</p>

              <p>The buyer-facing form did not disappear either. It moved to after the purchase agreement is signed by both parties, and it now asks a different set of questions &mdash; how the title should be handled, how delivery should work, and the insurance details. Those are questions a person who has just bought something is glad to answer, because every one of them is about receiving the thing he bought.</p>

              <p>Same number of questions. Different owner, different moment. The friction was never in the fields.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Put a Human Back In on Purpose</h2>

              <p>We also added a review stage between the acknowledged quote and the drafted agreement. A deal only reaches it when the quote is acknowledged and all four fields are present. If something is missing, the deal is flagged and pushed back to the rep with a notification. A person reads the entity name before the contract template fills itself in.</p>

              <p>An agency selling throughput would call that a step backwards. A manual gate belongs anywhere the next action is expensive to reverse. A wrong company name on a purchase agreement is not a data error &mdash; it is a re-signature, a second round of approvals on the customer&apos;s side, and a conversation that opens with an apology. A human reading four fields is cheap against that.</p>

              <p>On the same call we told the team to expect two to five minutes between an action and its automation landing, because the workflows run in sequence. That is the honest version, and it is worth saying out loud. A pipeline that pretends to be instant trains people to click things twice.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Field Owner Pass</h2>

              <p>The procedure underneath this has a name. <strong>The Field Owner Pass</strong>: take every field on every form a customer fills in, and write beside it the name of the person best placed to answer it correctly and the moment in the relationship when answering it costs that person least. Wherever those two answers are not <em>the customer</em> and <em>right now</em>, the field is sitting on the wrong to-do list.</p>

              <p>It is one pass down one form, and most fields will come back fine. The ones that do not tend to be the ones your team quietly re-does by phone anyway.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>A form people do not finish is usually not too long. It is pointed at someone who has no reason yet to answer it. Move the question to the person who already knows the answer, and move the customer&apos;s share of it to the moment after he has decided.</p>

              <p className="italic text-white/70 pt-4">Get one operational fix like this in your inbox every week &mdash; <a href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</a>.</p>

              <p className="italic text-white/60 pt-4">Source: an internal pipeline review with a TrueFlow client&apos;s sales team, September 23, 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              One operational fix like this in your inbox every week.
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
