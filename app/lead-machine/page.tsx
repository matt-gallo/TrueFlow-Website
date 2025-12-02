'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { useTheme } from '../components/ThemeProvider'
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

const systemColumns = [
  {
    label: 'Data Intelligence',
    description: "Finds who's searching right now with verified contact data.",
    image: '/data-intellegence.png'
  },
  {
    label: 'AI Outreach Engine',
    description: 'Starts 1:1 conversations automatically—no cold-calling or spray-and-pray.',
    image: '/ai-outreach-engine.png'
  },
  {
    label: 'CRM + Ad Sync',
    description: 'Drops qualified replies into your pipeline and fuels smarter retargeting.',
    image: '/crm-ad-sync.png'
  }
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
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'
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
    <div className={`min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* LeadConnector booking widget script */}
      <Navigation />

      <main className="pt-28 pb-24">
        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className={`rounded-3xl border p-8 sm:p-12 text-center relative overflow-hidden ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-cyan-100 bg-cyan-50/30'
          }`}>
            <div className="absolute -top-4 right-0 w-[520px] max-w-full opacity-90 pointer-events-none">
              <Image
                src={isDarkMode ? "/trueflow-lead-machine-banner-transparent.png" : "/trueflow-lead-machine-banner-light-mode.png"}
                alt="TrueFlow Lead Machine"
                width={780}
                height={390}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="relative z-10 mt-28 sm:mt-32">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Never chase leads again.
              </h1>
              <p className={`mt-6 text-xl sm:text-2xl font-medium ${
                isDarkMode ? 'text-white/80' : 'text-gray-700'
              }`}>
                We find, engage, and qualify ready-to-buy clients for you — automatically.
              </p>
              <p className={`mt-6 text-lg ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                Plug in our AI-powered Lead Machine once, and wake up to booked calls sitting in your CRM every day.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
                >
                  See the Lead Machine in Action
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className={`mt-4 text-sm ${
                isDarkMode ? 'text-white/60' : 'text-gray-500'
              }`}>
                Takes 2 minutes — zero tech setup. <ShieldCheck className={`inline h-4 w-4 ml-2 mr-1 align-text-bottom ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-500'
                }`} /> ROI Assurance: if you don't recoup your setup fee in 90 days, we keep the machine running at no service cost until you do.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>What We Do For You</h2>
            <p className={`mt-4 text-lg ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              From finding contacts to booking meetings — we handle every step of your B2B pipeline.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[{
              title: 'Find Your Ideal Contacts',
              description: 'We identify and verify decision-makers actively searching for solutions like yours.',
              icon: Search
            }, {
              title: 'High-Value Outreach',
              description: 'Reach out with irresistible free offers (no strings attached) that get replies and permission to market.',
              icon: Mail
            }, {
              title: 'Deliver & Build Trust',
              description: 'We fulfill the promise, deliver value, and build the relationship on your behalf.',
              icon: BadgeCheck
            }, {
              title: 'Nurture & Convert',
              description: 'Automated email marketing sequences that warm leads and move them toward a decision.',
              icon: RefreshCw
            }, {
              title: 'Lead Magnets & Funnels',
              description: 'Custom-built lead magnets and conversion funnels designed to qualify and educate prospects.',
              icon: Target
            }, {
              title: 'Appointment Setting',
              description: 'We book qualified prospects directly into your calendar — warm and ready to buy.',
              icon: Workflow
            }].map(item => (
              <div
                key={item.title}
                className={`relative rounded-3xl border p-6 overflow-hidden backdrop-blur-xl ${
                  isDarkMode
                    ? 'border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/10'
                    : 'border-blue-300/40 bg-gradient-to-br from-blue-100/80 to-cyan-50/60'
                }`}
              >
                <item.icon className={`absolute -right-6 -bottom-6 h-40 w-40 ${
                  isDarkMode ? 'text-blue-400/10' : 'text-blue-200/30'
                }`} />
                <div className="relative z-10">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-white/70' : 'text-gray-600'
                  }`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className={`text-lg ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              <span className={`font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>One-time setup: $2,000</span> · <span className={`font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Monthly service starts at $1,250</span>
            </p>
            <p className={`mt-3 ${
              isDarkMode ? 'text-white/60' : 'text-gray-500'
            }`}>
              Activate today → expect your first qualified conversations within 14 days.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className={`rounded-3xl border p-8 sm:p-12 ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
          }`}>
            <p className={`text-xs uppercase tracking-[0.3em] ${
              isDarkMode ? 'text-white/60' : 'text-gray-500'
            }`}>It's not hype — it's math</p>
            <h2 className={`mt-3 text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text ${
              isDarkMode
                ? 'bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300'
                : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'
            }`}>Lead Machine identifies intent, starts the conversation, and syncs every reply into your pipeline + ads.</h2>
            <p className={`mt-4 text-lg ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Live intent signals → human-tone outreach → qualified replies routed into your CRM with enriched data powering retargeting audiences.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className={`rounded-2xl border backdrop-blur-xl p-5 ${
                isDarkMode
                  ? 'border-blue-300/30 bg-gradient-to-br from-blue-500/25 to-cyan-500/20'
                  : 'border-blue-300/40 bg-gradient-to-br from-blue-100/70 to-cyan-50/50'
              }`}>
                <div className={`flex items-center gap-3 text-sm uppercase tracking-[0.2em] ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>
                  <span role="img" aria-label="verified">👤</span> Verified contacts
                </div>
                <p className={`mt-2 text-3xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>70+ / day</p>
                <p className={`mt-2 ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>Live-intent scraping pulls people who raised their hand for your offer within the last 7 days.</p>
              </div>

              <div className={`rounded-2xl border backdrop-blur-xl p-5 ${
                isDarkMode
                  ? 'border-blue-300/30 bg-gradient-to-br from-blue-500/25 to-cyan-500/20'
                  : 'border-blue-300/40 bg-gradient-to-br from-blue-100/70 to-cyan-50/50'
              }`}>
                <div className={`flex items-center gap-3 text-sm uppercase tracking-[0.2em] ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>
                  <span role="img" aria-label="response">⏱️</span> Sub-minute replies
                </div>
                <p className={`mt-2 text-3xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>&lt;60 seconds</p>
                <p className={`mt-2 ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>AI outreach replies in your voice across email, SMS, and DM so prospects never wait.</p>
              </div>

              <div className={`rounded-2xl border backdrop-blur-xl p-5 ${
                isDarkMode
                  ? 'border-blue-300/30 bg-gradient-to-br from-blue-500/25 to-cyan-500/20'
                  : 'border-blue-300/40 bg-gradient-to-br from-blue-100/70 to-cyan-50/50'
              }`}>
                <div className={`flex items-center gap-3 text-sm uppercase tracking-[0.2em] ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>
                  <span role="img" aria-label="pipeline">📈</span> Pipeline clarity
                </div>
                <p className={`mt-2 text-3xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>100% tracked</p>
                <p className={`mt-2 ${
                  isDarkMode ? 'text-white/80' : 'text-gray-600'
                }`}>Warm replies push straight into your CRM stages and sync into high-converting retargeting audiences.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className={`rounded-3xl border p-8 sm:p-12 ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text ${
                isDarkMode
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300'
                  : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'
              }`}>Stop paying for leads. Start owning conversations.</h2>
              <p className={`mt-4 ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
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
                <div key={item.title} className={`rounded-3xl border backdrop-blur-xl p-6 ${
                  isDarkMode
                    ? 'border-blue-300/30 bg-gradient-to-br from-blue-500/25 to-cyan-500/20'
                    : 'border-blue-300/40 bg-gradient-to-br from-blue-100/70 to-cyan-50/50'
                }`}>
                  <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`mt-3 ${
                    isDarkMode ? 'text-white/80' : 'text-gray-600'
                  }`}>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/15' : 'border-gray-300'} ${isDarkMode ? 'bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-black/60' : 'bg-gradient-to-r from-cyan-100/60 via-blue-100/50 to-gray-50'} p-8 sm:p-12`}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>How the Lead Machine Works (in 3 moves)</h2>
              <p className={`mt-4 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
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
                <div key={step.title} className={`rounded-3xl border ${isDarkMode ? 'border-white/15' : 'border-gray-300'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-6`}>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-8 sm:p-12`}>
            <div className="grid gap-8 md:grid-cols-3">
              {systemColumns.map((column) => (
                <div
                  key={column.label}
                  className={`rounded-3xl border flex flex-col gap-5 ${
                    isDarkMode ? 'border-white/10 bg-black/40' : 'border-gray-200 bg-gray-100'
                  } p-6`}
                >
                  <div
                    className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl border ${
                      isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <Image
                      src={column.image}
                      alt={`${column.label} visual`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      {column.label}
                    </p>
                    <h3 className={`mt-3 text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {column.label}
                    </h3>
                    <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{column.description}</p>
                    <p className={`mt-4 text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      No wasted spend. No manual follow-up. No generic lists.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-8 sm:p-12`}>
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Here's what happens when you turn it on.</h2>
            <ul className={`mt-8 space-y-4 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
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
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/20' : 'border-gray-300'} ${isDarkMode ? 'bg-gradient-to-br from-cyan-600/40 via-blue-600/30 to-slate-900/50' : 'bg-gradient-to-br from-cyan-100 via-blue-100 to-gray-50'} p-8 sm:p-12 text-center`}>
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Why you can't wait</h2>
            <p className={`mt-6 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              Every day you wait, a competitor runs this playbook and talks to the buyers you should be closing.
            </p>
            <p className={`mt-6 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              There's only one reason you're not closing more — no one is talking to your best prospects first. We fix that in days, not months.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-8 sm:p-12`}>
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What's Included When You Activate</h2>
            <ol className="mt-6 space-y-4">
              {offerStack.map((item, index) => (
                <li key={item} className={`flex items-start gap-4 rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-black/40' : 'bg-gray-100'} px-5 py-4`}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${isDarkMode ? 'bg-cyan-500/20 text-cyan-100' : 'bg-cyan-100 text-cyan-700'} font-semibold`}>{index + 1}</span>
                  <span className={isDarkMode ? 'text-white/75' : 'text-gray-600'}>{item}</span>
                </li>
              ))}
            </ol>
            <p className={`mt-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'} font-medium`}>
              Activate today → expect your first qualified conversations within 14 days.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/20' : 'border-gray-300'} ${isDarkMode ? 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-blue-900/40' : 'bg-gradient-to-br from-cyan-100 via-blue-100 to-blue-50'} p-8 sm:p-12`}>
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Why Believe Us</h2>
            <p className={`mt-6 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              TrueFlow deploys Lead Machine™ systems for coaches, agencies, real estate teams, and local services—turning cold lists into booked calendars in under two weeks.
            </p>
            <p className={`mt-4 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>No playbooks. No templates. Just proven installs that produce pipeline.</p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-8 sm:p-12`}>
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Who It Works For</h2>
            <ul className="mt-6 space-y-4">
              {verticals.map((vertical) => (
                <li key={vertical} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className={isDarkMode ? 'text-white/75' : 'text-gray-600'}>{vertical}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              If you can describe your dream client, the Lead Machine™ can find them.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-8 sm:p-12`}>
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Transparent Pricing That Scales With You</h2>
              <p className={`mt-4 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                Start at <span className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>$750 every 28 days</span> for 10 leads/day. Need more volume? Add packs of 10 leads/day as you scale.
              </p>
              <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                One-time setup fee: <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>$2,000</span> (includes full buildout, CRM integration, and campaign optimization)
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl border p-8 flex flex-col gap-6 ${
                    plan.featured
                      ? isDarkMode
                        ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-black/40 ring-2 ring-cyan-400/30'
                        : 'border-cyan-400 bg-gradient-to-br from-cyan-50 via-blue-50 to-gray-100 ring-2 ring-cyan-400/50'
                      : isDarkMode
                        ? 'border-white/10 bg-black/40'
                        : 'border-gray-200 bg-gray-100'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
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
                    <p className={`mt-2 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <p className={`text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.price}</p>
                    <div className="flex flex-col">
                      <p className={`${isDarkMode ? 'text-white/70' : 'text-gray-600'} text-sm`}>{plan.cadence}</p>
                      {plan.originalPrice && (
                        <p className={`${isDarkMode ? 'text-white/40' : 'text-gray-400'} text-xs line-through`}>{plan.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className={`${isDarkMode ? 'text-white/75' : 'text-gray-600'} text-sm`}>{feature}</span>
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
                className={`inline-flex items-center gap-3 rounded-full border ${isDarkMode ? 'border-cyan-400/40 bg-cyan-500/10' : 'border-cyan-400 bg-cyan-50'} px-8 py-3 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors ${isDarkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-cyan-100'}`}
                aria-expanded={isBuilderOpen}
              >
                {isBuilderOpen ? 'Hide Build Planner' : 'Build Your Lead Machine'}
              </button>
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Answer a few quick questions and we'll point you to the right Lead Machine™ package.</p>
            </div>

            <div className={`mt-8 rounded-2xl border ${isDarkMode ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/20 to-transparent' : 'border-cyan-300 bg-gradient-to-br from-cyan-50 via-blue-50 to-transparent'} p-5 text-center`}>
              <div className={`inline-flex items-center justify-center gap-3 ${isDarkMode ? 'text-white/90' : 'text-gray-800'} text-sm sm:text-base`}>
                <ShieldCheck className={`h-6 w-6 ${isDarkMode ? 'text-cyan-300' : 'text-cyan-600'}`} />
                <p className="font-medium">90-Day ROI Guarantee If the system doesn't generate enough closings to cover its cost in 90 days, we keep it running at no service fee until it does.</p>
              </div>
            </div>

            {isBuilderOpen && (
              <div id="lead-machine-builder" className={`mt-10 rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-black/40' : 'bg-gray-100'} p-6 sm:p-8`}>
                <div className="space-y-6">
                  <div>
                    <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      <span>Step {Math.min(builderStep + 1, totalBuilderSteps + 1)} of {totalBuilderSteps + 1}</span>
                      <span>{isSummaryStep ? 'See your plan' : 'Answer the prompts'}</span>
                    </div>
                    <div className={`mt-3 h-2 w-full rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
                        style={{ width: `${(Math.min(builderStep, totalBuilderSteps) / totalBuilderSteps) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {!isSummaryStep && currentQuestion && (
                    <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-6`}>
                      <p className={`text-xs uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Question {builderStep + 1}</p>
                      <h3 className={`mt-3 text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentQuestion.label}</h3>
                      <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {currentQuestion.options.map(option => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => updateBuilderAnswer(currentQuestion.id, option.value)}
                            className={`rounded-2xl border px-4 py-4 text-left text-sm transition-all ${
                              builderAnswers[currentQuestion.id] === option.value
                                ? isDarkMode
                                  ? 'border-cyan-300 bg-cyan-500/10 text-white shadow-lg shadow-cyan-900/30'
                                  : 'border-cyan-400 bg-cyan-50 text-gray-900 shadow-lg shadow-cyan-200/50'
                                : isDarkMode
                                  ? 'border-white/10 bg-black/30 text-white/70 hover:border-white/40'
                                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
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
                          className={`rounded-full border ${isDarkMode ? 'border-white/20' : 'border-gray-300'} px-6 py-3 text-sm font-semibold ${isDarkMode ? 'text-white/70' : 'text-gray-600'} disabled:cursor-not-allowed disabled:opacity-40`}
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
                      <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-6`}>
                        <p className={`text-xs uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Your build</p>
                        <h3 className={`mt-2 text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{activePlanName} Plan</h3>
                        <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'} text-sm`}>
                          {manualPlanChoice
                            ? 'We locked in your selection—scroll up to the pricing cards if you want the full breakdown.'
                            : `Based on your answers, the ${activePlanName} package will keep your pipeline on pace.`}
                        </p>

                        <div className={`mt-6 rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-black/30' : 'bg-white'} p-5 space-y-3`}>
                          {activePlanHighlights.map(feature => (
                            <div key={feature} className={`flex items-start gap-3 text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-300" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className={`mt-6 flex flex-wrap gap-3 text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                          {builderQuestions.map(question => (
                            <span key={question.id} className={`rounded-full border ${isDarkMode ? 'border-white/15' : 'border-gray-300'} px-3 py-1`}>
                              {question.options.find(option => option.value === builderAnswers[question.id])?.copy}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4">
                          <button
                            type="button"
                            onClick={() => setBuilderStep(0)}
                            className={`rounded-full border ${isDarkMode ? 'border-white/20' : 'border-gray-300'} px-6 py-3 text-xs font-semibold ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}
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

                      <div className={`rounded-3xl border ${isDarkMode ? 'border-white/15' : 'border-gray-300'} ${isDarkMode ? 'bg-black/30' : 'bg-white'} p-6 flex flex-col gap-4`}>
                        <p className={`text-xs uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Choose any package</p>
                        <div className="flex flex-wrap gap-3">
                          {pricingPlans.map(plan => (
                            <button
                              key={plan.name}
                              type="button"
                              onClick={() => setManualPlanChoice(prev => (prev === plan.name ? null : plan.name))}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                              (manualPlanChoice || recommendedPlanName) === plan.name && activePlanName === plan.name
                                ? isDarkMode
                                  ? 'border-cyan-300 bg-cyan-500/10 text-white'
                                  : 'border-cyan-400 bg-cyan-50 text-gray-900'
                                : isDarkMode
                                  ? 'border-white/15 text-white/70 hover:border-white/40'
                                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
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
                            className={`text-left text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-900'} underline-offset-4`}
                          >
                            Back to our recommendation
                          </button>
                        )}

                        <div className={`rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-5 space-y-3`}>
                          <p className={`text-sm font-semibold ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>What's inside {activePlanName}</p>
                          {activePlanHighlights.map(feature => (
                            <div key={feature} className={`flex items-start gap-3 text-xs ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                              <CheckCircle className="mt-0.5 h-4 w-4 text-blue-300" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Full details are in the pricing grid above.</p>
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
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-gradient-to-br from-cyan-600/40 via-blue-600/40 to-black/60' : 'bg-gradient-to-br from-cyan-100 via-blue-100 to-gray-50'} p-10 sm:p-14`}>
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDarkMode ? 'border-white/20 bg-white/5 text-white/70' : 'border-gray-300 bg-white text-gray-600'} uppercase tracking-[0.35em] text-xs`}>Ready?</span>
            <h2 className={`mt-6 text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let the machine do the prospecting for you.</h2>
            <p className={`mt-4 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
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
            <p className={`mt-4 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>We only onboard 22 installs per month to protect performance.</p>
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
              aspect-ratio: 573 / 491 !important;
              min-height: 491px !important;
            }

            /* Hide any direct text content after calendar wrapper */
            #book-demo-calendar .calendar-wrapper ~ * {
              display: none !important;
            }
          `}</style>
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/15' : 'border-gray-300'} ${isDarkMode ? 'bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-black/60' : 'bg-gradient-to-br from-cyan-100/80 via-blue-100/80 to-gray-50'} p-8 sm:p-10`}>
            <div className="space-y-4 text-center mb-8">
              <h3 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Lock in Your Demo</h3>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Spots for this week are limited—choose a time below to secure your Lead Machine™ walkthrough.
              </p>
            </div>
            <div className={`calendar-wrapper overflow-hidden rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-white'}`}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/gsRd445hTmINPYoWlA1a"
                id="msgsndr-calendar"
                scrolling="yes"
                style={{ width: '100%', border: 'none', overflow: 'hidden', aspectRatio: '573 / 491', minHeight: '491px' }}
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

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} p-8 sm:p-12`}>
            <div className="text-center mb-10">
              <p className={`text-xs uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>After the demo</p>
              <h2 className={`mt-3 text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What happens once you say yes</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[{
                title: 'Day 0-2',
                copy: 'Install your Lead Machine environment, connect domains, and import your dream clients list.'
              }, {
                title: 'Day 3-7',
                copy: 'Launch 1:1 conversations, deliver your irresistible offer, and tag every reply in your CRM.'
              }, {
                title: 'Day 8-14',
                copy: 'Layer nurture, ads, and appointment setting so pipelines stay full while you close.'
              }].map(item => (
                <div key={item.title} className={`rounded-3xl border ${isDarkMode ? 'border-blue-300/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/15' : 'border-blue-300 bg-gradient-to-br from-blue-100/80 to-cyan-100/60'} backdrop-blur-xl p-6`}>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'} uppercase tracking-[0.2em]`}>{item.title}</p>
                  <p className={`mt-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg`}>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-white/15' : 'border-gray-300'} ${isDarkMode ? 'bg-gradient-to-br from-blue-600/40 via-slate-900/50 to-black/60' : 'bg-gradient-to-br from-blue-100 via-gray-100 to-gray-50'} p-8 sm:p-12`}>
            <div className={`space-y-6 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              <p className={`text-sm uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Story time</p>
              <h2 className={`text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>"We turned the machine on Friday. By Monday, five warm replies were waiting."</h2>
              <p>
                Dana runs a boutique automation agency. Every week was feast or famine. We loaded her dream-client filters, dropped a
                "Let us audit your funnels for free" offer, and by the end of week one she had her first two retainers closed.
              </p>
              <p>
                Nothing about Dana's offer changed. Only the leverage. When buyers raise their hand first, selling feels like service again.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className={`rounded-3xl border ${isDarkMode ? 'border-rose-400/30 bg-gradient-to-br from-rose-600/30 via-purple-600/30 to-black/60' : 'border-rose-300 bg-gradient-to-br from-rose-100 via-purple-100 to-gray-50'} p-10 sm:p-14`}>
            <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Urgent</p>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Only 22 installs per month. Next cohort starts Monday.</h2>
            <p className={`mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-700'} text-lg`}>If this is the week you stop guessing where leads will come from, grab a slot now.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={scrollToCalendar}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-lg font-semibold text-black hover:shadow-2xl hover:shadow-rose-500/30 transition-all"
              >
                Reserve my install
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className={`mt-3 text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>No payment due today—just pick your kickoff call.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
