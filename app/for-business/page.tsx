/**
 * TrueFlow AI For Business Page
 * Targeting general business owners who need social media help
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { 
  ArrowRight,
  ChevronRight,
  Play,
  Mic,
  Brain,
  FileText,
  Send,
  BarChart3,
  Zap,
  CheckCircle,
  Clock,
  Users,
  Target,
  TrendingUp,
  Globe,
  Shield,
  Layers,
  MessageSquare,
  DollarSign,
  Calendar,
  Building,
  Coffee,
  Home,
  Briefcase,
  Heart,
  Scissors,
  Utensils,
  Car,
  Scale,
  GraduationCap,
  Star,
  Quote
} from 'lucide-react'
import TrueFlowLogoIcon from '../components/TrueFlowLogoIcon'

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

interface CursorTrailPoint {
  x: number
  y: number
  timestamp: number
}

export default function ForBusinessPage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [gradientOffset, setGradientOffset] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [cursorTrail, setCursorTrail] = useState<CursorTrailPoint[]>([])
  const cursorTrailRef = useRef<CursorTrailPoint[]>([])
  const animationFrameRef = useRef<number | null>(null)

  // Generate floating particles
  const generateParticles = () => {
    const particleCount = 40
    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 4)]
      })
    }
    setParticles(newParticles)
  }

  // Animate particles
  const animateParticles = () => {
    setParticles(prev => prev.map(particle => {
      let newX = particle.x + particle.vx
      let newY = particle.y + particle.vy
      
      if (newX > window.innerWidth) newX = 0
      if (newX < 0) newX = window.innerWidth
      if (newY > window.innerHeight) newY = 0
      if (newY < 0) newY = window.innerHeight
      
      return {
        ...particle,
        x: newX,
        y: newY
      }
    }))
  }

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      generateParticles()
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY }
      setMousePosition(newPos)
      
      cursorTrailRef.current.push({
        x: newPos.x,
        y: newPos.y,
        timestamp: Date.now()
      })
      
      const now = Date.now()
      cursorTrailRef.current = cursorTrailRef.current.filter(point => now - point.timestamp < 500)
      setCursorTrail([...cursorTrailRef.current])
    }
    
    const animate = () => {
      animateParticles()
      setGradientOffset(prev => (prev + 1) % 360)
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animationFrameRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mounted])

  const businessProblems = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "You know your business better than anyone",
      description: "But explaining it online feels impossible. AI understands your expertise and translates it into content customers can find."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customers search online first",
      description: "AI ensures they find YOU, not your competitors. It works 24/7 making sure your business appears when people search."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "You don't have time for marketing",
      description: "AI handles it automatically. Like having an employee who only does marketing, but costs 90% less and never takes a day off."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Technology shouldn't be this hard",
      description: "AI eliminates the learning curve. Just tell it about your business in plain English, and it handles all the technical work."
    }
  ]

  const businessBenefits = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Works While You Sleep",
      description: "Your AI assistant creates content, responds to inquiries, and keeps your business visible 24/7 without any effort from you",
      metric: "Always working"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "AI Speaks Your Customers' Language",
      description: "It learns how your customers talk and what they care about, then creates messages that resonate with them naturally",
      metric: "Better connection"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Adapts and Improves",
      description: "Unlike static websites or ads, AI learns what works for your business and continuously improves your online presence",
      metric: "Gets smarter"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AI + Human Support",
      description: "You get the power of AI technology plus real people who ensure everything runs smoothly and helps when you need it",
      metric: "Best of both"
    }
  ]

  const industries = [
    { name: "Local Restaurants & Cafes", icon: <Utensils className="h-8 w-8" />, example: "Share your daily specials and family recipes with customers who love coming in" },
    { name: "Family-Owned Retail Stores", icon: <Building className="h-8 w-8" />, example: "Show off your products and help customers know you're open and welcoming" },
    { name: "Professional Services", icon: <Briefcase className="h-8 w-8" />, example: "Accountants, lawyers, consultants - help clients find and trust your expertise" },
    { name: "Home Services", icon: <Home className="h-8 w-8" />, example: "Plumbers, electricians, handymen - show your quality work and get more calls" },
    { name: "Medical & Dental Practices", icon: <Heart className="h-8 w-8" />, example: "Keep patients informed about services and build trust in your community" },
    { name: "Real Estate Agencies", icon: <Building className="h-8 w-8" />, example: "Show available properties and establish yourself as the local expert" }
  ]

  const testimonials = [
    {
      name: "Frank Williams",
      business: "Williams Hardware (Est. 1952)",
      image: "/testimonial-frank.jpg",
      quote: "At 73, I thought AI was science fiction. But TrueFlow's AI assistant is like having a tech-savvy grandkid helping out. I just talk about my hardware store, and AI creates professional content that brings in customers.",
      results: "35% increase in new customers"
    },
    {
      name: "Maria Santos",
      business: "Santos Family Restaurant (40 years)",
      image: "/testimonial-maria.jpg",
      quote: "AI sounded like robots taking over, but it's actually helping my family business thrive. The AI learns our recipes, our story, and creates beautiful content. It's like having a marketing expert who really knows us.",
      results: "Never used social media before - now getting 20+ new customers weekly"
    },
    {
      name: "Bob Thompson",
      business: "Thompson Plumbing",
      image: "/testimonial-bob.jpg",
      quote: "I was skeptical about AI, but it's the best employee I never hired. It writes helpful plumbing tips, seasonal reminders, and emergency advice - all while I'm out fixing pipes. Technology that actually makes sense.",
      results: "Doubled service calls in 6 months"
    }
  ]

  const simpleSteps = [
    {
      step: 1,
      title: "AI Learns Your Business",
      description: "Just talk about your business like you would to a friend. AI understands and remembers everything that makes you special.",
      icon: <Brain className="h-12 w-12" />
    },
    {
      step: 2,
      title: "AI Creates Your Content",
      description: "It writes posts, takes your ideas, and creates professional content that sounds like you - but polished and engaging.",
      icon: <TrueFlowLogoIcon size={48} />
    },
    {
      step: 3,
      title: "AI Manages Everything",
      description: "Posts at the right times, responds to basic questions, and keeps your online presence active without you lifting a finger.",
      icon: <Zap className="h-12 w-12" />
    },
    {
      step: 4,
      title: "You Get More Customers",
      description: "While AI handles the digital work, you focus on serving customers. More people find you, business grows, life stays simple.",
      icon: <TrendingUp className="h-12 w-12" />
    }
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .cursor-trail {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
        }
        .particle {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.1}s`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      {/* Cursor Trail */}
      <div className="cursor-trail">
        {cursorTrail.map((point, index) => {
          const age = Date.now() - point.timestamp
          const opacity = Math.max(0, 1 - age / 400)
          const size = Math.max(2, 6 - (age / 400) * 4)
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: point.x - size / 2,
                top: point.y - size / 2,
                width: size,
                height: size,
                background: `radial-gradient(circle, rgba(59, 130, 246, ${opacity}) 0%, rgba(139, 92, 246, ${opacity * 0.5}) 50%, transparent 100%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />
          )
        })}
      </div>

      {/* Interactive Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.03) 0%, 
            rgba(139, 92, 246, 0.02) 25%, 
            transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <Building className="h-5 w-5 text-blue-400 animate-pulse" />
            <span className="text-white/90 text-lg">For Business Owners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Let AI Be Your{" "}
            <span 
              className="bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage: `linear-gradient(${gradientOffset}deg, 
                  hsl(${(gradientOffset + 220) % 360}, 70%, 60%), 
                  hsl(${(gradientOffset + 280) % 360}, 80%, 65%), 
                  hsl(${(gradientOffset + 340) % 360}, 85%, 70%), 
                  hsl(${(gradientOffset + 40) % 360}, 75%, 65%))`,
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              Digital Assistant
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
            Artificial Intelligence handles your online presence while you focus on your customers. 
            It's like having a tech-savvy assistant who never sleeps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <Link href="/get-started" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Start with Free Consultation</span>
              <ChevronRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="flex items-center space-x-4 text-white/70 hover:text-white transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-cyan-400/30 transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="h-6 w-6 ml-1 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl">See How It Works</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-white/50 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span>No app downloads required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span>We handle everything for you</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span>Personal phone support available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why AI Changes Everything
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              You've been doing business successfully for years. Now AI can help you reach more customers without changing how you work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessProblems.map((problem, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-md rounded-2xl border border-red-500/30 p-8 hover:bg-black/80 hover:border-red-400/50 transition-all duration-500 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                    {problem.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{problem.title}</h3>
                </div>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl border border-red-500/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Bridges the Gap Between You and Your Customers
              </h3>
              <p className="text-white/80 text-lg mb-4">
                You've built your business on personal relationships and quality service. AI helps you maintain that personal touch online, 
                reaching customers where they spend their time without requiring you to become a tech expert.
              </p>
              <p className="text-cyan-400 font-semibold text-xl">
                Let AI be the bridge between your expertise and your customers' screens
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How AI Becomes Your Business Partner
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Think of AI as your digital employee - it learns about your business, 
              understands what makes you unique, and shares that with customers online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {simpleSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full">
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>

                {index < simpleSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-cyan-400/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results for Your Business
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join hundreds of business owners who've transformed their customer acquisition with TrueFlow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-8 hover:bg-black/80 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-xl">{benefit.metric}</div>
                    <div className="text-white/50 text-sm">Average result</div>
                  </div>
                </div>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Simple Investment, Real Results
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Most of our business owners see more customers within their first month. No complicated contracts or hidden fees.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$99</div>
                  <div className="text-white/60">Simple monthly fee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">Zero</div>
                  <div className="text-white/60">Technical knowledge needed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400">24/7</div>
                  <div className="text-white/60">Personal support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Adapts to Your Business Type
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI understands different industries and creates content that makes sense for your specific business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/10 hover:border-cyan-400/30 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                  {industry.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Business Owners Discover the Power of AI
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These established business owners were skeptical about AI - until they saw what it could do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-black/80 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 group">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-cyan-400 mb-4" />
                  <p className="text-white/80 text-lg italic mb-4 group-hover:text-white/95 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.business}</div>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3">
                    <div className="text-cyan-400 font-semibold text-sm">RESULT:</div>
                    <div className="text-white font-bold">{testimonial.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Makes the Difference */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why AI Is Different From Everything You've Tried
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Forget complicated apps and confusing platforms. AI is like having a smart assistant who understands your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-500/10 backdrop-blur-md rounded-2xl border border-red-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">❌ Without AI</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>You have to learn multiple apps and platforms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>You need to write posts and create content yourself</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>You must understand hashtags, algorithms, and timing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Hours spent trying to figure out what works</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">✅ With AI</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>AI handles all the technical work automatically</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Just talk about your business - AI creates the content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>AI knows when and how to post for best results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Focus on customers while AI handles the online work</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/20 to-rose-500/20 backdrop-blur-md rounded-2xl border border-white/30 p-8 text-center">
            <p className="text-2xl text-white font-semibold mb-4">
              "AI isn't here to replace you - it's here to help you compete"
            </p>
            <p className="text-white/70 text-lg">
              Big companies have marketing teams. Now you have AI. It levels the playing field.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-3xl border border-white/20 p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Let AI Work For Your Business
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto relative z-10">
              While you focus on serving customers, AI handles your online presence 24/7. 
              It's not replacing you - it's amplifying what makes your business special.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 relative z-10 mb-8">
              <Link href="/get-started" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full text-2xl font-semibold hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start with Free Consultation</span>
              </Link>
              <div className="text-white/60 text-center">
                <div className="text-sm">No app downloads • Personal phone support</div>
                <div className="text-sm">We set up everything for you</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center relative z-10">
              <div>
                <div className="text-2xl font-bold text-cyan-400">5 Minutes</div>
                <div className="text-white/60 text-sm">Phone consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">Zero</div>
                <div className="text-white/60 text-sm">Technical work for you</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">Always</div>
                <div className="text-white/60 text-sm">Human support available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Image 
                  src="/true-flow-logo.webp" 
                  alt="TrueFlow" 
                  width={200} 
                  height={60} 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/70 mb-6 max-w-md">
                Simple social media for established businesses. No technical knowledge required - we handle everything for you.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">For Business</h4>
              <div className="space-y-2">
                <Link href="/for-business" className="block text-white/70 hover:text-white transition-colors">Business Overview</Link>
                <Link href="/get-started" className="block text-white/70 hover:text-white transition-colors">Start Free Trial</Link>
                <Link href="/faq" className="block text-white/70 hover:text-white transition-colors">FAQs</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="/content-engine" className="block text-white/70 hover:text-white transition-colors">How It Works</Link>
                <Link href="/coming-soon" className="block text-white/70 hover:text-white transition-colors">Help Center</Link>
                <Link href="/coming-soon" className="block text-white/70 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
            <p>&copy; 2025 TrueFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}