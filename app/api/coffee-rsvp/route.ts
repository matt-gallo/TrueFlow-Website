/**
 * API endpoint for handling Local Business Coffee RSVP registrations
 * Creates GoHighLevel contact with "coffee-rsvp" tag
 */

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface CoffeeRSVPData {
  name: string
  email: string
  businessName: string
  businessType: string
}

export async function POST(request: NextRequest) {
  try {
    const rsvpData: CoffeeRSVPData = await request.json()

    // Validate required fields
    if (!rsvpData.email || !rsvpData.name || !rsvpData.businessName || !rsvpData.businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Split name into firstName and lastName
    const nameParts = rsvpData.name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // ----------------------------------------------------------------------
    // Create Contact in GoHighLevel (GHL)
    // ----------------------------------------------------------------------

    // Determine the best available token
    let ghlToken = process.env.GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION
    let tokenSource = 'GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION'

    // Fallback to other tokens if the primary one is missing
    if (!ghlToken) {
      if (process.env.GHL_ACCESS_TOKEN && !process.env.GHL_ACCESS_TOKEN.includes('your_')) {
        ghlToken = process.env.GHL_ACCESS_TOKEN
        tokenSource = 'GHL_ACCESS_TOKEN'
      } else if (process.env.GHL_SUBACCOUNT_API_KEY) {
        ghlToken = process.env.GHL_SUBACCOUNT_API_KEY
        tokenSource = 'GHL_SUBACCOUNT_API_KEY'
      } else {
        ghlToken = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN
        tokenSource = 'GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN'
      }
    }

    const ghlLocationId = process.env.GHL_LOCATION_ID
    let ghlCreated = false
    let ghlErrorDetail = null
    let contactId = null

    if (ghlToken && ghlLocationId) {
      try {
        console.log('Creating GHL contact for coffee RSVP:', rsvpData.email)

        const ghlPayload: any = {
          firstName: firstName,
          lastName: lastName,
          name: rsvpData.name,
          email: rsvpData.email,
          locationId: ghlLocationId,
          tags: ["coffee-rsvp"],
          source: "trueflow-coffee-funnel",
          customFields: [
            {
              key: "business_name",
              value: rsvpData.businessName
            },
            {
              key: "business_type",
              value: rsvpData.businessType
            }
          ]
        }

        console.log(`Using ${tokenSource} for GHL contact creation`)

        // Determine auth variants based on token source and format
        let authVariants: string[] = []

        if (tokenSource === 'GHL_ACCESS_TOKEN') {
          authVariants = [`Bearer ${ghlToken}`]
        } else {
          const tokenParts = ghlToken.split('.')
          const looksLikeJWT = tokenParts.length === 3 && ghlToken.startsWith('ey')

          authVariants = looksLikeJWT
            ? [`Bearer ${ghlToken}`, ghlToken]
            : [ghlToken, `Bearer ${ghlToken}`]
        }

        let lastResponseStatus: number | null = null
        let lastErrorData: any = null

        for (const authHeader of authVariants) {
          const headerType = authHeader.startsWith('Bearer') ? 'JWT-style' : 'API-key style'
          console.log(`Attempting GHL contact creation (${headerType} auth)`)

          const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
            method: 'POST',
            headers: {
              'Authorization': authHeader,
              'Content-Type': 'application/json',
              'Version': '2021-07-28'
            },
            body: JSON.stringify(ghlPayload)
          })

          if (response.ok) {
            const responseData = await response.json()
            contactId = responseData.contact?.id
            console.log('Successfully created GHL contact:', {
              contactId: contactId,
              tags: ghlPayload.tags,
              authMode: headerType
            })
            ghlCreated = true
            ghlErrorDetail = null
            break
          }

          lastResponseStatus = response.status
          const errorData = await response.json().catch(() => ({}))
          lastErrorData = errorData
          console.error('Failed GHL contact attempt:', {
            status: response.status,
            error: errorData,
            authMode: headerType
          })
        }

        if (!ghlCreated && lastResponseStatus) {
          ghlErrorDetail = `Failed after trying all auth methods. Last status: ${lastResponseStatus}, Error: ${JSON.stringify(lastErrorData)}`
          console.error('All GHL contact creation attempts failed:', ghlErrorDetail)
        }

      } catch (ghlError) {
        console.error('Error creating GHL contact:', ghlError)
        ghlErrorDetail = ghlError instanceof Error ? ghlError.message : 'Unknown GHL error'
      }
    } else {
      const missingVars = []
      if (!ghlToken) missingVars.push('GHL token')
      if (!ghlLocationId) missingVars.push('GHL_LOCATION_ID')
      ghlErrorDetail = `Missing: ${missingVars.join(', ')}`
      console.warn('GHL integration skipped:', ghlErrorDetail)
    }

    // ----------------------------------------------------------------------
    // Send Email Notifications
    // ----------------------------------------------------------------------

    const resendApiKey = process.env.RESEND_API_KEY
    let emailSent = false
    let emailErrorDetail = null

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY environment variable is not set - skipping email notification')
      emailErrorDetail = 'RESEND_API_KEY missing'
    } else {
      const resend = new Resend(resendApiKey)

      try {
        // Send confirmation email to attendee
        const attendeeEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border: 1px solid #e9ecef; }
    .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .section-title { color: #495057; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
    .info-box { background: #d1f2eb; color: #0c5460; padding: 15px; border-radius: 8px; }
    .button { display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>☕ You're Registered!</h1>
      <p style="margin: 0; font-size: 20px;">Local Business Coffee Meetup</p>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">Hi ${firstName}!</div>
        <p>Thanks for registering for the Local Business Coffee meetup. We're excited to connect with you and other business owners in Colorado.</p>

        <p><strong>What to expect:</strong></p>
        <ul>
          <li>Real conversations about what's working (and what's not)</li>
          <li>Meet 8-12 fellow business owners</li>
          <li>Zero sales pitches - just authentic connections</li>
          <li>Coffee on us!</li>
        </ul>
      </div>

      <div class="section">
        <div class="section-title">📅 Event Details</div>
        <p>
          <strong>Date:</strong> Saturday, March 21, 2026<br>
          <strong>Time:</strong> 9:00 AM - 11:00 AM<br>
          <strong>Location:</strong> The Coffee House<br>
          <strong>Address:</strong> 123 Main Street, Denver, CO 80202
        </p>
      </div>

      <div class="info-box">
        <strong>📧 Check your inbox</strong><br>
        You'll receive a calendar invite and reminder emails as we get closer to the event.
      </div>

      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
        <p>Questions? Reply to this email or call/text: +1 (424) 667-5537</p>
        <p style="margin-top: 15px;">- Matt<br>TrueFlow AI</p>
      </div>
    </div>
  </div>
</body>
</html>
        `.trim()

        // Send notification to team
        const teamEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #06b6d4 0%, #9333ea 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border: 1px solid #e9ecef; }
    .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .section-title { color: #495057; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>☕ New Coffee RSVP</h1>
      <p style="margin: 0; font-size: 18px;">${rsvpData.name}</p>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">Registration Details</div>
        <p>
          <strong>Name:</strong> ${rsvpData.name}<br>
          <strong>Email:</strong> <a href="mailto:${rsvpData.email}">${rsvpData.email}</a><br>
          <strong>Business:</strong> ${rsvpData.businessName}<br>
          <strong>Type:</strong> ${rsvpData.businessType}
        </p>
      </div>

      <div class="section">
        <div class="section-title">GoHighLevel Status</div>
        <p>
          <strong>Contact Created:</strong> ${ghlCreated ? '✅ Yes' : '❌ No'}<br>
          ${contactId ? `<strong>Contact ID:</strong> ${contactId}<br>` : ''}
          <strong>Tag Applied:</strong> coffee-rsvp<br>
          ${ghlErrorDetail ? `<strong>Error:</strong> ${ghlErrorDetail}` : ''}
        </p>
      </div>
    </div>
  </div>
</body>
</html>
        `.trim()

        // Send emails in parallel
        await Promise.all([
          resend.emails.send({
            from: 'TrueFlow Coffee <onboarding@resend.dev>',
            to: [rsvpData.email],
            subject: '☕ You\'re registered for Local Business Coffee!',
            html: attendeeEmailHtml
          }),
          resend.emails.send({
            from: 'TrueFlow Coffee <onboarding@resend.dev>',
            to: ['matt@trueflow.ai'],
            subject: `☕ New Coffee RSVP: ${rsvpData.name}`,
            html: teamEmailHtml
          })
        ])

        console.log('Coffee RSVP emails sent successfully')
        emailSent = true
      } catch (emailError) {
        console.error('Failed to send coffee RSVP emails via Resend:', emailError)
        emailErrorDetail = emailError instanceof Error ? emailError.message : 'Unknown email error'
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      ghlCreated,
      contactId,
      emailSent,
      errors: {
        ghl: ghlErrorDetail,
        email: emailErrorDetail
      }
    })

  } catch (error) {
    console.error('Error processing coffee RSVP:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
