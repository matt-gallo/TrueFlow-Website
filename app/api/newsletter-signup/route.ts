import { NextRequest, NextResponse } from 'next/server'

interface NewsletterSignupBody {
  firstName?: string
  lastName?: string
  email?: string
  interests?: string[]
}

const GHL_NEWSLETTER_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/GVFoSfHpPaXzRXCJbym0/webhook-trigger/e7d3c290-27e7-4c9c-a460-d75eb6c77fa7'

const VALID_INTERESTS = new Set([
  'ai-tools',
  'ai-for-business',
  'agents-automation',
  'llm-research',
  'ai-news',
  'prompt-engineering',
])

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterSignupBody = await request.json()
    const firstName = body.firstName?.trim() || ''
    const lastName = body.lastName?.trim() || ''
    const email = body.email?.trim().toLowerCase() || ''
    const interests = Array.isArray(body.interests)
      ? body.interests.filter((i) => VALID_INTERESTS.has(i))
      : []

    if (!firstName) {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 })
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }
    if (interests.length === 0) {
      return NextResponse.json({ error: 'Select at least one interest' }, { status: 400 })
    }

    const payload = {
      firstName,
      lastName,
      email,
      name: `${firstName} ${lastName}`.trim(),
      interests,
      tags: ['newsletter-subscriber', ...interests.map((i) => `interest-${i}`)],
      source: 'trueflow-blog-newsletter',
      submittedAt: new Date().toISOString(),
    }

    const response = await fetch(GHL_NEWSLETTER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errText = await response.text().catch(() => '')
      console.error('GHL webhook failed:', response.status, errText.substring(0, 200))
      return NextResponse.json(
        { error: 'Could not complete signup. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'https://trueflow.ai',
    'https://www.trueflow.ai',
    'http://localhost:3000',
    'http://localhost:3001',
  ]

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  }
  if (origin && allowedOrigins.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin
  }

  return new NextResponse(null, { status: 200, headers: corsHeaders })
}
