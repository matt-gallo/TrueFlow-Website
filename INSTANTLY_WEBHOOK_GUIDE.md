# Instantly Webhook Integration Guide

Complete guide to setting up webhooks between Instantly and your TrueFlow application.

## Overview

The webhook system automates the entire flow from cold outreach to warm lead transfer:

```
Instantly Cold Email
        ↓
Lead Replies
        ↓
Webhook Notification
        ↓
AI Classification
        ↓
Auto-Tagging
        ↓
Opt-In Link Click
        ↓
Transfer to GHL
        ↓
Coffee Club Workflow
```

## Required Environment Variables

Add these to your `.env.local`:

```bash
# Instantly API
INSTANTLY_API_KEY=your_instantly_api_key_here

# OpenAI (for reply classification)
OPENAI_API_KEY=your_openai_api_key_here

# GoHighLevel (existing)
GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN=your_ghl_token
GHL_LOCATION_ID=your_ghl_location_id

# Optional: GHL Workflow ID for Coffee Club
GHL_COFFEE_CLUB_WORKFLOW_ID=your_workflow_id

# Application URL
NEXT_PUBLIC_LANDING_URL=https://trueflow.ai
```

## Setup Steps

### 1. Deploy Your Application

Make sure your app is deployed with the webhook endpoint accessible:

```
https://trueflow.ai/api/webhooks/instantly
```

### 2. Subscribe to Instantly Webhooks

You can do this via the MCP server in Claude Code:

```
"Subscribe to Instantly webhooks:
- reply_received
- email_link_clicked
- campaign_completed
- lead_unsubscribed

Endpoint: https://trueflow.ai/api/webhooks/instantly"
```

Or manually via API:

```bash
curl -X POST https://api.instantly.ai/api/v2/webhooks/subscribe \
  -H "Authorization: Bearer YOUR_INSTANTLY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://trueflow.ai/api/webhooks/instantly",
    "event_type": "reply_received"
  }'
```

Repeat for each event type.

### 3. Verify Webhook Setup

Check webhook subscriptions in Instantly:

```bash
curl https://api.instantly.ai/api/v2/webhooks \
  -H "Authorization: Bearer YOUR_INSTANTLY_API_KEY"
```

## Webhook Events Handled

### 1. reply_received

**When:** Lead replies to any email in the sequence

**Actions:**
1. Classify reply using AI (OpenAI GPT-4o-mini)
2. Apply classification tag in Instantly
3. Log reply for analysis
4. If INTERESTED → trigger opt-in email
5. If NOT_INTERESTED → stop campaign

**Classifications:**
- `INTERESTED` - Wants details, says yes
- `NOT_NOW` - Maybe later, timing issues
- `NOT_INTERESTED` - No thanks, remove me
- `OUT_OF_OFFICE` - Auto-responder
- `QUESTION` - Needs clarification
- `REFERRAL` - Suggests someone else
- `POSITIVE` - Vague interest

**Example Payload:**
```json
{
  "event_type": "reply_received",
  "lead_email": "founder@saas.com",
  "lead_first_name": "John",
  "lead_last_name": "Smith",
  "lead_company": "SaaS Corp",
  "campaign_id": "abc123",
  "campaign_name": "Coffee_Club_SaaS_Q1_2026",
  "reply_body": "Yes, this sounds interesting! Send me details.",
  "timestamp": "2026-01-15T10:30:00Z"
}
```

### 2. email_link_clicked

**When:** Lead clicks any link in an email

**Actions:**
1. Check if link is opt-in trigger (`/coffee-club/register`)
2. If yes:
   - Tag lead as `OPT_IN` in Instantly
   - Transfer lead to GHL with `coffee_club` tag
   - Trigger GHL Coffee Club workflow
   - Log conversion

**Example Payload:**
```json
{
  "event_type": "email_link_clicked",
  "lead_email": "founder@saas.com",
  "lead_first_name": "John",
  "campaign_id": "abc123",
  "campaign_name": "Coffee_Club_SaaS_Q1_2026",
  "link_url": "https://trueflow.ai/coffee-club/register?email=founder@saas.com",
  "timestamp": "2026-01-16T14:20:00Z"
}
```

### 3. campaign_completed

**When:** Lead finishes entire email sequence

**Actions:**
1. Tag as `CAMPAIGN_COMPLETED`
2. Log completion

### 4. lead_unsubscribed

**When:** Lead clicks unsubscribe

**Actions:**
1. Tag as `UNSUBSCRIBED`
2. Log for list cleaning

### 5. email_bounced

**When:** Email bounces

**Actions:**
1. Tag as `BOUNCED`
2. Log for list cleaning

## Testing Webhooks

### Test Locally

```bash
# Start dev server
npm run dev

# In another terminal, test an interested reply
curl -X POST http://localhost:3001/api/webhooks/instantly/test?event=reply_interested

# Test not interested
curl -X POST http://localhost:3001/api/webhooks/instantly/test?event=reply_not_interested

# Test opt-in link click
curl -X POST http://localhost:3001/api/webhooks/instantly/test?event=link_clicked_optin
```

### Test in Browser

