# Blog Post Quick Start Guide

## Create a New Blog Post (Automated)

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
- Create the blog post directory and page.tsx file
- Generate the proper file structure
- Show you exactly what to add to blog-posts.ts
- Display next steps

## Manual Steps After Running Script

### 1. Add Header Image
```bash
cp /path/to/your/image.jpg public/blog-[your-slug].jpg
```
- **Size**: 1200x600px (2:1 ratio)
- **Format**: JPG or PNG
- **Max size**: 500KB

### 2. Add Content
Edit `app/blog/[your-slug]/page.tsx`:
- Replace the TODO section with your blog content
- Use formatting from `BLOG_FORMATTING_GUIDE.md`

### 3. Update blog-posts.ts
Copy the generated code from the script output and paste it at the **TOP** of the `blogPosts` array in `app/data/blog-posts.ts`.

Add appropriate tags from this list:
```typescript
// Common tags
operationsTag
leadershipTag
cultureTag
tags['productivity']
tags['small-business']
tags['startup']
tags['ai-tools']
tags['content-strategy']
tags['scaling']
// See BLOG_POST_TEMPLATE.md for complete list
```

### 4. Test Locally
```bash
npm run dev
```

Visit:
- Blog post: `http://localhost:3001/blog/[your-slug]`
- Blog index: `http://localhost:3001/blog`

### 5. Commit and Push
```bash
git add app/blog/[your-slug]/ app/data/blog-posts.ts public/blog-[your-slug].jpg
git commit -m "Add new blog post: Your Title"
git push origin production
```

## Common Content Patterns

### Paragraph
```tsx
<p className="text-lg leading-relaxed mb-6">
  Your text here
</p>
```

### H2 Section Heading
```tsx
<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">
  Section Title
</h2>
```

### Bulleted List
```tsx
<ul className="space-y-3 mb-8 ml-6">
  <li className="flex items-start">
    <span className="text-cyan-400 mr-3 mt-1">•</span>
    <span>Item text</span>
  </li>
</ul>
```

### Blockquote
```tsx
<div className="bg-white/5 border-l-4 border-cyan-400 pl-8 py-6 my-8 italic backdrop-blur-sm rounded-r-xl">
  <p className="text-lg">"Your quote"</p>
</div>
```

## Files Reference

- **Template Guide**: `BLOG_POST_TEMPLATE.md`
- **Formatting Guide**: `BLOG_FORMATTING_GUIDE.md`
- **Script**: `scripts/create-blog-post.js`
- **Blog Metadata**: `app/data/blog-posts.ts`
- **Example Posts**:
  - `app/blog/you-should-probably-just-say-it/page.tsx`
  - `app/blog/waiting-for-permission/page.tsx`

## Troubleshooting

**Image not showing?**
- Check: `/public/blog-[slug].jpg` exists
- Verify image name matches in both files
- Clear cache: `rm -rf .next`

**Post not on blog index?**
- Ensure `published: true` in blog-posts.ts
- Check date format: `YYYY-MM-DD`
- Verify entry is at TOP of blogPosts array

**Need help?**
Refer to `BLOG_POST_TEMPLATE.md` for detailed instructions.
