import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const agencyCompanyId = process.env.GHL_COMPANY_ID

  if (!agencyCompanyId) {
    return NextResponse.json({ error: 'GHL_COMPANY_ID not configured on the server' }, { status: 500 })
  }

  const body = await request.json().catch(() => null)
  if (!body || !body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  const payload = {
    ...body,
    companyId: agencyCompanyId
  }

  // Placeholder: replace with actual GHL API call
  console.log('Submitting payload to GHL:', payload)

  return NextResponse.json({ status: 'ok', submitted: payload })
}
