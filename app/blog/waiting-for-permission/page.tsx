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
        <article className="max-w-6xl mx-auto px-6 py-12">
          {/* Header Section - Image and Title Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Header Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="/blog-waiting-for-permission.jpg"
                alt="The Most Expensive Mistake Founders Make Without Realizing It"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  The Most Expensive Mistake Founders Make Without Realizing It
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-6">
                A look at avoidance, productivity, and the decisions founders quietly postpone
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-cyan-400/50">
                  <Image
                    src="/matt-gallo-avatar.png"
                    alt="Matt Gallo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Matt Gallo</p>
                  <p className="text-white/60 text-sm">Founder, TrueFlow</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
                <span>January 5, 2026</span>
                <span>•</span>
                <span>6-7 min read</span>
                <span>•</span>
                <span>Leadership / Founder Mindset</span>
              </div>
            </motion.header>
          </div>

          {/* Social Sharing - Full Width Below Header */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap max-w-4xl mx-auto">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('The Most Expensive Mistake Founders Make Without Realizing It\n\nA look at avoidance, productivity, and the decisions founders quietly postpone\n\n#Leadership #Founders #Productivity')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('The Most Expensive Mistake Founders Make Without Realizing It. A powerful look at avoidance, productivity, and the decisions founders quietly postpone.')}&title=${encodeURIComponent('The Most Expensive Mistake Founders Make | TrueFlow')}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('The Most Expensive Mistake Founders Make Without Realizing It\n\nA look at avoidance, productivity, and the decisions founders quietly postpone\n\n#Leadership #Founders')}`}
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
                  const shareText = "The Most Expensive Mistake Founders Make Without Realizing It\n\nA look at avoidance, productivity, and the decisions founders quietly postpone\n\n#Leadership #Founders #Productivity"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: 'The Most Expensive Mistake Founders Make Without Realizing It',
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 font-bold">
                Are you actually stuck, or are you waiting until you feel more qualified to move?
              </p>

              <p className="text-lg leading-relaxed mb-6 font-bold">
                If you're honest, how much time do you spend staying busy instead of having the one conversation or making the one decision you know matters?
              </p>

              <p className="text-lg leading-relaxed mb-8 font-bold">
                And what would change in your business if you stopped waiting for certainty and trusted yourself to figure it out in motion?
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Illusion of Productivity
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                I lived on the wrong side of those questions for a long time.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                At the time, I thought I was being responsible.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I worked hard. I filled my schedule. I stayed useful. From the outside, it looked like discipline. Inside, it was avoidance.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                I didn't realize how often I was waiting for permission.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Permission to speak up.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Permission to act.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Permission to be messy.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Permission to not have all the answers yet.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                I thought leadership meant certainty. I thought maturity meant having a clean plan before taking action. What I didn't see was how often I was quietly outsourcing authority over my own life and business.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That pattern showed up everywhere.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                In business, it looked like filling my schedule with coaching, cleaning, and being indispensable instead of focusing on marketing, sales, or addressing conflict. All important things. All real work. And all very effective at keeping me from growth.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Investment I Avoided</h3>

              <p className="text-lg leading-relaxed mb-6">
                In money, it showed up in a way that still stings.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I once sat on an investment that exploded in value on paper. I had every signal I needed to act. But acting meant making a phone call. It meant stepping into ownership instead of observation.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                So I delayed.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                I showered.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                I napped.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                I meal-prepped.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I went for walks.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                I disguised avoidance as self-care.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                By the time I finally acted, most of the opportunity was gone.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The loss wasn't just financial.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                It reinforced a deeper belief: <em>other people are the adults.</em>
              </p>

              <p className="text-lg leading-relaxed mb-2">
                Advisors.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Experts.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Institutions.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                People with credentials and authority.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Hidden Cost of Outsourcing Authority</h3>

              <p className="text-lg leading-relaxed mb-2">
                That belief has a cost.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                The cost is giving up agency so you can feel safe.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                The cost is shrinking yourself so someone else can be responsible.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                The cost is never fully trusting yourself because you're always waiting to be approved.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                And the worst part is the feedback loop.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                The world responds to hesitation with hesitation.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Opportunities stall.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                People hesitate to trust you.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Which quietly confirms the belief that you shouldn't trust yourself yet.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That loop ran my life longer than I care to admit.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Moment Everything Changed
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                Then something broke it.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In March of 2020, standing in a quiet gym while uncertainty spread fast, there was no one to ask. No authority to defer to. No rulebook to follow.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                So we decided.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                We closed early.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                We moved online immediately.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We acted before being told to.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And something unexpected happened.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                I felt calm.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                Not certain.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                Not confident in the outcome.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Calm.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Our members felt it too. They showed up. They trusted us. They anchored their days around what we built together in the middle of chaos.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That's when it clicked.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Leadership isn't about having answers. It's about being regulated when answers don't exist yet.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                That moment changed how I operate permanently.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                I became unwilling to let some other person or entity make the rules for me. Unwilling to wait until I was fully qualified. Unwilling to stay silent because things weren't perfectly formed yet.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Operating Without a Script</h3>

              <p className="text-lg leading-relaxed mb-2">
                These days, I'm willing to enter into almost anything without knowing exactly how it will go.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                A call.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                A conversation.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                A negotiation.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                A hard moment.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Not because I don't care about the outcome.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                Because I trust myself to find the next step <em>inside</em> the situation.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                I don't enter trying to be right.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                I don't enter trying to protect feelings.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I enter curious.
              </p>

              <p className="text-lg leading-relaxed mb-2">
                And here's what experience has taught me:
              </p>

              <p className="text-lg leading-relaxed mb-2">
                I always find a way.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                I always have.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                What Most Founders Actually Need
              </h2>

              <p className="text-lg leading-relaxed mb-2">
                Most people don't need another tactic.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                They don't need another framework.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                They don't need permission from someone they've never met.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                They need self-authorization.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  The moment you stop waiting to be ready, life responds differently. Conversations open. Decisions simplify. Systems finally have something solid to support.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                Everything else builds on that.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/30 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Systems That Support Decisive, Grounded Leadership?
            </h3>
            <p className="text-lg text-white/80 mb-6">
              If this resonates and you want help building systems that support decisive, grounded leadership instead of replacing it, you can book a white-glove call with our team below.
            </p>
            <Link
              href="https://trueflow.ai/white-glove"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Book a White-Glove Call
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
