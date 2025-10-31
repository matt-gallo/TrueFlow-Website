'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle,
  CircleDashed,
  Mail,
  MessageSquare,
  Menu,
  RefreshCw,
  Search,
  Target,
  Workflow,
  BarChart3,
  ShieldCheck,
  X
} from 'lucide-react'

const problems = [
  'Rely on referrals or luck instead of a daily stream of new conversations',
  'Spend hours chasing dead leads, ghosted DMs, or low-intent lists',
  "Piece together tools that don’t sync — data lives everywhere except the CRM",
  'Lose prospects after the first reply because follow-up isn’t automated',
  'Stay in constant catch-up mode instead of scaling what already works'
]

const propositionSteps = [
  'Pinpoints buyers searching for your offer within the last 7 days',
  'Drops enriched contact data directly into your CRM or pipeline',
  'Starts natural email and SMS conversations instantly',
  'Qualifies intent, routes hot leads, and books time on your calendar'
]

const features = [
  {
    title: 'AI Lead Hacker',
    description: 'Scrapes live intent data from search, directories, and social to surface buyers who raised their hand in the last seven days — filtered by industry, revenue, tech stack, and geography.',
    icon: Search
  },
  {
    title: 'Cold Email Engine',
    description: 'Human-tone outreach sequence crafted to sound personal and spark real replies — never robotic.',
    icon: Mail
  },
  {
    title: 'Conversation AI',
    description: 'Handles replies, filters interest, and guides serious prospects to your Readiness Assessment or booking flow automatically.',
    icon: MessageSquare
  },
  {
    title: 'AI Readiness Assessment',
    description: 'Optional interactive diagnostic that scores each lead and builds a personalized roadmap instantly.',
    icon: Brain
  },
  {
    title: '7-Day Nurture Workflow',
    description: 'Turns “curious” into “committed” with pre-built follow-up that builds belief and momentum.',
    icon: RefreshCw
  },
  {
    title: 'Reporting Dashboard',
    description: 'Live view of opens, replies, conversions, and ROI so you always know what’s working.',
    icon: BarChart3
  },
  {
    title: 'GoHighLevel Integration',
    description: 'Full automation, tagging, and pipeline tracking built right inside your existing instance.',
    icon: Workflow
  },
  {
    title: 'Optional Ad Sync (Advanced)',
    description: 'Syncs new leads to Meta or Google audiences for remarketing and lookalike amplification.',
    icon: Target
  }
]

const benefits = [
  'Never worry about where your next lead comes from',
  'Fill your calendar with qualified, pre-warmed prospects',
  'Get back hours of your week — the machine runs 24/7',
  'See real-time data on outreach, replies, and booked calls',
  'Scale with a system that adapts to new offers and industries'
]

const offerStack = [
  'Custom AI Prospecting Setup – complete lead sourcing + automation buildout',
  'Done-for-You Cold Email Campaigns – written, tested, and optimized for you',
  'Readiness Assessment Funnel – two-minute diagnostic that qualifies every response',
  '7-Day Auto-Responder – converts engaged leads into booked calls',
  'Ongoing Tracking & Optimization – monthly performance review and tuning'
]

const verticals = [
  'Local Service Businesses (chiropractors, contractors, med-spas, real estate teams)',
  'Online Coaches & Creators',
  'Agencies & B2B Consultants',
  'High-Ticket Offer Businesses'
]

const pricingPlans = [
  {
    name: 'Launch Setup',
    price: '$2,000',
    cadence: 'one-time',
    description: 'Full buildout of the Lead Machine&trade; system',
    featured: true
  },
  {
    name: 'Core Plan',
    price: '$600',
    cadence: 'per month',
    description: 'Lead Machine&trade; + 1 campaign + Readiness Funnel + 7-day nurture'
  },
  {
    name: 'High-Volume Plan',
    price: '$1,200',
    cadence: 'per month',
    description: 'Multi-niche targeting, expanded contact lists, custom AI reply handling'
  },
  {
    name: 'Pro Accelerator',
    price: '$3,500',
    cadence: 'per month',
    description: 'Includes everything plus Weekly Office Hours, Live Q&A & Masterclasses, Dedicated Success Manager'
  }
]

