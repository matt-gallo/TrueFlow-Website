'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import { useTheme } from '../components/ThemeProvider'
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle,
  Cpu,
  MessageSquare,
  Network,
  ShieldCheck,
  Signal,
  Sparkles,
  Workflow
} from 'lucide-react'

const workflow = [
  {
    title: 'Detect IT pain signals',
    description: 'Tracks hiring boards, tech-stack changes, SOC alerts, and review chatter to surface companies actively seeking better MSP support.',
    icon: Signal
  },
  {
    title: 'Enrich with environment data',
    description: 'Layers company size, compliance needs, tool stack, and contract renewals so reps see fit before outreach.',
    icon: Network
  },
  {
    title: 'Launch AI sales engineer',
    description: 'AI replies like your vCIO—fielding tickets, SLAs, cyber readiness, and budgeting questions instantly.',
    icon: MessageSquare
  },
  {
    title: 'Qualify projects + timelines',
    description: 'Captures end-user counts, current MSP issues, compliance frameworks, and urgency and routes hot accounts to your closers.',
    icon: Workflow
  },
  {
    title: 'Auto-book discovery calls',
    description: 'Syncs with HubSpot, Calendly, or GoHighLevel calendars to secure vCIO roadmapping sessions without back-and-forth.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture with IT roadmaps',
    description: 'Sends tailored case studies, security updates, and ROI calculators that keep buyers engaged until they sign.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'MSP Pipeline Engine',
    description: 'Finds SMB and mid-market accounts actively struggling with downtime, shadow IT, or compliance gaps.',
    icon: Sparkles
  },
  {
    title: 'Stack Intelligence Sync',
    description: 'Maps their cloud/security tools, ticket volume, and renewal dates so your pitch lands perfectly.',
    icon: Cpu
  },
  {
    title: 'AI Sales Engineer Desk',
    description: 'Responds within seconds to RFPs, scope questions, and “can you support our stack?” threads in your brand voice.',
    icon: MessageSquare
  },
  {
    title: 'Compliance & Security Automations',
    description: 'Auto sends SOC 2 packets, incident response primers, and onboarding docs when prospects ask.',
    icon: ShieldCheck
  },
  {
    title: 'Calendar + CRM Integration',
    description: 'Drops every conversation into HubSpot, ConnectWise, Salesforce, or GoHighLevel with the right tags.',
    icon: CalendarCheck
  },
  {
    title: 'Onboarding Workflow Kits',
    description: 'Pre-built sequences for discovery, proposal, onboarding, and QBR follow-up keep delivery tight.',
    icon: Workflow
  },
  {
    title: 'Referral + Partner Booster',
    description: 'Notifies MSP partners, vCIOs, and security vendors when deals progress to keep channels engaged.',
    icon: Network
  },
  {
    title: 'Live Ops Dashboard',
    description: 'See booked demos, pipeline value, win rates, and service line demand in one place.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'Demos booked in 30 days', value: '36', detail: 'avg. per MSP pod' },
  { label: 'Proposal win-rate lift', value: '29%', detail: 'with pre-qualified buyers' },
  { label: 'Response time to IT requests', value: '75s', detail: 'median AI reply' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 high-intent IT accounts per day (~280/month)',
      'Enhanced firmographic + stack data',
      'AI sales engineer messaging',
      'CRM & calendar integration',
      'Weekly optimization + deliverability management',
      'Performance dashboard'
    ]
  },
  {
    title: 'Growth',
    price: '$1,560',
    cadence: 'every 28 days',
    bullets: [
      '30 accounts per day (~840/month)',
      'Everything in Starter, plus:',
      'Priority optimization & monitoring',
      'Split-testing across industries & offers',
      'Dedicated success check-ins',
      'Advanced routing (by ARR or tool stack)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ accounts per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-market + partner routing',
      'White-glove optimization + creative testing',
      'Custom integrations & webhook automation',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Does the AI handle technical questions correctly?',
    a: 'We train it on your stack, SLAs, and security docs so replies feel like your senior engineer. Anything complex gets escalated instantly.'
  },
  {
    q: 'Will the leads be exclusive to our MSP?',
    a: 'Yes. Every conversation routes only to your CRM or PSA—no shared lists or marketplaces.'
  },
  {
    q: 'Can you re-engage dormant pipeline or lost deals?',
    a: 'Absolutely. Import past opportunities and we relaunch them with new security updates, incentives, or webinar invites.'
  },
  {
    q: 'How fast can we go live?',
    a: 'Most MSPs launch within 10–14 days including script training, CRM integrations, and compliance review.'
  }
]

export default function ItManagedServiceLeadMachinePage() {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode } = useTheme()
  const scrollToCalendar = () => {
    document.getElementById('book-demo-calendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black text-white/70' : 'bg-white text-gray-600'}`}>
        Loading...
      </div>
    )
  }

  return (
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-gray-900'}>
      <ParticleBackground particleCount={32} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-blue-200 text-blue-700 bg-white'
                }`}
              >
                IT Managed Service Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                MSPs: your AI sales engineer and pipeline builder.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                AI pinpoints in-market accounts, answers technical questions, and books discovery calls automatically.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Cut the cold list grind. This deployment watches for expiring MSP contracts, security scares, and infrastructure changes—then nurtures them with human-grade outreach until they hop on your calendar.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-semibold shadow-[0_15px_40px_rgba(59,130,246,0.35)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-blue-200 text-blue-700 hover:bg-white'
                  }`}
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {stats.map(stat => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl p-4 border ${
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-blue-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-blue-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/it-managed-service-ad-version-a.png"
                alt="IT managed service lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-blue-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-blue-700'}`}>Pipeline feed</p>
                <h3 className="text-3xl font-semibold mt-4">Discovery calls scheduled</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI engineer ➜ vetted account ➜ vCIO booked.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['25-seat SaaS org • 10:00 AM', 'Multi-site healthcare • 1:15 PM', 'Manufacturing vCIO review • 3:40 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`} />
                      <span className={isDarkMode ? 'text-white/80' : 'text-gray-700'}>{item}</span>
                    </div>
                  ))}
                </div>
                <p className={`text-xs mt-6 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  ROI Guarantee: If Lead Machine doesn’t cover its monthly cost in 90 days, we keep it running at no service fee until it does.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="py-20 px-4">
          <div className={`max-w-6xl mx-auto rounded-3xl p-10 border ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-blue-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the IT Managed Service Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Connects intent signals, technical conversations, and booked vCIO sessions without manual lifting.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-blue-50 border-blue-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`} />
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
            <p className={`uppercase tracking-[0.35em] text-xs ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Components</p>
            <h2 className="text-4xl font-bold mt-4">Everything your MSP revenue team needs</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Built for founders wearing sales hats and MSPs with full SDR pods alike.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-blue-300/50' : 'bg-white border-blue-100 hover:border-blue-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`} />
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <div
            className={`max-w-6xl mx-auto rounded-3xl border p-10 text-center ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border-white/20'
                : 'bg-gradient-to-br from-blue-100 to-indigo-100 border-blue-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active MSP deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Aggregate metrics from cybersecurity, cloud, and helpdesk-heavy managed service providers.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>+48%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>More qualified demos per month</p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>3.2x</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Increase in proposal acceptance</p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>14</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Average days from first touch to booked vCIO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Pricing & engagement models</h2>
            <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>$750 every 28 days</span> for 10 IT-ready conversations per day.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                One-time setup fee: <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$2,000</span> (includes full buildout, CRM/PSA integration, and campaign optimization).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map(plan => (
                <div
                  key={plan.title}
                  className={`rounded-3xl p-8 flex flex-col border ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-blue-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    Book a call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className={`uppercase tracking-[0.35em] text-xs ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Questions</p>
            <h2 className="text-4xl font-bold mt-4">Everything MSP founders ask before automating pipeline</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-blue-100 shadow-lg'
                }`}
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4">
          <div
            className={`max-w-5xl mx-auto rounded-[40px] p-14 text-center border ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-500/40 to-indigo-500/30 border-white/10'
                : 'bg-gradient-to-br from-blue-200 to-indigo-200 border-blue-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-blue-300 text-blue-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Let AI watch the tickets while you close the contracts.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Turn on the IT Managed Service Lead Machine and keep discovery calls rolling without burning your team out on cold lists.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button
                type="button"
                onClick={scrollToCalendar}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${
                  isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
                }`}
              >
                Lock in your walkthrough
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

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
          <div
            className={`max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 border ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border-white/10'
                : 'bg-gradient-to-br from-blue-100 to-indigo-100 border-blue-200'
            }`}
          >
            <div className="space-y-4 text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-semibold">Lock in Your Demo</h3>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                Spots for this week are limited—choose a time below to secure your Lead Machine™ walkthrough.
              </p>
            </div>
            <div
              className={`calendar-wrapper overflow-hidden rounded-2xl border ${
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-blue-200 bg-white'
              }`}
            >
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
                      const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT)
                      const nodesToRemove: Node[] = []
                      let node
                      while ((node = walker.nextNode())) {
                        const text = node.textContent || ''
                        if (text.includes('body {') || text.includes('background:') || text.includes('.lc-booking')) {
                          nodesToRemove.push(node)
                        }
                      }
                      nodesToRemove.forEach(n => n.parentNode?.removeChild(n))
                    }
                  }, 1000)
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

