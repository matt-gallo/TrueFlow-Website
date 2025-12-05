'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import { ArrowRight, Search, Layers, MessageCircle, Lock, BarChart3, FileText, Clock, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export default function RealEstateLeadMachine() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground particleCount={50} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/15 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/12 via-transparent to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs uppercase tracking-[0.32em] mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Lead Machine™ for Real Estate
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The average real estate agent spends 63% of their time searching for the next deal.
              </h1>

              <p className="text-3xl lg:text-4xl font-bold my-6 leading-tight">
                The top 10% spend that time closing.
              </p>

              <p className="text-2xl text-white/80 mb-5">
                and what if you could flip a switch?
              </p>

              <p className="text-lg text-white/70 mb-10">
                We track live intent, start human conversations, and hand your agents booked calls before they log in.
              </p>

              <div className="flex flex-wrap gap-4 mb-5">
                <button
                  onClick={scrollToDemo}
                  className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]"
                >
                  Book a Strategy Session
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/15 hover:border-white/30 transition-all">
                  See How It Works
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <img
                src="https://storage.googleapis.com/msgsndr/GVFoSfHpPaXzRXCJbym0/media/691a3c05c656aa1df31c550a.png"
                alt="TrueFlow Lead Machine Dashboard"
                className="w-full rounded-2xl border border-white/10 mb-5"
              />
              <div className="flex items-start gap-1 text-[11px] text-white/40 mt-4">
                <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5 opacity-30" />
                <span>ROI Guarantee: If the system doesn&apos;t generate enough closings to cover its cost in 90 days, we keep it running at no service fee until it does.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Brokerages Lose Agents (and Revenue)
          </h2>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3">
                You don&apos;t have a retention problem—you have a lead flow problem.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Agents leave for one reason: better opportunities elsewhere.
              </h3>
              <p className="text-white/70 mb-6">
                Here&apos;s where the cracks appear:
              </p>

              <ul className="space-y-4">
                {[
                  { title: 'Agent Retention Crisis:', text: 'Agents leave for brokerages with predictable lead flow—you lose GCI splits, recruiting momentum, and market share' },
                  { title: 'The 80/20 Trap:', text: 'Your top 20% generate 80% of revenue while the rest struggle—no system to level the playing field' },
                  { title: 'Lead Distribution Chaos:', text: 'Manual round-robin or favoritism creates resentment—no transparency on quality or conversion' },
                  { title: 'Marketing Budget Black Hole:', text: 'Spending thousands on Zillow Premier Agent, Realtor.com, Facebook ads—with zero attribution or ROI clarity' },
                  { title: 'CRM Graveyard:', text: 'Paid for kvCORE, BoomTown, or Follow Up Boss—but agents don\'t use it because manual data entry is a nightmare' },
                  { title: 'Lost Buyer Intent:', text: 'Buyers exploring neighborhoods online go to Zillow, Redfin, Compass—you never even know they existed' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">
                      <strong className="text-white">{item.title}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-white/60 mt-6">
                More Zillow leads or open house sign-ins won&apos;t fix this. You need a system that captures intent, qualifies prospects, and delivers them ready-to-convert.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-3xl p-10">
              <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
              <p className="text-white/80 mb-5">
                We build the Lead Machine™ inside your brokerage—hyper-local targeting, intent tracking, automated nurture, agent routing, and performance analytics—so your agents wake up to warm leads in their pipeline, not empty calendars.
              </p>
              <p className="text-white/70">
                When agents know quality leads are coming consistently, they stay. When they stay, you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">How the Machine Runs</h2>
              <p className="text-lg text-white/70">
                TrueFlow handles the first 90% of your lead generation process, then hands agents warm, intent-qualified prospects:
              </p>
            </div>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
              <div className="space-y-4">
                {[
                  'Monitors live buyer/seller intent across Google, Zillow, Realtor.com, and social platforms in your target zip codes',
                  'Enriches every lead with contact info, pre-qualification signals, property interests, and move timeline',
                  'Routes to the right agent based on specialty, geography, availability, or conversion rate—no favoritism, full transparency',
                  'Starts human-tone conversations with listing alerts, market updates, and neighborhood insights',
                  'Qualifies intent with a 2-minute Buyer/Seller Readiness Assessment—scores timeline, budget, and motivation',
                  'Books qualified prospects directly onto agent calendars or routes to CRM nurture workflow'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-lg font-bold text-blue-300 flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-white/80 pt-1.5">{text}</p>
                  </div>
                ))}
              </div>

              <div className="lg:sticky lg:top-24">
                <img
                  src="https://storage.googleapis.com/msgsndr/GVFoSfHpPaXzRXCJbym0/media/691a3c0e85602c02de48c742.png"
                  alt="Lead notification"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-semibold mb-5">In Plain Language:</h3>
              <ul className="space-y-3">
                {[
                  'No manual prospecting. The machine finds people searching for homes in your market right now.',
                  'No messy spreadsheets. Every lead drops into your CRM with tags, tasks, and routing pre-configured.',
                  'No agent complaints about "bad leads." We nurture for 7-30 days before routing, so they only get warm prospects.',
                  'No disconnected tools. Integrates with kvCORE, BoomTown, Follow Up Boss, Chime, or GoHighLevel.',
                  'No guessing what\'s working. Live dashboard shows lead volume, agent response time, conversion rate, and ROI.'
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/75">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Machine, Component by Component
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Every piece is done-for-you, integrated into your CRM, and tuned to your market—no assembly required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Search, title: 'Hyper-Local Buyer Hunter', text: 'AI scrapes buyer intent from search, directory, and social behavior in your target zip codes—finds people searching "homes for sale in [your city]" or "best school districts near me" in the last 7 days.' },
              { icon: Layers, title: 'Seller Trigger Engine', text: 'Identifies homeowners showing sell signals: equity thresholds hit, job relocation searches, life events, FSBO listings going stale—captures motivated sellers before Zillow does.' },
              { icon: MessageCircle, title: 'Listing Alert Autopilot', text: 'Auto-sends new listing notifications to segmented buyer lists based on price, neighborhood, beds/baths, school district—turns cold databases into engaged prospects.' },
              { icon: Lock, title: 'Open House Follow-Up Flow', text: 'Captures walk-in visitor info via iPad/QR code → triggers 7-day nurture sequence → books private showing or listing appointment automatically.' },
              { icon: BarChart3, title: 'Agent Performance Analytics', text: 'Shows lead-to-close rate by agent, average days to conversion, response time benchmarks—surfaces coaching opportunities and top performers.' },
              { icon: FileText, title: 'Market Report Generator', text: 'AI-produced monthly market snapshots (average days on market, price trends, inventory levels) branded to your brokerage and auto-sent to lead lists.' },
              { icon: Clock, title: 'CRM Sync & Task Automation', text: 'Integrates with kvCORE, BoomTown, Follow Up Boss, Chime, or GoHighLevel—auto-creates tasks, stages, tags, and alerts for every lead.' },
              { icon: Clock, title: 'Retargeting Pixel Sync', text: 'Pushes new leads into Meta/Google audiences for remarketing and lookalike campaigns tied to listing launches—amplifies reach without manual uploads.' }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-400/40 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-white/70">{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Your Brokerage Gains
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Agent Retention:', text: 'Agents stay because you\'re delivering better leads than competitors—reduces recruiting/training costs' },
                { title: 'Revenue Predictability:', text: 'Steady deal flow = more transactions = stable GCI splits and ancillary revenue (title, mortgage, insurance)' },
                { title: 'Recruiting Advantage:', text: '"We provide exclusive leads to every agent" becomes your #1 recruiting pitch' },
                { title: 'Market Dominance:', text: 'Capture buyer/seller intent before Zillow, Redfin, or Compass even know they\'re searching' },
                { title: 'Time Back to Leadership:', text: 'Stop manually vetting leads or babysitting agent follow-up—the machine runs 24/7' },
                { title: 'Scale Without Chaos:', text: 'Expand into new zip codes, property types (luxury, investment), or markets without rebuilding from scratch' }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 border border-white/10 rounded-2xl p-6 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    <strong className="text-white">{benefit.title}</strong> {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/20 rounded-3xl p-12 text-center">
            <p className="text-3xl font-semibold leading-snug mb-5">
              &quot;We went from losing 4 agents in Q1 to recruiting 6 new producers in Q2—because every agent now gets 15-20 qualified buyer leads per month, automatically.&quot;
            </p>
            <p className="text-white/70 mb-8">
              — Managing Broker, Boutique Residential Brokerage (34 agents)
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  -67%
                </div>
                <div className="text-white/70 text-sm mt-2">Agent Turnover</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  +42%
                </div>
                <div className="text-white/70 text-sm mt-2">Transactions Closed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  18-22
                </div>
                <div className="text-white/70 text-sm mt-2">Leads per Agent/Month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-3xl p-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why the Lead Machine™ Is Different
            </h2>
            <p className="text-lg text-white/80 mb-4 max-w-4xl">
              Unlike Zillow Premier Agent, Realtor.com leads, or Facebook ad agencies, we integrate the Lead Machine™ directly into <strong className="text-white">your</strong> CRM, inbox, and agent workflows. Every conversation, tag, and follow-up lives inside your environment—not someone else&apos;s portal—and we keep it running on flow, not friction.
            </p>
            <p className="text-lg text-white/70">
              These are <strong>exclusive leads</strong>—not shared with 5 other agents. Your brokerage owns the relationship from first search to closing table.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
              Pricing & Tiers
            </h2>
            <p className="text-lg text-white/70 text-center max-w-4xl mx-auto mb-12">
              Every tier includes full setup, CRM integration, and hands-on onboarding—choose the pace that matches your brokerage size and growth goals.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: 'Brokerage Setup', description: 'Full Lead Machine™ buildout + CRM integration + agent training', price: '$3,500', cadence: 'one-time', featured: true },
                { title: 'Core Plan', description: '1 market (up to 5 zip codes) + buyer/seller targeting + 500 new leads/month + basic nurture', price: '$1,200', cadence: 'per month', featured: false },
                { title: 'Growth Plan', description: 'Multi-market targeting + 1,500 leads/month + listing alert automation + market reports', price: '$2,500', cadence: 'per month', featured: false },
                { title: 'Enterprise Plan', description: 'Unlimited markets + custom agent routing + performance analytics + dedicated success manager', price: '$5,000', cadence: 'per month', featured: false }
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`bg-black/40 border ${tier.featured ? 'border-blue-400/50 shadow-[0_0_0_1px_rgba(96,165,250,0.2)]' : 'border-white/10'} rounded-3xl p-8 flex flex-col`}
                >
                  <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">{tier.description}</p>
                  <div>
                    <div className="text-4xl font-bold mb-1">{tier.price}</div>
                    <div className="text-white/60 text-sm">{tier.cadence}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-center mb-6">Add-Ons</h3>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { title: 'Open House Lead Capture Kit', price: '$500 setup + $200/month' },
                  { title: 'Seller Trigger Engine', price: '+$800/month' },
                  { title: 'Retargeting Pixel Management', price: '+$400/month' }
                ].map((addon, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h4 className="font-semibold mb-2">{addon.title}</h4>
                    <p className="text-blue-400 font-semibold text-sm">{addon.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-5">
            {[
              { question: '"Our agents don\'t follow up on leads"', answer: 'We nurture leads for 7-30 days before routing, so agents only get warm, engaged prospects who\'ve already raised their hand. We also surface agent response-time metrics so you can coach low performers.' },
              { question: '"We already pay for Zillow Premier Agent"', answer: 'TrueFlow captures intent BEFORE prospects hit Zillow—these are exclusive leads, not shared with 5 other agents. You own the relationship from day one.' },
              { question: '"Our CRM is a mess"', answer: 'We clean, organize, and standardize your data as part of setup—then keep it flowing correctly with tags, stages, and automated tasks. No more spreadsheet chaos.' },
              { question: '"This sounds expensive"', answer: 'One extra closing per month pays for the entire system. We guarantee ROI in 90 days or keep running at no service cost until you hit breakeven. The real cost is losing another agent to a competitor with better lead flow.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                <p className="text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-white/10 rounded-3xl p-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs uppercase tracking-[0.32em] mb-6">
              READY?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-6">
              Stop Chasing Agents. Start Retaining Them.
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Activate the TrueFlow Lead Machine™ and give every agent the lead flow top producers take for granted—starting in 14 days.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-5">
              <button className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all">
                Book a Strategy Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/15 hover:border-white/30 transition-all">
                Download Case Study
              </button>
            </div>
            <div className="mt-5">
              <span className="text-white/70">One strategy session away from predictable deal flow.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
