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
                You Don&apos;t Have a Lead Problem. You Have a Follow-Up Problem.
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>March 26, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Sales Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("You Don't Have a Lead Problem. You Have a Follow-Up Problem.\n\nMost businesses spend thousands getting leads — then let them sit untouched. Here's the system that fixes the leak.\n\n#SalesAutomation #BusinessGrowth #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most businesses spend thousands getting leads into their pipeline. Then those leads sit there, untouched, for days — sometimes forever. This post breaks down where leads fall through and exactly how to plug the leak with the right automation system.")}&title=${encodeURIComponent("You Don't Have a Lead Problem. You Have a Follow-Up Problem. | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("You Don't Have a Lead Problem. You Have a Follow-Up Problem.\n\nThe leads are there. The system just isn't working. Here's the fix.\n\n#BusinessAutomation #SalesSystem")}`}
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
                  const shareText = "You Don't Have a Lead Problem. You Have a Follow-Up Problem.\n\nThe leads are right there — the system just isn't working. Here's how to fix the leak.\n\n#SalesAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "You Don't Have a Lead Problem. You Have a Follow-Up Problem.",
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
                Most business owners assume they need more leads. More ads, more content, more reach. So they spend money getting people into their pipeline — and then those people never hear from them again.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Not because the leads were bad. Because the follow-up system doesn&apos;t exist.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Number That Should Scare You
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s a data point we see inside our clients&apos; accounts regularly: hundreds of contacts in the CRM, dozens flagged as needing follow-up, and zero conversations recorded this week. Zero outreach. Zero touchpoints. The leads are right there — warm, tagged, waiting — and nobody&apos;s reaching out.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                That&apos;s not a lead problem. That&apos;s a leak.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Every contact that doesn&apos;t get a timely, relevant response is a deal that quietly dies. And in most businesses, there are dozens of those per week. Not because the owner doesn&apos;t care — but because there&apos;s no system to catch them.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Where Leads Actually Fall Through
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                There are three places in every business pipeline where the same money keeps disappearing.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">
                The Response Lag
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Research shows that responding to a new lead within 5 minutes increases your chances of converting them by over 400% compared to responding an hour later. Most businesses take 24 to 48 hours. By then, that person has moved on — mentally, emotionally, and probably to a competitor.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">
                The No-Show Black Hole
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Someone books a call. They don&apos;t show. Your follow-up? Nothing. Or maybe a single manual text that goes out 2 days later. The lead had intent. The appointment just didn&apos;t stick. But without an automated re-engagement sequence, that person disappears — even though they were already halfway in the door.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">
                The Stale Lead Graveyard
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                These are the contacts that filled out a form 6 weeks ago, got a couple of messages, and then went cold. Most businesses never touch them again. But people&apos;s situations change. Someone who wasn&apos;t ready in January might be actively looking in March. Without a long-term nurture system, you&apos;ll never know.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What a Real System Looks Like
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                The fix isn&apos;t complicated. It&apos;s just not in place yet.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                When someone comes in as a new lead, they should hear from you in under 5 minutes — automatically. Not a generic blast, but a message that acknowledges where they came from and what they expressed interest in. That&apos;s what a New Lead Nurture sequence does.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                When someone books but doesn&apos;t show, a no-show workflow should fire within minutes — not hours. It acknowledges the miss, offers to reschedule, and stays warm without being aggressive.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                And for everyone in that aging contact database? A stale lead workflow re-touches them on a schedule — a check-in, a useful piece of content, a soft re-invite. Over time, some of those conversations convert. They would have been completely invisible otherwise.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  These aren&apos;t complicated automations. They&apos;re the basic infrastructure that every business should have before spending another dollar on ads.
                </p>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Insight
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                More leads flowing into a broken system just means more leads hitting the same leak. The volume goes up. The results don&apos;t.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Before you scale your ad spend, before you hire a salesperson, before you build anything new — fix the follow-up. Patch the leak. Make sure everyone already in your database is being touched the way they should be.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white">
                <strong>That alone — just working your existing pipeline — is often worth more than a full new campaign.</strong>
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
            <h2 className="text-3xl font-bold mb-6">Want This Built for You in Just 3 Days?</h2>
            <p className="text-xl mb-8 text-white/80">
              For free — and you don&apos;t pay until you see traction. DM &apos;FLOW&apos; or click below to see if you qualify.
            </p>

            <div className="flex justify-center">
              <a
                href="/sign-up"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                See If You Qualify →
              </a>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
