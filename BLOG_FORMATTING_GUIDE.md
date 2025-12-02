# TrueFlow AI Blog Formatting Guide

**Version 1.0 | Last Updated: December 2, 2025**

---

## 🚨 CRITICAL INSTRUCTIONS

### Primary Directive: Formatting Only

**YOU MUST:**
- Apply the prescribed formatting structure and styling ONLY
- Maintain exact content provided without modifications
- Follow this guide mechanically and precisely

**YOU MUST NOT:**
- Modify, rewrite, or enhance any content
- Add creative flourishes or embellishments
- Change wording, phrasing, or messaging
- Interpret or improve upon provided text
- Add content that wasn't explicitly provided

---

## Blog Post Structure

Every blog post follows this exact structure:

```
1. Background Effects
2. Navigation Header
3. Article Container
   ├── Header Image (optional)
   ├── Title Section
   ├── Subtitle
   ├── Author Section (optional)
   ├── Meta Information
   ├── Social Sharing Buttons
   └── Content Container
       ├── Content Sections
       └── Call-to-Action (optional)
```

---

## Component Implementation

### 1. Page Container & Background

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
        {/* Content goes here */}
      </div>
    </div>
  )
}
```

**Colors:**
- Background: `bg-black`
- Blur 1: `bg-blue-500/10` (top-left quadrant)
- Blur 2: `bg-purple-500/10` (bottom-right quadrant)

---

### 2. Navigation Header

```tsx
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
```

---

### 3. Header Image (Optional)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-12 rounded-2xl overflow-hidden"
>
  <Image
    src="/blog-header-example.svg"
    alt="Blog post header image"
    width={1200}
    height={600}
    className="w-full h-auto"
    priority
  />
</motion.div>
```

**When to include:** Only if a header image is explicitly provided

---

### 4. Title Section

```tsx
<motion.header
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-center mb-12"
>
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
      {/* Title text here */}
    </span>
  </h1>
  <p className="text-xl text-white/70 mb-8">
    {/* Subtitle text here */}
  </p>
```

**Typography:**
- H1: `text-4xl md:text-5xl font-bold`
- Gradient: `from-cyan-400 to-purple-600`
- Subtitle: `text-xl text-white/70`

---

### 5. Author Section (Optional)

```tsx
<div className="flex items-center justify-center gap-4 mb-8">
  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
    <span className="text-white font-bold text-lg">MG</span>
  </div>
  <div className="text-left">
    <p className="text-white font-semibold">Matt Gallo</p>
    <p className="text-white/60 text-sm">Founder & CEO, TrueFlow AI</p>
  </div>
</div>
```

**When to include:** Only when author information is explicitly provided

**Customization:**
- Initials in avatar circle
- Author name
- Author title/role

---

### 6. Meta Information

```tsx
<div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
  <span>January 15, 2025</span>
  <span>•</span>
  <span>8 min read</span>
  <span>•</span>
  <span>Category Name</span>
</div>
```

**Format:**
- Date, bullet, read time, bullet, category
- Text: `text-sm text-white/60`
- Separator: `•` (bullet character)

---

### 7. Social Sharing Buttons

```tsx
<div className="flex justify-center gap-4 mb-8 flex-wrap">
  {/* X (Twitter) */}
  <a
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Tweet text')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    Share on X
  </a>

  {/* LinkedIn */}
  <a
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&summary=${encodeURIComponent('Summary text')}&title=${encodeURIComponent('Title')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    Share on LinkedIn
  </a>

  {/* Facebook */}
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&quote=${encodeURIComponent('Quote text')}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-blue-700/20 hover:bg-blue-700/30 border border-blue-700/30 rounded-lg transition-colors"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    Share on Facebook
  </a>

  {/* Instagram (Copy to Clipboard) */}
  <button
    onClick={() => {
      const shareText = "Share text for Instagram"
      const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

      if (navigator.share) {
        navigator.share({
          title: 'Title',
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
```

