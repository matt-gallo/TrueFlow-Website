# Claude Development Notes

## Preview / Dev Server Policy

**Do NOT run `preview_start` or the preview verification workflow for this repo.**

This project deploys automatically to Railway on every `git push`. There is no local dev server to verify against. All changes are verified by pushing to `main` (staging) or `production` and letting Railway build.

---

## Git Branch & Environment Mapping

**Important:** This project uses a different git branch convention than typical FAANG companies.

- **`main` branch** → Staging environment (Railway)
- **`production` branch** → Production environment (Railway)

Note: Many FAANG companies use the opposite convention (main/master for production, develop/staging for pre-production). Our setup intentionally differs from this pattern.

## GoHighLevel Integration

The sign-up form at `/sign-up` automatically creates GoHighLevel sub-accounts for new business owners.

### Required Environment Variables

Add these to Railway (both staging and production environments). See `.env.ghl.example` for a complete reference.

#### Required for GoHighLevel Integration

1. **`GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN`** - Your Agency-level Private Integration Token from GoHighLevel
   - Location in GHL: Settings → Integrations → Private Integration
   - Requires: Agency Pro ($497) plan
   - Scopes needed: `locations.write`, `users.write` (and optionally `locations.read` for debugging)
   - Type: **Agency-level** Private Integration Token (not sub-account level)
   - **Important:** This is NOT the legacy "Agency API Token" - it must be a Private Integration Token

2. **`GHL_COMPANY_ID`** - Your agency/company ID in GoHighLevel
   - This is automatically attached to all new sub-accounts created via the sign-up form
   - **Format:** Long alphanumeric string like `naA8FvnrZl2VW8iy0AQB`
   - **NOT** the 7-digit Relationship Number (e.g., `1-234-567`)
   - **How to find it:** Run `GET /locations/search?limit=1` with your Private Integration Token and look for the `companyId` field in the response

3. **`GHL_LOCATION_ID`** - Your primary GHL location/sub-account ID for capturing partial leads
   - Used by `/api/partial-lead-notification` to create contacts when users fill out forms
   - **Format:** Long alphanumeric string like `ve9EPM428h8vShlRW1KT`
   - **How to find it:** In GHL, go to Settings → Business Profile, or run `GET /locations/search` and use the `id` field from your main location
   - **Important:** This should be YOUR agency's main location ID where you want to capture leads, not a client location

#### Optional: Sub-Account Specific API Key

**`GHL_SUBACCOUNT_API_KEY`** - Sub-account specific API key for creating contacts
   - **Recommended approach:** Use this instead of the agency-level token for partial lead capture
   - Used by `/api/partial-lead-notification` to create contacts in the specific sub-account
   - **How to get it:**
     1. Log into the **specific GHL sub-account** where you want leads captured
     2. Go to **Settings → Integrations → API Key** (legacy) OR create a **Private Integration** in that sub-account
     3. Copy the API key
   - **Format:** Either a legacy API key or Private Integration token
   - **Fallback:** If not set, will use `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN`
   - **Benefits:** More secure, scoped to specific location, easier to manage permissions

#### Required for Email Notifications

4. **`RESEND_API_KEY`** - API key from Resend for sending welcome emails
   - Get from: https://resend.com/api-keys
   - Ensure your domain (trueflow.ai) is verified in Resend dashboard

#### Required for Webhook Processing

5. **`NEXT_PUBLIC_LANDING_URL`** - Your application's public URL
   - Production: `https://trueflow.ai`
   - Staging: `https://your-staging-url.railway.app`
   - Used by webhooks to call internal APIs (`/api/signup-data`, `/api/intake`)

#### Optional But Recommended

6. **`GHL_DEFAULT_USER_PASSWORD`** - Override password for newly created users
   - If not set, a secure random password is generated automatically
   - Useful when you want to set a known default before forcing a password reset workflow

7. **`GHL_WEBHOOK_SECRET`** - Secret for verifying webhook signatures from FastPay
   - Recommended for production to prevent unauthorized webhook calls
   - If not set, signature verification is skipped

8. **`GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION`** - Separate token for user creation
   - Only needed if you have different scopes/permissions for user management
   - Falls back to main token if not set

For detailed deployment instructions, see **SIGNUP_DEPLOYMENT_GUIDE.md**

### How It Works (Payment-First Flow)

