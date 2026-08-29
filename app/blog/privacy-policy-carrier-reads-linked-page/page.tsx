'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'privacy-policy-carrier-reads-linked-page'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Privacy Policy Is Now a Field in an API Call. A Carrier Reads It Before Your Customer Gets a Text."

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
              <span className="text-white/50 text-sm">August 28, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Privacy Policy Is Now a Field in an API Call. A Carrier Reads It Before Your Customer Gets a Text.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Twilio made privacy policy and terms URLs required for new A2P 10DLC campaigns on June 30. There are two separate rejection codes: one for a missing field, one for a page that does not hold up. Here&apos;s the Linked Page &mdash; the pass that reads every URL you handed a third party as evidence about your business.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On April 6, 2026, Twilio published a changelog entry with a deadline in it. Starting June 30, <code>PrivacyPolicyUrl</code> and <code>TermsAndConditionsUrl</code> became required fields when registering a new A2P 10DLC campaign through the Messaging API. Requests that omit either one are rejected during campaign review.</p>

              <p>That deadline has passed. Existing registered campaigns are not affected. But every new business texting campaign &mdash; a new location, a new brand, a reactivation number, a client you onboard next month &mdash; now depends on two pages of your website being read by someone who does not work for you.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two Rejection Codes, and Only One of Them Is About a Missing Field</h2>
              <p>Twilio&apos;s error dictionary keeps them separate, and the separation is the whole story.</p>

              <p>Error 30933 means <code>PrivacyPolicyUrl</code> was not in the request. A field is absent. You add it and resubmit.</p>

              <p>Error 30908 means the URL was there and the page behind it did not survive review. Twilio&apos;s documentation prints both sides. The language that gets rejected: <em>&ldquo;We may share your personal information with third-party partners for marketing purposes.&rdquo;</em> The language that passes: <em>&ldquo;We do not share, sell, or provide your mobile phone number or messaging consent data to third parties or affiliates for marketing or promotional purposes.&rdquo;</em></p>

              <p>The rejected sentence is standard template language. It ships inside most off-the-shelf privacy policies, and it was fine on your site for years, because until recently nothing was reading it.</p>

              <p>The same document lists three other ways to fail with a valid URL: two privacy policies on one site that disagree, so a reviewer cannot tell which applies; a policy that never states message frequency; a policy missing the &ldquo;message and data rates may apply&rdquo; disclosure.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Ours Was Last Touched on March 20, Which Is Before Any of This</h2>
              <p>We went and read our own page. It passes. It passes narrowly.</p>

              <p>Our policy says <em>&ldquo;Your SMS consent is not shared with third parties for their marketing purposes.&rdquo;</em> Twilio&apos;s approved sentence covers the mobile phone number as well as the consent record, adds affiliates alongside third parties, and adds promotional alongside marketing. Three widenings, none of them ours. The page carries message frequency and the data-rates line, so it clears the disclosure checks. It was last updated on March 20, 2026 &mdash; fifteen days before the changelog that changed what it is for.</p>

              <p>Nothing broke. The document simply stopped being a legal footer and became evidence in someone else&apos;s review queue, and we found that out by looking rather than by being told.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Open the Page Logged Out, From a Browser With No Session</h2>
              <p>That is the first of three things we do differently, and it exists because &ldquo;publicly accessible, not behind a login&rdquo; is a stated requirement and a staging redirect will not announce itself.</p>

              <p>Second, we check for a second copy. Sites accumulate them &mdash; one page from the old template, one from the redesign, both live, both indexed.</p>

              <p>Third, we read the vendor&apos;s own printed pass-and-fail language instead of a summary of it. Twilio publishes the exact sentence. Most compliance write-ups paraphrase it. The paraphrase is what gets rejected.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Linked Page</h2>
              <p><strong>The Linked Page</strong> is one pass over every URL you have handed a third party as evidence about your business, opened cold and read against what that third party requires today.</p>

              <p>List them first. Privacy policy and terms given to your messaging platform. Refund policy given to your payment processor. Opt-in language given to your email platform. Terms linked from any form a customer submits.</p>

              <p>Then, for each: open it in a private window. Confirm it loads without a login. Confirm there is exactly one of it. Read it against the requirement as written, not as remembered. Note the date it was last edited, and note what changed in the requirement after that date.</p>

              <p>Twenty minutes covers most stacks.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Which of Those Pages Has Anyone Opened Since You Submitted It?</h2>
              <p>A harder second question: when the website was last redesigned, who confirmed the URLs a vendor has on file still resolve to the pages they were approved against?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>A URL is a pointer. The thing under review is on the other end of it, and it is edited by a different process, on a different schedule, by people who were not in the room when it became evidence.</p>

              <p className="italic text-white/60 pt-4">Sources: Twilio changelog, &ldquo;A2P 10DLC campaign registration will require privacy policy and terms &amp; conditions URLs starting June 30, 2026&rdquo; (April 6, 2026); Twilio Error and Warning Dictionary, errors 30933 and 30908 (last modified April 1 and July 23, 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Want help running the Linked Page across your messaging and payment stack?
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
