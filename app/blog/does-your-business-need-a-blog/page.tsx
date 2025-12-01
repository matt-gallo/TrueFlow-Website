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
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Does Your Business Even Need a Blog?
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8">The honest answer might surprise you</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>TrueFlow AI</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('🤔 Does Your Business Even Need a Blog? The honest answer might surprise you... \n\nGoogle\'s 7-11-4 rule shows customers need to see your brand 7 times across 11 touchpoints before buying. Your blog is one of those critical touchpoints! \n\n#ContentMarketing #BloggingTips #BusinessGrowth')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('Does Your Business Even Need a Blog? The honest answer might surprise you. This comprehensive guide explores Google\'s 7-11-4 rule and helps you determine if blogging is essential for your business growth. Learn why companies that blog regularly generate 67% more leads and discover the real barriers to consistent content creation.')}&title=${encodeURIComponent('Does Your Business Even Need a Blog? | TrueFlow AI')}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('🤔 Does Your Business Even Need a Blog? The honest answer might surprise you!\n\nThis insightful article explores Google\'s 7-11-4 rule and reveals why companies that blog regularly generate 67% more leads. Perfect read for business owners wondering if blogging is worth the investment.\n\n#BusinessBlogging #ContentMarketing #DigitalMarketing')}`}
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
                  const shareText = "🤔 Does Your Business Even Need a Blog? The honest answer might surprise you!\n\nThis article explores Google's 7-11-4 rule and why companies that blog regularly generate 67% more leads.\n\n#BusinessBlogging #ContentMarketing #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
                  
                  if (navigator.share) {
                    navigator.share({
                      title: 'Does Your Business Even Need a Blog?',
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
              <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
                Here&apos;s the thing nobody wants to admit: <strong>Not every business needs a blog.</strong>
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                If you&apos;re selling ice cream cones at the beach, you probably don&apos;t need to write weekly posts about &quot;The Psychology of Frozen Treats&quot; or &quot;5 Ways Vanilla Ice Cream Can Transform Your Summer.&quot;
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                But here&apos;s where it gets interesting...
              </p>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Reality of Business Blogging in 2025
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                According to recent studies, <strong>companies that blog regularly generate 67% more leads</strong> than those that don&apos;t. Yet despite this overwhelming evidence, most business owners still struggle with one fundamental question: &quot;Is business blogging worth the investment for MY company?&quot;
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Here&apos;s something that might surprise you: Google&apos;s internal research reveals the <strong>7-11-4 rule</strong>—consumers need to see your brand 7 times, across 11 touchpoints, over 4 different locations before they&apos;ll make a purchase decision. Your blog posts are critical touchpoints in this journey, helping prospects get familiar with your expertise and approach.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The answer isn&apos;t as straightforward as most marketing experts would have you believe. Content marketing success depends heavily on your industry, target audience, and business model. Some businesses thrive with minimal content, while others need a robust content strategy to survive.
              </p>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                You DO Need a Blog If:
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>You&apos;re trying to build trust with people who don&apos;t know you yet.</strong> In today&apos;s digital landscape, consumers research extensively before making purchasing decisions. A well-maintained blog serves as social proof of your expertise.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>Your customers need education before they buy.</strong> Complex products or services require explanation. Educational content reduces sales friction and builds confidence in your solution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>You&apos;re competing in a crowded market where visibility equals survival.</strong> SEO-optimized blog content helps you rank for valuable keywords your competitors might be missing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>You have expertise that could solve real problems.</strong> Thought leadership content positions you as the go-to expert in your field, attracting higher-quality leads.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>You want to stop chasing leads and have them come to you.</strong> Inbound marketing through valuable content creates a magnet for qualified prospects.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>You&apos;re tired of explaining the same thing over and over in sales calls.</strong> Comprehensive blog content addresses common questions, qualifying leads before they reach you.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>You need content to repurpose across social media, emails, and ads.</strong> A single blog post can be transformed into weeks of social content, email sequences, and ad copy.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                When a Blog Might NOT Be Essential
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Before we dive into solutions, let&apos;s be honest about when blogging might not be your priority:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>Your business relies entirely on local foot traffic and word-of-mouth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>You have a simple product with no need for customer education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>Your sales cycle is extremely short with impulse purchases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>You already have more business than you can handle</span>
                </li>
              </ul>
              
              <p className="text-lg leading-relaxed mb-6">
                However, even in these scenarios, <strong>most businesses can benefit from some form of content marketing</strong>—it just might not need to be a traditional blog.
              </p>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Hidden Costs of Not Blogging
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                While you&apos;re debating whether your business needs a blog, your competitors are quietly building digital assets that compound over time. Every month without content is:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>Missed opportunities to rank for valuable search terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>Lost chances to build trust with potential customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>Reduced social media engagement and reach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span>Dependence on paid advertising for all your traffic</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-8">
                The real question isn&apos;t whether you need a blog—it&apos;s whether you can afford NOT to have one in 2025&apos;s competitive landscape.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                But here&apos;s the problem most business owners face: <strong>knowing you need content and actually creating it consistently are two completely different challenges.</strong> Time, expertise, and resources become the real barriers to success.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8 my-12">
                <p className="text-lg font-semibold mb-4">
                  <strong>That&apos;s where TrueFlow changes everything.</strong>
                </p>
                <p className="mb-4">
                  Instead of you staring at a blank page every week, wondering what to write about, TrueFlow pulls from your existing content—your conversations, your stories, your expertise—and transforms it into blog posts that sound exactly like you.
                </p>
                <p>
                  No generic AI fluff. No robotic tone. Just your voice, amplified and automated.
                </p>
              </div>
              
              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-12 italic backdrop-blur-sm rounded-r-xl">
                <p className="mb-4">
                  Think about how it feels right now. You know you should be blogging. You know it would help your business. But every week that passes without a new post feels like another missed opportunity.
                </p>
                
                <p className="mb-4">
                  Meanwhile, your competitors are showing up consistently, building authority, and capturing the attention that should be yours.
                </p>
                
                <p>
                  <strong>It doesn&apos;t have to be this way.</strong>
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                The TrueFlow content engine doesn&apos;t just solve the &quot;what to write&quot; problem—it solves the <strong className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">&quot;how to keep up&quot;</strong> problem.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Every week, you get fresh content that:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>Reflects your unique voice and perspective</strong> - No generic AI-generated content that sounds like everyone else</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>Addresses your audience&apos;s real pain points</strong> - Based on actual customer conversations and feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>Builds trust and positions you as the expert</strong> - Demonstrates deep industry knowledge and experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>Can be repurposed into social posts, emails, and ads</strong> - One blog post becomes 10+ pieces of content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>Actually converts readers into leads and customers</strong> - SEO-optimized with clear calls-to-action</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The ROI of Consistent Business Blogging
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Let&apos;s talk numbers. Companies with active blogs see:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>67% more leads per month</strong> compared to non-blogging businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>434% more indexed pages</strong> for search engines to find</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>97% more inbound links</strong> from other websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">→</span>
                  <span><strong>55% more website visitors</strong> through organic search</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                But here&apos;s what most statistics don&apos;t tell you: these results only come from <strong>consistent, high-quality content creation.</strong> Sporadic posting or low-value content actually hurts your SEO rankings and brand credibility.
              </p>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Making the Decision: Blog or No Blog?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                The decision ultimately comes down to three key factors:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">1. Customer Journey Length</h3>
                <p className="text-white/80">If your customers take time to research before buying, you need content to guide that journey. High-consideration purchases almost always benefit from educational content.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">2. Competition Level</h3>
                <p className="text-white/80">In competitive markets, content marketing becomes a necessity rather than a luxury. Your competitors are likely already investing in content—can you afford not to?</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">3. Scalability Goals</h3>
                <p className="text-white/80">If you want to grow beyond word-of-mouth and referrals, content marketing provides a scalable way to attract new customers without increasing ad spend proportionally.</p>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                No more staring at blank pages. No more missed weeks. No more wondering if your content is working.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold">
                <strong className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Just consistent, high-quality content that flows as naturally as your best conversations.
                </strong>
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
            <h2 className="text-3xl font-bold mb-6">Ready to See How It Works?</h2>
            <p className="text-xl mb-8 text-white/80">Stop letting content creation slow down your growth.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/readiness-assessment"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started with TrueFlow
              </Link>
              <Link 
                href="/readiness-assessment"
                className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Take the 2-Minute Assessment
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-white/60">
              See if your business is ready for AI-powered content that actually converts.
            </p>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
