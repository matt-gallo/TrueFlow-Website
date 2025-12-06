'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle,
  CircleDashed,
  Mail,
  MessageSquare,
  RefreshCw,
  Search,
  Target,
  Workflow,
  BarChart3,
  ShieldCheck
} from 'lucide-react'

const features = [
  {
    title: 'AI Lead Hunter: Find buyers before your competitors do',
    description: 'Scrapes live intent data from search, directories, and social to surface buyers who raised their hand in the last seven days — filtered by industry, revenue, tech stack, and geography.',
    icon: Search
  },
  {
    title: 'Cold Email Engine: Spark 1:1 conversations that turn into calls',
    description: 'Human-tone outreach sequence crafted to sound personal and spark real replies — never robotic.',
    icon: Mail
  },
  {
    title: 'Conversation AI: Responds like a human and keeps momentum',
    description: 'Handles replies, filters interest, and guides serious prospects to your Readiness Assessment or booking flow automatically.',
    icon: MessageSquare
  },
  {
    title: 'AI Readiness Assessment: Qualify and roadmap every reply',
    description: 'Optional interactive diagnostic that scores each lead and builds a personalized roadmap instantly.',
    icon: Brain
  },
  {
    title: '7-Day Nurture Workflow: Turn curiosity into conversions',
    description: 'Turns “curious” into “committed” with pre-built follow-up that builds belief and momentum.',
    icon: RefreshCw
  },
  {
    title: 'Live Performance Dashboard: See what’s working in real time',
    description: 'Live view of opens, replies, conversions, and ROI so you always know what’s working.',
    icon: BarChart3
  },
  {
    title: 'Native CRM Integration: Tag, track, and trigger inside your system',
    description: 'Full automation, tagging, and pipeline tracking built right inside your existing instance.',
    icon: Workflow
  },
  {
    title: 'Ad Sync (Advanced): Retarget new leads with Meta and Google',
    description: 'Syncs new leads to Meta or Google audiences for remarketing and lookalike amplification.',
    icon: Target
  }
]

const benefits = [
  'Your calendar fills with warm prospects — no more chasing cold leads.',
  'Your team focuses on closing, not manual follow-up or list building.',
  'Revenue becomes predictable because the pipeline never runs dry.'
]

const offerStack = [
  'Custom AI Prospecting Setup – complete lead sourcing + automation buildout',
  'Done-for-You Cold Email Campaigns – written, tested, and optimized for you',
  'Readiness Assessment Funnel – two-minute diagnostic that qualifies every response',
  '7-Day Auto-Responder – converts engaged leads into booked calls',
  'Ongoing Tracking & Optimization – monthly performance review and tuning'
]

const verticals = [
  'Local Service Businesses (chiropractors, contractors, med-spas, real estate teams)',
  'Online Coaches & Creators',
  'Agencies & B2B Consultants',
  'High-Ticket Offer Businesses'
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    originalPrice: null,
    value: null,
    description: 'Perfect for testing the waters',
    features: [
      '10 new buyer prospects per day (~280/month)',
      'Enhanced contact data with firmographics',
      'AI-driven outreach in your brand tone',
      'CRM integration & automation setup',
      'Weekly optimization & deliverability management',
      'Performance dashboard & analytics'
    ],
    featured: false
  },
  {
    name: 'Growth',
    price: '$1,560',
    cadence: 'every 28 days',
    originalPrice: null,
    value: 'Recommended',
    description: 'Scale your pipeline consistently',
    features: [
      '30 new buyer prospects per day (~840/month)',
      'Everything in Starter, plus:',
      'Priority optimization & monitoring',
      'A/B testing on messaging & sequences',
      'Dedicated account check-ins',
      'Advanced targeting & segmentation'
    ],
    featured: true
  },
  {
    name: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    originalPrice: null,
    value: 'Best Value',
    description: 'Dominate your market with volume',
    features: [
      '70+ new buyer prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-campaign management',
      'White-glove optimization service',
      'Custom integrations & workflows',
      'Quarterly strategy sessions'
    ],
    featured: false
  }
]

