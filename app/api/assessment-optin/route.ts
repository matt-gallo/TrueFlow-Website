/**
 * API endpoint for Assessment popup lead capture
 * Creates a GHL contact tagged as assessment-lead before redirecting to the assessment
 */

import { NextRequest, NextResponse } from 'next/server';

interface AssessmentOptInData {
  firstName: string;
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: AssessmentOptInData = await request.json();

    if (!data.email || !data.firstName) {
      return NextResponse.json(
        { error: 'First name and email are required' },
        { status: 400 }
      );
    }

    const ghlToken =
      process.env.GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION ||
      process.env.GHL_SUBACCOUNT_API_KEY ||
      process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    if (!ghlToken || !ghlLocationId) {
      console.error('Missing GHL credentials');
      return NextResponse.json({ error: 'Service configuration error' }, { status: 500 });
    }

    const isJWT = ghlToken.includes('.');
    const authHeader = isJWT ? `Bearer ${ghlToken}` : ghlToken;

    const ghlPayload = {
      email: data.email,
      firstName: data.firstName,
      name: data.firstName,
      locationId: ghlLocationId,
      tags: ['assessment-lead', 'popup-capture', 'ai-readiness-assessment'],
      source: 'trueflow-assessment-popup',
    };

    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      const errorData = await ghlResponse.json().catch(() => ({}));
      console.error('Failed to create GHL contact:', {
        status: ghlResponse.status,
        error: errorData,
      });
      return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
    }

    const responseData = await ghlResponse.json();
    console.log('Assessment lead created:', responseData.contact?.id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Assessment opt-in error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
