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
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Check if consent has already been given
    const consentData = localStorage.getItem('trueflow-consent')

    if (!consentData) {
      // Listen for scroll event
      const handleScroll = () => {
        if (!hasScrolled && window.scrollY > 50) {
          setHasScrolled(true)
          setShowModal(true)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [hasScrolled])

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
      {/* Consent Popup - Desktop: bottom-right, Mobile: slide up from bottom */}
      <div className={`
        fixed z-[100]
        bottom-0 right-0
        w-full sm:w-auto sm:max-w-md
        sm:bottom-6 sm:right-6
        transition-transform duration-500 ease-out
        ${showModal ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <div className="
          relative
          bg-gradient-to-br from-slate-900 via-black to-slate-900
          border border-white/20
          shadow-2xl shadow-blue-500/20
          sm:rounded-3xl
          h-[50vh] sm:h-auto
          overflow-y-auto
          p-6 sm:p-8
        ">
          {/* Decorative gradient */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 rounded-full p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <h2 className="text-xl font-semibold text-white">
                  Privacy & Preferences
                </h2>
              </div>
              <p className="text-white/70 text-sm">
                We value your privacy. Choose your data preferences below.
              </p>
            </div>

            {/* Consent Options */}
            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-white">
                        Visitor Information
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                        Recommended
                      </span>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      We collect basic information (name, email, phone) to improve your experience and enhance our services.
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
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  <p className="text-white/50 text-xs leading-relaxed">
                    <span className="font-medium text-white/70">Essential cookies</span> are always enabled for functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Accept & Continue
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-white/10">
              <p className="text-white/40 text-xs text-center">
                By continuing, you agree to our data practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
