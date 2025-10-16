'use client'

import { useEffect, useState } from 'react'
import { X, MapPin, Calendar, Gift } from 'lucide-react'

interface EventPopupProps {
  onClose: () => void
}

export default function EventPopup({ onClose }: EventPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    // Animate in after a short delay
    const timer = setTimeout(() => setIsVisible(true), 100)

    return () => {
      clearTimeout(timer)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300) // Wait for animation to complete
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-2 py-2 sm:px-4 sm:py-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal */}
        <div
          className={`relative w-full max-w-4xl max-h-[98vh] overflow-y-auto transform transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 shadow-2xl border border-gray-700/50">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors group z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            {/* Decorative gradient orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 italic tracking-wide">
                  An Invitation to Flow
                </h2>

                {/* Body Copy */}
                <div className="space-y-3 sm:space-y-4 text-gray-200 leading-relaxed max-w-xl mx-auto">
                  <p className="text-sm sm:text-base">
                    Something's happening tonight at the <span className="text-white font-semibold">Rodeo GOAT</span>
                    <br />
                    <span className="text-white font-semibold">7pm sharp.</span>
                    <br />
                    <span className="text-xs sm:text-sm text-gray-400">(Across the street from the Hilton Anatole)</span>
                  </p>

                  <p className="text-sm sm:text-base">
                    It's not a conference.
                    <br />
                    It's not a pitch.
                    <br />
                    <span className="text-white font-medium">It's an experience.</span>
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    A small circle of creators, builders, and innovators coming together for one night — no name tags, no agendas, just conversation, connection, and flow.
                  </p>

                  <div className="text-sm sm:text-base space-y-1 py-2">
                    <p className="text-white">First drinks + apps are on us.</p>
                    <p className="text-white">Access is limited.</p>
                    <p className="text-white">Gifts and surprises included.</p>
                  </div>

                  <p className="text-sm sm:text-base text-purple-300 italic">
                    If you know, you know.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 space-y-6">
                {/* CTA Button */}
                <div className="text-center space-y-3">
                  <button
                    onClick={() => {
                      const iframe = document.getElementById('inline-qR5oj4f5LkzxrjN1PbYh')
                      if (iframe) {
                        iframe.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      }
                    }}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Reserve Your Spot
                  </button>

                  <p className="text-sm text-gray-400">
                    Rodeo GOAT · Oct 16 · 7pm / Hosted by TrueFlow.AI
                  </p>
                </div>

                {/* Form Embed */}
                <div className="rounded-lg overflow-hidden bg-transparent">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/qR5oj4f5LkzxrjN1PbYh"
                    style={{ width: '100%', height: '400px', border: 'none', borderRadius: '4px', background: 'transparent' }}
                    id="inline-qR5oj4f5LkzxrjN1PbYh"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Free Training Form"
                    data-height="460"
                    data-layout-iframe-id="inline-qR5oj4f5LkzxrjN1PbYh"
                    data-form-id="qR5oj4f5LkzxrjN1PbYh"
                    title="Free Training Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
