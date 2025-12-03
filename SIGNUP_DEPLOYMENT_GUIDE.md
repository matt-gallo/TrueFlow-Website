# Sign-Up Form & GoHighLevel Integration - Deployment Guide

## Overview

This guide ensures your payment-first sign-up flow works correctly with GoHighLevel sub-account creation.

## Flow Summary

```
User fills form (Steps 1-3)
↓
Form data stored via /api/signup-data
↓
User completes payment (Step 4 iframe)
↓
FastPay sends webhook → /api/webhooks/ghl
↓
Webhook retrieves form data → calls /api/intake
↓
Sub-account + user created in GHL
↓
Welcome email sent via Resend
↓
User redirected to login
```

## Environment Variables Checklist

### Required Variables (Copy from .env.ghl.example)

- [x] `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN` - Your Agency Private Integration Token
- [x] `GHL_COMPANY_ID` - Your GoHighLevel company/agency ID
- [x] `RESEND_API_KEY` - For sending welcome emails
- [x] `NEXT_PUBLIC_LANDING_URL` - Your app's public URL (e.g., `https://trueflow.ai`)

### Optional But Recommended

- [ ] `GHL_WEBHOOK_SECRET` - For webhook signature verification
- [ ] `GHL_DEFAULT_USER_PASSWORD` - Set a known default password (otherwise random)

### How to Set on Railway

1. Go to your Railway project
2. Click on your service
3. Navigate to "Variables" tab
4. Add each environment variable
5. Redeploy after adding all variables

## FastPay Webhook Configuration

### 1. Payment Link IDs (Already in Code)

- Standard plan ($297/mo): `6920f7f2bbe219eb5e3624d1`
- With Success Manager ($444/mo): `6920f847802b2ce38d6b0f8e`

### 2. Configure Webhook in FastPay

1. Log into GoHighLevel
2. Go to **Settings → Payments → FastPay Direct**
3. Find your payment links
4. Set webhook URL: `https://trueflow.ai/api/webhooks/ghl`
5. Enable these events:
   - `payment.succeeded`
   - `InvoicePaid`
   - `OrderCompleted`
   - `order.completed`
6. **Critical**: Ensure `signup_id`, `email`, and `name` are passed in webhook payload

### 3. Webhook URL Parameters

The payment iframe automatically includes these URL parameters:
- `email` - User's email from the form
- `signup_id` - Unique ID generated on form load
- `name` - User's full name from the form
- `redirect_url` - Success page URL with signup_id

FastPay should capture these and send them back in the webhook.

## Pre-Deployment Testing

### 1. Test Environment Variables

Create a simple test endpoint to verify your GHL credentials:

```bash
# Test that environment variables are set
curl https://your-app.railway.app/api/intake \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Business",
    "prospectInfo": {
      "firstName": "Test",
      "lastName": "User",
      "email": "test@example.com"
    }
  }'
```

Expected response:
```json
{
  "status": "success",
  "locationId": "...",
  "userId": "...",
  "message": "Sub-account and user created successfully"
}
```

### 2. Test Signup Data Storage

```bash
# Store test data
curl https://your-app.railway.app/api/signup-data \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "signupId": "test_123",
    "email": "test@example.com",
    "name": "Test Business"
  }'

# Retrieve it
curl https://your-app.railway.app/api/signup-data?signupId=test_123

# Clean up
curl -X DELETE https://your-app.railway.app/api/signup-data?signupId=test_123
```

### 3. Test Webhook Endpoint

```bash
# Send a test webhook
curl https://your-app.railway.app/api/webhooks/ghl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "type": "payment.succeeded",
    "signup_id": "test_123"
  }'

# View recent webhooks
curl https://your-app.railway.app/api/webhooks/ghl
```

## Production Deployment Steps

### Step 1: Deploy to Railway

1. Ensure all environment variables are set
2. Deploy your latest code
3. Verify deployment succeeded

### Step 2: Configure FastPay Webhooks

Follow the webhook configuration steps above.

### Step 3: Test End-to-End Flow

