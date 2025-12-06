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
  CreditCard,
  HeartHandshake,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface SignUpFormData {
  fullName: string
  email: string
  password: string
  role: string
  company: string
  website: string
  teamSize: string
  primaryGoal: string
  voiceNotes: string
  winsWanted: string
  cardName: string
  cardNumber: string
  expDate: string
  cvc: string
}

interface AcceleratorMoment {
  day: string
  title: string
  detail: string
  icon: LucideIcon
}

const steps = [
  { id: 1, title: 'Account Basics', subtitle: 'Create your workspace credentials' },
  { id: 2, title: 'Business Snapshot', subtitle: 'Show us how you operate today' },
  { id: 3, title: 'Launch Game Plan', subtitle: 'Stack the resources you want in the accelerator' },
  { id: 4, title: 'Trial + Payment', subtitle: 'Secure your 14-day trial and add-ons' }
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
  'TrueFlow Accelerator access (14 days)',
  'Live success team + resources worth $350/week',
  'Done-for-you onboarding + personal automations'
]

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [includeSuccessManager, setIncludeSuccessManager] = useState(true)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [selectedResources, setSelectedResources] = useState<string[]>(['Voice & Story Library'])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    role: 'Founder / CEO',
    company: '',
    website: '',
    teamSize: '1-3',
    primaryGoal: 'Launch Content Machine',
    voiceNotes: '',
    winsWanted: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvc: ''
  })

  const progress = useMemo(() => (currentStep / steps.length) * 100, [currentStep])

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const toggleResource = (label: string) => {
    setSelectedResources((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  const updateFormData = (field: keyof SignUpFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
    if (currentStep < steps.length) return

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          selectedResources,
          includeSuccessManager,
        }),
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
                  <p>Value-packed at $350/week — yours free for 14 days.</p>
                  <p>After the trial it&apos;s just $297/mo.</p>
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
                      <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                        Create your account + plug into the TrueFlow Accelerator
                      </h1>
                      <p className="text-white/70 mt-3">
                        Get the exact systems, support, and resources we normally charge $350/week for, free for 14 days. Cancel anytime before Day 14 to avoid the $297/mo membership.
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
                          onClick={() => setCurrentStep(step.id)}
                        >
                          <p className="text-xs text-white/60">Step {step.id}</p>
                          <p className="text-sm font-semibold">{step.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Full name
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="Jordan Reyes"
                            value={formData.fullName}
                            onChange={(e) => updateFormData('fullName', e.target.value)}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Work email
                          <input
                            type="email"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Create password
                          <input
                            type="password"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => updateFormData('password', e.target.value)}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Primary role
                          <div className="grid grid-cols-2 gap-2">
                            {['Founder / CEO', 'Operator', 'Marketing', 'Sales'].map((role) => (
                              <button
                                key={role}
                                type="button"
                                className={`px-3 py-2 rounded-xl border text-xs font-semibold transition ${
                                  formData.role === role
                                    ? 'border-blue-400 bg-blue-500/10'
                                    : 'border-white/10 hover:border-white/30'
                                }`}
                                onClick={() => updateFormData('role', role)}
                              >
                                {role}
                              </button>
                            ))}
                          </div>
                        </label>
                      </div>
                      <p className="text-white/60 text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        Your login gives you access to the dashboard + accelerator curriculum instantly once the intake is complete.
                      </p>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Company or brand
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="The Growth Lab"
                            value={formData.company}
                            onChange={(e) => updateFormData('company', e.target.value)}
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Website or social hub
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="https://"
                            value={formData.website}
                            onChange={(e) => updateFormData('website', e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Team size
                          <select
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
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
                                    ? 'border-blue-400 bg-blue-500/10'
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
                        Drop any quick context we should know
                        <textarea
                          className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none min-h-[120px]"
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

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-2xl border border-blue-400/30 bg-blue-500/5 flex gap-3">
                        <Sparkles className="h-6 w-6 text-blue-300" />
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
                                ? 'border-blue-400 bg-blue-500/10'
                                : 'border-white/10 hover:border-white/30'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="mt-1 accent-blue-500"
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
                          <p className="font-semibold mt-2">TrueFlowAccelerator™ Live Access</p>
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

                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                        <div className="flex flex-wrap items-center gap-3">
                          <CreditCard className="h-6 w-6 text-purple-300" />
                          <p className="text-lg font-semibold">14-Day Trial • $0 due today • $297/mo after</p>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Full TrueFlow platform + accelerator access</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Cancel anytime inside the portal before Day 14</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Optional 1:1 success manager add-on</li>
                        </ul>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-sm">
                          Cardholder name
                          <input
                            type="text"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="As shown on card"
                            value={formData.cardName}
                            onChange={(e) => updateFormData('cardName', e.target.value)}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          Card number
                          <input
                            type="text"
                            inputMode="numeric"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            placeholder="4242 4242 4242 4242"
                            value={formData.cardNumber}
                            onChange={(e) => updateFormData('cardNumber', e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <label className="flex flex-col gap-2 text-sm">
                          Expiration
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            value={formData.expDate}
                            onChange={(e) => updateFormData('expDate', e.target.value)}
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm">
                          CVC
                          <input
                            type="text"
                            placeholder="123"
                            className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                            value={formData.cvc}
                            onChange={(e) => updateFormData('cvc', e.target.value)}
                            required
                          />
                        </label>
                        <div className="flex flex-col gap-2 text-sm">
                          Billing safety
                          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/10 bg-black/30 text-white/70">
                            <Shield className="h-4 w-4 text-blue-300" />
                            Securely processed by Stripe
                          </div>
                        </div>
                      </div>
                      <label
                        className={`flex flex-col gap-2 p-4 rounded-2xl border cursor-pointer transition ${
                          includeSuccessManager ? 'border-purple-400 bg-purple-500/10' : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold">Add 1:1 Success Manager</p>
                            <p className="text-sm text-white/70">Direct support, quick-response voice and chat, essentially a personal operator in your corner.</p>
                          </div>
                          <span className="text-sm font-semibold">+$147/mo after trial</span>
                        </div>
                        <button
                          type="button"
                          className={`mt-3 inline-flex items-center w-14 h-8 rounded-full p-1 transition ${
                            includeSuccessManager ? 'bg-purple-500/80' : 'bg-white/10'
                          }`}
                          onClick={() => setIncludeSuccessManager((prev) => !prev)}
                        >
                          <span
                            className={`h-6 w-6 rounded-full bg-white transform transition ${
                              includeSuccessManager ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </label>
                      <p className="text-xs text-white/60">
                        By starting your trial, you agree to the TrueFlow Terms of Service and authorize a $297/mo charge after the 14th day unless you cancel inside the portal.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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

                    {currentStep < steps.length ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-60"
                      >
                        {isSubmitting ? 'Activating Trial...' : 'Start 14-Day Trial'}
                        {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                      </button>
                    )}
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-rose-300">
                      {errorMessage}
                    </p>
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
                  <HeartHandshake className="h-5 w-5 text-pink-300" />
                  <div>
                    <p className="font-semibold">1:1 Success Manager (optional)</p>
                    <p className="text-sm text-white/70">Direct Slack-style messaging, loom updates, and voice replies within hours.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Clock className="h-4 w-4" /> Average reply time under 2 hours
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Users className="h-4 w-4" /> Feels like a personal assistant embedded in your ops team
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
