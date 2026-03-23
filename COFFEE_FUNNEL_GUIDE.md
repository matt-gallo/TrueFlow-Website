# Local Business Coffee Funnel

Complete implementation of the Local Business Coffee meetup funnel based on the creative brief.

## Overview

This funnel implements the "community-first" strategy where you build relationships before selling AI services. The funnel creates a trusted local business network using coffee meetups as the entry point.

## Funnel Pages

### 1. Registration Page
**URL:** `/coffee/register`

**Features:**
- Clean, professional form with 4 fields:
  - Full Name
  - Email
  - Business Name
  - Business Type (dropdown with vertical options)
- Gradient design matching TrueFlow branding (cyan-400 to purple-600)
- Small group messaging (8-12 people)
- Zero sales pitch positioning

**Form Fields:**
```typescript
{
  name: string          // Full name
  email: string         // Email address
  businessName: string  // Business name
  businessType: string  // Selected from dropdown
}
```

**Business Type Options:**
- Home Services (HVAC, Plumbing, Electrical, etc.)
- Health & Wellness (Chiro, PT, Gym, Yoga, etc.)
- Real Estate & Property Management
- Professional Services (Law, Accounting, Financial, etc.)
- Retail & Hospitality
- Other

### 2. Welcome/Video Page
**URL:** `/coffee/welcome`

**Features:**
- Success confirmation badge
- Video placeholder with play button
- Video topics outlined:
  - How you ended up in Colorado
  - Why AI is changing everything
  - Why human connection matters now
- "What to Expect" section highlighting:
  - Real conversations
  - Zero sales pitches
  - Practical insights
- Auto-redirect to confirmation page after 5 minutes

**TODO:** Replace video placeholder with actual video embed (YouTube, Vimeo, or Loom)

### 3. Confirmation Page
**URL:** `/coffee/confirmed`

**Features:**
- Success confirmation with event details
- Event information (using placeholders):
  - Date: Saturday, March 21, 2026
  - Time: 9:00 AM - 11:00 AM
  - Location: The Coffee House
  - Address: 123 Main Street, Denver, CO 80202
- Action buttons:
  - Add to Calendar (TODO: implement .ics download)
  - Share Event (uses native share or copies link)
- "What to Bring" section
- Contact information for questions/reschedule
- Google Maps link integration

## API Integration

### Coffee RSVP API
**Endpoint:** `/api/coffee-rsvp`

**Method:** POST

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "john@business.com",
  "businessName": "Smith's HVAC",
  "businessType": "Home Services (HVAC, Plumbing, Electrical, etc.)"
}
```

**Features:**
1. Creates contact in GoHighLevel
2. Applies "coffee-rsvp" tag
3. Stores business information in custom fields
4. Sends confirmation email to attendee
5. Sends notification email to team

**GoHighLevel Integration:**
- Tag: `coffee-rsvp`
- Custom Fields:
  - `business_name` - Business name
  - `business_type` - Selected business type
- Source: `trueflow-coffee-funnel`

**Email Notifications:**
- Attendee receives confirmation email with event details
- Team (matt@trueflow.ai) receives registration notification with:
  - Contact details
  - Business information
  - GoHighLevel status (contact created, tag applied)

## Environment Variables Required

The funnel uses existing TrueFlow environment variables:

### GoHighLevel (Required)
- `GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION` (primary) or fallbacks:
  - `GHL_ACCESS_TOKEN`
  - `GHL_SUBACCOUNT_API_KEY`
  - `GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN`
- `GHL_LOCATION_ID` - Your GHL location ID where contacts are created

### Email Notifications (Required)
- `RESEND_API_KEY` - Resend API key for sending emails

See `CLAUDE.md` for complete environment variable documentation.

## Funnel Flow

```
1. User visits /coffee/register
   ↓
2. Fills out form with name, email, business info
   ↓
3. Submits form → POST /api/coffee-rsvp
   ↓
4. API creates GHL contact with "coffee-rsvp" tag
   ↓
5. API sends confirmation email to user
   ↓
6. API sends notification email to team
   ↓
7. User redirected to /coffee/welcome
   ↓
8. User watches video (3-4 minutes)
   ↓
9. User clicks "Continue" or auto-redirects after 5 min
   ↓
