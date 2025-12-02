# Claude Development Notes

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

#### Required for Email Notifications

3. **`RESEND_API_KEY`** - API key from Resend for sending welcome emails
   - Get from: https://resend.com/api-keys
   - Ensure your domain (trueflow.ai) is verified in Resend dashboard

#### Required for Webhook Processing

4. **`NEXT_PUBLIC_LANDING_URL`** - Your application's public URL
   - Production: `https://trueflow.ai`
   - Staging: `https://your-staging-url.railway.app`
   - Used by webhooks to call internal APIs (`/api/signup-data`, `/api/intake`)

#### Optional But Recommended

5. **`GHL_DEFAULT_USER_PASSWORD`** - Override password for newly created users
   - If not set, a secure random password is generated automatically
   - Useful when you want to set a known default before forcing a password reset workflow

6. **`GHL_WEBHOOK_SECRET`** - Secret for verifying webhook signatures from FastPay
   - Recommended for production to prevent unauthorized webhook calls
   - If not set, signature verification is skipped

7. **`GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION`** - Separate token for user creation
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
