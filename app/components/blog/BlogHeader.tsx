'use client'

import { Calendar, Clock } from 'lucide-react'
import type { BlogPost } from '@/app/types/blog'
import Image from 'next/image'
import SocialShare from './SocialShare'

interface BlogHeaderProps {
  post: BlogPost
}

export default function BlogHeader({ post }: BlogHeaderProps) {
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
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl shadow-white/5">
          {/* Category & Tags with enhanced frosted glass */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="relative bg-white/15 backdrop-blur-md border border-white/25 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
              {post.category.name}
            </span>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={tag.slug} 
                className="px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white/15 shadow-md"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Title with enhanced frosted glass container */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/15 rounded-xl p-6 mb-6 shadow-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              {post.title}
            </h1>
          </div>

          {/* Meta Info with frosted glass background */}
          <div className="flex flex-wrap items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xs font-bold shadow-lg">
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
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-sm text-white/70">{post.author.role}</p>
              </div>
            </div>
            
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