1. User fills out the 4-step sign-up form at `/sign-up`
2. On Step 3 → Step 4 transition, form data is stored temporarily on the server via `/api/signup-data`
3. User completes payment in the FastPay Direct iframe (Step 4)
4. Payment processor sends webhook to `/api/webhooks/ghl` with `signup_id` parameter
5. Webhook handler retrieves stored form data and calls `/api/intake` to create sub-account + user
6. Backend calls GHL API:
   - `POST https://services.leadconnectorhq.com/locations/` (creates sub-account)
   - `POST https://services.leadconnectorhq.com/users/` (provisions admin user)
7. Welcome email is sent to the user with login instructions
8. Temporary signup data is deleted

**Key benefit:** Accounts are only created after successful payment, preventing free trial abuse.

### FastPay Webhook Configuration

To enable automatic account creation after payment, configure FastPay to send webhooks:

1. Log into your GoHighLevel account
2. Navigate to **Settings** → **Payments** → **FastPay Direct**
3. Find your payment links:
   - Standard plan: `6920f7f2bbe219eb5e3624d1` ($297/mo)
   - With Success Manager: `6920f847802b2ce38d6b0f8e` ($444/mo)
4. Set webhook URL: `https://trueflow.ai/api/webhooks/ghl`
5. Enable events: `payment.succeeded`, `InvoicePaid`, `OrderCompleted`, `order.completed`
6. Ensure `signup_id` custom field is passed back in webhook payload

**Important:** The payment iframe automatically includes `email`, `signup_id`, and `name` as URL parameters that should be captured by FastPay.

### API Endpoints

#### 1. Intake API (Sub-account Creation)
- **File**: `app/api/intake/route.ts`
- **Method**: POST
- **Required field**: `name` (business name)
- **Optional fields**: phone, address, city, state, country, postalCode, website, timezone, prospectInfo, settings, social, twilio, mailgun, snapshotId

#### 2. Signup Data API (Temporary Storage)
- **File**: `app/api/signup-data/route.ts`
- **Methods**: POST (store), GET (retrieve), DELETE (cleanup)
- **Purpose**: Temporarily stores form data before payment completion
- **TTL**: 1 hour (auto-cleanup)

#### 3. Webhook API (Payment Processing)
- **File**: `app/api/webhooks/ghl/route.ts`
- **Method**: POST
- **Purpose**: Receives payment success webhooks and triggers account creation
- **Supported events**: `payment.succeeded`, `InvoicePaid`, `OrderCompleted`, `order.completed`

---

## Blog Formatting Guidelines

**CRITICAL: When formatting or creating blog posts, you MUST follow these strict guidelines.**

### Core Principle: Formatting Only

- **DO NOT modify, rewrite, or enhance the provided content**
- **DO NOT add creative flourishes or embellishments**
- **DO NOT change wording, phrasing, or messaging**
- **ONLY apply the prescribed formatting structure and styling**

### Required Structure

All blog posts must follow this exact structure. See **BLOG_FORMATTING_GUIDE.md** for complete implementation details.

1. **Background Effects** - Dark gradient background with blue/purple blur effects
2. **Navigation** - Logo + "Back to Blog" link
3. **Header Image** (optional) - Full-width rounded header image
4. **Title Section** - Gradient text (cyan-400 to purple-600)
5. **Subtitle** - White/70 opacity
6. **Author Section** (when provided) - Avatar with gradient circle, name, title
7. **Meta Information** - Date, read time, category
8. **Social Sharing Buttons** - X, LinkedIn, Facebook, Instagram
9. **Content Container** - Backdrop-blur card with border
10. **Content** - Properly formatted with prescribed heading/text styles
11. **Call-to-Action** (when included)

### Formatting Requirements

- **Background**: `bg-black` with gradient blur overlays
- **Primary Gradient**: `from-cyan-400 to-purple-600`
- **Headings**:
  - H1: 4xl/5xl with gradient text
  - H2: 3xl with gradient text
  - H3: 2xl white
  - H4: xl cyan-400
- **Body Text**: lg, white/80 opacity, leading-relaxed
- **Lists**: Cyan bullets (•), white/80 text
- **Blockquotes**: Left border cyan-400, white/5 background
- **Cards**: white/5 background, white/10 border, rounded-xl

### Strict Rules

1. **Never alter the content substance** - Only apply visual formatting
2. **Follow the style guide exactly** - No variations or interpretations
3. **Maintain brand consistency** - Use prescribed colors and gradients
4. **Preserve content hierarchy** - Match heading levels to content structure
5. **No creative liberty** - Implement formatting mechanically and precisely

For complete implementation details, component code, and examples, see **BLOG_FORMATTING_GUIDE.md**.
