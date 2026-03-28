'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useTheme } from '../components/ThemeProvider'
import { Footer } from '../components/Footer'
import { ArrowLeft } from 'lucide-react'

const bookingWidgetSrc = 'https://api.leadconnectorhq.com/widget/booking/nc8KAbjOlywMkW6XPSBj'
const bookingFormBaseHeight = 760

export default function OptInPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const [mounted, setMounted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [bookingHeight, setBookingHeight] = useState(bookingFormBaseHeight)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const iframe = iframeRef.current
    if (!iframe) return

    const updateHeight = () => {
      const styleHeight = parseFloat(iframe.style.height || '')
      const measuredHeight = Number.isFinite(styleHeight) && styleHeight > 0
        ? styleHeight
        : iframe.offsetHeight || bookingFormBaseHeight
      setBookingHeight(prev =>
        Math.abs(prev - measuredHeight) > 2 ? measuredHeight : prev
      )
    }

    const observer = new MutationObserver(() => updateHeight())
    observer.observe(iframe, { attributes: true, attributeFilter: ['style'] })

    const interval = window.setInterval(updateHeight, 1500)
    updateHeight()

    return () => {
      observer.disconnect()
      window.clearInterval(interval)
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Header */}
        <header className={`border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src={logoSrc}
                  alt="TrueFlow AI"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <Link
                href="/"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'text-white/70 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Book Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Strategy Call
                </span>
              </h1>
              <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                Let's discuss how TrueFlow AI can transform your business operations and help you capture more opportunities.
              </p>
            </div>

            {/* Calendar Section */}
            <div className={`backdrop-blur-md rounded-3xl border p-6 sm:p-8 lg:p-10 ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl'
            }`}>
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Left Side - Information */}
                <div className="lg:w-5/12 space-y-6">
                  <div>
                    <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      What to Expect
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                        </div>
                        <p className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                          <strong>30-minute consultation</strong> to understand your business goals and challenges
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                        </div>
                        <p className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                          <strong>Custom strategy</strong> tailored to your specific needs
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                        </div>
                        <p className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                          <strong>Clear next steps</strong> on how to implement AI automation in your business
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                        </div>
                        <p className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                          <strong>No pressure</strong> - just an honest conversation about what's possible
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      Select a time that works best for you, and we'll send you a calendar invitation with all the details.
                    </p>
                  </div>
                </div>

                {/* Right Side - Calendar Widget */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden w-full">
                    <iframe
                      ref={iframeRef}
                      src={bookingWidgetSrc}
                      style={{
                        width: '100%',
                        height: `${bookingHeight}px`,
                        border: 'none',
                        overflow: 'hidden'
                      }}
                      scrolling="no"
                      id="booking-widget"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-12 text-center">
              <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                Trusted by business owners who want to automate their operations and scale efficiently
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
