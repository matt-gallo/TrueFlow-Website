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
                Your Ad Funnel Isn&apos;t Broken — Your Landing Page Is
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>April 4, 2026</span>
              <span>•</span>
              <span>4 min read</span>
              <span>•</span>
              <span>Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Your ad funnel isn't broken — your landing page is.\n\nMost business owners blame the ads when conversions drop. The real culprit is usually the page they land on.\n\n#MarketingAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most ad funnels fail not because the ads are wrong, but because the landing page doesn't speak to the prospect's actual pain. Here's how to fix it in one afternoon.")}&title=${encodeURIComponent("Your Ad Funnel Isn't Broken — Your Landing Page Is | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Your ad funnel isn't broken — your landing page is. Most business owners blame the ads when conversions drop.\n\n#MarketingAutomation #BusinessGrowth")}`}
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
                  const shareText = "Your ad funnel isn't broken — your landing page is.\n\nMost business owners blame the ads when conversions drop. The real culprit is usually the page they land on.\n\n#MarketingAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "Your Ad Funnel Isn't Broken — Your Landing Page Is",
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
                You&apos;re spending real money on ads. The clicks are coming in. But nobody&apos;s filling out the form, booking the call, or buying the thing.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                So you tweak the ad copy. You swap the image. You adjust the audience targeting for the fourth time this month. And nothing changes.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Here&apos;s what we&apos;ve seen over and over again working with business owners this week: the problem almost never lives in the ad. It lives on the landing page.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Problem: Your Page Talks About You, Not Them
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most landing pages read like a résumé. &quot;We offer X. We&apos;ve been in business since Y. Our team is passionate about Z.&quot;
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Your prospect doesn&apos;t care. Not yet.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                They clicked your ad because something in it spoke to a problem they&apos;re actively trying to solve. They showed up looking for relief — and instead they got a company bio.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                The fix isn&apos;t complicated, but it does require a shift in how you think about that page. Your landing page needs to do one thing: mirror the exact pain your prospect is feeling and show them a clear path out.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What a Funnel Fix Actually Looks Like
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                We walked through this exact exercise with a client this week. Their ads were performing fine — solid click-through rate, reasonable cost per click. But the landing page conversion rate was sitting near zero.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                Here&apos;s what we changed:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">1. Led with the pain, not the product.</strong> The old headline talked about the service. The new one named the problem: the specific frustration their ideal customer Googles at 11 p.m. when they&apos;re fed up. That one change shifted the entire energy of the page.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">2. Simplified the offer.</strong> The original page had three different CTAs, two paragraphs of feature descriptions, and a testimonial carousel. We stripped it down to one clear offer, one button, and one short paragraph explaining what happens after they click. Less choice, more clarity.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">3. Connected the ad message to the page message.</strong> The ad promised a specific outcome. The landing page talked about something slightly different. That disconnect — even a subtle one — kills trust instantly. We made the headline on the page echo the ad copy almost word for word. When someone clicks through and sees the same language, they feel like they&apos;re in the right place.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">4. Added a real next step, not a generic form.</strong> &quot;Contact us&quot; is vague. &quot;Get your free audit in 24 hours&quot; is specific. We replaced the generic form with a clear, time-bound next step so the prospect knows exactly what they&apos;re getting and when.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Why This Matters More Than You Think
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Every day your funnel isn&apos;t converting, you&apos;re paying for traffic that goes nowhere. That&apos;s not just wasted ad spend — it&apos;s wasted momentum. Those prospects who clicked were interested. They were warm. And you lost them at the front door.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                The businesses that grow fastest aren&apos;t the ones spending the most on ads. They&apos;re the ones who make every click count by building pages that actually convert.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This is one of the first things we build inside the TrueFlow system. Before we automate your follow-up sequences, before we build your CRM workflows, before we touch anything downstream — we make sure the entry point works. Because nothing else matters if the top of your funnel leaks.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Takeaway
              </h2>

              <p className="text-lg leading-relaxed mb-8 text-white">
                If your ads are getting clicks but your funnel isn&apos;t producing leads, stop blaming the ads. Look at the page. Make it about the prospect&apos;s pain. Simplify the offer. Match the message. And give them a reason to act right now. It&apos;s a one-afternoon fix that can change the trajectory of your entire pipeline.
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
            <h2 className="text-3xl font-bold mb-4">Get Your Sales System Built in 3 Days — Free</h2>
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
