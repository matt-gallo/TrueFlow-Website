/**
 * Assessment Results API
 * Called when a user completes the AI Readiness Assessment.
 * - Finds or creates GHL contact
 * - Saves score, tier, and summary as custom fields
 * - Adds assessment-complete tag (triggers GHL workflow)
 * - Creates opportunity in assessment pipeline
 */

import { NextRequest, NextResponse } from 'next/server';

const GHL_BASE = 'https://services.leadconnectorhq.com';
const LOCATION_ID = process.env.GHL_LOCATION_ID!;

// Custom field IDs created in GHL
const FIELD_SCORE = 'Kvv6Flk94vJb7KxEranS';
const FIELD_TIER = 'HSkp8IcDealP9LYgI0ei';
const FIELD_SUMMARY = 'gaDGblZETR1A0FVblqwm';

// Paste your assessment pipeline ID here once you have it from GHL
const ASSESSMENT_PIPELINE_ID = process.env.GHL_ASSESSMENT_PIPELINE_ID || '';

function getAuthHeader() {
  const token =
    process.env.GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION ||
    process.env.GHL_SUBACCOUNT_API_KEY ||
    process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN || '';
  return token.includes('.') ? `Bearer ${token}` : token;
}

async function ghlFetch(path: string, method: string, body?: object) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method,
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res;
}

async function findContactByEmail(email: string): Promise<string | null> {
  const res = await ghlFetch(
    `/contacts/?locationId=${LOCATION_ID}&query=${encodeURIComponent(email)}`,
    'GET'
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.contacts?.[0]?.id ?? null;
}

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, score, tier, summary, insights } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Build summary text
    const summaryText = [
      `Score: ${score}/100`,
      `Tier: ${tier}`,
      ``,
      `Top Opportunities:`,
      ...(insights as string[]).map((ins: string, i: number) => `${i + 1}. ${ins}`),
    ].join('\n');

    // Find existing contact or create new one
    let contactId = await findContactByEmail(email);

    if (!contactId) {
      const createRes = await ghlFetch('/contacts/', 'POST', {
        email,
        firstName,
        name: firstName,
        locationId: LOCATION_ID,
        tags: ['assessment-lead', 'popup-capture'],
        source: 'trueflow-assessment',
      });
      if (!createRes.ok) {
        console.error('Failed to create contact:', await createRes.text());
        return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
      }
      const created = await createRes.json();
      contactId = created.contact?.id;
    }

    if (!contactId) {
      return NextResponse.json({ error: 'Could not resolve contact' }, { status: 500 });
    }

    // Update contact with assessment data + add assessment-complete tag
    const tierTag = `tier-${tier.toLowerCase().replace(/\s+/g, '-')}`;
    const updateRes = await ghlFetch(`/contacts/${contactId}`, 'PUT', {
      tags: ['assessment-complete', 'ai-readiness-assessment', tierTag],
      customFields: [
        { id: FIELD_SCORE, value: String(score) },
        { id: FIELD_TIER, value: tier },
        { id: FIELD_SUMMARY, value: summaryText },
      ],
    });

    if (!updateRes.ok) {
      console.error('Failed to update contact:', await updateRes.text());
      return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
    }

    // Add to assessment pipeline if configured
    if (ASSESSMENT_PIPELINE_ID) {
      await ghlFetch('/opportunities/', 'POST', {
        pipelineId: ASSESSMENT_PIPELINE_ID,
        locationId: LOCATION_ID,
        contactId,
        name: `${firstName || email} — AI Assessment (${tier})`,
        status: 'open',
      });
    }

    console.log(`Assessment complete for ${email} — Score: ${score}, Tier: ${tier}`);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Assessment results error:', error);
    return NextResponse.json({ error: 'Failed to process results' }, { status: 500 });
  }
}
