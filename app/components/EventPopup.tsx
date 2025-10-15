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
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 transition-all duration-300 ${
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
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl border border-gray-700/50">
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
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Hey HighLevelers!
                </h2>
                <p className="text-gray-300 text-lg">
                  Join TrueFlow for drinks & appetizers
                </p>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium">Rodeo Goat</p>
                    <p className="text-gray-300 text-sm">1926 Market Center Blvd</p>
                    <p className="text-gray-300 text-sm">Outdoor Patio</p>
                  </div>
                </div>

                {/* Date & Time - UPDATE THESE */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">When</p>
                    <p className="text-white font-medium">Thursday, October 16th</p>
                    <p className="text-gray-300 text-sm">7:00 PM CST</p>
                  </div>
                </div>
              </div>

              {/* Perks */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-purple-400" />
                  <p className="text-white font-semibold">What's Included:</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                  <li>• Free first drink on us</li>
                  <li>• Complimentary appetizers</li>
                  <li>• 1 month free TrueFlow</li>
                  <li>• No RSVP required</li>
                </ul>
              </div>

              {/* Embedded Form */}
              <div className="mt-6">
                <h3 className="text-white text-lg font-semibold mb-3 text-center">
                  Claim Your Free Drink & Month Free
                </h3>
                <p className="text-center text-gray-400 text-sm mb-4">
                  Fill out the form below to get your perks
                </p>
                <div className="rounded-lg overflow-hidden bg-transparent">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/qR5oj4f5LkzxrjN1PbYh"
                    style={{ width: '100%', height: '460px', border: 'none', borderRadius: '4px', background: 'transparent' }}
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
