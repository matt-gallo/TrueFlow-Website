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
                Stop Treating Hot and Cold Leads the Same — The Intent Tier System That Fixes Your Pipeline
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>March 27, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>CRM Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Stop Treating Hot and Cold Leads the Same.\n\nMost CRMs are blind to intent — so your automation sends the same message to someone who clicked yesterday and someone who clicked 6 months ago. Here's the fix.\n\n#CRMAutomation #BusinessGrowth #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most CRMs have hundreds of contacts with zero organization. Everyone gets the same message — and most of them tune out. This post breaks down the 3-layer lead tagging system that tells your automation exactly what to say to each person and when.")}&title=${encodeURIComponent("Stop Treating Hot and Cold Leads the Same | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Stop Treating Hot and Cold Leads the Same.\n\nYour CRM is blind to intent — and that's why your pipeline feels stuck. Here's the 3-tier system that fixes it.\n\n#BusinessAutomation #CRMSystem")}`}
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
                  const shareText = "Stop Treating Hot and Cold Leads the Same.\n\nYour CRM doesn't know the difference between someone who clicked yesterday and someone who went cold 6 months ago. Here's the system that fixes that.\n\n#CRMAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "Stop Treating Hot and Cold Leads the Same — The Intent Tier System That Fixes Your Pipeline",
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
                Open most business CRMs and you&apos;ll find the same thing: hundreds of contacts, no real organization, and every single person getting the same generic outreach. The hot lead from yesterday&apos;s Meta ad. The person who filled out a form six months ago and never replied. The past customer who bought twice and then went quiet. Same bucket. Same message. Same result — which is usually nothing.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                This isn&apos;t a people problem. It&apos;s a structure problem. When your CRM can&apos;t tell the difference between who&apos;s hot and who&apos;s cold, your automation can&apos;t either — and that means the right message never reaches the right person at the right time.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Why Generic Outreach Stops Working
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Think about the difference between someone who just submitted your contact form five minutes ago and someone who clicked an ad three months back and never responded. One is in active buying mode. The other might need a completely different approach — a softer touch, a check-in, a new offer angle entirely.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                When you treat them the same, you do one of two things: you come on too strong with a cold contact who wasn&apos;t ready, or you undersell a hot one who needed urgency. Both cost you deals — and you never see it happening.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                The fix isn&apos;t a new CRM. It&apos;s a tagging structure that makes every contact instantly readable — to you, to your team, and most importantly, to your automation.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The 3-Layer Lead Map
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Every contact in your CRM should be tagged across three dimensions. Once that&apos;s in place, your workflows know exactly what to do — no manual sorting, no guesswork.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">
                Layer 1: Lead Source
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Where did this person come from? A Meta ad, your website contact form, a cold outreach list, an event, a referral? Source tells you context — and context shapes your opening message. Someone who responded to a Facebook ad about a specific problem is primed for a different conversation than someone who found you organically through a blog post. Tag every contact by source from the moment they enter the system. No exceptions.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">
                Layer 2: Intent Tier
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                This is the most important layer — and the one most businesses skip entirely. Intent Tier tells you how ready someone is to move forward: High, Medium, or Low. A High-intent contact has engaged recently, asked a specific question, or is in active conversation. A Medium contact showed interest but hasn&apos;t taken the next step. A Low contact is dormant — still in your world, but needs re-engagement before any pitch makes sense. When your automation knows the intent tier, it routes each contact to the right sequence automatically. High intent gets a fast, personal touch. Low intent gets a nurture flow that warms them back up over time.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">
                Layer 3: Pipeline Stage
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Where is this person in the buying journey? Cold list, warm inbound, active opportunity, past customer, lost deal? Stage determines not just what to say, but what kind of outreach makes sense at all. A past customer who bought six months ago needs a different re-engagement message than someone who booked a call and never showed. Stage also keeps your sales activity clean — you can pull a list of every contact at a specific stage and know instantly who needs attention.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Once every contact is tagged across all three layers, your CRM stops being a contact list and starts being a revenue map. You can see exactly where every deal is, who needs follow-up, and what the right next step is — without touching a single contact manually.
                </p>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What Changes When You Do This
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Your automation starts working. Right now, even if you have workflows set up, they&apos;re probably running the same sequence for everyone — because your system can&apos;t distinguish between contact types. Once the tagging structure is in place, each contact triggers the correct workflow the moment they enter or advance through a stage.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Your team stops wasting time. Instead of manually sorting through hundreds of conversations wondering who to prioritize, your pipeline surfaces the people who actually need attention — filtered by intent tier, stage, and source. High-intent contacts rise to the top. Cold ones stay in long-term nurture until something changes.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                And your ads finally start making sense. When you can build retargeting audiences from contact tags — reaching only your high-intent, warm inbound contacts with a strong offer — your ad spend stops being a guessing game and starts converting at a completely different rate.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Insight
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most businesses don&apos;t have a lead problem or a follow-up problem. They have an organization problem. Their CRM is full of signal — who&apos;s interested, what they care about, where they are in the process — but none of it is readable. So the system treats everyone the same, and most of the opportunity disappears.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white">
                <strong>A clean tagging structure doesn&apos;t just make your CRM look better. It makes every workflow smarter, every ad more targeted, and every conversation more relevant — without adding a single hour to your week.</strong>
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
