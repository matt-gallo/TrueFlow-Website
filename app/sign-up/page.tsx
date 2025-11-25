'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  CreditCard,
  HeartHandshake,
  Moon,
  Shield,
  Sparkles,
  Sun,
  Users,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface SignUpFormData {
  // Step 1: Account Basics
  fullName: string
  email: string
  role: string
  // Step 2: Business Snapshot (GHL required fields)
  company: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  website: string
  timezone: string
  teamSize: string
  primaryGoal: string
  voiceNotes: string
  // Step 3: Launch Game Plan
  winsWanted: string
  // Step 4: Trial + Payment
  includeSuccessManager: boolean
}

interface AcceleratorMoment {
  day: string
  title: string
  detail: string
  icon: LucideIcon
}

const steps = [
  { id: 1, title: 'Account Basics', subtitle: 'Your name and contact info' },
  { id: 2, title: 'Business Snapshot', subtitle: 'Tell us about your business' },
  { id: 3, title: 'Launch Game Plan', subtitle: 'Stack the resources you want' },
  { id: 4, title: 'Trial + Payment', subtitle: 'Secure your 14-day trial' }
] as const

const goalOptions = [
  'Launch Content Machine',
  'Automate Lead Flow',
  'Scale Community & Offers',
  'Systematize Operations'
]

const resourceOptions = [
  { label: 'Voice & Story Library', description: 'We map your tone, stories, and hooks so AI sounds like you.' },
  { label: 'Demand Engine', description: 'Outbound, inbound, and nurture campaigns built with you live.' },
  { label: 'Sales Enablement', description: 'Scripts, objection flows, and follow-up automations.' },
  { label: 'Mindset + CEO Ops', description: 'Accountability, decision frameworks, and weekly scorecards.' }
]

const acceleratorMoments: AcceleratorMoment[] = [
  {
    day: 'Day 1',
    title: 'White-glove onboarding',
    detail: 'Live intake, access granted, and we pull your content + data instantly.',
    icon: Sparkles
  },
  {
    day: 'Day 3',
    title: 'Systems go live',
    detail: 'Demand, content, and service workflows switch on with human QA.',
    icon: Zap
  },
  {
    day: 'Day 7',
    title: 'TrueFlow Accelerator workshop',
    detail: 'Walkthrough of marketing, sales, ops, and mindset frameworks.',
    icon: Users
  },
  {
    day: 'Day 14',
    title: 'Trial wrap + expansion',
    detail: 'Card on file activates $297/mo membership unless you cancel.',
    icon: Shield
  }
]

