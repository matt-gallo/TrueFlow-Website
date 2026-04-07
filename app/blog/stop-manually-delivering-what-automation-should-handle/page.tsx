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
                Stop Manually Delivering What Automation Should Handle
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>April 6, 2026</span>
              <span>•</span>
              <span>4 min read</span>
              <span>•</span>
              <span>Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Stop manually delivering what automation should handle.\n\nIf you're still manually sending Zoom links, reminders, and follow-ups after every sale — there's a better way.\n\n#BusinessAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent("Most business owners still manually send links, reminders, and follow-ups after every sale. Here's how to build a product-triggered automation that does it all the moment someone buys.")}&title=${encodeURIComponent("Stop Manually Delivering What Automation Should Handle | TrueFlow AI")}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent("Stop manually delivering what automation should handle. Build it once, let it run forever.\n\n#BusinessAutomation #WorkflowAutomation")}`}
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
                  const shareText = "Stop manually delivering what automation should handle.\n\nIf you're still manually sending Zoom links, reminders, and follow-ups after every sale — there's a better way. Build it once, let it run forever.\n\n#BusinessAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: "Stop Manually Delivering What Automation Should Handle",
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
                You just made a sale. Great. Now what?
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                You send the Zoom link. You write a confirmation email. You set a reminder for yourself to follow up the day before. Then you do it again for the next buyer. And the next one. And somewhere around buyer number seven, you forget one — and that person shows up confused, or worse, doesn&apos;t show up at all.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This is the reality for most service-based business owners running live events, workshops, or high-touch programs. The sale happens, and then the entire delivery chain runs on memory, sticky notes, and manual effort.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                It doesn&apos;t have to.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Real Problem Isn&apos;t Your Product — It&apos;s Your Post-Sale Workflow
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most business owners spend 80% of their energy getting someone to buy. Fair enough — that&apos;s the hard part. But the moment the transaction clears, the experience your customer has is entirely dependent on how fast and consistently you can deliver what you promised.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                And if that delivery depends on you personally remembering to send things, you&apos;ve built a system that breaks the moment you get busy. Here&apos;s what we see over and over:
              </p>

              <ul className="list-none space-y-2 mb-8">
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Zoom links sent late (or not at all)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Reminder emails that never go out because &quot;I got slammed this week&quot;</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Post-session follow-ups that fall through the cracks</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Customers asking &quot;wait, when is it again?&quot; the day of</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Each of these erodes trust. Not dramatically — but enough. Enough that a buyer who was excited on day one feels lukewarm by day three.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What a Product-Triggered Automation Actually Looks Like
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This week, we built exactly this for a live 3-day class launching April 16th. The setup is simple, and it replaced what would&apos;ve been hours of manual coordination.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                Here&apos;s the structure:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Step 1: Product purchase triggers everything.</strong> No calendar booking. No intake form. The moment someone buys — class seat, VIP, or membership — the automation fires.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Step 2: Immediate delivery.</strong> Confirmation email with the Zoom link, schedule, and what to expect. No delay. No &quot;I&apos;ll send that over later.&quot;
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">Step 3: Timed reminder cadence.</strong> Day 1, Day 2, Day 3 — each session gets a reminder 24 hours before and 1 hour before. Built once, runs for every buyer automatically.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">Step 4: Post-session follow-up.</strong> After each day&apos;s session, an automated message goes out with key takeaways, next steps, or an upsell path — depending on which product tier they purchased.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                The entire thing runs in GoHighLevel. No Zapier daisy chains. No spreadsheet tracking who got what. One automation, triggered by purchase, delivering everything on schedule.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Why This Matters More Than You Think
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here&apos;s the part most business owners miss: your delivery experience IS your brand.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                You can have the best ad creative, the sharpest landing page, and a killer offer. But if the post-purchase experience feels disorganized or slow, the customer&apos;s internal narrative shifts from &quot;this was a great decision&quot; to &quot;I hope this is worth it.&quot;
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Automation doesn&apos;t make your business feel robotic. Done right, it makes your business feel <em>prepared</em>. Like you&apos;ve done this a thousand times. Like every detail was thought through — because it was, once, when you built the system.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Quoting Problem Is the Same Pattern
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                We saw the exact same issue this week with a client running a quoting workflow for high-ticket equipment sales. Every quote required a manual email, a custom PDF, and a follow-up sequence that depended entirely on the sales rep remembering to send it.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                The fix? A two-button email system that handles it automatically. Button one: &quot;View Quote.&quot; Button two: &quot;Request Changes.&quot; Each triggers the right next step — no rep intervention needed for the standard path. Same principle. Same pattern. <strong className="text-white">If a human is doing the same sequence of steps more than twice, it should be automated.</strong>
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Framework: Build It Once, Deliver It Forever
              </h2>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                Here&apos;s how to think about this for your own business:
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">1. Map the post-sale journey.</strong> What does a customer need to receive, and when? Write it out step by step.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">2. Identify the trigger.</strong> What event starts the sequence? A purchase, a form submission, a booking — pick one clear starting point.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-white/80">
                <strong className="text-white">3. Build the cadence.</strong> Confirmation → reminders → delivery → follow-up. Time each one relative to the trigger event.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                <strong className="text-white">4. Set it and test it.</strong> Run through the sequence yourself as a test buyer. Does every email land? Does every link work? Does the timing feel right? Once it&apos;s built, it runs every single time — whether you sell 5 seats or 50.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Takeaway
              </h2>

              <p className="text-lg leading-relaxed mb-8 text-white">
                Your customers don&apos;t know (or care) whether you sent that confirmation email yourself or whether an automation did it. They care that it arrived instantly, that it had the right information, and that the experience felt seamless. Build the system once. Let it run. Spend your time on the work that actually requires you.
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
