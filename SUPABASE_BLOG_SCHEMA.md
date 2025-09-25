# TrueFlow Blog Platform - Supabase PostgreSQL Schema Design

## Executive Summary

This document outlines the complete PostgreSQL database schema for implementing a Substack-like blog platform with AI-powered content generation features. The design supports multi-tenancy, monetization, advanced content management, and seamless AI integration.

## Core Design Principles

1. **Multi-tenancy**: Each user can have their own publication
2. **Monetization Ready**: Built-in subscription and payment tracking
3. **AI-First**: Optimized for AI content generation and voice-to-blog workflows
4. **Performance**: Proper indexing and materialized views for fast queries
5. **Extensibility**: JSONB fields for flexible metadata storage
6. **Security**: Row Level Security (RLS) policies for all tables

## Database Schema

### 1. Users & Authentication (extends Supabase Auth)

```sql
-- User profiles extending Supabase auth.users
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255),
    bio TEXT,
    avatar_url TEXT,
    cover_image_url TEXT,
    website_url TEXT,
    social_links JSONB DEFAULT '{}',

    -- Professional info
    role VARCHAR(255),
    company VARCHAR(255),
    location VARCHAR(255),

    -- Settings
    email_notifications JSONB DEFAULT '{"new_subscriber": true, "new_comment": true, "weekly_digest": true}',
    preferences JSONB DEFAULT '{}',

    -- Stats (denormalized for performance)
    total_posts INTEGER DEFAULT 0,
    total_subscribers INTEGER DEFAULT 0,
    total_views BIGINT DEFAULT 0,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_user_profiles_username ON user_profiles(username);
CREATE INDEX idx_user_profiles_created_at ON user_profiles(created_at DESC);
```

### 2. Publications (Blog/Newsletter Properties)

```sql
CREATE TABLE public.publications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,

    -- Basic info
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    about_content TEXT, -- Full about page content

    -- Branding
    logo_url TEXT,
    cover_image_url TEXT,
    accent_color VARCHAR(7) DEFAULT '#3B82F6',

    -- Domain settings
    custom_domain VARCHAR(255),
    subdomain VARCHAR(255) UNIQUE, -- username.trueflow.ai

    -- Monetization
    is_monetized BOOLEAN DEFAULT FALSE,
    subscription_price_monthly DECIMAL(10,2),
    subscription_price_yearly DECIMAL(10,2),
    stripe_account_id TEXT,
    stripe_product_id TEXT,

    -- AI Content Settings
    ai_voice_profile JSONB DEFAULT '{}', -- Stores voice characteristics for AI
    ai_writing_style JSONB DEFAULT '{}', -- Style preferences
    ai_topic_preferences TEXT[], -- Preferred topics
    default_content_template TEXT, -- Template for AI generation

    -- Publication settings
    is_public BOOLEAN DEFAULT TRUE,
    require_subscription BOOLEAN DEFAULT FALSE,
    allow_comments BOOLEAN DEFAULT TRUE,
    moderation_enabled BOOLEAN DEFAULT FALSE,

    -- SEO
    seo_title TEXT,
    seo_description TEXT,
    seo_keywords TEXT[],

    -- Analytics
    total_subscribers INTEGER DEFAULT 0,
    total_posts INTEGER DEFAULT 0,
    total_views BIGINT DEFAULT 0,

    -- Metadata
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_publications_owner ON publications(owner_id);
CREATE INDEX idx_publications_slug ON publications(slug);
CREATE INDEX idx_publications_subdomain ON publications(subdomain);
```

### 3. Blog Posts

