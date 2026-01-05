/**
 * API endpoint to check environment variable status
 * Protected by Basic HTTP Auth via middleware
 */

import { NextResponse } from 'next/server'

export async function GET() {
  // List of all environment variables used by the app
  const envVars = {
    // GoHighLevel Integration
    'GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN': !!process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN,
    'GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION': !!process.env.GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION,
    'GHL_SUBACCOUNT_API_KEY': !!process.env.GHL_SUBACCOUNT_API_KEY,
    'GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION': !!process.env.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION,
    'GHL_COMPANY_ID': !!process.env.GHL_COMPANY_ID,
    'GHL_LOCATION_ID': !!process.env.GHL_LOCATION_ID,
    'GHL_WEBHOOK_SECRET': !!process.env.GHL_WEBHOOK_SECRET,
    'GHL_DEFAULT_USER_PASSWORD': !!process.env.GHL_DEFAULT_USER_PASSWORD,

    // Email Integration
    'RESEND_API_KEY': !!process.env.RESEND_API_KEY,

    // Application URLs
    'NEXT_PUBLIC_LANDING_URL': !!process.env.NEXT_PUBLIC_LANDING_URL,

    // Admin Access
    'ADMIN_USER': !!process.env.ADMIN_USER,
    'ADMIN_PASS': !!process.env.ADMIN_PASS,
  }

  // Group by category
  const grouped = {
    ghl: {
      'Agency Private Integration Token': envVars.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN,
      'TrueFlow Sub-Account Contact Creation Token': envVars.GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION,
      'Sub-Account API Key (deprecated)': envVars.GHL_SUBACCOUNT_API_KEY,
      'User Creation Token': envVars.GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN_USER_CREATION,
      'Company ID': envVars.GHL_COMPANY_ID,
      'Location ID': envVars.GHL_LOCATION_ID,
      'Webhook Secret': envVars.GHL_WEBHOOK_SECRET,
      'Default User Password': envVars.GHL_DEFAULT_USER_PASSWORD,
    },
    email: {
      'Resend API Key': envVars.RESEND_API_KEY,
    },
    app: {
      'Landing URL': envVars.NEXT_PUBLIC_LANDING_URL,
    },
    admin: {
      'Admin Username': envVars.ADMIN_USER,
      'Admin Password': envVars.ADMIN_PASS,
    },
  }

  return NextResponse.json({
    grouped,
    summary: {
      total: Object.keys(envVars).length,
      configured: Object.values(envVars).filter(Boolean).length,
      missing: Object.values(envVars).filter(v => !v).length,
    }
  })
}
