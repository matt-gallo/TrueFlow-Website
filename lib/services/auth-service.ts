import { supabase } from '../supabase/client'

interface SignUpData {
  email: string
  password: string
  fullName?: string
  company?: string
  role?: string
  phone?: string
  businessType?: string
  contentGoals?: string[]
  integrations?: string[]
  selectedPlan?: string
}

export const authService = {
  async signUp(data: SignUpData) {
    try {
      // 1. Create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          // Email verification will be sent automatically
          emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
          data: {
            // Store additional user metadata
            full_name: data.fullName,
            company: data.company,
            role: data.role,
            phone: data.phone,
            business_type: data.businessType,
            content_goals: data.contentGoals,
            integrations: data.integrations,
            selected_plan: data.selectedPlan,
            source: 'landing_page'
          }
        }
      })

      if (authError) throw authError

      // 2. If you have a profiles table, you might want to create a profile
      // This depends on your database schema
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            email: data.email,
            full_name: data.fullName,
            company: data.company,
            role: data.role,
            phone: data.phone,
            business_type: data.businessType,
            content_goals: data.contentGoals,
            integrations: data.integrations,
            selected_plan: data.selectedPlan,
            created_at: new Date().toISOString()
          })

        if (profileError) {
          console.error('Profile creation error:', profileError)
          // Don't throw - user is created, profile is optional
        }
      }

      return { success: true, user: authData.user }
    } catch (error) {
      console.error('Sign up error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Sign up failed' 
      }
    }
  },

  async resendVerificationEmail(email: string) {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`
        }
      })

      if (error) throw error
      return { success: true }
    } catch (error) {
      console.error('Resend verification error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to resend email' 
      }
    }
  },

  async checkExistingUser(email: string) {
    try {
      // Try to sign in with a dummy password to check if user exists
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: 'dummy_check_password_12345'
      })

      // If the error is "Invalid login credentials", the user exists
      if (error && error.message.includes('Invalid login credentials')) {
        return { exists: true }
      }

      return { exists: false }
    } catch (error) {
      console.error('Check existing user error:', error)
      return { exists: false }
    }
  }
}