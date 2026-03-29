'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="TrueFlow"
              width={280}
              height={70}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
              priority
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-white/80 hover:text-white transition-colors"
          >
            ← Back to Blog
          </Link>
        </nav>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Your Customers Don&apos;t Care About Your Back Office — But They Feel It
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>March 29, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Operations</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Your customers don't care about your back office — but they feel it.\n\nDisconnected tools show up in your customer experience. Every time. Here's the fix.\n\n#BusinessAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on X
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("The messy operations behind the scenes are showing up in your customer experience. Here's how to fix that without hiring a team.")}&title=${encodeURIComponent("Your Customers Don't Care About Your Back Office — But They Feel It | TrueFlow AI")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Your customers don't care about your back office — but they feel it.\n\nDisconnected tools show up in your customer experience every time.\n\n#BusinessAutomation #CustomerExperience")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700/20 hover:bg-blue-700/30 border border-blue-700/30 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share on Facebook
              </a>

              <button
                onClick={() => {
                  const shareText = "Your customers don't care about your back office — but they feel it.\n\nDisconnected tools show up in your customer experience every time. Here's the three-day fix.\n\n#BusinessAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "Your Customers Don't Care About Your Back Office — But They Feel It",
                      text: shareText,
                      url: shareUrl
                    })
                  } else {
                    const fullText = shareText + '\n\n' + shareUrl
                    navigator.clipboard.writeText(fullText)
                    alert('Post text and link copied to clipboard! Perfect for sharing on Instagram Stories or anywhere else.')
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg prose-invert max-w-none">

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                You sent the estimate on Tuesday. The client said yes on Wednesday. But the invoice didn&apos;t go out until Friday — because someone had to manually copy the line items from one spreadsheet into another system, double-check the pricing, and remember to CC the right person.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                By Friday, the excitement had cooled. The momentum was gone. And your client started wondering if your operation runs as smoothly as you promised.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That gap between &quot;yes&quot; and &quot;paid&quot; is where most businesses silently bleed.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Invisible Leak
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s what most business owners don&apos;t realize: your internal mess shows up in your customer&apos;s experience. Every time.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                When your estimate lives in one tool, your invoices in another, and your inventory in a spreadsheet — the customer feels it. Not because they see the spreadsheet. But because the estimate took two days instead of two minutes. Because the follow-up email had the wrong product listed. Because nobody confirmed the order until they asked.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Your back office chaos doesn&apos;t stay in the back office. It leaks into every touchpoint.
                </p>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Cost of &quot;We&apos;ll Fix It Later&quot;
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most owners know their operations are messy. They just tell themselves they&apos;ll clean it up once things slow down. But things never slow down — and the mess compounds.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Consider a typical sales operation running on disconnected tools. Every deal that closes requires someone to manually update the CRM, create the invoice, adjust inventory, notify the team, and trigger the next step. That&apos;s five manual handoffs per sale. If you close ten deals a week, that&apos;s fifty opportunities for something to slip through the cracks.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                It&apos;s not a staffing problem. It&apos;s a systems problem.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What It Looks Like When It Works
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Picture this instead: A lead fills out a form. The system captures their information, creates the contact record, and drops them into the right pipeline — automatically. When the deal moves forward, the estimate generates from the product catalog. When the client accepts, the invoice fires immediately. Inventory updates. The team gets notified. The customer gets a confirmation.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                No copy-pasting. No &quot;I thought you sent that.&quot; No waiting until someone remembers to follow up.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That&apos;s not a fantasy. That&apos;s what a connected system actually does when the pieces talk to each other.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Build Around the Customer&apos;s Journey, Not Your Internal Habits
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                The shift that changes everything is simple: stop designing your operations around how your team has always done things. Start designing them around what your customer expects to experience.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Your customer expects a fast response when they say yes. They expect the right information on the first try. They expect to feel like you&apos;ve done this a thousand times — even if they&apos;re your fifth client.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                When you build systems that mirror the customer&apos;s journey — from first inquiry to final delivery — the internal chaos disappears because the process itself enforces the right steps in the right order.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Three-Day Fix
              </h2>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                You don&apos;t need six months and a consultant to make this happen. Here&apos;s the framework:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Day One: Map the customer&apos;s journey.</strong> Not your internal process — the customer&apos;s. What do they experience from first contact to final delivery? Where are the gaps, delays, and friction points?
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Day Two: Connect the dots.</strong> Link your lead capture to your CRM. Connect your CRM to your invoicing. Tie your invoicing to your inventory and notifications. One system, one flow.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">Day Three: Test it live.</strong> Run a real deal through the system. Watch where it breaks. Fix it. Run it again.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Quiet Advantage
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                The businesses that win aren&apos;t always the ones with the best product or the biggest ad budget. They&apos;re the ones where the experience feels effortless — where the customer never has to wonder what happens next.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                That effortlessness isn&apos;t magic. It&apos;s the result of clean systems doing the heavy lifting in the background so your team can focus on what actually matters: the relationship.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white">
                Your back office should be invisible to your customers. Not because it doesn&apos;t exist — but because it works so well they never have to think about it.
              </p>

            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold mb-4">Find Out Where Your Operations Are Leaking</h2>
            <p className="text-xl mb-8 text-white/80">
              Take the free 2-minute AI Readiness Assessment — get a personalized report on your top automation opportunities.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/ai-readiness-assessment"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Take the Free Assessment →
              </a>
              <a
                href="/sign-up"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                See If You Qualify
              </a>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
