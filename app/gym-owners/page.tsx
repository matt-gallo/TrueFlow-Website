/**
 * TrueFlow Gym Owners Landing Page
 * VSL page specifically for gym owners with booking CTA
 */

'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import '../animations.css'
import type { LucideIcon } from 'lucide-react'
import {
  ChevronRight,
  Zap,
  MessageSquare,
  Users,
  Clock,
  TrendingUp,
  Target,
  CheckCircle,
  Calendar,
  Dumbbell
} from 'lucide-react'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const bookingWidgetSrc = 'https://api.leadconnectorhq.com/widget/booking/nc8KAbjOlywMkW6XPSBj'
const heroBookingWidgetId = 'nc8KAbjOlywMkW6XPSBj_gym_owners'
const bookingFormBaseHeight = 760
const bookingFormScale = 0.7

// Headline variants for A/B testing - Result-focused
const headlineVariants = [
  {
    id: 'control',
    headline: 'Add 10 New Members in 90 Days',
    subheadline: 'Without Spending More on Ads',
    description: 'We build and run the backend follow-up system that turns your current leads into booked intros and paying members.'
  },
  {
    id: 'variant-a',
    headline: 'How to 2-4× New Memberships',
    subheadline: 'Without More Ad Spend or Staff',
    description: 'The problem isn\'t traffic. It\'s that no one owns what happens after interest. We do. Watch this.'
  },
  {
    id: 'variant-b',
    headline: '10+ New Members Per Month',
    subheadline: 'From Leads You Already Have',
    description: 'Stop losing members in the first 24-72 hours. We own your follow-up so every lead gets instant response, structured nurturing, and booked intros.'
  },
  {
    id: 'variant-c',
    headline: 'Double Your Intro Show Rate',
    subheadline: 'Without Hiring More Staff',
    description: 'Automated follow-up that runs 24/7 — even during class hours. We build it, we run it, we own it.'
  },
  {
    id: 'variant-d',
    headline: 'Fill Your Calendar With Qualified Intros',
    subheadline: 'Without Manual Follow-Up',
    description: 'Most gyms lose members between "I\'m interested" and "I\'m booked." We close that gap completely.'
  },
  {
    id: 'variant-e',
    headline: 'From 20% to 60% Lead-to-Member Conversion',
    subheadline: 'In 90 Days or Less',
    description: 'Same traffic. Same offer. Tighter backend. We build and manage the entire follow-up system for your gym.'
  },
  {
    id: 'variant-f',
    headline: 'Book 15+ Intros Per Week',
    subheadline: 'While You Focus on Coaching',
    description: 'We own the backend. Immediate responses. Structured follow-up. Booked consults. No more chasing leads between sets.'
  },
  {
    id: 'variant-g',
    headline: 'Predictable Member Growth Every Month',
    subheadline: 'Without Relying on You',
    description: 'The system captures, responds, nurtures, and books — automatically. You stop being the bottleneck.'
  }
]

