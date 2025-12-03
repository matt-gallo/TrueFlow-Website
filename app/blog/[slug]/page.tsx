'use client'

import { notFound } from 'next/navigation'
import { getBlogPost, getRelatedPosts, getPublishedPosts } from '@/app/data/blog-posts'
import BlogHeader from '@/app/components/blog/BlogHeader'
import BlogContent from '@/app/components/blog/BlogContent'
import AuthorBio from '@/app/components/blog/AuthorBio'
import RelatedPosts from '@/app/components/blog/RelatedPosts'
import SocialShare from '@/app/components/blog/SocialShare'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import ParticleBackground from '@/app/components/ParticleBackground'
import { Footer } from '@/app/components/Footer'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { isDarkMode } = useTheme()
  const post = getBlogPost(params.slug)
  
  if (!post || !post.published) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className={`min-h-screen relative transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Particle Background - only in dark mode */}
      {isDarkMode && <ParticleBackground particleCount={40} />}
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-24">
        <article>
          <BlogHeader post={post} isDarkMode={isDarkMode} />
          <BlogContent content={post.content} isDarkMode={isDarkMode} />
          
          {/* Share Section at Bottom of Article */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className={`backdrop-blur-lg border rounded-2xl p-6 ${
              isDarkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-gray-200 shadow-md'
            }`}>
              <div className="text-center mb-4">
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Enjoyed this article?</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/60' : 'text-gray-600'
                }`}>Share it with your network</p>
              </div>
              <SocialShare
                title={post.title}
                excerpt={post.excerpt}
                variant="compact"
                className="justify-center"
              />
            </div>
          </div>
          
          <AuthorBio author={post.author} />
        </article>

        {/* Floating Share Buttons */}
        <SocialShare 
          title={post.title}
          excerpt={post.excerpt}
          variant="floating"
          className="hidden lg:block"
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} currentPostId={post.id} />
        )}
      </main>

      {/* Footer CTA */}
      <section className={`py-16 px-4 border-t ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Ready to Transform Your Content Creation?</h2>
          <p className={`mb-8 ${
            isDarkMode ? 'text-white/80' : 'text-gray-600'
          }`}>
            Join thousands of businesses using TrueFlow to automate their marketing.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
          >
            Get started here
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
