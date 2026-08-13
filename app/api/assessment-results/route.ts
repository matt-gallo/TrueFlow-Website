/**
 * Assessment Results API
 * Called when a user completes the AI Readiness Assessment.
 * - Finds or creates GHL contact
 * - Saves score, tier, and summary as custom fields
 * - Adds assessment-complete tag (triggers GHL workflow)
 * - Creates opportunity in assessment pipeline
 */

import { NextRequest, NextResponse } from 'next/server';
import { enrichSite, siteFromEmail } from '@/lib/growth-audit/enrich';
import { generateAudit } from '@/lib/growth-audit/generate';

const GHL_BASE = 'https://services.leadconnectorhq.com';
const LOCATION_ID = process.env.GHL_LOCATION_ID!;

// Custom field IDs — verified against the TrueFlow location (GVFoSfHpPaXzRXCJbym0)
// on 2026-08-13. The previous IDs here did not exist in the location, which
// (behind the auth failure) was silently dropping every field write.
const FIELD_SCORE = '775YQw2eMJFlqQKhyNjN';        // "readiness score" (NUMERICAL)
const FIELD_TIER = '9y4KOp7qN4dRVshd2m6o';         // "readiness tier" (TEXT)
const FIELD_SUMMARY = 'R2xMXY1BvSCXvycoozwf';      // "readiness summary" (LARGE_TEXT)
// The AI-written "what I'd fix first". Env var still wins if set, so a future
// remap doesn't need a code change.
const FIELD_RECOMMENDATION = process.env.GHL_FIELD_RECOMMENDATION || 'GEYL4Phe8movetNBtqme'; // "readiness recommendation" (LARGE_TEXT)

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
    const { firstName, email, score, tier, tierSlug, website, businessName, insights } =
      await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Go look at their actual business rather than trusting the form alone.
    // Prefer a website they gave us; otherwise infer it from their email domain
    // (skipped automatically for gmail/outlook/etc). Never blocks the response.
    const siteTarget = website || siteFromEmail(email);
    const site = siteTarget ? await enrichSite(siteTarget) : null;

    // The model writes the mirror. Falls back to the deterministic insights if
    // the key is missing or the call fails, so the funnel never stalls here.
    const audit = await generateAudit({
      firstName,
      businessName,
      score,
      tier,
      insights: (insights as string[]) || [],
      site,
    });

    const summaryText = [
      `Score: ${score}/100`,
      `Tier: ${tier}`,
      site?.reachable ? `Site reviewed: ${site.url}` : `Site: not reviewed`,
      ``,
      audit.summary,
      ``,
      `What I'd fix first:`,
      audit.recommendation,
      ``,
      `Order of operations:`,
      ...audit.priorities.map((p, i) => `${i + 1}. ${p}`),
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

    // Update contact with assessment data + add assessment-complete tag.
    // Prefer the explicit slug from the client (tier-producer). Fall back to
    // slugifying the label for older callers that don't send one.
    const tierTag = `tier-${(tierSlug || tier).toLowerCase().replace(/^the-/, '').replace(/\s+/g, '-')}`;

    const customFields = [
      { id: FIELD_SCORE, value: String(score) },
      { id: FIELD_TIER, value: tier },
      { id: FIELD_SUMMARY, value: summaryText },
    ];
    if (FIELD_RECOMMENDATION) {
      customFields.push({ id: FIELD_RECOMMENDATION, value: audit.recommendation });
    }

    const updateRes = await ghlFetch(`/contacts/${contactId}`, 'PUT', {
      tags: [
        'assessment-complete',
        'ai-readiness-assessment',
        tierTag,
        // Lets Melissa branch the email: did we actually get to read their site?
        audit.usedSiteData ? 'audit-site-reviewed' : 'audit-answers-only',
      ],
      customFields,
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
