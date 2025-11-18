# Claude Development Notes

## Git Branch & Environment Mapping

**Important:** This project uses a different git branch convention than typical FAANG companies.

- **`main` branch** → Staging environment (Railway)
- **`production` branch** → Production environment (Railway)

Note: Many FAANG companies use the opposite convention (main/master for production, develop/staging for pre-production). Our setup intentionally differs from this pattern.

## GoHighLevel Integration

The sign-up form at `/sign-up` automatically creates GoHighLevel sub-accounts for new business owners.

### Required Environment Variables

Add these to Railway (both staging and production environments):

1. **`GHL_AGENCY_API_KEY`** - Your agency's Private Integration Token from GoHighLevel
   - Location in GHL: Settings → Integrations → Private Integration
   - Requires: Agency Pro ($497) plan
   - Scopes needed: `locations.write`
   - Type: Agency Token

2. **`GHL_COMPANY_ID`** - Your agency/company ID in GoHighLevel
   - This is automatically attached to all new sub-accounts created via the sign-up form

### How It Works

1. User completes the sign-up form at `/sign-up`
2. Form submits to `/api/intake` endpoint
3. Backend calls GHL API: `POST https://services.leadconnectorhq.com/locations/`
4. New sub-account is created automatically
5. User receives confirmation and is redirected to login

### API Endpoint

- **File**: `app/api/intake/route.ts`
- **Method**: POST
- **Required field**: `name` (business name)
- **Optional fields**: phone, address, city, state, country, postalCode, website, timezone, prospectInfo, settings, social, twilio, mailgun, snapshotId
