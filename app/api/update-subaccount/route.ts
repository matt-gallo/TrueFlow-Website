import { NextRequest, NextResponse } from 'next/server'

const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'

export async function PUT(request: NextRequest) {
  const privateIntegrationToken = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN

  if (!privateIntegrationToken) {
    console.error('GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN not configured')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const body = await request.json().catch(() => null)
  if (!body || !body.locationId) {
    return NextResponse.json({ error: 'locationId is required' }, { status: 400 })
  }

  const { locationId, ...updateData } = body

  console.log('Updating GHL sub-account:', locationId)

  try {
    const response = await fetch(`${GHL_API_BASE}/locations/${locationId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${privateIntegrationToken}`,
        'Content-Type': 'application/json',
        'Version': GHL_API_VERSION
      },
      body: JSON.stringify(updateData)
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error('GHL API error:', response.status, responseData)
      return NextResponse.json({
        error: 'Failed to update sub-account',
        details: responseData.message || responseData.error
      }, { status: response.status })
    }

    console.log('Successfully updated GHL sub-account:', locationId)

    return NextResponse.json({
      status: 'success',
      locationId,
      message: 'Sub-account updated successfully',
      data: responseData
    })

  } catch (error) {
    console.error('Error updating GHL sub-account:', error)
    return NextResponse.json({
      error: 'An unexpected error occurred',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
