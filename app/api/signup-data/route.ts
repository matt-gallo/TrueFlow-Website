import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for pending signups (in production, use a database)
const pendingSignups = new Map<string, any>()

// Store signup data before payment
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.signupId) {
      return NextResponse.json({ error: 'signupId is required' }, { status: 400 })
    }

    // Store data with TTL of 1 hour
    pendingSignups.set(data.signupId, {
      ...data,
      createdAt: Date.now(),
      expiresAt: Date.now() + (60 * 60 * 1000) // 1 hour
    })

    console.log('[SignupData] Stored pending signup:', data.signupId)

    return NextResponse.json({
      success: true,
      signupId: data.signupId
    })
  } catch (error) {
    console.error('[SignupData] Error storing signup data:', error)
    return NextResponse.json({
      error: 'Failed to store signup data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Retrieve signup data by ID
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const signupId = searchParams.get('signupId')

  if (!signupId) {
    return NextResponse.json({ error: 'signupId parameter is required' }, { status: 400 })
  }

  const data = pendingSignups.get(signupId)

  if (!data) {
    return NextResponse.json({ error: 'Signup data not found or expired' }, { status: 404 })
  }

  // Check if expired
  if (Date.now() > data.expiresAt) {
    pendingSignups.delete(signupId)
    return NextResponse.json({ error: 'Signup data expired' }, { status: 410 })
  }

  return NextResponse.json(data)
}

// Delete signup data after processing
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const signupId = searchParams.get('signupId')

  if (!signupId) {
    return NextResponse.json({ error: 'signupId parameter is required' }, { status: 400 })
  }

  const existed = pendingSignups.has(signupId)
  pendingSignups.delete(signupId)

  console.log('[SignupData] Deleted signup data:', signupId)

  return NextResponse.json({
    success: true,
    existed
  })
}

// Cleanup expired entries periodically
setInterval(() => {
  const now = Date.now()
  let cleanedCount = 0

  Array.from(pendingSignups.entries()).forEach(([signupId, data]) => {
    if (now > data.expiresAt) {
      pendingSignups.delete(signupId)
      cleanedCount++
    }
  })

  if (cleanedCount > 0) {
    console.log(`[SignupData] Cleaned up ${cleanedCount} expired signup entries`)
  }
}, 5 * 60 * 1000) // Run every 5 minutes
