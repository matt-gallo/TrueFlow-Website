import { NextRequest, NextResponse } from 'next/server';

/**
 * Instantly Webhook Test Endpoint
 *
 * Use this to simulate webhook events from Instantly for testing
 *
 * Usage:
 * curl -X POST http://localhost:3001/api/webhooks/instantly/test?event=reply_interested
 */

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const eventType = searchParams.get('event') || 'reply_interested';

  console.log('🧪 Testing webhook event:', eventType);

  const testEvents = {
    // Interested reply
    reply_interested: {
      event_type: 'reply_received',
      lead_email: 'test@example.com',
      lead_first_name: 'John',
      lead_last_name: 'Smith',
      lead_company: 'Test SaaS Corp',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      reply_body: 'Yes, this sounds great! Send me the details.',
      timestamp: new Date().toISOString(),
    },

    // Not interested reply
    reply_not_interested: {
      event_type: 'reply_received',
      lead_email: 'test@example.com',
      lead_first_name: 'Jane',
      lead_last_name: 'Doe',
      lead_company: 'Another Corp',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      reply_body: 'No thanks, not interested.',
      timestamp: new Date().toISOString(),
    },

    // Not now reply
    reply_not_now: {
      event_type: 'reply_received',
      lead_email: 'test@example.com',
      lead_first_name: 'Bob',
      lead_last_name: 'Johnson',
      lead_company: 'Future SaaS',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      reply_body: 'Maybe next quarter, too busy right now.',
      timestamp: new Date().toISOString(),
    },

    // Question reply
    reply_question: {
      event_type: 'reply_received',
      lead_email: 'test@example.com',
      lead_first_name: 'Alice',
      lead_last_name: 'Williams',
      lead_company: 'Curious Corp',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      reply_body: 'What exactly is this about? Who else will be there?',
      timestamp: new Date().toISOString(),
    },

    // Out of office
    reply_ooo: {
      event_type: 'reply_received',
      lead_email: 'test@example.com',
      lead_first_name: 'Chris',
      lead_last_name: 'Davis',
      lead_company: 'Away Corp',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      reply_body: 'I am out of office until March 1st. Will respond when I return.',
      timestamp: new Date().toISOString(),
    },

    // Referral
    reply_referral: {
      event_type: 'reply_received',
      lead_email: 'test@example.com',
      lead_first_name: 'Sarah',
      lead_last_name: 'Miller',
      lead_company: 'Referral Inc',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      reply_body: 'Not for me, but you should talk to Mike at TechStartup. He\'d love this.',
      timestamp: new Date().toISOString(),
    },

    // Link clicked (opt-in)
    link_clicked_optin: {
      event_type: 'email_link_clicked',
      lead_email: 'test@example.com',
      lead_first_name: 'David',
      lead_last_name: 'Brown',
      lead_company: 'Opted In Corp',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      link_url: 'https://trueflow.ai/coffee-club/register?email=test@example.com&source=instantly&campaign=test_campaign_123',
      timestamp: new Date().toISOString(),
    },

    // Campaign completed
    campaign_completed: {
      event_type: 'campaign_completed',
      lead_email: 'test@example.com',
      lead_first_name: 'Emma',
      lead_last_name: 'Wilson',
      lead_company: 'Completed Corp',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      timestamp: new Date().toISOString(),
    },

    // Lead unsubscribed
    lead_unsubscribed: {
      event_type: 'lead_unsubscribed',
      lead_email: 'test@example.com',
      lead_first_name: 'Tom',
      lead_last_name: 'Taylor',
      lead_company: 'Unsubscribed LLC',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      timestamp: new Date().toISOString(),
    },

    // Email bounced
    email_bounced: {
      event_type: 'email_bounced',
      lead_email: 'bounced@invalid-domain.xyz',
      campaign_id: 'test_campaign_123',
      campaign_name: 'Coffee_Club_SaaS_Q1_2026',
      timestamp: new Date().toISOString(),
    },
  };

  const event = testEvents[eventType as keyof typeof testEvents];

  if (!event) {
    return NextResponse.json(
      {
        error: 'Invalid event type',
        available: Object.keys(testEvents),
      },
      { status: 400 }
    );
  }

  // Send the test event to the actual webhook endpoint
  try {
    const baseUrl = process.env.NEXT_PUBLIC_LANDING_URL || 'http://localhost:3001';
    const response = await fetch(`${baseUrl}/api/webhooks/instantly`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: `Test event "${eventType}" sent successfully`,
      event,
      result,
    });

  } catch (error) {
    console.error('Error sending test event:', error);
    return NextResponse.json(
      { error: 'Failed to send test event' },
      { status: 500 }
    );
  }
}

// Also support GET for easy browser testing
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const eventType = searchParams.get('event');

  return NextResponse.json({
    message: 'Instantly Webhook Test Endpoint',
    usage: 'POST /api/webhooks/instantly/test?event=<event_type>',
    available_events: [
      'reply_interested',
      'reply_not_interested',
      'reply_not_now',
      'reply_question',
      'reply_ooo',
      'reply_referral',
      'link_clicked_optin',
      'campaign_completed',
      'lead_unsubscribed',
      'email_bounced',
    ],
    example: `/api/webhooks/instantly/test?event=${eventType || 'reply_interested'}`,
    test_buttons: `
      <h2>Test Webhook Events</h2>
      <button onclick="test('reply_interested')">Test Interested Reply</button>
      <button onclick="test('reply_not_interested')">Test Not Interested</button>
      <button onclick="test('reply_question')">Test Question</button>
      <button onclick="test('link_clicked_optin')">Test Opt-In Click</button>
      <script>
        function test(event) {
          fetch('/api/webhooks/instantly/test?event=' + event, { method: 'POST' })
            .then(r => r.json())
            .then(d => alert(JSON.stringify(d, null, 2)));
        }
      </script>
    `,
  });
}
