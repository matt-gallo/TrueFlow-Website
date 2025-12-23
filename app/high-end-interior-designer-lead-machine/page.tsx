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
  Camera,
  CheckCircle,
  Gem,
  MessageSquare,
  Palette,
  Ruler,
  Sparkles,
  Target
} from 'lucide-react'

const workflow = [
  {
    title: 'Detect ultra-luxury renovation demand',
    description: 'Monitors architectural digests, luxury real estate listings, and builder forums to pinpoint estates sourcing a new interior designer.',
    icon: Target
  },
  {
    title: 'Layer in budget + style cues',
    description: 'Enriches prospects with project value, square footage, past designers, and aesthetic preferences pulled from social + press mentions.',
    icon: Palette
  },
  {
    title: 'Launch AI studio concierge',
    description: 'AI responds like your design assistant -sharing portfolios, mood boards, and availability the moment inquiries land.',
    icon: MessageSquare
  },
  {
    title: 'Qualify scope + readiness',
    description: 'Captures location, timelines, architect partners, and decision makers before your principal ever hops on a call.',
    icon: Ruler
  },
  {
    title: 'Auto-book vision consultations',
    description: 'Syncs with Calendly, SavvyCal, or GoHighLevel to place serious households onto your studio calendar with prep guides attached.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture with bespoke proof',
    description: 'Delivers case studies, lookbooks, and press wins tailored to each estate so they stay inspired until contract signed.',
    icon: BarChart3
  }
]

const features = [
  {
    title: 'Designer Intake Engine',
    description: 'Automation tuned for high-end residential and boutique hospitality projects so your team stays focused on creative work.',
    icon: Sparkles
  },
  {
    title: 'Portfolio Routing AI',
    description: 'Pairs prospects with relevant mood boards, lookbooks, and renders to keep conversations hyper-personal.',
    icon: Camera
  },
  {
    title: 'Trade Partner Radar',
    description: 'Identifies architects, builders, and luxury realtors already influencing the project so you can coordinate intros.',
    icon: Target
  },
  {
    title: 'Scope & Budget Forms',
    description: 'Collects style cues, investment range, square footage, and decision processes before any walkthrough.',
    icon: Ruler
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with GoHighLevel, HubSpot, Monday, or Airtable for perfect pipeline visibility.',
    icon: CalendarCheck
  },
  {
    title: 'Press & Social Proof Engine',
    description: 'Automatically shares award features, publication spreads, and testimonial reels matched to each client type.',
    icon: Gem
  },
  {
    title: 'Aftercare & Referral Flows',
    description: 'Nurtures past clients with reveal anniversaries, art sourcing invitations, and referral prompts.',
    icon: CheckCircle
  },
  {
    title: 'Performance Dashboard',
    description: 'See inquiries, consults booked, project pipeline value, and close rates in real time.',
    icon: BarChart3
  }
]

const stats = [
  { label: 'Design inquiries captured in 30 days', value: '31', detail: 'avg. for luxury studios' },
  { label: 'Consult-to-contract conversion', value: '41%', detail: 'when AI handles prep + reminders' },
  { label: 'Principal hours saved monthly', value: '36', detail: 'reclaimed from inbox + chasing' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 high-intent design inquiries per day (~280/month)',
      'Enhanced contact + property intel',
      'AI concierge scripts tailored to your voice',
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
      'Split-testing across positioning + offers',
      'Dedicated success check-ins',
      'Advanced segmentation (new build vs. renovation)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-market routing + studio pods',
      'White-glove optimization + creative testing',
      'Custom integrations & procurement automations',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Does the AI understand luxury tone + brand guidelines?',
    a: 'We train the concierge on your press kit, mood boards, and brand voice so every reply feels bespoke and on-label.'
  },
  {
    q: 'Can you coordinate with architects or builders already on the project?',
    a: 'Yes. We map any collaborators, loop them into threads, and share intake forms so everyone works from the same brief.'
  },
  {
    q: 'Do you work from our existing contact list?',
    a: 'Upload prospects from Airtable, Studio Designer, or spreadsheets and we re-engage them with tailored case studies and new concept drops.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most studios go live within 10–14 days including voice training, portfolio ingestion, and calendar hookups.'
  }
]

