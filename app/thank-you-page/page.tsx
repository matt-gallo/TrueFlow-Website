/**
 * TrueFlow AI Thank You Page
 * Shown after form submission
 */

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/app/components/ThemeProvider'

export default function ThankYouPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={logoSrc}
                alt="TrueFlow"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 animate-ping">
                <div className="w-full h-full rounded-full border-2 border-green-400/50"></div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Thank You!
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            We've received your information and will be in touch within 24 hours to discuss how we can help automate your business.
          </p>

          {/* Next Steps */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12 text-left">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">We Review Your Info</h3>
                  <p className="text-white/70">Our team will analyze your business needs and identify automation opportunities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">We Reach Out</h3>
                  <p className="text-white/70">Expect a call or email within 24 hours to schedule your free consultation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">We Build Your Solution</h3>
                  <p className="text-white/70">Once approved, we get to work building automations tailored to your business.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>Back to Home</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="https://calendly.com/trueflow-ai/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Now</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="text-white/60 text-sm">
            <p>Questions? Email us at <a href="mailto:support@trueflow.ai" className="text-blue-400 hover:text-blue-300">support@trueflow.ai</a></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
