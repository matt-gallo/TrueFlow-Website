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
                Your Onboarding Is Leaking Money — Here&apos;s How to Plug the Holes in 3 Days
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>March 30, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Your onboarding is leaking money.\n\nThe window between 'yes' and 'wow' is only 48 hours. Here's how to automate it so nothing falls through the cracks.\n\n#BusinessAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most businesses lose new customers within the first 48 hours because onboarding is manual, inconsistent, and forgettable. Here's how automated onboarding sequences change everything.")}&title=${encodeURIComponent("Your Onboarding Is Leaking Money — Here's How to Plug the Holes in 3 Days | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Your onboarding is leaking money.\n\nThe first 48 hours after a new lead joins are critical. Here's how to automate it.\n\n#BusinessAutomation #OnboardingAutomation")}`}
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
                  const shareText = "Your onboarding is leaking money.\n\nThe first 48 hours after a new lead or member joins are critical. Here's how automated onboarding plugs the holes — in 3 days.\n\n#BusinessAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "Your Onboarding Is Leaking Money — Here's How to Plug the Holes in 3 Days",
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
                You just closed the deal. The new client said yes. The new member joined. The lead filled out the form.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                And then... nothing happens. Or worse — something happens two days later, when you finally remember to send that welcome email, share the calendar link, and explain how things work.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                By then, the excitement is gone. The momentum is dead. And your new customer is already wondering if they made the right choice.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  This is the onboarding gap. And it&apos;s one of the most expensive, invisible problems in your business.
                </p>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The First 48 Hours Make or Break Everything
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s what most business owners don&apos;t realize: the window between &quot;yes&quot; and &quot;wow, this was a great decision&quot; is shockingly small. About 48 hours.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                In that window, your new client or member needs three things: clarity on what happens next, a reason to stay engaged, and proof that they&apos;re in good hands.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Miss that window, and you&apos;re not just losing engagement — you&apos;re losing referrals, renewals, and revenue that compounds over months.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                The problem isn&apos;t that you don&apos;t care. It&apos;s that you&apos;re doing all of this manually. You&apos;re copying and pasting welcome messages. You&apos;re sending calendar links one at a time. You&apos;re hoping someone on your team remembers to follow up.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white font-semibold">
                Hope is not a system.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What Automated Onboarding Actually Looks Like
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Picture this instead: A new lead fills out your form. Within 60 seconds, they get a personalized welcome message, a calendar invite for their first call, and a short video walking them through exactly what to expect. Their contact record is created in your CRM, tagged correctly, and placed into the right pipeline stage — automatically.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                No one on your team touched anything. No one forgot anything. No one dropped the ball.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                That&apos;s not science fiction. That&apos;s what a properly built automation does on day one.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                And it doesn&apos;t stop there. Two days later, the system sends a check-in. A week later, it nudges them toward their next milestone. If they go quiet, it re-engages them before you even notice they drifted.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Why Most Businesses Never Build This
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                The reason is simple: it feels complicated. You look at your CRM, your calendar tool, your email platform, and your community app — and they&apos;re all disconnected. Building the bridges between them seems like a project that requires a developer and six months of runway.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                It doesn&apos;t. What it requires is someone who understands how these tools talk to each other and can wire them together in the right order.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That&apos;s exactly what we do at TrueFlow. We look at your existing tools — your forms, your CRM, your calendar, your messaging — and we connect them into a single, automatic sequence that runs every time a new person comes through the door.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Cost of Doing It Manually
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Let&apos;s be honest about the math. Every time you manually onboard someone, you&apos;re spending 15 to 30 minutes on tasks a machine can do in seconds. If you&apos;re bringing in 20 new leads or members a month, that&apos;s 10+ hours of repetitive admin work.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                But the real cost isn&apos;t your time. It&apos;s the people who fall through the cracks. The lead who never got the follow-up. The new member who didn&apos;t know when the next call was. The customer who churned in month two because they never felt fully welcomed.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Those aren&apos;t just lost sales. They&apos;re lost relationships that would have generated revenue for years.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Three Things Every Onboarding System Needs
              </h2>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                You don&apos;t need a hundred automations. You need three things working together:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Immediate response.</strong> The moment someone says yes or fills out a form, they should receive a confirmation, a next step, and a warm welcome. Instantly. Not when you get around to it.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Structured follow-up.</strong> A timed sequence of messages that guides them through their first week or month. Calendar invites, resource links, check-ins — all scheduled and automatic.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">Smart tracking.</strong> Your CRM should know exactly where every new person stands. Who&apos;s engaged, who&apos;s drifting, and who needs attention — without you checking manually.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That&apos;s it. Three pieces. And when they&apos;re wired together correctly, your onboarding runs itself while you focus on actually serving your clients.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Takeaway
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Your business doesn&apos;t have a lead problem. It has a follow-through problem. The good news is that follow-through is the easiest thing to automate — once you have the right system in place.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white">
                Stop losing people in the gap between &quot;yes&quot; and &quot;welcome.&quot; Close that gap, and watch your retention, engagement, and revenue climb.
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
            <h2 className="text-3xl font-bold mb-4">Get Your Onboarding Built in 3 Days — Free</h2>
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
