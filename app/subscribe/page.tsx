'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Coffee, Zap } from 'lucide-react'
import DailyNewsletterSignup from '../components/DailyNewsletterSignup'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

export default function SubscribePage() {
  const { isDarkMode } = useTheme()

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? 'bg-gradient-to-b from-black via-gray-950 to-black text-white'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900'
      }`}
    >
      {/* Top nav back-link */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            isDarkMode
              ? 'text-white/70 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to TrueFlow
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 mb-6">
          <Zap className="h-4 w-4 text-blue-400" />
          <span
            className={`text-xs font-medium uppercase tracking-wider ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}
          >
            TrueFlow Daily — Mon–Fri
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-5 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          One sharp read each morning.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Zero fluff.
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl max-w-2xl mx-auto mb-2 ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}
        >
          A weekday brief from Matt and the TrueFlow team — one real signal from the AI, CRM, and automation world, translated into plain English, with our take on what to actually do about it.
        </p>
        <p
          className={`text-sm ${
            isDarkMode ? 'text-white/50' : 'text-gray-500'
          }`}
        >
          Mon, Tue, Wed, Thu, Fri · ~3-minute read · no spam, ever.
        </p>
      </section>

      {/* Signup form */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <DailyNewsletterSignup />
      </section>

      {/* What you'll get */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-10 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          What lands in your inbox
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            className={`rounded-2xl p-6 border ${
              isDarkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/20 mb-4">
              <Zap className="h-5 w-5 text-blue-400" />
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              One real signal
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              A dated event from the AI, CRM, or SMB-automation world. Not "AI is changing everything" — *"On May 19, Anthropic shipped X. Here's why it matters."*
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 border ${
              isDarkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/20 mb-4">
              <Coffee className="h-5 w-5 text-purple-400" />
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              TrueFlow's take
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              What it means for an operator. What we're doing about it. What we'd push back on if another agency tried to sell it to you.
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 border ${
              isDarkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-400/20 mb-4">
              <Calendar className="h-5 w-5 text-pink-400" />
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Questions to ask
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}
            >
              One or two sharp questions you can take to your current provider or your own team — so the read pays for itself before lunch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