const platformFeatures = [
  'Full CRM & Pipeline Management — never lose a lead again',
  'Content Engine + Auto-Publishing — grow your digital footprint on autopilot',
  'AI Chat Agents — book calls 2-3x faster, 24/7',
  'Email & SMS Automation — nurture leads and close deals automatically',
  'Scheduling & Calendar Sync — prospects book directly into your calendar',
  'Funnels & Landing Pages — high-converting pages that drive sales',
  'Reputation Management — collect 5-star reviews at scale',
  'Analytics & Reporting — know exactly what\'s working'
]

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [selectedResources, setSelectedResources] = useState<string[]>(['Voice & Story Library'])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [signupId, setSignupId] = useState('')

  // Generate unique signup ID on mount
  useEffect(() => {
    const id = `signup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    setSignupId(id)
  }, [])

  // Theme classes
  const theme = {
    bg: isDarkMode ? 'bg-black' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textMuted: isDarkMode ? 'text-white/70' : 'text-gray-600',
    textMuted2: isDarkMode ? 'text-white/60' : 'text-gray-500',
    textMuted3: isDarkMode ? 'text-white/50' : 'text-gray-400',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-white',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    inputBg: isDarkMode ? 'bg-black/30' : 'bg-white',
    inputBorder: isDarkMode ? 'border-white/10' : 'border-gray-300',
    chipBg: isDarkMode ? 'bg-white/5' : 'bg-gray-100',
    chipBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    gradientBg: isDarkMode ? 'from-black via-slate-950 to-black' : 'from-gray-50 via-white to-gray-50',
    glowOpacity: isDarkMode ? '/10' : '/5',
    sectionBg: isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl',
    backBtn: isDarkMode ? 'border-white/20 text-white/80 hover:text-white' : 'border-gray-300 text-gray-600 hover:text-gray-900',
  }
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    role: 'Founder / CEO',
    company: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: 'US',
    postalCode: '',
    website: '',
    timezone: '',
    teamSize: '1-3',
    primaryGoal: 'Launch Content Machine',
    voiceNotes: '',
    winsWanted: '',
    includeSuccessManager: true
  })

  const progress = useMemo(() => (currentStep / steps.length) * 100, [currentStep])

  // Format helpers
  const formatPhone = (value: string) => value.replace(/[^\d+\s-]/g, '')
  const formatEmail = (value: string) => value.trim().toLowerCase()
  const formatWebsite = (value: string) => {
    if (value && !value.match(/^https?:\/\//i) && value.includes('.')) {
      return `https://${value}`
    }
    return value
  }
  const formatState = (value: string) => {
    if (value.length <= 2) return value.toUpperCase()
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }

  const updateFormData = (field: keyof SignUpFormData, value: string | boolean) => {
    let formattedValue = value
    if (typeof value === 'string') {
      switch (field) {
        case 'phone':
          formattedValue = formatPhone(value)
          break
        case 'email':
          formattedValue = formatEmail(value)
          break
        case 'country':
          formattedValue = value.toUpperCase().trim()
          break
        case 'state':
          formattedValue = formatState(value)
          break
        case 'postalCode':
          formattedValue = value.toUpperCase().trim()
          break
        default:
          formattedValue = value
      }
    }
    setFormData((prev) => ({ ...prev, [field]: formattedValue }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[field as string]
      return next
    })
  }

  const handleWebsiteBlur = () => {
    if (formData.website) {
      updateFormData('website', formatWebsite(formData.website))
    }
  }

  // Validation helpers
  const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value)
  const isPhone = (value: string) => /^\+?[0-9\-\s()]{7,}$/.test(value)
  const isUrl = (value: string) => {
    try {
      const url = new URL(value)
      return Boolean(url.protocol && url.host)
    } catch {
      return false
    }
  }
  const isCountry = (value: string) => /^[A-Za-z]{2}$/.test(value)

  const collectStepErrors = (step: number) => {
    const errors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required'
      if (!formData.email.trim()) {
        errors.email = 'Email is required'
      } else if (!isEmail(formData.email)) {
        errors.email = 'Enter a valid email address'
      }
    }

    if (step === 2) {
      if (!formData.company.trim()) errors.company = 'Business name is required'
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required'
      } else if (!isPhone(formData.phone)) {
        errors.phone = 'Enter a valid phone number'
      }
      if (!formData.address.trim()) errors.address = 'Address is required'
      if (!formData.city.trim()) errors.city = 'City is required'
      if (!formData.state.trim()) errors.state = 'State is required'
      if (!formData.country.trim()) {
        errors.country = 'Country is required'
      } else if (!isCountry(formData.country)) {
        errors.country = 'Use a 2-letter country code'
      }
      if (!formData.postalCode.trim()) errors.postalCode = 'Postal code is required'
      if (formData.website && !isUrl(formData.website)) errors.website = 'Enter a valid URL'
    }

    return errors
  }

  const validateStep = (step: number) => {
    const errors = collectStepErrors(step)
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNext = async () => {
    if (!validateStep(currentStep)) return
    if (currentStep < steps.length) {
      // When entering Step 4 (payment), store form data on server
      if (currentStep === 3) {
        const signupData = {
          signupId,
          name: formData.company,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          postalCode: formData.postalCode,
          website: formData.website || undefined,
          timezone: formData.timezone || undefined,
          prospectInfo: {
            firstName: formData.fullName.split(' ')[0],
            lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
            email: formData.email
          },
          metadata: {
            role: formData.role,
            teamSize: formData.teamSize,
            primaryGoal: formData.primaryGoal,
            voiceNotes: formData.voiceNotes,
            winsWanted: formData.winsWanted,
            selectedResources,
            includeSuccessManager: formData.includeSuccessManager
          },
          timestamp: new Date().toISOString()
        }

        try {
          // Store on server for webhook to retrieve
          const response = await fetch('/api/signup-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData)
          })

          if (!response.ok) {
            setErrorMessage('Failed to prepare payment. Please try again.')
            return
          }

          console.log('Stored signup data for payment webhook:', signupData)
        } catch (error) {
          console.error('Error storing signup data:', error)
          setErrorMessage('Unable to connect to the server. Please check your internet connection.')
          return
        }
      }

      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1)
  }

  const handleStepSelect = (targetStep: number) => {
    if (targetStep > currentStep && !validateStep(currentStep)) return
    setCurrentStep(targetStep)
  }

  const toggleResource = (label: string) => {
    setSelectedResources((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  useEffect(() => {
    if (!isComplete) return
    setIsRedirecting(true)
    const timeout = setTimeout(() => {
      window.location.href = 'https://login.trueflow.ai'
    }, 2500)
    return () => clearTimeout(timeout)
  }, [isComplete])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Validate all steps
    const allErrors = steps.reduce((acc, step) => {
      const stepErrors = collectStepErrors(step.id)
      return { ...acc, ...stepErrors }
    }, {} as Record<string, string>)

    if (Object.keys(allErrors).length > 0) {
      setFieldErrors(allErrors)
      setErrorMessage('Please correct the highlighted fields before submitting.')
      return
    }

    if (currentStep < steps.length) return

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      // Build payload for GHL API
      const ghlPayload = {
        name: formData.company,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        postalCode: formData.postalCode,
        website: formData.website || undefined,
        timezone: formData.timezone || undefined,
        prospectInfo: {
          firstName: formData.fullName.split(' ')[0],
          lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
          email: formData.email
        },
        // Additional metadata for accelerator
        metadata: {
          role: formData.role,
          teamSize: formData.teamSize,
          primaryGoal: formData.primaryGoal,
          voiceNotes: formData.voiceNotes,
          winsWanted: formData.winsWanted,
          selectedResources,
          includeSuccessManager: formData.includeSuccessManager
        }
      }

      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ghlPayload)
      })

      const data = await response.json()

      if (!response.ok) {
        let errorMsg = data.error || 'Failed to create your account. Please try again.'
        if (data.details) {
          errorMsg = Array.isArray(data.details)
            ? `${errorMsg}\n\n${data.details.join('\n')}`
            : `${errorMsg}: ${data.details}`
        }
        setErrorMessage(errorMsg)
        return
      }

      setIsComplete(true)
    } catch (error) {
      console.error(error)
      setErrorMessage('Unable to connect to the server. Please check your internet connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradientBg}`} />
        <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-[#1d929e]${theme.glowOpacity} blur-[160px]`} />
        <div className={`absolute bottom-0 right-10 w-[420px] h-[420px] bg-emerald-500${theme.glowOpacity} blur-[180px]`} />
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-24 right-6 z-50 p-3 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-colors shadow-lg`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <div className="relative z-10">
        <Navigation />

        <main className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Hero Section - What You're Getting */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-[#1d929e] mb-4">Start Your 14-Day Free Trial</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                The all-in-one platform to <span className="bg-gradient-to-r from-[#1d929e] to-emerald-400 bg-clip-text text-transparent">grow your business</span>
              </h1>
              <p className={`text-xl ${theme.textMuted} mt-6 max-w-3xl mx-auto`}>
                Get full access to TrueFlow&apos;s CRM, automation, and AI tools — plus 2 weeks in the TrueFlow Accelerator with live coaching, resources, and done-for-you setup.
              </p>
            </div>

            {/* Pricing Clarity Box */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-[#1d929e]/20 via-emerald-500/10 to-transparent' : 'bg-white shadow-xl'} border border-[#1d929e]/30 rounded-3xl p-8 mb-12`}>
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="text-center lg:text-left">
                  <p className={`text-sm uppercase tracking-wider ${theme.textMuted2} mb-2`}>Today</p>
                  <p className="text-4xl font-bold text-emerald-500">$0</p>
                  <p className={`${theme.textMuted} mt-2`}>14-day free trial starts immediately</p>
                </div>
                <div className={`text-center lg:text-left lg:border-l lg:border-r ${isDarkMode ? 'lg:border-white/10' : 'lg:border-gray-200'} lg:px-8`}>
                  <p className={`text-sm uppercase tracking-wider ${theme.textMuted2} mb-2`}>After Trial — Platform</p>
                  <p className="text-4xl font-bold">$297<span className={`text-lg font-normal ${theme.textMuted2}`}>/mo</span></p>
                  <p className={`${theme.textMuted} mt-2`}>Full TrueFlow CRM + all features below</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className={`text-sm uppercase tracking-wider ${theme.textMuted2} mb-2`}>After Trial — Accelerator</p>
                  <p className="text-4xl font-bold">$350<span className={`text-lg font-normal ${theme.textMuted2}`}>/wk</span></p>
                  <p className={`${theme.textMuted} mt-2`}>Optional: live coaching + hands-on support</p>
                </div>
              </div>
              <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'} text-center`}>
                <p className={isDarkMode ? 'text-white/80' : 'text-gray-700'}>
                  <CheckCircle className="h-5 w-5 text-emerald-500 inline mr-2" />
                  Cancel anytime before Day 14 — no charge, no commitment
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-12">
              <a
                href="#signup-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1d929e] to-emerald-500 font-semibold text-lg shadow-lg shadow-[#1d929e]/25 hover:shadow-[#1d929e]/40 transition-shadow"
              >
                Sign Up Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* What's Included - Platform Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-8">Everything you get with TrueFlow</h2>
              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 max-w-4xl mx-auto">
                {platformFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <p className={isDarkMode ? 'text-white/90' : 'text-gray-700'}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accelerator Bonus Callout */}
            <div className={`${isDarkMode ? 'bg-gradient-to-r from-[#1d929e]/10 via-emerald-500/10 to-teal-500/10 border-white/10' : 'bg-gradient-to-r from-[#1d929e]/5 via-emerald-500/5 to-teal-500/5 border-gray-200 shadow-lg'} border rounded-3xl p-8 text-center`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d929e]/20 border border-[#1d929e]/30 text-[#1d929e] text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                Included Free in Your Trial
              </div>
              <h3 className="text-2xl font-bold mb-3">TrueFlow Accelerator — 2 Weeks of Live Support</h3>
              <p className={`${theme.textMuted} max-w-2xl mx-auto mb-6`}>
                Don&apos;t just get the tools — get them set up right. For the first 14 days, you&apos;ll have access to live coaching calls, done-with-you onboarding, a dedicated success team, and our full library of trainings and AI tools. This is normally $350/week, but it&apos;s included free with your trial.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className={`px-4 py-2 rounded-full ${theme.chipBg} border ${theme.chipBorder} text-sm`}>Live group coaching calls</span>
                <span className={`px-4 py-2 rounded-full ${theme.chipBg} border ${theme.chipBorder} text-sm`}>AI Sales Coach</span>
                <span className={`px-4 py-2 rounded-full ${theme.chipBg} border ${theme.chipBorder} text-sm`}>Offer Architecture Blueprint</span>
                <span className={`px-4 py-2 rounded-full ${theme.chipBg} border ${theme.chipBorder} text-sm`}>Constant Content Engine</span>
                <span className={`px-4 py-2 rounded-full ${theme.chipBg} border ${theme.chipBorder} text-sm`}>Morning Mindset Mastery</span>
                <span className={`px-4 py-2 rounded-full ${theme.chipBg} border ${theme.chipBorder} text-sm`}>Voice & brand cloning</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <section id="signup-form" className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-6 sm:p-8 shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'} scroll-mt-24 border`}>
              {isComplete ? (
                <div className="space-y-8 text-center">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30 text-green-200">
                    <CheckCircle className="h-5 w-5" />
                    <span>Workspace Reserved</span>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                      You&apos;re in. The accelerator team is spinning everything up.
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                      Expect a welcome email, portal invite, and a link to book your Accelerator kickoff call in the next 5 minutes. Your trial is active through Day 14, and we won&apos;t bill the $297/mo membership until then.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3 text-left">
                    {acceleratorMoments.slice(0, 3).map((moment) => {
                      const Icon = moment.icon
                      return (
                        <div key={moment.day} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="text-xs text-white/60 uppercase tracking-wider">{moment.day}</div>
                          <div className="flex items-center gap-2 mt-2 font-semibold">
                            <Icon className="h-4 w-4 text-[#1d929e]" />
                            {moment.title}
                          </div>
                          <p className="text-sm text-white/60 mt-2">{moment.detail}</p>
                        </div>
                      )
                    })}
                  </div>
                  <p className="text-sm text-white/60">Hang tight—we&apos;re directing you to the secure login hub.</p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link
                      href="https://login.trueflow.ai"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1d929e] to-emerald-500 font-semibold shadow-lg shadow-[#1d929e]/20"
                    >
                      {isRedirecting ? 'Redirecting to Login...' : 'Go to Login.TrueFlow.ai'}
                    </Link>
                    <Link
                      href="/"
                      className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white transition"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        Start your free trial
                      </h2>
                      <p className={`${theme.textMuted} mt-2`}>
                        Fill out the form below to get instant access to TrueFlow + 2 weeks in the Accelerator.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className={`flex items-center justify-between text-xs ${theme.textMuted2}`}>
                      <span>Step {currentStep} of {steps.length}</span>
                      <span>{Math.round(progress)}% complete</span>
                    </div>
                    <div className={`mt-3 h-2 ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'} rounded-full`}>
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-[#1d929e] to-emerald-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                      {steps.map((step) => (
                        <button
                          key={step.id}
                          type="button"
                          className={`p-3 rounded-2xl border text-left transition ${
                            currentStep === step.id
                              ? 'border-[#1d929e] bg-[#1d929e]/10'
                              : isDarkMode ? 'border-white/10 bg-white/5 hover:border-white/30' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                          }`}
                          onClick={() => handleStepSelect(step.id)}
                        >
                          <p className={`text-xs ${theme.textMuted2}`}>Step {step.id}</p>
                          <p className="text-sm font-semibold">{step.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 1: Account Basics */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Full name
                          <input
                            type="text"
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            placeholder="Jordan Reyes"
                            value={formData.fullName}
                            onChange={(e) => updateFormData('fullName', e.target.value)}
                            required
                          />
                          {fieldErrors.fullName && <span className="text-xs text-rose-300">{fieldErrors.fullName}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Work email
                          <input
                            type="email"
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            required
                          />
                          {fieldErrors.email && <span className="text-xs text-rose-300">{fieldErrors.email}</span>}
                        </label>
                      </div>
                      <label className="flex flex-col gap-2 text-sm">
                        Primary role
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Founder / CEO', 'Operator', 'Marketing', 'Sales'].map((role) => (
                            <button
                              key={role}
                              type="button"
                              className={`px-3 py-2 rounded-xl border text-xs font-semibold transition ${
                                formData.role === role
                                  ? 'border-[#1d929e] bg-[#1d929e]/10'
                                  : isDarkMode ? 'border-white/10 hover:border-white/30' : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => updateFormData('role', role)}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </label>
                      <p className={`${theme.textMuted2} text-sm flex items-center gap-2`}>
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        Your login gives you access to the dashboard + accelerator curriculum instantly once the intake is complete.
                      </p>
                    </div>
                  )}

                  {/* Step 2: Business Snapshot */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Business name
                          <input
                            type="text"
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            placeholder="The Growth Lab"
                            value={formData.company}
                            onChange={(e) => updateFormData('company', e.target.value)}
                            required
                          />
                          {fieldErrors.company && <span className="text-xs text-rose-300">{fieldErrors.company}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Phone (include country code)
                          <input
                            type="tel"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono"
                            placeholder="+1 555 123 4567"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            required
                          />
                          {fieldErrors.phone && <span className="text-xs text-rose-300">{fieldErrors.phone}</span>}
                        </label>
                      </div>
                      <label className="flex flex-col gap-2 text-sm">
                        Business address
                        <input
                          type="text"
                          className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                          placeholder="123 Main Street, Suite 400"
                          value={formData.address}
                          onChange={(e) => updateFormData('address', e.target.value)}
                          required
                        />
                        {fieldErrors.address && <span className="text-xs text-rose-300">{fieldErrors.address}</span>}
                      </label>
                      <div className="grid gap-4 sm:grid-cols-4">
                        <label className="flex flex-col gap-2 text-sm">
                          City
                          <input
                            type="text"
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            placeholder="New York"
                            value={formData.city}
                            onChange={(e) => updateFormData('city', e.target.value)}
                            required
                          />
                          {fieldErrors.city && <span className="text-xs text-rose-300">{fieldErrors.city}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          State
                          <input
                            type="text"
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            placeholder="NY"
                            value={formData.state}
                            onChange={(e) => updateFormData('state', e.target.value)}
                            required
                          />
                          {fieldErrors.state && <span className="text-xs text-rose-300">{fieldErrors.state}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Country
                          <input
                            type="text"
                            maxLength={2}
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none uppercase font-mono"
                            placeholder="US"
                            value={formData.country}
                            onChange={(e) => updateFormData('country', e.target.value)}
                            required
                          />
                          {fieldErrors.country && <span className="text-xs text-rose-300">{fieldErrors.country}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Postal code
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono"
                            placeholder="10001"
                            value={formData.postalCode}
                            onChange={(e) => updateFormData('postalCode', e.target.value)}
                            required
                          />
                          {fieldErrors.postalCode && <span className="text-xs text-rose-300">{fieldErrors.postalCode}</span>}
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Website (optional)
                          <input
                            type="url"
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            placeholder="yourwebsite.com"
                            value={formData.website}
                            onChange={(e) => updateFormData('website', e.target.value)}
                            onBlur={handleWebsiteBlur}
                          />
                          {fieldErrors.website && <span className="text-xs text-rose-300">{fieldErrors.website}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Timezone
                          <select
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none appearance-none cursor-pointer"
                            value={formData.timezone}
                            onChange={(e) => updateFormData('timezone', e.target.value)}
                          >
                            <option value="">Select timezone...</option>
                            <option value="US/Eastern">US/Eastern (EST/EDT)</option>
                            <option value="US/Central">US/Central (CST/CDT)</option>
                            <option value="US/Mountain">US/Mountain (MST/MDT)</option>
                            <option value="US/Pacific">US/Pacific (PST/PDT)</option>
                            <option value="US/Alaska">US/Alaska</option>
                            <option value="US/Hawaii">US/Hawaii</option>
                            <option value="Europe/London">Europe/London (GMT)</option>
                            <option value="Europe/Paris">Europe/Paris (CET)</option>
                            <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                            <option value="Australia/Sydney">Australia/Sydney (AEST)</option>
                          </select>
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Team size
                          <select
                            className={`px-4 py-3 rounded-2xl ${theme.inputBg} border ${theme.inputBorder} focus:border-[#1d929e] focus:outline-none`}
                            value={formData.teamSize}
                            onChange={(e) => updateFormData('teamSize', e.target.value)}
                          >
                            <option>Solo</option>
                            <option>1-3</option>
                            <option>4-10</option>
                            <option>11-25</option>
                            <option>26+</option>
                          </select>
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Primary goal
                          <div className="grid grid-cols-2 gap-2">
                            {goalOptions.map((goal) => (
                              <button
                                key={goal}
                                type="button"
                                className={`px-3 py-2 rounded-xl border text-xs font-semibold transition ${
                                  formData.primaryGoal === goal
                                    ? 'border-[#1d929e] bg-[#1d929e]/10'
                                    : 'border-white/10 hover:border-white/30'
                                }`}
                                onClick={() => updateFormData('primaryGoal', goal)}
                              >
                                {goal}
                              </button>
                            ))}
                          </div>
                        </label>
                      </div>
                      <label className="flex flex-col gap-2 text-sm">
                        Drop any quick context we should know (optional)
                        <textarea
                          className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none min-h-[100px]"
                          placeholder="Tell us about your offer, audience, or current bottlenecks."
                          value={formData.voiceNotes}
                          onChange={(e) => updateFormData('voiceNotes', e.target.value)}
                        />
                      </label>
                      <div className="p-4 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/5 to-purple-600/5 text-sm text-white/80">
                        <strong className="text-white">Heads up:</strong> this intel feeds your Account Blueprint so the accelerator coaches know exactly what to build with you on day one.
                      </div>
                    </div>
                  )}

                  {/* Step 3: Launch Game Plan */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-2xl border border-[#1d929e]/30 bg-[#1d929e]/5 flex gap-3">
                        <Sparkles className="h-6 w-6 text-[#1d929e] flex-shrink-0" />
                        <p className="text-sm text-white/80">
                          TrueFlow Accelerator gives you two live weeks of business, marketing, sales, and mindset resources. Pick what matters most and we&apos;ll stack your onboarding plan around it.
                        </p>
                      </div>
                      <div className="space-y-3">
                        {resourceOptions.map((resource) => (
                          <label
                            key={resource.label}
                            className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition ${
                              selectedResources.includes(resource.label)
                                ? 'border-[#1d929e] bg-[#1d929e]/10'
                                : 'border-white/10 hover:border-white/30'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="mt-1 accent-[#1d929e]"
                              checked={selectedResources.includes(resource.label)}
                              onChange={() => toggleResource(resource.label)}
                            />
                            <div>
                              <p className="font-semibold">{resource.label}</p>
                              <p className="text-sm text-white/70">{resource.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                      <label className="flex flex-col gap-2 text-sm">
                        What wins would make this trial feel legendary?
                        <textarea
                          className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none min-h-[120px]"
                          placeholder="Example: book 5 sales calls, launch weekly email, audit funnels, build leadership dashboard..."
                          value={formData.winsWanted}
                          onChange={(e) => updateFormData('winsWanted', e.target.value)}
                        />
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="p-4 rounded-2xl border border-white/10">
                          <p className="text-xs text-white/60 uppercase tracking-widest">Included</p>
                          <p className="font-semibold mt-2">TrueFlow Accelerator Live Access</p>
                          <p className="text-sm text-white/70 mt-1">Small-group calls, templates, and swipe files usually billed at $350/week.</p>
                        </div>
                        <div className="p-4 rounded-2xl border border-white/10">
                          <p className="text-xs text-white/60 uppercase tracking-widest">Bonus</p>
                          <p className="font-semibold mt-2">Automation & Success Library</p>
                          <p className="text-sm text-white/70 mt-1">Scripts, metrics dashboards, and playbooks delivered inside your workspace.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Trial + Payment */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      {/* Success Manager Toggle - moved above payment */}
                      <label
                        className={`flex flex-col gap-2 p-4 rounded-2xl border cursor-pointer transition ${
                          formData.includeSuccessManager ? 'border-[#1d929e] bg-[#1d929e]/10' : isDarkMode ? 'border-white/10 hover:border-white/30' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold flex items-center gap-2">
                              <HeartHandshake className="h-5 w-5 text-[#1d929e]" />
                              Add 1:1 Success Manager
                            </p>
                            <p className={`text-sm ${theme.textMuted} mt-1`}>Direct support, quick-response voice and chat, essentially a personal operator in your corner.</p>
                          </div>
                          <span className="text-sm font-semibold whitespace-nowrap">+$147/mo</span>
                        </div>
                        <button
                          type="button"
                          className={`mt-3 inline-flex items-center w-14 h-8 rounded-full p-1 transition ${
                            formData.includeSuccessManager ? 'bg-[#1d929e]' : isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                          }`}
                          onClick={() => updateFormData('includeSuccessManager', !formData.includeSuccessManager)}
                        >
                          <span
                            className={`h-6 w-6 rounded-full bg-white transform transition shadow ${
                              formData.includeSuccessManager ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </label>

                      {/* Pricing Summary */}
                      <div className={`p-5 rounded-2xl border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="flex flex-wrap items-center gap-3">
                          <CreditCard className="h-6 w-6 text-[#1d929e]" />
                          <p className="text-lg font-semibold">
                            14-Day Free Trial • Then {formData.includeSuccessManager ? '$444' : '$297'}/mo
                          </p>
                        </div>
                        <ul className={`mt-3 space-y-2 text-sm ${theme.textMuted}`}>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" /> Full TrueFlow platform + accelerator access</li>
                          {formData.includeSuccessManager && (
                            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" /> 1:1 Success Manager included</li>
                          )}
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" /> Cancel anytime before Day 14 — $0 charged</li>
                        </ul>
                      </div>

                      {/* GHL Payment Embed */}
                      <div className={`rounded-2xl overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                        <iframe
                          src={
                            formData.includeSuccessManager
                              ? `https://link.fastpaydirect.com/payment-link/6920f847802b2ce38d6b0f8e?email=${encodeURIComponent(formData.email)}&signup_id=${encodeURIComponent(signupId)}&name=${encodeURIComponent(formData.fullName)}&redirect_url=${encodeURIComponent(`https://trueflow.ai/sign-up/success?signupId=${signupId}`)}`
                              : `https://link.fastpaydirect.com/payment-link/6920f7f2bbe219eb5e3624d1?email=${encodeURIComponent(formData.email)}&signup_id=${encodeURIComponent(signupId)}&name=${encodeURIComponent(formData.fullName)}&redirect_url=${encodeURIComponent(`https://trueflow.ai/sign-up/success?signupId=${signupId}`)}`
                          }
                          className="w-full min-h-[500px] border-0"
                          title="Payment Form"
                          allow="payment"
                        />
                      </div>

                      <p className={`text-xs ${theme.textMuted2}`}>
                        By completing payment, you agree to the TrueFlow Terms of Service. Your 14-day free trial starts immediately — you won&apos;t be charged until Day 15.
                      </p>

                      <div className={`p-4 rounded-2xl border ${isDarkMode ? 'border-blue-500/30 bg-blue-500/10' : 'border-blue-300 bg-blue-50'}`}>
                        <p className={`text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                          <CheckCircle className="h-4 w-4 inline mr-2" />
                          After completing payment above, your account will be created automatically and you&apos;ll receive login credentials via email.
                        </p>
                      </div>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm whitespace-pre-wrap">
                      {errorMessage}
                    </div>
                  )}

                  {/* Navigation buttons - hide on Step 4 (payment) */}
                  {currentStep < steps.length && (
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border ${theme.backBtn} transition`}
                        >
                          <ArrowLeft className="h-4 w-4" /> Back
                        </button>
                      ) : (
                        <span />
                      )}

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1d929e] to-emerald-500 font-semibold shadow-lg shadow-[#1d929e]/20"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {/* Back button only on Step 4 (payment) */}
                  {currentStep === steps.length && (
                    <div className="flex justify-start">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border ${theme.backBtn} transition`}
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </button>
                    </div>
                  )}
                </form>
              )}
            </section>

            {/* Sticky sidebar with Accelerator timeline only */}
            <aside className="lg:sticky lg:top-36 lg:self-start space-y-6">
              <div className={`p-6 rounded-3xl border border-[#1d929e]/30 ${isDarkMode ? 'bg-gradient-to-br from-[#1d929e]/20 via-emerald-500/10 to-transparent' : 'bg-white shadow-xl'}`}>
                <div className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  <BadgeCheck className="h-5 w-5 text-[#1d929e]" />
                  TrueFlow Accelerator Timeline
                </div>
                <div className="mt-6 space-y-4">
                  {acceleratorMoments.map((moment) => {
                    const Icon = moment.icon
                    return (
                      <div key={moment.day} className="flex gap-3">
                        <div className={`w-16 text-xs ${theme.textMuted2}`}>{moment.day}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-semibold">
                            <Icon className="h-4 w-4 text-[#1d929e]" />
                            {moment.title}
                          </div>
                          <p className={`text-sm ${theme.textMuted}`}>{moment.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  )
}
