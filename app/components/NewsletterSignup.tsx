'use client'

import { useState } from 'react'
import { Check, Loader2, Mail, Sparkles } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const INTERESTS = [
  { slug: 'ai-tools', name: 'AI Tools' },
  { slug: 'ai-for-business', name: 'AI for Business' },
  { slug: 'agents-automation', name: 'Agents & Automation' },
  { slug: 'llm-research', name: 'LLM Research' },
  { slug: 'ai-news', name: 'AI News' },
  { slug: 'prompt-engineering', name: 'Prompt Engineering' },
] as const

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsletterSignup() {
  const { isDarkMode } = useTheme()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const toggleInterest = (slug: string) => {
    setInterests((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (interests.length === 0) {
      setErrorMsg('Pick at least one interest so we can tailor your newsletter.')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, interests }),
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
      <section className="px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <div
            className={`rounded-2xl p-8 sm:p-10 text-center backdrop-blur-sm border ${
              isDarkMode
                ? 'bg-white/10 border-white/20'
                : 'bg-white border-gray-200 shadow-lg'
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
            <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
              Watch your inbox each week for the latest in AI — tailored to what you picked.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const inputClass = `w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors ${
    isDarkMode
      ? 'bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-white/40'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500'
  }`

  return (
    <section className="px-4 mb-16">
      <div className="max-w-3xl mx-auto">
        <div
          className={`rounded-2xl p-8 sm:p-10 backdrop-blur-sm border ${
            isDarkMode
              ? 'bg-white/10 border-white/20'
              : 'bg-white border-gray-200 shadow-lg'
          }`}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 mb-4">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span
                className={`text-xs font-medium uppercase tracking-wider ${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}
              >
                Weekly AI Newsletter
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Stay ahead of what's happening in AI
            </h2>
            <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
              Pick your interests. Get the week's most important AI news, tools, and ideas — every Friday.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}
              >
                Your interests
              </label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => {
                  const selected = interests.includes(interest.slug)
                  return (
                    <button
                      key={interest.slug}
                      type="button"
                      onClick={() => toggleInterest(interest.slug)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selected
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border border-transparent'
                          : isDarkMode
                            ? 'bg-white/5 text-white/70 border border-white/20 hover:bg-white/10'
                            : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {interest.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="newsletter-first-name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  First name
                </label>
                <input
                  id="newsletter-first-name"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="newsletter-last-name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}
                >
                  Last name <span className={isDarkMode ? 'text-white/40' : 'text-gray-400'}>(optional)</span>
                </label>
                <input
                  id="newsletter-last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="newsletter-email"
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
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
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
                'Subscribe to the newsletter'
              )}
            </button>

            <p
              className={`text-xs text-center ${
                isDarkMode ? 'text-white/50' : 'text-gray-500'
              }`}
            >
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
