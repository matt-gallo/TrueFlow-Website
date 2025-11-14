'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ConsentPreferences {
  visitorData: boolean
  timestamp: number
}

export default function CookieConsent() {
  const [showModal, setShowModal] = useState(false)
  const [visitorDataConsent, setVisitorDataConsent] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Check if consent has already been given
    const consentData = localStorage.getItem('trueflow-consent')

    if (!consentData) {
      // Show modal after a brief delay for better UX
      setTimeout(() => setShowModal(true), 500)
    }
  }, [])

  const handleAccept = () => {
    const preferences: ConsentPreferences = {
      visitorData: visitorDataConsent,
      timestamp: Date.now()
    }

    localStorage.setItem('trueflow-consent', JSON.stringify(preferences))
    setShowModal(false)
  }

  // Don't render anything on server or if consent already given
  if (!isClient || !showModal) {
    return null
  }

  return (
    <>
      {/* Backdrop overlay that blocks content */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
        aria-hidden="true"
      />

      {/* Consent Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 via-black to-slate-900 p-8 sm:p-10 shadow-2xl">
          {/* Decorative gradient */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                Privacy & Preferences
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Welcome to TrueFlow
              </h2>
              <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto">
                We value your privacy. Please review and accept our data preferences to continue.
              </p>
            </div>

            {/* Consent Options */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        Visitor Information
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                        Recommended
                      </span>
                    </div>
                    <p className="text-white/60 text-sm">
                      We collect basic visitor information (name, email, phone number) to improve your website experience and enhance TrueFlow's services. This helps us understand how visitors interact with our site and optimize performance.
                    </p>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={visitorDataConsent}
                    onClick={() => setVisitorDataConsent(!visitorDataConsent)}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
                      visitorDataConsent ? 'bg-blue-500' : 'bg-white/20'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                        visitorDataConsent ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Essential Notice */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs sm:text-sm">
                      <span className="font-semibold text-white/80">Essential cookies</span> are always enabled to ensure the website functions properly. These cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                Accept & Continue
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs text-center">
                By continuing, you agree to our data handling practices. You can change your preferences at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