export default function LeadMachinePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    if (isDemoModalOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
    document.body.style.overflow = ''
  }, [isDemoModalOpen])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/true-flow-logo.webp"
                alt="TrueFlow"
                width={240}
                height={60}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              <Link href="/content-engine" className="text-white/70 hover:text-white transition-colors">Content Engine</Link>
              <Link href="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link>
              <Link
                href="/ai-readiness-assessment"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                Free Assessment
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-white/80" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/content-engine" className="block text-white/80" onClick={() => setIsMenuOpen(false)}>Content Engine</Link>
              <Link href="/faq" className="block text-white/80" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link
                href="/ai-readiness-assessment"
                className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-28 pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-600/12 to-cyan-500/8 blur-3xl" aria-hidden />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs sm:text-sm uppercase tracking-[0.32em]">
                  <CircleDashed className="h-4 w-4" /> Lead Machine&trade;
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                  Find. Engage. Qualify. Automatically.
                </h1>
                <p className="mt-6 text-xl sm:text-2xl text-white/80">
                  The TrueFlow Lead Machine&trade; identifies ready-to-buy customers, starts real conversations, and fills your pipeline — all before you wake up. Custom-built for your business, we assemble it around your stack.
                </p>
                <p className="mt-6 text-lg text-white/70">
                  We monitor live intent signals, pull verified contact data, launch human-sounding outreach, and keep nurturing until a qualified prospect is on your calendar.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
                >
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </button>
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-lg font-semibold text-white/80 hover:text-white hover:border-white/60 transition"
                  >
                    Join the Next Cohort
                  </Link>
                </div>
                <p className="mt-4 text-sm text-white/60">
                  <ShieldCheck className="inline h-4 w-4 mr-1 text-blue-300 align-text-bottom" /> ROI Assurance: if you don’t recoup your setup fee in 90 days, we keep the machine running at no service cost until you do.
                </p>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-lg font-semibold text-white">Inside the Machine</h3>
                  <ul className="mt-4 space-y-3 text-white/70 text-sm sm:text-base">
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Daily scrape of buyers who searched your keywords within the last 7 days.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Enriched firmographic filters — revenue, location, tech stack, job role, and more.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Natural conversation starters tuned to your voice so replies feel human, not scripted.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 text-blue-400" /><span>Automated routing into GoHighLevel (or your CRM) with stages, tasks, and alerts.</span></li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6">
                  <p className="text-sm text-white/80">“Wake up to inboxes full of <span className="text-white">Interested — tell me more</span> replies. That’s when you know the machine is doing its job.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Why Most Pipelines Leak</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-medium text-white">Leads aren’t the issue — the engine behind them is.</h3>
              <p className="mt-3 text-white/70">The most common lead breakdowns look like this:</p>
              <ul className="mt-6 space-y-3 text-white/70">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-blue-400" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/60">
                DIY automations or list-buying rarely fix this. They add more tools, more manual effort, and still no predictable flow.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/10 border border-white/20 rounded-3xl p-8">
              <h3 className="text-xl font-semibold">Our Promise</h3>
              <p className="mt-4 text-white/80">
                We build the machine inside your business — tailored targeting, live intent data, outreach, nurture, and reporting — so your calendar fills itself while you focus on delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">How the Machine Runs</h2>
                <p className="mt-3 text-white/70">TrueFlow handles the first 90% of your sales process, then hands you intent-qualified conversations:</p>
              </div>
              <BadgeCheck className="h-12 w-12 text-blue-400" />
            </div>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {propositionSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-300">
                    {index + 1}
                  </span>
                  <p className="text-white/80">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">In plain language:</h3>
              <ul className="mt-4 space-y-3 text-white/75">
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>Your buyers search Google or industry directories for exactly what you sell.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>The Lead Machine&trade; scrapes, verifies, and enriches those names within hours.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>We drop them into GoHighLevel (or Salesforce, HubSpot, etc.) with tags, notes, and triggers.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>Our conversation AI responds like a human, keeps the thread alive, and overcomes stalls.</span></li>
                <li className="flex gap-3"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-400" /><span>Once they say “I’m interested,” we route, score, and get them booked automatically.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-gray-900/40 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why it’s Different</h2>
            <p className="mt-6 text-lg text-white/80 max-w-3xl">
              Unlike list-buying services or cold-email agencies, we install the machine inside <span className="text-white font-medium">your</span> infrastructure. You own every workflow, dataset, audience, and result. We keep it running on flow, not friction.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col gap-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold">The Machine, Piece by Piece</h2>
              <p className="mt-4 text-white/70">
                Every component is done-for-you and tuned so the entire system runs like a single operator — only faster.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-blue-400/40">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="mt-4 text-white/70">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">What You Gain</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-black/40 border border-white/10 px-5 py-4">
                  <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-white/75">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-slate-900/50 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why You Can’t Wait</h2>
            <p className="mt-6 text-lg text-white/80">
              You can’t keep relying on referrals and bursts of hustle forever. Your competitors are already using AI to do the work you’re avoiding.
            </p>
            <p className="mt-6 text-lg text-white/80">
              We built the bridge between old-school relationship building and new-school automation. No gimmicks. No spam. Just intelligent outreach that respects your brand and multiplies your time.
            </p>
            <p className="mt-6 text-lg text-white/90 font-medium">
              When your inbox fills with replies saying, “Interested — tell me more,” you’ll know you’ve stepped into Flow.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">What's Included When You Activate</h2>
            <ol className="mt-6 space-y-4">
              {offerStack.map((item, index) => (
                <li key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-200 font-semibold">{index + 1}</span>
                  <span className="text-white/75">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-900/40 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why Believe Us</h2>
            <p className="mt-6 text-lg text-white/80">
              TrueFlow runs Lead Machine&trade; systems across multiple industries — from chiropractors to coaches, real estate to e-commerce. We’ve watched cold lists turn into booked calendars in under two weeks.
            </p>
            <p className="mt-4 text-lg text-white/80">We don’t talk theory. We install results.</p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold">Who It Works For</h2>
            <ul className="mt-6 space-y-4">
              {verticals.map((vertical) => (
                <li key={vertical} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-white/75">{vertical}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-white/70">
              If you can describe your dream client, the Lead Machine&trade; can find them.
            </p>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center">Pricing & Tiers</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl border border-white/10 bg-black/40 p-6 flex flex-col gap-4 ${plan.featured ? 'ring-1 ring-blue-400/50' : ''}`}
                >
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-white/60">{plan.description}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-3xl font-semibold">{plan.price}</p>
                    <p className="text-white/60 text-sm">{plan.cadence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-black/60 p-10 sm:p-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 uppercase tracking-[0.35em] text-xs">Ready?</span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold">Stop chasing. Start attracting.</h2>
            <p className="mt-4 text-lg text-white/80">
              Activate the TrueFlow Lead Machine&trade; and see your first qualified leads land in your inbox within days.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 text-lg font-semibold text-white/80 hover:text-white hover:border-white transition"
              >
                Join the Next Cohort
              </Link>
            </div>
          </div>
        </section>
      </main>

      {isDemoModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-black/90 p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white/70 hover:text-white"
              aria-label="Close demo booking"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-white">Lock in Your Demo</h3>
              <p className="text-white/70">
                Spots for this week are limited—choose a time below to secure your Lead Machine&trade; walkthrough.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/gsRd445hTmINPYoWlA1a"
                id="msgsndr-calendar"
                scrolling="no"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '520px' }}
                title="Book a demo with TrueFlow"
              />
            </div>
            <Script src="https://link.msgsndr.com/js/embed.js" strategy="lazyOnload" />
          </div>
        </div>
      )}
    </div>
  )
}
