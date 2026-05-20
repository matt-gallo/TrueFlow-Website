'use client'

import { useState } from 'react'
import { Check, Loader2, Mail, Sparkles } from 'lucide-react'
import { useTheme } from './ThemeProvider'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface DailyNewsletterSignupProps {
  /** Optional override headline (e.g. when embedded in a landing section) */
  headline?: string
  /** Optional override sub-headline */
  subheadline?: string
  /** Compact mode hides the badge + tightens spacing — useful for sidebars/footers */
  compact?: boolean
}

export default function DailyNewsletterSignup({
  headline = "Get the Q2/2026 Business Owner's AI Toolkit — free.",
  subheadline = "Daily AI insights in your inbox so you never miss the next big thing. Subscribe and we'll send you the Q2/2026 Business Owner's AI Toolkit on the house.",
  compact = false,
}: DailyNewsletterSignupProps) {
  const { isDarkMode } = useTheme()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setStatus('submitting')

    try {
      const res = await fetch('/api/daily-newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Could not complete signup. Please try again.')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-2xl ${compact ? 'p-6' : 'p-8 sm:p-10'} text-center backdrop-blur-sm border ${
          isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200 shadow-lg'
        }`}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          <Check className="h-7 w-7 text-white" />
        </div>
        <h3
          className={`text-2xl font-semibold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          You're in, {firstName}.
        </h3>
        <p className={`mb-3 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
          Your Q2/2026 Business Owner's AI Toolkit is on its way — check your inbox in the next few minutes.
        </p>
        <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
          After that, the TrueFlow Daily lands each weekday morning. One signal worth your attention.
        </p>
      </div>
    )
  }

  const inputClass = `w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors ${
    isDarkMode
      ? 'bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-white/40'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500'
  }`

  return (
    <div
      className={`rounded-2xl ${compact ? 'p-6' : 'p-8 sm:p-10'} backdrop-blur-sm border ${
        isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200 shadow-lg'
      }`}
    >
      {!compact && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 mb-4">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? 'text-white/80' : 'text-gray-700'
              }`}
            >
              Free bonus + Daily newsletter
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {headline}
          </h2>
          <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
            {subheadline}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="daily-newsletter-first-name"
            className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}
          >
            First name
          </label>
          <input
            id="daily-newsletter-first-name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jane"
            autoComplete="given-name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="daily-newsletter-email"
            className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}
          >
            Email
          </label>
          <div className="relative">
            <Mail
              className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${
                isDarkMode ? 'text-white/40' : 'text-gray-400'
              }`}
            />
            <input
              id="daily-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              className={`${inputClass} pl-12`}
            />
          </div>
        </div>

        {errorMsg && (
          <p className="text-sm text-red-400" role="alert">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Subscribing…
            </>
          ) : (
            'Subscribe to the Daily'
          )}
        </button>

        <p
          className={`text-xs text-center ${
            isDarkMode ? 'text-white/50' : 'text-gray-500'
          }`}
        >
          One email per weekday. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
