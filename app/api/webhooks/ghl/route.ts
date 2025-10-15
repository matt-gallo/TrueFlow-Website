import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Store webhook events in memory for testing (in production, use a database)
const webhookEvents: any[] = []
const MAX_EVENTS = 100

// GHL API configuration
const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = process.env.GHL_API_VERSION || '2021-07-28'

// GHL Webhook endpoint
export async function POST(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    // Get raw body for signature verification
    const rawBody = await request.text()
    const headers = Object.fromEntries(request.headers.entries())
    
    // Log webhook receipt
    console.log('[Webhook] Received GHL webhook')
    console.log('[Webhook] Headers:', JSON.stringify(headers, null, 2))
    
    // Parse body
    let body: any
    try {
      body = JSON.parse(rawBody)
    } catch (e) {
      console.error('[Webhook] Failed to parse body:', e)
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }
    
    console.log('[Webhook] Body:', JSON.stringify(body, null, 2))
    
    // Verify webhook signature if secret is configured
    const webhookSecret = process.env.GHL_WEBHOOK_SECRET
    if (webhookSecret && webhookSecret !== 'your_webhook_secret_here') {
      const signature = headers['x-ghl-signature'] || headers['x-webhook-signature']
      
      if (!signature) {
        console.warn('[Webhook] No signature provided')
      } else {
        const expectedSignature = crypto
          .createHmac('sha256', webhookSecret)
          .update(rawBody)
          .digest('hex')
        
        if (signature !== expectedSignature) {
          console.error('[Webhook] Invalid signature')
          return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
        }
        console.log('[Webhook] Signature verified')
      }
    }
    
    // Store event for testing
    const event = {
      id: `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      headers: headers,
      body: body,
      type: body.type || body.event || 'unknown',
      source: 'ghl',
      processingTime: Date.now() - startTime
    }
    
    webhookEvents.unshift(event)
    if (webhookEvents.length > MAX_EVENTS) {
      webhookEvents.length = MAX_EVENTS
    }
    
    // Handle different webhook types
    const eventType = body.type || body.event
    console.log(`[Webhook] Processing event type: ${eventType}`)

    switch (eventType) {
      case 'contact.created':
      case 'ContactCreate':
      case 'FormSubmitted':
      case 'form.submitted':
        console.log('[Webhook] New contact/form submission:', body.contact?.id || body.contactId || body.id)
        // Process the contact and add tags
        await processNewContact(body)
        break

      case 'contact.updated':
      case 'ContactUpdate':
        console.log('[Webhook] Contact updated:', body.contact?.id || body.id)
        break

      case 'opportunity.created':
      case 'OpportunityCreate':
        console.log('[Webhook] New opportunity created:', body.opportunity?.id || body.id)
        break

      case 'opportunity.updated':
      case 'OpportunityUpdate':
        console.log('[Webhook] Opportunity updated:', body.opportunity?.id || body.id)
        break

      default:
        console.log('[Webhook] Unhandled event type:', eventType)
    }
    
    // Return success
    return NextResponse.json({
      success: true,
      message: 'Webhook processed',
      eventId: event.id,
      processingTime: `${Date.now() - startTime}ms`
    })
    
  } catch (error) {
    console.error('[Webhook] Error processing webhook:', error)
    return NextResponse.json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// GET endpoint to retrieve webhook events for testing
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const eventId = searchParams.get('id')
  const limit = parseInt(searchParams.get('limit') || '20')
  const type = searchParams.get('type')
  
  // Return specific event
  if (eventId) {
    const event = webhookEvents.find(e => e.id === eventId)
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }
    return NextResponse.json(event)
  }
  
  // Filter by type if specified
  let events = webhookEvents
  if (type) {
    events = events.filter(e => e.type === type)
  }
  
  // Return list of events
  return NextResponse.json({
    events: events.slice(0, limit),
    total: events.length,
    types: Array.from(new Set(webhookEvents.map(e => e.type))),
    oldestEvent: webhookEvents[webhookEvents.length - 1]?.timestamp,
    newestEvent: webhookEvents[0]?.timestamp
  })
}

// Process new contact and add tags + send notification
async function processNewContact(webhookBody: any) {
  try {
    // Extract contact data from webhook
    const contact = webhookBody.contact || webhookBody
    const contactId = contact.id || webhookBody.contactId || webhookBody.id
    const formId = webhookBody.formId || webhookBody.form_id

    if (!contactId) {
      console.error('[Webhook] No contact ID found in webhook body')
      return
    }

    console.log('[Webhook] Processing contact:', contactId)
    console.log('[Webhook] Form ID:', formId)

    // Check if GHL is configured
    if (!process.env.GHL_ACCESS_TOKEN || !process.env.GHL_LOCATION_ID) {
      console.warn('[Webhook] GHL not configured, skipping tag addition')
      return
    }

    // Fetch the full contact data from GHL API
    console.log('[Webhook] Fetching contact data from GHL API...')
    const contactResponse = await fetch(`${GHL_API_BASE}/contacts/${contactId}?locationId=${process.env.GHL_LOCATION_ID}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': GHL_API_VERSION
      }
    })

    if (!contactResponse.ok) {
      console.error('[Webhook] Failed to fetch contact:', contactResponse.status)
      return
    }

    const contactData = await contactResponse.json()
    console.log('[Webhook] Contact data retrieved:', JSON.stringify(contactData, null, 2))

    // Get existing tags
    const existingTags = contactData.contact?.tags || contactData.tags || []

    // Add web-lead tag if not already present
    if (!existingTags.includes('web-lead')) {
      const newTags = [...existingTags, 'web-lead', new Date().toISOString().split('T')[0]]

      console.log('[Webhook] Adding tags:', newTags)

      // Update contact with new tags
      const updateResponse = await fetch(`${GHL_API_BASE}/contacts/${contactId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${process.env.GHL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'Version': GHL_API_VERSION
        },
        body: JSON.stringify({
          tags: newTags
        })
      })

      if (!updateResponse.ok) {
        console.error('[Webhook] Failed to update contact tags:', updateResponse.status)
        const errorText = await updateResponse.text()
        console.error('[Webhook] Error details:', errorText)
      } else {
        console.log('[Webhook] Successfully added web-lead tag')
      }
    } else {
      console.log('[Webhook] web-lead tag already exists')
    }

    // Send Resend email notification
    await sendEmailNotification(contactData.contact || contactData, webhookBody)

  } catch (error) {
    console.error('[Webhook] Error processing contact:', error)
  }
}

// Send email notification via Resend
async function sendEmailNotification(contact: any, webhookBody: any) {
  try {
    console.log('[Webhook] Sending email notification...')

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('your_')) {
      console.warn('[Webhook] Resend API key not configured, skipping email')
      return
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Extract form data from webhook or contact
    const formData = webhookBody.submissionData || webhookBody.formData || {}
    const firstName = contact.firstName || formData.firstName || 'Unknown'
    const lastName = contact.lastName || formData.lastName || ''
    const email = contact.email || formData.email || 'no-email@example.com'
    const phone = contact.phone || formData.phone || 'Not provided'
    const companyName = contact.companyName || formData.businessName || formData.companyName || 'Not provided'

    const subject = `New Web Lead: ${firstName} ${lastName}`
    const emailContent = `
      <h2>New Web Lead from TrueFlow Landing Page</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>GHL Contact ID:</strong> ${contact.id}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>

      <h3>Form Data:</h3>
      <pre>${JSON.stringify(formData, null, 2)}</pre>

      <h3>Tags:</h3>
      <p>${(contact.tags || []).join(', ')}</p>

      <hr>
      <p><small>This lead has been automatically tagged with "web-lead" in HighLevel</small></p>
    `

    const result = await resend.emails.send({
      from: 'TrueFlow AI <onboarding@resend.dev>',
      to: ['griffin@trueflow.ai', 'matt@trueflow.ai'],
      subject,
      html: emailContent
    })

    console.log('[Webhook] Email notification sent:', result)
  } catch (error) {
    console.error('[Webhook] Error sending email notification:', error)
  }
}

// DELETE endpoint to clear webhook events (for testing)
export async function DELETE() {
  const count = webhookEvents.length
  webhookEvents.length = 0

  return NextResponse.json({
    success: true,
    message: `Cleared ${count} webhook events`
  })
}