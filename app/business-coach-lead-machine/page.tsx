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
  Brain,
  CalendarCheck,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Target,
  Trophy,
  Users
} from 'lucide-react'

const workflow = [
  {
    title: 'Spot coaching demand signals',
    description: 'Tracks search intent, community chatter, and funnel traffic to find founders, creators, and execs actively asking for accountability or advisory support.',
    icon: Target
  },
  {
    title: 'Enrich with offer-fit intel',
    description: 'Layers revenue band, team size, avatar type, and buying timeline so you only chase prospects who can afford and implement your program.',
    icon: Brain
  },
  {
    title: 'Launch AI enrollment concierge',
    description: 'AI replies to DMs, forms, and waitlist requests in your brand voice—handling objections, sharing wins, and keeping interest warm 24/7.',
    icon: MessageSquare
  },
  {
    title: 'Capture goals + readiness',
    description: 'Collects transformation priorities, current bottlenecks, budget confirmation, and decision authority before any clarity call.',
    icon: Sparkles
  },
  {
    title: 'Auto-book clarity calls',
    description: 'Syncs with Calendly, SavvyCal, or GoHighLevel to drop serious prospects directly into your calendar with prep instructions attached.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture & ascend',
    description: 'Sends tailored case studies, testimonials, and payment plan prompts that move leads into group, mastermind, or certification tracks.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'Coach Enrollment Machine',
    description: 'Automation tuned for high-ticket coaching, masterminds, and premium cohorts so you spend time coaching—not chasing DMs.',
    icon: Sparkles
  },
  {
    title: 'Intent Radar for Coaches',
    description: 'Maps social, podcast, and search demand to surface communities where your dream clients are already raising their hands.',
    icon: Target
  },
  {
    title: 'AI DM & Inbox Desk',
    description: 'Responds instantly to DMs, forms, SMS threads, and webinar chats with empathy plus objections scripts that sound human.',
    icon: MessageSquare
  },
  {
    title: 'Program Readiness Forms',
    description: 'Collects revenue stage, niche, commitment level, and preferred support to eliminate unqualified calls.',
    icon: CheckCircle
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with GoHighLevel, HubSpot, Notion, or Airtable so every tag, stage, and task stays aligned.',
    icon: CalendarCheck
  },
  {
    title: 'Social Proof Engine',
    description: 'Automatically shares clips, testimonials, and mini case studies matched to the avatar interacting.',
    icon: Trophy
  },
  {
    title: 'Ascension Automations',
    description: 'Upsells grads into masterminds, certification tracks, or retreats with personalized nudges.',
    icon: Users
  },
  {
    title: 'Performance Dashboard',
    description: 'Live view of leads captured, applications submitted, show rate, and revenue per offer.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'Applications captured in 30 days', value: '47', detail: 'avg. across coaching pods' },
  { label: 'Show rate on clarity calls', value: '82%', detail: 'with automated prep & reminders' },
  { label: 'Manual DM time saved weekly', value: '14 hrs', detail: 'per head coach' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 buying-intent prospects per day (~280/month)',
      'Enhanced contact + offer-fit data',
      'AI enrollment copy tuned to your voice',
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
      'Split-testing across hooks + guarantees',
      'Dedicated success check-ins',
      'Advanced segmentation (program tiering)'
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
      'Custom integrations & data warehouse sync',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Do you handle the DM and inbox follow-up?',
    a: 'Yes. The AI concierge monitors Instagram, Facebook, email, SMS, and form submissions then replies in your approved tone—looping in a human only when needed.'
  },
  {
    q: 'Are the conversations exclusive to my offer?',
    a: 'Absolutely. Every lead is sourced, nurtured, and booked just for your programs. No shared lists or generic agency traffic.'
  },
  {
    q: 'Can you re-engage our existing list or past cohorts?',
    a: 'Upload spreadsheets, GoHighLevel contacts, or Airtable bases and we reactivate them with new assets, case studies, and event invites.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most coaching brands go live within 10–14 days including brand voice training, funnel auditing, and calendar hookups.'
  }
]

export default function BusinessCoachLeadMachinePage() {
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
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-indigo-50 text-gray-900'}>
      <ParticleBackground particleCount={40} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-violet-200 text-violet-700 bg-white'
                }`}
              >
                Business Coach Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Business coaches: your AI enrollment studio.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`}>
                AI finds ready-to-invest leaders, answers them instantly, and books clarity calls on autopilot.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Modeled after our top-performing coaching installs, this playbook keeps your calendar full of serious applicants so you can coach, ship curriculum, and scale without living inside your inbox.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-400 via-indigo-500 to-blue-500 text-white font-semibold shadow-[0_15px_40px_rgba(139,92,246,0.4)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-violet-200 text-violet-700 hover:bg-white'
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
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-violet-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-violet-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/business-coach-ad-version-a.png"
                alt="Business coach lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-violet-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-violet-500/15 to-indigo-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-violet-700'}`}>Application feed</p>
                <h3 className="text-3xl font-semibold mt-4">Qualified calls secured</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI concierge ➜ vetted applicant ➜ clarity call scheduled.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Mindset intensive app • 9:10 AM', 'Mastermind inquiry • 11:05 AM', 'Certification fit call • 2:20 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`} />
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
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-violet-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Business Coach Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                From the first DM to paid-in-full, every step keeps prospects feeling guided and confident.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-violet-50 border-violet-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-violet-300' : 'text-violet-700'}`} />
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
              Done-for-you modules that mirror how modern coaching businesses sell, nurture, and ascend clients.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-violet-300/50' : 'bg-white border-violet-100 hover:border-violet-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-400" />
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
                ? 'bg-gradient-to-br from-violet-500/15 to-indigo-500/15 border-white/20'
                : 'bg-gradient-to-br from-violet-100 to-indigo-100 border-violet-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active coaching deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Aggregated partner performance across group programs, masterminds, and fractional advisors—no cherry-picked screenshots.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`}>$186k</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  New revenue closed in 45 days for a leadership cohort
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`}>18</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Clarity calls set week one for a mindset coach
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`}>3.4x</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Show-rate lift once prep + reminders run automatically
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
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-violet-200' : 'text-violet-700'}`}>$750 every 28 days</span> for 10 sales-ready conversations per day.
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
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-violet-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-violet-300' : 'text-violet-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-violet-200 hover:bg-violet-50'
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
            <h2 className="text-4xl font-bold mt-4">Everything coaches ask before turning on automation</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-violet-100 shadow-lg'
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
                ? 'bg-gradient-to-br from-violet-500/40 to-indigo-500/30 border-white/10'
                : 'bg-gradient-to-br from-violet-200 to-indigo-200 border-violet-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-violet-300 text-violet-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep cohorts sold out without living on Instagram.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Turn on the Business Coach Lead Machine and let AI handle demand-gen, nurture, and scheduling while you ship transformations.
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
                ? 'bg-gradient-to-br from-violet-500/15 to-indigo-500/15 border-white/10'
                : 'bg-gradient-to-br from-violet-100 to-indigo-100 border-violet-200'
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
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-violet-200 bg-white'
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