```sql
CREATE TABLE public.posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publication_id UUID NOT NULL REFERENCES publications(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES user_profiles(id),

    -- Content
    title TEXT NOT NULL,
    slug VARCHAR(500) NOT NULL,
    subtitle TEXT,
    content TEXT NOT NULL, -- Main content in Markdown
    content_html TEXT, -- Pre-rendered HTML for performance
    excerpt TEXT,

    -- AI Generation metadata
    ai_generated BOOLEAN DEFAULT FALSE,
    ai_generation_method VARCHAR(50), -- 'voice', 'prompt', 'outline', etc.
    ai_source_transcript TEXT, -- Original voice transcript if applicable
    ai_generation_params JSONB, -- Parameters used for generation
    ai_model_version VARCHAR(50),

    -- Publishing
    status VARCHAR(20) DEFAULT 'draft', -- draft, scheduled, published, archived
    published_at TIMESTAMPTZ,
    scheduled_for TIMESTAMPTZ,

    -- Access control
    is_public BOOLEAN DEFAULT TRUE,
    is_subscriber_only BOOLEAN DEFAULT FALSE,
    is_paid_only BOOLEAN DEFAULT FALSE,

    -- Features
    featured_image_url TEXT,
    featured_image_alt TEXT,
    featured_image_caption TEXT,

    -- Engagement
    allow_comments BOOLEAN DEFAULT TRUE,
    view_count BIGINT DEFAULT 0,
    like_count INTEGER DEFAULT 0,
    comment_count INTEGER DEFAULT 0,
    share_count INTEGER DEFAULT 0,

    -- SEO
    seo_title TEXT,
    seo_description TEXT,
    seo_keywords TEXT[],
    canonical_url TEXT,

    -- Reading experience
    reading_time_minutes INTEGER,
    word_count INTEGER,

    -- Newsletter
    sent_as_newsletter BOOLEAN DEFAULT FALSE,
    newsletter_sent_at TIMESTAMPTZ,
    email_subject TEXT,
    email_preview_text TEXT,

    -- Versioning
    version INTEGER DEFAULT 1,
    previous_version_id UUID REFERENCES posts(id),

    -- Metadata
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(publication_id, slug)
);

-- Indexes for performance
CREATE INDEX idx_posts_publication ON posts(publication_id);
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_publication_slug ON posts(publication_id, slug);
```

### 4. Categories & Tags

```sql
-- Categories (hierarchical)
CREATE TABLE public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publication_id UUID REFERENCES publications(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES categories(id) ON DELETE CASCADE,

    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    color VARCHAR(7),
    icon VARCHAR(50),

    post_count INTEGER DEFAULT 0,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(publication_id, slug)
);

-- Tags
CREATE TABLE public.tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,

    -- Global usage stats
    usage_count INTEGER DEFAULT 0,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Post-Category relationship
CREATE TABLE public.post_categories (
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    is_primary BOOLEAN DEFAULT FALSE,

    PRIMARY KEY(post_id, category_id)
);

-- Post-Tag relationship
CREATE TABLE public.post_tags (
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,

    PRIMARY KEY(post_id, tag_id)
);

CREATE INDEX idx_post_categories_post ON post_categories(post_id);
CREATE INDEX idx_post_categories_category ON post_categories(category_id);
CREATE INDEX idx_post_tags_post ON post_tags(post_id);
CREATE INDEX idx_post_tags_tag ON post_tags(tag_id);
```

### 5. Subscriptions & Monetization

```sql
-- Subscriber relationships
CREATE TABLE public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publication_id UUID NOT NULL REFERENCES publications(id) ON DELETE CASCADE,
    subscriber_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,

    -- Subscription type
    tier VARCHAR(20) DEFAULT 'free', -- free, paid_monthly, paid_yearly

    -- Payment info
    stripe_subscription_id TEXT,
    stripe_customer_id TEXT,

    -- Status
    status VARCHAR(20) DEFAULT 'active', -- active, cancelled, expired, paused

    -- Dates
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    current_period_start TIMESTAMPTZ,
    current_period_end TIMESTAMPTZ,
    cancelled_at TIMESTAMPTZ,

    -- Email preferences
    email_frequency VARCHAR(20) DEFAULT 'immediate', -- immediate, daily, weekly, never

    metadata JSONB DEFAULT '{}',

    UNIQUE(publication_id, subscriber_id)
);

-- Payment history
CREATE TABLE public.payment_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,

    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',

    stripe_payment_intent_id TEXT,
    stripe_invoice_id TEXT,

    status VARCHAR(20), -- succeeded, failed, pending

    period_start TIMESTAMPTZ,
    period_end TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_publication ON subscriptions(publication_id);
CREATE INDEX idx_subscriptions_subscriber ON subscriptions(subscriber_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
```

### 6. Comments & Engagement

```sql
-- Comments with threading support
CREATE TABLE public.comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES user_profiles(id),
    parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,

    content TEXT NOT NULL,
    content_html TEXT,

    -- Moderation
    status VARCHAR(20) DEFAULT 'published', -- published, pending, spam, deleted

    -- Engagement
    like_count INTEGER DEFAULT 0,
    reply_count INTEGER DEFAULT 0,

    -- Metadata
    edited_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Likes/reactions
CREATE TABLE public.post_likes (
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY(post_id, user_id)
);

CREATE TABLE public.comment_likes (
    comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    PRIMARY KEY(comment_id, user_id)
);

CREATE INDEX idx_comments_post ON comments(post_id);
CREATE INDEX idx_comments_author ON comments(author_id);
CREATE INDEX idx_comments_parent ON comments(parent_id);
```

