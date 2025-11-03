'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'transform-content-marketing-zero-leads-consistent-results',
      title: 'How to Transform Your Content Marketing: From Zero Leads to Consistent Results',
      excerpt: 'The truth about why most content strategies fail and how to fix yours. Discover the three fatal flaws killing your content marketing and learn the proven framework that transforms robotic content into lead-generating machines.',
      date: '2025-09-04',
      readTime: '12 min read',
      author: 'Matt Gallo',
      authorTitle: 'Founder & CEO, TrueFlow AI',
      slug: 'transform-content-marketing-zero-leads-consistent-results',
      headerImage: '/blog-header-content-marketing.svg',
      category: 'Content Marketing Strategy'
    },
    {
      id: 'does-your-business-need-a-blog',
      title: 'Does Your Business Even Need a Blog?',
      excerpt: 'The honest answer might surprise you. Not every business needs a blog, but if you\'re trying to build trust with people who don\'t know you yet...',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'TrueFlow AI',
      slug: 'does-your-business-need-a-blog'
    }
  ]

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
            href="/" 
            className="px-4 py-2 text-white/80 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              TrueFlow Blog
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Insights, strategies, and stories about transforming your voice into powerful content
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Header Image */}
                {post.headerImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.headerImage}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {post.category && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-8">
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-4">
                      {post.authorTitle ? (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">MG</span>
                          </div>
                          <div>
                            <span className="font-medium text-white/80">{post.author}</span>
                            <span className="text-white/50 text-xs block">{post.authorTitle}</span>
                          </div>
                        </div>
                      ) : (
                        <span>{post.author}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-cyan-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}