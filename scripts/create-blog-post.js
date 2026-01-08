#!/usr/bin/env node

/**
 * TrueFlow Blog Post Generator
 *
 * Usage: node scripts/create-blog-post.js
 *
 * This script creates a new blog post with all necessary files and configurations.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

function getNextId() {
  const blogPostsPath = path.join(__dirname, '../app/data/blog-posts.ts');
  const content = fs.readFileSync(blogPostsPath, 'utf8');

  // Find all IDs
  const idMatches = content.match(/id:\s*'(\d+)'/g);
  if (!idMatches) return '1';

  const ids = idMatches.map(match => parseInt(match.match(/\d+/)[0]));
  const maxId = Math.max(...ids);

  return String(maxId + 1);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const blogPostTemplate = (data) => `'use client'

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
                src="/blog-${data.slug}.jpg"
                alt="${data.title}"
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
                  ${data.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-6">
                ${data.subtitle}
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">${data.authorInitials}</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">${data.authorName}</p>
                  <p className="text-white/60 text-sm">${data.authorRole}</p>
                  ${data.authorSubtitle ? `<p className="text-white/50 text-xs">${data.authorSubtitle}</p>` : ''}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
                <span>${data.displayDate}</span>
                <span>•</span>
                <span>${data.readTime} min read</span>
                <span>•</span>
                <span>${data.categoryDisplay}</span>
              </div>
            </motion.header>
          </div>

          {/* Social Sharing - Full Width Below Header */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap max-w-4xl mx-auto">
            <a
              href={\`https://twitter.com/intent/tweet?text=\${encodeURIComponent('${data.title}\\n\\n${data.subtitle}\\n\\n${data.hashtags}')}&url=\${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}\`}
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
              href={\`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=\${encodeURIComponent('${data.subtitle}')}&title=\${encodeURIComponent('${data.title} | TrueFlow')}\`}
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
              href={\`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=\${encodeURIComponent('${data.title}\\n\\n${data.subtitle}')}\`}
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
                const shareText = "${data.title}\\n\\n${data.subtitle}\\n\\n${data.hashtags}"
                const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                if (navigator.share) {
                  navigator.share({
                    title: '${data.title}',
                    text: shareText,
                    url: shareUrl
                  })
                } else {
                  const fullText = shareText + '\\n\\n' + shareUrl
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
              {/* TODO: Add your blog content here */}

              <p className="text-lg leading-relaxed mb-6">
                Start writing your blog post content here...
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Your First Section
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Add your content...
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/80 mb-6">
              Book a white-glove call with our team to discuss how TrueFlow can help you achieve your goals.
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
`;

async function main() {
  console.log('\n🚀 TrueFlow Blog Post Generator\n');

  // Gather information
  const title = await question('Blog post title: ');
  const subtitle = await question('Subtitle (short description): ');
  const slug = await question(`Slug (press Enter for auto-generated "${slugify(title)}"): `) || slugify(title);

  // Author selection
  console.log('\nSelect author:');
  console.log('1. Matt Gallo');
  console.log('2. Griffin Rutherford');
  const authorChoice = await question('Author (1 or 2): ');

  const authorData = {
    '1': {
      key: 'matt-gallo',
      name: 'Matt Gallo',
      initials: 'MG',
      role: 'Operations Lead & Creative Director, TrueFlow',
      subtitle: 'Former Gym Owner'
    },
    '2': {
      key: 'griffin-rutherford',
      name: 'Griffin Rutherford',
      initials: 'GR',
      role: 'Lead AI Implementation Engineer',
      subtitle: ''
    }
  };

  const author = authorData[authorChoice] || authorData['1'];

  // Category selection
  console.log('\nSelect category:');
  console.log('1. Growth');
  console.log('2. Marketing');
  console.log('3. Automation');
  console.log('4. Events');
  const categoryChoice = await question('Category (1-4): ');

  const categories = {
    '1': { key: 'growth', display: 'Growth' },
    '2': { key: 'marketing', display: 'Marketing' },
    '3': { key: 'automation', display: 'Automation' },
    '4': { key: 'events', display: 'Events' }
  };

  const category = categories[categoryChoice] || categories['1'];

  const readTime = await question('Estimated read time (minutes): ');
  const hashtags = await question('Social media hashtags (e.g., #Leadership #GrowthStrategy): ');

  // Use today's date
  const today = new Date();
  const date = formatDate(today);
  const displayDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const data = {
    title,
    subtitle,
    slug,
    authorKey: author.key,
    authorName: author.name,
    authorInitials: author.initials,
    authorRole: author.role,
    authorSubtitle: author.subtitle,
    categoryKey: category.key,
    categoryDisplay: category.display,
    readTime,
    hashtags,
    date,
    displayDate,
    id: getNextId()
  };

  console.log('\n📝 Creating blog post...\n');

  // Create blog post directory
  const blogDir = path.join(__dirname, '../app/blog', slug);
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
    console.log(`✅ Created directory: app/blog/${slug}/`);
  } else {
    console.log(`⚠️  Directory already exists: app/blog/${slug}/`);
  }

  // Create page.tsx
  const pagePath = path.join(blogDir, 'page.tsx');
  fs.writeFileSync(pagePath, blogPostTemplate(data));
  console.log(`✅ Created: app/blog/${slug}/page.tsx`);

  // Show next steps
  console.log('\n📋 Next Steps:\n');
  console.log(`1. Add header image to: /public/blog-${slug}.jpg`);
  console.log(`   - Recommended size: 1200x600px`);
  console.log(`   - Format: JPG or PNG`);
  console.log('');
  console.log(`2. Add content to: app/blog/${slug}/page.tsx`);
  console.log(`   - Replace the TODO section with your blog content`);
  console.log(`   - Refer to BLOG_FORMATTING_GUIDE.md for formatting options`);
  console.log('');
  console.log('3. Add blog post entry to: app/data/blog-posts.ts');
  console.log('   - Add this entry at the TOP of the blogPosts array:');
  console.log('');
  console.log(`{
  id: '${data.id}',
  slug: '${slug}',
  title: '${title}',
  excerpt: '${subtitle}',
  content: '',
  author: authors['${author.key}'],
  date: '${date}',
  readTime: ${readTime},
  category: categories.${category.key},
  tags: [
    // Add relevant tags here
    operationsTag,
    leadershipTag,
    tags['productivity']
  ],
  primaryTag: operationsTag, // Change to most relevant tag
  featuredImage: {
    url: '/blog-${slug}.jpg',
    alt: '${title}',
    width: 1200,
    height: 600
  },
  seo: {
    metaTitle: '${title} | TrueFlow',
    metaDescription: '${subtitle}',
    keywords: [
      // Add 5-8 relevant keywords
    ]
  },
  published: true
},`);
  console.log('');
  console.log('4. Test locally:');
  console.log('   npm run dev');
  console.log(`   Visit: http://localhost:3001/blog/${slug}`);
  console.log('');
  console.log('5. Commit and push:');
  console.log(`   git add app/blog/${slug}/ app/data/blog-posts.ts public/blog-${slug}.jpg`);
  console.log(`   git commit -m "Add new blog post: ${title}"`);
  console.log('   git push origin production');
  console.log('');

  rl.close();
}

main().catch(console.error);