### 7. AI Content Generation Queue

```sql
-- Queue for AI content generation tasks
CREATE TABLE public.ai_generation_queue (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES user_profiles(id),
    publication_id UUID REFERENCES publications(id),

    -- Task details
    task_type VARCHAR(50) NOT NULL, -- voice_to_blog, prompt_to_blog, newsletter, social_posts

    -- Input
    input_data JSONB NOT NULL, -- Contains prompts, transcripts, settings
    voice_file_url TEXT,

    -- Output
    output_data JSONB, -- Generated content
    post_id UUID REFERENCES posts(id), -- If a post was created

    -- Status
    status VARCHAR(20) DEFAULT 'pending', -- pending, processing, completed, failed
    priority INTEGER DEFAULT 0,

    -- Processing info
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    error_message TEXT,
    retry_count INTEGER DEFAULT 0,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_queue_status ON ai_generation_queue(status);
CREATE INDEX idx_ai_queue_user ON ai_generation_queue(user_id);
CREATE INDEX idx_ai_queue_created ON ai_generation_queue(created_at);
```

### 8. Analytics & Metrics

```sql
-- Page views tracking
CREATE TABLE public.post_views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    viewer_id UUID REFERENCES user_profiles(id),

    -- Viewer info
    ip_address INET,
    user_agent TEXT,
    referrer TEXT,

    -- Reading metrics
    time_on_page INTEGER, -- seconds
    scroll_depth DECIMAL(5,2), -- percentage

    -- Location
    country VARCHAR(2),
    region VARCHAR(100),
    city VARCHAR(100),

    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Aggregated daily stats
CREATE TABLE public.publication_stats_daily (
    publication_id UUID REFERENCES publications(id) ON DELETE CASCADE,
    date DATE NOT NULL,

    -- Metrics
    new_posts INTEGER DEFAULT 0,
    total_views INTEGER DEFAULT 0,
    unique_visitors INTEGER DEFAULT 0,
    new_subscribers INTEGER DEFAULT 0,
    total_comments INTEGER DEFAULT 0,

    -- Engagement rates
    avg_time_on_page INTEGER,
    avg_scroll_depth DECIMAL(5,2),

    PRIMARY KEY(publication_id, date)
);

CREATE INDEX idx_post_views_post ON post_views(post_id);
CREATE INDEX idx_post_views_created ON post_views(created_at);
CREATE INDEX idx_pub_stats_daily ON publication_stats_daily(publication_id, date DESC);
```

### 9. Email Campaigns

```sql
-- Email campaigns for newsletters
CREATE TABLE public.email_campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publication_id UUID NOT NULL REFERENCES publications(id) ON DELETE CASCADE,
    post_id UUID REFERENCES posts(id),

    -- Campaign details
    subject TEXT NOT NULL,
    preview_text TEXT,
    content_html TEXT NOT NULL,

    -- Recipients
    recipient_count INTEGER DEFAULT 0,
    recipient_filter JSONB, -- Criteria for selecting recipients

    -- Status
    status VARCHAR(20) DEFAULT 'draft', -- draft, scheduled, sending, sent, failed
    scheduled_for TIMESTAMPTZ,

    -- Stats
    sent_count INTEGER DEFAULT 0,
    delivered_count INTEGER DEFAULT 0,
    opened_count INTEGER DEFAULT 0,
    clicked_count INTEGER DEFAULT 0,
    unsubscribed_count INTEGER DEFAULT 0,

    -- Sending info
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,

    -- Provider info
    provider VARCHAR(50), -- resend, sendgrid, mailgun
    provider_campaign_id TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Track individual email sends
CREATE TABLE public.email_sends (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID REFERENCES email_campaigns(id) ON DELETE CASCADE,
    recipient_id UUID REFERENCES user_profiles(id),

    email_address TEXT NOT NULL,

    -- Status
    status VARCHAR(20) DEFAULT 'pending', -- pending, sent, delivered, opened, clicked, bounced, unsubscribed

    -- Tracking
    sent_at TIMESTAMPTZ,
    delivered_at TIMESTAMPTZ,
    opened_at TIMESTAMPTZ,
    clicked_at TIMESTAMPTZ,
    bounced_at TIMESTAMPTZ,
    unsubscribed_at TIMESTAMPTZ,

    -- Provider info
    provider_message_id TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_email_campaigns_publication ON email_campaigns(publication_id);
CREATE INDEX idx_email_sends_campaign ON email_sends(campaign_id);
CREATE INDEX idx_email_sends_recipient ON email_sends(recipient_id);
```

