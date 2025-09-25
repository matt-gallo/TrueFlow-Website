import { createClient } from '@supabase/supabase-js'

// Create a Supabase client for the landing page
// Uses anon key which only allows public operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definition for lead data
export interface LeadData {
  email: string
  first_name: string
  last_name: string
  phone?: string
  business_name?: string
  business_type?: string
  content_goals?: string[]
  integrations?: string[]
  assessment_answers?: Record<string, any>
  readiness_score?: number
  selected_plan?: string
  plan_recommendation?: string
  source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

// Function to create a new lead
export async function createLead(leadData: LeadData) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()
      .single()

    if (error) {
      console.error('Error creating lead:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (err) {
    console.error('Unexpected error creating lead:', err)
    return { success: false, error: 'Failed to save lead information' }
  }
}

// Function to check if a lead exists
export async function findLeadByEmail(email: string) {
  try {
    const { data, error } = await supabase
      .rpc('find_lead_by_email', { p_email: email })

    if (error) {
      console.error('Error finding lead:', error)
      return null
    }

    return data?.[0] || null
  } catch (err) {
    console.error('Unexpected error finding lead:', err)
    return null
  }
}