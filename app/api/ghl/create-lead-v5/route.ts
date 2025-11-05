import { NextResponse } from 'next/server'
import { sendAssessmentNotification, sendGetStartedNotification } from '@/lib/email/resend-notifications'
import { 
  fetchGHLCustomFields,
  calculateLeadScore,
  getLeadQuality
} from '@/lib/ghl/custom-fields-v3'
import { buildCustomFieldsPayloadV3, logMissingFields } from '@/lib/ghl/field-mapping-v3'
import { buildTrueFlowCustomFields, logMissingTrueFlowFields } from '@/lib/ghl/trueflow-field-mapping'

// GHL API configuration
const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = process.env.GHL_API_VERSION || '2021-07-28'

/**
 * Enhanced form type detection
 * Accurately detects form type based on form-specific fields
 */
function detectFormType(data: any): 'assessment' | 'get-started' {
  // Since there's only ONE form (Get Started), always return 'get-started'
  // The form includes assessment questions but is still the Get Started form
  return 'get-started'
}

export async function POST(request: Request) {
  console.log('[API V5] ===== NEW REQUEST =====')
  console.log('[API V5] Received POST request to /api/ghl/create-lead-v5')
  
  try {
    // Parse request body
    const data = await request.json()
    console.log('[API V5] Processing form submission...')
    console.log('[API V5] Form data received:', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      businessName: data.businessName,
      businessType: data.businessType,
      contentGoals: data.contentGoals,
      integrations: data.integrations,
      hasAnswers: !!data.answers,
      answerCount: data.answers ? Object.keys(data.answers).length : 0,
      hasAssessmentAnswers: !!data.assessmentAnswers,
      assessmentAnswerCount: data.assessmentAnswers ? data.assessmentAnswers.length : 0
    })
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      console.error('[API V5] Missing required fields')
      return NextResponse.json({ 
        success: false, 
        message: 'Missing required fields: firstName, lastName, or email' 
      }, { status: 400 })
    }
    
    // Determine form type using enhanced detection
    const formType = detectFormType(data)
    console.log(`[API V5] Detected form type: ${formType}`)
    
    // Log what led to this detection
    console.log('[API V5] Form type detection details:')
    if (formType === 'assessment') {
      console.log('  Detected as ASSESSMENT due to:')
      if (data.source === 'readiness-assessment') {
        console.log('  - source field = "readiness-assessment"')
      }
      if (data.assessmentVersion || data.recommendation || data.scorePercentage) {
        console.log('  - Has assessment-specific fields:', {
          assessmentVersion: data.assessmentVersion,
          recommendation: !!data.recommendation,
          scorePercentage: data.scorePercentage
        })
      }
      if (data.answers) {
        console.log('  - Has answers object with keys:', Object.keys(data.answers))
      }
      if (data.assessmentAnswers) {
        console.log('  - Has assessmentAnswers array with length:', data.assessmentAnswers.length)
      }
    } else {
      console.log('  Detected as GET-STARTED due to:')
      if (data.monthlyLeads || data.teamSize || data.currentTools || data.biggestChallenge) {
        console.log('  - Has get-started specific fields:', {
          monthlyLeads: !!data.monthlyLeads,
          teamSize: !!data.teamSize,
          currentTools: !!data.currentTools,
          biggestChallenge: !!data.biggestChallenge,
          pricingPlan: !!data.pricingPlan
        })
      }
      console.log('  - No assessment indicators found')
    }
    
    // Calculate lead score and quality
    const leadScore = calculateLeadScore(data, formType)
    const leadQuality = getLeadQuality(leadScore)
    
    console.log(`[API V5] Lead score: ${leadScore}, quality: ${leadQuality}`)
    
    // Add calculated values to data
    data.leadScore = leadScore
    data.leadQuality = leadQuality
    data.submissionDate = new Date().toISOString()
    
    // Check if GHL integration is enabled
    if (!process.env.GHL_ACCESS_TOKEN || !process.env.GHL_LOCATION_ID ||
        process.env.GHL_ACCESS_TOKEN.includes('your_') || 
        process.env.GHL_LOCATION_ID.includes('your_')) {
      console.log('[API V5] GHL integration not configured, using email fallback')
      
      // Send email notification
      try {
        if (formType === 'assessment') {
          await sendAssessmentNotification(data)
        } else {
          await sendGetStartedNotification(data)
        }
        return NextResponse.json({ 
          success: true, 
          message: 'Submission received successfully (email sent)',
          leadScore,
          leadQuality,
          formType
        })
      } catch (emailError) {
        console.error('[API V5] Email notification failed:', emailError)
        return NextResponse.json({ 
          success: true, 
          message: 'Submission received successfully',
          warning: 'Email notification pending',
          leadScore,
          leadQuality,
          formType
        })
      }
    }
    
    // Fetch actual custom fields from GHL
    console.log('[API V5] Fetching custom fields from GHL...')
    const ghlFields = await fetchGHLCustomFields(
      process.env.GHL_ACCESS_TOKEN,
      process.env.GHL_LOCATION_ID
    )
    
    if (ghlFields.length === 0) {
      console.warn('[API V5] No custom fields found in GHL')
      console.warn('[API V5] This means either:')
      console.warn('[API V5]   1. No custom fields have been created in GHL yet')
      console.warn('[API V5]   2. The API token doesn\'t have permission to read custom fields')
      console.warn('[API V5]   3. The location ID is incorrect')
    } else {
      console.log(`[API V5] Found ${ghlFields.length} custom fields`)
      console.log('[API V5] First 5 fields for debugging:')
      ghlFields.slice(0, 5).forEach(field => {
        console.log(`[API V5]   - ${field.name} (key: ${field.fieldKey || 'none'}, id: ${field.id})`)
      })
      // Log missing fields for debugging
      logMissingFields(ghlFields)
      logMissingTrueFlowFields(ghlFields)
    }
    
    // Build custom fields payload using TrueFlow mapping with actual GHL field keys
    console.log('[API V5] Building custom fields with TrueFlow mapping...')
    const customFields = buildTrueFlowCustomFields(data, ghlFields, formType)
    console.log(`[API V5] Built ${customFields.length} custom field values`)
    
    // Log the actual custom fields being sent
    console.log('[API V5] Custom fields detail:')
    if (customFields.length === 0) {
      console.warn('[API V5] WARNING: No custom fields were mapped!')
      console.log('[API V5] Data keys available:', Object.keys(data))
    } else {
      customFields.forEach(cf => {
        const field = ghlFields.find(f => f.fieldKey?.replace(/^contact\./, '') === cf.key || f.fieldKey === cf.key)
        const fieldName = field?.name || 'Unknown'
        const fieldKey = cf.key
        const preview = cf.field_value.length > 50 ? cf.field_value.substring(0, 50) + '...' : cf.field_value
        console.log(`  - ${fieldName} (${fieldKey}): "${preview}"`)
      })
    }
    
    // Build tags
    const tags = [
      'web-lead',
      `lead-quality-${leadQuality}`,
      formType === 'assessment' ? 'assessment-form' : 'get-started-form'
    ]
    
    if (data.businessType) {
      // Normalize business type for tag
      const businessTypeTag = data.businessType.toLowerCase().replace(/[^a-z0-9]/g, '-')
      tags.push(`business-type-${businessTypeTag}`)
    }
    
    console.log('[API V5] Using tags:', tags)
    
    // Prepare GHL payload
    const ghlPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      locationId: process.env.GHL_LOCATION_ID!,
      name: `${data.firstName} ${data.lastName}`,
      companyName: data.businessName,
      tags,
      customFields,
      source: formType === 'assessment' ? 'TrueFlow Assessment Form' : 'TrueFlow Get Started Form',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
    
    console.log('[API V5] Sending to GHL with payload:', {
      name: ghlPayload.name,
      email: ghlPayload.email,
      companyName: ghlPayload.companyName,
      source: ghlPayload.source,
      tagsCount: tags.length,
      customFieldsCount: customFields.length
    })
    
    // Create or update contact in GHL
    const ghlResponse = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Version': GHL_API_VERSION
      },
      body: JSON.stringify(ghlPayload)
    })
    
    if (!ghlResponse.ok) {
      const errorData = await ghlResponse.text()
      console.error('[API V5] GHL API Error:', {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
        error: errorData
      })
      
      // Still try to send email as backup
      try {
        if (formType === 'assessment') {
          await sendAssessmentNotification(data)
        } else {
          await sendGetStartedNotification(data)
        }
      } catch (emailError) {
        console.error('[API V5] Backup email also failed:', emailError)
      }
      
      // Don't fail the entire request if GHL fails
      return NextResponse.json({ 
        success: true, 
        message: 'Submission received successfully',
        warning: 'CRM sync pending - we will process your submission manually',
        leadScore,
        leadQuality,
        formType,
        ghlError: process.env.NODE_ENV === 'development' ? errorData : undefined
      })
    }
    
    const ghlResult = await ghlResponse.json()
    const contactId = ghlResult.contact?.id || ghlResult.id
    console.log('[API V5] Contact created/updated successfully:', {
      contactId,
      hasContact: !!ghlResult.contact,
      hasId: !!ghlResult.id
    })
    
    // Create opportunity in pipeline for all form submissions
    let opportunityId = null
    // Create opportunities for all Get Started form submissions
    if (contactId && process.env.GHL_CREATE_OPPORTUNITIES === 'true') {
      try {
        console.log('[API V5] Creating opportunity in pipeline...')
        
        // Pipeline configuration for "TrueFlow – Getting Started Form"
        const pipelineId = 'tH245WTBIthgA8j8dYLI'
        const firstStageId = '2e4484df-c32f-46e6-87be-eee88ca413f0' // New Lead (Getting Started Form)
        
        // Calculate monetary value based on selected pricing plan
        // Convert weekly to monthly value (multiply by 4.33 weeks per month)
        let monetaryValue = 650 // Default to lowest tier ($150/week * 4.33)
        let selectedTier = 'Content Engine (Default)'
        
        // For assessment forms, check for selectedPlan field as well
        const planField = data.pricingPlan || data.selectedPlan || ''
        
        if (planField) {
          const planLower = planField.toLowerCase()
          console.log('[API V5] Selected pricing plan:', planField)
          
          if (planLower.includes('content') || planLower === 'content-engine' || planLower === 'starter') {
            monetaryValue = 650 // $150/week * 4.33 weeks
            selectedTier = 'Content Engine'
          } else if (planLower.includes('complete') || planLower === 'complete-system' || planLower === 'growth') {
            monetaryValue = 1300 // $300/week * 4.33 weeks
            selectedTier = 'Complete System'
          } else if (planLower.includes('custom') || planLower === 'enterprise' || planLower === 'custom') {
            monetaryValue = 2500 // Estimated value for enterprise
            selectedTier = 'Custom Enterprise'
          } else if (planLower.includes('not') || planLower === 'not-sure' || planLower === 'unsure') {
            monetaryValue = 650 // Default to lowest tier
            selectedTier = 'Not Sure (Defaulted to Content Engine)'
          }
        }
        
        console.log('[API V5] Opportunity value calculation:', {
          formType,
          selectedPlan: planField || 'Not specified',
          selectedTier,
          monthlyValue: monetaryValue
        })
        
        const opportunityPayload = {
          pipelineId,
          locationId: process.env.GHL_LOCATION_ID!,
          name: `${data.firstName} ${data.lastName} - ${data.businessName || 'New Lead'} (${selectedTier})`,
          pipelineStageId: firstStageId,
          status: 'open',
          contactId,
          monetaryValue,
          source: 'TrueFlow Get Started Form',
          customFields: []
        }
        
        console.log('[API V5] Creating opportunity with:', {
          name: opportunityPayload.name,
          pipeline: 'TrueFlow – Getting Started Form',
          stage: 'New Lead (Getting Started Form)',
          monetaryValue: `$${monetaryValue}/month`,
          contactId
        })
        
        const oppResponse = await fetch(`${GHL_API_BASE}/opportunities/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.GHL_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Version': GHL_API_VERSION
          },
          body: JSON.stringify(opportunityPayload)
        })
        
        if (oppResponse.ok) {
          const oppResult = await oppResponse.json()
          opportunityId = oppResult.opportunity?.id
          console.log('[API V5] Opportunity created successfully:', opportunityId)
        } else {
          const errorText = await oppResponse.text()
          console.error('[API V5] Failed to create opportunity:', oppResponse.status, errorText)
        }
      } catch (oppError) {
        console.error('[API V5] Error creating opportunity:', oppError)
        // Don't fail the request if opportunity creation fails
      }
    }
    
    // Send backup email notification
    try {
      console.log('[API V5] Sending backup email notification...')
      if (formType === 'assessment') {
        await sendAssessmentNotification(data)
      } else {
        await sendGetStartedNotification(data)
      }
      console.log('[API V5] Backup email sent successfully')
    } catch (emailError) {
      console.error('[API V5] Backup email failed:', emailError)
      // Don't fail the request if backup email fails
    }
    
    console.log('[API V5] ===== REQUEST COMPLETED SUCCESSFULLY =====')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead processed successfully',
      ghlContactId: contactId,
      ghlOpportunityId: opportunityId,
      leadScore,
      leadQuality,
      formType,
      customFieldsUsed: customFields.length,
      tagsUsed: tags.length
    })
    
  } catch (error) {
    console.error('[API V5] ===== ERROR IN REQUEST =====')
    console.error('[API V5] Error processing lead:', error)
    console.error('[API V5] Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    
    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' 
        ? error instanceof Error ? error.message : String(error)
        : undefined
    }, { status: 500 })
  }
}

// OPTIONS handler for CORS
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}