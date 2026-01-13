# TrueFlow Blog Post Creation Guide

## Quick Start Checklist

When creating a new blog post, follow these steps in order:

- [ ] 1. Prepare header image
- [ ] 2. Create blog post file
- [ ] 3. Add blog post metadata to `blog-posts.ts`
- [ ] 4. Test locally
- [ ] 5. Commit and push to production

---

## Step 1: Prepare Header Image

### Image Requirements
- **Dimensions**: 1200x600px recommended (2:1 aspect ratio)
- **Format**: JPG or PNG
- **File size**: < 500KB for optimal performance
- **Naming**: `blog-[slug].jpg` (e.g., `blog-you-should-probably-just-say-it.jpg`)

### Save Location
```bash
/public/blog-[slug].jpg
```

**Example:**
```bash
cp '/path/to/image.jpg' '/public/blog-my-new-post.jpg'
```

---

## Step 2: Create Blog Post File

### File Location
```
/app/blog/[slug]/page.tsx
```

### Use This Template

Save this as `/app/blog/[YOUR-SLUG]/page.tsx`:

```tsx
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
                src="/blog-YOUR-SLUG-HERE.jpg"
                alt="YOUR TITLE HERE"
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
                  YOUR TITLE HERE
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-6">
                YOUR SUBTITLE HERE
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MG</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Matt Gallo</p>
                  <p className="text-white/60 text-sm">Operations Lead & Creative Director, TrueFlow</p>
                  <p className="text-white/50 text-xs">Former Gym Owner</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
                <span>YOUR DATE HERE</span>
                <span>•</span>
                <span>X min read</span>
                <span>•</span>
                <span>YOUR CATEGORY HERE</span>
              </div>
            </motion.header>
          </div>

          {/* Social Sharing - Full Width Below Header */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap max-w-4xl mx-auto">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('YOUR TITLE\n\nYOUR SUBTITLE\n\n#YourHashtags')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
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
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('YOUR SUBTITLE')}&title=${encodeURIComponent('YOUR TITLE | TrueFlow')}`}
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
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('YOUR TITLE\n\nYOUR SUBTITLE')}`}
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
                const shareText = "YOUR TITLE\n\nYOUR SUBTITLE\n\n#YourHashtags"
                const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

                if (navigator.share) {
                  navigator.share({
                    title: 'YOUR TITLE',
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
              {/* YOUR CONTENT HERE */}

              <p className="text-lg leading-relaxed mb-6">
                Your opening paragraph...
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
                Your Section Heading
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Your content...
              </p>

              {/* Add more content sections */}

            </div>
          </motion.div>

          {/* CTA Section (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/30 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Your CTA Heading
            </h3>
            <p className="text-lg text-white/80 mb-6">
              Your CTA description
            </p>
            <Link
              href="https://trueflow.ai/white-glove"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Your CTA Button Text
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
```

---

## Step 3: Add Blog Post Metadata

### Location
`/app/data/blog-posts.ts`

### Add Entry to `blogPosts` Array

Add this at the **TOP** of the `blogPosts` array (newest posts first):

```typescript
{
  id: 'XX', // Increment from last post ID
  slug: 'your-blog-post-slug',
  title: 'Your Blog Post Title',
  excerpt: 'A brief 1-2 sentence description that appears on the blog index page.',
  content: '',
  author: authors['matt-gallo'], // or authors['griffin-rutherford']
  date: 'YYYY-MM-DD', // Format: 2026-01-06
  readTime: 8, // Estimated minutes to read
  category: categories.growth, // or categories.marketing, categories.automation
  tags: [
    operationsTag,
    leadershipTag,
    tags['productivity'],
    tags['small-business']
  ],
  primaryTag: operationsTag, // Most relevant tag
  featuredImage: {
    url: '/blog-your-slug.jpg',
    alt: 'Your Blog Post Title',
    width: 1200,
    height: 600
  },
  seo: {
    metaTitle: 'Your Blog Post Title | TrueFlow',
    metaDescription: 'A slightly longer description (155 chars max) that appears in search results.',
    keywords: [
      'keyword 1',
      'keyword 2',
      'keyword 3',
      'keyword 4',
      'keyword 5'
    ]
  },
  published: true
},
```

### Available Tags Reference

```typescript
// Main Tag Categories
leadershipTag
operationsTag
cultureTag

// Tags from tags object
tags['voice-to-content']
tags['email-marketing']
tags['ai-tools']
tags['crm']
tags['workflow-automation']
tags['time-management']
tags['lead-generation']
tags['conversion-optimization']
tags['analytics']
tags['business-blogging']
tags['content-strategy']
tags['lead-nurturing']
tags['seo']
tags['social-media']
tags['productivity']
tags['customer-experience']
tags['sales-automation']
tags['data-driven']
tags['scaling']
tags['startup']
tags['enterprise']
tags['small-business']
tags['b2b']
tags['b2c']
tags['saas']
tags['ecommerce']
tags['storytelling']
```

### Available Categories

```typescript
categories.marketing
categories.automation
categories.growth
categories.events
```

---

## Step 4: Test Locally