**Button Styles:**
- X: `bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30`
- LinkedIn: `bg-blue-600/20 hover:bg-blue-600/30 border-blue-600/30`
- Facebook: `bg-blue-700/20 hover:bg-blue-700/30 border-blue-700/30`
- Instagram: `bg-pink-500/20 hover:bg-pink-500/30 border-pink-500/30`

---

### 8. Content Container

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
>
  <div className="prose prose-lg prose-invert max-w-none">
    {/* Content here */}
  </div>
</motion.div>
```

**Container:**
- Background: `bg-white/5 backdrop-blur-xl`
- Border: `border border-white/10`
- Padding: `p-8 md:p-12`
- Border radius: `rounded-2xl`

---

## Content Formatting Elements

### Paragraphs

```tsx
<p className="text-lg leading-relaxed mb-6">
  Paragraph text here
</p>
```

**Variants:**
- **Regular:** `text-lg leading-relaxed mb-6`
- **Lead paragraph:** `text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8`
- **Emphasis:** Add `text-white` for stronger emphasis, `text-white/80` for normal

---

### Headings

```tsx
{/* H2 - Main Section */}
<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
  Section Title
</h2>

{/* H3 - Subsection */}
<h3 className="text-2xl font-bold text-white mt-10 mb-4">
  Subsection Title
</h3>

{/* H4 - Feature/Point Title */}
<h4 className="text-xl font-semibold mb-3 text-cyan-400">
  Feature Title
</h4>
```

**Hierarchy:**
- H2: Gradient, 3xl, used for major sections
- H3: White, 2xl, used for subsections
- H4: Cyan-400, xl, used for feature titles or list item headers

---

### Bulleted Lists

```tsx
<ul className="space-y-3 mb-8 ml-6">
  <li className="flex items-start">
    <span className="text-cyan-400 mr-3 mt-1">•</span>
    <span>List item text here</span>
  </li>
  <li className="flex items-start">
    <span className="text-cyan-400 mr-3 mt-1">•</span>
    <span>Another list item</span>
  </li>
</ul>
```

**Styling:**
- Bullet: Cyan-400 (•)
- Spacing: `space-y-3`
- Margin: `ml-6` for indentation

---

### Blockquotes

```tsx
<div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
  <p className="text-lg">
    "Quote text here"
  </p>
</div>
```

**Styling:**
- Background: `bg-white/5`
- Left border: `border-l-4 border-cyan-400`
- Padding: `pl-8 py-6`
- Text: `text-lg` and `italic`

---

### Feature Cards

```tsx
<div className="grid gap-6 mb-8">
  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
    <h4 className="text-xl font-semibold mb-3 text-cyan-400">Card Title</h4>
    <p className="text-white/80">Card description</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
    <h4 className="text-xl font-semibold mb-3 text-cyan-400">Another Card</h4>
    <p className="text-white/80">Another description</p>
  </div>
</div>
```

**Card Styling:**
- Background: `bg-white/5`
- Border: `border border-white/10`
- Padding: `p-6`
- Radius: `rounded-xl`

---

### Call-to-Action Section

```tsx
<div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/30 rounded-2xl">
  <h3 className="text-2xl font-bold text-white mb-4">
    Ready to Transform Your Content Marketing?
  </h3>
  <p className="text-lg text-white/80 mb-6">
    CTA description text
  </p>
  <Link
    href="/sign-up"
    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
  >
    Get Started Today
  </Link>
</div>
```

---

## Color Reference

### Primary Colors
- **Cyan-400**: `#22d3ee` - Primary accent, bullets, links
- **Purple-600**: `#9333ea` - Secondary accent, gradient end
- **Blue-500**: `#3b82f6` - Background effects

### Text Colors
- **White**: `#ffffff` - Main text, headings
- **White/80**: `rgba(255, 255, 255, 0.8)` - Body text
- **White/70**: `rgba(255, 255, 255, 0.7)` - Subtitles
- **White/60**: `rgba(255, 255, 255, 0.6)` - Meta information

### Background Colors
- **Black**: `#000000` - Page background
- **White/10**: `rgba(255, 255, 255, 0.1)` - Borders
- **White/5**: `rgba(255, 255, 255, 0.05)` - Card backgrounds

