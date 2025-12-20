'use client'

import Script from 'next/script'
import Navigation from '@/app/components/Navigation'
import { Footer } from '@/app/components/Footer'
import { useTheme } from '@/app/components/ThemeProvider'

export default function ContactPage() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}>
              Get in Touch
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          {/* GoHighLevel Form Container */}
          <div className={`backdrop-blur-lg border rounded-2xl overflow-hidden ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <div className="p-4 sm:p-8">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Qcsc0GJ1eFMdThA0BqxJ"
                style={{width: '100%', height: '932px', border: 'none', borderRadius: '3px'}}
                id="inline-Qcsc0GJ1eFMdThA0BqxJ"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="General Contact Form - Website"
                data-height="932"
                data-layout-iframe-id="inline-Qcsc0GJ1eFMdThA0BqxJ"
                data-form-id="Qcsc0GJ1eFMdThA0BqxJ"
                title="General Contact Form - Website"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className={`mt-12 text-center ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
            <p className="mb-2">
              <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Phone:</strong>{' '}
              <a href="tel:+14246675537" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                +1 424-667-5537
              </a> (call or text)
            </p>
            <p>
              <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Address:</strong>{' '}
              1621 Central Avenue, Cheyenne, Wyoming 82001
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
