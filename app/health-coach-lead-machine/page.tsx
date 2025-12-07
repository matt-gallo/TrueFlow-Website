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
  Droplet,
  Heart,
  MessageSquare,
  Sprout,
  Target,
  Users
} from 'lucide-react'

const workflow = [
  {
    title: 'Spot high-intent wellness seekers',
    description: 'Tracks search intent, podcast mentions, and community groups for people asking about metabolic health, hormones, and sustainable weight loss.',
    icon: Target
  },
  {
    title: 'Enrich with habits + readiness',
    description: 'Layers lifestyle goals, program budget, preferred coaching format, and timeline so you only talk to aligned clients.',
    icon: Sprout
  },
  {
    title: 'Launch AI accountability coach',
    description: 'AI responds to DMs, opt-ins, and referrals with warm, human tone—sharing proof, answering objections, and nurturing momentum.',
    icon: MessageSquare
  },
  {
    title: 'Capture intake + commitment',
    description: 'Collects wellness history, nutrition preferences, labs, and desired transformations before any clarity call.',
    icon: ClipboardCheck
  },
  {
    title: 'Auto-book breakthrough calls',
    description: 'Syncs with Calendly, SavvyCal, or GoHighLevel and drops qualified clients onto your calendar with prep notes.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture & ascend clients',
    description: 'Sends video check-ins, program roadmaps, and upgrade invites that keep cohorts full year-round.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'Wellness Lead Engine',
    description: 'Automation tuned for health coaches, functional practitioners, and holistic programs so you stay focused on transformations.',
    icon: Heart
  },
  {
    title: 'Intent & Community Radar',
    description: 'Finds Discord threads, FB groups, and newsletter replies where dream clients are already asking for help.',
    icon: Users
  },
  {
    title: 'AI Messaging Desk',
    description: 'Answers questions about protocols, labs, and pricing 24/7 while sounding like your head coach.',
    icon: MessageSquare
  },
  {
    title: 'Program Intake Forms',
    description: 'Gathers health history, labs, and commitment level so your calls start with real insight.',
    icon: ClipboardCheck
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with GoHighLevel, HubSpot, or Airtable so tags and automations stay aligned.',
    icon: CalendarCheck
  },
  {
    title: 'Community & Challenge Sequences',
    description: 'Runs launches, 21-day habits, or group challenges automatically to convert warm subscribers.',
    icon: Droplet
  },
  {
    title: 'Client Success Automations',
    description: 'Delivers reminders, milestone celebrations, and referral nudges without manual work.',
    icon: Sprout
  },
  {
    title: 'Performance Dashboard',
    description: 'Shows opt-ins, consults, enrollments, and MRR so you know exactly what’s working.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'Applications captured in 30 days', value: '52', detail: 'avg. across health programs' },
  { label: 'Enrollment rate lift', value: '34%', detail: 'after pre-qual intake' },
  { label: 'Time saved weekly', value: '16 hrs', detail: 'off DMs + follow-up' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 health coaching prospects per day (~280/month)',
      'Enhanced contact + lifestyle data',
      'AI messaging trained on your voice',
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
      'Priority optimization & testing',
      'Split-testing across hooks & offers',
      'Dedicated success check-ins',
      'Advanced segmentation (1:1 vs. group)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-coach routing + pods',
      'White-glove optimization + creative testing',
      'Custom integrations & fulfillment automations',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Will the AI stay compliant with our health claims?',
    a: 'Yes. We ingest your approved language and disclaimers so every message stays on-label and escalates anything clinical.'
  },
  {
    q: 'Can you nurture our existing list or challenge participants?',
    a: 'Upload your ESP/CRM segments and we reactivate them with wins, case studies, and program invites.'
  },
  {
    q: 'Do we keep the conversations exclusive?',
    a: 'All leads are exclusive to your practice—no shared lists or marketplaces. Everything routes into your CRM only.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most health coaches go live within 10–14 days including voice calibration, funnel hookups, and automation testing.'
  }
]

export default function HealthCoachLeadMachinePage() {
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
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-emerald-50 text-gray-900'}>
      <ParticleBackground particleCount={34} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-emerald-200 text-emerald-700 bg-white'
                }`}
              >
                Health Coach Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Health coaches: your AI enrollment studio.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>
                AI finds transformation-ready clients, nurtures them daily, and books clarity calls automatically.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                No more juggling DMs, intake forms, and challenge launches manually. This playbook keeps your calendar full with clients obsessed with sustainable health and ready to invest.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 text-white font-semibold shadow-[0_15px_40px_rgba(16,185,129,0.4)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-emerald-200 text-emerald-700 hover:bg-white'
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
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/health-coach-ad-version-a.png"
                alt="Health coach lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-emerald-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-emerald-700'}`}>Program feed</p>
                <h3 className="text-3xl font-semibold mt-4">Consults secured</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI coach ➜ vetted client ➜ breakthrough call booked.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Hormone reset app • 9:20 AM', 'Gut health mentorship • 12:05 PM', 'Metabolic reset VIP • 3:10 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`} />
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
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Health Coach Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                From first DM to enrollment, every touch feels personal and nourishing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-emerald-50 border-emerald-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`} />
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
            <h2 className="text-4xl font-bold mt-4">Everything your enrollment team needs</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Tailored automations for 1:1 coaching, hybrid programs, and community-driven launches.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-emerald-300/50' : 'bg-white border-emerald-100 hover:border-emerald-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`} />
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
                ? 'bg-gradient-to-br from-emerald-500/15 to-teal-500/15 border-white/20'
                : 'bg-gradient-to-br from-emerald-100 to-teal-100 border-emerald-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active health coaching deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Aggregated across hormone, metabolic, and holistic habit programs.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>$142k</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Average new revenue in 60 days
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>88%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Show rate after automated prep
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>19</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Average ready-to-enroll calls per week
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Pricing & engagement models</h2>
            <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>$750 every 28 days</span> for 10 health-ready conversations per day.
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
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-emerald-200' : 'text-emerald-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-emerald-200 hover:bg-emerald-50'
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
            <h2 className="text-4xl font-bold mt-4">Everything health coaches ask before automating enrollment</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-lg'
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
                ? 'bg-gradient-to-br from-emerald-500/40 to-teal-500/30 border-white/10'
                : 'bg-gradient-to-br from-emerald-200 to-teal-200 border-emerald-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-emerald-300 text-emerald-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep clients on plan while pipeline fills itself.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Flip on the Health Coach Lead Machine and let AI handle discovery, nurture, and scheduling so you can coach.
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
                ? 'bg-gradient-to-br from-emerald-500/15 to-teal-500/15 border-white/10'
                : 'bg-gradient-to-br from-emerald-100 to-teal-100 border-emerald-200'
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
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-emerald-200 bg-white'
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

