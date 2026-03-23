'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import { useTheme } from '@/app/components/ThemeProvider'
import { Play, CheckCircle, Users, Coffee, Zap, ArrowRight } from 'lucide-react'

export default function CoffeeWelcomePage() {
  const router = useRouter()
  const { isDarkMode } = useTheme()
  const [isPlaying, setIsPlaying] = useState(false)

  // Auto-redirect to confirmation after video completes (or after 5 minutes)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/coffee/confirmed')
    }, 5 * 60 * 1000) // 5 minutes

    return () => clearTimeout(timer)
  }, [router])

  const handleContinue = () => {
    router.push('/coffee/confirmed')
  }

  return (
    <div className={`min-h-screen transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navigation />

      {/* Hero with success message */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-br from-green-900/20 via-black to-black'
              : 'bg-gradient-to-br from-green-50 via-white to-gray-50'
          }`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md bg-green-500/20 border border-green-500/30 mb-8">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-lg font-semibold text-green-400">
              Invitation Confirmed
            </span>
          </div>

          <h1 className={`text-5xl sm:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Welcome to the
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Inner Circle
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            Before we meet, here's a bit about why these gatherings exist
          </p>
        </div>
      </div>

      {/* Video Section - Asymmetric layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Video - 8 columns */}
          <div className="lg:col-span-8">
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-gray-900 border border-white/10' : 'bg-white border border-gray-200'
            }`}>
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                {!isPlaying ? (
                  <div className="absolute inset-0">
                    {/* Background image behind play button */}
                    <Image
                      src="/front-range-2.jpg"
                      alt="Video thumbnail"
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="group relative mb-6"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl group-hover:blur-3xl opacity-50 transition-all" />
                        <div className="relative p-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all shadow-2xl">
                          <Play className="w-12 h-12 text-white ml-1" fill="white" />
                        </div>
                      </button>
                      <p className="text-white/90 text-lg font-medium">Watch the introduction</p>
                      <p className="text-white/60 text-sm mt-1">3-4 minutes</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    {/* Replace this div with actual video embed */}
                    <div className="text-center p-12">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                        <Play className="w-12 h-12 text-white ml-1" fill="white" />
                      </div>
                      <p className="text-white/90 text-xl mb-4 font-semibold">
                        [VIDEO EMBED PLACEHOLDER]
                      </p>
                      <p className="text-white/60 mb-4">
                        Replace this with your actual video embed code
                      </p>
                      <p className="text-white/40 text-sm">
                        Example: YouTube, Vimeo, Loom, or custom video player
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video info below */}
              <div className="p-8">
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  In this video:
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      Why I moved to Colorado and what I discovered about isolation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      How technology is changing everything—and why that makes community more important
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                    <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      What happens when the right people meet in a room together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side content - 4 columns, sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            {/* What to Expect card */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode
                ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20'
                : 'bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                At the Gathering
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Honest Dialogue
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      What's really happening behind closed doors
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Trusted Space
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      What's shared stays between us
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Real Solutions
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      Systems that are actually working
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContinue}
              className="w-full group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <div className="relative z-10 flex items-center justify-between text-white">
                <div className="text-left">
                  <div className="text-sm font-medium mb-1 opacity-90">Next Step</div>
                  <div className="text-xl font-bold">View Event Details</div>
                </div>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Small image */}
            <div className="rounded-2xl overflow-hidden shadow-lg hidden lg:block">
              <Image
                src="/front-range-3.jpg"
                alt="Colorado"
                width={400}
                height={300}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