const builderQuestions = [
  {
    id: 'volume',
    label: 'How many new qualified conversations do you need each day?',
    options: [
      { value: '10', copy: '5-10 per day', score: 0 },
      { value: '30', copy: '15-30 per day', score: 1 },
      { value: '70', copy: '40+ per day', score: 2 }
    ]
  },
  {
    id: 'team',
    label: 'How many people handle follow-up today?',
    options: [
      { value: 'solo', copy: 'Mostly founder-led', score: 0 },
      { value: 'pod', copy: '1-2 setters or closers', score: 1 },
      { value: 'team', copy: 'Dedicated sales pod', score: 2 }
    ]
  },
  {
    id: 'systems',
    label: 'How complex is your current tech stack?',
    options: [
      { value: 'simple', copy: 'Basic CRM + automations', score: 0 },
      { value: 'growing', copy: 'Multiple offers + nurture paths', score: 1 },
      { value: 'advanced', copy: 'Multi-market or compliance needs', score: 2 }
    ]
  }
]

export default function LeadMachinePage() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false)
  const [builderStep, setBuilderStep] = useState(0)
  const [manualPlanChoice, setManualPlanChoice] = useState<string | null>(null)
  const [builderAnswers, setBuilderAnswers] = useState(() => {
    const defaults: Record<string, string> = {}
    builderQuestions.forEach(question => {
      defaults[question.id] = question.options[0].value
    })
    return defaults
  })

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('book-demo-calendar')
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const updateBuilderAnswer = (questionId: string, value: string) => {
    setBuilderAnswers(prev => ({ ...prev, [questionId]: value }))
    setManualPlanChoice(null)
  }

  const toggleBuilder = () => {
    setIsBuilderOpen(prev => {
      const nextState = !prev
      if (!nextState) {
        setBuilderStep(0)
        setManualPlanChoice(null)
      } else {
        requestAnimationFrame(() => {
          document
            .getElementById('lead-machine-builder')
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
      }
      return nextState
    })
  }

  const handleNextStep = () => {
    setBuilderStep(prev => Math.min(prev + 1, builderQuestions.length))
  }

  const handlePrevStep = () => {
    setBuilderStep(prev => Math.max(prev - 1, 0))
  }

  // Clean up any stray CSS text that appears from the booking widget
  useEffect(() => {
    const unwantedPhrases = [
      'Pick a Date',
      'Previous month',
      'Next month',
      'Available Starting',
      'Select Date',
      'GMT',
      'lc-booking'
    ]

    const shouldStrip = (text: string) =>
      text.includes('/*') ||
      text.includes('{') ||
      text.includes('background:') ||
      unwantedPhrases.some(phrase => text.includes(phrase))

    const cleanNodeList = (nodes: NodeListOf<ChildNode> | ChildNode[]) => {
      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent?.trim() || ''
          if (shouldStrip(text)) node.remove()
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element
          const text = element.textContent?.trim() || ''
          if (shouldStrip(text)) element.remove()
        }
      })
    }

    const cleanupCSSText = () => {
      const calendarSection = document.getElementById('book-demo-calendar')
      const calendarWrapper = calendarSection?.querySelector('.calendar-wrapper')

      if (calendarWrapper) {
        // Remove any text nodes or elements after the calendar wrapper that contain CSS
        let nextSibling = calendarWrapper.nextSibling
        while (nextSibling) {
          const nodeToRemove = nextSibling
          nextSibling = nextSibling.nextSibling
          cleanNodeList([nodeToRemove])
        }

        // Also clean up any stray elements inside calendar wrapper (except iframe)
        Array.from(calendarWrapper.children).forEach(child => {
          if (child.tagName !== 'IFRAME') {
            cleanNodeList([child])
          }
        })
      }

      // Global sweep: sometimes the script appends text at the end of <body>
      cleanNodeList(document.body.childNodes as unknown as ChildNode[])
    }

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          cleanNodeList(mutation.addedNodes as unknown as ChildNode[])
        }
      })
    })

    // Run cleanup immediately, after iframe loads, and periodically
    cleanupCSSText()
    const timer = setTimeout(cleanupCSSText, 2000)
    const interval = setInterval(cleanupCSSText, 3000)

    // Watch for new nodes and strip immediately
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const builderScore = builderQuestions.reduce((score, question) => {
    const selected = question.options.find(option => option.value === builderAnswers[question.id])
    return score + (selected?.score || 0)
  }, 0)

  const recommendedPlanName = builderScore >= 4 ? 'Scale' : builderScore >= 2 ? 'Growth' : 'Starter'
  const activePlanName = manualPlanChoice || recommendedPlanName
  const activePlan = pricingPlans.find(plan => plan.name === activePlanName) ?? pricingPlans[0]
  const activePlanHighlights = activePlan.features.slice(0, 3)
  const totalBuilderSteps = builderQuestions.length
  const isSummaryStep = builderStep >= totalBuilderSteps
  const currentQuestion = !isSummaryStep ? builderQuestions[builderStep] : null

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* LeadConnector booking widget script */}
      <Navigation />

      <main className="pt-28 pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-600/12 to-slate-900/50 blur-3xl" aria-hidden />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs sm:text-sm uppercase tracking-[0.32em]">
                  <CircleDashed className="h-4 w-4" /> Lead Machine™
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                  Never chase leads again.
                </h1>
                <p className="mt-6 text-xl sm:text-2xl text-white/80 font-medium">
                  We find, engage, and qualify ready-to-buy clients for you — automatically.
                </p>
                <p className="mt-6 text-lg text-white/70">
                  Plug in our AI-powered Lead Machine once, and wake up to booked calls sitting in your CRM every day.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                  >
                    See the Lead Machine in Action
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-4 text-sm text-white/60">
                  Takes 2 minutes — zero tech setup. <ShieldCheck className="inline h-4 w-4 ml-2 mr-1 text-blue-300 align-text-bottom" /> ROI Assurance: if you don’t recoup your setup fee in 90 days, we keep the machine running at no service cost until you do.
                </p>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-lg font-semibold text-white">Inside the Machine</h3>
                  <ul className="mt-4 space-y-3 text-white/70 text-sm sm:text-base">
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Daily scrape of buyers who searched your keywords within the last 7 days.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Enriched firmographic filters — revenue, location, tech stack, job role, and more.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Natural conversation starters tuned to your voice so replies feel human, not scripted.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Automated routing into GoHighLevel (or your CRM) with stages, tasks, and alerts.</span></li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-6">
                  <p className="text-sm text-white/80">“Wake up to inboxes full of <span className="text-white">Interested — tell me more</span> replies. That’s when you know the machine is doing its job.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">It’s not hype — it’s math</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Lead Machine identifies intent, starts the conversation, and syncs every reply into your pipeline + ads.</h2>
            <p className="mt-4 text-white/70 text-lg">
              Live intent signals → human-tone outreach → qualified replies routed into your CRM with enriched data powering retargeting audiences.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3 text-white/80">
              <div className="rounded-2xl border border-white/15 bg-black/40 p-5">
                <div className="flex items-center gap-3 text-white/70 text-sm uppercase tracking-[0.2em]">
                  <span role="img" aria-label="verified">👤</span> Verified contacts
                </div>
                <p className="mt-2 text-3xl font-semibold text-white">70+ / day</p>
                <p className="mt-2 text-white/70">Live-intent scraping pulls people who raised their hand for your offer within the last 7 days.</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/40 p-5">
                <div className="flex items-center gap-3 text-white/70 text-sm uppercase tracking-[0.2em]">
                  <span role="img" aria-label="response">⏱️</span> Sub-minute replies
                </div>
                <p className="mt-2 text-3xl font-semibold text-white">&lt;60 seconds</p>
                <p className="mt-2 text-white/70">AI outreach replies in your voice across email, SMS, and DM so prospects never wait.</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/40 p-5">
                <div className="flex items-center gap-3 text-white/70 text-sm uppercase tracking-[0.2em]">
                  <span role="img" aria-label="pipeline">📈</span> Pipeline clarity
                </div>
                <p className="mt-2 text-3xl font-semibold text-white">100% tracked</p>
                <p className="mt-2 text-white/70">Warm replies push straight into your CRM stages and sync into high-converting retargeting audiences.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold">Stop paying for leads. Start owning conversations.</h2>
              <p className="mt-4 text-white/70">
                Most tools hand you a CSV. Lead Machine hands you verified humans already talking back — with every reply tracked inside your CRM.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[{
                title: 'Lists → Live intent',
                copy: 'We identify buyers actively searching for what you sell, not scraped directories.'
              }, {
                title: 'Cold blasts → Human replies',
                copy: 'AI responds in your tone within seconds so prospects feel heard, not spammed.'
              }, {
                title: 'Leads → Conversations',
                copy: 'Only people who raise their hand move into your pipeline with context, tasks, and retargeting audiences.'
              }].map(item => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-black/60 p-8 sm:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold">How the Lead Machine Works (in 3 moves)</h2>
              <p className="mt-4 text-white/70">
                Turn it on once. Then every day, it repeats the same playbook: find intent → spark conversations → hand off warm buyers.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[{
                title: 'Identify live intent',
                copy: 'We scan the web for people searching your exact offers — not recycled lists.'
              }, {
                title: 'Start real conversations',
                copy: 'AI outreach replies in your voice within 60 seconds and keeps the thread moving.'
              }, {
                title: 'Sync warm replies',
                copy: 'Qualified hand-raisers land in your CRM with tags, context, and retargeting audiences ready to run.'
              }].map(step => (
                <div key={step.title} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-white/70">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              {[{
                label: 'Data Intelligence',
                description: 'Finds who’s searching right now with verified contact data.'
              }, {
                label: 'AI Outreach Engine',
                description: 'Starts 1:1 conversations automatically—no cold-calling or spray-and-pray.'
              }, {
                label: 'CRM + Ad Sync',
                description: 'Drops qualified replies into your pipeline and fuels smarter retargeting.'
              }].map(column => (
                <div key={column.label} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{column.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{column.label}</h3>
                  <p className="mt-3 text-white/70">{column.description}</p>
                  <p className="mt-4 text-sm text-white/60">No wasted spend. No manual follow-up. No generic lists.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Here’s what happens when you turn it on.</h2>
            <ul className="mt-8 space-y-4 text-white/80">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={scrollToCalendar}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                Activate the Machine
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-600/40 via-blue-600/30 to-slate-900/50 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why you can’t wait</h2>
            <p className="mt-6 text-lg text-white/80">
              Every day you wait, a competitor runs this playbook and talks to the buyers you should be closing.
            </p>
            <p className="mt-6 text-lg text-white/80">
              There’s only one reason you’re not closing more — no one is talking to your best prospects first. We fix that in days, not months.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">What's Included When You Activate</h2>
            <ol className="mt-6 space-y-4">
              {offerStack.map((item, index) => (
                <li key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-100 font-semibold">{index + 1}</span>
                  <span className="text-white/75">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-white/70 font-medium">
              Activate today → expect your first qualified conversations within 14 days.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-blue-900/40 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why Believe Us</h2>
            <p className="mt-6 text-lg text-white/80">
              TrueFlow deploys Lead Machine™ systems for coaches, agencies, real estate teams, and local services—turning cold lists into booked calendars in under two weeks.
            </p>
            <p className="mt-4 text-lg text-white/80">No playbooks. No templates. Just proven installs that produce pipeline.</p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Who It Works For</h2>
            <ul className="mt-6 space-y-4">
              {verticals.map((vertical) => (
                <li key={vertical} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-white/75">{vertical}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/70">
              If you can describe your dream client, the Lead Machine™ can find them.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold">Transparent Pricing That Scales With You</h2>
              <p className="mt-4 text-lg text-white/80">
                Start at <span className="text-2xl font-semibold text-blue-300">$750 every 28 days</span> for 10 leads/day. Need more volume? Add packs of 10 leads/day as you scale.
              </p>
              <p className="mt-3 text-white/70">
                One-time setup fee: <span className="text-white font-semibold">$2,000</span> (includes full buildout, CRM integration, and campaign optimization)
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl border p-8 flex flex-col gap-6 ${
                    plan.featured
                      ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-black/40 ring-2 ring-cyan-400/30'
                      : 'border-white/10 bg-black/40'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                      {plan.value && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg ${
                            plan.value === 'Recommended'
                              ? 'bg-cyan-300 text-slate-900 border border-cyan-100'
                              : 'bg-amber-300 text-slate-900 border border-amber-100'
                          }`}
                        >
                          {plan.value}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-white/60">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <p className="text-4xl font-semibold text-white">{plan.price}</p>
                    <div className="flex flex-col">
                      <p className="text-white/70 text-sm">{plan.cadence}</p>
                      {plan.originalPrice && (
                        <p className="text-white/40 text-xs line-through">{plan.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/75 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <button
                type="button"
                onClick={toggleBuilder}
                className="inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-cyan-500/20"
                aria-expanded={isBuilderOpen}
              >
                {isBuilderOpen ? 'Hide Build Planner' : 'Build Your Lead Machine'}
              </button>
              <p className="text-sm text-white/60">Answer a few quick questions and we'll point you to the right Lead Machine™ package.</p>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/20 to-transparent p-5 text-center">
              <div className="inline-flex items-center justify-center gap-3 text-white/90 text-sm sm:text-base">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <p className="font-medium">90-Day ROI Guarantee If the system doesn't generate enough closings to cover its cost in 90 days, we keep it running at no service fee until it does.</p>
              </div>
            </div>

            {isBuilderOpen && (
              <div id="lead-machine-builder" className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>Step {Math.min(builderStep + 1, totalBuilderSteps + 1)} of {totalBuilderSteps + 1}</span>
                      <span>{isSummaryStep ? 'See your plan' : 'Answer the prompts'}</span>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
                        style={{ width: `${(Math.min(builderStep, totalBuilderSteps) / totalBuilderSteps) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {!isSummaryStep && currentQuestion && (
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Question {builderStep + 1}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{currentQuestion.label}</h3>
                      <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {currentQuestion.options.map(option => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => updateBuilderAnswer(currentQuestion.id, option.value)}
                            className={`rounded-2xl border px-4 py-4 text-left text-sm transition-all ${
                              builderAnswers[currentQuestion.id] === option.value
                                ? 'border-cyan-300 bg-cyan-500/10 text-white shadow-lg shadow-cyan-900/30'
                                : 'border-white/10 bg-black/30 text-white/70 hover:border-white/40'
                            }`}
                          >
                            {option.copy}
                          </button>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-4">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          disabled={builderStep === 0}
                          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30"
                        >
                          {builderStep === totalBuilderSteps - 1 ? 'See Recommendation' : 'Next'}
                        </button>
                      </div>
                    </div>
                  )}

                  {isSummaryStep && (
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Your build</p>
                        <h3 className="mt-2 text-3xl font-semibold text-white">{activePlanName} Plan</h3>
                        <p className="mt-3 text-white/70 text-sm">
                          {manualPlanChoice
                            ? 'We locked in your selection—scroll up to the pricing cards if you want the full breakdown.'
                            : `Based on your answers, the ${activePlanName} package will keep your pipeline on pace.`}
                        </p>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 space-y-3">
                          {activePlanHighlights.map(feature => (
                            <div key={feature} className="flex items-start gap-3 text-sm text-white/80">
                              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-300" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/50">
                          {builderQuestions.map(question => (
                            <span key={question.id} className="rounded-full border border-white/15 px-3 py-1">
                              {question.options.find(option => option.value === builderAnswers[question.id])?.copy}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4">
                          <button
                            type="button"
                            onClick={() => setBuilderStep(0)}
                            className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-white/70"
                          >
                            Start over
                          </button>
                        <button
                          type="button"
                          onClick={scrollToCalendar}
                          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30"
                        >
                            Book my demo
                          </button>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-white/15 bg-black/30 p-6 flex flex-col gap-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Choose any package</p>
                        <div className="flex flex-wrap gap-3">
                          {pricingPlans.map(plan => (
                            <button
                              key={plan.name}
                              type="button"
                              onClick={() => setManualPlanChoice(prev => (prev === plan.name ? null : plan.name))}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                              (manualPlanChoice || recommendedPlanName) === plan.name && activePlanName === plan.name
                                ? 'border-cyan-300 bg-cyan-500/10 text-white'
                                : 'border-white/15 text-white/70 hover:border-white/40'
                            }`}
                            >
                              {plan.name}
                            </button>
                          ))}
                        </div>

                        {manualPlanChoice && (
                          <button
                            type="button"
                            onClick={() => setManualPlanChoice(null)}
                            className="text-left text-sm text-white/60 underline-offset-4 hover:text-white"
                          >
                            Back to our recommendation
                          </button>
                        )}

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
                          <p className="text-sm font-semibold text-white/80">What's inside {activePlanName}</p>
                          {activePlanHighlights.map(feature => (
                            <div key={feature} className="flex items-start gap-3 text-xs text-white/70">
                              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-300" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          <p className="text-xs text-white/50">Full details are in the pricing grid above.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-600/40 via-blue-600/40 to-black/60 p-10 sm:p-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 uppercase tracking-[0.35em] text-xs">Ready?</span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold">Let the machine do the prospecting for you.</h2>
            <p className="mt-4 text-lg text-white/80">
              Book a free walkthrough, see your pipeline model, and decide if you want us to run it for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={scrollToCalendar}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                Book Your Free Demo
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-4 text-sm text-white/70">We only onboard 10 new accounts per week to protect performance.</p>
          </div>
        </section>

        <section id="book-demo-calendar" className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-24">
          <style jsx global>{`
            /* Hide any raw CSS text that might appear from embed scripts */
            #book-demo-calendar > div > div:last-child:not(.space-y-4):not(.calendar-wrapper) {
              display: none !important;
            }

            /* Ensure iframe renders properly */
            #msgsndr-calendar {
              display: block !important;
              width: 100% !important;
              min-height: 520px !important;
            }

            /* Hide any direct text content after calendar wrapper */
            #book-demo-calendar .calendar-wrapper ~ * {
              display: none !important;
            }
          `}</style>
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-black/60 p-8 sm:p-10">
            <div className="space-y-4 text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">Lock in Your Demo</h3>
              <p className="text-lg text-white/70">
                Spots for this week are limited—choose a time below to secure your Lead Machine™ walkthrough.
              </p>
            </div>
            <div className="calendar-wrapper overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/gsRd445hTmINPYoWlA1a"
                id="msgsndr-calendar"
                scrolling="yes"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
                title="Book a demo with TrueFlow"
                onLoad={(e) => {
                  // Remove any CSS text nodes that appear after iframe loads
                  setTimeout(() => {
                    const section = document.getElementById('book-demo-calendar')
                    if (section) {
                      const walker = document.createTreeWalker(
                        section,
                        NodeFilter.SHOW_TEXT,
                        null
                      )
                      const nodesToRemove: Node[] = []
                      let node
                      while ((node = walker.nextNode())) {
                        const text = node.textContent || ''
                        if (text.includes('body {') || text.includes('background:') || text.includes('.lc-booking')) {
                          nodesToRemove.push(node)
                        }
                      }
                      nodesToRemove.forEach((n) => n.parentNode?.removeChild(n))
                    }
                  }, 1000)
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
