import { NextRequest, NextResponse } from 'next/server';

/**
 * Instantly Webhook Handler
 *
 * Receives webhooks from Instantly for:
 * - reply_received: When leads reply to emails
 * - email_link_clicked: When leads click links (opt-in tracking)
 * - campaign_completed: When a lead finishes the sequence
 * - lead_unsubscribed: When leads unsubscribe
 * - email_bounced: When emails bounce
 *
 * Workflow:
 * 1. Receive webhook event
 * 2. Classify reply (if applicable) using AI
 * 3. Apply tag to lead in Instantly
 * 4. Transfer interested/opted-in leads to GHL
 * 5. Log for debugging
 */

// Event type definitions
interface InstantlyWebhookEvent {
  event_type: string;
  lead_email: string;
  campaign_id: string;
  campaign_name: string;
  reply_body?: string;
  link_url?: string;
  timestamp: string;
  lead_first_name?: string;
  lead_last_name?: string;
  lead_company?: string;
}

// Reply classification categories
type ReplyClassification =
  | 'INTERESTED'
  | 'NOT_NOW'
  | 'NOT_INTERESTED'
  | 'OUT_OF_OFFICE'
  | 'QUESTION'
  | 'REFERRAL'
  | 'POSITIVE';

export async function POST(req: NextRequest) {
  console.log('📥 Instantly webhook received');

  try {
    const event: InstantlyWebhookEvent = await req.json();

    console.log('Event type:', event.event_type);
    console.log('Lead:', event.lead_email);
    console.log('Campaign:', event.campaign_name);

    // Route to appropriate handler based on event type
    switch (event.event_type) {
      case 'reply_received':
        await handleReply(event);
        break;

      case 'email_link_clicked':
        await handleLinkClick(event);
        break;

      case 'campaign_completed':
        await handleCampaignComplete(event);
        break;

      case 'lead_unsubscribed':
        await handleUnsubscribe(event);
        break;

      case 'email_bounced':
        await handleBounce(event);
        break;

      default:
        console.log('Unhandled event type:', event.event_type);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

/**
 * Handle reply_received events
 * 1. Classify the reply using AI
 * 2. Apply appropriate tag in Instantly
 * 3. If INTERESTED, trigger opt-in email
 */
async function handleReply(event: InstantlyWebhookEvent) {
  console.log('💬 Processing reply from:', event.lead_email);

  if (!event.reply_body) {
    console.log('No reply body, skipping classification');
    return;
  }

  // Step 1: Classify the reply
  const classification = await classifyReply(event.reply_body);
  console.log('Classification:', classification);

  // Step 2: Apply tag in Instantly
  await applyInstantlyTag(event.lead_email, classification);

  // Step 3: Log the reply
  await logReply({
    email: event.lead_email,
    campaign: event.campaign_name,
    classification,
    reply_body: event.reply_body,
    timestamp: event.timestamp,
  });

  // Step 4: If interested, send opt-in email (Email 5)
  if (classification === 'INTERESTED') {
    console.log('✅ Lead is interested, triggering opt-in email');
    await sendOptInEmail(event);
  }

  // Step 5: If not interested, stop campaign
  if (classification === 'NOT_INTERESTED') {
    console.log('❌ Lead not interested, stopping campaign');
    // Could optionally stop the campaign for this lead
  }
}

/**
 * Handle email_link_clicked events
 * Check if it's the opt-in trigger link and transfer to GHL
 */
async function handleLinkClick(event: InstantlyWebhookEvent) {
  console.log('🔗 Link clicked by:', event.lead_email);
  console.log('Link URL:', event.link_url);

  // Check if this is the opt-in trigger link
  if (event.link_url?.includes('/coffee-club/register')) {
    console.log('✅ Opt-in link clicked!');

    // Step 1: Tag as OPT_IN in Instantly
    await applyInstantlyTag(event.lead_email, 'OPT_IN');

    // Step 2: Transfer to GHL
    await transferToGHL({
      email: event.lead_email,
      firstName: event.lead_first_name || '',
      lastName: event.lead_last_name || '',
      companyName: event.lead_company || '',
      source: 'instantly_coffee_club',
      campaignName: event.campaign_name,
    });

    // Step 3: Log the conversion
    await logConversion({
      email: event.lead_email,
      campaign: event.campaign_name,
      timestamp: event.timestamp,
    });

    console.log('✅ Lead transferred to GHL successfully');
  }
}

/**
 * Handle campaign_completed events
 */
async function handleCampaignComplete(event: InstantlyWebhookEvent) {
  console.log('✅ Campaign completed for:', event.lead_email);

  // Tag as completed
  await applyInstantlyTag(event.lead_email, 'CAMPAIGN_COMPLETED');
}

/**
 * Handle lead_unsubscribed events
 */
async function handleUnsubscribe(event: InstantlyWebhookEvent) {
  console.log('🚫 Lead unsubscribed:', event.lead_email);

  // Tag as unsubscribed
  await applyInstantlyTag(event.lead_email, 'UNSUBSCRIBED');
}

/**
 * Handle email_bounced events
 */
async function handleBounce(event: InstantlyWebhookEvent) {
  console.log('⚠️ Email bounced:', event.lead_email);

  // Tag as bounced for list cleaning
  await applyInstantlyTag(event.lead_email, 'BOUNCED');
}

/**
 * Classify email reply using AI
 */
async function classifyReply(replyBody: string): Promise<ReplyClassification> {
  try {
    // Use OpenAI for classification
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a reply classification system. Classify email replies into exactly one category:

INTERESTED: Explicit yes, wants details, asks about dates/logistics, says "send me info", "count me in", etc.
NOT_NOW: Says maybe later, timing isn't right, try next quarter, currently busy
NOT_INTERESTED: No thanks, not relevant, please remove me, not a good fit
OUT_OF_OFFICE: Auto-responder, will return on [date], out of office
QUESTION: Asks clarifying questions about the event/purpose before committing
REFERRAL: Suggests someone else, provides intro, "talk to [person]"
POSITIVE: Sounds interested but vague ("sounds cool", "interesting", "tell me more")

Reply with ONLY the category name, nothing else.`,
          },
          {
            role: 'user',
            content: replyBody,
          },
        ],
        temperature: 0.3,
        max_tokens: 20,
      }),
    });

    const data = await response.json();
    const classification = data.choices[0].message.content.trim() as ReplyClassification;

    console.log('AI Classification:', classification);
    return classification;

  } catch (error) {
    console.error('Error classifying reply:', error);
    // Default to POSITIVE if classification fails
    return 'POSITIVE';
  }
}

/**
 * Apply a tag to a lead in Instantly via API
 */
async function applyInstantlyTag(email: string, tag: string) {
  try {
    const response = await fetch('https://api.instantly.ai/api/v2/custom-tags/apply-to-lead', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.INSTANTLY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        tag_name: tag,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to apply tag: ${response.status}`);
    }

    console.log(`✅ Tag "${tag}" applied to ${email}`);
  } catch (error) {
    console.error('Error applying tag:', error);
  }
}

/**
 * Send opt-in email (Email 5) to interested lead
 * This could trigger an Instantly email or send directly
 */
async function sendOptInEmail(event: InstantlyWebhookEvent) {
  // Option 1: Trigger a specific subsequence in Instantly
  // Option 2: Send email directly via Resend

  // For now, we'll just log and tag
  // You can implement actual email sending here
  console.log('📧 Opt-in email should be sent to:', event.lead_email);

  // Apply tag to trigger email sequence
  await applyInstantlyTag(event.lead_email, 'SEND_OPTIN');
}

/**
 * Transfer lead to GHL
 */
async function transferToGHL(data: {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  source: string;
  campaignName: string;
}) {
  try {
    console.log('🔄 Transferring to GHL:', data.email);

    const response = await fetch(
      'https://services.leadconnectorhq.com/contacts/',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify({
          locationId: process.env.GHL_LOCATION_ID,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          source: data.source,
          tags: [
            'coffee_club',
            'instantly_source',
            'warm_lead',
            'opted_in',
          ],
          customFields: {
            instantly_campaign: data.campaignName,
            company_name: data.companyName,
            lead_source: 'instantly',
            optin_date: new Date().toISOString(),
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GHL API error: ${response.status} - ${errorText}`);
    }

    const contact = await response.json();
    console.log('✅ GHL contact created:', contact.contact.id);

    // Trigger GHL workflow for Coffee Club registration
    await triggerGHLWorkflow(contact.contact.id, 'coffee_club_registration');

    return contact;

  } catch (error) {
    console.error('❌ Error transferring to GHL:', error);
    throw error;
  }
}

/**
 * Trigger a GHL workflow
 */
async function triggerGHLWorkflow(contactId: string, workflowName: string) {
  try {
    console.log(`🔄 Triggering GHL workflow: ${workflowName}`);

    // Note: You'll need to get the actual workflow ID from GHL
    // This is a placeholder implementation
    const workflowId = process.env.GHL_COFFEE_CLUB_WORKFLOW_ID;

    if (!workflowId) {
      console.log('⚠️ No workflow ID configured, skipping');
      return;
    }

    // Trigger workflow via GHL API
    // Implementation depends on your specific GHL workflow setup

    console.log('✅ Workflow triggered');
  } catch (error) {
    console.error('Error triggering workflow:', error);
  }
}

/**
 * Log reply to database/file for analysis
 */
async function logReply(data: {
  email: string;
  campaign: string;
  classification: string;
  reply_body: string;
  timestamp: string;
}) {
  // You could save to a database here
  console.log('📝 Logging reply:', {
    email: data.email,
    campaign: data.campaign,
    classification: data.classification,
    timestamp: data.timestamp,
  });

  // For now, just console log
  // Could implement Supabase, MongoDB, or file-based logging
}

/**
 * Log conversion (opt-in) event
 */
async function logConversion(data: {
  email: string;
  campaign: string;
  timestamp: string;
}) {
  console.log('📝 Logging conversion:', data);

  // Could track conversion metrics here
  // Send to analytics platform, save to DB, etc.
}
