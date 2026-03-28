# Blog Post Quick Start Guide

## Branch & Deploy Overview

| Branch | Environment | Auto-deploys on push |
|--------|-------------|----------------------|
| `main` | Staging (Railway) | Yes |
| `production` | Production / trueflow.ai | Yes |

**Always commit to `main` first, then merge to `production` to go live.**

---

## Option A — Automated (Recommended)

Run the blog post generator script:

```bash
node scripts/create-blog-post.js
```

The script will prompt you for:
- Blog post title
- Subtitle
- Slug (auto-generated from title)
- Author (Matt or Griffin)
- Category (Growth, Marketing, Automation, Events)
- Read time
- Social media hashtags

It will automatically:
- Create the blog post directory and `page.tsx` file
- Generate the proper file structure
- Show you exactly what to add to `blog-posts.ts`

---

## Option B — Manual (Step-by-Step)

### Step 1 — Write your content

Save a draft to `/blog-posts/YYYY-MM-DD-your-slug.md` using the frontmatter format:

```markdown
---
title: "Your Blog Post Title"
date: YYYY-MM-DD
author: "TrueFlow AI"
description: "One-sentence description for SEO."
---

# Your Blog Post Title

Body content here...
```

### Step 2 — Create the route directory

```bash
mkdir app/blog/your-slug
```

### Step 3 — Create `page.tsx`

Copy an existing post as a template, e.g.:

```bash
cp app/blog/stop-duct-taping-your-marketing-stack/page.tsx app/blog/your-slug/page.tsx
```

Then edit the file:
- Update `<h1>` title text
- Update meta date, read time, category in the header
- Replace all content inside the `<div className="prose ...">` block
- Update social share copy (X, LinkedIn, Facebook, Instagram button text)

**Formatting reference** — `BLOG_FORMATTING_GUIDE.md`

Key class patterns:
```tsx
// H2 section heading
<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
  Section Title
</h2>

// Body paragraph
<p className="text-lg leading-relaxed mb-6 text-white/80">
  Paragraph text here.
</p>

// Bulleted list
<ul className="space-y-3 mb-8 ml-6">
  <li className="flex items-start">
    <span className="text-cyan-400 mr-3 mt-1">•</span>
    <span>Item text</span>
  </li>
</ul>

// Blockquote / callout
<div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
  <p className="text-lg">"Your quote"</p>
</div>
```

> **Important:** Always escape apostrophes as `&apos;` and quotes as `&quot;` in JSX to avoid build errors.

### Step 4 — Add entry to `blog-posts.ts`

Open `app/data/blog-posts.ts` and add a new object at the **bottom** of the `blogPosts` array (before the closing `]`). Use the next sequential ID number.

```typescript
{
  id: '14',                          // increment from last post
  slug: 'your-slug',
  title: "Your Blog Post Title",
  excerpt: "One or two sentence teaser shown on the blog index.",
  content: ``,                       // can leave empty — content lives in page.tsx
  author: authors['matt-gallo'],     // or authors['griffin-rutherford']
  date: '2026-03-29',
  readTime: 5,
  category: categories.marketing,   // marketing | automation | growth | events
  tags: [tags['workflow-automation'], tags['lead-generation']],
  primaryTag: tags['workflow-automation'],
  featuredImage: {
    url: 'https://images.unsplash.com/photo-XXXXXXX?w=1200&h=630&fit=crop',
    alt: 'Descriptive alt text',
    width: 1200,
    height: 630
  },
  seo: {
    metaTitle: "Your Blog Post Title | TrueFlow AI",
    metaDescription: "Under 160 characters for Google.",
    keywords: ['keyword one', 'keyword two', 'keyword three']
  },
  published: true
}
```

**Available tags** (most common):
```
tags['workflow-automation']   tags['lead-generation']    tags['crm']
tags['sales-automation']      tags['content-strategy']   tags['ai-tools']
tags['email-marketing']       tags['analytics']          tags['integration']
tags['productivity']          tags['scaling']            tags['small-business']
operationsTag                 leadershipTag              cultureTag
```

### Step 5 — Test locally

```bash
npm run dev
```

Visit:
- Blog post: `http://localhost:3001/blog/your-slug`
- Blog index: `http://localhost:3001/blog`

Check that:
- Post appears on the blog index page
- Post page renders without errors
- Social share buttons have the correct copy

### Step 6 — Commit and push

```bash
# Stage only the new post files
git add app/blog/your-slug/ app/data/blog-posts.ts

# Commit with version number
git commit -m "v2.0XX — Daily blog post: Your Title (YYYY-MM-DD)"

# Push to staging first
git push origin main

# Then deploy to production
git checkout production
git merge main
git push origin production
git checkout main
```

Railway auto-deploys both environments on push. Production is live at **trueflow.ai/blog/your-slug** within ~2 minutes.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Post not on blog index | Check `published: true` and date format `YYYY-MM-DD` in `blog-posts.ts` |
| Build error: `'` or `"` in JSX | Escape as `&apos;` / `&quot;` |
| Featured image not loading | Use a full Unsplash URL with `?w=1200&h=630&fit=crop` or put image in `/public/` |
| Styling looks off | Compare against `app/blog/stop-duct-taping-your-marketing-stack/page.tsx` |
| Old build cached | Run `rm -rf .next && npm run dev` |

---

## Files Reference

| File | Purpose |
|------|---------|
| `BLOG_FORMATTING_GUIDE.md` | Complete style guide with all component patterns |
| `BLOG_POST_TEMPLATE.md` | Detailed template with all section options |
| `scripts/create-blog-post.js` | Automated post scaffolding script |
| `app/data/blog-posts.ts` | Blog metadata, SEO, and post index |
| `app/blog/[slug]/page.tsx` | Individual post page component |
| `blog-posts/` | Markdown drafts (not served, just for reference) |
