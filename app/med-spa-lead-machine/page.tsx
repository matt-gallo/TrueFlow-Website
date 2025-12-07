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
  CalendarCheck,
  CheckCircle,
  Droplets,
  HeartPulse,
  MessageSquare,
  Scissors,
  Sparkles,
  Syringe,
  TrendingUp
} from 'lucide-react'

const workflow = [
  {
    title: 'Spot high-intent beauty searches',
    description: 'Tracks local search spikes for Botox, filler, skin tightening, and IV therapy plus social chatter about events or seasonal promotions.',
    icon: Sparkles
  },
  {
    title: 'Enrich with profile + spend signals',
    description: 'Layers in demographics, visit history, treatment interest, and ideal appointment times so front-desk teams see everything before outreach.',
    icon: HeartPulse
  },
  {
    title: 'Launch human AI concierge',
    description: 'AI texts and emails in a luxury-but-friendly tone answering procedure questions, recovery timelines, and pricing ranges 24/7.',
    icon: MessageSquare
  },
  {
    title: 'Qualify candidacy',
    description: 'Collects treatment goals, contraindications, and photo uploads, then routes the best-fit prospects to the right injector or provider.',
    icon: Syringe
  },
  {
    title: 'Auto-book consultations',
    description: 'Syncs with GoHighLevel, Acuity, or Aesthetic Record calendars so clients lock in a slot instantly—no phone tag.',
    icon: CalendarCheck
  },
  {
    title: 'Nurture VIPs + memberships',
    description: 'Follows up with post-visit check-ins, membership invites, and referral prompts to keep treatment rooms packed.',
    icon: Droplets
  }
]

const features = [
  {
    title: 'Med Spa Booking Machine',
    description: 'Automation tuned for high-ticket treatments—keeps injectors focused on clients while AI fills the calendar with pre-qualified consults.',
    icon: Sparkles
  },
  {
    title: 'Treatment Interest Radar',
    description: 'Identifies audiences browsing lip filler before-and-after galleries, researching cellulite solutions, or comparing laser resurfacing.',
    icon: Scissors
  },
  {
    title: 'AI Concierge Desk',
    description: 'Handles FAQs about downtime, provider credentials, packages, and payment plans using your brand voice around the clock.',
    icon: MessageSquare
  },
  {
    title: 'Consult Prep Kit',
    description: 'Requests selfies, medical questionnaires, and treatment goals upfront so providers walk in with a plan.',
    icon: Syringe
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with GoHighLevel, Aesthetic Record, Mindbody, or Nextech—keeping tasks, tags, and reminders aligned.',
    icon: CalendarCheck
  },
  {
    title: 'Membership Upsell Engine',
    description: 'Automatically invites post-visit guests into VIP facial clubs, tox memberships, or IV drips with personalized offers.',
    icon: HeartPulse
  },
  {
    title: 'Ad + UGC Amplifier',
    description: 'Feeds wins back into Meta/TikTok audiences and requests compliant testimonials without manual chasing.',
    icon: TrendingUp
  },
  {
    title: 'Performance Dashboard',
    description: 'Shows cost per booked consult, no-show rate, membership conversions, and high-performing treatments in real time.',
    icon: CheckCircle
  }
]

const stats = [
  { label: 'Consultations booked in 30 days', value: '52', detail: 'average per location' },
  { label: 'No-show reduction', value: '38%', detail: 'via automated reminders' },
  { label: 'AI response time', value: '90s', detail: 'median reply to new inquiries' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 new med-spa prospects per day (~280/month)',
      'Enhanced contact + treatment-interest data',
      'AI concierge copy trained on your offers',
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
      'A/B testing across promos + funnels',
      'Dedicated success check-ins',
      'Advanced segmentation (VIP vs. new guest)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-location routing + franchise playbooks',
      'White-glove optimization + creative testing',
      'Custom integrations & automations',
      'Quarterly strategy labs'
    ]
  }
]

const faqs = [
  {
    q: 'Do you provide exclusive leads?',
    a: 'Yes. Each conversation is sourced and nurtured for your clinic only—no more sharing inquiries with competing spas.'
  },
  {
    q: 'Can the AI follow our consent and medical disclaimers?',
    a: 'We ingest your compliance language plus state guidelines so every message stays on-label and flags anything that needs RN/MD review.'
  },
  {
    q: 'What about existing clients?',
    a: 'Upload past guest lists and we reactivate dormant clients with membership invites, birthday offers, and seasonal campaigns.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most clinics go live within 10-14 days including brand voice training, CRM hookup, and campaign approvals.'
  }
]

