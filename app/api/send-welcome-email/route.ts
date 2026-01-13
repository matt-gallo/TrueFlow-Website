import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, businessName, locationId, userId } = body

    if (!email || !firstName) {
      return NextResponse.json({ error: 'email and firstName are required' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('your_')) {
      console.warn('[SendWelcome] Resend API key not configured')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailContent = `
      <h1>Welcome to TrueFlow!</h1>
      <p>Hi ${firstName},</p>
      <p>Your account has been successfully created! Your 14-day free trial starts now.</p>

      <h2>Set Up Your Password</h2>
      <p>To access your account, you need to set up your password:</p>
      <ol>
        <li>Go to <a href="https://login.trueflow.ai" style="color: #06b6d4; font-weight: bold;">https://login.trueflow.ai</a></li>
        <li>Click "Forgot Password"</li>
        <li>Enter your email: <strong>${email}</strong></li>
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

    // Send to customer
    await resend.emails.send({
      from: 'TrueFlow AI <welcome@trueflow.ai>',
      to: [email],
      subject: 'Welcome to TrueFlow - Your Account is Ready!',
      html: emailContent
    })

    console.log('[SendWelcome] Welcome email sent to:', email)

    // Send internal notification
    await resend.emails.send({
      from: 'TrueFlow AI <onboarding@resend.dev>',
      to: ['griffin@trueflow.ai', 'matt@trueflow.ai'],
      subject: `New Account Created: ${businessName || 'N/A'}`,
      html: `
        <h2>New TrueFlow Account Created</h2>
        <p><strong>Business:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Contact:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location ID:</strong> ${locationId || 'N/A'}</p>
        <p><strong>User ID:</strong> ${userId || 'N/A'}</p>
        <p><em>Welcome email sent via manual trigger</em></p>
      `
    })

    console.log('[SendWelcome] Internal notification sent')

    return NextResponse.json({
      success: true,
      message: 'Welcome email sent successfully'
    })

  } catch (error) {
    console.error('[SendWelcome] Error:', error)
    return NextResponse.json({
      error: 'Failed to send welcome email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
