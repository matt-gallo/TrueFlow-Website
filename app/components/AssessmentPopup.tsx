'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X, ArrowRight, CheckCircle, Zap } from 'lucide-react'

const COOKIE_NAME = 'trueflow_assessment_dismissed'
const DISMISS_DAYS = 7
const DELAY_MS = 6000
const SCROLL_PCT = 30

export function AssessmentPopup() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof document !== 'undefined' && document.cookie.includes(COOKIE_NAME)) return

    let shown = false
    let timer: NodeJS.Timeout

    const show = () => {
      if (!shown) {
        shown = true
        setIsVisible(true)
      }
    }

    const onScroll = () => {
      if (shown) return
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (pct >= SCROLL_PCT) show()
    }

    timer = setTimeout(show, DELAY_MS)
    window.addEventListener('scroll', onScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const dismiss = () => {
    setIsClosing(true)
    const expires = new Date()
    expires.setDate(expires.getDate() + DISMISS_DAYS)
    document.cookie = `${COOKIE_NAME}=true; expires=${expires.toUTCString()}; path=/`
    setTimeout(() => { setIsVisible(false); setIsClosing(false) }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/assessment-optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
        setIsSubmitting(false)
        return
      }

      // Success — close popup and go to assessment with contact info
      setIsClosing(true)
      setTimeout(() => {
        setIsVisible(false)
        const params = new URLSearchParams({ firstName, email })
        router.push(`/ai-readiness-assessment?${params.toString()}`)
      }, 300)
    } catch {
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={dismiss}
      />

      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92%] max-w-lg max-h-[85vh] overflow-y-auto transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-white/10 rounded-2xl px-5 py-5 md:p-8 relative overflow-hidden shadow-2xl">
          {/* Glow blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-white/60 hover:text-white transition-colors z-20 p-1"
            aria-label="Close"
          >
            <X className="h-6 w-6 md:h-5 md:w-5" />
          </button>

          <div className="relative z-10">
            {/* Badge — hidden on mobile to save space */}
            <div className="hidden md:inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-5">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-medium">Free AI Readiness Assessment</span>
            </div>

            {/* Headline */}
            <h2 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight pr-6">
              Find out where your business is{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                leaking time and money
              </span>
            </h2>

            <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-5">
              Take our 2-minute assessment and get a personalized AI automation report.
            </p>

            {/* Benefits — hidden on mobile to keep popup compact */}
            <ul className="hidden md:block space-y-2 mb-6">
              {[
                'Your AI readiness score across 5 key areas',
                'The top 3 inefficiencies costing you the most',
                'A custom automation roadmap for your business',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-white/75 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />

              {error && (
                <p className="text-red-400 text-xs">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2.5 md:py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? (
                  'Saving...'
                ) : (
                  <>
                    Get My Free AI Readiness Score
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <button
              onClick={dismiss}
              className="block mx-auto mt-3 md:mt-4 text-white/50 hover:text-white/80 text-sm underline underline-offset-2 transition-colors"
            >
              No thanks
            </button>

            <p className="text-white/30 text-xs text-center mt-3 hidden md:block">
              Free · Takes 2 minutes · No credit card required
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