### 10. Content Templates & Themes

```sql
-- Templates for different content types
CREATE TABLE public.content_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publication_id UUID REFERENCES publications(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- blog_post, newsletter, social_post

    -- Template content
    template_structure JSONB, -- Structured template data
    default_styles JSONB, -- CSS/styling preferences

    -- AI instructions
    ai_instructions TEXT, -- Special instructions for AI when using this template

    is_default BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Publication themes
CREATE TABLE public.themes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    name VARCHAR(255) NOT NULL,
    description TEXT,

    -- Theme configuration
    colors JSONB,
    fonts JSONB,
    layout_config JSONB,
    custom_css TEXT,

    -- Availability
    is_public BOOLEAN DEFAULT TRUE,
    is_premium BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.publication_themes (
    publication_id UUID REFERENCES publications(id) ON DELETE CASCADE,
    theme_id UUID REFERENCES themes(id) ON DELETE CASCADE,

    -- Customizations
    custom_colors JSONB,
    custom_fonts JSONB,
    custom_css TEXT,

    is_active BOOLEAN DEFAULT TRUE,

    PRIMARY KEY(publication_id, theme_id)
);
```

## Row Level Security (RLS) Policies

```sql
-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- User profiles: Users can read all, update their own
CREATE POLICY "Users can view all profiles" ON user_profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

-- Publications: Public read, owner write
CREATE POLICY "Public publications are viewable" ON publications
    FOR SELECT USING (is_public = true OR owner_id = auth.uid());

CREATE POLICY "Owners can update their publications" ON publications
    FOR ALL USING (owner_id = auth.uid());

-- Posts: Complex visibility rules
CREATE POLICY "Public posts are viewable" ON posts
    FOR SELECT USING (
        status = 'published'
        AND published_at <= NOW()
        AND (
            is_public = true
            OR author_id = auth.uid()
            OR EXISTS (
                SELECT 1 FROM subscriptions
                WHERE publication_id = posts.publication_id
                AND subscriber_id = auth.uid()
                AND status = 'active'
            )
        )
    );

CREATE POLICY "Authors can manage their posts" ON posts
    FOR ALL USING (author_id = auth.uid());
```

## Functions & Triggers

```sql
-- Auto-update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_publications_updated_at BEFORE UPDATE ON publications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Calculate reading time
CREATE OR REPLACE FUNCTION calculate_reading_time(content TEXT)
RETURNS INTEGER AS $$
DECLARE
    word_count INTEGER;
    wpm INTEGER := 200; -- Average reading speed
BEGIN
    word_count := array_length(string_to_array(content, ' '), 1);
    RETURN GREATEST(1, CEIL(word_count::DECIMAL / wpm));
END;
$$ LANGUAGE plpgsql;

-- Auto-generate slug
CREATE OR REPLACE FUNCTION generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN LOWER(
        REGEXP_REPLACE(
            REGEXP_REPLACE(
                REGEXP_REPLACE(
                    REGEXP_REPLACE(
                        title,
                        '[^a-zA-Z0-9\s-]', '', 'g'
                    ),
                    '\s+', '-', 'g'
                ),
                '^-+', '', 'g'
            ),
            '-+$', '', 'g'
        )
    );
END;
$$ LANGUAGE plpgsql;

-- Increment view count
CREATE OR REPLACE FUNCTION increment_post_views(post_uuid UUID, viewer_uuid UUID DEFAULT NULL)
RETURNS VOID AS $$
BEGIN
    -- Update post view count
    UPDATE posts
    SET view_count = view_count + 1
    WHERE id = post_uuid;

    -- Log the view
    INSERT INTO post_views (post_id, viewer_id, created_at)
    VALUES (post_uuid, viewer_uuid, NOW());
END;
$$ LANGUAGE plpgsql;
```

## Materialized Views for Performance

```sql
-- Popular posts view
CREATE MATERIALIZED VIEW popular_posts AS
SELECT
    p.*,
    pub.name as publication_name,
    pub.slug as publication_slug,
    u.display_name as author_name,
    u.avatar_url as author_avatar
FROM posts p
JOIN publications pub ON p.publication_id = pub.id
JOIN user_profiles u ON p.author_id = u.id
WHERE p.status = 'published'
    AND p.published_at <= NOW()
    AND p.is_public = true
ORDER BY
    (p.view_count * 0.3 + p.like_count * 0.4 + p.comment_count * 0.3) DESC,
    p.published_at DESC
LIMIT 100;

-- Refresh periodically
CREATE INDEX idx_popular_posts_score ON popular_posts((view_count * 0.3 + like_count * 0.4 + comment_count * 0.3) DESC);

-- Author stats view
CREATE MATERIALIZED VIEW author_stats AS
SELECT
    u.id as author_id,
    COUNT(DISTINCT p.id) as total_posts,
    SUM(p.view_count) as total_views,
    SUM(p.like_count) as total_likes,
    SUM(p.comment_count) as total_comments,
    AVG(p.reading_time_minutes) as avg_reading_time,
    COUNT(DISTINCT DATE(p.published_at)) as days_published
FROM user_profiles u
LEFT JOIN posts p ON u.id = p.author_id AND p.status = 'published'
GROUP BY u.id;

CREATE INDEX idx_author_stats_author ON author_stats(author_id);
```