Navigate to:
```
http://localhost:3001/api/webhooks/instantly/test
```

Available test events:
- `reply_interested`
- `reply_not_interested`
- `reply_not_now`
- `reply_question`
- `reply_ooo`
- `reply_referral`
- `link_clicked_optin`
- `campaign_completed`
- `lead_unsubscribed`
- `email_bounced`

### Test in Production

```bash
curl -X POST https://trueflow.ai/api/webhooks/instantly/test?event=reply_interested
```

## AI Reply Classification

The webhook uses OpenAI GPT-4o-mini to classify replies.

**Prompt:**
```
Classify email replies into one category:

INTERESTED: Explicit yes, wants details
NOT_NOW: Maybe later, timing issues
NOT_INTERESTED: No thanks, remove me
OUT_OF_OFFICE: Auto-responder
QUESTION: Asks for clarification
REFERRAL: Suggests someone else
POSITIVE: Vague interest
```

**Cost:** ~$0.0001 per classification (very cheap)

## GHL Transfer Logic

When a lead clicks the opt-in link:

**Contact Created in GHL with:**
```json
{
  "email": "founder@saas.com",
  "firstName": "John",
  "lastName": "Smith",
  "source": "instantly_coffee_club",
  "tags": [
    "coffee_club",
    "instantly_source",
    "warm_lead",
    "opted_in"
  ],
  "customFields": {
    "instantly_campaign": "Coffee_Club_SaaS_Q1_2026",
    "company_name": "SaaS Corp",
    "lead_source": "instantly",
    "optin_date": "2026-01-16T14:20:00Z"
  }
}
```

**GHL Workflow Triggered:**
```
coffee_club_registration
```

This workflow should:
1. Send confirmation email
2. Add to calendar
3. Send pre-event reminders
4. Send post-event follow-up

## Monitoring & Debugging

### View Webhook Logs

**Local:**
```bash
npm run dev
# Watch console for webhook events
```

**Production (Railway):**
```bash
railway logs
```

### Check Tags in Instantly

Via MCP server:
```
"Show me all leads tagged INTERESTED in the Coffee Club campaign"
```

### Verify GHL Transfer

Check GHL dashboard for:
- Contact created
- Tag `coffee_club` applied
- Workflow triggered

## Troubleshooting

### Webhooks Not Receiving Events

1. **Check subscription:**
   ```bash
   curl https://api.instantly.ai/api/v2/webhooks \
     -H "Authorization: Bearer YOUR_API_KEY"
   ```

2. **Verify endpoint is accessible:**
   ```bash
   curl https://trueflow.ai/api/webhooks/instantly
   ```

3. **Check Railway logs** for incoming requests

### Classification Not Working

1. **Verify OpenAI API key:**
   ```bash
   echo $OPENAI_API_KEY
   ```

2. **Check OpenAI quota/billing**

3. **Test classification manually:**
   ```bash
   curl -X POST http://localhost:3001/api/webhooks/instantly/test?event=reply_interested
   ```

### Tags Not Applied

1. **Check Instantly API key** has proper scopes

2. **Verify tag exists** in Instantly dashboard

3. **Check webhook logs** for API errors

### GHL Transfer Failing

1. **Verify GHL credentials:**
   ```bash
   echo $GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN
   echo $GHL_LOCATION_ID
   ```

2. **Test GHL API** directly:
   ```bash
   curl https://services.leadconnectorhq.com/contacts/ \
     -H "Authorization: Bearer $GHL_TOKEN" \
     -H "Version: 2021-07-28"
   ```

3. **Check contact already exists** in GHL (duplicate prevention)

## Security Considerations

### Webhook Verification

Currently the webhook does NOT verify signatures. For production, you should:

1. **Add signature verification:**
   ```typescript
   const signature = req.headers.get('x-instantly-signature');
   const isValid = verifySignature(body, signature, WEBHOOK_SECRET);
   if (!isValid) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
   ```

2. **Set webhook secret** in Instantly

3. **Use HTTPS only** (already enforced)

### API Key Security

- ✅ Store keys in environment variables
- ✅ Never commit `.env.local`
- ✅ Use Railway secrets for production
- ✅ Rotate keys periodically

## Performance

**Expected Latency:**
```
Webhook received → Classification → Tagging → Transfer
~2-3 seconds total
```

**Breakdown:**
- Webhook processing: <100ms
- AI classification: ~1-2s
- Instantly API (tag): ~500ms
- GHL API (transfer): ~500ms

**Rate Limits:**
- Instantly API: No documented limit
- OpenAI API: 3,000 RPM (tier 1)
- GHL API: No documented limit

## Next Steps

1. **Deploy the webhook** to production
2. **Subscribe to events** via MCP or API
3. **Test with real campaign** (small list first)
4. **Monitor classifications** and adjust prompt if needed
5. **Build GHL workflow** for Coffee Club automation

## Support

- Webhook handler: `/app/api/webhooks/instantly/route.ts`
- Test endpoint: `/app/api/webhooks/instantly/test/route.ts`
- Integration plan: `/INSTANTLY_INTEGRATION_PLAN.md`
- MCP server: `/mcp-servers/instantly/`
