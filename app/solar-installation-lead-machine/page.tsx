'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import { useTheme } from '../components/ThemeProvider'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  Gauge,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sun,
  Target,
  Zap
} from 'lucide-react'

const workflow = [
  {
    title: 'Track qualified solar intent',
    description: 'Monitors search, marketplace, and permit data for homeowners researching solar savings or following energy news in your service zip codes.',
    icon: Sun
  },
  {
    title: 'Score roof + financing fit',
    description: 'Enriches every lead with property records, roof orientation, usage estimates, and incentive eligibility so reps know exactly who to call first.',
    icon: Gauge
  },
  {
    title: 'Launch human AI outreach',
    description: 'AI texts and emails in a conversational tone—educating homeowners about ROI, incentives, and time-to-install while building trust.',
    icon: MessageCircle
  },
  {
    title: 'Qualifier handoff',
    description: 'Captures bill amount, home ownership status, decision timeline, and credit readiness, then routes hot leads to the right closer.',
    icon: Target
  },
  {
    title: 'Book consultations automatically',
    description: 'Syncs with Calendly, GoHighLevel, or your CRM calendars so prospects pick a slot without back-and-forth.',
    icon: CalendarCheck
  },
  {
    title: 'Follow-through + nurture',
    description: 'Keeps prospects warm with financing reminders, installation videos, and referral requests until the job is scheduled.',
    icon: ShieldCheck
  }
]

const features = [
  {
    title: 'AI Booking Machine',
    description: 'Combines solar-specific playbooks with automation to move homeowners from curiosity to confirmed consultation—no manual chasing.',
    icon: Zap
  },
  {
    title: 'Homeowner Signal Radar',
    description: 'Spots net-metering conversations, utility rate hikes, and roofing projects that signal perfect timing for solar upgrades.',
    icon: Sun
  },
  {
    title: 'Permit + Incentive Intelligence',
    description: 'Maps local rebates, federal tax credits, and HOA rules into every pitch so your team shows up prepared.',
    icon: Leaf
  },
  {
    title: 'AI Conversation Agent',
    description: 'Answers questions about battery backups, payback periods, and warranty terms using your brand tone 24/7.',
    icon: MessageCircle
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Drops every reply into GoHighLevel, HubSpot, or your in-house CRM with tasks, tags, and appointments already scheduled.',
    icon: CalendarCheck
  },
  {
    title: 'On-Site Readiness Checks',
    description: 'Auto-sends roof snapshot requests, meter photos, and bill uploads so crews show up with everything they need.',
    icon: CheckCircle
  },
  {
    title: 'Referral Amplifier',
    description: 'After installation, nudges happy homeowners to leave reviews and refer neighbors—feeding the pipeline without extra ad spend.',
    icon: ShieldCheck
  },
  {
    title: 'Performance Dashboard',
    description: 'See ad spend vs. booked consultations, close rate by territory, and days-to-install in one live view.',
    icon: Gauge
  }
]

const stats = [
  { label: 'Consultations booked in 14 days', value: '34', detail: 'average per territory' },
  { label: 'Response speed', value: '2m', detail: 'AI replies to new inquiries' },
  { label: 'Lead-to-appointment lift', value: '+63%', detail: 'vs. manual follow-up' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 new homeowner prospects per day (~280/month)',
      'Enhanced property + contact data',
      'AI-driven outreach in your brand voice',
      'CRM integration & automation setup',
      'Weekly optimization & deliverability management',
      'Performance dashboard & analytics'
    ]
  },
  {
    title: 'Growth',
    price: '$1,560',
    cadence: 'every 28 days',
    bullets: [
      '30 new homeowner prospects per day (~840/month)',
      'Everything in Starter, plus:',
      'Priority optimization & monitoring',
      'A/B testing on messaging & sequences',
      'Dedicated account check-ins',
      'Advanced targeting & segmentation'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ new homeowner prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-campaign management',
      'White-glove optimization service',
      'Custom integrations & workflows',
      'Quarterly strategy sessions'
    ]
  }
]

const faqs = [
  {
    q: 'Is this just another lead list?',
    a: 'No. The Solar Lead Machine tracks live homeowner behavior, engages with AI, qualifies fit, and books the consultation into your calendar before a rep follows up.'
  },
  {
    q: 'Can we use our existing CRM?',
    a: 'Yes. We integrate with GoHighLevel, HubSpot, Salesforce, JobNimbus, or your internal system—keeping every task, tag, and automation in sync.'
  },
  {
    q: 'What about financing questions?',
    a: 'AI responses include tailored savings breakdowns, incentives, and lender options you approve, so homeowners feel confident before the first call.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most solar partners go live within 14 days. We map territories, train the AI voice, and connect calendars during week one.'
  }
]

