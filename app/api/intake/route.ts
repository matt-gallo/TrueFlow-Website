import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const privateIntegrationToken = process.env.GHL_PRIVATE_INTEGRATION_TOKEN
  const companyId = process.env.GHL_COMPANY_ID

  // Validate environment variables
  if (!privateIntegrationToken) {
    console.error('GHL_PRIVATE_INTEGRATION_TOKEN not configured')
    return NextResponse.json({ error: 'Server configuration error: Private Integration Token not set' }, { status: 500 })
  }

  if (!companyId) {
    console.error('GHL_COMPANY_ID not configured')
    return NextResponse.json({ error: 'Server configuration error: Company ID not set' }, { status: 500 })
  }

  // Parse and validate request body
  const body = await request.json().catch(() => null)
  if (!body || !body.name) {
    return NextResponse.json({ error: 'Business name is required' }, { status: 400 })
  }

  // Build the payload for GHL API
  // Only include fields that have values (GHL API handles optional fields)
  const payload: any = {
    name: body.name,
    companyId: companyId
  }

  // Add optional fields only if they exist
  if (body.phone) payload.phone = body.phone
  if (body.address) payload.address = body.address
  if (body.city) payload.city = body.city
  if (body.state) payload.state = body.state
  if (body.country) payload.country = body.country
  if (body.postalCode) payload.postalCode = body.postalCode
  if (body.website) payload.website = body.website
  if (body.timezone) payload.timezone = body.timezone

  // Add nested objects only if they have data
  if (body.prospectInfo && (body.prospectInfo.firstName || body.prospectInfo.lastName || body.prospectInfo.email)) {
    payload.prospectInfo = body.prospectInfo
  }

  if (body.settings) {
    payload.settings = body.settings
  }

  if (body.social && Object.values(body.social).some(v => v)) {
    payload.social = body.social
  }

  if (body.twilio && (body.twilio.sid || body.twilio.authToken)) {
    payload.twilio = body.twilio
  }

  if (body.mailgun && (body.mailgun.apiKey || body.mailgun.domain)) {
    payload.mailgun = body.mailgun
  }

  if (body.snapshotId) {
    payload.snapshotId = body.snapshotId
  }

  console.log('Creating GHL sub-account with payload:', { ...payload, companyId: '[REDACTED]' })

  try {
    // Call GoHighLevel API to create sub-account
    const response = await fetch('https://services.leadconnectorhq.com/locations/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${privateIntegrationToken}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify(payload)
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error('GHL API error:', response.status, responseData)

      // Handle specific error cases
      if (response.status === 401) {
        return NextResponse.json({ error: 'Authentication failed with GoHighLevel. Please contact support.' }, { status: 500 })
      }

      if (response.status === 400) {
        return NextResponse.json({
          error: 'Invalid data provided. Please check your inputs and try again.',
          details: responseData.message || responseData.error
        }, { status: 400 })
      }

      return NextResponse.json({
        error: 'Failed to create sub-account. Please try again or contact support.',
        details: responseData.message || responseData.error
      }, { status: response.status })
    }

    console.log('Successfully created GHL sub-account:', responseData.id)

    return NextResponse.json({
      status: 'success',
      locationId: responseData.id,
      message: 'Sub-account created successfully'
    })

  } catch (error) {
    console.error('Error creating GHL sub-account:', error)
    return NextResponse.json({
      error: 'An unexpected error occurred. Please try again or contact support.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
