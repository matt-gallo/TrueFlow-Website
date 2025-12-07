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
  ClipboardCheck,
  Layers,
  MessageSquare,
  Palette,
  Ruler,
  Sparkles,
  Target,
  Users
} from 'lucide-react'

const workflow = [
  {
    title: 'Spot active design projects',
    description: 'Tracks real-estate listings, permit filings, Pinterest activity, and builder chatter to surface homeowners planning remodels and refreshes.',
    icon: Target
  },
  {
    title: 'Enrich with style + budget cues',
    description: 'Adds property value, room types, timeline, and aesthetic inspiration so you see the whole brief before a call.',
    icon: Palette
  },
  {
    title: 'Deploy AI studio assistant',
    description: 'AI responds to contact forms, DMs, and referrals using your tone—sharing portfolio links, onboarding guides, and pricing anchors instantly.',
    icon: MessageSquare
  },
  {
    title: 'Capture project scope automatically',
    description: 'Collects floor plans, measurements, favorite looks, and decision makers while flagging fit and urgency.',
    icon: Ruler
  },
  {
    title: 'Book consultations and walkthroughs',
    description: 'Syncs with Calendly, Acuity, or GoHighLevel to drop serious prospects onto your calendar with prep instructions.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture until install day',
    description: 'Sends mood boards, case studies, and progress updates so clients stay confident through sourcing and install.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'Design Inquiry Radar',
    description: 'Finds remodels, move-ins, and commercial refreshes the moment intent appears—no more guessing when the next project hits.',
    icon: Sparkles
  },
  {
    title: 'AI Studio Desk',
    description: 'Replies to email, SMS, and social questions 24/7 while sounding like your project manager.',
    icon: MessageSquare
  },
  {
    title: 'Scope Builder',
    description: 'Interactive forms pull square footage, room types, and inspiration links so walkthroughs are never blind.',
    icon: ClipboardCheck
  },
  {
    title: 'Portfolio Routing',
    description: 'Automatically shares relevant lookbooks or past installs tailored to the prospect’s taste profile.',
    icon: Layers
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with GoHighLevel, HubSpot, Dubsado, or Airtable so tags and stages always match reality.',
    icon: CalendarCheck
  },
  {
    title: 'Vendor & Trade Coordination',
    description: 'Loops in contractors, installers, or stylists with shared timelines and reminders.',
    icon: Users
  },
  {
    title: 'Aftercare + Referral Engine',
    description: 'Keeps finished clients warm with seasonal styling tips, maintenance reminders, and referral nudges.',
    icon: CheckCircle
  },
  {
    title: 'Performance Dashboard',
    description: 'Live view of inquiries, consults, source channels, and project pipeline value.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'Consultations booked in 30 days', value: '39', detail: 'avg. per studio' },
  { label: 'Reply time on new inquiries', value: '90s', detail: 'via AI assistant' },
  { label: 'Hours saved weekly', value: '18', detail: 'from inbox + follow-up' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 design-ready prospects per day (~280/month)',
      'Enhanced contact + property data',
      'AI messaging tuned to your brand voice',
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
      '30 prospects per day (~840/month)',
      'Everything in Starter, plus:',
      'Priority optimization & monitoring',
      'A/B testing on offers + lookbooks',
      'Dedicated success check-ins',
      'Advanced segmentation (residential vs. commercial)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-market routing & showroom queues',
      'White-glove optimization + creative testing',
      'Custom integrations & procurement ops',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Can the AI speak like our studio?',
    a: 'We ingest your brand guidelines, proposals, and project recaps so every message sounds on-tone and on-brief.'
  },
  {
    q: 'Will you work existing lead lists?',
    a: 'Yes. Import contacts from Dubsado, spreadsheets, or past events and we re-activate them with fresh campaigns.'
  },
  {
    q: 'Do homeowners stay exclusive to us?',
    a: 'Absolutely. Each conversation routes to your CRM only—no shared inquiries or marketplaces.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most studios go live in 10–14 days with voice training, automation buildout, and calendar hookups.'
  }
]

export default function InteriorDesignerLeadMachinePage() {
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
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-teal-50 text-gray-900'}>
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
                    : 'border border-teal-200 text-teal-700 bg-white'
                }`}
              >
                Interior Designer Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Interior designers: your AI studio coordinator.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>
                AI finds project-ready homeowners, answers questions instantly, and books consultations on autopilot.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Built from our top-performing installs for residential and boutique commercial studios, this playbook keeps your team designing instead of chasing cold leads or inbox threads.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 via-emerald-500 to-blue-500 text-white font-semibold shadow-[0_15px_40px_rgba(14,165,233,0.4)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-teal-200 text-teal-700 hover:bg-white'
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
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-teal-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-teal-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/interior designer-ad-version-a.png"
                alt="Interior designer lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-teal-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-teal-500/15 to-blue-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-teal-700'}`}>Studio feed</p>
                <h3 className="text-3xl font-semibold mt-4">Consults booked</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI concierge ➜ qualified homeowner ➜ consultation scheduled.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Kitchen + living refresh • 9:00 AM', 'New-build furnishing plan • 12:15 PM', 'Boutique office makeover • 3:30 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`} />
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
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-teal-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Interior Designer Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Every touchpoint is curated—from first inquiry to install day follow-up.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-teal-50 border-teal-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                  <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-teal-300' : 'text-teal-700'}`} />
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
            <h2 className="text-4xl font-bold mt-4">Everything your studio ops needs</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Modular automations tuned for both residential + commercial design pipelines.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-teal-300/50' : 'bg-white border-teal-100 hover:border-teal-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-400" />
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
                ? 'bg-gradient-to-br from-teal-500/15 to-blue-500/15 border-white/20'
                : 'bg-gradient-to-br from-teal-100 to-blue-100 border-teal-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active design studio deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Aggregated across remodelers, staging teams, and commercial boutiques.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>+58%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Increase in booked walkthroughs</p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>4.6/5</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Average client experience rating post-automation</p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>2.7x</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Pipeline velocity lift</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Pricing & engagement models</h2>
            <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-teal-200' : 'text-teal-700'}`}>$750 every 28 days</span> for 10 design-ready conversations per day.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                One-time setup fee: <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$2,000</span> (includes full buildout, CRM integration, and campaign optimization).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map(plan => (
                <div
                  key={plan.title}
                  className={`rounded-3xl p-8 flex flex-col border ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-teal-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-teal-300' : 'text-teal-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-teal-200 hover:bg-teal-50'
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
            <h2 className="text-4xl font-bold mt-4">Everything designers ask before turning on automation</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-teal-100 shadow-lg'
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
                ? 'bg-gradient-to-br from-teal-500/40 to-blue-500/30 border-white/10'
                : 'bg-gradient-to-br from-teal-200 to-blue-200 border-teal-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-teal-300 text-teal-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep your design calendar full without sacrificing craft.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Turn on the Interior Designer Lead Machine and let AI concierge service handle discovery, nurture, and scheduling while you design the reveal.
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
                ? 'bg-gradient-to-br from-teal-500/15 to-blue-500/15 border-white/10'
                : 'bg-gradient-to-br from-teal-100 to-blue-100 border-teal-200'
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
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-teal-200 bg-white'
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
