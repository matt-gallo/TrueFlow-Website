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
  HeartPulse,
  MessageSquare,
  Ruler,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from 'lucide-react'

const workflow = [
  {
    title: 'Detect smile makeover intent',
    description: 'Monitors search spikes, dental forums, and Instagram saves for Invisalign®/braces research across your service area.',
    icon: Sparkles
  },
  {
    title: 'Layer in household + case fit',
    description: 'Adds age bracket, insurance type, referral source, and treatment priority so schedulers see readiness instantly.',
    icon: Users
  },
  {
    title: 'Launch AI treatment coordinator',
    description: 'AI replies to forms, DMs, and referrals in your tone—answering pricing, financing, and “does it hurt?” questions 24/7.',
    icon: MessageSquare
  },
  {
    title: 'Capture photos + diagnostics',
    description: 'Collects smile selfies, bite concerns, past dentist notes, and insurance cards before the consult.',
    icon: Ruler
  },
  {
    title: 'Auto-book exams & scans',
    description: 'Syncs with Cloud 9, Dolphin, or GoHighLevel calendars and drops serious leads onto your TCs’ schedule with prep instructions.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture until braces-on day',
    description: 'Sends visualizers, case studies, and reminder sequences that keep families excited until treatment starts.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'Orthodontic Booking Machine',
    description: 'Automation tuned for orthodontists and aligner studios—fills treatment chairs while your team focuses on care.',
    icon: Sparkles
  },
  {
    title: 'Intent Radar for Smiles',
    description: 'Finds school-age parents, adult cosmetic seekers, and surgical candidates actively searching for new orthodontists.',
    icon: Target
  },
  {
    title: 'AI Treatment Coordinator',
    description: 'Handles insurance FAQs, financing options, appliance timelines, and follow-ups like a trained TC.',
    icon: MessageSquare
  },
  {
    title: 'Case Intake Forms',
    description: 'Collects photos, stage, and referral info so doctors preview cases before the first visit.',
    icon: ClipboardCheck
  },
  {
    title: 'Calendar + PMS Sync',
    description: 'Integrates with Cloud 9, Orthotrac, Dolphin, or GoHighLevel so tags, tasks, and statuses align.',
    icon: CalendarCheck
  },
  {
    title: 'Family / School Campaigns',
    description: 'Runs segmented nurture for braces-ready teens, Invisalign adults, and multi-sibling promos automatically.',
    icon: Users
  },
  {
    title: 'Review & Referral Engine',
    description: 'Asks happy patients for selfie shoutouts, Google reviews, and dentist referrals without staff chasing.',
    icon: HeartPulse
  },
  {
    title: 'Performance Dashboard',
    description: 'Shows consult volume, show rate, case acceptance, and treatment revenue in real time.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'New consults booked in 30 days', value: '44', detail: 'average per ortho clinic' },
  { label: 'Case acceptance lift', value: '31%', detail: 'with pre-visit education' },
  { label: 'Response time to inquiries', value: '90s', detail: 'AI TC median reply' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 orthodontic prospects per day (~280/month)',
      'Enhanced contact + patient intent data',
      'AI TC copy tuned to your scripts',
      'CRM/PMS integration',
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
      'A/B testing across offers + audiences',
      'Dedicated success check-ins',
      'Advanced segmentation (teen vs. adult)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-location routing + referral pods',
      'White-glove optimization + creative testing',
      'Custom integrations & automation buildouts',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Can the AI follow HIPAA and office tone?',
    a: 'Yes. We ingest your compliance language, consent steps, and brand voice so every conversation feels on-label and secure.'
  },
  {
    q: 'Do you integrate with our practice software?',
    a: 'We connect with Cloud 9, Dolphin, Ortho2, GoHighLevel, and custom CRMs so consults, tags, and reminders stay synced.'
  },
  {
    q: 'Can you reactivate past patients or no-shows?',
    a: 'Upload past leads and we re-engage them with smile progress videos, treatment promos, and limited-time offers.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most orthodontic practices go live within 10–14 days including script training, PMS mapping, and calendar hookups.'
  }
]

export default function OrthodontistLeadMachinePage() {
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
      <ParticleBackground particleCount={38} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-cyan-200 text-cyan-700 bg-white'
                }`}
              >
                Orthodontist Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Orthodontists: your AI treatment coordinator.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>
                AI finds smile-seeking families, answers them instantly, and books new-patient exams automatically.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Built from top-performing dental campaigns, this playbook keeps your treatment coordinators focused on chairside experience while automation handles demand gen and follow-up.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white font-semibold shadow-[0_15px_40px_rgba(6,182,212,0.35)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-cyan-200 text-cyan-700 hover:bg-white'
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
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-cyan-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-cyan-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/orthodontist-ad-version-a.png"
                alt="Orthodontist lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-cyan-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-cyan-700'}`}>Case board</p>
                <h3 className="text-3xl font-semibold mt-4">Consults confirmed</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI TC ➜ qualified family ➜ exam scheduled.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Teen Invisalign start • 9:30 AM', 'Adult ceramic braces • 11:10 AM', 'Phase I consult • 2:40 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`} />
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
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-cyan-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Orthodontist Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Every touchpoint is white-glove—from first question to treatment day.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-cyan-50 border-cyan-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`} />
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
            <h2 className="text-4xl font-bold mt-4">Everything your ortho ops needs</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Modular automations built for braces, aligners, and mixed dentition programs.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-cyan-300/50' : 'bg-white border-cyan-100 hover:border-cyan-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`} />
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
                ? 'bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border-white/20'
                : 'bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active orthodontic deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Data blended across multi-location ortho practices and boutique aligner studios.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>+37%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Increase in case starts within 60 days
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>92%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Show rate after automated reminders + prep
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>$198k</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Added pipeline per location in 45 days
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
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>$750 every 28 days</span> for 10 treatment-ready conversations per day.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                One-time setup fee: <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$2,000</span> (includes full buildout, PMS integration, and campaign optimization).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map(plan => (
                <div
                  key={plan.title}
                  className={`rounded-3xl p-8 flex flex-col border ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-cyan-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-cyan-200' : 'text-cyan-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-cyan-200 hover:bg-cyan-50'
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
            <h2 className="text-4xl font-bold mt-4">Everything orthodontists ask before automating intake</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-cyan-100 shadow-lg'
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
                ? 'bg-gradient-to-br from-cyan-500/40 to-blue-500/30 border-white/10'
                : 'bg-gradient-to-br from-cyan-200 to-blue-200 border-cyan-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-cyan-300 text-cyan-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep new smiles flowing while your team focuses on care.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Turn on the Orthodontist Lead Machine and let AI concierge service nurture every inquiry into a booked case start.
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
                ? 'bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border-white/10'
                : 'bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-200'
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
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-cyan-200 bg-white'
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

