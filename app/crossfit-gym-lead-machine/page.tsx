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
  Dumbbell,
  BarChart3,
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  Flame,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from 'lucide-react'

const workflow = [
  {
    title: 'Spot CrossFit intent signals',
    description: 'Monitors search intent, community chatter, and social posts about plateaued PRs, Murph prep, or new city moves.',
    icon: Target
  },
  {
    title: 'Enrich with athlete readiness',
    description: 'Adds class preference, injury history, schedule, and budget so coaches know exactly who is a fit.',
    icon: Users
  },
  {
    title: 'Launch AI membership concierge',
    description: 'AI replies to DMs, texts, and emails about programming, coaches, pricing, and drop-ins 24/7 in your voice.',
    icon: MessageSquare
  },
  {
    title: 'Capture intake + waivers',
    description: 'Collects goals, mobility notes, and waiver info before anyone steps onto the floor.',
    icon: ClipboardCheck
  },
  {
    title: 'Auto-book intros & trials',
    description: 'Syncs with PushPress, Wodify, or GoHighLevel calendars so prospects lock in a No Sweat Intro instantly.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture through onboarding',
    description: 'Delivers habit challenges, benchmark reminders, and referral nudges that keep classes full year-round.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'Box Pipeline Engine',
    description: 'Automation tuned for CrossFit gyms and strength studios, keeps new athletes walking in daily.',
    icon: Sparkles
  },
  {
    title: 'Community + Intent Radar',
    description: 'Finds folks talking about Murph prep, lifting plateaus, or missing accountability so you reach them first.',
    icon: Flame
  },
  {
    title: 'AI Membership Desk',
    description: 'Handles programming FAQs, drop-in requests, and membership questions with your coaches’ tone.',
    icon: MessageSquare
  },
  {
    title: 'Intro & On-Ramp Forms',
    description: 'Collects injuries, scaling needs, nutrition goals, and schedule blocks to personalize day one.',
    icon: ClipboardCheck
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with PushPress, Wodify, Zen Planner, or GoHighLevel so tags and automations stay synced.',
    icon: CalendarCheck
  },
  {
    title: 'Challenge / Event Sequences',
    description: 'Runs Bring-a-Friend WODs, seasonal challenges, and open prep campaigns automatically.',
    icon: Dumbbell
  },
  {
    title: 'Drop-in & Referral Engine',
    description: 'Triggers referral prompts, drop-in offers, and alumni reactivation without manual chasing.',
    icon: CheckCircle
  },
  {
    title: 'Performance Dashboard',
    description: 'Live view of consults booked, intro conversions, MRR, and class fill rates.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'Intro sessions booked in 30 days', value: '58', detail: 'avg. per CrossFit location' },
  { label: 'Membership conversion lift', value: '33%', detail: 'with automated nurture' },
  { label: 'Time reclaimed weekly', value: '14 hrs', detail: 'from DMs + reminders' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 athlete leads per day (~280/month)',
      'Enhanced contact + training data',
      'AI membership concierge copy',
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
      '30 leads per day (~840/month)',
      'Everything in Starter, plus:',
      'Priority optimization & testing',
      'Split-tests across offers/challenges',
      'Dedicated success check-ins',
      'Advanced segmentation (beginners vs. Rx)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ leads per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-location routing + staffing playbooks',
      'White-glove optimization + creative testing',
      'Custom integrations & kiosk automations',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Can the AI talk like our coaches?',
    a: 'We ingest your tone, programming highlights, and policies so every message feels like your head coach, not a bot.'
  },
  {
    q: 'Do you integrate with our gym software?',
    a: 'Yes. We connect with PushPress, Wodify, Zen Planner, GoHighLevel, and more so leads, tags, and reminders stay synced.'
  },
  {
    q: 'Can we reactivate past members or paused accounts?',
    a: 'Upload dormant lists and we run comeback offers, accountability check-ins, and seasonal promos for you.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most boxes go live within 10–14 days including script training, automation buildout, and challenge mapping.'
  }
]

export default function CrossfitGymLeadMachinePage() {
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
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-orange-50 text-gray-900'}>
      <ParticleBackground particleCount={30} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-orange-200 text-orange-700 bg-white'
                }`}
              >
                CrossFit Gym Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                CrossFit gyms: your AI membership closer.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                AI finds athletes, answers objections, and books intro sessions while you coach.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Built from our most successful functional fitness installs, this system keeps your classes full with motivated humans instead of churny trial seekers.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-rose-500 text-white font-semibold shadow-[0_15px_40px_rgba(251,146,60,0.4)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-orange-200 text-orange-700 hover:bg-white'
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
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-orange-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-orange-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/crossfit-ad-version-a.png"
                alt="CrossFit lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-orange-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-orange-500/15 to-rose-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-orange-700'}`}>Class board</p>
                <h3 className="text-3xl font-semibold mt-4">Consults secured</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI concierge ➜ vetted athlete ➜ No Sweat Intro booked.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Beginner On-Ramp • 8:45 AM', 'Drop-in from NYC • 12:00 PM', 'New mover class trial • 5:30 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`} />
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
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-orange-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the CrossFit Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Every touchpoint respects your community vibe while scaling memberships.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-orange-50 border-orange-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`} />
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
            <h2 className="text-4xl font-bold mt-4">Everything your gym team needs</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Plug-and-play automations for micro boxes and multi-location affiliates alike.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-orange-300/50' : 'bg-white border-orange-100 hover:border-orange-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`} />
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
                ? 'bg-gradient-to-br from-orange-500/15 to-rose-500/15 border-white/20'
                : 'bg-gradient-to-br from-orange-100 to-rose-100 border-orange-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active CrossFit deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Averaged across affiliates in suburban, urban, and coastal markets.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>$142k</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Average new revenue in 60 days
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>88%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Show rate after automated prep
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>19</p>
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
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>$750 every 28 days</span> for 10 athlete-ready conversations per day.
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
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-orange-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-orange-200 hover:bg-orange-50'
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
            <h2 className="text-4xl font-bold mt-4">Everything CrossFit owners ask before automating enrollment</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-orange-100 shadow-lg'
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
                ? 'bg-gradient-to-br from-orange-500/40 to-rose-500/30 border-white/10'
                : 'bg-gradient-to-br from-orange-200 to-rose-200 border-orange-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-orange-300 text-orange-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep classes packed while you coach</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Flip on the CrossFit Lead Machine and let AI handle discovery, nurture, and scheduling.
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
                ? 'bg-gradient-to-br from-orange-500/15 to-rose-500/15 border-white/10'
                : 'bg-gradient-to-br from-orange-100 to-rose-100 border-orange-200'
            }`}
          >
            <div className="space-y-4 text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-semibold">Lock in Your Demo</h3>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                Spots for this week are limited. Choose a time below to secure your Lead Machine™ walkthrough.
              </p>
            </div>
            <div
              className={`calendar-wrapper overflow-hidden rounded-2xl border ${
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-orange-200 bg-white'
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
