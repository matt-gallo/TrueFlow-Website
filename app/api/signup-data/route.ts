import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for signup data (survives within single deployment)
const signupDataStore = new Map<string, any>()
const TTL_HOURS = 24 // 24 hours

// Store signup data before payment
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.signupId) {
      return NextResponse.json({ error: 'signupId is required' }, { status: 400 })
    }

    const signupData = {
      ...data,
      createdAt: Date.now(),
      expiresAt: Date.now() + (TTL_HOURS * 60 * 60 * 1000)
    }

    signupDataStore.set(data.signupId, signupData)

    console.log('[SignupData] Stored pending signup:', data.signupId, 'expires in', TTL_HOURS, 'hours')
    console.log('[SignupData] Current store size:', signupDataStore.size)

    return NextResponse.json({
      success: true,
      signupId: data.signupId,
      expiresAt: new Date(signupData.expiresAt).toISOString()
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

  try {
    const data = signupDataStore.get(signupId)

    if (!data) {
      console.log('[SignupData] Signup data not found:', signupId)
      console.log('[SignupData] Current store has:', Array.from(signupDataStore.keys()))
      return NextResponse.json({ error: 'Signup data not found or expired' }, { status: 404 })
    }

    // Check if expired
    if (Date.now() > data.expiresAt) {
      signupDataStore.delete(signupId)
      console.log('[SignupData] Signup data expired:', signupId)
      return NextResponse.json({ error: 'Signup data expired' }, { status: 410 })
    }

    console.log('[SignupData] Retrieved signup data:', signupId)
    return NextResponse.json(data)
  } catch (error) {
    console.error('[SignupData] Error retrieving signup data:', error)
    return NextResponse.json({
      error: 'Failed to retrieve signup data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Delete signup data after processing
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const signupId = searchParams.get('signupId')

  if (!signupId) {
    return NextResponse.json({ error: 'signupId parameter is required' }, { status: 400 })
  }

  try {
    const existed = signupDataStore.has(signupId)

    if (existed) {
      signupDataStore.delete(signupId)
      console.log('[SignupData] Deleted signup data:', signupId)
    }

    return NextResponse.json({
      success: true,
      existed
    })
  } catch (error) {
    console.error('[SignupData] Error deleting signup data:', error)
    return NextResponse.json({
      error: 'Failed to delete signup data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Cleanup expired entries periodically
function cleanupExpired() {
  const now = Date.now()
  let cleanedCount = 0

  // Convert Map entries to array for iteration (TypeScript compatibility)
  Array.from(signupDataStore.entries()).forEach(([signupId, data]) => {
    if (now > data.expiresAt) {
      signupDataStore.delete(signupId)
      cleanedCount++
    }
  })

  if (cleanedCount > 0) {
    console.log(`[SignupData] Cleaned up ${cleanedCount} expired signup entries`)
  }
}

// Run cleanup every hour
setInterval(cleanupExpired, 60 * 60 * 1000)
