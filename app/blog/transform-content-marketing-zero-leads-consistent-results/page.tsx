'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogPost() {
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
              src="/true-flow-logo.webp" 
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
          {/* Header Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-2xl overflow-hidden"
          >
            <Image
              src="/blog-header-content-marketing.svg"
              alt="Transform Your Content Marketing: From Zero Leads to Consistent Results"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                How to Transform Your Content Marketing: From Zero Leads to Consistent Results
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8">The truth about why most content strategies fail and how to fix yours</p>
            
            {/* Author Section */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Matt Gallo</p>
                <p className="text-white/60 text-sm">Founder & CEO, TrueFlow AI</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>September 4, 2025</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Content Marketing Strategy</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('🚀 Transform Your Content Marketing: From Zero Leads to Consistent Results \n\nDiscover why most businesses fail at content marketing and the 3 fatal flaws killing your strategy. Plus, learn the Content Engine Solution that actually works! \n\n#ContentMarketing #LeadGeneration #BusinessGrowth')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('Transform Your Content Marketing: From Zero Leads to Consistent Results. Learn why most content strategies fail and discover the proven framework that turns robotic content into lead-generating machines. Essential reading for business owners struggling with content marketing ROI.')}&title=${encodeURIComponent('Transform Your Content Marketing: Zero to Consistent Results | TrueFlow AI')}`}
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('🚀 Transform Your Content Marketing: From Zero Leads to Consistent Results!\n\nThis comprehensive guide reveals why most businesses struggle with content marketing and provides a proven framework for transformation. Perfect for business owners ready to turn their content into a lead-generation machine.\n\n#ContentStrategy #DigitalMarketing #BusinessTips')}`}
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
                  const shareText = "🚀 Transform Your Content Marketing: From Zero Leads to Consistent Results!\n\nDiscover the 3 fatal flaws killing most content strategies and learn the proven framework that actually works.\n\n#ContentMarketing #LeadGeneration #TrueFlowAI"
                  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
                  
                  if (navigator.share) {
                    navigator.share({
                      title: 'Transform Your Content Marketing: Zero to Consistent Results',
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

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Hidden Truth About Content Marketing Failure
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                In today's digital landscape, countless businesses are pouring time and resources into content marketing with minimal results. Recently, I encountered a business owner who had been posting <strong>daily across multiple platforms since January</strong> - yet by September, he had generated <strong>zero leads</strong> from his efforts. This isn't an isolated case; it's a common struggle that highlights a critical gap in how many approach content marketing.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Three Fatal Flaws in Most Content Strategies
              </h2>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">1. The Robotic Content Trap</h3>

              <p className="text-lg leading-relaxed mb-6">
                One of the most prevalent issues I've observed is what I call the "robotic content syndrome." Many businesses, in their quest for efficiency, have turned to AI tools like ChatGPT to generate content. While AI can be helpful, relying solely on it often results in content that lacks:
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Emotional connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Authentic voice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Relatable human elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Personal touch</span>
                </li>
              </ul>

              <div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
                <p className="text-lg">
                  "Content without emotion is like a body without a soul - technically complete, but lacking the spark that makes it alive."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">2. The Missing Story Arc</h3>

              <p className="text-lg leading-relaxed mb-6">
                The second major flaw lies in the lack of content continuity. Many businesses post regularly but fail to create a cohesive narrative that:
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Connects individual pieces of content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Builds anticipation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Creates momentum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Develops a compelling journey for the audience</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-8">
                This disconnected approach is like trying to read a book where each chapter belongs to a different story - confusing and ultimately disengaging.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Power of Strategic Storytelling
              </h2>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Identifying Compelling Stories</h3>

              <p className="text-lg leading-relaxed mb-6">
                The most effective content marketing stories share several key characteristics:
              </p>

              <div className="grid gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">1. Recent and Relevant</h4>
                  <p className="text-white/80">Stories that reflect current market conditions and challenges</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">2. Dramatic and Shocking</h4>
                  <p className="text-white/80">Unexpected twists or surprising outcomes that capture attention</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">3. Quantifiable Results</h4>
                  <p className="text-white/80">Specific numbers and concrete achievements</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">4. Emotional Resolution</h4>
                  <p className="text-white/80">Clear before-and-after scenarios that readers can relate to</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Creating an Emotional Connection</h3>

              <p className="text-lg leading-relaxed mb-6">
                To transform your content from mundane to magnetic, focus on:
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Meeting your audience where they are mentally and emotionally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Acknowledging their current challenges and frustrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Painting a vivid picture of potential solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Sharing authentic experiences that resonate with their journey</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Lead Magnet Revolution
              </h2>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Understanding Value Exchange</h3>

              <p className="text-lg leading-relaxed mb-6">
                One of the most overlooked aspects of content marketing is the importance of lead magnets. Here's why they matter:
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Every email address or phone number shared is a valuable transaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Audience attention is a precious commodity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Value must be provided before asking for anything in return</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Creating Compelling Lead Magnets</h3>

              <p className="text-lg leading-relaxed mb-6">
                Your lead magnets should:
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Solve an immediate problem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Provide exceptional value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Be easily consumable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <span>Lead naturally to your paid offerings</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                The Content Engine Solution
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                To address these common content marketing challenges, we've developed a comprehensive approach that includes:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">1. Strategic Planning</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Custom content calendars</li>
                    <li>• Story arc development</li>
                    <li>• Audience research and analysis</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">2. Content Creation</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Emotionally engaging writing</li>
                    <li>• Strategic storytelling</li>
                    <li>• Conversion optimization</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">3. Implementation Support</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Regular strategy sessions</li>
                    <li>• Performance monitoring</li>
                    <li>• Continuous optimization</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Taking Action: Your Next Steps
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                To transform your content marketing from ineffective to impactful:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">1. Audit Your Current Content</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Review engagement metrics</li>
                    <li>• Analyze storytelling elements</li>
                    <li>• Assess emotional connection</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">2. Develop Your Story Arc</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Map out connected themes</li>
                    <li>• Plan content progression</li>
                    <li>• Create compelling narratives</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">3. Implement Lead Magnets</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Design valuable offerings</li>
                    <li>• Create clear value propositions</li>
                    <li>• Optimize conversion paths</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Conclusion: Your Content Marketing Transformation
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                The difference between content that generates zero leads and content that consistently drives results lies in these fundamental elements: emotional connection, strategic storytelling, and valuable lead magnets. By implementing these principles, you can transform your content marketing from a daily chore into a powerful lead-generation machine.
              </p>

              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8 my-12">
                <p className="text-lg font-semibold mb-4">
                  <strong>Ready to transform your content marketing strategy?</strong>
                </p>
                <p className="mb-4">
                  For a limited time, we're offering a complimentary VIP Sales and Marketing Strategy Session (valued at $997) to help you implement these principles in your business. Contact us today to schedule your session and start seeing real results from your content marketing efforts.
                </p>
              </div>

              <p className="text-lg leading-relaxed font-semibold mb-8">
                <strong className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Remember: Content marketing isn't just about showing up - it's about showing up strategically, with purpose, and with a clear path to results.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
            <p className="text-xl mb-8 text-white/80">Stop letting robotic content kill your conversions.</p>
            
            <div className="flex justify-center">
              <a 
                href="https://trueflow.ai/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started with TrueFlow
              </a>
            </div>
            
            <p className="mt-6 text-sm text-white/60">
              Discover if your business is ready for content that actually converts leads into customers.
            </p>
          </motion.div>
        </article>
      </div>
    </div>
  )
}