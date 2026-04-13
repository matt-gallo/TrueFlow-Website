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
            &larr; Back to Blog
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
                What Happens to Your Business When You&apos;re 12 Time Zones Away
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>April 13, 2026</span>
              <span>&bull;</span>
              <span>4 min read</span>
              <span>&bull;</span>
              <span>Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("What happens to your leads when you're not at your desk?\n\nThe answer reveals everything about whether your business has real systems — or just habits.\n\n#BusinessAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most businesses fall apart when the owner steps away. Here's how to build systems that capture leads, book calls, and move deals forward — even from the other side of the world.")}&title=${encodeURIComponent("What Happens to Your Business When You're 12 Time Zones Away | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Your business should book clients while you sleep. Here's how to build systems that work across any time zone.\n\n#BusinessAutomation #SmallBusiness")}`}
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
                  const shareText = "What happens to your business when you're 12 time zones away?\n\nThe answer reveals everything about whether you have real systems — or just habits.\n\n#BusinessAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "What Happens to Your Business When You're 12 Time Zones Away",
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
                Here&apos;s a real scenario: It&apos;s 7:52 PM on a Saturday night. A prospective client lands on your site, likes what they see, and wants to talk. They fill out a form to book a strategy session for Monday morning.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Now here&apos;s the twist &mdash; you&apos;re on the other side of the world. It&apos;s Sunday morning for you. You&apos;re asleep. Your phone didn&apos;t buzz. You didn&apos;t lift a finger.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                But by the time you wake up, the meeting is confirmed, the notification is in your inbox, and the prospect has a calendar invite waiting. No one dropped the ball because no one needed to be holding it.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  That&apos;s not a hypothetical. That&apos;s what automation looks like when it&apos;s actually working.
                </p>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Test of Your Systems
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most business owners think their operations are solid &mdash; until they leave town. The moment you&apos;re not sitting at your desk refreshing your inbox, the cracks show up fast.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Leads come in and sit unanswered for hours. Quotes go out late. Follow-ups get forgotten. That prospect who was ready to buy on Saturday night? By Monday, they&apos;ve already talked to your competitor.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Travel doesn&apos;t create these problems. It exposes them. If your business can&apos;t run for 48 hours without you manually pushing things forward, you don&apos;t have a system &mdash; you have a habit.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Why &ldquo;Almost Automated&rdquo; Is Almost Useless
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s what we see constantly: business owners who&apos;ve invested in tools, built workflows, even mapped out their entire lead-to-close process &mdash; but never flipped the switch.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                They&apos;ve got dozens of workflows sitting in draft mode. A lead nurture sequence that&apos;s &ldquo;almost ready.&rdquo; An appointment reminder flow that just needs one more tweak.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Meanwhile, real leads are falling through real cracks. Every day a workflow sits in draft is a day your business is running on memory and manual effort instead of a system. The gap between &ldquo;built&rdquo; and &ldquo;live&rdquo; is where revenue goes to die.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What Your Business Should Do Without You
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                When your systems are actually deployed &mdash; not drafted, not planned, but live and running &mdash; here&apos;s what happens while you sleep:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">A lead comes in at midnight.</strong> Your system captures their info, tags them by source, and drops them into a nurture sequence that sends a personalized response within minutes. Not hours. Minutes.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Someone books a call.</strong> Your calendar confirms the appointment, sends a reminder sequence, and notifies your team &mdash; all before you&apos;ve seen the notification yourself.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">A deal moves to the next stage.</strong> Your pipeline automation updates the status, triggers the right follow-up, and alerts the person who needs to act. No one has to remember. The system remembers.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">A lead goes quiet.</strong> Instead of sitting in your CRM collecting dust for two weeks, your re-engagement sequence fires automatically &mdash; a check-in message, a new angle, a reason to come back.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Timezone Test
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s a simple gut check for where your business stands: imagine you&apos;re about to leave the country for two weeks. Your phone works, but you&apos;re 12 hours offset from your clients.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                Will new leads get a response within five minutes, or will they wait until you wake up? Will booked appointments get confirmed and reminded automatically? Will stale quotes get followed up on, or will they just age out? Will your team know what to do next on each deal, or will they wait for you to tell them?
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If even one of those answers makes you uncomfortable, you&apos;ve found your bottleneck. And it&apos;s not your team, your tools, or your market. It&apos;s the gap between what you&apos;ve planned and what you&apos;ve deployed.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Close the Gap
              </h2>

              <p className="text-lg leading-relaxed mb-8 text-white">
                The businesses that scale aren&apos;t the ones with the most sophisticated tech stack. They&apos;re the ones that actually turn their systems on. Stop tweaking. Stop waiting for perfect. Get your workflows live, your sequences firing, and your pipeline moving without you as the engine. Because the next client who&apos;s ready to buy at 7:52 PM on a Saturday &mdash; they&apos;re not going to wait for you to wake up.
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
            <h2 className="text-3xl font-bold mb-4">Get Your Systems Built in 3 Days &mdash; Free</h2>
            <p className="text-xl mb-8 text-white/80">
              Want this built for you in just 3 days &mdash; for free &mdash; and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or take the assessment to see if you qualify.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/ai-readiness-assessment"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Take the Free Assessment &rarr;
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