export default function SolarInstallationLeadMachine() {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>Loading...</p>
      </div>
    )
  }

  return (
    <div className={`min-h-screen overflow-hidden transition-colors ${
      isDarkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <ParticleBackground particleCount={45} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                isDarkMode ? 'border border-white/20 text-white/70' : 'border border-gray-300 text-gray-600'
              }`}>
                Solar Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Solar Installation Companies: Your AI booking machine.
              </h1>
              <p className="text-2xl text-emerald-500 font-semibold mt-4">
                AI finds homeowners interested in solar and books consultations automatically.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Inspired by our top-performing ad campaign, this playbook turns every territory into a self-filling calendar—no door knocking, no endless callbacks, just qualified homeowners ready for proposals.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-black font-semibold shadow-[0_20px_60px_rgba(249,115,22,0.45)] hover:translate-y-[-2px] transition-all"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:text-white hover:bg-white/5'
                      : 'border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <div key={stat.label} className={`rounded-2xl p-4 ${
                    isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
                  }`}>
                    <p className="text-3xl font-bold text-emerald-500">{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                    {idx === 0 && (
                      <p className={`text-[10px] mt-3 uppercase tracking-widest ${isDarkMode ? 'text-white/40' : 'text-gray-400'}`}>Based on blended customer averages</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 backdrop-blur ${
              isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <div className={`bg-gradient-to-br rounded-2xl border p-6 ${
                isDarkMode
                  ? 'from-emerald-500/10 to-cyan-500/10 border-white/10'
                  : 'from-emerald-500/20 to-cyan-500/20 border-emerald-200'
              }`}>
                <p className={`text-sm uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Flow snapshot</p>
                <h3 className="text-3xl font-semibold mt-4">Booked consultations</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>AI conversations ➜ qualified homeowner ➜ confirmed slot.</p>
                <div className="mt-6 space-y-3">
                  {['Bill uploaded · 2:14 PM', 'Financing approved · 3:02 PM', 'Roof inspection scheduled · 4:18 PM'].map(item => (
                    <div key={item} className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className={`text-xs mt-6 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  ROI Guarantee: If the system doesn't cover its monthly cost in 90 days, we keep it running at no service fee until it does.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="py-20 px-4">
          <div className={`max-w-6xl mx-auto rounded-3xl p-10 ${
            isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Solar Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Every step mirrors the ad promise: AI handles discovery, conversation, and booking while your installers prep for the roof.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div key={item.title} className={`flex items-start gap-4 rounded-2xl p-6 ${
                  isDarkMode ? 'bg-black/40 border border-white/10' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className={`mt-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className={`uppercase tracking-[0.4em] text-xs ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Components</p>
            <h2 className="text-4xl font-bold mt-4">Everything crews need before they roll a truck</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Each component comes pre-built, solar-specific, and connected to your sales ops stack.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div key={feature.title} className={`rounded-3xl p-8 transition-colors ${
                isDarkMode
                  ? 'bg-white/5 border border-white/10 hover:border-emerald-400/40'
                  : 'bg-white border border-gray-200 hover:border-emerald-400 shadow-lg'
              }`}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <div className={`max-w-6xl mx-auto bg-gradient-to-br rounded-3xl border p-10 text-center ${
            isDarkMode
              ? 'from-emerald-500/15 to-cyan-500/15 border-white/20'
              : 'from-emerald-500/30 to-cyan-500/30 border-emerald-300'
          }`}>
            <p className="text-3xl font-semibold mb-4">Proof from active Solar Lead Machine deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              These are aggregated performance metrics pulled from anonymized partner dashboards—no fabricated testimonials, just transparent data.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-5xl font-bold text-emerald-500">+41%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Average close-rate lift once AI follow-up replaces manual chasing
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold text-emerald-500">12d</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Median time from first inquiry to booked consultation across territories
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold text-emerald-500">4.7⭐</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Post-install review average for jobs sourced via Lead Machine automations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Pricing & engagement models</h2>
            <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
              <p className={isDarkMode ? 'text-white/80 text-lg' : 'text-gray-700 text-lg'}>
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>$750 every 28 days</span> for 10 homeowner-ready conversations per day. Need more volume? Add packs of 10 per day as you scale.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                One-time setup fee: <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$2,000</span> (includes full buildout, CRM integration, and solar-specific campaign optimization).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map(plan => (
                <div key={plan.title} className={`rounded-3xl p-8 flex flex-col ${
                  isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
                }`}>
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/sign-up"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                      isDarkMode
                        ? 'border-white/30 hover:bg-white/10'
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    Book a call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className={`uppercase tracking-[0.35em] text-xs ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Questions</p>
            <h2 className="text-4xl font-bold mt-4">Everything solar teams ask before they switch on automation</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div key={item.q} className={`rounded-3xl p-6 ${
                isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
              }`}>
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4">
          <div className={`max-w-5xl mx-auto bg-gradient-to-br rounded-[40px] p-14 text-center ${
            isDarkMode
              ? 'from-emerald-500/40 to-cyan-500/30 border border-white/10'
              : 'from-emerald-500/50 to-cyan-500/40 border border-emerald-300'
          }`}>
            <p className={`uppercase tracking-[0.4em] text-xs ${isDarkMode ? 'text-white/80' : 'text-emerald-900'}`}>Ready?</p>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Turn every sunny roof into a booked consultation.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>Flip on the Solar Lead Machine and let AI do the hunting, nurturing, and scheduling while your team focuses on installs.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/sign-up"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${
                  isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
                }`}
              >
                Schedule a solar strategy session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lead-machine"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${
                  isDarkMode ? 'border-white/40 text-white' : 'border-gray-700 text-gray-900'
                }`}
              >
                Explore the full Lead Machine
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
