'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Check } from 'lucide-react'
import DailyNewsletterSignup from '../components/DailyNewsletterSignup'
import DeviceMockup, { GradientOrbs } from '../components/DeviceMockup'
import { VariantMotif, StatStrip } from '../components/SubscribeVisuals'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

// Variation B — "The free toolkit is the hero" (offer-led / Before-After-Bridge)
const TOOLKIT_ITEMS = [
  'The tools operators are actually paying for this quarter — and what they replaced',
  'Copy-and-run workflows for lead follow-up, content, and support',
  'Real pricing benchmarks, so you know when a quote is fair',
  'The three questions to ask any agency before you sign',
]

export default function SubscribePageB() {
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
          <FileText className="h-4 w-4 text-blue-400" />
          <span className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
            Free — Q3/2026 Business Owner&apos;s AI Toolkit
          </span>
        </div>

        <VariantMotif variant="b" />

        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          The AI plays business owners are actually running this quarter.{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Yours free.
          </span>
        </h1>

        <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
          Subscribe to the TrueFlow Daily and we&apos;ll send you the Q3/2026 Toolkit right away — the exact tools, the
          workflows, and the pricing benchmarks, so no agency sells you 2024 thinking at 2026 prices.
        </p>

        <div className="mt-12">
          <DeviceMockup tone="b" />
        </div>
      </section>

      {/* Toolkit + form, side by side */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div
            className={`rounded-2xl p-8 border ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-white/10'
                : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-gray-200'
            }`}
          >
            <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Inside the toolkit
            </div>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              The Q3/2026 Business Owner&apos;s AI Toolkit
            </h2>
            <ul className="space-y-3">
              {TOOLKIT_ITEMS.map((item) => (
                <li key={item} className={`flex gap-3 text-sm ${isDarkMode ? 'text-white/75' : 'text-gray-700'}`}>
                  <Check className="h-5 w-5 flex-shrink-0 text-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={`text-xs mt-5 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
              Updated quarterly. Delivered the moment you confirm.
            </p>
          </div>

          <DailyNewsletterSignup
            variant="b"
            headline="Where should we send it?"
            subheadline="Toolkit now. One sharp signal every weekday after. Free — unsubscribe anytime."
          />
        </div>
      </section>

      {/* Format at a glance */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <StatStrip />
      </section>

      <Footer />
    </div>
  )
}
