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
      isDarkMode ? 'bg-[#0a1a0e] text-white' : 'bg-[#f0f4ef] text-gray-900'
    }`}>
      <Navigation />

      {/* Hero with success message */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Pine forest background */}
        <div className="absolute inset-0">
          <Image
            src="/snow-trees-light.jpg"
            alt="Colorado pine forest"
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-b from-[#0a1a0e]/85 via-[#0d2010]/75 to-[#0a1a0e]/95'
              : 'bg-gradient-to-b from-[#1a3a20]/70 via-[#0f2a14]/60 to-[#0a1a0e]/80'
          }`} />
          {/* Misty forest floor fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1a0e] to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md bg-emerald-500/20 border border-emerald-400/40 mb-8">
            <CheckCircle className="w-6 h-6 text-emerald-300" />
            <span className="text-lg font-semibold text-emerald-300">
              Invitation Confirmed
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Welcome to the
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Inner Circle
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 drop-shadow-md">
            Before we meet, here's a bit about why these gatherings exist
          </p>
        </div>
      </div>

      {/* Video Section - Asymmetric layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Subtle pine forest texture behind content */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0e] via-[#0d2010]/80 to-[#0a1a0e]" />
        </div>
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start">
          {/* Video - 8 columns */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#0f2a14]/80 border border-emerald-900/40 backdrop-blur-sm">
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
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-2xl group-hover:blur-3xl opacity-50 transition-all" />
                        <div className="relative p-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all shadow-2xl">
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
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
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
                <h2 className="text-2xl font-bold mb-4 text-white">
                  In this video:
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-white/75">
                      Why I moved to Colorado and what I discovered about isolation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-white/75">
                      How technology is changing everything—and why that makes community more important
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-white/75">
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
            <div className="rounded-2xl p-8 bg-gradient-to-br from-emerald-900/50 to-teal-900/30 border border-emerald-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">
                At the Gathering
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">
                      Honest Dialogue
                    </h4>
                    <p className="text-sm text-white/65">
                      What's really happening behind closed doors
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">
                      Trusted Space
                    </h4>
                    <p className="text-sm text-white/65">
                      What's shared stays between us
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">
                      Real Solutions
                    </h4>
                    <p className="text-sm text-white/65">
                      Systems that are actually working
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContinue}
              className="w-full group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
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
            <div className="rounded-2xl overflow-hidden shadow-lg hidden lg:block ring-1 ring-emerald-700/30">
              <Image
                src="/snow-trees-light.jpg"
                alt="Colorado pine forest"
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
