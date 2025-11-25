import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'

const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'

function generateTemporaryPassword(): string {
  const override = process.env.GHL_DEFAULT_USER_PASSWORD
  if (override && override.trim().length > 0) {
    return override
  }

  return `Tf!${randomBytes(8).toString('hex')}9`
}

export async function POST(request: Request) {
  const privateIntegrationToken = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN
  const userCreationToken = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION || privateIntegrationToken
  const companyId = process.env.GHL_COMPANY_ID

  // Validate environment variables
  if (!privateIntegrationToken) {
    console.error('GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN not configured')
    return NextResponse.json({ error: 'Server configuration error: Agency Private Integration Token not set' }, { status: 500 })
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

  const userEmail = body.prospectInfo?.email
  const userFirstName = body.prospectInfo?.firstName
  const userLastName = body.prospectInfo?.lastName || 'User'

  if (!userEmail || !userFirstName) {
    return NextResponse.json({
      error: 'Primary contact name and email are required to finish onboarding.'
    }, { status: 400 })
  }

  // Log incoming data for debugging
  console.log('Received form data:', {
    name: body.name,
    locationEmail: body.email,
    hasLocationEmail: !!body.email,
    prospectInfo: body.prospectInfo,
    hasProspectEmail: !!body.prospectInfo?.email,
    prospectEmail: body.prospectInfo?.email,
    // Log accelerator metadata if present
    metadata: body.metadata ? {
      role: body.metadata.role,
      teamSize: body.metadata.teamSize,
      primaryGoal: body.metadata.primaryGoal,
      selectedResources: body.metadata.selectedResources,
      includeSuccessManager: body.metadata.includeSuccessManager
    } : null
  })

  // Build the payload for GHL API
  // Only include fields that have values (GHL API handles optional fields)
  const payload: any = {
    name: body.name,
    companyId: companyId
  }

  // Add optional fields only if they exist
  if (body.email) payload.email = body.email
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
    // Only include prospectInfo fields that have values
    const filteredProspectInfo: any = {}
    if (body.prospectInfo.firstName) filteredProspectInfo.firstName = body.prospectInfo.firstName
    if (body.prospectInfo.lastName) filteredProspectInfo.lastName = body.prospectInfo.lastName
    if (body.prospectInfo.email) filteredProspectInfo.email = body.prospectInfo.email
    if (Object.keys(filteredProspectInfo).length > 0) {
      payload.prospectInfo = filteredProspectInfo
    }
  }

  if (body.settings) {
    payload.settings = body.settings
  }

  if (body.social && Object.values(body.social).some(v => v)) {
    // Only include social fields that have values
    const filteredSocial: any = {}
    Object.entries(body.social).forEach(([key, value]) => {
      if (value) {
        filteredSocial[key] = value
      }
    })
    if (Object.keys(filteredSocial).length > 0) {
      payload.social = filteredSocial
    }
  }

  if (body.twilio && (body.twilio.sid || body.twilio.authToken)) {
    // Only include twilio fields that have values
    const filteredTwilio: any = {}
    if (body.twilio.sid) filteredTwilio.sid = body.twilio.sid
    if (body.twilio.authToken) filteredTwilio.authToken = body.twilio.authToken
    if (Object.keys(filteredTwilio).length > 0) {
      payload.twilio = filteredTwilio
    }
  }

  if (body.mailgun && (body.mailgun.apiKey || body.mailgun.domain)) {
    // Only include mailgun fields that have values
    const filteredMailgun: any = {}
    if (body.mailgun.apiKey) filteredMailgun.apiKey = body.mailgun.apiKey
    if (body.mailgun.domain) filteredMailgun.domain = body.mailgun.domain
    if (Object.keys(filteredMailgun).length > 0) {
      payload.mailgun = filteredMailgun
    }
  }

  if (body.snapshotId) {
    payload.snapshotId = body.snapshotId
  }

  console.log('Creating GHL sub-account with payload:', {
    ...payload,
    companyId: '[REDACTED]',
    hasLocationEmail: !!payload.email,
    hasProspectInfo: !!payload.prospectInfo,
    prospectInfoFields: payload.prospectInfo ? Object.keys(payload.prospectInfo) : []
  })

  try {
    // Call GoHighLevel API to create sub-account
    const response = await fetch(`${GHL_API_BASE}/locations/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${privateIntegrationToken}`,
        'Content-Type': 'application/json',
        'Version': GHL_API_VERSION
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

    const locationId = responseData.id
    const userPayload = {
      companyId,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      password: generateTemporaryPassword(),
      phone: body.phone || undefined,
      type: 'account',
      role: 'admin',
      locationIds: [locationId]
    }

    console.log('Creating user for new sub-account', {
      email: userEmail,
      firstName: userFirstName,
      lastName: userLastName,
      locationId
    })

    const userResponse = await fetch(`${GHL_API_BASE}/users/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userCreationToken}`,
        'Content-Type': 'application/json',
        'Version': GHL_API_VERSION
      },
      body: JSON.stringify(userPayload)
    })

    const userData = await userResponse.json()

    if (!userResponse.ok) {
      console.error('Failed to create user for sub-account', {
        status: userResponse.status,
        response: userData
      })

      return NextResponse.json({
        error: 'Sub-account created, but failed to provision user access. Please contact support.',
        details: userData.message || userData.error,
        locationId
      }, { status: userResponse.status })
    }

    console.log('Successfully added user to new sub-account', userData.id)

    return NextResponse.json({
      status: 'success',
      locationId,
      userId: userData.id,
      message: 'Sub-account and user created successfully'
    })

  } catch (error) {
    console.error('Error creating GHL sub-account:', error)
    return NextResponse.json({
      error: 'An unexpected error occurred. Please try again or contact support.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
