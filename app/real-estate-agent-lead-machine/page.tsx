'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import { useTheme } from '../components/ThemeProvider'
import { ArrowRight, Search, Layers, MessageCircle, Lock, BarChart3, FileText, Clock, CheckCircle, ShieldCheck, TrendingUp } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Core Plan',
    price: '$1,200',
    cadence: 'per month',
    description: '1 market (up to 5 zip codes) + buyer/seller targeting + 500 new leads/month + basic nurture',
    features: [
      '500 new qualified leads per month',
      'Hyper-local buyer/seller targeting (up to 5 zip codes)',
      'AI-driven intent monitoring across Google, Zillow, Realtor.com',
      'Basic nurture sequences (7-14 days)',
      'CRM integration (kvCORE, BoomTown, Follow Up Boss)',
      'Weekly performance dashboard'
    ],
    featured: false
  },
  {
    name: 'Growth Plan',
    price: '$2,500',
    cadence: 'per month',
    description: 'Multi-market targeting + 1,500 leads/month + listing alert automation + market reports',
    features: [
      '1,500 new qualified leads per month',
      'Everything in Core, plus:',
      'Multi-market targeting (unlimited zip codes)',
      'Listing alert automation with segmentation',
      'AI-generated monthly market reports',
      'Advanced nurture workflows (30 days)',
      'Priority optimization & A/B testing'
    ],
    featured: true,
    value: 'Recommended'
  },
  {
    name: 'Enterprise Plan',
    price: '$5,000',
    cadence: 'per month',
    description: 'Unlimited markets + custom agent routing + performance analytics + dedicated success manager',
    features: [
      'Unlimited lead volume (2,000+ per month)',
      'Everything in Growth, plus:',
      'Custom agent routing & territory management',
      'Advanced performance analytics & coaching insights',
      'Dedicated success manager',
      'White-glove optimization service',
      'Quarterly strategy sessions'
    ],
    featured: false,
    value: 'Best Value'
  }
]

const builderQuestions = [
  {
    id: 'agents',
    label: 'How many agents are in your brokerage?',
    options: [
      { value: '10', copy: '1-10 agents', score: 0 },
      { value: '30', copy: '10-30 agents', score: 1 },
      { value: '50', copy: '30+ agents', score: 2 }
    ]
  },
  {
    id: 'volume',
    label: 'How many new qualified leads does your brokerage need monthly?',
    options: [
      { value: '500', copy: '300-500 leads/month', score: 0 },
      { value: '1500', copy: '1,000-1,500 leads/month', score: 1 },
      { value: '2000', copy: '2,000+ leads/month', score: 2 }
    ]
  },
  {
    id: 'systems',
    label: 'How mature is your current lead system?',
    options: [
      { value: 'basic', copy: 'Basic CRM, manual follow-up', score: 0 },
      { value: 'growing', copy: 'CRM + some automation', score: 1 },
      { value: 'advanced', copy: 'Multi-market with analytics', score: 2 }
    ]
  }
]

