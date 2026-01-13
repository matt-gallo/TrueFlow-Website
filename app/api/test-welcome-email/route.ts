import { NextRequest, NextResponse } from 'next/server'

/**
 * Test endpoint to send a welcome email without creating a sub-account
 * Useful for testing email delivery and content
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const testEmail = body.email || 'test@example.com'
    const firstName = body.firstName || 'Test'

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('your_')) {
      return NextResponse.json({
        error: 'Resend API key not configured'
      }, { status: 500 })
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
        <li>Enter your email: <strong>${testEmail}</strong></li>
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

      <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #6b7280;">
        <strong>⚠️ This is a test email.</strong> No actual account was created.
      </p>
    `

    const result = await resend.emails.send({
      from: 'TrueFlow AI <welcome@trueflow.ai>',
      to: [testEmail],
      subject: '[TEST] Welcome to TrueFlow - Your Account is Ready!',
      html: emailContent
    })

    console.log('[TestEmail] Test welcome email sent to:', testEmail)
    console.log('[TestEmail] Resend result:', result)

    return NextResponse.json({
      success: true,
      message: `Test welcome email sent to ${testEmail}`,
      resendId: result.data?.id
    })

  } catch (error) {
    console.error('[TestEmail] Error sending test email:', error)
    return NextResponse.json({
      error: 'Failed to send test email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
