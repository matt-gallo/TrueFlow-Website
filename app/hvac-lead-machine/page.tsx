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
  CloudLightning,
  Flame,
  Gauge,
  Hammer,
  MessageSquare,
  ShieldCheck,
  Thermometer,
  Wrench
} from 'lucide-react'

const workflow = [
  {
    title: 'Track HVAC emergency intent',
    description: 'Monitors weather spikes, “AC repair near me” searches, and warranty chatter so you reach homeowners the moment systems fail.',
    icon: Thermometer
  },
  {
    title: 'Enrich with equipment + warranty data',
    description: 'Pulls in unit age, fuel type, maintenance history, and home details to prioritize high-value jobs.',
    icon: Gauge
  },
  {
    title: 'Launch human AI dispatcher',
    description: 'AI answers after-hours calls, texts back quotes, and explains financing in your brand tone 24/7.',
    icon: MessageSquare
  },
  {
    title: 'Qualify urgency + schedule',
    description: 'Collects job type, system symptoms, photos, and preferred times, then routes hot leads to the right technician crew.',
    icon: Wrench
  },
  {
    title: 'Book service visits automatically',
    description: 'Syncs with ServiceTitan, Housecall Pro, or GoHighLevel calendars and dispatch boards for real-time availability.',
    icon: CalendarCheck
  },
  {
    title: 'Follow through with memberships',
    description: 'Automates tune-up reminders, maintenance plan offers, and review requests to keep trucks rolling.',
    icon: ShieldCheck
  }
]

const features = [
  {
    title: 'HVAC Booking Machine',
    description: 'Automation tuned for heating and cooling pros—keeps the dispatch board full while techs stay in the field.',
    icon: Hammer
  },
  {
    title: 'Weather Surge Radar',
    description: 'Predicts demand around heat waves or cold snaps so you staff and advertise accordingly.',
    icon: CloudLightning
  },
  {
    title: 'AI Dispatcher Desk',
    description: 'Responds instantly with troubleshooting tips, financing info, and arrival windows using your scripts.',
    icon: MessageSquare
  },
  {
    title: 'Equipment Snapshot Collector',
    description: 'Requests unit photos, thermostat readings, and filter info before a tech leaves the shop.',
    icon: Thermometer
  },
  {
    title: 'Calendar + CRM Sync',
    description: 'Integrates with ServiceTitan, Jobber, Housecall Pro, or GoHighLevel for seamless scheduling and tagging.',
    icon: CalendarCheck
  },
  {
    title: 'Membership Upsell Engine',
    description: 'Auto-offers service agreements, IAQ packages, and smart thermostat upgrades post-visit.',
    icon: Flame
  },
  {
    title: 'Review & Referral Booster',
    description: 'Triggers review requests and neighbor referral prompts as soon as jobs complete.',
    icon: CheckCircle
  },
  {
    title: 'Ops Dashboard',
    description: 'Live view of jobs booked, average ticket value, response times, and truck utilization.',
    icon: Gauge
  }
]

const stats = [
  { label: 'Emergency jobs booked in 30 days', value: '67', detail: 'avg. per service area' },
  { label: 'After-hours response time', value: '90s', detail: 'AI replies to inbound messages' },
  { label: 'Maintenance plan conversions', value: '3.2x', detail: 'increase vs. manual follow-up' }
]

const pricing = [
  {
    title: 'Starter',
    price: '$750',
    cadence: 'every 28 days',
    bullets: [
      '10 HVAC prospects per day (~280/month)',
      'Enhanced contact + equipment data',
      'AI dispatcher copy tuned to your scripts',
      'CRM/dispatch integration',
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
      'A/B testing across offers',
      'Dedicated success check-ins',
      'Advanced segmentation (emergency vs. project)'
    ]
  },
  {
    title: 'Scale',
    price: '$3,000',
    cadence: 'every 28 days',
    bullets: [
      '70+ prospects per day (~2,000/month)',
      'Everything in Growth, plus:',
      'Multi-market routing + franchise playbooks',
      'White-glove optimization + creative testing',
      'Custom integrations & field ops automations',
      'Quarterly strategy sessions'
    ]
  }
]

const faqs = [
  {
    q: 'Do you handle nights and weekends?',
    a: 'Yes. The AI dispatcher replies instantly 24/7, qualifies urgency, and books technicians even when your front desk is offline.'
  },
  {
    q: 'Can we integrate with our existing dispatch software?',
    a: 'We connect with ServiceTitan, Jobber, Housecall Pro, GoHighLevel, and custom CRMs so appointments, tags, and workflows stay synced.'
  },
  {
    q: 'Are the leads exclusive?',
    a: 'Every homeowner conversation is exclusive to your company—no shared lead lists or auction-style bidding.'
  },
  {
    q: 'How fast can we go live?',
    a: 'Most HVAC partners launch in 10–14 days with brand voice training, workflow mapping, and calendar integration.'
  }
]

