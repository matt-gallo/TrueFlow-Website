'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'

export default function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <div className={`min-h-screen transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${
          isDarkMode
            ? 'bg-gradient-to-b from-black via-slate-950 to-black'
            : 'bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50'
        }`} />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-600/20 blur-[180px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="px-6 py-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoSrc}
              alt="TrueFlow"
              width={200}
              height={52}
              className="h-10 w-auto"
              priority
            />
            <span className={`text-xs uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Member Portal</span>
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Need an account?</p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold"
            >
              Start 14-Day Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>

        <main className="flex-1 flex items-center justify-center px-4 pb-16">
          <div className="w-full max-w-4xl grid gap-8 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className={`border rounded-3xl p-8 backdrop-blur-xl shadow-2xl space-y-6 transition-colors ${
              isDarkMode
                ? 'bg-white/5 border-white/10 shadow-blue-500/10'
                : 'bg-white border-gray-200 shadow-blue-500/20'
            }`}>
              <div>
                <p className={`text-xs uppercase tracking-[0.4em] ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>Welcome back</p>
                <h1 className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sign in to TrueFlow</h1>
                <p className={`mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Pick up where you left off — drafts, automations, and Accelerator resources are waiting.</p>
              </div>

              <label className="flex flex-col gap-2 text-sm">
                Work email
                <input
                  type="email"
                  className={`px-4 py-3 rounded-2xl border focus:border-blue-400 focus:outline-none transition-colors ${
                    isDarkMode
                      ? 'bg-black/30 border-white/10 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  placeholder="you@company.com"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                Password
                <input
                  type="password"
                  className={`px-4 py-3 rounded-2xl border focus:border-blue-400 focus:outline-none transition-colors ${
                    isDarkMode
                      ? 'bg-black/30 border-white/10 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  placeholder="••••••••"
                  required
                />
              </label>

              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500" />
                  Remember me
                </label>
                <Link href="/coming-soon" className="text-blue-400 hover:text-blue-500">Forgot password?</Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-60 text-white"
              >
                {isSubmitting ? 'Signing you in...' : 'Sign In'}
              </button>

              <div className={`flex flex-col gap-2 text-xs ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  Secured with SSO + passkey support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Need help? Message your success manager directly inside the portal.
                </div>
              </div>
            </form>

            <div className="space-y-6">
              <div className={`p-6 rounded-3xl border transition-colors ${
                isDarkMode
                  ? 'border-white/10 bg-white/5'
                  : 'border-gray-200 bg-white shadow-md'
              }`}>
                <p className={`text-sm uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Why members stay</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$297</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>per month after your 14-day free trial — less than $10/day.</p>
                  </div>
                  <div>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>TrueFlow Accelerator access</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>2 weeks of live support, resources, and business, marketing, sales, and mindset coaching valued at $350/week.</p>
                  </div>
                  <div>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Optional 1:1 success manager</p>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Instant messaging, voice replies, and proactive check-ins — like having a personal assistant living inside your business.</p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-3xl border transition-colors ${
                isDarkMode
                  ? 'border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-600/10'
                  : 'border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 shadow-md'
              }`}>
                <p className={`text-sm uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Testimonials</p>
                <p className={`text-lg italic mt-4 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>"This experience feels like hiring a full stack team for the price of a software login. The accelerator alone paid for itself in two weeks."</p>
                <p className={`text-sm mt-4 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>— Devon Miles, Founder @ Clarity Labs</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
