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
      case 'payment.succeeded':
      case 'InvoicePaid':
      case 'OrderCompleted':
      case 'order.completed':
        console.log('[Webhook] Payment succeeded, creating sub-account:', body)
        await processPaymentSuccess(body)
        break

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

// Helper to get base URL for internal API calls
function getBaseUrl(): string {
  // In production, use the configured URL
  if (process.env.NEXT_PUBLIC_LANDING_URL) {
    return process.env.NEXT_PUBLIC_LANDING_URL
  }

  // In development, use localhost
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }

  // Fallback: construct from Vercel/Railway environment variables
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  }

  // Last resort
  console.warn('[Webhook] NEXT_PUBLIC_LANDING_URL not set, using localhost fallback')
  return 'http://localhost:3000'
}

// Process payment success and create GHL sub-account
async function processPaymentSuccess(webhookBody: any) {
  // Track status of each step
  const status = {
    paymentReceived: true, // If we're here, payment succeeded
    signupDataRetrieved: false,
    subAccountCreated: false,
    userProvisioned: false,
    welcomeEmailSent: false,
    errors: [] as string[]
  }

  let signupData: any = null
  let intakeResult: any = null

  try {
    console.log('[Webhook] Processing payment success event')

    // Extract signup_id from webhook metadata/custom fields
    const signupId = webhookBody.signup_id ||
                     webhookBody.metadata?.signup_id ||
                     webhookBody.customFields?.signup_id ||
                     webhookBody.contact?.customField?.find((f: any) => f.key === 'signup_id')?.value

    if (!signupId) {
      console.error('[Webhook] No signup_id found in payment webhook')
      console.error('[Webhook] Webhook body:', JSON.stringify(webhookBody, null, 2))
      status.errors.push('No signup_id found in payment webhook')
      await sendInternalNotification(status, null, null, webhookBody)
      return
    }

    console.log('[Webhook] Found signup_id:', signupId)

    const baseUrl = getBaseUrl()
    console.log('[Webhook] Using base URL:', baseUrl)

    // Retrieve signup data from temporary storage
    try {
      const signupDataResponse = await fetch(`${baseUrl}/api/signup-data?signupId=${signupId}`)

      if (!signupDataResponse.ok) {
        const errorText = await signupDataResponse.text()
        console.error('[Webhook] Failed to retrieve signup data:', signupDataResponse.status, errorText)
        status.errors.push(`Failed to retrieve signup data: ${signupDataResponse.status} - ${errorText}`)
        await sendInternalNotification(status, null, null, webhookBody)
        return
      }

      signupData = await signupDataResponse.json()
      status.signupDataRetrieved = true
      console.log('[Webhook] Retrieved signup data for:', signupData.email)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      console.error('[Webhook] Error retrieving signup data:', error)
      status.errors.push(`Error retrieving signup data: ${errorMsg}`)
      await sendInternalNotification(status, null, null, webhookBody)
      return
    }

    // Call the intake endpoint to create sub-account + user
    try {
      const intakeResponse = await fetch(`${baseUrl}/api/intake`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      })

      intakeResult = await intakeResponse.json()

      if (!intakeResponse.ok) {
        console.error('[Webhook] Failed to create sub-account:', intakeResult)
        status.errors.push(`Sub-account creation failed: ${intakeResult.error || 'Unknown error'}`)
        await sendInternalNotification(status, signupData, intakeResult, webhookBody)
        return
      }

      status.subAccountCreated = true
      status.userProvisioned = true
      console.log('[Webhook] Successfully created sub-account:', intakeResult.locationId)
      console.log('[Webhook] Successfully created user:', intakeResult.userId)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      console.error('[Webhook] Error creating sub-account:', error)
      status.errors.push(`Error creating sub-account: ${errorMsg}`)
      await sendInternalNotification(status, signupData, null, webhookBody)
      return
    }

    // Send welcome email to customer
    try {
      const welcomeEmailSent = await sendWelcomeEmail(signupData, intakeResult)
      status.welcomeEmailSent = welcomeEmailSent
      if (!welcomeEmailSent) {
        status.errors.push('Welcome email failed to send (check Resend logs)')
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      console.error('[Webhook] Error sending welcome email:', error)
      status.errors.push(`Error sending welcome email: ${errorMsg}`)
    }

    // Send comprehensive internal notification
    await sendInternalNotification(status, signupData, intakeResult, webhookBody)

    // Delete signup data after processing
    try {
      await fetch(`${baseUrl}/api/signup-data?signupId=${signupId}`, {
        method: 'DELETE'
      })
      console.log('[Webhook] Cleaned up signup data')
    } catch (error) {
      console.error('[Webhook] Error cleaning up signup data:', error)
    }

    if (status.errors.length === 0) {
      console.log('[Webhook] Payment-to-account flow completed successfully')
    } else {
      console.log('[Webhook] Payment-to-account flow completed with errors:', status.errors)
    }
  } catch (error) {
    console.error('[Webhook] Unexpected error processing payment success:', error)
    status.errors.push(`Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    await sendInternalNotification(status, signupData, intakeResult, webhookBody)
  }
}

// Trigger GHL password reset email
async function triggerPasswordReset(email: string) {
  try {
    const userCreationToken = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION ||
                              process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN

    if (!userCreationToken) {
      console.warn('[Webhook] No token configured, skipping password reset')
      return
    }

    console.log('[Webhook] Triggering password reset for:', email)

    // GHL doesn't have a direct "send password reset" API endpoint
    // Instead, we'll include the password reset link in the welcome email
    // and let users use the "Forgot Password" flow at login if needed

    console.log('[Webhook] Password reset flow: User will receive welcome email with instructions')
  } catch (error) {
    console.error('[Webhook] Error triggering password reset:', error)
  }
}

// Send welcome email with login credentials
async function sendWelcomeEmail(signupData: any, intakeResult: any): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('your_')) {
      console.warn('[Webhook] Resend API key not configured, skipping welcome email')
      return false
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const firstName = signupData.prospectInfo?.firstName || 'there'

    const emailContent = `
      <h1>Welcome to TrueFlow!</h1>
      <p>Hi ${firstName},</p>
      <p>Your account has been successfully created! Your 14-day free trial starts now.</p>

      <h2>Set Up Your Password</h2>
      <p>To access your account, you need to set up your password:</p>
      <ol>
        <li>Go to <a href="https://login.trueflow.ai" style="color: #06b6d4; font-weight: bold;">https://login.trueflow.ai</a></li>
        <li>Click "Forgot Password"</li>
        <li>Enter your email: <strong>${signupData.email}</strong></li>
        <li>Check your inbox for the password reset link</li>
        <li>Set your new password and log in</li>
      </ol>

      <div style="background: #f0f9ff; border-left: 4px solid #06b6d4; padding: 16px; margin: 24px 0;">
        <p style="margin: 0; font-weight: bold; color: #0e7490;">Quick Login Link:</p>
        <p style="margin: 8px 0 0 0;">
          <a href="https://login.trueflow.ai" style="color: #06b6d4; text-decoration: none;">
            https://login.trueflow.ai
          </a>
        </p>
      </div>

      <h2>What's Next?</h2>
      <ul>
        <li>Set up your password using the steps above</li>
        <li>Join our TrueFlow Accelerator kickoff call</li>
        <li>Access your full CRM and automation suite</li>
        <li>Explore your content creation tools</li>
      </ul>

      <p>Questions? Reply to this email or contact us at support@trueflow.ai</p>

      <p>Welcome aboard!</p>
      <p>The TrueFlow Team</p>
    `

    await resend.emails.send({
      from: 'TrueFlow AI <welcome@trueflow.ai>',
      to: [signupData.email],
      subject: 'Welcome to TrueFlow - Your Account is Ready!',
      html: emailContent
    })

    console.log('[Webhook] Welcome email sent to:', signupData.email)
    return true
  } catch (error) {
    console.error('[Webhook] Error sending welcome email:', error)
    return false
  }
}

// Send comprehensive internal notification with status of all steps
async function sendInternalNotification(
  status: {
    paymentReceived: boolean
    signupDataRetrieved: boolean
    subAccountCreated: boolean
    userProvisioned: boolean
    welcomeEmailSent: boolean
    errors: string[]
  },
  signupData: any,
  intakeResult: any,
  webhookBody: any
) {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('your_')) {
      console.warn('[Webhook] Resend API key not configured, skipping internal notification')
      return
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const isSuccess = status.errors.length === 0
    const statusIcon = isSuccess ? '✅' : '⚠️'
    const statusText = isSuccess ? 'SUCCESS' : 'FAILED'
    const statusColor = isSuccess ? '#10b981' : '#ef4444'

    // Build status indicators
    const getStatusIcon = (completed: boolean) => completed ? '✅' : '❌'

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #f9fafb; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background: ${statusColor}; color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .header .status { font-size: 14px; margin-top: 8px; opacity: 0.9; }
    .content { padding: 30px; }
    .status-section { background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .status-row { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
    .status-row:last-child { border-bottom: none; }
    .status-label { flex: 1; font-weight: 500; }
    .status-value { font-size: 20px; }
    .info-section { margin-bottom: 20px; }
    .info-row { padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
    .info-row:last-child { border-bottom: none; }
    .info-label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
    .info-value { color: #111827; }
    .errors { background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; margin: 20px 0; border-radius: 4px; }
    .errors h3 { color: #dc2626; margin: 0 0 10px 0; font-size: 16px; }
    .errors ul { margin: 0; padding-left: 20px; color: #7f1d1d; }
    .success-banner { background: #d1fae5; border-left: 4px solid #10b981; padding: 16px; margin: 20px 0; border-radius: 4px; color: #065f46; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${statusIcon} Payment Processing ${statusText}</h1>
      <div class="status">${new Date().toLocaleString()}</div>
    </div>

    <div class="content">
      ${isSuccess ? `
        <div class="success-banner">
          <strong>✅ All systems operational!</strong> Customer account successfully created and welcome email delivered.
        </div>
      ` : ''}

      ${status.errors.length > 0 ? `
        <div class="errors">
          <h3>⚠️ Errors Encountered:</h3>
          <ul>
            ${status.errors.map(error => `<li>${error}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="status-section">
        <h3 style="margin: 0 0 15px 0; color: #111827;">Processing Status</h3>
        <div class="status-row">
          <span class="status-label">Payment Received</span>
          <span class="status-value">${getStatusIcon(status.paymentReceived)}</span>
        </div>
        <div class="status-row">
          <span class="status-label">Signup Data Retrieved</span>
          <span class="status-value">${getStatusIcon(status.signupDataRetrieved)}</span>
        </div>
        <div class="status-row">
          <span class="status-label">Sub-Account Created</span>
          <span class="status-value">${getStatusIcon(status.subAccountCreated)}</span>
        </div>
        <div class="status-row">
          <span class="status-label">User Provisioned</span>
          <span class="status-value">${getStatusIcon(status.userProvisioned)}</span>
        </div>
        <div class="status-row">
          <span class="status-label">Welcome Email Sent</span>
          <span class="status-value">${getStatusIcon(status.welcomeEmailSent)}</span>
        </div>
      </div>

      ${signupData ? `
        <div class="info-section">
          <h3 style="margin: 0 0 15px 0; color: #111827;">Customer Information</h3>
          <div class="info-row">
            <div class="info-label">Business Name</div>
            <div class="info-value">${signupData.name || 'N/A'}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Contact Name</div>
            <div class="info-value">${signupData.prospectInfo?.firstName || ''} ${signupData.prospectInfo?.lastName || ''}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Email</div>
            <div class="info-value"><a href="mailto:${signupData.email}">${signupData.email}</a></div>
          </div>
          <div class="info-row">
            <div class="info-label">Phone</div>
            <div class="info-value">${signupData.phone || 'N/A'}</div>
          </div>
          ${signupData.metadata?.role ? `
          <div class="info-row">
            <div class="info-label">Role</div>
            <div class="info-value">${signupData.metadata.role}</div>
          </div>
          ` : ''}
          ${signupData.metadata?.teamSize ? `
          <div class="info-row">
            <div class="info-label">Team Size</div>
            <div class="info-value">${signupData.metadata.teamSize}</div>
          </div>
          ` : ''}
          ${signupData.metadata?.primaryGoal ? `
          <div class="info-row">
            <div class="info-label">Primary Goal</div>
            <div class="info-value">${signupData.metadata.primaryGoal}</div>
          </div>
          ` : ''}
          ${signupData.metadata?.includeSuccessManager !== undefined ? `
          <div class="info-row">
            <div class="info-label">Success Manager</div>
            <div class="info-value">${signupData.metadata.includeSuccessManager ? 'Yes (+$147/mo)' : 'No'}</div>
          </div>
          ` : ''}
          ${signupData.metadata?.selectedResources && signupData.metadata.selectedResources.length > 0 ? `
          <div class="info-row">
            <div class="info-label">Selected Resources</div>
            <div class="info-value">${signupData.metadata.selectedResources.join(', ')}</div>
          </div>
          ` : ''}
        </div>
      ` : ''}

      ${intakeResult ? `
        <div class="info-section">
          <h3 style="margin: 0 0 15px 0; color: #111827;">GoHighLevel Details</h3>
          <div class="info-row">
            <div class="info-label">Location ID</div>
            <div class="info-value"><code>${intakeResult.locationId}</code></div>
          </div>
          <div class="info-row">
            <div class="info-label">User ID</div>
            <div class="info-value"><code>${intakeResult.userId}</code></div>
          </div>
        </div>
      ` : ''}

      ${!isSuccess && !signupData ? `
        <div class="info-section">
          <h3 style="margin: 0 0 15px 0; color: #111827;">Raw Webhook Data</h3>
          <pre style="background: #f3f4f6; padding: 12px; border-radius: 6px; font-size: 11px; overflow-x: auto;">${JSON.stringify(webhookBody, null, 2)}</pre>
        </div>
      ` : ''}
    </div>

    <div class="footer">
      <p>TrueFlow Payment Processing System</p>
      <p>This is an automated notification from your sign-up webhook handler</p>
    </div>
  </div>
</body>
</html>
    `

    await resend.emails.send({
      from: 'TrueFlow AI <onboarding@resend.dev>',
      to: ['griffin@trueflow.ai', 'matt@trueflow.ai'],
      subject: `${statusIcon} ${isSuccess ? 'New Account Created' : 'Payment Processing Issue'}: ${signupData?.name || 'Unknown'}`,
      html: emailHtml
    })

    console.log('[Webhook] Internal notification sent')
  } catch (error) {
    console.error('[Webhook] Error sending internal notification:', error)
  }
}

// Send error notification if account creation fails
async function sendPaymentErrorNotification(signupData: any, error: any) {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('your_')) {
      return
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'TrueFlow AI <alerts@resend.dev>',
      to: ['griffin@trueflow.ai', 'matt@trueflow.ai'],
      subject: '🚨 Account Creation Failed After Payment',
      html: `
        <h2>Account Creation Failed</h2>
        <p>Payment succeeded but sub-account creation failed for:</p>
        <p><strong>Email:</strong> ${signupData.email}</p>
        <p><strong>Business:</strong> ${signupData.name}</p>
        <p><strong>Signup ID:</strong> ${signupData.signupId}</p>
        <h3>Error Details:</h3>
        <pre>${JSON.stringify(error, null, 2)}</pre>
        <p><strong>Action Required:</strong> Manually create this account in GoHighLevel.</p>
      `
    })

    console.log('[Webhook] Error notification sent')
  } catch (err) {
    console.error('[Webhook] Error sending error notification:', err)
  }
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