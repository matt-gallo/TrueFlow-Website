'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import { Footer } from '@/app/components/Footer'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle,
  Clock,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface SignUpFormData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  website: string
  timezone: string
  prospectInfo: {
    firstName: string
    lastName: string
    email: string
  }
  settings: {
    allowDuplicateContact: boolean
    allowDuplicateOpportunity: boolean
    allowFacebookNameMerge: boolean
    disableContactTimezone: boolean
  }
  social: {
    facebookUrl: string
    googlePlus: string
    linkedIn: string
    foursquare: string
    twitter: string
    yelp: string
    instagram: string
    youtube: string
    pinterest: string
    blogRss: string
    googlePlacesId: string
  }
  twilio: {
    sid: string
    authToken: string
  }
  mailgun: {
    apiKey: string
    domain: string
  }
  snapshotId: string
}

interface AcceleratorMoment {
  day: string
  title: string
  detail: string
  icon: LucideIcon
}

const steps = [
  { id: 1, title: 'Account Basics', subtitle: 'Business name + contact' },
  { id: 2, title: 'Location Details', subtitle: 'Address + timezone (optional)' },
  { id: 3, title: 'Contact + Settings', subtitle: 'Prospect info + flags' },
  { id: 4, title: 'Integrations', subtitle: 'Social + provider creds' }
] as const

