# Admin Dashboard Guide

## Overview

The admin dashboard provides a secure interface to:
- Monitor environment variable configuration status
- Test API endpoints with custom payloads
- View real-time responses from each endpoint
- Debug integration issues

## Access

**URL:** `/admin`

**Authentication:** Basic HTTP Auth
- Username: Set via `ADMIN_USER` environment variable (default: `admin`)
- Password: Set via `ADMIN_PASS` environment variable (required)

## Setup

### Local Development

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Set your admin password in `.env.local`:
   ```
   ADMIN_USER=admin
   ADMIN_PASS=your-secure-password
   ```

3. Restart the development server:
   ```bash
   npm run dev
   ```

4. Navigate to `http://localhost:3000/admin`

5. Enter your credentials when prompted by the browser

### Production (Railway)

Add these environment variables to your Railway deployment:

```
ADMIN_USER=admin
ADMIN_PASS=your-secure-production-password
```

**Important:** Use a strong password for production!

## Features

### 1. Environment Variable Monitor

Displays the configuration status of all environment variables used by the application:

- **GoHighLevel Integration:**
  - Agency Private Integration Token
  - Sub-Account Contact Creation Token
  - Company ID
  - Location ID
  - Webhook Secret
  - User Creation Token

- **Email Integration:**
  - Resend API Key

- **Application:**
  - Landing URL

- **Admin Access:**
  - Admin Username
  - Admin Password

**Status Indicators:**
- ✓ Green = Variable is configured
- ✗ Red = Variable is missing

### 2. API Endpoint Testers

Test each critical API endpoint with customizable payloads:

#### Partial Lead Notification (`/api/partial-lead-notification`)

Tests the Step 1 lead capture flow:
- Creates a contact in GoHighLevel
- Sends internal email notification via Resend
- Tags contact as `step-1-prospects`

**Environment Variables Used:**
- `GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION`
- `GHL_LOCATION_ID`
- `RESEND_API_KEY`

**Example Payload:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-123-4567",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "isPartialLead": true
}
```

#### Intake (`/api/intake`)

Tests sub-account creation:
- Creates a new GoHighLevel sub-account
- Provisions admin user
- Sends welcome email

**Environment Variables Used:**
- `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN`
- `GHL_COMPANY_ID`
- `RESEND_API_KEY`

**Example Payload:**
```json
{
  "name": "Test Business LLC",
  "phone": "+1-555-987-6543",
  "address": "123 Main St",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "postalCode": "94102",
  "website": "https://testbusiness.com",
  "timezone": "America/Los_Angeles"
}
```

**⚠️ Warning:** This creates a REAL sub-account in GoHighLevel. Use test data only!

#### Webhook (`/api/webhooks/ghl`)

Tests payment webhook processing:
- Verifies webhook signature (if configured)
- Retrieves signup data
- Triggers account creation

**Environment Variables Used:**
- `GHL_WEBHOOK_SECRET`
- `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN`
- `NEXT_PUBLIC_LANDING_URL`

**Example Payload:**
```json
{
  "type": "payment.succeeded",
  "email": "test@example.com",
  "signup_id": "test-signup-123",
  "name": "Test User",
  "amount": 29700,
  "currency": "USD"
}
```

#### Signup Data Storage (`/api/signup-data`)

Tests temporary data storage:
- Stores form data before payment
- Retrieves data by signup ID
- Auto-cleanup after 1 hour

**Environment Variables Used:** None (in-memory storage)

**Example Payload:**
```json
{
  "id": "test-1234567890",
  "fullName": "Jane Smith",
  "email": "jane@example.com",
  "businessName": "Smith Consulting",
  "role": "Consultant"
}
```

## Security

### Basic HTTP Auth

The admin dashboard is protected by HTTP Basic Authentication:
- Browser shows native login prompt
- Credentials validated by Next.js middleware
- No session management needed
- Simple and secure

### Rate Limiting

**Recommended:** Configure Cloudflare rate limiting:
1. Go to Cloudflare Dashboard → Security → WAF
2. Create rule: "Protect Admin Dashboard"
3. Conditions:
   - URL path contains `/admin`
   - Response status code = 401 (failed auth)
4. Action: Block for 1 hour after 5 attempts

### Best Practices

1. **Use strong passwords** (20+ characters, random)
2. **Rotate passwords** regularly in production
3. **Limit access** to trusted IPs via Cloudflare if needed
4. **Monitor logs** for unauthorized access attempts
5. **Don't share credentials** via insecure channels

## Troubleshooting

### "Admin access not configured" Error

**Cause:** `ADMIN_PASS` environment variable is not set

**Solution:** Add `ADMIN_PASS` to your environment variables and restart

### Authentication Loop (Keeps Asking for Password)

**Cause:** Incorrect username or password

**Solution:**
1. Verify `ADMIN_USER` and `ADMIN_PASS` in environment variables
2. Check for typos
3. Restart the server after changing env vars

### Environment Variables Show as "Missing"

**Cause:** Variables not set in Railway or `.env.local`

**Solution:**
1. Check Railway dashboard → Variables
2. Ensure variables are set for the correct environment (staging vs production)
3. Redeploy after adding variables

### API Tests Fail

**Possible Causes:**
1. Missing environment variables required by that endpoint
2. Invalid payload format
3. GoHighLevel API rate limits
4. Network connectivity issues

**Solution:**
1. Check environment variable status section
2. Review error message in test results
3. Verify payload JSON is valid
4. Check Railway logs for detailed errors

## Development

### File Structure

```
├── middleware.ts                    # Basic HTTP Auth protection
├── app/
│   ├── admin/
│   │   └── page.tsx                 # Admin dashboard UI
│   └── api/
│       └── admin/
│           └── env-status/
│               └── route.ts         # Environment variable status API
```

### Adding New Endpoint Tests

To add a new endpoint tester:

1. Add a new `<EndpointTester>` component to `/app/admin/page.tsx`
2. Specify the endpoint URL and default payload
3. List required environment variables
4. Test locally before deploying

### Customization

The dashboard supports both light and dark modes automatically via the `ThemeProvider`.

## Support

For issues or questions:
- Check Railway logs for detailed error messages
- Review environment variable configuration
- Verify GoHighLevel API credentials are valid
- Contact Griffin or Matt for access issues