export default function HighEndInteriorDesignerLeadMachinePage() {
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
      <ParticleBackground particleCount={35} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-indigo-200 text-indigo-700 bg-white'
                }`}
              >
                Interior Designer Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                High-end interior designers: your AI inquiry atelier.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>
                AI finds luxury renovations, answers instantly, and books vision consults while you perfect the reveal.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Built from our best-performing design studio installs, this system keeps your principal schedule full of affluent households and developer partners -without living on Instagram DMs.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-500 text-white font-semibold shadow-[0_15px_40px_rgba(99,102,241,0.35)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-indigo-200 text-indigo-700 hover:bg-white'
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
                      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-indigo-100 shadow-lg'
                    }`}
                  >
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-indigo-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/high-end-interior-designers-ad-version-a.png"
                alt="High-end interior designer lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-indigo-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-indigo-700'}`}>
                  Studio feed
                </p>
                <h3 className="text-3xl font-semibold mt-4">Projects confirmed</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                  AI concierge ➜ vetted estate ➜ consultation booked.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Palm Beach penthouse • 9:30 AM', 'Aspen chalet refresh • 12:10 PM', 'Tribeca loft art curation • 2:40 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`} />
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
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-indigo-100 shadow-xl'
          }`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Interior Designer Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                From whisper of interest to mood board presentation, every touch feels bespoke.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-6 flex items-start gap-4 border ${
                    isDarkMode ? 'bg-black/40 border-white/10' : 'bg-indigo-50 border-indigo-100'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}`} />
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
              Pre-built modules tuned for boutiques designing $250k+ projects across multiple markets.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 transition border ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:border-indigo-300/50' : 'bg-white border-indigo-100 hover:border-indigo-300 shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
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
                ? 'bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 border-white/20'
                : 'bg-gradient-to-br from-indigo-100 to-cyan-100 border-indigo-200'
            }`}
          >
            <p className="text-3xl font-semibold mb-4">Proof from active interior design deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
              Real studio benchmarks -no mock metrics.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>$420k</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Average pipeline created in 60 days
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>12</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Qualified consults per week per studio
                </p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>3.1x</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Close-rate lift vs. manual follow-up
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
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>$750 every 28 days</span> for 10 design-ready conversations per day.
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
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-indigo-100 shadow-lg'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                      isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-indigo-200 hover:bg-indigo-50'
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
            <h2 className="text-4xl font-bold mt-4">Everything interior designers ask before automating intake</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div
                key={item.q}
                className={`rounded-3xl p-6 border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-indigo-100 shadow-lg'
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
                ? 'bg-gradient-to-br from-indigo-500/40 to-cyan-500/30 border-white/10'
                : 'bg-gradient-to-br from-indigo-200 to-cyan-200 border-indigo-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                isDarkMode ? 'border-white/30 text-white/70' : 'border-indigo-300 text-indigo-700'
              } text-xs uppercase tracking-[0.35em]`}
            >
              Ready?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep projects bespoke while the pipeline fills itself</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Switch on the High-End Interior Designer Lead Machine and let AI concierge service attract, vet, and schedule affluent clients.
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
                ? 'bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 border-white/10'
                : 'bg-gradient-to-br from-indigo-100 to-cyan-100 border-indigo-200'
            }`}
          >
            <div className="space-y-4 text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-semibold">Lock in Your Demo</h3>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                Spots for this week are limited -choose a time below to secure your Lead Machine™ walkthrough.
              </p>
            </div>
            <div
              className={`calendar-wrapper overflow-hidden rounded-2xl border ${
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-indigo-200 bg-white'
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