1. Go to `https://trueflow.ai/sign-up`
2. Fill out Steps 1-3 with test data
3. **DO NOT complete payment** - use FastPay's test mode if available
4. Monitor Railway logs for:
   ```
   [SignupData] Stored pending signup: signup_xxx
   [Webhook] Received GHL webhook
   [Webhook] Found signup_id: signup_xxx
   [Webhook] Successfully created sub-account: loc_xxx
   [Webhook] Successfully created user: user_xxx
   ```

### Step 4: Verify GoHighLevel

1. Log into your GoHighLevel agency account
2. Go to **Locations** (sub-accounts)
3. Find the newly created test sub-account
4. Verify user was created with admin access

### Step 5: Test Welcome Email

Check that the welcome email was sent to the test user's email address.

## Monitoring & Debugging

### Check Webhook Events

```bash
# View recent webhooks
curl https://trueflow.ai/api/webhooks/ghl

# View specific webhook by ID
curl https://trueflow.ai/api/webhooks/ghl?id=webhook_123

# Filter by event type
curl https://trueflow.ai/api/webhooks/ghl?type=payment.succeeded

# Clear webhook history (testing only)
curl -X DELETE https://trueflow.ai/api/webhooks/ghl
```

### Railway Logs to Watch For

**Success indicators:**
```
[SignupData] Stored pending signup: signup_xxx
[Webhook] Processing payment success event
[Webhook] Found signup_id: signup_xxx
[Webhook] Retrieved signup data for: user@example.com
[Webhook] Successfully created sub-account: loc_xxx
[Webhook] Successfully created user: user_xxx
[Webhook] Welcome email sent to: user@example.com
[Webhook] Payment-to-account flow completed successfully
```

**Error indicators:**
```
[Webhook] No signup_id found in payment webhook
[Webhook] Failed to retrieve signup data: 404
[Webhook] Failed to create sub-account
GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN not configured
GHL_COMPANY_ID not configured
```

### Common Issues & Solutions

#### Issue: "No signup_id found in payment webhook"

**Cause:** FastPay isn't passing `signup_id` in webhook payload

**Solution:**
1. Check FastPay webhook configuration
2. Ensure payment link URL includes `signup_id` parameter
3. Verify FastPay is configured to pass custom fields

#### Issue: "Signup data not found or expired"

**Cause:** More than 1 hour passed between form submission and payment

**Solution:**
1. Reduce form abandonment by simplifying payment step
2. Increase TTL in `app/api/signup-data/route.ts` (line 19)

#### Issue: "Authentication failed with GoHighLevel"

**Cause:** Invalid `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN`

**Solution:**
1. Verify token in GHL Settings → Integrations
2. Ensure it's an **Agency-level** Private Integration Token
3. Check token has `locations.write` and `users.write` scopes

#### Issue: "Failed to provision user access"

**Cause:** Token doesn't have `users.write` scope

**Solution:**
1. Create a new Private Integration Token with proper scopes
2. Update `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN` in Railway

## Security Checklist

- [ ] `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN` is kept secret
- [ ] `GHL_COMPANY_ID` is set correctly
- [ ] `GHL_WEBHOOK_SECRET` is configured (if using signature verification)
- [ ] HTTPS is enforced for all API endpoints
- [ ] Webhook signature verification is enabled (recommended)
- [ ] Environment variables are not committed to git
- [ ] `.env*` files are in `.gitignore`

## Success Criteria

Your integration is working correctly when:

1. ✅ User can complete all 4 form steps
2. ✅ Payment iframe loads on Step 4
3. ✅ After payment, user is redirected to success page
4. ✅ Success page shows "Setting up your account..."
5. ✅ Within 30 seconds, success page shows "Welcome to TrueFlow!"
6. ✅ GoHighLevel sub-account is created with correct business name
7. ✅ GoHighLevel user is created with admin access
8. ✅ Welcome email is received with login instructions
9. ✅ User can log in at https://login.trueflow.ai
10. ✅ Internal team receives notification email

## Support

If you encounter issues:

1. Check Railway logs for error messages
2. Verify all environment variables are set
3. Test each component individually using the test scripts above
4. Check GoHighLevel API status
5. Contact support@trueflow.ai with:
   - Railway logs
   - Webhook event details (from `/api/webhooks/ghl`)
   - Steps to reproduce the issue
