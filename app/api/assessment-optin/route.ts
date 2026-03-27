/**
 * API endpoint for Assessment popup lead capture
 * Forwards lead data to GHL webhook for contact creation and tagging
 */

import { NextRequest, NextResponse } from 'next/server';

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/GVFoSfHpPaXzRXCJbym0/webhook-trigger/7481bde1-2a8c-4525-a3d1-996b81f04ff6';

export async function POST(request: NextRequest) {
  try {
    const { firstName, email } = await request.json();

    if (!firstName || !email) {
      return NextResponse.json({ error: 'First name and email are required' }, { status: 400 });
    }

    const webhookRes = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, email, source: 'assessment-popup' }),
    });

    if (!webhookRes.ok) {
      console.error('GHL webhook failed:', webhookRes.status, await webhookRes.text());
      return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Assessment opt-in error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