export default function RealEstateLeadMachine() {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode } = useTheme()
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

  useEffect(() => {
    setMounted(true)
  }, [])

  // Clean up calendar CSS text
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
        let nextSibling = calendarWrapper.nextSibling
        while (nextSibling) {
          const nodeToRemove = nextSibling
          nextSibling = nextSibling.nextSibling
          cleanNodeList([nodeToRemove])
        }

        Array.from(calendarWrapper.children).forEach(child => {
          if (child.tagName !== 'IFRAME') {
            cleanNodeList([child])
          }
        })
      }

      cleanNodeList(document.body.childNodes as unknown as ChildNode[])
    }

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          cleanNodeList(mutation.addedNodes as unknown as ChildNode[])
        }
      })
    })

    cleanupCSSText()
    const timer = setTimeout(cleanupCSSText, 2000)
    const interval = setInterval(cleanupCSSText, 3000)

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const scrollToDemo = () => {
    document.getElementById('book-demo-calendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          document.getElementById('lead-machine-builder')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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

  const builderScore = builderQuestions.reduce((score, question) => {
    const selected = question.options.find(option => option.value === builderAnswers[question.id])
    return score + (selected?.score || 0)
  }, 0)

  const recommendedPlanName = builderScore >= 4 ? 'Enterprise Plan' : builderScore >= 2 ? 'Growth Plan' : 'Core Plan'
  const activePlanName = manualPlanChoice || recommendedPlanName
  const activePlan = pricingPlans.find(plan => plan.name === activePlanName) ?? pricingPlans[0]
  const activePlanHighlights = activePlan.features.slice(0, 3)
  const totalBuilderSteps = builderQuestions.length
  const isSummaryStep = builderStep >= totalBuilderSteps
  const currentQuestion = !isSummaryStep ? builderQuestions[builderStep] : null

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <ParticleBackground particleCount={50} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/15 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/12 via-transparent to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
            <div>
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.32em] mb-6 ${
                isDarkMode
                  ? 'border border-white/20 bg-white/5 text-white/80'
                  : 'border border-blue-200 bg-blue-50 text-blue-700'
              }`}>
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Lead Machine™ for Real Estate
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The average real estate agent spends 63% of their time searching for the next deal.
              </h1>

              <p className="text-3xl lg:text-4xl font-bold my-6 leading-tight text-blue-500">
                The top 10% spend that time closing.
              </p>

              <p className={`text-2xl mb-5 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                and what if you could flip a switch?
              </p>

              <p className={`text-lg mb-10 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                We track live intent, start human conversations, and hand your agents booked calls before they log in.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={scrollToDemo}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]"
                >
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className={`px-6 py-3 rounded-full font-semibold text-sm transition-all border ${
                  isDarkMode
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  See How It Works
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: '+42%', label: 'Avg. transaction increase', detail: 'first 90 days' },
                  { value: '15-20', label: 'Qualified leads per agent', detail: 'monthly average' },
                  { value: '-67%', label: 'Agent turnover reduction', detail: 'vs. industry baseline' }
                ].map((stat, idx) => (
                  <div key={stat.label} className={`rounded-2xl p-4 ${
                    isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
                  }`}>
                    <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                    {idx === 0 && (
                      <p className={`text-[10px] mt-3 uppercase tracking-widest ${isDarkMode ? 'text-white/40' : 'text-gray-400'}`}>Based on partner averages</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-3xl p-8 backdrop-blur ${
              isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <div className={`bg-gradient-to-br rounded-2xl border p-6 ${
                isDarkMode
                  ? 'from-blue-500/10 to-purple-500/10 border-white/10'
                  : 'from-blue-500/20 to-purple-500/20 border-blue-200'
              }`}>
                <p className={`text-sm uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Performance Snapshot</p>
                <h3 className="text-3xl font-semibold mt-4">Consistent Lead Flow</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>AI tracks intent → nurtures prospects → routes qualified leads to agents.</p>
                <div className="mt-6 space-y-3">
                  {['Intent captured · Real-time', 'Conversation started · Automated', 'Calendar synced · Ready to close'].map(item => (
                    <div key={item} className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className={`text-xs mt-6 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  90-Day ROI Guarantee: If the system doesn&apos;t generate enough closings to cover its cost in 90 days, we keep it running at no service fee until it does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Brokerages Lose Agents (and Revenue)
          </h2>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
            <div className={`rounded-3xl p-10 ${
              isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <p className={`text-xs uppercase tracking-[0.3em] font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                You don&apos;t have a retention problem—you have a lead flow problem.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Agents leave for one reason: better opportunities elsewhere.
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Here&apos;s where the cracks appear:
              </p>

              <ul className="space-y-4">
                {[
                  { title: 'Agent Retention Crisis:', text: 'Agents leave for brokerages with predictable lead flow—you lose GCI splits, recruiting momentum, and market share' },
                  { title: 'The 80/20 Trap:', text: 'Your top 20% generate 80% of revenue while the rest struggle—no system to level the playing field' },
                  { title: 'Lead Distribution Chaos:', text: 'Manual round-robin or favoritism creates resentment—no transparency on quality or conversion' },
                  { title: 'Marketing Budget Black Hole:', text: 'Spending thousands on Zillow Premier Agent, Realtor.com, Facebook ads—with zero attribution or ROI clarity' },
                  { title: 'CRM Graveyard:', text: 'Paid for kvCORE, BoomTown, or Follow Up Boss—but agents don\'t use it because manual data entry is a nightmare' },
                  { title: 'Lost Buyer Intent:', text: 'Buyers exploring neighborhoods online go to Zillow, Redfin, Compass—you never even know they existed' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                      <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>{item.title}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className={`mt-6 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                More Zillow leads or open house sign-ins won&apos;t fix this. You need a system that captures intent, qualifies prospects, and delivers them ready-to-convert.
              </p>
            </div>

            <div className={`bg-gradient-to-br rounded-3xl p-10 ${
              isDarkMode
                ? 'from-blue-500/20 to-purple-500/20 border border-white/20'
                : 'from-blue-500/30 to-purple-500/30 border border-blue-300'
            }`}>
              <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
              <p className={`mb-5 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
                We build the Lead Machine™ inside your brokerage—hyper-local targeting, intent tracking, automated nurture, agent routing, and performance analytics—so your agents wake up to warm leads in their pipeline, not empty calendars.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-700'}>
                When agents know quality leads are coming consistently, they stay. When they stay, you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-3xl p-10 ${
            isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">How the Machine Runs</h2>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                TrueFlow handles the first 90% of your lead generation process, then hands agents warm, intent-qualified prospects:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Monitors live buyer/seller intent across Google, Zillow, Realtor.com, and social platforms in your target zip codes',
                'Enriches every lead with contact info, pre-qualification signals, property interests, and move timeline',
                'Routes to the right agent based on specialty, geography, availability, or conversion rate—no favoritism, full transparency',
                'Starts human-tone conversations with listing alerts, market updates, and neighborhood insights',
                'Qualifies intent with a 2-minute Buyer/Seller Readiness Assessment—scores timeline, budget, and motivation',
                'Books qualified prospects directly onto agent calendars or routes to CRM nurture workflow'
              ].map((text, idx) => (
                <div key={idx} className={`flex items-start gap-4 rounded-2xl p-6 ${
                  isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-lg font-bold text-blue-500 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className={`pt-1.5 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{text}</p>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl p-8 mt-8 ${
              isDarkMode ? 'bg-black/40 border border-white/10' : 'bg-blue-50 border border-blue-200'
            }`}>
              <h3 className="text-2xl font-semibold mb-5">In Plain Language:</h3>
              <ul className="space-y-3">
                {[
                  'No manual prospecting. The machine finds people searching for homes in your market right now.',
                  'No messy spreadsheets. Every lead drops into your CRM with tags, tasks, and routing pre-configured.',
                  'No agent complaints about "bad leads." We nurture for 7-30 days before routing, so they only get warm prospects.',
                  'No disconnected tools. Integrates with kvCORE, BoomTown, Follow Up Boss, Chime, or GoHighLevel.',
                  'No guessing what\'s working. Live dashboard shows lead volume, agent response time, conversion rate, and ROI.'
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                    <span className={isDarkMode ? 'text-white/75' : 'text-gray-700'}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Machine, Component by Component
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Every piece is done-for-you, integrated into your CRM, and tuned to your market—no assembly required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Search, title: 'Hyper-Local Buyer Hunter', text: 'AI scrapes buyer intent from search, directory, and social behavior in your target zip codes—finds people searching "homes for sale in [your city]" or "best school districts near me" in the last 7 days.' },
              { icon: Layers, title: 'Seller Trigger Engine', text: 'Identifies homeowners showing sell signals: equity thresholds hit, job relocation searches, life events, FSBO listings going stale—captures motivated sellers before Zillow does.' },
              { icon: MessageCircle, title: 'Listing Alert Autopilot', text: 'Auto-sends new listing notifications to segmented buyer lists based on price, neighborhood, beds/baths, school district—turns cold databases into engaged prospects.' },
              { icon: Lock, title: 'Open House Follow-Up Flow', text: 'Captures walk-in visitor info via iPad/QR code → triggers 7-day nurture sequence → books private showing or listing appointment automatically.' },
              { icon: BarChart3, title: 'Agent Performance Analytics', text: 'Shows lead-to-close rate by agent, average days to conversion, response time benchmarks—surfaces coaching opportunities and top performers.' },
              { icon: FileText, title: 'Market Report Generator', text: 'AI-produced monthly market snapshots (average days on market, price trends, inventory levels) branded to your brokerage and auto-sent to lead lists.' },
              { icon: Clock, title: 'CRM Sync & Task Automation', text: 'Integrates with kvCORE, BoomTown, Follow Up Boss, Chime, or GoHighLevel—auto-creates tasks, stages, tags, and alerts for every lead.' },
              { icon: Clock, title: 'Retargeting Pixel Sync', text: 'Pushes new leads into Meta/Google audiences for remarketing and lookalike campaigns tied to listing launches—amplifies reach without manual uploads.' }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className={`rounded-3xl p-8 transition-colors ${
                  isDarkMode
                    ? 'bg-white/5 border border-white/10 hover:border-blue-400/40'
                    : 'bg-white border border-gray-200 hover:border-blue-400 shadow-lg'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-10 ${
            isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Your Brokerage Gains
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Agent Retention:', text: 'Agents stay because you\'re delivering better leads than competitors—reduces recruiting/training costs' },
                { title: 'Revenue Predictability:', text: 'Steady deal flow = more transactions = stable GCI splits and ancillary revenue (title, mortgage, insurance)' },
                { title: 'Recruiting Advantage:', text: '"We provide exclusive leads to every agent" becomes your #1 recruiting pitch' },
                { title: 'Market Dominance:', text: 'Capture buyer/seller intent before Zillow, Redfin, or Compass even know they\'re searching' },
                { title: 'Time Back to Leadership:', text: 'Stop manually vetting leads or babysitting agent follow-up—the machine runs 24/7' },
                { title: 'Scale Without Chaos:', text: 'Expand into new zip codes, property types (luxury, investment), or markets without rebuilding from scratch' }
              ].map((benefit, idx) => (
                <div key={idx} className={`rounded-2xl p-6 flex items-start gap-3 ${
                  isDarkMode ? 'bg-black/40 border border-white/10' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                    <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>{benefit.title}</strong> {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br rounded-3xl p-12 text-center ${
            isDarkMode
              ? 'from-purple-500/30 to-blue-500/30 border border-white/20'
              : 'from-purple-500/40 to-blue-500/40 border border-purple-300'
          }`}>
            <p className="text-3xl font-semibold leading-snug mb-5">
              &quot;We went from losing 4 agents in Q1 to recruiting 6 new producers in Q2—because every agent now gets 15-20 qualified buyer leads per month, automatically.&quot;
            </p>
            <p className="text-white/70 mb-8">
              — Managing Broker, Boutique Residential Brokerage (34 agents)
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  -67%
                </div>
                <div className="text-white/70 text-sm mt-2">Agent Turnover</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  +42%
                </div>
                <div className="text-white/70 text-sm mt-2">Transactions Closed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  18-22
                </div>
                <div className="text-white/70 text-sm mt-2">Leads per Agent/Month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-3xl p-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why the Lead Machine™ Is Different
            </h2>
            <p className="text-lg text-white/80 mb-4 max-w-4xl">
              Unlike Zillow Premier Agent, Realtor.com leads, or Facebook ad agencies, we integrate the Lead Machine™ directly into <strong className="text-white">your</strong> CRM, inbox, and agent workflows. Every conversation, tag, and follow-up lives inside your environment—not someone else&apos;s portal—and we keep it running on flow, not friction.
            </p>
            <p className="text-lg text-white/70">
              These are <strong>exclusive leads</strong>—not shared with 5 other agents. Your brokerage owns the relationship from first search to closing table.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing with Builder */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Transparent Pricing That Scales With You</h2>
              <p className="text-lg text-white/80 mb-3">
                Start at <span className="text-2xl font-semibold text-blue-300">$1,200/month</span> for the Core plan. Need more volume? Scale up as your brokerage grows.
              </p>
              <p className="text-white/70">
                One-time setup fee: <span className="text-white font-semibold">$3,500</span> (includes full buildout, CRM integration, and agent training)
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
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
                    <p className="mt-2 text-white/60 text-sm">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <p className="text-4xl font-semibold text-white">{plan.price}</p>
                    <p className="text-white/70 text-sm">{plan.cadence}</p>
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
                {isBuilderOpen ? 'Hide Plan Finder' : 'Find Your Perfect Plan'}
              </button>
              <p className="text-sm text-white/60">Answer 3 quick questions and we&apos;ll recommend the right Lead Machine™ package for your brokerage.</p>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/20 to-transparent p-5 text-center">
              <div className="inline-flex items-center justify-center gap-3 text-white/90 text-sm sm:text-base">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <p className="font-medium">90-Day ROI Guarantee: If the system doesn&apos;t generate enough closings to cover its cost in 90 days, we keep it running at no service fee until it does.</p>
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
                        <h3 className="mt-2 text-3xl font-semibold text-white">{activePlanName}</h3>
                        <p className="mt-3 text-white/70 text-sm">
                          {manualPlanChoice
                            ? 'We locked in your selection—scroll up to the pricing cards if you want the full breakdown.'
                            : `Based on your answers, the ${activePlanName} will keep your pipeline on pace.`}
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
                            onClick={scrollToDemo}
                            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30"
                          >
                            Book my free demo
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
                          <p className="text-sm font-semibold text-white/80">What&apos;s inside {activePlanName}</p>
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
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-5">
            {[
              { question: '"Our agents don\'t follow up on leads"', answer: 'We nurture leads for 7-30 days before routing, so agents only get warm, engaged prospects who\'ve already raised their hand. We also surface agent response-time metrics so you can coach low performers.' },
              { question: '"We already pay for Zillow Premier Agent"', answer: 'TrueFlow captures intent BEFORE prospects hit Zillow—these are exclusive leads, not shared with 5 other agents. You own the relationship from day one.' },
              { question: '"Our CRM is a mess"', answer: 'We clean, organize, and standardize your data as part of setup—then keep it flowing correctly with tags, stages, and automated tasks. No more spreadsheet chaos.' },
              { question: '"This sounds expensive"', answer: 'One extra closing per month pays for the entire system. We guarantee ROI in 90 days or keep running at no service cost until you hit breakeven. The real cost is losing another agent to a competitor with better lead flow.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                <p className="text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-white/10 rounded-3xl p-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs uppercase tracking-[0.32em] mb-6">
              READY?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-6">
              Stop Chasing Agents. Start Retaining Them.
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Activate the TrueFlow Lead Machine™ and give every agent the lead flow top producers take for granted—starting in 14 days.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-5">
              <button
                onClick={scrollToDemo}
                className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all"
              >
                Book Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/15 hover:border-white/30 transition-all">
                Download Case Study
              </button>
            </div>
            <div className="mt-5">
              <span className="text-white/70">One strategy session away from predictable deal flow.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="book-demo-calendar" className="py-20 px-4 scroll-mt-24">
        <style jsx global>{`
          #book-demo-calendar > div > div:last-child:not(.space-y-4):not(.calendar-wrapper) {
            display: none !important;
          }
          #msgsndr-calendar {
            display: block !important;
            width: 100% !important;
            min-height: 520px !important;
          }
          #book-demo-calendar .calendar-wrapper ~ * {
            display: none !important;
          }
        `}</style>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-black/60 p-8 sm:p-10">
            <div className="space-y-4 text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">Lock in Your Free Demo</h3>
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
                onLoad={() => {
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
