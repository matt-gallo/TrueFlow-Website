import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, unlink, readdir, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// Use file-based storage that persists across deployments
const STORAGE_DIR = join(process.cwd(), '.signup-data')
const TTL_HOURS = 72 // 72 hours (3 days)

// Ensure storage directory exists
async function ensureStorageDir() {
  if (!existsSync(STORAGE_DIR)) {
    await mkdir(STORAGE_DIR, { recursive: true })
  }
}

// Store signup data before payment
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.signupId) {
      return NextResponse.json({ error: 'signupId is required' }, { status: 400 })
    }

    await ensureStorageDir()

    const signupData = {
      ...data,
      createdAt: Date.now(),
      expiresAt: Date.now() + (TTL_HOURS * 60 * 60 * 1000)
    }

    const filePath = join(STORAGE_DIR, `${data.signupId}.json`)
    await writeFile(filePath, JSON.stringify(signupData, null, 2), 'utf-8')

    console.log('[SignupData] Stored pending signup:', data.signupId, 'expires in', TTL_HOURS, 'hours')
    console.log('[SignupData] Full data:', JSON.stringify(data, null, 2))

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
    const filePath = join(STORAGE_DIR, `${signupId}.json`)

    if (!existsSync(filePath)) {
      console.log('[SignupData] Signup data not found:', signupId)
      return NextResponse.json({ error: 'Signup data not found or expired' }, { status: 404 })
    }

    const fileContent = await readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    // Check if expired
    if (Date.now() > data.expiresAt) {
      await unlink(filePath).catch(() => {}) // Delete expired file
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
    const filePath = join(STORAGE_DIR, `${signupId}.json`)
    const existed = existsSync(filePath)

    if (existed) {
      await unlink(filePath)
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

// Cleanup expired entries - called manually or via cron
export async function cleanupExpired() {
  try {
    await ensureStorageDir()
    const files = await readdir(STORAGE_DIR)
    const now = Date.now()
    let cleanedCount = 0

    for (const file of files) {
      if (!file.endsWith('.json')) continue

      const filePath = join(STORAGE_DIR, file)
      try {
        const content = await readFile(filePath, 'utf-8')
        const data = JSON.parse(content)

        if (now > data.expiresAt) {
          await unlink(filePath)
          cleanedCount++
        }
      } catch (err) {
        // Delete corrupted files
        await unlink(filePath).catch(() => {})
        cleanedCount++
      }
    }

    if (cleanedCount > 0) {
      console.log(`[SignupData] Cleaned up ${cleanedCount} expired/corrupted signup entries`)
    }

    return cleanedCount
  } catch (error) {
    console.error('[SignupData] Error during cleanup:', error)
    return 0
  }
}