export default function HvacLeadMachinePage() {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black text-white/70' : 'bg-white text-gray-600'}`}>Loading...</div>
  }

  return (
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-gray-900'}>
      <ParticleBackground particleCount={30} />
      <Navigation />

      <main className="relative z-10">
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-xs uppercase tracking-[0.4em] text-white/70">
                HVAC Lead Machine
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                HVAC providers: your AI dispatch & booking machine.
              </h1>
              <p className="text-2xl font-semibold mt-4 text-amber-200">
                AI finds urgent homeowners, answers them instantly, and drops booked jobs into your dispatch board.
              </p>
              <p className={`text-lg mt-4 max-w-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Modeled after our best-performing trades campaigns, this system keeps crews busy with profitable installs and emergency calls—no more cold nights or idle technicians.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white font-semibold shadow-[0_15px_40px_rgba(251,191,36,0.4)]">
                  Get your AI automation demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#workflow" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 ${isDarkMode ? 'text-white/80 hover:bg-white/5' : 'text-gray-700 hover:bg-white/20'}`}>
                  See how it works
                </Link>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {stats.map(stat => (
                  <div key={stat.label} className={`rounded-2xl p-4 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-amber-100 shadow-lg'}`}>
                    <p className="text-3xl font-bold text-amber-200">{stat.value}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{stat.label}</p>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-amber-100 shadow-2xl'}`}>
              <Image
                src="/lead-machine-subpage-files/hvac-ad-version-a.png"
                alt="HVAC lead machine campaign"
                width={900}
                height={1200}
                className={`w-full rounded-2xl border mb-6 object-cover ${isDarkMode ? 'border-white/10' : 'border-amber-100'}`}
                priority
              />
              <div className="bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-2xl border border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Dispatch feed</p>
                <h3 className="text-3xl font-semibold mt-4">Jobs confirmed</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>AI dispatcher ➜ triaged homeowner ➜ technician scheduled.</p>
                <div className="mt-5 space-y-3 text-sm">
                  {['No-heat call • 7:45 AM', 'Mini-split install • 11:20 AM', 'IAQ assessment • 2:00 PM'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-200" />
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
          <div className={`max-w-6xl mx-auto rounded-3xl p-10 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-amber-100 shadow-xl'}`}>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">How the HVAC Lead Machine runs</h2>
              <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Automates the entire inbound-to-dispatch pipeline, even during peak season surges.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workflow.map(item => (
                <div key={item.title} className={`rounded-2xl p-6 flex items-start gap-4 border ${isDarkMode ? 'bg-black/40 border-white/10' : 'bg-amber-50 border-amber-100'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-amber-300" />
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
            <h2 className="text-4xl font-bold mt-4">Everything your service desk needs</h2>
            <p className={`mt-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Pre-built modules tailored for heating & cooling pros.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10">
            {features.map(feature => (
              <div key={feature.title} className={`rounded-3xl p-8 transition border ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-amber-300/50' : 'bg-white border-amber-100 hover:border-amber-300 shadow-lg'}`}>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <div className={`max-w-6xl mx-auto rounded-3xl border p-10 text-center ${isDarkMode ? 'bg-gradient-to-br from-amber-500/15 to-orange-500/15 border-white/20' : 'bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200'}`}>
            <p className="text-3xl font-semibold mb-4">Proof from active HVAC deployments</p>
            <p className={`mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>Aggregated partner metrics, not fabricated testimonials.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-5xl font-bold text-amber-200">+62%</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Increase in booked emergency calls</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-amber-200">4.3h</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Average time from inquiry to technician arrival</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-amber-200">2.9x</p>
                <p className={`mt-1 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Maintenance plan upsell lift</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Pricing & engagement models</h2>
            <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                Start at <span className={`font-semibold text-2xl ${isDarkMode ? 'text-amber-200' : 'text-amber-600'}`}>$750 every 28 days</span> for 10 service-ready conversations per day.
              </p>
              <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                One-time setup fee: <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$2,000</span> (includes full buildout, CRM/dispatch integration, and campaign optimization).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map(plan => (
                <div key={plan.title} className={`rounded-3xl p-8 flex flex-col border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-amber-100 shadow-lg'}`}>
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-4xl font-bold mt-3">{plan.price}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{plan.cadence}</p>
                  <ul className={`mt-6 space-y-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {plan.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-300 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/sign-up" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-amber-200 hover:bg-amber-50'}`}>
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
            <h2 className="text-4xl font-bold mt-4">Everything HVAC owners ask before turning on automation</h2>
          </div>
          <div className="max-w-5xl mx-auto mt-10 space-y-5">
            {faqs.map(item => (
              <div key={item.q} className={`rounded-3xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-amber-100 shadow-lg'}`}>
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4">
          <div className={`max-w-5xl mx-auto rounded-[40px] p-14 text-center border ${isDarkMode ? 'bg-gradient-to-br from-amber-500/40 to-orange-500/30 border-white/10' : 'bg-gradient-to-br from-amber-200 to-orange-200 border-amber-300'}`}>
            <p className={`uppercase tracking-[0.4em] text-xs ${isDarkMode ? 'text-white/70' : 'text-orange-900'}`}>Ready?</p>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Keep trucks busy even when the phones spike.</h2>
            <p className={`text-lg mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-800'}`}>Flip on the HVAC Lead Machine and let AI handle intent tracking, qualifying, and scheduling while your crews handle installs and repairs.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/sign-up" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
                Schedule an HVAC strategy session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lead-machine" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${isDarkMode ? 'border-white/40 text-white' : 'border-gray-700 text-gray-900'}`}>
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
