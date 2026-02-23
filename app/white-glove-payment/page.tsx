'use client'

export const dynamic = 'force-dynamic'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '@/app/components/Navigation'
import { useTheme } from '@/app/components/ThemeProvider'
import { CheckCircle, CreditCard, HeartHandshake, Shield, Sparkles } from 'lucide-react'

function WhiteGlovePaymentContent() {
  const { isDarkMode } = useTheme()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [paymentId] = useState(`payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    // Pre-fill from URL params if provided
    const emailParam = searchParams.get('email')
    const nameParam = searchParams.get('name')
    if (emailParam) setEmail(emailParam)
    if (nameParam) setName(nameParam)
  }, [searchParams])

  // Theme classes
  const theme = {
    bg: isDarkMode ? 'bg-black' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textMuted: isDarkMode ? 'text-white/70' : 'text-gray-600',
    textMuted2: isDarkMode ? 'text-white/60' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-white/5' : 'bg-white',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200',
    gradientBg: isDarkMode ? 'from-black via-slate-950 to-black' : 'from-gray-50 via-white to-gray-50',
    glowOpacity: isDarkMode ? '/10' : '/5',
    sectionBg: isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl',
  }

  // White Glove payment link
  const paymentUrl = `https://link.fastpaydirect.com/payment-link/696ffc86ac4fd06d0ec57a61?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&payment_id=${encodeURIComponent(paymentId)}`

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradientBg}`} />
        <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-blue-500${theme.glowOpacity} blur-[160px]`} />
        <div className={`absolute bottom-0 right-10 w-[420px] h-[420px] bg-purple-500${theme.glowOpacity} blur-[180px]`} />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-sm font-semibold mb-6">
                <HeartHandshake className="h-4 w-4" />
                White Glove Service
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Complete your <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">White Glove Service</span> payment
              </h1>
              <p className={`text-xl ${theme.textMuted} max-w-2xl mx-auto`}>
                We build and run your entire sales and marketing system for you - custom CRM, AI follow-up, content, and lead-gen systems designed, installed, and managed by TrueFlow.
              </p>
            </div>

            {/* What's Included Section */}
            <div className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-8 mb-8 border shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'}`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-blue-400" />
                What You Get
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Custom system build tailored to your business</p>
                    <p className={`text-sm ${theme.textMuted}`}>Full CRM, AI chat agents, content engine, and lead machine customized to how your business operates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Ongoing technical management and optimization</p>
                    <p className={`text-sm ${theme.textMuted}`}>We monitor, maintain, and continuously improve your systems so they work seamlessly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Direct access to a TrueFlow success manager</p>
                    <p className={`text-sm ${theme.textMuted}`}>Your dedicated point of contact for strategy, support, and system expansion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Priority support and strategy calls</p>
                    <p className={`text-sm ${theme.textMuted}`}>Fast response times and regular check-ins to keep you on track</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Content Engine strategy and setup</p>
                    <p className={`text-sm ${theme.textMuted}`}>Weekly content aligned to your offer, published and managed for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-8 mb-8 border shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'}`}>
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="h-6 w-6 text-indigo-400" />
                <div>
                  <p className="text-2xl font-bold">White Glove DFY Service</p>
                  <p className={theme.textMuted}>Complete done-for-you system build and management</p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'border-indigo-400/30 bg-indigo-400/5' : 'border-indigo-200 bg-indigo-50'} mb-6`}>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">$497</span>
                  <span className={theme.textMuted}>/month</span>
                </div>
                <p className={`text-base ${theme.textMuted} mb-4`}>
                  Typical plans include a setup fee and monthly management. Your custom pricing was discussed during your consultation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    Complete CRM, automation, and AI system build
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    Ongoing management and optimization included
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    Direct success manager access
                  </li>
                </ul>
              </div>

              <div className={`p-4 rounded-2xl border ${isDarkMode ? 'border-blue-500/30 bg-blue-500/10' : 'border-blue-300 bg-blue-50'} mb-6`}>
                <p className={`text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                  <Shield className="h-4 w-4 inline mr-2" />
                  Your payment information is secure and encrypted.
                </p>
              </div>

              {/* Payment Embed */}
              <div className={`rounded-2xl overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <iframe
                  src={paymentUrl}
                  className="w-full min-h-[900px] border-0"
                  title="White Glove Payment Form"
                  allow="payment"
                />
              </div>
            </div>

            {/* FAQ Section */}
            <div className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-8 border shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'}`}>
              <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">When does the system build start?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    Your build starts on Day 1. We'll begin with a strategy and technical onboarding session where we audit your current tools and map your sales flow. You'll receive an email within 24 hours with your success manager's contact information and next steps.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">What's the timeline for going live?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    Most systems go live within 7 days. Day 1: Strategy & onboarding. Day 3: System build & integration. Day 7: Activation & optimization. Ongoing: Management & support.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">What systems will be built for me?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    We build your full CRM with custom pipelines, AI chat agents trained on your business, automated follow-up sequences, content engine for weekly publishing, and lead acquisition systems - all customized to how your business operates.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">How do I contact my success manager?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    You'll have direct access via SMS or email. Your success manager will provide their contact details within 24 hours of payment, and you can reach out anytime during business hours for priority support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function WhiteGlovePaymentPage() {
  return (
    <Suspense fallback={null}>
      <WhiteGlovePaymentContent />
    </Suspense>
  )
}
