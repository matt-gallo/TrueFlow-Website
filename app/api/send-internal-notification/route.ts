import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, contact, email, phone, address, website, locationId, userId, note } = body

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'TrueFlow AI <welcome@trueflow.ai>',
      to: ['griffin@trueflow.ai', 'matt@trueflow.ai'],
      subject: `New Account Created: ${businessName || 'N/A'}`,
      html: `
        <h2>New TrueFlow Account Created</h2>
        <p><strong>Business:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Contact:</strong> ${contact || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
        ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
        <p><strong>Location ID:</strong> ${locationId || 'N/A'}</p>
        <p><strong>User ID:</strong> ${userId || 'N/A'}</p>
        ${note ? `<hr><p><em>${note}</em></p>` : ''}
      `
    })

    console.log('[InternalNotification] Sent to griffin and matt')

    return NextResponse.json({
      success: true,
      message: 'Internal notification sent'
    })

  } catch (error) {
    console.error('[InternalNotification] Error:', error)
    return NextResponse.json({
      error: 'Failed to send notification',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
