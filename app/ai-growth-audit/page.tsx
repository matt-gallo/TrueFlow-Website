/**
 * TrueFlow AI Growth Audit Page (v2)
 * Ad-traffic landing page: "Get a Full AI Growth Audit"
 * Angle: find where manual processes slow you down, scale with AI instead of headcount.
 */

'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import '../animations.css'
import type { LucideIcon } from 'lucide-react'
import {
  ChevronRight,
  ChevronDown,
  Zap,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  Instagram,
  Facebook,
  Youtube,
  Inbox,
  BellRing,
  Filter,
  Repeat,
  Database,
  BarChart3
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

interface SystemBlock {
  id: string
  title: string
  description: string
  icon: LucideIcon
  gradientFrom: string
  gradientTo: string
  bullets: string[]
}

// CTAs navigate to /ai-growth-audit/chat (minimal page) where the AI chat
// widget auto-opens. chatSectionId anchors the in-page "Start" section.
const chatSectionId = 'ai-audit-chat'

const systemBlocks: SystemBlock[] = [
  {
    id: 'lead-response',
    title: 'Instant Lead Response',
    description: 'AI answers, qualifies, and books inbound leads the moment they arrive — work a human would otherwise do by hand.',
    icon: BellRing,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-purple-500',
    bullets: [
      'Replaces manual "I\'ll call them back later"',
      '24/7 response in seconds, not hours',
      'No new hire required to cover the inbox'
    ]
  },
  {
    id: 'follow-up',
    title: 'Automated Follow-Up',
    description: 'The endless reminder-and-nudge work your team does manually, handled automatically across every channel.',
    icon: Repeat,
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
    bullets: [
      'Email, SMS, and voicemail sequences that never forget',
      'Runs until a prospect buys or opts out',
      'Frees reps from chasing cold leads'
    ]
  },
  {
    id: 'qualification',
    title: 'AI Qualification & Routing',
    description: 'Sorting good leads from bad and routing them to the right place — done in milliseconds instead of by a coordinator.',
    icon: Filter,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    bullets: [
      'Your team only touches high-value opportunities',
      'No manual triage or data entry',
      'Logic built around how you actually sell'
    ]
  },
  {
    id: 'data-entry',
    title: 'CRM & Data Hygiene',
    description: 'The copy-paste, update-the-record busywork that eats hours — automated so your pipeline stays clean on its own.',
    icon: Database,
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-500',
    bullets: [
      'Records update themselves automatically',
      'No more outdated or duplicate contacts',
      'Hours of admin time given back every week'
    ]
  },
  {
    id: 'intake',
    title: 'Intake & Scheduling',
    description: 'Forms, scheduling, and back-and-forth booking emails replaced by a system that just books the appointment.',
    icon: Inbox,
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-500',
    bullets: [
      'Qualified prospects book directly into your calendar',
      'No coordinator playing email tag',
      'Reminders and confirmations sent automatically'
    ]
  },
  {
    id: 'reporting',
    title: 'Reporting & Optimization',
    description: 'The reports someone normally builds by hand each week, generated automatically — and improved over time.',
    icon: BarChart3,
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-green-500',
    bullets: [
      'See exactly where time and revenue are leaking',
      'Which campaigns and sequences actually convert',
      'No guessing, no manual spreadsheet wrangling'
    ]
  }
]

const testimonials = [
  {
    name: "Andrew",
    role: "Chiropractic Clinic",
    company: "",
    tier: "Enterprise",
    quote: "I struggled to follow up with leads, track appointments, and manage forms. With TrueFlow's AI-driven lead capture, integrated scheduling, and automatic form tracking system, more calls get booked and intake is smoother. The backend now works like it should.",
    results: ["More calls booked", "Smoother intake process", "Automated form tracking"]
  },
  {
    name: "Mike",
    role: "Owner, CrossFit 103",
    company: "",
    tier: "Enterprise Client",
    quote: "Before TrueFlow, our website was getting traffic, but visitors weren't turning into booked intros. We rebuilt the site, added AI-driven conversations, and automated follow-up. Without running ads, the system booked 13 appointments from organic traffic alone. Now that it works, we're confidently scaling with ads and social.",
    results: ["13 appointments booked organically", "AI engaging leads 24/7", "Website → conversation → booking, automated"]
  },
  {
    name: "Dr. Chris Butler",
    role: "Founder, WellPath Center",
    company: "",
    tier: "Enterprise Client",
    quote: "Before TrueFlow, we were generating leads but the system wasn't keeping up. Messages went unanswered, conversations stalled, and follow-up depended on manual effort. We activated AI agents in our DMs and SMS to qualify and respond instantly. Now about 15% of inbound leads are automatically qualified and booked into calls, even while running paid ads.",
    results: ["50 leads per week handled automatically", "AI qualifying via DM + SMS", "Consistent replies, follow-up, and bookings"]
  }
]

export default function AiGrowthAuditPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const router = useRouter()

  // All CTAs navigate to the minimal chat page where the AI widget auto-opens.
  const openChat = () => {
    router.push('/ai-growth-audit/chat')
  }

  useEffect(() => {
    setMounted(true)

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
    { value: "1000s", label: "Manual hours eliminated", icon: <Clock className="h-12 w-12" /> },
    { value: "$100k+", label: "Headcount cost avoided", icon: <TrendingUp className="h-12 w-12" /> },
    { value: "0", label: "New hires needed to scale", icon: <Users className="h-12 w-12" /> },
    { value: "24/7", label: "AI working for you", icon: <Zap className="h-12 w-12" /> }
  ]

  const painPoints = [
    'Leads handled by hand — and dropped when things get busy',
    'Follow-up that depends on someone remembering',
    'Hours lost to data entry, scheduling, and copy-paste work',
    'Reports built manually every week',
    'Every new bit of growth means another hire',
    'Your best people stuck doing work software should do'
  ]

  const manualTasks = [
    'Replying to inbound leads',
    'Chasing follow-ups',
    'Qualifying & routing',
    'Booking appointments',
    'Updating the CRM',
    'Building reports',
    'Sending reminders'
  ]

  const auditFinds = [
    'Where manual processes are slowing you down',
    'Which repetitive tasks are eating your team\'s hours',
    'Where leads and revenue are leaking',
    'Exactly which workflows AI can take over',
    'How to scale capacity without adding headcount'
  ]

  const faqs = [
    {
      question: 'What exactly is the AI Growth Audit?',
      answer: 'A working session where we map your current processes, pinpoint where manual work is slowing you down, and show you exactly which workflows AI can take over to help you scale.'
    },
    {
      question: 'Do I need a CRM or any tools already?',
      answer: 'No. We can audit and build on top of what you have, or build the entire infrastructure from scratch.'
    },
    {
      question: 'Will this replace my team?',
      answer: 'No. It removes the repetitive work so your existing team can handle far more — meaning you grow without hiring dozens of new employees.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most systems are implemented within a few weeks depending on complexity. The audit itself happens on a single call.'
    },
    {
      question: 'Is the audit really free?',
      answer: 'Yes. You\'ll leave with clarity on where you\'re losing time and money right now — whether we end up working together or not.'
    }
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

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        isDarkMode
          ? 'border-white/10 bg-black/60'
          : 'border-gray-200 bg-white/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc}
                alt="TrueFlow"
                width={280}
                height={70}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
                priority
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </Link>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={openChat}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
              >
                Book Your AI Growth Audit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center px-4 pt-40 pb-24 sm:pt-44 sm:pb-28"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            <div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get a Full AI Growth Audit
              </h1>

              <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 px-4 ${
                isDarkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
                Find out where manual processes are slowing you down — and how AI can help you scale without the need to hire dozens of new employees.
              </p>

              {/* Primary hero CTA -> scrolls to the inline AI chat */}
              <button
                onClick={openChat}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 sm:px-10 py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>Book Your AI Growth Audit</span>
                <ChevronRight className="h-6 w-6" />
              </button>

              <p className={`mt-5 text-sm ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
                Takes about 2 minutes. Chat with our AI to see if you&apos;re a fit and book your call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Reframe */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            You don&apos;t need more people. You need less manual work.
          </h2>
          <p className={`text-xl sm:text-2xl font-semibold ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
            Most businesses hit a ceiling because growth means more headcount — not because the work can&apos;t be automated.
          </p>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            The AI Growth Audit shows you exactly where your team&apos;s time is going, which of that work AI can take over, and how much capacity you unlock without adding a single new employee.
          </p>
        </div>
      </section>

      {/* Metrics / Proof Bar */}
      <section className={`py-16 relative ${
        isDarkMode ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20' : 'bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl ${
                    isDarkMode ? 'bg-white/10' : 'bg-white shadow-sm'
                  }`}>
                    {stat.icon}
                  </div>
                </div>
                <p className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Section - Manual work is the bottleneck */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Manual Work Is Quietly Capping Your Growth
              </span>
            </h2>

            <p className={`text-lg text-center mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              The more you grow, the more it shows up. Sound familiar?
            </p>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 p-4 rounded-xl ${
                    isDarkMode ? 'bg-white/5' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                  </div>
                  <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <p className={`text-lg sm:text-xl text-center mt-8 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              So you hire. Then you hire again. Costs climb faster than capacity.
              <br />
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                But most of that work doesn&apos;t need a person. It needs a system.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Hiring isn't the answer */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hiring Your Way Out Is Expensive — and Slow
          </h2>

          <p className={`text-lg sm:text-xl text-center mb-10 ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}>
            Every new hire means recruiting, onboarding, salary, and management. And they spend much of their day on work that&apos;s repetitive by design:
          </p>

          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl mb-8 ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <div className="flex flex-wrap justify-center gap-3">
              {manualTasks.map((task, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-base font-medium ${
                    isDarkMode ? 'bg-white/5 border border-white/10 text-white/80' : 'bg-gray-50 border border-gray-200 text-gray-700'
                  }`}
                >
                  {task}
                </span>
              ))}
            </div>
          </div>

          <p className={`text-lg sm:text-xl text-center ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
            AI can own all of it — instantly, around the clock, at a fraction of the cost.
            <br />
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              You scale capacity without scaling payroll.
            </span>
          </p>
        </div>
      </section>

      {/* That's where the audit comes in */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              The AI Growth Audit Maps It All Out for You
            </span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}>
            We don&apos;t hand you another tool to figure out. We look at how your business actually runs and show you, step by step:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {[
              'Where your time is actually going',
              'Which tasks are pure repetition',
              'What AI can take over first',
              'How much capacity that frees up',
              'What it would take to build it',
              'The ROI vs. hiring for the same output'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className={`h-6 w-6 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{item}</span>
              </div>
            ))}
          </div>

          <p className={`text-lg sm:text-xl mt-10 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
            You run the business.
            <br />
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              We show you where AI does the rest.
            </span>
          </p>
        </div>
      </section>

      {/* 3D Orbital System Visualization */}
      <section className={`py-16 sm:py-20 px-4 relative overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                One AI system. Every channel.
              </span>
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Everything connects. Nothing done by hand.
            </p>
          </div>

          {/* Orbital Animation Container */}
          <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] mb-12" style={{ perspective: '1000px' }}>
            {/* Central TrueFlow Symbol */}
            <div className="absolute z-10">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full blur-2xl opacity-75"
                style={{
                  background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.8) 0%, rgba(8, 145, 178, 0.6) 30%, rgba(14, 165, 233, 0.4) 50%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  left: '50%'
                }}
              />

              {/* Main symbol container */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center relative">
                {/* Enhanced glow effect */}
                <div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(8, 145, 178, 0.6) 0%, rgba(8, 145, 178, 0.4) 30%, rgba(14, 165, 233, 0.2) 50%, transparent 70%)',
                  }}
                />

                {/* Inner bright ring */}
                <div
                  className="absolute inset-2 rounded-full blur-lg"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.5) 0%, rgba(14, 165, 233, 0.3) 50%, transparent 70%)',
                  }}
                />

                <Image
                  src="/brand-kit/true-flow-logo-no-text.png"
                  alt="TrueFlow System"
                  width={60}
                  height={60}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(14,165,233,0.8)]"
                />
              </div>
            </div>

            {/* Orbiting Integration Icons */}
            {[
              {
                name: 'Instagram',
                logo: <Instagram className="w-8 h-8" />,
                color: 'from-pink-400 to-purple-500',
              },
              {
                name: 'Facebook',
                logo: <Facebook className="w-8 h-8" />,
                color: 'from-blue-500 to-blue-600',
              },
              {
                name: 'WhatsApp',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                ),
                color: 'from-green-400 to-green-500',
              },
              {
                name: 'YouTube',
                logo: <Youtube className="w-8 h-8" />,
                color: 'from-red-500 to-red-600',
              },
              {
                name: 'Discord',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189z"/>
                  </svg>
                ),
                color: 'from-indigo-400 to-purple-500',
              },
              {
                name: 'X',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                ),
                color: 'from-gray-700 to-black',
              },
              {
                name: 'Zapier',
                logo: <Zap className="w-8 h-8" />,
                color: 'from-orange-500 to-red-500',
              },
              {
                name: 'GoHighLevel',
                logo: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 8V22H5V8H8L4 3L0 8H3Z"/>
                    <path d="M11 13V22H13V13H16L12 8L8 13H11Z"/>
                    <path d="M19 8V22H21V8H24L20 3L16 8H19Z"/>
                  </svg>
                ),
                color: 'from-green-400 to-green-600',
              }
            ].map((integration, index) => {
              const angle = (index * 45) + (scrollY * 0.1);
              const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 + Math.sin(scrollY * 0.005 + index) * 15 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 200 + Math.sin(scrollY * 0.005 + index) * 20 : 280 + Math.sin(scrollY * 0.005 + index) * 30;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;

              const baseDepth = (index % 4) * 30 - 45;
              const scrollDepth = Math.sin(scrollY * 0.008 + index * 1.2) * 40;
              const totalDepth = baseDepth + scrollDepth;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 ease-out"
                  style={{
                    transform: `translate(${x}px, ${y}px) translateZ(${totalDepth}px)`,
                    transformStyle: 'preserve-3d',
                    zIndex: 5 + Math.floor(totalDepth / 15)
                  }}
                >
                  <div className="group relative">
                    {/* Connection line to center */}
                    <div
                      className="absolute transition-opacity duration-300"
                      style={{
                        width: `${radius}px`,
                        height: `8px`,
                        transformOrigin: '0 50%',
                        transform: `rotate(${angle + 180}deg) translateY(-50%)`,
                        zIndex: -1,
                        top: '50%',
                        left: '50%',
                        opacity: Math.max(0.25, 0.4 + totalDepth * 0.003),
                        clipPath: `polygon(0 0%, 0 100%, 80% 90%, 100% 50%, 80% 10%)`,
                        background: (() => {
                          const colorMap: Record<number, string> = {
                            0: 'linear-gradient(to left, transparent 0%, rgba(190, 24, 93, 0.3) 50%, #be185d 100%)',
                            1: 'linear-gradient(to left, transparent 0%, rgba(29, 78, 216, 0.3) 50%, #1d4ed8 100%)',
                            2: 'linear-gradient(to left, transparent 0%, rgba(21, 128, 61, 0.3) 50%, #15803d 100%)',
                            3: 'linear-gradient(to left, transparent 0%, rgba(220, 38, 38, 0.3) 50%, #dc2626 100%)',
                            4: 'linear-gradient(to left, transparent 0%, rgba(67, 56, 202, 0.3) 50%, #4338ca 100%)',
                            5: 'linear-gradient(to left, transparent 0%, rgba(55, 65, 81, 0.3) 50%, #374151 100%)',
                            6: 'linear-gradient(to left, transparent 0%, rgba(234, 88, 12, 0.3) 50%, #ea580c 100%)',
                            7: 'linear-gradient(to left, transparent 0%, rgba(21, 128, 61, 0.3) 50%, #15803d 100%)',
                          };
                          return colorMap[index] || 'linear-gradient(to left, transparent 0%, rgba(59, 130, 246, 0.3) 50%, #3b82f6 100%)';
                        })()
                      }}
                    />

                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${integration.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer relative z-10`}
                      style={{
                        boxShadow: `
                          0 ${Math.max(2, 8 + totalDepth * 0.2)}px ${Math.max(4, 16 + Math.abs(totalDepth) * 0.4)}px rgba(0,0,0,${Math.min(0.6, 0.3 + Math.abs(totalDepth) * 0.008)}),
                          0 ${Math.max(1, 4 + totalDepth * 0.1)}px ${Math.max(2, 8 + Math.abs(totalDepth) * 0.2)}px rgba(0,0,0,${Math.min(0.3, 0.15 + Math.abs(totalDepth) * 0.004)}),
                          0 0 ${Math.max(10, 20 + Math.abs(totalDepth) * 0.3)}px rgba(255,255,255,${totalDepth > 0 ? Math.min(0.3, totalDepth * 0.005) : 0})
                        `,
                        transform: `scale(${Math.max(0.8, 1 + totalDepth * 0.008)})`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {integration.logo}
                    </div>

                    {/* Service name tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                      <div className={`backdrop-blur-md rounded-lg px-2 py-1 text-xs whitespace-nowrap ${
                        isDarkMode ? 'bg-black/80 text-white' : 'bg-white text-gray-700 border border-gray-200 shadow'
                      }`}>
                        {integration.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Orbital rings for visual effect */}
            <div className={`absolute rounded-full w-[600px] h-[600px] animate-spin ${
              isDarkMode ? 'border border-white/10' : 'border border-gray-200'
            }`} style={{ animationDuration: '20s' }} />
            <div className={`absolute rounded-full w-[520px] h-[520px] animate-spin ${
              isDarkMode ? 'border border-white/5' : 'border border-gray-100'
            }`} style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
          </div>
        </div>
      </section>

      {/* What AI Takes Over - System Blocks */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                The Manual Work AI Takes Off Your Plate
              </span>
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Each of these is work you&apos;d otherwise hire for. AI does it instantly, around the clock.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemBlocks.map((block) => {
              const Icon = block.icon
              return (
                <div
                  key={block.id}
                  className={`backdrop-blur-md rounded-3xl p-8 border shadow-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10 hover:border-white/20'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${block.gradientFrom} ${block.gradientTo}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {block.title}
                  </h3>

                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {block.description}
                  </p>

                  <ul className="space-y-3">
                    {block.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        <span className={`text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What This Means For Your Business */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What This Looks Like Day to Day
          </h2>

          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Imagine:</p>
            <div className="space-y-3">
              {[
                'A lead comes in at 11:47 PM.',
                'AI responds within seconds — no one on the clock.',
                'It answers questions and qualifies them.',
                'Books the appointment.',
                'Updates the CRM.',
                'Sends reminders and follows up automatically.',
                'Notifies your team only when a human is needed.',
                'And logs every interaction for reporting.'
              ].map((line, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 p-3 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}
                >
                  <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{line}</span>
                </div>
              ))}
            </div>
            <p className={`text-lg sm:text-xl text-center mt-8 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              That&apos;s an entire role&apos;s worth of work — done without adding a single hire.
              <br />
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                That&apos;s how you scale with AI.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Your Free AI Growth Audit — opens the AI chat widget */}
      <section
        id={chatSectionId}
        className={`py-16 sm:py-20 px-4 relative scroll-mt-28 ${
          isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Start Your Free AI Growth Audit
              </span>
            </h2>

            <p className={`text-lg text-center mb-8 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Chat with our AI to see if you&apos;re a fit and book your call. On the audit we&apos;ll identify:
            </p>

            <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
              {auditFinds.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className={`h-6 w-6 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <span className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button
                onClick={openChat}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 sm:px-10 py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>Chat With Our AI Now</span>
                <ChevronRight className="h-6 w-6" />
              </button>

              <p className={`text-sm text-center mt-6 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                Free either way — you&apos;ll leave with clarity on where you&apos;re losing time and money right now, whether we work together or not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 px-4 ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 transition-all duration-1000 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Real Business<br />Real Results
            </h2>
            <p className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto px-4 transition-all duration-1000 ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              See how business owners used AI to handle the manual work and scale — without piling on headcount.
            </p>
          </div>

          {/* Enhanced Testimonials Horizontal Scroll */}
          <div className="relative">
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto scrollbar-hidden pb-8 pt-8 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8" style={{ scrollSnapType: 'x mandatory' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-none w-80 sm:w-88 lg:w-96 backdrop-blur-md rounded-xl sm:rounded-2xl border p-4 sm:p-6 lg:p-8 scroll-snap-align-start transition-all duration-700 group relative overflow-hidden transform-gpu ${
                    isDarkMode
                      ? 'bg-black/60 border-white/20 hover:bg-black/80 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/20'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl shadow-md'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2
                    const mouseX = e.clientX - centerX
                    const mouseY = e.clientY - centerY
                    const rotateX = (mouseY / rect.height) * -15
                    const rotateY = (mouseX / rect.width) * 15
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) scale(1.02)`
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2
                    const mouseX = e.clientX - centerX
                    const mouseY = e.clientY - centerY
                    const rotateX = (mouseY / rect.height) * -15
                    const rotateY = (mouseX / rect.width) * 15
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) scale(1.02)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)'
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite] -skew-x-12"></div>

                  {/* Profile section with enhanced animations */}
                  <div className={`flex items-center mb-4 sm:mb-6 relative z-10`} style={{ animationDelay: `${index * 200 + 400}ms` }}>
                    {/* Profile image with glow effect */}
                    <div className="relative mr-3 sm:mr-4">
                      <div
                        aria-hidden="true"
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-bold text-white text-lg sm:text-xl bg-gradient-to-br ${['from-blue-500 to-cyan-500','from-orange-500 to-red-500','from-purple-500 to-pink-500','from-green-500 to-emerald-500'][index % 4]} transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30`}
                      >
                        {testimonial.name.split(' ').filter((w) => !/^(dr\.?|mr\.?|mrs\.?|ms\.?)$/i.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase()}
                      </div>
                      {/* Animated ring around profile */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-500"></div>
                    </div>

                    <div>
                      <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                        isDarkMode ? 'text-white group-hover:text-blue-100' : 'text-gray-900 group-hover:text-blue-600'
                      }`}>{testimonial.name}</h4>
                      <p className={`text-sm sm:text-base transition-colors duration-300 ${
                        isDarkMode ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-700'
                      }`}>{testimonial.role}</p>
                      {testimonial.tier && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {testimonial.tier} Client
                        </span>
                      )}
                      <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-white/50 group-hover:text-white/70' : 'text-gray-500 group-hover:text-gray-600'
                      }`}>{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Quote with typewriter reveal effect */}
                  <blockquote className={`mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed transition-all duration-500 relative z-10 overflow-hidden ${
                    isDarkMode ? 'text-white/80 group-hover:text-white/95' : 'text-gray-700 group-hover:text-gray-800'
                  }`} style={{ animationDelay: `${index * 200 + 600}ms` }}>
                    {/* Quote mark decoration */}
                    <span className="absolute -top-2 -left-2 text-4xl text-blue-400/30 font-serif">"</span>
                    <span className="relative">{testimonial.quote}</span>
                    <span className="absolute -bottom-4 -right-2 text-4xl text-blue-400/30 font-serif">"</span>
                  </blockquote>

                  {/* Results with staggered reveal */}
                  <div className="space-y-2 relative z-10">
                    {testimonial.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 transition-all duration-500 translate-x-0 opacity-100"
                        style={{ transitionDelay: `${index * 200 + 800 + idx * 100}ms` }}
                      >
                        {/* Checkmark */}
                        <div className="relative">
                          <CheckCircle className="h-4 w-4 text-green-400 transition-all duration-300 group-hover:scale-105 group-hover:text-green-300" />
                          <div className="absolute inset-0 bg-green-400/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                        </div>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-700'
                        }`}>{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-[gentle-float_4s_ease-in-out_infinite]"
                        style={{
                          left: `${10 + i * 15}%`,
                          top: `${15 + (i % 3) * 30}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    isDarkMode ? 'bg-white/30' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className={`backdrop-blur-md rounded-2xl border overflow-hidden ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-6 w-6 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      } ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-20 sm:py-24 px-4 relative ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Scale With AI, Not Headcount
          </h2>

          <p className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}>
            Find out exactly where manual work is slowing you down — and what AI can take over so you can grow without hiring dozens of new employees.
          </p>

          <button
            onClick={openChat}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 sm:px-12 py-6 sm:py-7 rounded-full text-2xl sm:text-3xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center space-x-4"
          >
            <span>Get Your Free AI Growth Audit</span>
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </>
  )
}
