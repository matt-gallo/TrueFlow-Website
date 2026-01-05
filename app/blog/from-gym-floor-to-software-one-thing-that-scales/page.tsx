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
                src="/blog-gym-to-software.jpg"
                alt="From the Gym Floor to Software: The One Thing That Actually Scales"
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
                  From the Gym Floor to Software: The One Thing That Actually Scales
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-6">
                What running a gym taught me about partnerships, leadership, and why culture matters more than tactics in every business.
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
                <span>8 min read</span>
                <span>•</span>
                <span>Leadership</span>
              </div>
            </motion.header>
          </div>

          {/* Social Sharing - Full Width Below Header */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap max-w-4xl mx-auto">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('From the Gym Floor to Software: The One Thing That Actually Scales\n\nWhat running a gym taught me about partnerships, leadership, and why culture matters more than tactics in every business.\n\n#Leadership #Business #Culture')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('From the Gym Floor to Software: The One Thing That Actually Scales. A powerful story about partnerships, leadership, and why culture matters more than tactics in every business.')}&title=${encodeURIComponent('From the Gym Floor to Software | TrueFlow')}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('From the Gym Floor to Software: The One Thing That Actually Scales\n\nA powerful story about partnerships, leadership, and why culture matters more than tactics in every business.\n\n#Leadership #Business')}`}
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
                  const shareText = "From the Gym Floor to Software: The One Thing That Actually Scales\n\nWhat running a gym taught me about partnerships, leadership, and why culture matters more than tactics in every business.\n\n#Leadership #Business #TrueFlow"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                  if (navigator.share) {
                    navigator.share({
                      title: 'From the Gym Floor to Software: The One Thing That Actually Scales',
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
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-0 mb-6">
                I didn't start in software
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                I started in a gym.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                It was 2014. We were pre-opening, doing a soft launch, still figuring things out. I was fired up. Ready to train people. Ready to coach. Ready to work.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I even built our first website myself and genuinely thought, cool, people will just show up now.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                They didn't.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                What I didn't realize then was that opening a gym meant signing up for marketing, sales, money conversations, leadership, and decision-making under pressure. None of which I had been taught. I thought I was opening a place to train people. Turns out I was opening a business.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Partnership That Taught Me Everything</h3>

              <p className="text-lg leading-relaxed mb-6">
                At the same time, I was in a partnership that looked fine on paper and was broken in reality. We hadn't decided how decisions would get made. We hadn't clarified values. We hadn't talked about money, risk, or personal expectations. We just trusted each other and assumed that would be enough.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                It wasn't.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                One of the first real cracks showed up around money. We had an unfinished basement that needed minor repairs. That made sense. What didn't make sense was my partners deciding, without agreement, to renovate the entire basement and put thousands of dollars on a personal credit card.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The business was then expected to pay it back.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We barely had revenue. I couldn't pay my own rent. And money started moving out of the business account without shared consent.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                What sticks with me isn't the number. It's the feeling.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                I remember the tension in my body walking into the gym. I remember being nervous to check the bank account. I remember bracing myself before logging in, wondering what would be gone this time.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  That's not a cash flow problem. That's a culture problem.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Instead of addressing it directly, I did what a lot of inexperienced founders do. I avoided the conversation. I quietly protected myself. I moved revenue. I took cash. I squeezed instead of speaking.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I wasn't proud of it then, and I'm not proud of it now. But it was honest.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I didn't know how to have that conversation. I didn't trust myself to handle conflict like an adult. I wasn't taught how to negotiate, collaborate, or stay grounded when things got uncomfortable. So I avoided it and hoped it would somehow resolve itself.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                It didn't.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Looking back, the biggest mistake wasn't the renovation or the credit card or even the partnership itself. It was assuming trust would replace structure.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  I thought everyone thought like me. They didn't.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                That lesson followed me long after the gym.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Same Job, Different Tools
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Years later, I run a software company. And here's the thing most people don't expect me to say.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Running a gym and running a software company are basically the same job. Different tools. Same fundamentals.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The same mistakes show up, just dressed differently. Founders think growth comes from tactics. Better marketing. Better funnels. Better CRMs. Better automations. AI. The next tool.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Those things matter. We literally build them at TrueFlow.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                But they're never the main thing.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I've seen gyms with steady leads fail anyway. I've seen software companies with solid products implode from the inside. I've seen founders blame the market, the algorithm, the economy, their team.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Almost never is that the real issue.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Real Issue Is Culture</h3>

              <p className="text-lg leading-relaxed mb-6">
                Not culture as in perks or vibes or slogans. Culture as in how decisions actually get made when things get tight.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Culture is what gets tolerated. What gets rewarded. What gets avoided. What gets addressed immediately.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                In a gym, culture is obvious. You can feel it when you walk in. In software, it hides behind tools and processes. Slack threads replace conversations. Systems get built to avoid tension. Founders carry everything themselves because it feels faster.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                But systems don't fix culture. They expose it.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Automation doesn't fix unclear leadership. Software doesn't fix avoidance. AI doesn't fix misalignment. It amplifies whatever already exists.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                That's why so many businesses stack tool on top of tool and somehow feel heavier instead of lighter.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                They skipped the main thing.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                How That Early Experience Rewired Me
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                That early gym experience rewired how I operate now.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Today, I won't enter partnerships without first developing a working relationship. Curiosity matters. Willingness to ask questions matters. Being open to challenging your own beliefs matters.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And before any real work begins, we get clear on vision, mission, and values. Not as words on a page, but as guiding principles. How do we make decisions? What happens when we disagree? What are we optimizing for personally?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Time? Money? Energy? Freedom?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Everyone wants something different out of business. You don't have to want the same thing. You do have to understand each other.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That clarity pre-handles conflict. It makes work simpler. Smarter. Calmer.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The biggest change in me is simple. I say things earlier now. Clearly. Without charge. Without sugarcoating. Not to be harsh, but to keep reality in the open.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                If feelings get hurt, that's okay. We can deal with it in the moment. And if someone can't operate in that environment, that's useful information.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                That's culture doing its job.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">What I'd Tell Any New Founder</h3>

              <p className="text-lg leading-relaxed mb-6">
                If a new gym owner or founder asked me what to do before building systems, hiring, or spending money, I'd tell them this:
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Sit down. Take hours if you can. Take a full day if possible. And decide what you want from your business on a personal level. Why you're in it. What you're optimizing for. How you want decisions to be made when things get uncomfortable.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  If you have partners, listen to what they want too. You don't need total agreement. You need shared understanding.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Do that first.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Everything else gets easier after.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">What We Actually Build at TrueFlow</h3>

              <p className="text-lg leading-relaxed mb-6">
                At TrueFlow, we build systems. We automate. We use AI. But that's not the real product.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                The real product is operational clarity. Helping founders stop carrying everything themselves. Helping them build systems that reflect how they actually want to operate.
              </p>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  Good culture makes systems boring. And boring systems scale beautifully.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                If your business feels heavier than it should, don't ask what tool you need next.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Ask what you're tolerating.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                That answer will tell you almost everything.
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
              Ready to Build Systems That Support How You Actually Want to Operate?
            </h3>
            <p className="text-lg text-white/80 mb-6">
              If this hit close to home and you want help turning clarity into systems that actually support how you want to operate, explore how we work at TrueFlow.
            </p>
            <Link
              href="https://trueflow.ai/white-glove"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Call
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