## Migration Strategy

### Phase 1: Core Tables
1. Create user_profiles extending Supabase auth
2. Create publications table
3. Create posts table with basic fields
4. Set up RLS policies

### Phase 2: Content Features
1. Add categories and tags
2. Create relationships tables
3. Add comments system
4. Set up engagement tracking

### Phase 3: AI Integration
1. Create AI generation queue
2. Add AI metadata fields to posts
3. Set up voice profile storage

### Phase 4: Monetization
1. Add subscription tables
2. Create payment history tracking
3. Integrate Stripe webhooks

### Phase 5: Analytics & Optimization
1. Create analytics tables
2. Set up materialized views
3. Add performance indexes

## API Integration Examples

### Creating a Post from Voice Recording

```typescript
// Example: Creating a post from voice recording
async function createPostFromVoice(voiceUrl: string, userId: string) {
  // 1. Create AI generation task
  const { data: task } = await supabase
    .from('ai_generation_queue')
    .insert({
      user_id: userId,
      task_type: 'voice_to_blog',
      input_data: { voice_url: voiceUrl },
      voice_file_url: voiceUrl
    })
    .select()
    .single();

  // 2. Process with AI (in background worker)
  // ... AI processing ...

  // 3. Create the post
  const { data: post } = await supabase
    .from('posts')
    .insert({
      publication_id: publicationId,
      author_id: userId,
      title: generatedTitle,
      content: generatedContent,
      ai_generated: true,
      ai_generation_method: 'voice',
      ai_source_transcript: transcript,
      status: 'draft'
    })
    .select()
    .single();

  return post;
}
```

### Fetching Posts for a Publication

```typescript
// Example: Fetching paginated posts with filters
async function getPublicationPosts(
  publicationSlug: string,
  page = 1,
  limit = 10
) {
  const offset = (page - 1) * limit;

  const { data: posts } = await supabase
    .from('posts')
    .select(`
      *,
      author:user_profiles!author_id(
        display_name,
        avatar_url,
        bio
      ),
      categories:post_categories(
        category:categories(*)
      ),
      tags:post_tags(
        tag:tags(*)
      )
    `)
    .eq('publications.slug', publicationSlug)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1);

  return posts;
}
```

## Performance Considerations

1. **Indexing Strategy**
   - Index all foreign keys
   - Index commonly queried fields (slug, status, published_at)
   - Use composite indexes for multi-column queries

2. **Caching Strategy**
   - Cache popular posts in Redis
   - Use materialized views for expensive aggregations
   - Implement CDN for static content

3. **Query Optimization**
   - Use pagination for all list queries
   - Implement cursor-based pagination for infinite scroll
   - Batch updates where possible

4. **Data Archival**
   - Move old analytics data to separate tables
   - Archive deleted content instead of hard delete
   - Implement data retention policies

## Security Best Practices

1. **Authentication & Authorization**
   - Use Supabase Auth for user management
   - Implement RLS policies for all tables
   - Use service role only for admin operations

2. **Data Validation**
   - Validate all input on both client and server
   - Sanitize HTML content before storage
   - Use parameterized queries

3. **Rate Limiting**
   - Implement rate limiting for API endpoints
   - Throttle AI generation requests
   - Limit comment posting frequency

4. **Monitoring**
   - Log all data modifications
   - Monitor for unusual access patterns
   - Set up alerts for failed payments

## Conclusion

This schema provides a robust foundation for building a Substack-like platform with AI-powered content generation. The design is:

- **Scalable**: Can handle millions of posts and users
- **Flexible**: JSONB fields allow for easy extension
- **Secure**: RLS policies protect user data
- **Performance-optimized**: Proper indexing and materialized views
- **AI-ready**: Built-in support for voice-to-blog and AI generation

The modular design allows for incremental implementation, starting with core blogging features and expanding to include monetization, analytics, and advanced AI capabilities.