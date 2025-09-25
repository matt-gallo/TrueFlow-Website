-- =====================================================
-- TRUEFLOW LEADS TABLE SCHEMA
-- =====================================================
-- This table captures preliminary lead information from the getting-started form
-- before users create their account. This data can be merged when they sign up.
--
-- To execute: Copy this entire SQL and paste into Supabase SQL Editor
-- =====================================================

-- Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
  -- Primary key
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Contact Information
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  business_name TEXT,

  -- Business Profile
  business_type TEXT,
  content_goals TEXT[], -- Array of content types they want to create
  integrations TEXT[], -- Array of integrations they're interested in

  -- Assessment Answers (stored as JSONB for flexibility)
  assessment_answers JSONB DEFAULT '{}',

  -- Scoring and Recommendations
  readiness_score INTEGER,
  selected_plan TEXT,
  plan_recommendation TEXT,

  -- Tracking
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),

  -- Conversion tracking
  converted_to_user_id UUID REFERENCES auth.users(id),
  converted_at TIMESTAMP WITH TIME ZONE,

  -- Source tracking
  source TEXT DEFAULT 'get-started-form',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,

  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'converted', 'expired', 'rejected'))
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_converted_to_user_id ON public.leads(converted_to_user_id);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous users to insert leads
CREATE POLICY "Allow anonymous lead creation" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view their own lead data
CREATE POLICY "Users can view their own lead data" ON public.leads
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email' OR converted_to_user_id = auth.uid());

-- Create a policy for service role to manage all leads
CREATE POLICY "Service role can manage all leads" ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create a function to merge lead data with a user account
CREATE OR REPLACE FUNCTION public.merge_lead_with_user(
  p_lead_id UUID,
  p_user_id UUID
)
RETURNS BOOLEAN AS $$
DECLARE
  v_lead_email TEXT;
  v_user_email TEXT;
BEGIN
  -- Get the lead's email
  SELECT email INTO v_lead_email
  FROM public.leads
  WHERE id = p_lead_id;

  -- Get the user's email
  SELECT email INTO v_user_email
  FROM auth.users
  WHERE id = p_user_id;

  -- Only merge if emails match (security check)
  IF v_lead_email = v_user_email THEN
    -- Update the lead record to mark it as converted
    UPDATE public.leads
    SET
      converted_to_user_id = p_user_id,
      converted_at = TIMEZONE('utc', NOW()),
      status = 'converted',
      updated_at = TIMEZONE('utc', NOW())
    WHERE id = p_lead_id;

    -- Store lead data in user metadata (optional)
    UPDATE auth.users
    SET raw_user_meta_data = raw_user_meta_data ||
      (SELECT jsonb_build_object(
        'lead_id', id,
        'business_name', business_name,
        'business_type', business_type,
        'content_goals', content_goals,
        'integrations', integrations,
        'readiness_score', readiness_score,
        'selected_plan', selected_plan
      )
      FROM public.leads
      WHERE id = p_lead_id)
    WHERE id = p_user_id;

    RETURN true;
  ELSE
    RETURN false;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to find a lead by email (for the app to use during signup)
CREATE OR REPLACE FUNCTION public.find_lead_by_email(p_email TEXT)
RETURNS TABLE (
  id UUID,
  first_name TEXT,
  last_name TEXT,
  business_name TEXT,
  phone TEXT,
  business_type TEXT,
  content_goals TEXT[],
  integrations TEXT[],
  readiness_score INTEGER,
  selected_plan TEXT,
  assessment_answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    l.id,
    l.first_name,
    l.last_name,
    l.business_name,
    l.phone,
    l.business_type,
    l.content_goals,
    l.integrations,
    l.readiness_score,
    l.selected_plan,
    l.assessment_answers,
    l.created_at
  FROM public.leads l
  WHERE l.email = p_email
    AND l.status = 'pending'
    AND l.created_at > TIMEZONE('utc', NOW()) - INTERVAL '30 days' -- Only recent leads
  ORDER BY l.created_at DESC
  LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION public.merge_lead_with_user TO authenticated;
GRANT EXECUTE ON FUNCTION public.find_lead_by_email TO anon, authenticated;

-- Add a comment to the table
COMMENT ON TABLE public.leads IS 'Stores preliminary lead information from the getting-started form before account creation';

-- =====================================================
-- OPTIONAL: Clean up old unconverted leads (run periodically)
-- =====================================================
-- UPDATE public.leads
-- SET status = 'expired'
-- WHERE status = 'pending'
--   AND created_at < TIMEZONE('utc', NOW()) - INTERVAL '30 days';