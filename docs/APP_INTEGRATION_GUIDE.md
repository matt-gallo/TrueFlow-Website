# TrueFlow App Integration Guide

## Overview
This guide explains how to integrate the landing page lead capture with the main TrueFlow app signup process.

## Lead Capture Flow

1. **Landing Page Form Submission**
   - User fills out the getting-started form at `trueflow.ai/get-started`
   - Lead data is saved to Supabase `leads` table
   - User is redirected to `app.trueflow.ai/auth/signup` with query parameters

2. **Query Parameters Sent**
   ```
   email: User's email
   firstName: First name
   lastName: Last name
   businessName: Business name
   phone: Phone number (optional)
   plan: Selected plan
   businessType: Type of business
   contentGoals: Comma-separated list
   integrations: Comma-separated list
   readinessScore: Assessment score (0-100)
   leadId: UUID of the lead record in Supabase
   ```

## App-Side Implementation

### 1. On Signup Page Load

```typescript
// In your signup component
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function SignupPage() {
  const searchParams = useSearchParams()

  // Extract lead data from URL
  const leadId = searchParams.get('leadId')
  const email = searchParams.get('email')
  const firstName = searchParams.get('firstName')
  // ... extract other params

  // Pre-fill form fields
  const [formData, setFormData] = useState({
    email: email || '',
    firstName: firstName || '',
    // ... other fields
  })

  // Optional: Fetch full lead data from Supabase
  useEffect(() => {
    if (leadId) {
      fetchLeadData(leadId)
    }
  }, [leadId])
}
```

### 2. Fetch Lead Data (Optional)

```typescript
async function fetchLeadData(leadId: string) {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .eq('id', leadId)
    .single()

  if (data) {
    // Use the full lead data including assessment answers
    console.log('Lead data:', data)
  }
}
```

### 3. After Successful Signup

```typescript
async function handleSignupSuccess(userId: string) {
  const leadId = searchParams.get('leadId')

  if (leadId) {
    // Merge lead with new user account
    const { data, error } = await supabase.rpc('merge_lead_with_user', {
      p_lead_id: leadId,
      p_user_id: userId
    })

    if (data) {
      console.log('Lead merged successfully')
    }
  }

  // Continue with normal signup flow
}
```

### 4. Alternative: Use Email-Based Lookup

If you prefer not to pass the lead ID, you can look up leads by email:

```typescript
async function findLeadByEmail(email: string) {
  const { data, error } = await supabase.rpc('find_lead_by_email', {
    p_email: email
  })

  if (data) {
    // Returns the most recent lead for this email
    return data
  }
}
```

## Database Functions Available

### `merge_lead_with_user(p_lead_id, p_user_id)`
- Merges a lead record with a user account
- Updates lead status to 'converted'
- Stores lead data in user metadata
- Returns boolean success

### `find_lead_by_email(p_email)`
- Finds the most recent pending lead for an email
- Only returns leads from the last 30 days
- Returns lead data including assessment answers

## Security Considerations

1. **Email Verification**
   - The merge function only works if lead email matches user email
   - This prevents unauthorized data access

2. **Lead Expiry**
   - Leads older than 30 days are not returned by find_lead_by_email
   - Consider running periodic cleanup to mark old leads as 'expired'

3. **Row Level Security**
   - Anonymous users can only INSERT leads
   - Authenticated users can only view their own lead data
   - Service role has full access for admin operations

## Testing Locally

1. Ensure your app has the Supabase environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

2. Test the flow:
   - Submit form on landing page
   - Check Supabase dashboard for new lead record
   - Verify redirect URL contains all parameters
   - Test signup with pre-filled data
   - Verify lead merge after signup

## Troubleshooting

### Lead not found
- Check if lead was created in Supabase
- Verify email matches exactly
- Check if lead is within 30-day window

### Merge fails
- Ensure emails match between lead and user
- Check RLS policies are correctly set
- Verify function permissions

### Data not pre-filling
- Check URL parameters are being parsed correctly
- Verify parameter names match
- Check for URL encoding issues

## Questions?
Contact the development team or check the Supabase logs for detailed error messages.