const statsHighlights = [
  { label: 'Average time to launch', value: '3 days', detail: 'Accelerator teams handle the heavy lifting.' },
  { label: 'Content assets delivered in trial', value: '42+', detail: 'Emails, posts, lead magnets, and automation copy.' },
  { label: 'Founders who stay after trial', value: '97%', detail: 'Because $297/mo feels like stealing for $350/wk of value.' }
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

const valueChips = [
  'Maps directly to GHL Create Sub-Account API',
  'We attach the agency/company ID on the backend',
  'All other fields optional and updateable later'
]

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    website: '',
    timezone: '',
    prospectInfo: {
      firstName: '',
      lastName: '',
      email: ''
    },
    settings: {
      allowDuplicateContact: false,
      allowDuplicateOpportunity: false,
      allowFacebookNameMerge: false,
      disableContactTimezone: false
    },
    social: {
      facebookUrl: '',
      googlePlus: '',
      linkedIn: '',
      foursquare: '',
      twitter: '',
      yelp: '',
      instagram: '',
      youtube: '',
      pinterest: '',
      blogRss: '',
      googlePlacesId: ''
    },
    twilio: {
      sid: '',
      authToken: ''
    },
    mailgun: {
      apiKey: '',
      domain: ''
    },
    snapshotId: ''
  })

  const progress = useMemo(() => (currentStep / steps.length) * 100, [currentStep])

  const handleNext = () => {
    if (!validateStep(currentStep)) return
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleStepSelect = (targetStep: number) => {
    if (targetStep > currentStep && !validateStep(currentStep)) return
    setCurrentStep(targetStep)
  }

  const formatPhone = (value: string) => {
    // Remove all non-numeric and non-plus characters except spaces and dashes
    const cleaned = value.replace(/[^\d+\s-]/g, '')

    // If empty, return empty
    if (!cleaned) return ''

    // Keep original formatting if user is typing spaces/dashes
    return cleaned
  }

  const formatWebsite = (value: string) => {
    // Auto-add https:// if user starts typing a domain
    if (value && !value.match(/^https?:\/\//i) && value.includes('.')) {
      return `https://${value}`
    }
    return value
  }

  const formatEmail = (value: string) => {
    // Auto-lowercase and trim emails
    return value.trim().toLowerCase()
  }

  const formatPostalCode = (value: string) => {
    // Uppercase postal codes for international formats
    return value.toUpperCase().trim()
  }

  const formatState = (value: string) => {
    // If 2 characters, assume state code and uppercase
    if (value.length <= 2) {
      return value.toUpperCase()
    }
    // Otherwise, title case (e.g., "california" -> "California")
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }

  const updateFormData = (field: keyof SignUpFormData, value: string) => {
    let formattedValue = value

    // Apply auto-formatting based on field
    switch (field) {
      case 'phone':
        formattedValue = formatPhone(value)
        break
      case 'website':
        // Only format on blur, not while typing
        formattedValue = value
        break
      case 'email':
        formattedValue = formatEmail(value)
        break
      case 'postalCode':
        formattedValue = formatPostalCode(value)
        break
      case 'country':
        formattedValue = value.toUpperCase().trim()
        break
      case 'state':
        formattedValue = formatState(value)
        break
      default:
        formattedValue = value
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[field as string]
      return next
    })
  }

  const updateNested = <T extends keyof SignUpFormData>(section: T, key: keyof SignUpFormData[T], value: string | boolean) => {
    let formattedValue = value

    // Apply auto-formatting for nested fields
    if (typeof value === 'string') {
      if (section === 'prospectInfo' && key === 'email') {
        formattedValue = formatEmail(value)
      } else if (section === 'social') {
        // Trim whitespace from social URLs
        formattedValue = value.trim()
      }
    }

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [key]: formattedValue
      }
    }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[`${String(section)}.${String(key)}`]
      return next
    })
  }

  const handleWebsiteBlur = () => {
    if (formData.website) {
      updateFormData('website', formatWebsite(formData.website))
    }
  }

  const isUrl = (value: string) => {
    try {
      const url = new URL(value)
      return Boolean(url.protocol && url.host)
    } catch (e) {
      return false
    }
  }

  const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value)
  const isPhone = (value: string) => /^\+?[0-9\-\s()]{7,}$/.test(value)
  const isCountry = (value: string) => /^[A-Za-z]{2}$/.test(value)

  const collectStepErrors = (step: number) => {
    const errors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.name.trim()) errors.name = 'Business name is required'
      if (!formData.email.trim()) {
        errors.email = 'Account email is required'
      } else if (!isEmail(formData.email)) {
        errors.email = 'Enter a valid email address'
      }
      if (formData.phone && !isPhone(formData.phone)) errors.phone = 'Enter a valid phone number with country code'
      if (formData.website && !isUrl(formData.website)) errors.website = 'Enter a valid URL'
    }

    if (step === 2) {
      if (formData.country && !isCountry(formData.country)) errors.country = 'Use a 2-letter country code'
    }

    if (step === 3) {
      if (formData.prospectInfo.email && !isEmail(formData.prospectInfo.email)) errors['prospectInfo.email'] = 'Enter a valid email'
    }

    if (step === 4) {
      const twilioFilled = formData.twilio.sid || formData.twilio.authToken
      if (twilioFilled && !formData.twilio.sid) errors['twilio.sid'] = 'SID required when adding Twilio'
      if (twilioFilled && !formData.twilio.authToken) errors['twilio.authToken'] = 'Auth token required when adding Twilio'

      const mailgunFilled = formData.mailgun.apiKey || formData.mailgun.domain
      if (mailgunFilled && !formData.mailgun.apiKey) errors['mailgun.apiKey'] = 'API key required when adding Mailgun'
      if (mailgunFilled && !formData.mailgun.domain) errors['mailgun.domain'] = 'Domain required when adding Mailgun'
    }

    return errors
  }

  const validateStep = (step: number) => {
    const errors = collectStepErrors(step)
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
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
    const allErrors = steps.reduce((acc, step) => {
      const stepErrors = collectStepErrors(step.id)
      return { ...acc, ...stepErrors }
    }, {} as Record<string, string>)

    if (Object.keys(allErrors).length > 0) {
      setFieldErrors(allErrors)
      if (currentStep < steps.length) return
      if (!allErrors.name && !allErrors.companyId) {
        setErrorMessage('Please correct the highlighted fields before submitting.')
      }
      return
    }

    if (currentStep < steps.length) return

    if (!formData.name) {
      setErrorMessage('Business name is required to create a sub-account.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        // Display specific API error message
        let errorMsg = data.error || 'Failed to create your account. Please try again.'

        if (data.details) {
          // Handle array of errors or single error detail
          if (Array.isArray(data.details)) {
            errorMsg = `${errorMsg}\n\n${data.details.join('\n')}`
          } else {
            errorMsg = `${errorMsg}: ${data.details}`
          }
        }

        setErrorMessage(errorMsg)
        return
      }

      // Success - show completion screen
      setIsComplete(true)
    } catch (error) {
      console.error(error)
      setErrorMessage('Unable to connect to the server. Please check your internet connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-purple-600/10 blur-[160px]" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <section className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10">
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
                      Expect a welcome email, portal invite, and a link to book your Accelerator kickoff call in the next 5 minutes. We&apos;ll route you to login shortly.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3 text-left">
                    {acceleratorMoments.slice(0, 3).map((moment) => {
                      const Icon = moment.icon
                      return (
                        <div key={moment.day} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="text-xs text-white/60 uppercase tracking-wider">{moment.day}</div>
                          <div className="flex items-center gap-2 mt-2 font-semibold">
                            <Icon className="h-4 w-4 text-blue-400" />
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
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg shadow-blue-500/20"
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
                      <p className="text-xs uppercase tracking-[0.4em] text-white/50">TrueFlow Intake</p>
                      <h1 className="text-3xl sm:text-4xl font-bold mt-2">Map your sub-account details</h1>
                      <p className="text-white/70 mt-3">
                        We align this intake with the GHL Create Sub-Account endpoint. Business name and company/agency ID are required; every other field is optional and can be added later.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {valueChips.map((chip) => (
                        <span key={chip} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/70">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Step {currentStep} of {steps.length}</span>
                      <span>{Math.round(progress)}% complete</span>
                    </div>
                    <div className="mt-3 h-2 bg-white/10 rounded-full">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
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
                              ? 'border-blue-400 bg-blue-500/10'
                              : 'border-white/10 bg-white/5 hover:border-white/30'
                          }`}
                          onClick={() => handleStepSelect(step.id)}
                        >
                          <p className="text-xs text-white/60">Step {step.id}</p>
                          <p className="text-sm font-semibold">{step.title}</p>
                          <p className="text-[11px] text-white/50 mt-1">{step.subtitle}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Business name (required)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="Mark Shoes"
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                            required
                          />
                          {fieldErrors.name && <span className="text-xs text-rose-300">{fieldErrors.name}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Account email (required)
                          <input
                            type="email"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none transition-all"
                            placeholder="owner@company.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            required
                          />
                          <span className="text-xs text-white/50">Used for login, invoices, and account alerts</span>
                          {fieldErrors.email && <span className="text-xs text-rose-300">{fieldErrors.email}</span>}
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Phone (optional, include country code)
                          <input
                            type="tel"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono"
                            placeholder="+1410039940"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Example: +1410039940 or +44 20 7946 0958</span>
                          {fieldErrors.phone && <span className="text-xs text-rose-300">{fieldErrors.phone}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Website (optional)
                          <input
                            type="url"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none transition-all"
                            placeholder="yourwebsite.com"
                            value={formData.website}
                            onChange={(e) => updateFormData('website', e.target.value)}
                            onBlur={handleWebsiteBlur}
                          />
                          <span className="text-xs text-white/50">Start typing your domain - we'll add https:// automatically</span>
                          {fieldErrors.website && <span className="text-xs text-rose-300">{fieldErrors.website}</span>}
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Timezone (optional)
                          <select
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none appearance-none cursor-pointer"
                            value={formData.timezone}
                            onChange={(e) => updateFormData('timezone', e.target.value)}
                          >
                            <option value="">Select timezone...</option>
                            <optgroup label="US Timezones">
                              <option value="US/Eastern">US/Eastern (EST/EDT)</option>
                              <option value="US/Central">US/Central (CST/CDT)</option>
                              <option value="US/Mountain">US/Mountain (MST/MDT)</option>
                              <option value="US/Pacific">US/Pacific (PST/PDT)</option>
                              <option value="US/Alaska">US/Alaska (AKST/AKDT)</option>
                              <option value="US/Hawaii">US/Hawaii (HST)</option>
                            </optgroup>
                            <optgroup label="Americas">
                              <option value="America/Toronto">America/Toronto (Canada Eastern)</option>
                              <option value="America/Vancouver">America/Vancouver (Canada Pacific)</option>
                              <option value="America/Mexico_City">America/Mexico_City (Mexico)</option>
                              <option value="America/Sao_Paulo">America/Sao_Paulo (Brazil)</option>
                              <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
                            </optgroup>
                            <optgroup label="Europe">
                              <option value="Europe/London">Europe/London (GMT/BST)</option>
                              <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
                              <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
                              <option value="Europe/Rome">Europe/Rome (CET/CEST)</option>
                              <option value="Europe/Madrid">Europe/Madrid (CET/CEST)</option>
                              <option value="Europe/Amsterdam">Europe/Amsterdam (CET/CEST)</option>
                            </optgroup>
                            <optgroup label="Asia">
                              <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                              <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                              <option value="Asia/Hong_Kong">Asia/Hong_Kong (HKT)</option>
                              <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                              <option value="Asia/Shanghai">Asia/Shanghai (CST)</option>
                            </optgroup>
                            <optgroup label="Pacific">
                              <option value="Australia/Sydney">Australia/Sydney (AEST/AEDT)</option>
                              <option value="Australia/Melbourne">Australia/Melbourne (AEST/AEDT)</option>
                              <option value="Pacific/Auckland">Pacific/Auckland (NZST/NZDT)</option>
                            </optgroup>
                          </select>
                          <span className="text-xs text-white/50">Select your business timezone</span>
                        </label>
                        <div className="flex flex-col gap-2 justify-center">
                          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-400/20">
                            <p className="text-xs text-blue-200/90 leading-relaxed">
                              <strong>Note:</strong> We pass fields exactly as the API expects. Anything you leave blank stays unstated.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Address (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="123 Main Street, Suite 400"
                            value={formData.address}
                            onChange={(e) => updateFormData('address', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Street address with suite/unit if applicable</span>
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          City (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="New York"
                            value={formData.city}
                            onChange={(e) => updateFormData('city', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Example: Los Angeles, Toronto, London</span>
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <label className="flex flex-col gap-2 text-sm">
                          State/Province (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none transition-all"
                            placeholder="California or CA"
                            value={formData.state}
                            onChange={(e) => updateFormData('state', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Auto-formats: "ca" → "CA", "california" → "California"</span>
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Country (2-letter code)
                          <input
                            type="text"
                            maxLength={2}
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none uppercase font-mono transition-all"
                            placeholder="US"
                            value={formData.country}
                            onChange={(e) => updateFormData('country', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Auto-uppercases: "us" → "US"</span>
                          {fieldErrors.country && <span className="text-xs text-rose-300">{fieldErrors.country}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Postal/ZIP code (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono transition-all"
                            placeholder="90210"
                            value={formData.postalCode}
                            onChange={(e) => updateFormData('postalCode', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Auto-uppercases: "sw1a 1aa" → "SW1A1AA"</span>
                        </label>
                      </div>
                      <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-100 text-xs font-semibold">
                          <BadgeCheck className="h-4 w-4" />
                          Optional fields stay empty if omitted
                        </div>
                        <p className="text-sm text-white/70">We only send what you provide. Defaults are left blank to respect the API contract.</p>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/20">
                        <p className="text-sm text-blue-100/90">
                          <strong>Prospect info</strong> is the primary contact for this sub-account. Leave blank if not needed initially.
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <label className="flex flex-col gap-2 text-sm">
                          Prospect first name (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="John"
                            value={formData.prospectInfo.firstName}
                            onChange={(e) => updateNested('prospectInfo', 'firstName', e.target.value)}
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Prospect last name (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="Doe"
                            value={formData.prospectInfo.lastName}
                            onChange={(e) => updateNested('prospectInfo', 'lastName', e.target.value)}
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Prospect email (optional)
                          <input
                            type="email"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none transition-all"
                            placeholder="john.doe@example.com"
                            value={formData.prospectInfo.email}
                            onChange={(e) => updateNested('prospectInfo', 'email', e.target.value)}
                          />
                          <span className="text-xs text-white/50">Auto-lowercases: "John@Example.COM" → "john@example.com"</span>
                          {fieldErrors['prospectInfo.email'] && <span className="text-xs text-rose-300">{fieldErrors['prospectInfo.email']}</span>}
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-xs font-semibold">
                            <Clock className="h-4 w-4" />
                            Settings (optional)
                          </div>
                          <div className="grid grid-cols-1 gap-3 text-sm text-white/80">
                            {(
                              [
                                { key: 'allowDuplicateContact', label: 'Allow duplicate contact' },
                                { key: 'allowDuplicateOpportunity', label: 'Allow duplicate opportunity' },
                                { key: 'allowFacebookNameMerge', label: 'Allow Facebook name merge' },
                                { key: 'disableContactTimezone', label: 'Disable contact timezone' }
                              ] as const
                            ).map((setting) => (
                              <label key={setting.key} className="inline-flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  className="accent-blue-500"
                                  checked={(formData.settings as any)[setting.key]}
                                  onChange={(e) => updateNested('settings', setting.key, e.target.checked)}
                                />
                                {setting.label}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-100 text-xs font-semibold">
                            <MessageCircle className="h-4 w-4" />
                            Social links (optional)
                          </div>
                          <div className="grid gap-3 text-sm text-white/80">
                            {(
                              [
                                { key: 'facebookUrl', placeholder: 'https://www.facebook.com/yourpage', label: 'Facebook' },
                                { key: 'linkedIn', placeholder: 'https://www.linkedin.com/company/yourcompany', label: 'LinkedIn' },
                                { key: 'twitter', placeholder: 'https://www.twitter.com/yourhandle', label: 'Twitter/X' },
                                { key: 'instagram', placeholder: 'https://www.instagram.com/yourhandle', label: 'Instagram' },
                                { key: 'youtube', placeholder: 'https://www.youtube.com/@yourchannel', label: 'YouTube' }
                              ] as const
                            ).map((field) => (
                              <div key={field.key}>
                                <label className="text-xs text-white/60 mb-1 block">{field.label}</label>
                                <input
                                  type="url"
                                  className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none text-sm"
                                  placeholder={field.placeholder}
                                  value={(formData.social as any)[field.key]}
                                  onChange={(e) => updateNested('social', field.key, e.target.value)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-xs font-semibold">
                            <ArrowRight className="h-4 w-4" />
                            Additional social (optional)
                          </div>
                          <div className="grid gap-3 text-sm text-white/80">
                            {(
                              [
                                { key: 'yelp', placeholder: 'https://www.yelp.com/biz/your-business', label: 'Yelp' },
                                { key: 'pinterest', placeholder: 'https://www.pinterest.com/yourprofile', label: 'Pinterest' },
                                { key: 'foursquare', placeholder: 'https://foursquare.com/v/your-venue/id', label: 'Foursquare' },
                                { key: 'blogRss', placeholder: 'https://yourblog.com/feed.xml', label: 'Blog RSS Feed' },
                                { key: 'googlePlacesId', placeholder: 'ChIJN1t_tDeuEmsRUsoyG83frY4', label: 'Google Places ID' }
                              ] as const
                            ).map((field) => (
                              <div key={field.key}>
                                <label className="text-xs text-white/60 mb-1 block">{field.label}</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none text-sm"
                                  placeholder={field.placeholder}
                                  value={(formData.social as any)[field.key]}
                                  onChange={(e) => updateNested('social', field.key, e.target.value)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-100 text-xs font-semibold">
                            <Shield className="h-4 w-4" />
                            Provider credentials (optional)
                          </div>
                          <div className="grid gap-3">
                            <div>
                              <label className="text-xs text-white/60 mb-1 block">Twilio Account SID</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono text-sm"
                                placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                value={formData.twilio.sid}
                                onChange={(e) => updateNested('twilio', 'sid', e.target.value)}
                              />
                              {fieldErrors['twilio.sid'] && <span className="text-xs text-rose-300">{fieldErrors['twilio.sid']}</span>}
                            </div>
                            <div>
                              <label className="text-xs text-white/60 mb-1 block">Twilio Auth Token</label>
                              <input
                                type="password"
                                className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono text-sm"
                                placeholder="********************************"
                                value={formData.twilio.authToken}
                                onChange={(e) => updateNested('twilio', 'authToken', e.target.value)}
                              />
                              {fieldErrors['twilio.authToken'] && <span className="text-xs text-rose-300">{fieldErrors['twilio.authToken']}</span>}
                            </div>
                            <div>
                              <label className="text-xs text-white/60 mb-1 block">Mailgun API Key</label>
                              <input
                                type="password"
                                className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono text-sm"
                                placeholder="key-********************************"
                                value={formData.mailgun.apiKey}
                                onChange={(e) => updateNested('mailgun', 'apiKey', e.target.value)}
                              />
                              {fieldErrors['mailgun.apiKey'] && <span className="text-xs text-rose-300">{fieldErrors['mailgun.apiKey']}</span>}
                            </div>
                            <div>
                              <label className="text-xs text-white/60 mb-1 block">Mailgun Domain</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none text-sm"
                                placeholder="mg.yourdomain.com"
                                value={formData.mailgun.domain}
                                onChange={(e) => updateNested('mailgun', 'domain', e.target.value)}
                              />
                              {fieldErrors['mailgun.domain'] && <span className="text-xs text-rose-300">{fieldErrors['mailgun.domain']}</span>}
                            </div>
                            <div>
                              <label className="text-xs text-white/60 mb-1 block">Snapshot ID (optional)</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none font-mono text-sm"
                                placeholder="snapshot_abc123xyz"
                                value={formData.snapshotId}
                                onChange={(e) => updateFormData('snapshotId', e.target.value)}
                              />
                              <span className="text-xs text-white/40 mt-1 block">GHL snapshot to clone for this account</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-sm text-white/70">
                        <p className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-300" />
                          We only submit fields supported by the Create Sub-Account endpoint.
                        </p>
                        <p className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-300" />
                          Only business name and company/agency ID are required; everything else is optional.
                        </p>
                        <p className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-300" />
                          You can update these later in the portal if needed.
                        </p>
                      </div>
                      {errorMessage && (
                        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-100 text-sm">
                          {errorMessage}
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                        <div className="flex gap-3 justify-between sm:justify-start">
                          <button
                            type="button"
                            onClick={handlePrev}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/80 hover:text-white transition"
                          >
                            <ArrowLeft className="h-4 w-4" /> Back
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white/80 hover:text-white border border-white/20"
                          >
                            Next
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-60"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit to GHL'}
                        </button>
                      </div>
                    </div>
                  )}

                  {errorMessage && currentStep !== 4 && (
                    <p className="text-sm text-rose-300">{errorMessage}</p>
                  )}

                  {currentStep < 4 && (
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/80 hover:text-white transition"
                        >
                          <ArrowLeft className="h-4 w-4" /> Back
                        </button>
                      ) : (
                        <span />
                      )}

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </form>
              )}
            </section>

            <aside className="space-y-6">
              <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Star className="h-5 w-5 text-amber-300" />
                  Value proof
                </div>
                <div className="mt-6 grid gap-6">
                  {statsHighlights.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 p-4">
                      <p className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-4xl font-bold mt-2">{stat.value}</p>
                      <p className="text-sm text-white/70 mt-1">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-transparent">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <BadgeCheck className="h-5 w-5 text-purple-200" />
                  TrueFlowAccelerator™ Timeline
                </div>
                <div className="mt-6 space-y-4">
                  {acceleratorMoments.map((moment) => {
                    const Icon = moment.icon
                    return (
                      <div key={moment.day} className="flex gap-3">
                        <div className="w-16 text-xs text-white/60">{moment.day}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 font-semibold">
                            <Icon className="h-4 w-4 text-purple-200" />
                            {moment.title}
                          </div>
                          <p className="text-sm text-white/70">{moment.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-white/10 bg-white/5 space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-pink-300" />
                  <div>
                    <p className="font-semibold">Support included</p>
                    <p className="text-sm text-white/70">We&apos;ll confirm details map cleanly to the GHL endpoint and help adjust later.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Clock className="h-4 w-4" /> Average reply time under 2 hours
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <BarChart3 className="h-4 w-4" /> Weekly scorecards + proactive nudges
                </div>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
