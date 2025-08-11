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
  Sparkles,
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
      icon: <Clock className="h-8 w-8" />,
      title: "No Time for Social Media",
      description: "Running a business is demanding. Creating daily content feels impossible when you're focused on serving customers."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Don't Know What to Post",
      description: "Staring at a blank screen wondering what your audience wants to see. Every post feels like guesswork."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Inconsistent Online Presence",
      description: "Posting sporadically when you remember, missing opportunities to connect with potential customers daily."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Not Reaching Your Customers",
      description: "Your ideal customers are on social media, but your business isn't showing up in their feeds."
    }
  ]

  const businessBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Get More Customers",
      description: "Professional social media presence that attracts new customers and keeps existing ones engaged",
      metric: "3x more leads"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 10+ Hours Weekly",
      description: "Automated content creation and scheduling frees up time to focus on what you do best",
      metric: "10+ hours saved"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Increase Revenue",
      description: "Consistent online presence drives more foot traffic, calls, and online orders",
      metric: "$5K+ additional revenue"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Professional Brand Image",
      description: "Look established and trustworthy across all platforms, competing with bigger businesses",
      metric: "100% professional"
    }
  ]

  const industries = [
    { name: "Restaurants", icon: <Utensils className="h-8 w-8" />, example: "Daily specials, behind-the-scenes kitchen content, customer testimonials" },
    { name: "Real Estate", icon: <Home className="h-8 w-8" />, example: "Property showcases, market insights, neighborhood guides" },
    { name: "Fitness & Wellness", icon: <Heart className="h-8 w-8" />, example: "Workout tips, transformation stories, healthy living advice" },
    { name: "Beauty & Salon", icon: <Scissors className="h-8 w-8" />, example: "Before/after reveals, styling tips, product recommendations" },
    { name: "Professional Services", icon: <Briefcase className="h-8 w-8" />, example: "Industry insights, client success stories, helpful tips" },
    { name: "Retail & E-commerce", icon: <Building className="h-8 w-8" />, example: "Product highlights, customer features, shopping guides" },
    { name: "Automotive", icon: <Car className="h-8 w-8" />, example: "Service tips, customer testimonials, industry updates" },
    { name: "Legal", icon: <Scale className="h-8 w-8" />, example: "Legal tips, case studies, community involvement" },
    { name: "Education", icon: <GraduationCap className="h-8 w-8" />, example: "Educational content, student success, learning tips" }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Mitchell's Bakery",
      image: "/testimonial-sarah.jpg",
      quote: "TrueFlow transformed my bakery's social media. I just talk about my daily baking process, and it creates professional posts that bring in new customers every week.",
      results: "40% increase in daily foot traffic"
    },
    {
      name: "David Rodriguez",
      business: "Rodriguez Real Estate",
      image: "/testimonial-david.jpg",
      quote: "As a busy realtor, I never had time for social media. Now I record quick market updates during my commute, and TrueFlow handles everything else. My lead generation has tripled.",
      results: "200% more qualified leads"
    },
    {
      name: "Lisa Chen",
      business: "Zen Fitness Studio",
      image: "/testimonial-lisa.jpg",
      quote: "I was intimidated by social media marketing. TrueFlow makes it so simple - I just share my passion for fitness naturally, and it creates content that resonates with my community.",
      results: "60+ new members in 3 months"
    }
  ]

  const simpleSteps = [
    {
      step: 1,
      title: "Talk About Your Business",
      description: "Record 2-3 minutes about your day, services, or tips for customers. No script needed - just be yourself.",
      icon: <Mic className="h-12 w-12" />
    },
    {
      step: 2,
      title: "AI Creates Professional Content",
      description: "Our AI understands your business and creates engaging posts for Instagram, Facebook, LinkedIn, and more.",
      icon: <Brain className="h-12 w-12" />
    },
    {
      step: 3,
      title: "Automatically Publishes",
      description: "Content goes live at optimal times across all your platforms. You focus on running your business.",
      icon: <Send className="h-12 w-12" />
    },
    {
      step: 4,
      title: "Watch Your Business Grow",
      description: "Track engagement, new followers, and leads. See the direct impact on your business success.",
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
            Turn Your Voice Into{" "}
            <span 
              className="bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundImage: `linear-gradient(${gradientOffset}deg, 
                  hsl(${(gradientOffset + 220) % 360}, 70%, 60%), 
                  hsl(${(gradientOffset + 280) % 360}, 80%, 65%), 
                  hsl(${(gradientOffset + 340) % 360}, 85%, 70%), 
                  hsl(${(gradientOffset + 40) % 360}, 75%, 65%))`,
                backgroundSize: '300% 300%'
              }}
            >
              Customer Magnets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
            No social media experience? No problem. Just talk about your business for 2 minutes, 
            and our AI creates professional content that brings in real customers every day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <Link href="/get-started" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Start Free Trial</span>
              <ChevronRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="flex items-center space-x-4 text-white/70 hover:text-white transition-all duration-300 group hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-green-400/30 transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="h-6 w-6 ml-1 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl">See How It Works</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-white/50 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>No experience required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sound Familiar?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              You know social media could help your business, but these challenges keep holding you back
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
                The Real Cost of Doing Nothing
              </h3>
              <p className="text-white/80 text-lg mb-4">
                While you're struggling with social media, your competitors are attracting YOUR potential customers every single day.
              </p>
              <p className="text-red-400 font-semibold text-xl">
                Every day without professional social media presence = lost customers and revenue
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
              Here's How TrueFlow Solves Everything
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              No more guesswork, no more time waste, no more inconsistent posting. 
              Just professional results that grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {simpleSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/10 hover:border-green-400/30 transition-all duration-500 h-full">
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>

                {index < simpleSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-green-400/60" />
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
              <div key={index} className="bg-black/60 backdrop-blur-md rounded-2xl border border-green-500/30 p-8 hover:bg-black/80 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-xl">{benefit.metric}</div>
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
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl border border-green-500/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                ROI That Makes Sense
              </h3>
              <p className="text-white/80 text-lg mb-6">
                TrueFlow typically pays for itself within the first month through increased customer acquisition.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">$99</div>
                  <div className="text-white/60">Monthly investment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-white/60">Hours saved weekly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">$5,000+</div>
                  <div className="text-white/60">Additional revenue</div>
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
              Perfect for Your Industry
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              TrueFlow understands your business type and creates content that resonates with your specific audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/10 hover:border-blue-400/30 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
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
              Success Stories from Real Business Owners
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how TrueFlow has transformed businesses just like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-black/80 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  <p className="text-white/80 text-lg italic mb-4 group-hover:text-white/95 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.business}</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 font-semibold text-sm">RESULT:</div>
                    <div className="text-white font-bold">{testimonial.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 backdrop-blur-md rounded-3xl border border-white/20 p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Stop Losing Customers to Competitors
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto relative z-10">
              Every day you wait is another day your competitors are attracting YOUR potential customers. 
              Start your TrueFlow journey today - no experience required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 relative z-10 mb-8">
              <Link href="/get-started" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-6 rounded-full text-2xl font-semibold hover:scale-110 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 relative overflow-hidden group/btn">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start My Free Trial</span>
              </Link>
              <div className="text-white/60 text-center">
                <div className="text-sm">No setup fees • Cancel anytime</div>
                <div className="text-sm">14-day money-back guarantee</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center relative z-10">
              <div>
                <div className="text-2xl font-bold text-green-400">2 Minutes</div>
                <div className="text-white/60 text-sm">To record content</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">5 Minutes</div>
                <div className="text-white/60 text-sm">To set up everything</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-white/60 text-sm">Automated posting</div>
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
                The easiest way for business owners to create professional social media content that brings in real customers.
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