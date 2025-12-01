import 'dotenv/config'
import { NextRequest } from 'next/server'
import * as SignupDataRoute from '@/app/api/signup-data/route'
import * as IntakeRoute from '@/app/api/intake/route'
import * as WebhookRoute from '@/app/api/webhooks/ghl/route'

type StepResult = {
  name: string
  ok: boolean
  status?: number
  details?: string
}

type IntakeResult = {
  status: number
  body: any
}

type GHLPayloads = {
  locationPayload?: Record<string, any>
  userPayload?: Record<string, any>
}

const localBase = process.env.NEXT_PUBLIC_LANDING_URL || 'http://internal.test'
process.env.NEXT_PUBLIC_LANDING_URL = localBase
process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN || 'test-agency-token'
process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION = process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION || 'test-user-token'
process.env.GHL_COMPANY_ID = process.env.GHL_COMPANY_ID || 'test-company'
process.env.GHL_ACCESS_TOKEN = process.env.GHL_ACCESS_TOKEN || 'test-access-token'
process.env.GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || 'test-location'
process.env.GHL_API_VERSION = process.env.GHL_API_VERSION || '2021-07-28'
process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || 'your_placeholder_key'

const ghlPayloads: GHLPayloads = {}
let intakeResult: IntakeResult | null = null

const realFetch = global.fetch
global.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const request = typeof input === 'string' || input instanceof URL
    ? new Request(input, init)
    : input

  const url = request.url
  const method = (request.method || 'GET').toUpperCase()

  if (url.startsWith(`${localBase}/api/signup-data`)) {
    const nextRequest = new NextRequest(request)
    if (method === 'POST') return SignupDataRoute.POST(nextRequest)
    if (method === 'GET') return SignupDataRoute.GET(nextRequest)
    if (method === 'DELETE') return SignupDataRoute.DELETE(nextRequest)
  }

  if (url.startsWith(`${localBase}/api/intake`)) {
    const response = await IntakeRoute.POST(request)
    const clone = response.clone()
    intakeResult = {
      status: clone.status,
      body: await clone.json().catch(() => null)
    }
    return response
  }

  if (url.startsWith('https://services.leadconnectorhq.com/locations')) {
    const bodyText = await request.clone().text()
    try {
      ghlPayloads.locationPayload = bodyText ? JSON.parse(bodyText) : {}
    } catch {
      ghlPayloads.locationPayload = { raw: bodyText }
    }
    return new Response(JSON.stringify({ id: 'test_location_id' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  if (url.startsWith('https://services.leadconnectorhq.com/users')) {
    const bodyText = await request.clone().text()
    try {
      ghlPayloads.userPayload = bodyText ? JSON.parse(bodyText) : {}
    } catch {
      ghlPayloads.userPayload = { raw: bodyText }
    }
    return new Response(JSON.stringify({ id: 'test_user_id' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return realFetch(input, init)
}

async function runTest() {
  const signupId = `signup_${Date.now()}`
  const signupPayload = {
    signupId,
    name: 'CLI Test Business',
    email: 'owner@clitest.com',
    phone: '+15551234567',
    prospectInfo: {
      firstName: 'Casey',
      lastName: 'Tester',
      email: 'casey.tester@clitest.com'
    },
    metadata: {
      role: 'Owner',
      teamSize: '3-5',
      primaryGoal: 'Launch faster with automations',
      selectedResources: ['onboarding', 'ai-content'],
      includeSuccessManager: true
    }
  }

  const results: StepResult[] = []

  // Store signup data
  const signupRequest = new NextRequest(`${localBase}/api/signup-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signupPayload)
  })
  const signupResponse = await SignupDataRoute.POST(signupRequest)
  const signupJson = await signupResponse.json().catch(() => ({}))
  results.push({
    name: 'Store signup data',
    ok: signupResponse.ok,
    status: signupResponse.status,
    details: `Response: ${JSON.stringify(signupJson)}`
  })

  // Trigger payment webhook
  const webhookPayload = {
    type: 'payment.succeeded',
    signup_id: signupId,
    contact: {
      id: 'contact_cli_test',
      customField: [
        { key: 'signup_id', value: signupId }
      ]
    },
    metadata: {
      signup_id: signupId
    }
  }

  const webhookRequest = new NextRequest(`${localBase}/api/webhooks/ghl`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(webhookPayload)
  })
  const webhookResponse = await WebhookRoute.POST(webhookRequest)
  const webhookJson = await webhookResponse.json().catch(() => ({}))
  results.push({
    name: 'Process payment webhook',
    ok: webhookResponse.ok,
    status: webhookResponse.status,
    details: `Response: ${JSON.stringify(webhookJson)}`
  })

  // Validate intake endpoint was triggered
  const intakeOk = !!intakeResult && intakeResult.status === 200
  results.push({
    name: 'Intake endpoint (sub-account + user)',
    ok: intakeOk,
    status: intakeResult?.status,
    details: `Body: ${JSON.stringify(intakeResult?.body)}`
  })

  // Validate GHL payload mapping
  const subaccountMatches =
    ghlPayloads.locationPayload?.name === signupPayload.name &&
    ghlPayloads.locationPayload?.email === signupPayload.email
  results.push({
    name: 'Sub-account payload matches signup data',
    ok: Boolean(subaccountMatches),
    details: `Payload: ${JSON.stringify(ghlPayloads.locationPayload)}`
  })

  const userMatches =
    ghlPayloads.userPayload?.email === signupPayload.prospectInfo.email &&
    ghlPayloads.userPayload?.firstName === signupPayload.prospectInfo.firstName
  results.push({
    name: 'User payload matches prospect info',
    ok: Boolean(userMatches),
    details: `Payload: ${JSON.stringify(ghlPayloads.userPayload)}`
  })

  // Verify signup data removal to unlock password screen
  const cleanupRequest = new NextRequest(`${localBase}/api/signup-data?signupId=${signupId}`)
  const cleanupResponse = await SignupDataRoute.GET(cleanupRequest)
  const cleanupStatus = cleanupResponse.status
  const cleanupBody = await cleanupResponse.json().catch(() => ({}))
  const cleanupOk = cleanupStatus === 404
  results.push({
    name: 'Signup data cleaned (password screen ready)',
    ok: cleanupOk,
    status: cleanupStatus,
    details: `Response: ${JSON.stringify(cleanupBody)}`
  })

  const hasFailure = results.some(result => !result.ok)

  console.log('\n=== Payment Flow CLI Test ===')
  for (const result of results) {
    const statusLabel = result.ok ? 'PASS' : 'FAIL'
    console.log(`- [${statusLabel}] ${result.name}${result.status ? ` (status: ${result.status})` : ''}`)
    if (result.details) {
      console.log(`    ${result.details}`)
    }
  }

  if (hasFailure) {
    process.exitCode = 1
    throw new Error('One or more payment flow checks failed')
  }
}

runTest().catch(error => {
  console.error('\nPayment flow test failed:', error)
  process.exit(1)
})
