'use client'

import { Calendar, Clock } from 'lucide-react'
import type { BlogPost } from '@/app/types/blog'
import Image from 'next/image'
import SocialShare from './SocialShare'

interface BlogHeaderProps {
  post: BlogPost
  isDarkMode: boolean
}

export default function BlogHeader({ post, isDarkMode }: BlogHeaderProps) {
  return (
    <header className="relative">
      {/* Hero Background */}
      <div className="h-96 relative overflow-hidden">
        {post.featuredImage ? (
          <>
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </>
        ) : (
          <div className={`h-full bg-gradient-to-br ${
            post.id === '1' ? 'from-sky-500 via-blue-600 to-purple-600' :
            post.id === '2' ? 'from-purple-500 via-pink-600 to-red-500' :
            post.id === '3' ? 'from-green-500 via-teal-600 to-blue-600' :
            post.id === '4' ? 'from-orange-500 via-pink-500 to-purple-600' :
            'from-indigo-500 via-purple-600 to-pink-600'
          } animate-gradient-xy`}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Animated particles with glow */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full animate-float ${
                    i % 3 === 0 ? 'w-2 h-2 bg-yellow-300/40 shadow-glow-yellow' :
                    i % 3 === 1 ? 'w-1.5 h-1.5 bg-cyan-300/40 shadow-glow-cyan' :
                    'w-1 h-1 bg-pink-300/40 shadow-glow-pink'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 20}s`
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className={`backdrop-blur-xl rounded-2xl p-8 border shadow-2xl ${
          isDarkMode
            ? 'bg-white/10 border-white/20 shadow-white/5'
            : 'bg-white border-gray-200 shadow-gray-300/50'
        }`}>
          {/* Category & Tags with enhanced frosted glass */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`relative backdrop-blur-md border px-4 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg ${
              isDarkMode
                ? 'bg-white/15 border-white/25 text-white hover:bg-white/20'
                : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'
            }`}>
              {post.category.name}
            </span>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={tag.slug}
                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:scale-105 backdrop-blur-md border shadow-md ${
                  isDarkMode
                    ? 'bg-white/10 border-white/20 text-white/90 hover:bg-white/15'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Title with enhanced frosted glass container */}
          <div className={`backdrop-blur-lg border rounded-xl p-6 mb-6 shadow-xl ${
            isDarkMode
              ? 'bg-white/5 border-white/15'
              : 'bg-gray-50/50 border-gray-200'
          }`}>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h1>
          </div>

          {/* Meta Info with frosted glass background */}
          <div className={`flex flex-wrap items-center gap-6 backdrop-blur-md border rounded-lg p-4 ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-gray-50/50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full overflow-hidden backdrop-blur-sm border flex items-center justify-center text-xs font-bold shadow-lg ${
                isDarkMode
                  ? 'bg-white/20 border-white/30 text-white'
                  : 'bg-gray-200 border-gray-300 text-gray-900'
              }`}>
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  post.author.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{post.author.name}</p>
                <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{post.author.role}</p>
              </div>
            </div>

            <span className={`flex items-center gap-1 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>

            <span className={`flex items-center gap-1 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>

            {/* Share Button */}
            <SocialShare
              title={post.title}
              excerpt={post.excerpt}
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