export default function MedSpaLeadMachinePage() {
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
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-pink-50 text-gray-900'}>
      <ParticleBackground particleCount={35} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.4em] ${
                  isDarkMode
                    ? 'border border-white/30 text-white/70'
                    : 'border border-rose-200 text-rose-700 bg-white'
                }`}
              >
                Med Spa Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                Med spas & aesthetic clinics: your AI booking lounge.
              </h1>
              <p className={`text-2xl font-semibold mt-4 ${isDarkMode ? 'text-pink-200' : 'text-rose-600'}`}>
                AI finds self-care seekers, answers their questions, and books them into your chair automatically.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Built from our top-performing campaigns in beauty and aesthetics, this playbook keeps your injectors and estheticians busy with high-intent clients instead of DMs and voicemails.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  onClick={scrollToCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 text-white font-semibold shadow-[0_15px_40px_rgba(244,114,182,0.4)]"
                >
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="#workflow"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition ${
                    isDarkMode
                      ? 'border-white/30 text-white/80 hover:bg-white/5'
                      : 'border-rose-200 text-rose-700 hover:bg-rose-50'
                  }`}
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {stats.map(stat => (
                  <div key={stat.label} className={`rounded-2xl p-4 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-rose-100 shadow-lg'}`}>
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-pink-200' : 'text-rose-600'}`}>{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-rose-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/med-spa-ad-version-a.png"
                alt="Med spa lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-rose-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-rose-500/15 to-purple-500/15 rounded-2xl border border-white/10 p-6">
                <p className={`text-xs uppercase tracking-[0.35em] ${isDarkMode ? 'text-white/60' : 'text-rose-700'}`}>Live feed</p>
                <h3 className="text-3xl font-semibold mt-4">Booked consultations</h3>
                <p className={`${isDarkMode ? 'text-white/70' : 'text-gray-700'} mt-2`}>
                  AI concierge ➜ qualified guest ➜ confirmed slot.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  {['Lip filler consult • 9:40 AM', 'Hydrafacial VIP • 11:15 AM', 'Weight loss program review • 1:30 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-pink-200' : 'text-rose-600'}`} />
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
          <div className={`max-w-6xl mx-auto rounded-3xl p-10 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-rose-100 shadow-xl'}`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the Med Spa Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>From discovery to membership upsell, every touchpoint keeps your brand luxe and personal.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div key={item.title} className={`rounded-2xl p-6 flex items-start gap-4 border ${isDarkMode ? 'bg-black/40 border-white/10' : 'bg-rose-50 border-rose-100'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center">
                  <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-rose-300' : 'text-rose-600'}`} />
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
            <h2 className="text-4xl font-bold mt-4">Everything your front desk dreams of</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Pre-built modules tuned for beauty, wellness, and premium guest experiences.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div key={feature.title} className={`rounded-3xl p-8 transition border ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-rose-300/50' : 'bg-white border-rose-100 hover:border-rose-300 shadow-lg'}`}>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <div className={`max-w-6xl mx-auto rounded-3xl border p-10 text-center ${isDarkMode ? 'bg-gradient-to-br from-rose-500/15 to-purple-500/15 border-white/20' : 'bg-gradient-to-br from-rose-200 to-purple-200 border-rose-200'}`}>
            <p className="text-3xl font-semibold mb-4">Proof from active med-spa deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>Aggregated performance metrics from anonymized partner dashboards.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-rose-200' : 'text-rose-600'}`}>+47%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Average lift in booked consultations</p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-rose-200' : 'text-rose-600'}`}>21d</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Median time from first inquiry to treatment start</p>
              </div>
              <div>
                <p className={`text-5xl font-bold ${isDarkMode ? 'text-rose-200' : 'text-rose-600'}`}>3.8x</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Increase in membership conversions from automation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Pricing & engagement models</h2>
            <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-rose-200' : 'text-rose-500'}`}>$750 every 28 days</span> for 10 med-spa ready conversations per day.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                One-time setup fee: <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$2,000</span> (includes full buildout, CRM integration, and campaign optimization).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map(plan => (
                <div key={plan.title} className={`rounded-3xl p-8 flex flex-col border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-rose-100 shadow-lg'}`}>
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 mt-1 ${isDarkMode ? 'text-rose-300' : 'text-rose-600'}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToCalendar}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-rose-200 hover:bg-rose-50'}`}
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
            <h2 className="text-4xl font-bold mt-4">Everything med spas ask before flipping on automation</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div key={item.q} className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-rose-100 shadow-lg'}`}>
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4">
          <div className={`max-w-5xl mx-auto rounded-[40px] p-14 text-center border ${isDarkMode ? 'bg-gradient-to-br from-rose-500/40 to-purple-500/30 border-white/10' : 'bg-gradient-to-br from-rose-200 to-purple-200 border-rose-200'}`}>
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDarkMode ? 'border-white/30 text-white/70' : 'border-rose-200 text-rose-700'
            } text-xs uppercase tracking-[0.35em]`}>Ready?</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Turn consultations into memberships automatically.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>
              Flip on the Med Spa Lead Machine and let AI concierge service book out your injectors and estheticians.
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
          <div className={`max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 border ${
            isDarkMode
              ? 'bg-gradient-to-br from-rose-500/15 to-purple-500/15 border-white/10'
              : 'bg-gradient-to-br from-rose-100 to-purple-100 border-rose-200'
          }`}>
            <div className="space-y-4 text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-semibold">Lock in Your Demo</h3>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                Spots for this week are limited—choose a time below to secure your Lead Machine™ walkthrough.
              </p>
            </div>
            <div className={`calendar-wrapper overflow-hidden rounded-2xl border ${
              isDarkMode ? 'border-white/10 bg-white/5' : 'border-rose-200 bg-white'
            }`}>
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
