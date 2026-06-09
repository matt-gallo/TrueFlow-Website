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
                The 5 AI Automation Mistakes Quietly Bleeding Time and Cash from Your Business
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>February 9, 2026</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>AI Automation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('The 5 AI Automation Mistakes Quietly Bleeding Time and Cash from Your Business\n\nDiscover the hidden ways AI automation might be costing you time, money, and momentum - and what to do about it.\n\n#AIAutomation #BusinessAutomation #TrueFlowAI')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('The 5 AI Automation Mistakes Quietly Bleeding Time and Cash from Your Business. Learn why most AI automation implementations fail and how to fix them before they cost you more time and money.')}&title=${encodeURIComponent('The 5 AI Automation Mistakes Quietly Bleeding Time and Cash | TrueFlow AI')}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('The 5 AI Automation Mistakes Quietly Bleeding Time and Cash from Your Business\n\nMost businesses don\'t lose time dramatically - they lose it in small, reasonable decisions. Discover the 5 critical mistakes that might be quietly costing your business.\n\n#BusinessAutomation #AIStrategy')}`}
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
                  const shareText = "The 5 AI Automation Mistakes Quietly Bleeding Time and Cash from Your Business\n\nDiscover the hidden ways AI automation might be costing you - and what to do about it.\n\n#AIAutomation #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: 'The 5 AI Automation Mistakes Quietly Bleeding Time and Cash',
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
                Most business owners don't lose time in dramatic ways.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                They lose it in small, reasonable decisions.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                A tool added here.
                <br />
                A workflow patched there.
                <br />
                A quiet assumption that things will smooth out once the system is "finished."
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                AI automation didn't create this problem.
                <br />
                It just made it visible.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                On the surface, everything looks fine. Messages get answered. Calendars fill. Tasks fire. Dashboards glow reassuring shades of green.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                And yet…
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                You're still involved in everything.
                <br />
                Your team still needs you.
                <br />
                Revenue doesn't feel proportional to effort.
                <br />
                And somehow, you're busier now than before you automated.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If you're reading this and thinking, <em>that's us</em>, keep reading. The reason rarely shows up where people expect it to.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Mistake #1: Automating a Process You've Never Actually Defined
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Most businesses don't have documented processes.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                They have habits.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Things happen because someone remembers. Because one person knows how it works. Because "this is how we've always done it."
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Then AI gets layered on top.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Instead of stopping to define what <em>should</em> happen, owners automate what <em>currently</em> happens. The mess doesn't disappear. It just moves faster.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Unclear intake becomes automated confusion.
                <br />
                Inconsistent follow-up becomes consistently wrong.
                <br />
                Verbal handoffs turn into silent failures.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Here's the uncomfortable test:
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If you can't explain the process end-to-end in plain language, without opening a tool or sharing your screen, AI doesn't know what it's doing either.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Automation doesn't create clarity.
                  <br />
                  Clarity creates automation.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If this already feels familiar, keep reading. The next mistake is usually the reason this one never gets fixed.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Mistake #2: Treating AI Like a Tool Instead of Infrastructure
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This is where things start to feel heavy.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Chatbots get installed.
                <br />
                Auto-responders go live.
                <br />
                Calendars connect.
                <br />
                CRMs fire off workflows.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                It looks like progress.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                But tools don't run businesses. Systems do.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                AI doesn't just save time. It replaces decisions. And when decisions are replaced without defining ownership, things start slipping through invisible cracks.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Messages get answered, but not resolved.
                <br />
                Leads move, but don't convert cleanly.
                <br />
                Tasks fire, but nobody is accountable for outcomes.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Everything is technically "handled."
                <br />
                Nothing actually feels finished.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If you've ever thought, <em>we have all the tools, so why does this still feel chaotic</em>, keep reading. The problem isn't usage. It's structure.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Mistake #3: Optimizing for Speed Before Accuracy
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Everyone wants instant.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Instant replies.
                <br />
                Instant booking.
                <br />
                Instant confirmation.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                So automation gets built around response speed instead of correctness.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                AI books calls that shouldn't be booked.
                <br />
                Answers questions too early.
                <br />
                Moves people forward without the context required to make good decisions.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Now your calendar fills with the wrong conversations.
                <br />
                Your team spends time undoing "efficient" mistakes.
                <br />
                And growth starts feeling noisy instead of clean.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                If your calendar looks full but revenue doesn't reflect it, don't assume it's a marketing problem. There's another layer underneath this.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                Fast wrong decisions cost more than slow right ones. Every time.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Mistake #4: Letting AI Speak Without Guardrails
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This one gets expensive quietly.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                AI sounds confident. Polite. Helpful.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                So owners let it talk.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                What they don't realize is that tone without boundaries creates expectation debt.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                AI answers questions your business handles case-by-case.
                <br />
                Makes implied promises your systems don't support.
                <br />
                Moves people emotionally before they're actually qualified.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Now your team is explaining things away.
                <br />
                Now refunds start creeping in.
                <br />
                Now trust erodes in ways that don't show up on a dashboard.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If you've ever had to say, <em>the system shouldn't have told you that</em>, keep reading. The final mistake explains why that keeps happening.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Mistake #5: No Visibility, No Override, No Ownership
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                This is the one that does the most damage.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Automation gets turned on… and then ignored.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                No daily review.
                <br />
                No escalation rules.
                <br />
                No single owner responsible for watching the system.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                So problems don't show up as fires. They show up as drift.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Leads you never knew existed.
                <br />
                Conversations that quietly stalled.
                <br />
                Opportunities that never reached a human.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                AI doesn't replace leadership. It demands more of it, earlier.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If nobody owns the system, the system quietly costs you time, money, and momentum.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                If you're nodding along and feeling slightly exposed, good. That usually means the business is strong, just leaking in places no one's mapped yet.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What Actually Works
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                The businesses that get real leverage from AI don't start with tools.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                They start with thinking.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                They slow down before automating.
                <br />
                They design decision flow before workflows.
                <br />
                They treat AI as infrastructure, not a shortcut.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                They don't ask, <em>what can we automate?</em>
                <br />
                They ask, <em>what must be true for this to work cleanly?</em>
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                That shift changes everything.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white/80">
                And if you're honest, you probably already know where things feel off. You just haven't had a clear way to see it end-to-end.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Next Logical Step
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                If you want to see where AI is actually helping your business and where it's quietly costing you time or money, we built a short AI Automation Audit to map it.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                It doesn't pitch anything.
                <br />
                It doesn't recommend tools.
                <br />
                It just shows you what's happening under the hood.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                If structural issues show up, you'll see them clearly.
                <br />
                If things are solid, you'll know that too.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                If this article felt uncomfortably accurate, start with the audit.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-white">
                <strong>Clarity comes before optimization.</strong>
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
            <h2 className="text-3xl font-bold mb-6">Ready to See What's Really Happening?</h2>
            <p className="text-xl mb-8 text-white/80">Get a clear picture of where AI is helping and where it's quietly costing you.</p>

            <div className="flex justify-center">
              <a
                href="/sign-up"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your AI Automation Audit
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              No pitch. No tools. Just visibility.
            </p>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
