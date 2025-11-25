'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Share2 } from 'lucide-react'
import type { BlogPost } from '@/app/types/blog'
import SocialShare from './SocialShare'
import { useTheme } from '../ThemeProvider'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const { isDarkMode } = useTheme()

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className={`backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      } ${
        isDarkMode
          ? 'bg-white/10 hover:bg-white/15'
          : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-md'
      }`}>
        {/* Featured Image */}
        <div className={`${featured ? 'h-64 lg:h-96' : 'h-48'} relative overflow-hidden`}>
          {post.featuredImage ? (
            <>
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </>
          ) : (
            <div className={`h-full bg-gradient-to-br ${
              post.id === '1' ? 'from-sky-500 to-blue-600' :
              post.id === '2' ? 'from-purple-500 to-pink-600' :
              post.id === '3' ? 'from-green-500 to-teal-600' :
              post.id === '4' ? 'from-orange-500 to-pink-600' :
              'from-indigo-500 to-purple-600'
            }`}>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <span className={`backdrop-blur-sm px-3 py-1 rounded-full text-sm ${
              isDarkMode ? 'bg-white/20 text-white' : 'bg-gray-800/70 text-white'
            }`}>
              {post.category.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
          {/* Tags with frosted glass effect */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs font-medium backdrop-blur-md border rounded-full ${
                  isDarkMode
                    ? 'text-white/90 bg-white/10 border-white/20'
                    : 'text-gray-700 bg-gray-100 border-gray-300'
                }`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Title with enhanced frosted glass effect */}
          <div className={`backdrop-blur-lg border rounded-xl p-4 mb-4 ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`${featured ? 'text-2xl lg:text-3xl' : 'text-xl'} font-semibold mb-2 group-hover:text-blue-400 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h3>

            {/* Author info */}
            <div className={`flex items-center gap-3 pt-2 border-t ${
              isDarkMode ? 'border-white/10' : 'border-gray-200'
            }`}>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {post.author.name}
              </span>
              {post.author.role && (
                <>
                  <span className={isDarkMode ? 'text-white/30' : 'text-gray-400'}>•</span>
                  <span className={`text-xs ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                    {post.author.role}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Date and read time */}
          <div className={`flex items-center gap-4 text-sm mb-3 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
          </div>

          <p className={`mb-4 ${featured ? 'lg:text-lg' : ''} line-clamp-3 ${
            isDarkMode ? 'text-white/70' : 'text-gray-700'
          }`}>
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div onClick={(e) => e.preventDefault()}>
              <SocialShare 
                title={post.title}
                url={`https://trueflow.ai/blog/${post.slug}`}
                excerpt={post.excerpt}
                variant="compact"
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
