'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavAuthButtons } from '@/app/components/NavAuthButtons'
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

const testimonials = [
  {
    quote: 'We plugged into TrueFlow on a Monday and by Thursday we had a complete content engine, lead nurture, and a live accelerator coach walking us through every switch.',
    author: 'Nina Patel',
    role: 'Agency Founder',
    metric: '+18 qualified demos in 2 weeks'
  },
  {
    quote: 'The accelerator felt like having an internal ops team. They cloned my voice, set up automations, and even handled my success messaging. $297/mo is ridiculous for what we get.',
    author: 'Corey Martinez',
    role: 'Fractional CMO',
    metric: '12 hrs per week reclaimed'
  },
  {
    quote: 'We added the 1:1 success manager and it genuinely feels like a personal chief of staff. Fast responses, loom recaps, and zero guesswork.',
    author: 'Amanda Lee',
    role: 'Coaching Collective CEO',
    metric: '3 new offers launched'
  }
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
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
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

  const updateFormData = (field: keyof SignUpFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[field as string]
      return next
    })
  }

  const updateNested = <T extends keyof SignUpFormData>(section: T, key: keyof SignUpFormData[T], value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [key]: value
      }
    }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[`${String(section)}.${String(key)}`]
      return next
    })
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

      if (!response.ok) {
        throw new Error('Failed to submit intake')
      }

      setIsComplete(true)
    } catch (error) {
      console.error(error)
      setErrorMessage('Something went wrong while activating your trial. Please try again or contact the success team.')
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
        <nav className="fixed top-0 left-0 right-0 border-b border-white/10 backdrop-blur-xl bg-black/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between h-auto py-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/true-flow-logo.webp"
                  alt="TrueFlow"
                  width={200}
                  height={52}
                  className="h-10 w-auto"
                  priority
                />
                <div className="hidden sm:flex items-center text-xs uppercase tracking-[0.3em] text-white/60">
                  Intake Portal
                </div>
              </Link>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
                <div className="text-center sm:text-right text-xs text-white/60">
                  <p>Data is mapped to the GHL Create Sub-Account endpoint.</p>
                  <p>Only business name + company ID are required.</p>
                </div>
                <NavAuthButtons />
              </div>
            </div>
          </div>
        </nav>

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
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                          <p>We&apos;ll attach the correct agency/company ID automatically on the backend using our secured token.</p>
                          <p className="text-white/50">You don&apos;t need to provide it.</p>
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Phone (optional, include country code)
                          <input
                            type="tel"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="+1410039940"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                          />
                          {fieldErrors.phone && <span className="text-xs text-rose-300">{fieldErrors.phone}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Website (optional)
                          <input
                            type="url"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="https://yourwebsite.com"
                            value={formData.website}
                            onChange={(e) => updateFormData('website', e.target.value)}
                          />
                          {fieldErrors.website && <span className="text-xs text-rose-300">{fieldErrors.website}</span>}
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Timezone (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="US/Central"
                            value={formData.timezone}
                            onChange={(e) => updateFormData('timezone', e.target.value)}
                          />
                        </label>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                          <p>We pass fields exactly as the API expects. Anything you leave blank stays unstated.</p>
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
                            placeholder="4th fleet street"
                            value={formData.address}
                            onChange={(e) => updateFormData('address', e.target.value)}
                          />
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
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <label className="flex flex-col gap-2 text-sm">
                          State (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="Illinois"
                            value={formData.state}
                            onChange={(e) => updateFormData('state', e.target.value)}
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Country (2-letter, optional)
                          <input
                            type="text"
                            maxLength={2}
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none uppercase"
                            placeholder="US"
                            value={formData.country}
                            onChange={(e) => updateFormData('country', e.target.value.toUpperCase())}
                          />
                          {fieldErrors.country && <span className="text-xs text-rose-300">{fieldErrors.country}</span>}
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Postal code (optional)
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="567654"
                            value={formData.postalCode}
                            onChange={(e) => updateFormData('postalCode', e.target.value)}
                          />
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
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="john.doe@mail.com"
                            value={formData.prospectInfo.email}
                            onChange={(e) => updateNested('prospectInfo', 'email', e.target.value)}
                          />
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
                          <div className="grid gap-2 text-sm text-white/80">
                            {(
                              [
                                { key: 'facebookUrl', placeholder: 'https://www.facebook.com/' },
                                { key: 'googlePlus', placeholder: 'https://www.googleplus.com/' },
                                { key: 'linkedIn', placeholder: 'https://www.linkedin.com/' },
                                { key: 'foursquare', placeholder: 'https://www.foursquare.com/' },
                                { key: 'twitter', placeholder: 'https://www.twitter.com/' }
                              ] as const
                            ).map((field) => (
                              <input
                                key={field.key}
                                type="url"
                                className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                                placeholder={field.placeholder}
                                value={(formData.social as any)[field.key]}
                                onChange={(e) => updateNested('social', field.key, e.target.value)}
                              />
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
                            Remaining social (optional)
                          </div>
                          <div className="grid gap-2 text-sm text-white/80">
                            {(
                              [
                                { key: 'yelp', placeholder: 'https://www.yelp.com/' },
                                { key: 'instagram', placeholder: 'https://www.instagram.com/' },
                                { key: 'youtube', placeholder: 'https://www.youtube.com/' },
                                { key: 'pinterest', placeholder: 'https://www.pinterest.com/' },
                                { key: 'blogRss', placeholder: 'https://www.blogRss.com/' },
                                { key: 'googlePlacesId', placeholder: 'Google Places ID' }
                              ] as const
                            ).map((field) => (
                              <input
                                key={field.key}
                                type="text"
                                className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                                placeholder={field.placeholder}
                                value={(formData.social as any)[field.key]}
                                onChange={(e) => updateNested('social', field.key, e.target.value)}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/20 border border-white/10 rounded-2xl p-4 space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-100 text-xs font-semibold">
                            <ArrowLeft className="h-4 w-4" />
                            Provider settings (optional)
                          </div>
                          <div className="grid gap-2">
                            <input
                              type="text"
                              className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                              placeholder="Twilio SID"
                              value={formData.twilio.sid}
                              onChange={(e) => updateNested('twilio', 'sid', e.target.value)}
                            />
                            {fieldErrors['twilio.sid'] && <span className="text-xs text-rose-300">{fieldErrors['twilio.sid']}</span>}
                            <input
                              type="text"
                              className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                              placeholder="Twilio Auth Token"
                              value={formData.twilio.authToken}
                              onChange={(e) => updateNested('twilio', 'authToken', e.target.value)}
                            />
                            {fieldErrors['twilio.authToken'] && <span className="text-xs text-rose-300">{fieldErrors['twilio.authToken']}</span>}
                            <input
                              type="text"
                              className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                              placeholder="Mailgun API Key"
                              value={formData.mailgun.apiKey}
                              onChange={(e) => updateNested('mailgun', 'apiKey', e.target.value)}
                            />
                            {fieldErrors['mailgun.apiKey'] && <span className="text-xs text-rose-300">{fieldErrors['mailgun.apiKey']}</span>}
                            <input
                              type="text"
                              className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                              placeholder="Mailgun Domain"
                              value={formData.mailgun.domain}
                              onChange={(e) => updateNested('mailgun', 'domain', e.target.value)}
                            />
                            {fieldErrors['mailgun.domain'] && <span className="text-xs text-rose-300">{fieldErrors['mailgun.domain']}</span>}
                            <input
                              type="text"
                              className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                              placeholder="Snapshot ID (optional)"
                              value={formData.snapshotId}
                              onChange={(e) => updateFormData('snapshotId', e.target.value)}
                            />
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

              <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MessageCircle className="h-5 w-5 text-blue-300" />
                  Proof from the community
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-lg italic text-white/80">“{testimonials[activeTestimonial].quote}”</p>
                  <div>
                    <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
                    <p className="text-sm text-white/60">{testimonials[activeTestimonial].role}</p>
                    <p className="text-sm text-emerald-300">{testimonials[activeTestimonial].metric}</p>
                  </div>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-white' : 'bg-white/30'}`}
                        aria-label={`Show testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
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
      </div>
    </div>
  )
}
