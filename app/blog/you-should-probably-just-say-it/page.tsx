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
                src="/blog-you-should-probably-just-say-it.jpg"
                alt="You Should Probably Just Say It"
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
                  You Should Probably Just Say It
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-6">
                A practical framework for gym owners to sort their responsibilities, protect their unique ability, and simplify everything
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MG</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Matt Gallo</p>
                  <p className="text-white/60 text-sm">Gym Owner, Operator, Systems Builder</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
                <span>January 5, 2026</span>
                <span>•</span>
                <span>8-10 min read</span>
                <span>•</span>
                <span>Gym Ownership</span>
              </div>
            </motion.header>
          </div>

          {/* Social Sharing */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('You Should Probably Just Say It\n\nA practical framework for gym owners to sort their responsibilities, protect their unique ability, and simplify everything\n\n#GymOwners #Leadership #Operations')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('You Should Probably Just Say It. A practical framework for gym owners to sort their responsibilities, protect their unique ability, and simplify everything.')}&title=${encodeURIComponent('You Should Probably Just Say It | TrueFlow')}`}
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
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('You Should Probably Just Say It\n\nA practical framework for gym owners to sort their responsibilities, protect their unique ability, and simplify everything\n\n#GymOwners #Leadership')}`}
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
                const shareText = "You Should Probably Just Say It\n\nA practical framework for gym owners to sort their responsibilities, protect their unique ability, and simplify everything\n\n#GymOwners #Leadership #Operations"
                const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                if (navigator.share) {
                  navigator.share({
                    title: 'You Should Probably Just Say It',
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
              <p className="text-lg leading-relaxed mb-6">
                Let me ask you something you already know the answer to.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Have you ever sat down to do something for the gym, looked at it for a minute, and thought:
              </p>

              <p className="text-lg leading-relaxed mb-6">
                "I'll make time for this later."
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Not because you don't know how to do it.<br />
                Not because it's especially hard.<br />
                But because it feels heavier than it should.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                If that's you, you're not lazy.<br />
                You're a gym owner.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Most gym owners procrastinate for the same reason: they wildly overestimate how complex something is going to be, how long it's going to take, and how much focus it requires. So the task grows in their head. It becomes a thing. And the bigger it feels, the easier it is to avoid.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                So instead, they stay busy.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                They clean the floors.<br />
                They reorganize equipment.<br />
                They talk to members.<br />
                They answer questions.<br />
                They hang out after class.<br />
                They over-serve.<br />
                They stay visible.<br />
                They stay liked.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                None of that is bad.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                But it is safe.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Because the work you keep putting off doesn't give you anything back emotionally.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Admin doesn't respond to you.<br />
                Payroll doesn't appreciate you.<br />
                Programming ahead of time doesn't tell you you're doing great.<br />
                Systems don't notice your effort.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                People do.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And that's where a lot of gym owners quietly get stuck.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Not because they don't care about the business.<br />
                But because being needed feels better than being alone with the unsexy parts of ownership.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The problem is, the longer you avoid the quiet work, the louder everything else becomes.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Billing issues stack up.<br />
                Cards don't go through.<br />
                Cancellation emails pile up.<br />
                Programming gets pushed to the last minute.<br />
                Social media becomes inconsistent.<br />
                Standards soften.<br />
                And conversations that should happen… don't.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                At some point, this stops being procrastination.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                It becomes avoidance.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Start with reality, not solutions
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Most advice jumps straight to solutions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Delegate more.<br />
                Automate everything.<br />
                Hire help.<br />
                Get better software.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That advice usually fails because it skips the most important step: telling the truth about what's actually on your plate.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                So before you try to fix anything, do this.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Write down every task and responsibility that currently belongs to you. Everything. No filtering.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Then sort them into four buckets.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                No optimization yet. No delegation yet. Just honesty.
              </p>

              {/* Four Buckets Visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {/* Bucket 1 */}
                <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-red-500/10 -mt-4 -mr-4">1</div>
                  <h4 className="text-xl font-bold text-red-400 mb-3 relative z-10">Things You're Bad At</h4>
                  <p className="text-white/80 text-sm mb-4 relative z-10">Tasks that drain energy and take way longer than they should</p>
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-red-400">×</span>
                      <span>Tech setup</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-red-400">×</span>
                      <span>Bookkeeping</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-red-400">×</span>
                      <span>Detailed admin</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-500/20 relative z-10">
                    <p className="text-xs font-semibold text-red-300">→ ELIMINATE or HAND OFF</p>
                  </div>
                </div>

                {/* Bucket 2 */}
                <div className="bg-orange-500/10 border-2 border-orange-500/30 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-orange-500/10 -mt-4 -mr-4">2</div>
                  <h4 className="text-xl font-bold text-orange-400 mb-3 relative z-10">Things That Drain You</h4>
                  <p className="text-white/80 text-sm mb-4 relative z-10">You can do them, but they slowly exhaust you</p>
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-orange-400">⚠</span>
                      <span>Payroll</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-orange-400">⚠</span>
                      <span>Billing issues</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-orange-400">⚠</span>
                      <span>Manual posting</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-500/20 relative z-10">
                    <p className="text-xs font-semibold text-orange-300">→ AUTOMATE or OUTSOURCE</p>
                  </div>
                </div>

                {/* Bucket 3 */}
                <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-blue-500/10 -mt-4 -mr-4">3</div>
                  <h4 className="text-xl font-bold text-blue-400 mb-3 relative z-10">Things You're Good At</h4>
                  <p className="text-white/80 text-sm mb-4 relative z-10">Efficient and skilled, but not the best use of you</p>
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-blue-400">✓</span>
                      <span>Programming</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-blue-400">✓</span>
                      <span>Coaching</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-blue-400">✓</span>
                      <span>Problem-solving</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-500/20 relative z-10">
                    <p className="text-xs font-semibold text-blue-300">→ DELEGATE or SYSTEMIZE</p>
                  </div>
                </div>

                {/* Bucket 4 */}
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-2 border-cyan-400/50 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-cyan-500/10 -mt-4 -mr-4">4</div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 relative z-10">Unique Ability</h4>
                  <p className="text-white/80 text-sm mb-4 relative z-10">No one can do this better than you because of who you are</p>
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-cyan-400">★</span>
                      <span>Your unique strength</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-cyan-400">★</span>
                      <span>Sharpens you</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-cyan-400">★</span>
                      <span>True leverage</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-400/30 relative z-10">
                    <p className="text-xs font-semibold text-cyan-300">→ ELEVATE and PROTECT</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Bucket 1: Things you're bad at
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                These are tasks you struggle with, avoid, or stretch out way longer than they should take.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Not because you're lazy.<br />
                Because they don't match how your brain works.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Maybe it's tech.<br />
                Maybe it's bookkeeping.<br />
                Maybe it's editing content.<br />
                Maybe it's detailed admin work.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                You <em>can</em> force yourself through these things, but every time you do, it costs you more energy than it returns.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That's not discipline.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                That's friction.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Bucket 2: Things you can do, but that drain you
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                This bucket is dangerous because it looks fine on the surface.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                You're capable here. You get it done. But when you're honest, these tasks slowly exhaust you.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Payroll.<br />
                Chasing billing issues.<br />
                Manually posting on social media.<br />
                Cleaning instead of outsourcing.<br />
                Answering the same questions over and over.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                These things don't break you in one shot. They wear you down quietly.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                A lot of gym owners live here and can't figure out why everything feels heavy all the time.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Bucket 3: Things you're good at
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                This is where many owners get trapped.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                You're efficient. You're skilled. Things move smoothly.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Programming.<br />
                Coaching.<br />
                Teaching.<br />
                Problem-solving.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Because you're good at these, it's easy to believe the business needs <em>you</em> doing them.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                But being good at something doesn't mean it's the best use of you.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                If too much of your time lives here, the gym becomes dependent on your presence, not your leadership.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Bucket 4: Unique Ability
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                This is the most misunderstood bucket.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Unique Ability is <strong>not a job description</strong>.<br />
                It's not "what owners should do."<br />
                It's not leadership tasks by default.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Your Unique Ability is the one thing you do better than anyone else <em>because of who you are</em>, not because of your title.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                It's the result of your personality, your life experience, your temperament, and the skills you've developed over years.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                For one gym owner, that might be teaching.<br />
                For another, it's organizing chaos.<br />
                For another, it's building relationships.<br />
                For another, it's seeing patterns early.<br />
                For another, it's creating clarity when things feel messy.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                There is no universal answer here.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                What matters is this:<br />
                <strong>no one in your gym can do this thing better than you</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And when you're doing it, it doesn't drain you. It sharpens you.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This bucket is small on purpose.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And it's the bucket most gym owners spend the least time in.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Because it doesn't always look productive.<br />
                And it doesn't always get immediate feedback.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Where elevate, delegate, automate, eliminate actually comes in
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Only after you've sorted the buckets does the next step make sense.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Now the path is obvious.
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span><strong>Unique Ability</strong> → <strong>Elevate</strong><br />Protect this. Do more of it. This is where your leverage lives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span><strong>Things you're good at</strong> → <strong>Delegate or systemize</strong><br />Just because you're good at something doesn't mean it should stay yours.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span><strong>Things that drain you</strong> → <strong>Automate or outsource</strong><br />These are energy leaks. Fix them with systems or support.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span><strong>Things you're bad at</strong> → <strong>Eliminate or hand off immediately</strong><br />No medals for suffering.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-8">
                This is where overwhelm starts to disappear.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                About the conversations you keep avoiding
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Most gym owners label certain moments as "hard conversations."
              </p>

              <p className="text-lg leading-relaxed mb-6">
                They treat them like emotional landmines.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In reality, those moments usually sit inside Unique Ability.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Not because confrontation is your job.<br />
                But because <em>you</em> are the one who can feel when something is off and name it clearly.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That's not aggression.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That's alignment.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That's service.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                If a standard needs to be set, and you don't set it, you don't stay neutral.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                You become part of the problem.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                The cost of waiting is unknown, but it is always higher than the cost of addressing something when it first shows up.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The sentence that keeps lying to you
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                "I'll make time for this."
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That sentence feels responsible. It's not.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Time doesn't magically appear.<br />
                Days fill themselves.<br />
                And the work that matters most keeps getting postponed.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Not because it's complicated.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                But because it asks you to step fully into the one thing only <em>you</em> can bring.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                So here's the real question.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                What are you still doing that doesn't belong to you anymore?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And what are you avoiding saying because staying comfortable feels safer than being clear?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                You already know the answer.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                You should probably just say it.
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
              Ready to Sort Your Responsibilities and Simplify Everything?
            </h3>
            <p className="text-lg text-white/80 mb-6">
              If this resonates and you want help sorting your responsibilities, protecting your unique ability, and building systems that actually simplify your life, book a white-glove call with our team below.
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
