/**
 * API endpoint for gym case study opt-in
 * Creates a contact in GoHighLevel when user opts in to view case study
 */

import { NextRequest, NextResponse } from 'next/server';

interface OptInData {
  email: string;
  firstName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: OptInData = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // ----------------------------------------------------------------------
    // Create Contact in GoHighLevel (GHL)
    // ----------------------------------------------------------------------
    const ghlToken =
      process.env.GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION ||
      process.env.GHL_SUBACCOUNT_API_KEY ||
      process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    if (!ghlToken || !ghlLocationId) {
      console.error('Missing GHL credentials - cannot create contact');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }

    try {
      console.log('Creating GHL contact for gym case study:', data.email);

      const ghlPayload: any = {
        email: data.email,
        locationId: ghlLocationId,
        tags: ["gym-case-study-lead", "case-study-opt-in"],
        source: "trueflow-gym-case-study"
      };

      // Add first name if provided
      if (data.firstName) {
        ghlPayload.firstName = data.firstName;
        ghlPayload.name = data.firstName;
      }

      // Detect if this is a JWT token or legacy API key
      const isJWT = ghlToken.includes('.');
      const authHeader = isJWT ? `Bearer ${ghlToken}` : ghlToken;

      const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json',
          'Version': '2021-07-28'
        },
        body: JSON.stringify(ghlPayload)
      });

      if (!ghlResponse.ok) {
        const errorData = await ghlResponse.json().catch(() => ({}));
        console.error('Failed to create GHL contact:', {
          status: ghlResponse.status,
          statusText: ghlResponse.statusText,
          error: errorData,
          locationId: ghlLocationId
        });

        return NextResponse.json(
          { error: 'Failed to save contact. Please try again.' },
          { status: 500 }
        );
      }

      const responseData = await ghlResponse.json();
      console.log('Successfully created GHL contact:', {
        contactId: responseData.contact?.id,
        tags: ghlPayload.tags
      });

      return NextResponse.json({
        success: true,
        message: 'Successfully opted in to view case study'
      }, { status: 200 });

    } catch (ghlError) {
      console.error('Error creating GHL contact:', ghlError);
      return NextResponse.json(
        { error: 'Failed to save contact. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing opt-in:', error);
    return NextResponse.json(
      {
        error: 'Failed to process opt-in. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle CORS for API calls
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://trueflow.ai',
    'https://www.trueflow.ai',
    'http://localhost:3000',
    'http://localhost:3001'
  ];

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };

  if (origin && allowedOrigins.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin;
  }

  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}
