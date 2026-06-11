'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'

const CHECKOUT_URLS = {
  whiteGlove: 'https://link.fastpaydirect.com/payment-link/696ffc86ac4fd06d0ec57a61',
  maintain: 'https://link.fastpaydirect.com/payment-link/6920f7f2bbe219eb5e3624d1',
}

const whiteGloveFeatures = [
  'AI front desk — answers calls, texts & DMs 24/7',
  'Automated Google review collection',
  'Email & SMS marketing campaigns',
  'Automated blog posts (SEO + AI search optimized)',
  'Custom dashboard & monthly health report',
  'Free strategy session — we build it with you',
  'Done-for-you implementation',
  'Priority support',
]

const maintainFeatures = [
  'Website hosting & maintenance',
  'Platform access',
  'Updates & technical support',
  'Upgrade to White Glove anytime',
]

export default function PlansPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
          <Link href="/">
            <Image src={logoSrc} alt="TrueFlow" width={160} height={40} className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center px-6 pt-8 pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
            Simple Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            No trial periods. No hidden fees. Pick what fits and we&apos;ll get you set up today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto px-6 pb-24 grid gap-6 sm:grid-cols-2">

          {/* White Glove */}
          <div className="relative rounded-2xl border border-cyan-500/40 bg-white/5 backdrop-blur-sm p-8 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full">
                Best Value
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">White Glove</h2>
              <div className="flex items-end gap-1 mt-3">
                <span className="text-5xl font-black text-white">$497</span>
                <span className="text-white/50 mb-2">/mo</span>
              </div>
              <p className="text-white/60 text-sm mt-2">Full-service automation built and managed with you</p>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {whiteGloveFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={CHECKOUT_URLS.whiteGlove}
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-opacity text-white font-semibold py-3.5 rounded-xl"
            >
              Get Started — $497/mo
            </a>
          </div>

          {/* Maintain */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Maintain</h2>
              <div className="flex items-end gap-1 mt-3">
                <span className="text-5xl font-black text-white">$297</span>
                <span className="text-white/50 mb-2">/mo</span>
              </div>
              <p className="text-white/60 text-sm mt-2">Keep your current site and platform running smoothly</p>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {maintainFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={CHECKOUT_URLS.maintain}
              className="block w-full text-center border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors text-white font-semibold py-3.5 rounded-xl"
            >
              Keep It Running — $297/mo
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-sm pb-12">
          Questions? Text Matt directly.
        </p>
      </div>
    </div>
  )
}
