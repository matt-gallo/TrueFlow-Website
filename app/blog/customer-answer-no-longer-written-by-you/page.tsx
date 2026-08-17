'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'customer-answer-no-longer-written-by-you'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Answer a Customer Gets About Your Business Is No Longer Written by You"

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
              <span className="text-white/50 text-sm">August 14, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Answer a Customer Gets About Your Business Is No Longer Written by You
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Google retired the Q&amp;A box on Business Profiles and replaced it with Ask Maps, which composes its own answer from your profile, your reviews, and your website. Meanwhile the share of consumers using AI to find local businesses went from 6% to 45% in a year. Here&apos;s the Public Record &mdash; the one-page inventory of every source a machine reads about you, and which ones you can still edit.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Google shut off the Business Profile Q&amp;A API on November 3, 2025, then began removing the public Q&amp;A section from listings. What replaced it is Ask Maps. You no longer post an answer &mdash; Google composes one, drawing from your Business Profile, your reviews on Google and other sites, your website, and third-party sources when those come up short. It is U.S.-only and excludes some categories.</p>

              <p>For most of a year that was a supply-side change nobody outside local search noticed. Then the demand side moved. BrightLocal&apos;s 2026 Local Consumer Review Survey, run on a panel of 1,002 U.S. adults, put the share of consumers using AI to find local businesses at 45%, up from 6% the year before. That makes AI the third most-used discovery channel behind Google and Facebook, ahead of Yelp.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Answering a customer&apos;s question used to be a writing task. You typed a reply into a box on your listing, it sat there, and it said what you wanted it to say.</p>

              <p>It is now a sourcing task. The answer gets assembled from whatever is already published about you, weighted toward what is recent and toward what your reviews say. You don&apos;t approve it. You don&apos;t see it before the customer does. The only leverage you have is upstream, on the material it reads.</p>

              <p>Which means the answer a stranger gets is as accurate as the least-maintained page carrying your name.</p>

              <p>A client in our orbit raised its standard price this year and added a same-day tier. Both numbers are correct where they matter most &mdash; the booking page, the confirmation. Neither of us has gone back through eighteen months of reviews to see whether a customer quoted the old number in one of them. It didn&apos;t come up on our call. It wouldn&apos;t come up on yours.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Public Record</h2>
              <p>One page. Twenty minutes.</p>

              <p>List every place a machine can read a fact about your business. Business Profile. Website service pages. Reviews on Google and everywhere else. Directory and association listings. Your booking page. Social profiles. Old press. A franchise or partner page you forgot existed.</p>

              <p>Next to each, write the fact it publishes: hours, service area, price, what you do and don&apos;t do, who to call.</p>

              <p>Then mark every source with one letter. <strong className="text-white">E</strong> if you can edit it today. <strong className="text-white">F</strong> if it is frozen &mdash; real, public, and out of your reach. <strong className="text-white">U</strong> if you don&apos;t know, and U counts as F until you check.</p>

              <p>The Fs are the finding.</p>

              <p>Another business we worked with this month lost its Facebook page permanently, because the personal account that owned it was banned. The page exists. Nobody who runs the business can touch it. That is a row where the letter is F, and every fact under it is fixed at whatever was true the day access was lost.</p>

              <p>Most of the Fs are quieter than that. A directory listing built by an agency you left in 2023. A partner page with a phone number that rings a desk you gave up. A review from last spring describing a service you dropped in March.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Doing Differently</h2>
              <p>Three things, and none of them is a purchase.</p>

              <p>We treat the Business Profile services tab as a document, not a setting. Google cross-references what it says against your website. Two descriptions that disagree hand the machine a decision you didn&apos;t make.</p>

              <p>We read reviews as source material rather than as a score. A review that names a price, a set of hours, or a service you no longer offer is now an input. It doesn&apos;t need to be fair to be read.</p>

              <p>And we date the audit. A Public Record without a date on it is a screenshot of something that moves.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Which fact about your business is published in more than one place, and do those places currently agree?</p>

              <p>If someone asked whether you still do the thing you stopped doing in March, what would the machine say?</p>

              <p>Your listing stopped being a page you write. It became a page written about you, from sources you can still edit and sources you cannot. Sorting one from the other takes an afternoon.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help running a Public Record on your business&apos;s published sources, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Google Business Profile Q&amp;A discontinuation and Ask Maps sourcing behavior, Search Engine Journal and Partoo (accessed August 14, 2026); BrightLocal Local Consumer Review Survey 2026, panel of 1,002 U.S. adults.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
