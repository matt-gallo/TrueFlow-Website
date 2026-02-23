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
                <CheckCircle className="h-4 w-4" />
                White Glove Service
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Monthly Management Payment</span>
              </h1>
              <p className={`text-xl ${theme.textMuted} max-w-2xl mx-auto`}>
                Your system is set up and running. This is your monthly payment to keep everything managed, optimized, and working for you.
              </p>
            </div>

            {/* What's Included Section */}
            <div className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-8 mb-8 border shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'}`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-blue-400" />
                Your Monthly Management Includes
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Full CRM + Automations Management</p>
                    <p className={`text-sm ${theme.textMuted}`}>We monitor, optimize, and maintain your pipelines, automations, and integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">AI Chat Agents</p>
                    <p className={`text-sm ${theme.textMuted}`}>24/7 AI responding to leads, booking calls, and qualifying prospects automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Constant Content Engine™</p>
                    <p className={`text-sm ${theme.textMuted}`}>Weekly content, emails, and social posts published and managed for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Lead Machine™</p>
                    <p className={`text-sm ${theme.textMuted}`}>Targeted campaigns, funnels, and lead routing running on autopilot</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Direct Success Manager Access</p>
                    <p className={`text-sm ${theme.textMuted}`}>Priority support, strategy calls, and system expansion as you grow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-8 mb-8 border shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'}`}>
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="h-6 w-6 text-indigo-400" />
                <div>
                  <p className="text-2xl font-bold">Monthly Management Payment</p>
                  <p className={theme.textMuted}>Ongoing system management and optimization</p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'border-indigo-400/30 bg-indigo-400/5' : 'border-indigo-200 bg-indigo-50'} mb-6`}>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">$497</span>
                  <span className={theme.textMuted}>/month</span>
                </div>
                <p className={`text-base ${theme.textMuted} mb-4`}>
                  Billed monthly. Your system is already set up and running - this covers ongoing management, optimization, and support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    All systems monitored and maintained
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    Continuous optimization and improvements
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                    Priority support and direct manager access
                  </li>
                </ul>
              </div>

              <div className={`p-4 rounded-2xl border ${isDarkMode ? 'border-blue-500/30 bg-blue-500/10' : 'border-blue-300 bg-blue-50'} mb-6`}>
                <p className={`text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                  <Shield className="h-4 w-4 inline mr-2" />
                  Secure payment. Your system remains active and managed as long as your monthly payment is current.
                </p>
              </div>

              {/* Payment Embed */}
              <div className={`rounded-2xl overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <iframe
                  src={paymentUrl}
                  className="w-full min-h-[600px] border-0"
                  title="White Glove Payment Form"
                  allow="payment"
                />
              </div>
            </div>

            {/* FAQ Section */}
            <div className={`${theme.sectionBg} rounded-3xl backdrop-blur-xl p-8 border shadow-2xl ${isDarkMode ? 'shadow-[#1d929e]/10' : 'shadow-gray-200'}`}>
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">What does this payment cover?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    This monthly payment covers ongoing management, monitoring, optimization, and support for all your systems - CRM, automations, AI agents, content publishing, and lead campaigns.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">When is payment due?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    Payment is billed monthly. Your system remains active and fully managed as long as your payment is current.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">What happens after I pay?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    Your payment is processed immediately and your management continues uninterrupted. You'll receive a confirmation email, and your success manager remains available for any questions or adjustments.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">How do I contact support?</p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    You have direct access to your TrueFlow success manager via SMS or email. Reach out anytime during business hours for priority support, strategy calls, or system updates.
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
