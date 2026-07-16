'use client'

import Link from 'next/link'
import { ArrowLeft, Gift, Zap, Coffee, Calendar } from 'lucide-react'
import DailyNewsletterSignup from '../components/DailyNewsletterSignup'
import DeviceMockup, { GradientOrbs } from '../components/DeviceMockup'
import { VariantMotif, StatStrip } from '../components/SubscribeVisuals'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

// Variation A — "First to know, first to act" (gain-framed / opportunity-led)
// Tests the gain frame against B (offer-led) and C (proof-led). Deliberately NOT
// loss/FOMO: our reader is already ahead of the curve — telling him he's behind
// repels the exact person we want. The differentiator is the ACT half; every
// AI newsletter promises knowing.
export default function SubscribePageA() {
  const { isDarkMode } = useTheme()

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? 'bg-gradient-to-b from-black via-gray-950 to-black text-white'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to TrueFlow
        </Link>
      </div>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-4 pt-12 pb-8 text-center">
        <GradientOrbs />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 mb-6">
          <Gift className="h-4 w-4 text-blue-400" />
          <span className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
            Free daily brief for operators
          </span>
        </div>

        <VariantMotif variant="a" />

        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Be the first to know.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            And the first to act.
          </span>
        </h1>

        <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
          Everyone&apos;s drowning in AI news. Almost nobody knows what to do with it. Every weekday we read the entire
          AI, CRM and automation firehose, pull the one development that actually touches how you run your business,
          and hand you the play to run with it.
        </p>
        <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
          Three minutes, before your coffee&apos;s cold. Mon–Fri · unsubscribe anytime.
        </p>

        <div className="mt-12">
          <DeviceMockup tone="a" />
        </div>
      </section>

      {/* Signup */}
      <section className="max-w-3xl mx-auto px-4 pt-4 pb-8">
        <DailyNewsletterSignup
          variant="a"
          headline="Start tomorrow morning."
          subheadline="Drop your email and tomorrow's brief is your first one. The free Q3/2026 AI Toolkit lands the moment you confirm."
        />
      </section>

      {/* Format at a glance */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <StatStrip />
      </section>

      {/* What lands in your inbox */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          What lands in your inbox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { Icon: Zap, title: 'One real signal', body: 'A dated event from the AI, CRM, or automation world — “This week, X shipped Y. Here’s why it matters.”' },
            { Icon: Coffee, title: 'TrueFlow’s take', body: 'What it means for an operator, what we’d do about it, and what we’d push back on.' },
            { Icon: Calendar, title: 'Questions to ask', body: 'One or two sharp questions for your team or your provider — so the read pays for itself.' },
          ].map(({ Icon, title, body }) => (
            <div key={title} className={`rounded-2xl p-6 border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 mb-4">
                <Icon className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