```bash
# Start dev server (if not already running)
npm run dev

# Visit your new blog post
http://localhost:3001/blog/your-slug

# Check blog index page
http://localhost:3001/blog
```

### Verify Checklist
- [ ] Header image loads correctly
- [ ] Title and subtitle display properly
- [ ] Author info shows correctly
- [ ] Date, read time, and category are correct
- [ ] Social share buttons work
- [ ] Content formatting looks good
- [ ] CTA section displays (if included)
- [ ] Blog post appears on main blog page with thumbnail
- [ ] Mobile responsive (test different screen sizes)

---

## Step 5: Commit and Push to Production

```bash
# Stage all changes
git add app/blog/your-slug/page.tsx app/data/blog-posts.ts public/blog-your-slug.jpg

# Commit with descriptive message
git commit -m "$(cat <<'EOF'
Add new blog post: Your Title Here

- Created new blog post about [topic]
- Added header image with side-by-side layout
- Added to blog-posts.ts with proper metadata and SEO
- Date: Month Day, Year
- Read time: X minutes
- Category: Your Category

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Push to production
git push origin production
```

---

## Content Formatting Guide

### Paragraphs
```tsx
<p className="text-lg leading-relaxed mb-6">
  Your paragraph text
</p>
```

### H2 Section Headings (Main Sections)
```tsx
<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
  Section Title
</h2>
```

### H3 Subsection Headings
```tsx
<h3 className="text-2xl font-bold text-white mt-10 mb-4">
  Subsection Title
</h3>
```

### Bulleted Lists
```tsx
<ul className="space-y-3 mb-8 ml-6">
  <li className="flex items-start">
    <span className="text-cyan-400 mr-3 mt-1">•</span>
    <span>List item text</span>
  </li>
  <li className="flex items-start">
    <span className="text-cyan-400 mr-3 mt-1">•</span>
    <span>Another item</span>
  </li>
</ul>
```

### Blockquotes
```tsx
<div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
  <p className="text-lg">
    "Your quote here"
  </p>
</div>
```

### Feature Cards
```tsx
<div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
  <h4 className="text-xl font-semibold mb-3 text-cyan-400">Card Title</h4>
  <p className="text-white/80">Card description</p>
</div>
```

### Emphasis
```tsx
<em>Italic text</em>
<strong>Bold text</strong>
```

### Line Breaks
```tsx
<br />
```

---

## Common Patterns

### Multiple Paragraphs with Line Breaks
```tsx
<p className="text-lg leading-relaxed mb-6">
  First line<br />
  Second line<br />
  Third line
</p>
```

### Short Staccato Lines
```tsx
<p className="text-lg leading-relaxed mb-2">
  Short line.
</p>
<p className="text-lg leading-relaxed mb-2">
  Another short line.
</p>
<p className="text-lg leading-relaxed mb-8">
  Final line with more bottom margin.
</p>
```

---

## Quick Reference: File Paths

```
Blog Post Page:
/app/blog/[slug]/page.tsx

Blog Metadata:
/app/data/blog-posts.ts

Header Image:
/public/blog-[slug].jpg

Blog Index:
/app/blog/page.tsx (auto-updates from blog-posts.ts)
```

---

## Troubleshooting

### Image not showing
- Check file path: `/public/blog-[slug].jpg`
- Verify image name matches in both `page.tsx` and `blog-posts.ts`
- Clear Next.js cache: `rm -rf .next`

### Blog post not appearing on index page
- Verify `published: true` in blog-posts.ts
- Check date format: `YYYY-MM-DD`
- Ensure entry is at top of blogPosts array (newest first)

### Styling looks different
- Compare against existing blog posts
- Check for typos in className props
- Verify all imports at top of file

---

## Example: Complete Workflow

```bash
# 1. Copy header image
cp ~/Desktop/my-image.jpg /path/to/project/public/blog-my-new-post.jpg

# 2. Create blog post file
mkdir -p app/blog/my-new-post
# Copy template and customize

# 3. Update blog-posts.ts
# Add entry at top of blogPosts array

# 4. Test locally
npm run dev
# Visit http://localhost:3001/blog/my-new-post

# 5. Commit and push
git add app/blog/my-new-post/ app/data/blog-posts.ts public/blog-my-new-post.jpg
git commit -m "Add new blog post: My New Post"
git push origin production
```

---

## Notes

- **Date Format**: Always use YYYY-MM-DD (e.g., 2026-01-06)
- **Slug Format**: Use kebab-case (e.g., my-blog-post-title)
- **Image Alt Text**: Should match the blog post title
- **Read Time**: Estimate 200-250 words per minute
- **Author**: Currently only Matt Gallo and Griffin Rutherford
- **Blog posts appear in reverse chronological order** (newest first)
- **Featured image appears as thumbnail** on main blog page automatically

---

**For detailed formatting examples, refer to:**
- `BLOG_FORMATTING_GUIDE.md` - Complete formatting specifications
- `/app/blog/you-should-probably-just-say-it/page.tsx` - Reference implementation
- `/app/blog/waiting-for-permission/page.tsx` - Another reference implementation
