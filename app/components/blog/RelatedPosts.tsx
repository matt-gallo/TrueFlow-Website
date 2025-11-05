import Link from 'next/link'
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import type { BlogPost } from '@/app/types/blog'
import { tagColorPalettes } from '@/app/data/blog-posts'
import Image from 'next/image'

interface RelatedPostsProps {
  posts: BlogPost[]
  currentPostId: string
}

export default function RelatedPosts({ posts, currentPostId }: RelatedPostsProps) {
  const filteredPosts = posts.filter(post => post.id !== currentPostId)

  if (filteredPosts.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => {
          // Use primary tag for color, fallback to first tag
          const primaryTagSlug = post.primaryTag?.slug || post.tags[0]?.slug
          const gradientClass = primaryTagSlug && tagColorPalettes[primaryTagSlug] 
            ? tagColorPalettes[primaryTagSlug]
            : 'from-gray-500 to-slate-600'
          
          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 h-full flex flex-col border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1">
                {/* Featured Image */}
                <div className={`h-48 bg-gradient-to-br ${gradientClass} relative overflow-hidden group`}>
                  {post.featuredImage ? (
                    <>
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Color-coded transparency overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      {/* Additional dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </>
                  ) : (
                    <>
                      {/* Decorative elements for posts without images */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full"></div>
                      </div>
                      {/* Pattern overlay */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
                      }}></div>
                    </>
                  )}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {post.category.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/70 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => {
                      const tagGradient = tagColorPalettes[tag.slug] || 'from-gray-500 to-slate-600'
                      return (
                        <span
                          key={tag.slug}
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tagGradient} text-white opacity-80`}
                        >
                          {tag.name}
                        </span>
                      )
                    })}
                    {post.tags.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">
                      By {post.author.name}
                    </span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
      
      {/* Back to Blog link */}
      <div className="mt-12 text-center">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-medium">Back to Blog Home</span>
        </Link>
      </div>
    </section>
  )
}