10. User sees confirmation at /coffee/confirmed
    ↓
11. User can add to calendar or share event
```

## Design System

### Colors
- **Primary Gradient:** cyan-400 → purple-600 (dark mode)
- **Primary Gradient:** cyan-600 → purple-700 (light mode)
- **Background:** Black with gradient blur overlays
- **Cards:** white/5 background, white/10 border (dark mode)
- **Cards:** White background, gray-200 border (light mode)

### Icons
- Coffee icon for meetup branding
- Check circles for confirmations
- Calendar, Clock, MapPin for event details
- All icons from lucide-react

### Theme Support
- Full dark/light mode support via ThemeProvider
- Responsive design for mobile/tablet/desktop
- Backdrop blur effects for modern glass-morphism

## Next Steps

### Immediate TODOs:
1. **Update Event Details** in `/coffee/confirmed/page.tsx`:
   - Set actual date, time, location
   - Update contact email/phone if needed

2. **Add Video** to `/coffee/welcome/page.tsx`:
   - Replace video placeholder with actual embed
   - Record 3-4 minute video covering the three topics

3. **Implement Calendar Download**:
   - Generate .ics file with event details
   - Trigger download on "Add to Calendar" button

4. **Update Custom Fields in GoHighLevel**:
   - Create `business_name` custom field
   - Create `business_type` custom field
   - Ensure "coffee-rsvp" tag exists

### Marketing Setup:
1. **Create Coffee RSVP Tag in GoHighLevel**
   - Tag name: `coffee-rsvp`
   - Use for automated follow-up sequences

2. **Set Up Automation Workflows**:
   - Welcome email sequence
   - Reminder emails (1 week before, 1 day before)
   - Post-event follow-up

3. **Create Traffic Sources**:
   - Social media posts linking to `/coffee/register`
   - Email signature with registration link
   - Local business directories
   - Cold outreach emails (as per creative brief)

## Testing

To test the funnel locally:

```bash
# Start development server
npm run dev

# Visit pages:
# http://localhost:3001/coffee/register
# http://localhost:3001/coffee/welcome
# http://localhost:3001/coffee/confirmed
```

To test in production:
- Visit: `https://trueflow.ai/coffee/register`

## Strategic Implementation Notes

Based on the creative brief:

### Community-First Philosophy
- The funnel emphasizes **relationships over sales**
- No aggressive CTAs or sales language
- Positions TrueFlow as the **connector**, not the vendor

### Expected Conversion Path
1. Business owners register through `/coffee/register`
2. They receive welcome video establishing trust
3. They attend coffee meetup (real-world connection)
4. Over time, they naturally ask for help with operational problems
5. Those conversations convert to TrueFlow clients organically

### Three Target Verticals
The business type dropdown captures the three main verticals:
1. **Home Services** - HVAC, Plumbing, Electrical, Roofing, Landscaping
2. **Health & Wellness** - Chiro, PT, Gyms, Yoga, Med Spas
3. **Professional Services** - Real Estate, Law, Accounting, Financial

This data feeds into GoHighLevel for vertical-specific follow-up.

### Long-Term Vision
The coffee meetups become:
- Local founder network
- Trusted email list
- Referral engine
- Workshop platform
- Client pipeline

You're not selling AI—you're building the most valuable business network in your region.

## Files Created

### Pages:
- `app/coffee/register/page.tsx` - Registration form
- `app/coffee/welcome/page.tsx` - Welcome video page
- `app/coffee/confirmed/page.tsx` - Confirmation page

### API Routes:
- `app/api/coffee-rsvp/route.ts` - RSVP submission handler

### Documentation:
- `COFFEE_FUNNEL_GUIDE.md` - This file

## Deployment

The funnel is ready to deploy via Railway:

```bash
# Commit changes
git add .
git commit -m "Add Local Business Coffee funnel

Implements community-first strategy with three-page funnel:
- Registration page with business type capture
- Welcome video page with Matt's story
- Confirmation page with event details

Includes GoHighLevel integration with coffee-rsvp tag
and automated email notifications.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to Railway
git push origin main
```

Railway will automatically build and deploy to your staging environment.

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS, GoHighLevel API, Resend
**Status:** ✅ Ready for deployment (pending video upload and event details)
