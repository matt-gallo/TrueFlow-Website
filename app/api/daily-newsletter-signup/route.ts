import { NextRequest, NextResponse } from 'next/server'

interface DailyNewsletterSignupBody {
  firstName?: string
  email?: string
  variant?: string
}

// TrueFlow Daily Newsletter — GHL webhook (Matt's subaccount workflow handles tagging + downstream)
const GHL_DAILY_NEWSLETTER_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/GVFoSfHpPaXzRXCJbym0/webhook-trigger/2eb90154-ebc3-4400-bc3a-e0def17f1e76'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body: DailyNewsletterSignupBody = await request.json()
    const firstName = body.firstName?.trim() || ''
    const email = body.email?.trim().toLowerCase() || ''
    // A/B test variant (a|b|c) — kept short + safe for use in the source field
    const variant = (body.variant || '').toString().trim().toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 12)

    // First name is optional (email-first reduces signup friction). Email is required.
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const payload = {
      firstName,
      email,
      // Fallback so GHL personalization tokens (e.g. "Hi {{firstName}}") don't render blank.
      name: firstName || 'there',
      source: variant
        ? `trueflow-daily-newsletter-subscribe-${variant}`
        : 'trueflow-daily-newsletter-subscribe-page',
      variant: variant || 'page',
      // GHL workflow uses this to trigger the bonus toolkit delivery + 7-day welcome sequence
      bonusOptin: 'business-owners-ai-toolkit-q2-2026',
      submittedAt: new Date().toISOString(),
    }

    const response = await fetch(GHL_DAILY_NEWSLETTER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errText = await response.text().catch(() => '')
      console.error('GHL daily newsletter webhook failed:', response.status, errText.substring(0, 200))
      return NextResponse.json(
        { error: 'Could not complete signup. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Daily newsletter signup error:', error)
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