export default function GymOwnersPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [headlineVariant, setHeadlineVariant] = useState(headlineVariants[0])
  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const heroIframeRef = useRef<HTMLIFrameElement>(null)
  const [heroBookingHeight, setHeroBookingHeight] = useState(bookingFormBaseHeight)
  const heroScaledHeight = Math.round(heroBookingHeight * bookingFormScale)

  const heroRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const bookingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    // A/B Test Logic - Check URL param or randomly assign
    const urlParams = new URLSearchParams(window.location.search)
    const variantParam = urlParams.get('variant')

    let selectedVariant
    if (variantParam) {
      // Use URL parameter variant if specified
      selectedVariant = headlineVariants.find(v => v.id === variantParam) || headlineVariants[0]
    } else {
      // Randomly assign variant for split testing
      const randomIndex = Math.floor(Math.random() * headlineVariants.length)
      selectedVariant = headlineVariants[randomIndex]

      // Store variant in session storage for consistency
      sessionStorage.setItem('gym-owners-headline-variant', selectedVariant.id)
    }

    setHeadlineVariant(selectedVariant)

    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: ['#3b82f6', '#8b5cf6', '#06b6d4'][Math.floor(Math.random() * 3)]
    }))
    setParticles(initialParticles)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const iframe = heroIframeRef.current
    if (!iframe) return

    const updateHeight = () => {
      const styleHeight = parseFloat(iframe.style.height || '')
      const measuredHeight = Number.isFinite(styleHeight) && styleHeight > 0
        ? styleHeight
        : iframe.offsetHeight || bookingFormBaseHeight
      setHeroBookingHeight(prev =>
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

  const animateParticles = () => {
    setParticles(prevParticles =>
      prevParticles.map(particle => {
        let newX = particle.x + particle.vx
        let newY = particle.y + particle.vy
        let newVx = particle.vx
        let newVy = particle.vy

        if (newX < 0 || newX > window.innerWidth) {
          newVx = -newVx
          newX = Math.max(0, Math.min(window.innerWidth, newX))
        }
        if (newY < 0 || newY > window.innerHeight) {
          newVy = -newVy
          newY = Math.max(0, Math.min(window.innerHeight, newY))
        }

        return { ...particle, x: newX, y: newY, vx: newVx, vy: newVy }
      })
    )
  }

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const animateLoop = () => {
      animateParticles()
      animationFrameRef.current = requestAnimationFrame(animateLoop)
    }

    animationFrameRef.current = requestAnimationFrame(animateLoop)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mounted])

  // Force clean background
  useEffect(() => {
    const originalBodyStyle = document.body.style.cssText
    const originalHtmlStyle = document.documentElement.style.cssText

    document.body.style.background = '#000000'
    document.body.style.backgroundImage = 'none'
    document.body.style.animation = 'none'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.documentElement.style.background = '#000000'
    document.documentElement.style.backgroundImage = 'none'

    return () => {
      document.body.style.cssText = originalBodyStyle
      document.documentElement.style.cssText = originalHtmlStyle
    }
  }, [])

  const stats = [
    { value: "10+", label: "New members/month", icon: <Users className="h-12 w-12" /> },
    { value: "24/7", label: "Automated follow-up", icon: <Clock className="h-12 w-12" /> },
    { value: "Zero", label: "Manual effort", icon: <Target className="h-12 w-12" /> },
    { value: "100%", label: "Systems managed", icon: <TrendingUp className="h-12 w-12" /> }
  ]

  const buyerPersonas = [
    {
      title: 'The Skeptical Owner',
      subtitle: 'You\'ve tried CRMs and agencies before',
      icon: Target,
      description: 'Another login. Another dashboard. Another thing you\'re supposed to manage.',
      benefits: [
        'We don\'t hand you software and wish you luck',
        'We own the execution — immediate responses, structured follow-up, booked intros',
        'No more chasing. The system handles it.'
      ],
      proof: 'I\'ve owned a gym. I know the gap between "leads coming in" and "members walking through the door." We tightened that stage. The numbers followed.'
    },
    {
      title: 'The Overwhelmed Operator',
      subtitle: 'You keep thinking "I just need more leads"',
      icon: Zap,
      description: 'But here\'s the uncomfortable question: What percentage of your current leads actually book?',
      benefits: [
        'Every lead gets an immediate response',
        'Every inquiry enters a structured sequence',
        'Every prospect is moved toward booking — without you touching your phone between sets'
      ],
      proof: 'We\'ve seen gyms increase booked consults without increasing ad spend — simply by tightening ownership of follow-up. Traffic wasn\'t the ceiling. Execution was.'
    },
    {
      title: 'The Successful But Stuck Owner',
      subtitle: 'You\'re already doing well, but growth still depends on you',
      icon: Users,
      description: 'If you pulled back for a week… would the machine keep moving? Or does growth still depend on you?',
      benefits: [
        'Predictable booking flow without your constant involvement',
        'Less operational pressure — dinner uninterrupted, vacation fully present',
        'Finally stepping out of the bottleneck role'
      ],
      proof: 'We don\'t install and disappear. We monitor. We fix. We refine. That ownership is the difference between a tool and a system.'
    }
  ]

  const systemBenefits = [
    'Every lead gets an immediate response',
    'Structured multi-day follow-up sequences',
    'No-Sweat Intros book automatically',
    'You stop being the safety net',
    'We own the execution — you own the gym'
  ]

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <div className={`min-h-screen overflow-x-hidden transition-colors ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      }`}>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle fixed pointer-events-none rounded-full z-0"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      {/* Interactive Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(139, 92, 246, 0.03) 25%,
            transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Variant Tester - Only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/90 border border-white/20 rounded-lg p-4 max-w-xs">
          <p className="text-white text-xs font-bold mb-2">Testing Variant: {headlineVariant.id}</p>
          <div className="space-y-1">
            {headlineVariants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => {
                  setHeadlineVariant(variant)
                  window.history.pushState({}, '', `?variant=${variant.id}`)
                }}
                className={`block w-full text-left px-2 py-1 text-xs rounded transition-colors ${
                  headlineVariant.id === variant.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {variant.id}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-start justify-center px-4 min-h-screen sm:py-28"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20">
                <Dumbbell className="h-5 w-5 text-cyan-400" />
                <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Built for Gym Owners
                </span>
              </div>

              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12 leading-tight px-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {headlineVariant.headline}
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {headlineVariant.subheadline}
                </span>
              </h1>

              <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4 ${
                isDarkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
                {headlineVariant.description}
              </p>
            </div>
          </div>

          {/* VSL Video Section */}
          <div className="mt-10">
            <div className={`backdrop-blur-md rounded-3xl border p-6 sm:p-8 lg:p-10 ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl'
            }`}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/pomvDQ9eGbo"
                  title="Gym Owner VSL: We Own Your Backend"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    border: 'none'
                  }}
                />
              </div>

              <div className="text-center mt-8">
                <p className={`text-lg sm:text-xl mb-6 ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                  We build and run the entire backend follow-up system for your gym.
                </p>
                <button
                  onClick={scrollToBooking}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 sm:px-10 py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <span>Book a call</span>
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300 ${
            scrollY > 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Most gyms lose members in the first 24–72 hours after someone raises their hand
              </span>
            </h2>

            <div className={`text-lg sm:text-xl mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              <p className="mb-4">Not because the coaching isn't great.</p>
              <p className="mb-4">Not because the offer isn't strong.</p>
              <p className="font-semibold">But because nobody truly owns the follow-up.</p>
            </div>

            <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20' : 'bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200'}`}>
              <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                We do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Buyer Personas Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-5xl mx-auto space-y-16">
          {buyerPersonas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <div
                key={index}
                className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white border-gray-200 shadow-lg'
                }`}
              >
                <div className="inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-blue-500 to-purple-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {persona.title}
                </h2>

                <p className={`text-lg sm:text-xl mb-6 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  {persona.subtitle}
                </p>

                <p className={`text-lg sm:text-xl mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {persona.description}
                </p>

                <div className="space-y-4 mb-8">
                  {persona.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start space-x-3 p-4 rounded-xl ${
                        isDarkMode ? 'bg-white/5' : 'bg-gray-50'
                      }`}
                    >
                      <CheckCircle className={`h-6 w-6 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                      <p className={`text-base sm:text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`border-l-4 border-cyan-400 pl-6 py-4 rounded ${
                  isDarkMode ? 'bg-cyan-400/5' : 'bg-cyan-50'
                }`}>
                  <p className={`text-base sm:text-lg italic ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {persona.proof}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* USP Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                We don't just install it. We run it.
              </span>
            </h2>

            <p className={`text-lg sm:text-xl text-center mb-8 ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              That's not another tool. That's operational control.
            </p>

            <div className="space-y-4">
              {systemBenefits.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 p-4 rounded-xl ${
                    isDarkMode ? 'bg-white/5' : 'bg-gray-50'
                  }`}
                >
                  <CheckCircle className={`h-6 w-6 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            You have to experience what it feels like when follow-up runs without you
          </h2>

          <p className={`text-lg sm:text-xl mb-4 max-w-3xl mx-auto ${
            isDarkMode ? 'text-white/80' : 'text-gray-700'
          }`}>
            When leads are handled instantly.
            <br />
            When consults get booked consistently.
            <br />
            When you are no longer the system.
          </p>

          <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-white/60' : 'text-gray-600'
          }`}>
            We'll review your current follow-up, show you exactly where members are slipping through, and outline what it looks like to remove yourself as the bottleneck.
          </p>

          <button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 sm:px-10 py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>Book the call</span>
            <ChevronRight className="h-6 w-6" />
          </button>

          <p className={`text-sm mt-4 ${
            isDarkMode ? 'text-white/50' : 'text-gray-500'
          }`}>
            No hype. Just clarity.
          </p>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section
        ref={bookingRef}
        className={`py-16 sm:py-20 px-4 relative ${
          isDarkMode ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Let's tighten what actually matters
              </span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              Clarity is where control returns.
            </p>
          </div>

          <div className={`backdrop-blur-md rounded-3xl border p-6 sm:p-8 ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl'
          }`}>
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">
              <div className="lg:w-5/12 flex flex-col justify-center space-y-4 text-left">
                <h3 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  On this call
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className={`h-5 w-5 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      We'll review your current follow-up
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className={`h-5 w-5 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      We'll show you exactly where members are slipping through
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className={`h-5 w-5 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      We'll outline what it looks like to remove yourself as the bottleneck
                    </span>
                  </li>
                </ul>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <p className={`text-base ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                    No hype. Just clarity. And clarity is where control returns.
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div
                  className="rounded-2xl overflow-hidden w-full"
                  style={{ height: `${heroScaledHeight}px` }}
                >
                  <div
                    className="origin-top-left"
                    style={{
                      transform: `scale(${bookingFormScale})`,
                      width: `${100 / bookingFormScale}%`,
                      height: `${heroBookingHeight}px`
                    }}
                  >
                    <iframe
                      ref={heroIframeRef}
                      src={bookingWidgetSrc}
                      style={{
                        width: '100%',
                        height: `${heroBookingHeight}px`,
                        border: 'none',
                        overflow: 'hidden'
                      }}
                      scrolling="no"
                      id={heroBookingWidgetId}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </>
  )
}
