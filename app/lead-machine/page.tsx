'use client'

import { useEffect } from 'react'
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

const problems = [
  'Rely on referrals or luck instead of a daily stream of new conversations',
  'Spend hours chasing dead leads, ghosted DMs, or low-intent lists',
  "Piece together tools that don’t sync — data lives everywhere except the CRM",
  'Lose prospects after the first reply because follow-up isn’t automated',
  'Stay in constant catch-up mode instead of scaling what already works'
]

const propositionSteps = [
  'Pinpoints buyers searching for your offer within the last 7 days',
  'Drops enriched contact data directly into your CRM or pipeline',
  'Starts natural email and SMS conversations instantly',
  'Qualifies intent, routes hot leads, and books time on your calendar'
]

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
  'Stop guessing where tomorrow’s opportunities come from — the pipeline stays full.',
  'Start your day with qualified, pre-warmed prospects already on the calendar.',
  'Get back hours of focus time each week while the machine runs 24/7.',
  'Know exactly what’s working with live data on outreach, replies, and bookings.',
  'Scale into new offers or markets without rebuilding your lead engine from scratch.'
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
    value: 'Most Popular',
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

export default function LeadMachinePage() {
  const { isDarkMode } = useTheme()
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('book-demo-calendar')
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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

  return (
    <div
      className={`min-h-screen overflow-hidden lead-machine-page ${
        isDarkMode ? 'theme-dark bg-black text-white' : 'theme-light bg-gray-50 text-gray-900'
      }`}
    >
      {/* LeadConnector booking widget script */}
      <Navigation />

      <main className="pt-28 pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1d929e]/20 via-emerald-600/10 to-cyan-500/10 blur-3xl" aria-hidden />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs sm:text-sm uppercase tracking-[0.32em]">
                  <CircleDashed className="h-4 w-4" /> Lead Machine™
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                  Find. Engage. Qualify. Automatically.
                </h1>
                <p className="mt-6 text-xl sm:text-2xl text-white/80">
                  TrueFlow Lead Machine™ is a done-for-you AI prospecting system for coaches, agencies, and service founders.
                </p>
                <p className="mt-6 text-lg text-white/70">
                  We track live intent, start human conversations, and hand you booked calls before you log in.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1d929e] to-emerald-500 text-lg font-semibold hover:shadow-2xl hover:shadow-[#1d929e]/30 transition-all"
                  >
                    Book a Demo
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-4 text-sm text-white/60">
                  <ShieldCheck className="inline h-4 w-4 mr-1 text-blue-300 align-text-bottom" /> ROI Assurance: if you don't recoup your setup fee in 90 days, we keep the machine running at no service cost until you do.
                </p>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/trueflow-lead-machine-banner.png"
                    alt="TrueFlow Lead Machine Banner"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-lg font-semibold text-white">Inside the Machine</h3>
                  <ul className="mt-4 space-y-3 text-white/70 text-sm sm:text-base">
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Daily scrape of buyers who searched your keywords within the last 7 days.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Enriched firmographic filters — revenue, location, tech stack, job role, and more.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Natural conversation starters tuned to your voice so replies feel human, not scripted.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Automated routing into GoHighLevel (or your CRM) with stages, tasks, and alerts.</span></li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1d929e]/20 to-emerald-500/20 p-6">
                  <p className="text-sm text-white/80">"Wake up to inboxes full of <span className="text-[#1d929e]">Interested — tell me more</span> replies. That's when you know the machine is doing its job."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Why Most Pipelines Leak</h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 max-w-4xl mx-auto">
            <Image
              src="/trueflow-lead-machine-pipelines.png"
              alt="Lead Machine Pipeline - Where Leads Leak"
              width={900}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-white font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">You don’t have a leads problem—you have a leak problem.</p>
              <h3 className="mt-3 text-2xl font-medium text-white">The issue isn’t traffic — it’s traction.</h3>
              <p className="mt-3 text-white/70">Here’s where good leads quietly fall through the cracks:</p>
              <ul className="mt-6 space-y-3 text-white/70">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-blue-400" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/60">
                DIY automations or list-buying rarely fix this. They add more tools, more manual effort, and still no predictable flow.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1d929e]/25 via-emerald-600/20 to-teal-500/10 border border-white/20 rounded-3xl p-8">
              <h3 className="text-xl font-semibold">Our Promise</h3>
              <p className="mt-4 text-white/80">
                We build the machine inside your business — tailored targeting, live intent data, outreach, nurture, and reporting — so your calendar fills itself while you focus on delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">How the Machine Runs</h2>
                <p className="mt-3 text-white/70">TrueFlow handles the first 90% of your sales process, then hands you intent-qualified conversations:</p>
              </div>
              <BadgeCheck className="h-12 w-12 text-blue-400" />
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/trueflow-lead-machine-funnel-banner.png"
                alt="Lead Machine Funnel Flow"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {propositionSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d929e]/20 text-lg font-semibold text-[#1d929e]">
                    {index + 1}
                  </span>
                  <p className="text-white/80">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">In plain language:</h3>
              <ul className="mt-4 space-y-3 text-white/75">
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>No manual prospecting. The Lead Machine™ pinpoints people searching for what you sell right now.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>No messy spreadsheets. We enrich every record with contact info, revenue, tech stack, and buying signals.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>No disconnected tools. Leads drop straight into GoHighLevel, Salesforce, HubSpot—wherever you already work.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>No cold, spammy campaigns. Conversations sound human, stay active, and escalate interest automatically.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>No chasing. Once they raise their hand, the system routes, scores, and books them onto your calendar.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#1d929e]/25 via-emerald-600/20 to-gray-900/40 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why it’s Different</h2>
            <p className="mt-6 text-lg text-white/80 max-w-3xl">
              Unlike list-buying services or cold-email agencies, we integrate the Lead Machine™ directly into <span className="text-white font-medium">your</span> CRM, inbox, and automations. Every conversation, tag, and follow-up lives inside your environment—not someone else’s portal—and we keep it running on flow, not friction.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col gap-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold">The Machine, Piece by Piece</h2>
              <p className="mt-4 text-white/70">
                Every component is done-for-you and tuned so the entire system runs like a single operator — only faster.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#1d929e]/40">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d929e]/20 text-[#1d929e]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="mt-4 text-white/70">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">What You Gain</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-black/40 border border-white/10 px-5 py-4">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-white/75">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#1d929e]/25 via-emerald-600/20 to-slate-900/40 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why You Can’t Wait</h2>
            <p className="mt-6 text-lg text-white/80">
              Every day your competitors’ inboxes fill with conversations yours should have started. Waiting another week means another week of lost opportunities.
            </p>
            <p className="mt-6 text-lg text-white/80">
              The Lead Machine™ blends relationship-first selling with automation at scale—no gimmicks, no spray-and-pray, just intelligent outreach that respects your brand and multiplies your time.
            </p>
            <p className="mt-6 text-lg text-white/90 font-medium">
              When you see your calendar filling back up, you’ll know we’ve taken their spot.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">What's Included When You Activate</h2>
            <ol className="mt-6 space-y-4">
              {offerStack.map((item, index) => (
                <li key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">{index + 1}</span>
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
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#1d929e]/20 via-emerald-600/20 to-teal-900/30 p-8 sm:p-12">
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
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/trueflow-lead-machine-who-it-works-for.png"
                alt="Who Lead Machine Works For"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
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
                Start at <span className="text-2xl font-semibold text-[#1d929e]">$750 every 28 days</span> for 10 leads/day. Need more volume? Add packs of 10 leads/day as you scale.
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
                      ? 'border-[#1d929e]/50 bg-gradient-to-br from-[#1d929e]/10 via-emerald-500/10 to-black/40 ring-2 ring-[#1d929e]/30'
                      : 'border-white/10 bg-black/40'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                      {plan.value && (
                        <span className="px-3 py-1 rounded-full bg-[#1d929e]/20 text-[#1d929e] text-xs font-semibold uppercase tracking-wider border border-[#1d929e]/30">
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

            <div className="mt-10 rounded-2xl border border-[#1d929e]/30 bg-gradient-to-br from-[#1d929e]/20 via-emerald-500/20 to-transparent p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">90-Day ROI Guarantee</h3>
                  <p className="mt-2 text-white/80">
                    If the system doesn't generate enough closings to cover its cost in 90 days, we keep it running at no service fee until it does.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-semibold text-white">Need a custom plan?</h3>
              <p className="mt-3 text-white/70 max-w-3xl mx-auto">
                Every business is different. Book a demo and we'll build a plan tailored to your market, volume needs, and growth goals.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d929e]/25 via-emerald-600/25 to-black/60 p-10 sm:p-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 uppercase tracking-[0.35em] text-xs">Ready?</span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold">Stop chasing. Start attracting.</h2>
            <p className="mt-4 text-lg text-white/80">
              Activate the TrueFlow Lead Machine™ and see your first qualified leads land in your inbox within days.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={scrollToCalendar}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1d929e] to-emerald-500 text-lg font-semibold hover:shadow-2xl hover:shadow-[#1d929e]/30 transition-all"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-4 text-sm text-white/60">You're one demo away from a self-filling pipeline.</p>
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
              min-height: 900px !important;
            }

            /* Hide any direct text content after calendar wrapper */
            #book-demo-calendar .calendar-wrapper ~ * {
              display: none !important;
            }
          `}</style>
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#1d929e]/20 via-emerald-600/20 to-black/60 p-8 sm:p-10">
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
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '900px' }}
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