---

## Animation Standards

### Framer Motion Configuration

```tsx
// Fade in + slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// With delay (for staggered elements)
transition={{ duration: 0.6, delay: 0.2 }}
```

**When to use:**
- Header sections
- Content containers
- Optional for images

---

## Typography Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 | text-5xl (48px) | text-4xl (36px) | bold | tight |
| H2 | text-3xl (30px) | text-3xl (30px) | bold | tight |
| H3 | text-2xl (24px) | text-2xl (24px) | bold | normal |
| H4 | text-xl (20px) | text-xl (20px) | semibold | normal |
| Subtitle | text-xl (20px) | text-xl (20px) | normal | relaxed |
| Body | text-lg (18px) | text-lg (18px) | normal | relaxed |
| Meta | text-sm (14px) | text-sm (14px) | normal | normal |

---

## Spacing Standards

```tsx
// Section spacing
mt-12  // 48px - Major section top margin
mb-12  // 48px - Major section bottom margin
mt-10  // 40px - Subsection top margin
mb-8   // 32px - Content bottom margin
mb-6   // 24px - Paragraph bottom margin

// Content padding
p-8    // 32px - Content container padding (mobile)
p-12   // 48px - Content container padding (desktop)
```

---

## Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: Inherited from tablet

**Key responsive adjustments:**
- Heading sizes: `text-4xl md:text-5xl`
- Padding: `p-8 md:p-12`
- Flexbox wrapping: `flex-wrap`

---

## Checklist for New Blog Posts

Before publishing, verify:

- [ ] Background effects properly positioned
- [ ] Logo is theme-aware (dark/light mode)
- [ ] Title uses gradient styling
- [ ] Author section included (if provided)
- [ ] Date, read time, category properly formatted
- [ ] All 4 social sharing buttons present
- [ ] Content container has backdrop-blur styling
- [ ] H2 headings use gradient
- [ ] H3 headings are white
- [ ] Bullets are cyan-400
- [ ] Blockquotes have cyan left border
- [ ] Feature cards have proper styling
- [ ] CTA section included (if provided)
- [ ] All animations properly configured
- [ ] Mobile responsiveness verified
- [ ] **NO content was modified from original**

---

## Forbidden Actions

❌ **NEVER DO THESE:**
1. Rewrite or rephrase provided content
2. Add explanatory text not in the original
3. Remove or skip provided content
4. Change the tone or voice
5. Add SEO keywords not in original
6. Modify headings or subheadings
7. Restructure content organization
8. Add transitions or connecting phrases
9. Embellish with adjectives or adverbs
10. Interpret or expand on ideas

✅ **ONLY DO THIS:**
- Apply the prescribed visual formatting
- Use exact text as provided
- Follow component structure exactly
- Apply colors and styles mechanically

---

## Examples

### ✅ Correct Implementation

**Input:**
```
Title: Transform Your Content Marketing
Subtitle: The truth about why most strategies fail
Content: Most businesses struggle with content marketing...
```

**Output:**
```tsx
<h1 className="text-4xl md:text-5xl font-bold mb-6">
  <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
    Transform Your Content Marketing
  </span>
</h1>
<p className="text-xl text-white/70 mb-8">
  The truth about why most strategies fail
</p>
<p className="text-lg leading-relaxed mb-6">
  Most businesses struggle with content marketing...
</p>
```

### ❌ Incorrect Implementation

**Input:**
```
Title: Transform Your Content Marketing
```

**Output (WRONG):**
```tsx
<h1>
  <span className="...">
    Revolutionize Your Content Marketing Strategy
  </span>
</h1>
```

**Problem:** Changed "Transform" to "Revolutionize" - this is FORBIDDEN

---

## Questions?

If any formatting scenario is not covered in this guide:
1. Reference existing blog posts in `/app/blog/`
2. Follow the closest matching pattern
3. **Never improvise or add creative interpretations**
4. Ask for clarification before proceeding

---

**Remember: Your role is that of a precise formatter, not a content creator or editor. Apply the styling mechanically without interpretation or enhancement.**
