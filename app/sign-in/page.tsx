'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

export default function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-600/20 blur-[180px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="px-6 py-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/true-flow-logo.webp"
              alt="TrueFlow"
              width={200}
              height={52}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Member Portal</span>
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <p className="text-sm text-white/70">Need an account?</p>
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
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Welcome back</p>
                <h1 className="text-3xl font-bold mt-2">Sign in to TrueFlow</h1>
                <p className="text-white/70 mt-2">Pick up where you left off — drafts, automations, and Accelerator resources are waiting.</p>
              </div>

              <label className="flex flex-col gap-2 text-sm">
                Work email
                <input
                  type="email"
                  className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                  placeholder="you@company.com"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                Password
                <input
                  type="password"
                  className="px-4 py-3 rounded-2xl bg-black/30 border border-white/10 focus:border-blue-400 focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-white/70 gap-2">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500" />
                  Remember me
                </label>
                <Link href="/coming-soon" className="text-blue-300 hover:text-blue-200">Forgot password?</Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-60"
              >
                {isSubmitting ? 'Signing you in...' : 'Sign In'}
              </button>

              <div className="flex flex-col gap-2 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-300" />
                  Secured with SSO + passkey support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  Need help? Message your success manager directly inside the portal.
                </div>
              </div>
            </form>

            <div className="space-y-6">
              <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
                <p className="text-sm text-white/70 uppercase tracking-[0.3em]">Why members stay</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-4xl font-bold">$297</p>
                    <p className="text-sm text-white/60">per month after your 14-day free trial — less than $10/day.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">TrueFlow Accelerator access</p>
                    <p className="text-sm text-white/70">2 weeks of live support, resources, and business, marketing, sales, and mindset coaching valued at $350/week.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Optional 1:1 success manager</p>
                    <p className="text-sm text-white/70">Instant messaging, voice replies, and proactive check-ins — like having a personal assistant living inside your business.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
                <p className="text-sm text-white/70 uppercase tracking-[0.3em]">Testimonials</p>
                <p className="text-lg italic mt-4 text-white/80">“This experience feels like hiring a full stack team for the price of a software login. The accelerator alone paid for itself in two weeks.”</p>
                <p className="text-sm text-white/60 mt-4">— Devon Miles, Founder @ Clarity Labs</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
