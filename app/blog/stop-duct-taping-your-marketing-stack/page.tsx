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
                Stop Duct-Taping Your Marketing Stack Together
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>March 28, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Marketing</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Stop Duct-Taping Your Marketing Stack Together.\n\nMost businesses run marketing across 5+ disconnected tools. Here's why that's silently killing growth.\n\n#MarketingAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most business owners run marketing across five or more disconnected tools. Here's why that's silently killing growth—and what a unified system actually looks like.")}&title=${encodeURIComponent("Stop Duct-Taping Your Marketing Stack Together | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Stop Duct-Taping Your Marketing Stack Together.\n\nMost businesses run marketing across 5+ disconnected tools. Here's why that's silently killing growth.\n\n#MarketingAutomation #SystemIntegration")}`}
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
                  const shareText = "Stop Duct-Taping Your Marketing Stack Together.\n\nMost businesses run marketing across 5+ disconnected tools. Here's why that's silently killing growth—and what a unified system actually looks like.\n\n#MarketingAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "Stop Duct-Taping Your Marketing Stack Together",
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
                You have a CRM over here. An ad platform over there. A separate tool for emails. Another for forms. Maybe a spreadsheet tracking what&apos;s actually working.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                And somehow, you&apos;re the glue holding all of it together.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If that sounds familiar, you&apos;re not alone. Most business owners we work with are running their entire marketing operation across five, six, sometimes ten disconnected tools—each one requiring its own login, its own learning curve, and its own version of the truth.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Here&apos;s the problem no one talks about: it&apos;s not any single tool that&apos;s failing you. It&apos;s the gaps between them.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Hidden Cost of Disconnected Systems
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Every time a lead fills out a form and you have to manually move that data into your CRM, you lose time. Every time you check one dashboard for ad performance and another for email opens, you lose clarity. Every time a prospect slips through because a workflow didn&apos;t trigger across platforms, you lose revenue.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                These aren&apos;t dramatic failures. They&apos;re quiet ones. The kind that add up over weeks and months until you realize your team is spending more time managing tools than actually talking to customers.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                We see it constantly. A business owner comes to us frustrated, saying something like: &quot;I feel like I&apos;m working all day but nothing&apos;s actually moving forward.&quot; Nine times out of ten, the issue isn&apos;t effort. It&apos;s infrastructure.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What a Unified System Actually Looks Like
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This week, we&apos;ve been deep in building something we&apos;ve wanted to ship for a long time—a unified marketing platform that brings ad management, creative generation, campaign analytics, and CRM automation into one place.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Instead of toggling between Meta Ads Manager, your CRM, an email builder, and a reporting dashboard, imagine one system where you can launch a campaign, track every lead it generates, automate the follow-up, and measure what&apos;s actually converting—all without leaving the platform.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That&apos;s not a fantasy. That&apos;s what we&apos;re building right now at TrueFlow, and the early results with our beta clients are already proving the concept.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Why Integration Beats Optimization
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s a framework worth remembering: <strong>you can&apos;t optimize what you can&apos;t see.</strong>
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most businesses try to fix their marketing by tweaking individual pieces—better ad copy, a new email sequence, a different landing page. And those things matter. But if your systems aren&apos;t connected, you&apos;re optimizing in the dark.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                When everything lives in one system, patterns emerge. You can see that leads from a specific ad campaign convert 3x faster when they get a text within five minutes instead of an email the next morning. You can see that your best customers all came through one particular form—and double down on it.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That kind of insight isn&apos;t possible when your data lives in five different places.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Three Signs You&apos;ve Outgrown Your Current Stack
              </h2>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                Pay attention if any of these sound familiar:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">You&apos;re spending more time on admin than strategy.</strong> If your week is dominated by copying data between tools, chasing down status updates, and manually triggering automations, your stack is working against you.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">You can&apos;t answer basic questions without digging.</strong> How many leads came in this week? What&apos;s your cost per acquisition? Which campaign is actually driving revenue? If answering those takes more than 30 seconds, your systems aren&apos;t doing their job.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">Your team is the system.</strong> If everything breaks when one person takes a day off, you don&apos;t have a system—you have a dependency. Real systems run whether you&apos;re there or not.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What to Do About It
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                You don&apos;t need to rip everything out overnight. But you do need to start consolidating.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Start by mapping every tool you use and what it actually does. Then ask: how many of these could live in one place? The answer is usually more than you think.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                At TrueFlow, we help businesses make that transition in days, not months. We take the tangled mess of disconnected tools and replace it with a clean, automated system that handles lead capture, follow-up, campaign management, and reporting—all in one place.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  The result? Less time managing. More time growing.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8 text-white">
                <strong>Want this built for you in just 3 days — for free — and you don&apos;t pay until you see traction?</strong> DM &apos;FLOW&apos; or take the free AI Readiness Assessment below to see if you qualify.
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
            <h2 className="text-3xl font-bold mb-4">Find Out Where Your Marketing Is Leaking Time and Money</h2>
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
