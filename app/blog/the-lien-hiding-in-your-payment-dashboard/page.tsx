'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'the-lien-hiding-in-your-payment-dashboard'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Sale Was Days From Closing. Then Diligence Found the Loan in the Payment Dashboard."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Playbook</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 17, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Sale Was Days From Closing. Then Diligence Found the Loan in the Payment Dashboard.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We watched a small-business sale nearly collapse this month over a $17,000 loan taken in two clicks inside a payment processor &mdash; and the lien it quietly attached to everything being sold. Here&apos;s the Clean-Title Test, a 20-minute check that finds yours before a buyer or a bank does.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>This month we had a seat in a small-business sale that was days from closing. Modest price, cooperative parties, paperwork nearly final. Then diligence turned up a loan the seller had taken months earlier: $17,000, about $21,000 to pay off with the fixed fee, borrowed in roughly two clicks from inside the payment processor&apos;s dashboard. Attached to it was a security interest covering essentially everything being sold &mdash; the brand, the domains, the customer accounts. The deal stopped moving that afternoon.</p>
              <p>Here&apos;s the uncomfortable part: nobody was hiding anything. The seller mentioned the loan the moment it came up. It just wasn&apos;t on anyone&apos;s mental list of things that mattered, because it never felt like debt. No bank, no application, no meeting. It repaid itself quietly as a percentage of sales, filed in the same mental drawer as a software subscription. A subscription doesn&apos;t put a lien on your business. This did.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Clause Nobody Reads</h2>
              <p>Embedded capital is everywhere now: Stripe Capital, Square Loans, PayPal Working Capital, Shopify Capital. The offer appears pre-approved inside a dashboard you already trust, sized off your own revenue. Stripe&apos;s own documentation says it plainly: loan agreements include security interests, and a UCC-1 financing statement may be filed against your business. That&apos;s not a scandal &mdash; it&apos;s standard secured lending, disclosed in the agreement. The scandal is how the packaging guarantees you won&apos;t register it.</p>
              <p>And plenty of businesses are in this pool. In the Federal Reserve&apos;s 2025 Small Business Credit Survey, 38% of employer firms had applied for a loan, line of credit, or merchant cash advance in the prior twelve months.</p>
              <p>&ldquo;No application&rdquo; is sold as convenience. It&apos;s actually the removal of the one moment you&apos;d have priced the decision &mdash; the sit-down where someone asks what happens to repayment when sales dip, and what exactly is pledged. The friction was the safety feature. <strong>The loan you&apos;re most likely to take is the one you never had to think about, and that is precisely the problem.</strong></p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Clean-Title Test</h2>
              <p>Twenty minutes, three steps: Search, List, Read.</p>
              <p><strong>Search.</strong> Go to your state&apos;s Secretary of State website and run a UCC search on your legal entity name and any DBAs. It&apos;s free and public &mdash; which means every future buyer and lender will run it even if you never do. Save what comes back.</p>
              <p><strong>List.</strong> Write down every capital product you&apos;ve ever accepted from inside another tool: payment processor, point-of-sale, ecommerce platform, booking software. The test for the list is simple &mdash; if money arrived without a conversation with a human, it belongs on it.</p>
              <p><strong>Read.</strong> For each item, pull three things from the agreement: your payoff amount today, what happens to repayment in a slow month, and the security-interest clause &mdash; what, specifically, is collateral.</p>
              <p>If Search shows a filing you can&apos;t match to your List, that&apos;s your afternoon sorted. And check the dates: paid-off loans don&apos;t always clear themselves. With some lenders, the UCC filing sits there until you request termination &mdash; a lien for a debt that no longer exists, waiting to confuse the next person who searches you.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Where This Bites</h2>
              <p>You may have no plans to sell. The lien doesn&apos;t care. It surfaces at every leverage moment: a bank loan, where the new lender balks at a subordinate position; a line of credit; a partner buying in; a sale you haven&apos;t imagined yet. In the deal we watched, the fix took cash from both sides and days of renegotiation &mdash; to clear a balance that was never a secret, just never on a list.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Two clicks of &ldquo;quick capital&rdquo; nearly unwound months of work, and the number that mattered &mdash; the payoff &mdash; took a day to even locate. Clean title isn&apos;t a fact you get to assume about your own business. It&apos;s an asset you maintain, and the maintenance costs twenty minutes a quarter. Run the Clean-Title Test before someone with a checkbook runs it for you.</p>
              <p className="text-white/70 italic">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Federal Reserve Banks, 2026 Report on Employer Firms (2025 Small Business Credit Survey); Stripe Capital documentation, &ldquo;How Stripe Capital works,&rdquo; accessed July 17, 2026; deal observed in TrueFlow client work, July 2026, details anonymized.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">One operational fix, every week</h3>
            <p className="text-white/60 mb-6">Checks like the Clean-Title Test, in your inbox &mdash; short, specific, and ready to run before someone else runs them on you.</p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Subscribe &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
