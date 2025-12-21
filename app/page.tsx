/**
 * TrueFlow AI Landing Page - Apple-inspired Design
 * Self-contained landing page with 3D carousel and modern animations
 */

'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getPublishedPosts, tagColorPalettes } from '@/app/data/blog-posts'
import type { BlogPost } from '@/app/types/blog'
import './animations.css'
import type { LucideIcon } from 'lucide-react'
import {
  ChevronRight,
  ChevronDown,
  Play,
  Zap,
  Brain,
  Mail,
  Calendar,
  TrendingUp,
  Users,
  MessageSquare,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Clock,
  Mic,
  Target,
  BarChart3,
  FileText,
  Send,
  Filter,
  Menu,
  X,
  MousePointer,
  Smartphone,
  Laptop,
  Shield,
  Layers,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
  Sparkles,
  ArrowDown
} from 'lucide-react'
import TrueFlowLogoIcon from './components/TrueFlowLogoIcon'
import { Footer } from './components/Footer'
import { useTheme } from './components/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

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

interface SolutionProduct {
  id: string
  name: string
  title: string
  description: string
  icon: LucideIcon
  gradientFrom: string
  gradientTo: string
  accent: string
  borderHover: string
  bgGlow: string
  bullets: string[]
  hook: string
  story: string
  offer: string
  offerHighlights: string[]
  ctaHref: string
}


const solutionProducts: SolutionProduct[] = [
  {
    id: 'full-crm',
    name: 'Full CRM + Automations',
    title: 'Full CRM + Automations',
    description: 'All-in-one platform that tracks every lead and customer for you.',
    icon: Zap,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-purple-500',
    accent: 'text-blue-300',
    borderHover: 'hover:border-blue-500/50',
    bgGlow: 'from-blue-500/20 via-purple-500/20 to-transparent',
    bullets: [
      'Lead capture from forms, ads, chat, website, and DMs.',
      'Full CRM & Pipeline Management - never lose a lead again',
      'Email & SMS Automation - nurture leads automatically',
      'Reputation Management - collect 5-star reviews at scale',
      'Analytics & Reporting - know exactly what\'s working'
    ],
    hook: 'Your team is juggling six tools and nobody has the full picture of the customer.',
    story: 'We sit with your operators, map exactly how you sell and deliver, then configure your CRM with automations, approvals, and alerts that match your process. No more duct tape or guessing who owns what.',
    offer: '30-day retrofit: migration, automations, SOPs, and ongoing optimization so the system grows with you.',
    offerHighlights: ['Workflow mapping workshop', 'Custom dashboards for ops + revenue', 'Priority support & optimization hours'],
    ctaHref: '/sign-up'
  },
  {
    id: 'ai-chat-agents',
    name: 'AI Chat Agents',
    title: 'AI Chat Agents',
    description: 'Smart chat agents that book calls 2-3x faster, available 24/7.',
    icon: MessageSquare,
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
    accent: 'text-green-300',
    borderHover: 'hover:border-green-500/50',
    bgGlow: 'from-green-500/20 via-emerald-500/20 to-transparent',
    bullets: [
      'AI Chat Agents - book calls 2-3x faster, 24/7',
      'Smart scheduling - prospects book directly into your calendar',
      'Instant responses to common questions',
      'Qualify leads automatically before they reach you'
    ],
    hook: 'Prospects visit your site but leave without booking because no one\'s there to help them.',
    story: 'Our AI agents are trained on your business and available round-the-clock. They answer questions, qualify prospects, and book appointments directly into your calendar while you sleep.',
    offer: 'AI agents that work 24/7 to capture and qualify leads, turning website visitors into booked appointments.',
    offerHighlights: ['Custom AI training on your business', '24/7 lead capture and qualification', 'Direct calendar integration'],
    ctaHref: '/sign-up'
  },
  {
    id: 'content-engine',
    name: 'Constant Content Engine™',
    title: 'Constant Content Engine™',
    description: 'Grow your digital footprint on autopilot with multi-channel content creation.',
    icon: FileText,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    accent: 'text-purple-300',
    borderHover: 'hover:border-purple-500/50',
    bgGlow: 'from-purple-500/20 via-pink-500/20 to-transparent',
    bullets: [
      'Content Engine + Auto-Publishing - grow your digital footprint on autopilot',
      'Multi-channel content creation (email newsletters, blog posts for SEO, social media)',
      'Editorial calendar + approvals so you can sort, tweak, and greenlight fast',
      'SEO, design, and scheduling handled in one workspace'
    ],
    hook: 'Marketing stalls because you have ideas but no time to keep feeding the machine.',
    story: 'We capture your ideas through interviews, notes, and chats, train AI on your tone, draft the assets, then let you approve, sort, and fine-tune inside a centralized hub before we publish.',
    offer: 'All-your-marketing-in-one-place service: idea capture, AI drafting, human polish, and scheduled distribution every week.',
    offerHighlights: ['Interview + research sprint', 'Multi-channel playbooks', 'Weekly performance reviews'],
    ctaHref: '/content-engine'
  },
  {
    id: 'lead-machine',
    name: 'Lead Machine™',
    title: 'Lead Machine™',
    description: "Finds new customers for you with targeted outreach done right.",
    icon: Users,
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-green-500',
    accent: 'text-cyan-300',
    borderHover: 'hover:border-cyan-500/50',
    bgGlow: 'from-cyan-500/20 via-green-500/20 to-transparent',
    bullets: [
      "Cold emailing done the right way",
      'Referral and reactivation campaigns',
      'Funnels & Landing Pages - high-converting pages that drive sales',
      'Finds net-new high-intent buyers actively looking for what you sell'
    ],
    hook: "Your sales stall because nobody is out finding and warming brand-new buyers for what you sell.",
    story: "We build a Lead Machine specifically for your offers. It sources fresh prospects, responds in real time, nurtures with product-specific messaging, and qualifies them until they're ready to pay, then we hand them to you.",
    offer: "Done-for-you capture + nurture + booking engine that delivers limitless net-new, sales-ready buyers for your exact business.",
    offerHighlights: ['Channel wiring done for you', 'Offer-specific scripts in your voice', 'Live dashboards + 24/7 optimization'],
    ctaHref: '/lead-machine'
  }
]
// Enhanced animated counter hook
function useAnimatedCounter(endValue: number, duration: number = 2000, prefix: string = '', suffix: string = '', shouldAnimate: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  
  useEffect(() => {
    if (!shouldAnimate || hasStarted) return
    
    setHasStarted(true)
    const startTime = Date.now()
    const startValue = 0
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (endValue - startValue) * easeOutQuart
      
      setCount(Math.floor(currentValue))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }
    
    requestAnimationFrame(animate)
  }, [endValue, duration, shouldAnimate, hasStarted])
  
  return `${prefix}${count}${suffix}`
}

// Animated step number component to avoid hooks in loops
function AnimatedStepNumber({ stepNumber, index, visible }: { stepNumber: number, index: number, visible: boolean }) {
  const animatedValue = useAnimatedCounter(stepNumber, 1000 + index * 300, '', '', visible)
  
  return (
    <div className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-white to-gray-100 text-black rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold shadow-xl border-2 sm:border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`} 
      style={{ animationDelay: `${index * 300 + 800}ms` }}>
      {animatedValue}
    </div>
  )
}

// Generic animated value component
function AnimatedValue({ endValue, duration, prefix = '', suffix = '', visible }: { 
  endValue: number, 
  duration: number, 
  prefix?: string, 
  suffix?: string, 
  visible: boolean 
}) {
  const animatedValue = useAnimatedCounter(endValue, duration, prefix, suffix, visible)
  return <>{animatedValue}</>
}

// TypewriterText component for the hero section
function TypewriterText({ gradientOffset, isDarkMode }: { gradientOffset: number, isDarkMode: boolean }) {
  const phrases = ['teams like yours', 'doctors', 'real estate agents', 'online coaches', 'filmmakers', 'marketers', 'agencies']
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Use setInterval instead of setTimeout for continuous animation
    let animationInterval: NodeJS.Timeout | null = null
    
    const animate = () => {
      const currentPhrase = phrases[currentPhraseIndex]
      
      if (isWaiting) {
        // Keep waiting state for 4 seconds (longer pause to linger)
        const waitStart = Date.now()
        animationInterval = setInterval(() => {
          if (Date.now() - waitStart >= 4000) {
            setIsWaiting(false)
            setIsDeleting(true)
            if (animationInterval) clearInterval(animationInterval)
          }
        }, 50)
      } else if (isDeleting) {
        // Delete animation - slower and more gentle
        animationInterval = setInterval(() => {
          setCurrentText(prev => {
            if (prev.length > 0) {
              return prev.slice(0, -1)
            } else {
              setIsDeleting(false)
              setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
              if (animationInterval) clearInterval(animationInterval)
              return prev
            }
          })
        }, 80) // Delete speed: 80ms per character (slower)
      } else {
        // Typing animation - more gradual
        animationInterval = setInterval(() => {
          setCurrentText(prev => {
            if (prev.length < currentPhrase.length) {
              return currentPhrase.slice(0, prev.length + 1)
            } else {
              setIsWaiting(true)
              if (animationInterval) clearInterval(animationInterval)
              return prev
            }
          })
        }, 150) // Type speed: 150ms per character (more gradual)
      }
    }
    
    // Start animation
    animate()
    
    // Use visibility change API to maintain animation state
    const handleVisibilityChange = () => {
      if (!document.hidden && !animationInterval) {
        animate()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      if (animationInterval) clearInterval(animationInterval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isDeleting, isWaiting, currentPhraseIndex])

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500) // Blink every 500ms
    return () => clearInterval(cursorTimer)
  }, [])

  const lightModeLightness = [45, 50, 55, 48]
  const darkModeLightness = [60, 65, 70, 65]

  const selectedLightness = isDarkMode ? darkModeLightness : lightModeLightness

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientOffset}deg, 
      hsl(${(gradientOffset + 220) % 360}, 70%, ${selectedLightness[0]}%), 
      hsl(${(gradientOffset + 280) % 360}, 80%, ${selectedLightness[1]}%), 
      hsl(${(gradientOffset + 340) % 360}, 85%, ${selectedLightness[2]}%), 
      hsl(${(gradientOffset + 40) % 360}, 75%, ${selectedLightness[3]}%))`,
    backgroundSize: '300% 300%',
    animation: `gradient-shift 3s ease-in-out infinite`
  }

  return (
    <span className="relative inline-block">
      <span 
        className="bg-clip-text text-transparent font-bold"
        style={gradientStyle}
      >
        {currentText}{currentText === phrases[currentPhraseIndex] ? '.' : ''}
        <span 
          className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 inline-block ml-1`}
        >
          |
        </span>
      </span>
    </span>
  )
}

export default function LandingPage() {
  const router = useRouter()
  const { isDarkMode, toggleTheme } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoreSystemOpen, setIsCoreSystemOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [recentBlogPosts, setRecentBlogPosts] = useState<BlogPost[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(-1)
  const [mounted, setMounted] = useState(false)
  const [gradientOffset, setGradientOffset] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [cursorTrail, setCursorTrail] = useState<CursorTrailPoint[]>([])
  const cursorTrailRef = useRef<CursorTrailPoint[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const [trustSignalIndex, setTrustSignalIndex] = useState(0)
  const [isTrustSignalVisible, setIsTrustSignalVisible] = useState(true)
  const [howItWorksVisible, setHowItWorksVisible] = useState(true)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const [testimonialsVisible, setTestimonialsVisible] = useState(true)
  const [fragmentationProgress, setFragmentationProgress] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<SolutionProduct | null>(null)
  const handleCloseProductModal = () => setSelectedProduct(null)
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const featuresScrollRef = useRef<HTMLDivElement>(null)
  const testimonialsScrollRef = useRef<HTMLDivElement>(null)
  const fragmentationRef = useRef<HTMLDivElement>(null)

  // Enhanced pricing visibility state
  const [pricingVisible, setPricingVisible] = useState(false)
  const pricingRef = useRef<HTMLDivElement>(null)

  // Demo booking modal state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Founder / CEO'
  })

  const features = [
    {
      icon: <Users className="h-16 w-16" />,
      title: "Never Miss a Lead Again",
      description: "We build systems that capture every lead and follow up automatically. Text, email, or call - your customers hear back fast, even when you're busy.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
      badge: "Most Popular"
    },
    {
      icon: <MessageSquare className="h-16 w-16" />,
      title: "24/7 Customer Communication",
      description: "Answer common questions, schedule appointments, and update customers automatically. Give great service without lifting a finger.",
      gradient: "from-purple-500 to-pink-500",
      delay: 100,
      badge: "Time Saver"
    },
    {
      icon: <Calendar className="h-16 w-16" />,
      title: "Smart Scheduling & Reminders",
      description: "Automatic appointment scheduling, confirmations, and reminders reduce no-shows. Keep your calendar full without the back-and-forth.",
      gradient: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: <Sparkles className="h-16 w-16" />,
      title: "Social Media That Works",
      description: "We create and post content that brings in customers. Stay top-of-mind without spending hours on Facebook and Instagram.",
      gradient: "from-orange-500 to-red-500",
      delay: 300
    }
  ]

  // Auto-rotate features removed for better UX
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentFeatureIndex((prev) => (prev + 1) % features.length)
  //   }, 5000)
  //
  //   return () => clearInterval(interval)
  // }, [features.length])

  // Generate floating particles
  const generateParticles = () => {
    const particleCount = 50
    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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
      
      // Wrap around screen edges
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
      const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800
      if (newX > screenWidth) newX = 0
      if (newX < 0) newX = screenWidth
      if (newY > screenHeight) newY = 0
      if (newY < 0) newY = screenHeight
      
      return {
        ...particle,
        x: newX,
        y: newY
      }
    }))
  }

  // Handle mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true)
    
    // Load recent blog posts
    const posts = getPublishedPosts().slice(0, 3) // Get the 3 most recent posts
    setRecentBlogPosts(posts)
    
    if (typeof window !== 'undefined') {
      generateParticles()
      
      // Regenerate particles on window resize
      const handleResize = () => {
        generateParticles()
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Force clean background for landing page
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

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Auto-scroll testimonials horizontally with Apple-style lock behavior
      if (testimonialsScrollRef.current) {
        const rect = testimonialsScrollRef.current.getBoundingClientRect()
        const sectionHeight = window.innerHeight * 1.5
        const triggerStart = rect.top + window.innerHeight * 0.3
        const triggerEnd = triggerStart - sectionHeight
        
        if (rect.top <= triggerStart && rect.top >= triggerEnd) {
          const progress = Math.max(0, Math.min(1, (triggerStart - rect.top) / sectionHeight))
          const maxScroll = testimonialsScrollRef.current.scrollWidth - testimonialsScrollRef.current.clientWidth
          testimonialsScrollRef.current.scrollLeft = progress * maxScroll
        }
      }

      // Fragmentation animation based on scroll
      if (fragmentationRef.current) {
        const rect = fragmentationRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate progress based on element position in viewport
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Start animation when element enters viewport from bottom
        if (elementTop < windowHeight && elementTop > -elementHeight) {
          // Progress from 0 (just entering) to 1 (center of viewport)
          const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / windowHeight))
          setFragmentationProgress(progress)
        }
      }

      // Check if how it works section is visible
      if (howItWorksRef.current) {
        const rect = howItWorksRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0 && !howItWorksVisible) {
          setHowItWorksVisible(true)
        }
      }

      // Check if testimonials section is visible
      if (testimonialsScrollRef.current) {
        const rect = testimonialsScrollRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0 && !testimonialsVisible) {
          setTestimonialsVisible(true)
        }
      }

      // Check if pricing section is visible
      if (pricingRef.current) {
        const rect = pricingRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0 && !pricingVisible) {
          setPricingVisible(true)
        }
      }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY }
      setMousePosition(newPos)
      
      // Add to cursor trail
      cursorTrailRef.current.push({
        x: newPos.x,
        y: newPos.y,
        timestamp: Date.now()
      })
      
      // Keep only recent trail points (last 500ms)
      const now = Date.now()
      cursorTrailRef.current = cursorTrailRef.current.filter(point => now - point.timestamp < 500)
      setCursorTrail([...cursorTrailRef.current])
    }
    
    // Animation loop for particles and gradients
    // Use setInterval for gradient animation to continue when tab loses focus
    const gradientInterval = setInterval(() => {
      setGradientOffset(prev => (prev + 0.5) % 360)
    }, 16) // ~60fps but slower rotation (0.5 degree per frame instead of 1)
    
    // Particle animation can use requestAnimationFrame
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
      clearInterval(gradientInterval)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mounted])


  useEffect(() => {
    if (!selectedProduct) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseProductModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProduct])

  const testimonials = [
    {
      name: "Andrew",
      role: "Chiropractic Clinic",
      company: "",
      tier: "Enterprise",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "I struggled to follow up with leads, track appointments, and manage forms. With TrueFlow's AI-driven lead capture, integrated scheduling, and automatic form tracking system, more calls get booked and intake is smoother. The backend now works like it should.",
      results: ["More calls booked", "Smoother intake process", "Automated form tracking"]
    },
    {
      name: "Mike",
      role: "Owner, CrossFit 103",
      company: "",
      tier: "Enterprise Client",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face",
      quote: "Before TrueFlow, our website was getting traffic, but visitors weren't turning into booked intros. We rebuilt the site, added AI-driven conversations, and automated follow-up. Without running ads, the system booked 13 appointments from organic traffic alone. Now that it works, we're confidently scaling with ads and social.",
      results: ["13 appointments booked organically", "AI engaging leads 24/7", "Website → conversation → booking, automated"]
    },
    {
      name: "Dr. Chris Butler",
      role: "Founder, WellPath Center",
      company: "",
      tier: "Enterprise Client",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "Before TrueFlow, we were generating leads but the system wasn't keeping up. Messages went unanswered, conversations stalled, and follow-up depended on manual effort. We activated AI agents in our DMs and SMS to qualify and respond instantly. Now about 15% of inbound leads are automatically qualified and booked into calls, even while running paid ads.",
      results: ["50 leads per week handled automatically", "AI qualifying via DM + SMS", "Consistent replies, follow-up, and bookings"]
    }
  ]

  const stats = [
    { value: "1000s", label: "Hours Saved", icon: <Clock className="h-12 w-12" /> },
    { value: "$100k+", label: "Lost Revenue Recovered", icon: <TrendingUp className="h-12 w-12" /> },
    { value: "0", label: "Leads Slipping Through", icon: <Target className="h-12 w-12" /> },
    { value: "24/7", label: "Working For You", icon: <Zap className="h-12 w-12" /> }
  ]

  useEffect(() => {
    let switchTimeout: NodeJS.Timeout | null = null
    const interval = setInterval(() => {
      setIsTrustSignalVisible(false)
      switchTimeout = setTimeout(() => {
        setTrustSignalIndex((prev) => (prev + 1) % stats.length)
        setIsTrustSignalVisible(true)
      }, 250)
    }, 2000)

    return () => {
      clearInterval(interval)
      if (switchTimeout) clearTimeout(switchTimeout)
    }
  }, [stats.length])

  // Don't render dynamic content until mounted
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
            animationDelay: `${particle.id * 0.1}s`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      {/* Cursor Trail */}
      <div className="cursor-trail" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
        {cursorTrail.map((point, index) => {
          const age = Date.now() - point.timestamp
          const opacity = Math.max(0, 1 - age / 500)
          const size = Math.max(2, 8 - (age / 500) * 6)
          return (
            <div
              key={index}
              style={{
                position: 'fixed',
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
            <div className="flex items-center">
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Core System Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCoreSystemOpen(!isCoreSystemOpen)}
                  onBlur={() => setTimeout(() => setIsCoreSystemOpen(false), 200)}
                  className={`flex items-center gap-1 transition-colors text-sm ${
                    isDarkMode
                      ? 'text-white/70 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Core System
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCoreSystemOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCoreSystemOpen && (
                  <div className={`absolute top-full left-0 mt-2 w-48 backdrop-blur-xl border rounded-lg shadow-xl overflow-hidden ${
                    isDarkMode
                      ? 'bg-black/95 border-white/10'
                      : 'bg-white/95 border-gray-200'
                  }`}>
                    <a
                      href="#why-trueflow"
                      onClick={() => setIsCoreSystemOpen(false)}
                      className={`block px-4 py-3 transition-colors text-sm ${
                        isDarkMode
                          ? 'text-white/70 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Why TrueFlow?
                    </a>
                    <a
                      href="#features"
                      onClick={() => setIsCoreSystemOpen(false)}
                      className={`block px-4 py-3 transition-colors text-sm ${
                        isDarkMode
                          ? 'text-white/70 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Features
                    </a>
                    <a
                      href="#how-it-works"
                      onClick={() => setIsCoreSystemOpen(false)}
                      className={`block px-4 py-3 transition-colors text-sm ${
                        isDarkMode
                          ? 'text-white/70 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      How it Works
                    </a>
                    <a
                      href="#testimonials"
                      onClick={() => setIsCoreSystemOpen(false)}
                      className={`block px-4 py-3 transition-colors text-sm ${
                        isDarkMode
                          ? 'text-white/70 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Success Stories
                    </a>
                    <a
                      href="#integrations"
                      onClick={() => setIsCoreSystemOpen(false)}
                      className={`block px-4 py-3 transition-colors text-sm ${
                        isDarkMode
                          ? 'text-white/70 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Integrations
                    </a>
                  </div>
                )}
              </div>
              <a href="https://trueflow.ai/lead-machine" className={`transition-colors text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Lead Machine™</a>
              <Link href="/content-engine" className={`transition-colors text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Constant Content Engine™</Link>
              {/* <Link href="/for-business" className={`transition-colors text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>For Business</Link> */}
              <a href="#blog" className={`transition-colors text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Blog</a>
              <Link href="/faq" className={`transition-colors text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>FAQs</Link>
              {/* <a href="https://app.trueflow.ai/changelog" className={`transition-colors text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} target="_blank" rel="noopener noreferrer">Recent Updates</a> */}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>

              <a
                href="https://login.trueflow.ai"
                className={`border px-5 py-2 rounded-full transition-colors text-sm font-semibold ${
                  isDarkMode
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Sign in
              </a>
              <Link href="/sign-up" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-semibold">
                Book a live demo
              </Link>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              <button
                className={isDarkMode ? 'text-white' : 'text-gray-900'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden backdrop-blur-xl border-t transition-colors ${
            isDarkMode
              ? 'bg-black/90 border-white/10'
              : 'bg-white/90 border-gray-200'
          }`}>
            <div className="px-4 py-6 space-y-4">
              {/* Core System Section */}
              <div className="space-y-2">
                <div className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Core System</div>
                <a href="#why-trueflow" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg pl-4 ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Why TrueFlow?</a>
                <a href="#features" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg pl-4 ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Features</a>
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg pl-4 ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>How it Works</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg pl-4 ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Success Stories</a>
                <a href="#integrations" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg pl-4 ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Integrations</a>
              </div>
              <a href="https://trueflow.ai/lead-machine" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Lead Machine™</a>
              <Link href="/content-engine" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Constant Content Engine™</Link>
              {/* <Link href="/for-business" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>For Business</Link> */}
              <a href="#blog" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Blog</a>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>FAQs</Link>
              {/* <a href="https://app.trueflow.ai/changelog" onClick={() => setIsMenuOpen(false)} className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} target="_blank" rel="noopener noreferrer">Recent Updates</a> */}
              <a
                href="https://login.trueflow.ai"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full border px-8 py-3 rounded-full transition-colors text-lg font-semibold block text-center ${
                  isDarkMode
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Sign in
              </a>
              <Link href="/sign-up" onClick={() => setIsMenuOpen(false)} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-lg font-semibold block text-center">
                Book a live demo
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center px-4 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] sm:py-28 pb-20 sm:pb-32 md:pb-40"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            <div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12 leading-tight px-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                We install systems that book sales calls for you 24/7.
              </h1>

              <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4 ${
                isDarkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
                Done-for-you CRM, AI follow-up, and automated marketing systems so no lead ever slips through.
              </p>

              <div className="flex flex-col items-center px-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 relative overflow-hidden group w-auto justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book a free demo</span>
                  <ChevronRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className={`text-sm mt-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  Live call with a TrueFlow expert
                </p>
              </div>

            </div>
          </div>
        </div>

        {scrollY < 200 && (
          <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-3 pointer-events-none">
            <ArrowDown className="h-5 w-5 text-black arrow-breathe" />

            {/* Scroll Indicator - Hide when scrolled */}
            <div 
              className={`animate-bounce transition-opacity duration-300 ${
                scrollY > 100 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-4 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Trust Signals Auto-Scrolling Banner */}
      <section className={`py-8 sm:py-12 -mt-8 sm:-mt-16 md:-mt-20 overflow-hidden relative z-10 ${
        isDarkMode ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20' : 'bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>

        {/* Auto-scrolling Container */}
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${trustSignalIndex * 100}%)`
            }}
          >
            {/* Render stats multiple times for seamless loop */}
            {[...stats, ...stats, ...stats].map((stat, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full flex items-center justify-center px-8"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl ${
                    isDarkMode ? 'bg-white/10' : 'bg-white shadow-sm'
                  }`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className={`text-4xl font-bold ${
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            {/* Header */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Every missed follow-up is lost revenue you already paid for.
              </span>
            </h2>

            {/* Dynamic visual - Person overwhelmed with tasks */}
            <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20 overflow-hidden mb-12">
              <div className="flex flex-col items-center space-y-6">
                {/* Central person icon with stress animation */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center animate-pulse">
                    <Users className="h-10 w-10 text-white" />
                  </div>

                  {/* Orbiting tasks around the person */}
                  {[
                    { icon: Mail, angle: 0 },
                    { icon: Calendar, angle: 60 },
                    { icon: FileText, angle: 120 },
                    { icon: BarChart3, angle: 180 },
                    { icon: MessageSquare, angle: 240 },
                    { icon: Target, angle: 300 }
                  ].map((task, index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: '120px',
                        height: '120px',
                        animation: `orbit-wrapper-${task.angle} 15s linear infinite`,
                      }}
                    >
                      <div
                        className="absolute w-8 h-8 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center text-red-400"
                        style={{
                          right: '0',
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}
                      >
                        <task.icon className="h-4 w-4" />
                      </div>
                    </div>
                  ))}

                  {/* Stress lines radiating from center */}
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-full h-full rounded-full border-2 border-red-500/30"></div>
                  </div>
                </div>
              </div>

              {/* Background stress pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Pain Point Bullets */}
            <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
              {[
                "You already have traffic.",
                "You already have demand.",
                "Leads book… then no-show.",
                "Messages fall through the cracks.",
                "Slow follow-up is lost revenue."
              ].map((point, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] group ${
                  isDarkMode 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30' 
                    : 'bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                }`}>
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <p className={`text-lg sm:text-xl font-medium ${
                    isDarkMode ? 'text-white/90' : 'text-gray-800'
                  }`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* So You Tried "Just Using Software" Section */}
      <section className={`py-16 sm:py-20 px-4 relative ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            {/* Header */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                So You Tried "Just Using Software"
              </span>
            </h2>

            {/* Body Copy */}
            <p className={`text-lg sm:text-xl mb-8 text-center ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}>
              You signed up for CRMs, schedulers, email tools, chat widgets, and social tools.
            </p>

            {/* Tools Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
              {[
                {
                  name: 'Lead App',
                  color: 'from-blue-500 to-blue-600',
                  icon: Users
                },
                {
                  name: 'Scheduler',
                  color: 'from-orange-500 to-red-500',
                  icon: Calendar
                },
                {
                  name: 'Messenger',
                  color: 'from-cyan-500 to-blue-500',
                  icon: MessageSquare
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className={`bg-gradient-to-r ${tool.color} p-4 rounded-lg flex items-center justify-center`}
                >
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>

            <p className={`text-lg sm:text-xl mb-8 text-center font-medium ${
              isDarkMode ? 'text-white/90' : 'text-gray-800'
            }`}>
              Now you have:
            </p>

            {/* Bullet Points */}
            <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
              {[
                "5+ tools that don't talk to each other",
                "Monthly subscriptions adding up fast",
                "More manual work than before",
                "Still missed leads and no-shows"
              ].map((point, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] group ${
                  isDarkMode
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30'
                    : 'bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                }`}>
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <p className={`text-lg sm:text-xl font-medium ${
                    isDarkMode ? 'text-white/90' : 'text-gray-800'
                  }`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing Statement */}
            <div className="text-center space-y-2">
              <p className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Software didn't fail you.
              </p>
              <p className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Being forced to build and manage it yourself did.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selection Section */}
      <section className={`py-16 sm:py-20 px-4 relative overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              We build and run the entire system with you, then fill it with leads.
            </h2>
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
              const angle = (index * 45) + (scrollY * 0.1); // 45 degrees apart, rotates with scroll
              const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 + Math.sin(scrollY * 0.005 + index) * 15 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 200 + Math.sin(scrollY * 0.005 + index) * 20 : 280 + Math.sin(scrollY * 0.005 + index) * 30; // Responsive radius
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;

              // 3D depth effects - forward/backward movement only
              const baseDepth = (index % 4) * 30 - 45; // Base depth variation: -45, -15, 15, 45
              const scrollDepth = Math.sin(scrollY * 0.008 + index * 1.2) * 40; // Dynamic depth based on scroll
              const totalDepth = baseDepth + scrollDepth; // Combined depth effect

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 ease-out"
                  style={{
                    transform: `translate(${x}px, ${y}px) translateZ(${totalDepth}px)`,
                    transformStyle: 'preserve-3d',
                    zIndex: 5 + Math.floor(totalDepth / 15) // Closer items have higher z-index
                  }}
                >
                  <div className="group relative">
                    {/* Tapered connection line to center - Always render for all logos */}
                    {/* Force render connecting lines for ALL integration logos */}
                    <div
                      className="absolute transition-opacity duration-300"
                      style={{
                        width: `${radius}px`,
                        height: `8px`, // Slightly increased height for better visibility
                        transformOrigin: '0 50%',
                        transform: `rotate(${angle + 180}deg) translateY(-50%)`,
                        zIndex: -1,
                        top: '50%',
                        left: '50%',
                        opacity: Math.max(0.25, 0.4 + totalDepth * 0.003),
                        clipPath: `polygon(0 0%, 0 100%, 80% 90%, 100% 50%, 80% 10%)`, // Dramatic taper: thick at outer logo, invisible near TrueFlow center
                        background: (() => {
                          // Enhanced gradient with transparency for taper effect
                          const colorMap: Record<number, string> = {
                            0: 'linear-gradient(to left, transparent 0%, rgba(190, 24, 93, 0.3) 50%, #be185d 100%)', // Instagram
                            1: 'linear-gradient(to left, transparent 0%, rgba(29, 78, 216, 0.3) 50%, #1d4ed8 100%)', // Facebook
                            2: 'linear-gradient(to left, transparent 0%, rgba(21, 128, 61, 0.3) 50%, #15803d 100%)', // WhatsApp
                            3: 'linear-gradient(to left, transparent 0%, rgba(220, 38, 38, 0.3) 50%, #dc2626 100%)', // YouTube
                            4: 'linear-gradient(to left, transparent 0%, rgba(67, 56, 202, 0.3) 50%, #4338ca 100%)', // Discord
                            5: 'linear-gradient(to left, transparent 0%, rgba(55, 65, 81, 0.3) 50%, #374151 100%)', // X
                            6: 'linear-gradient(to left, transparent 0%, rgba(234, 88, 12, 0.3) 50%, #ea580c 100%)', // Zapier
                            7: 'linear-gradient(to left, transparent 0%, rgba(21, 128, 61, 0.3) 50%, #15803d 100%)', // GoHighLevel
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

                    {/* Service name tooltip on hover */}
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
            }`} style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutionProducts.map((product) => {
              const Icon = product.icon
              return (
                <div key={product.id} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.bgGlow} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                  <div className={`relative backdrop-blur-md rounded-2xl border p-8 h-full transition-all ${product.borderHover} ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{product.name}</h3>
                      </div>
                      <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>{product.description}</p>
                    </div>
                    <ul className="space-y-3 my-8">
                      {product.bullets.map((bullet, idx) => (
                        <li key={idx} className={`flex items-start gap-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                          }`}>
                            <Zap className={`w-3 h-3 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`} />
                          </div>
                          <span className="text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-2 text-white font-medium group/cta"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              See How We Build and Run Your System With You
            </h3>
            <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}>
              Book a demo to see how we handle setup, management, and optimization while you stay focused on your business.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Book your demo
              <Calendar className="w-5 h-5" />
            </button>
            <p className={`text-sm mt-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
              Live call with a TrueFlow expert
            </p>
          </div>

          {/* Embedded Sign-Up Form */}
          <div className="mt-20 max-w-2xl mx-auto">
            <div className={`rounded-3xl border p-8 md:p-12 ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-2xl'
            }`}>
              <div className="text-center mb-8">
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Start your free trial
                </h3>
                <p className={`text-base md:text-lg ${
                  isDarkMode ? 'text-white/70' : 'text-gray-600'
                }`}>
                  Fill out the form below to get instant access to TrueFlow.
                </p>
              </div>

              {/* Pricing Clarity Box */}
              <div className={`${isDarkMode ? 'bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-transparent' : 'bg-white shadow-lg'} border ${isDarkMode ? 'border-cyan-400/30' : 'border-gray-200'} rounded-2xl p-6 mb-8`}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="text-center">
                    <p className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-white/60' : 'text-gray-500'} mb-2`}>Today</p>
                    <p className="text-3xl font-bold text-emerald-500">$0</p>
                    <p className={`text-sm mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>14-day free trial starts immediately</p>
                  </div>
                  <div className={`text-center sm:border-l sm:border-r ${isDarkMode ? 'sm:border-white/10' : 'sm:border-gray-200'} sm:px-6`}>
                    <p className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-white/60' : 'text-gray-500'} mb-2`}>After Free Trial</p>
                    <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$297<span className={`text-base font-normal ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>/mo</span></p>
                    <p className={`text-sm mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Full CRM + Automations, Chat Agents, Constant Content Engine, and 24/7 Customer Support</p>
                  </div>
                </div>
                <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'} text-center`}>
                  <p className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    Cancel anytime before Day 14, no charge, no commitment
                  </p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${
                    isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    Step 1 of 4
                  </span>
                  <span className={`text-sm font-semibold ${
                    isDarkMode ? 'text-white/60' : 'text-gray-500'
                  }`}>
                    25% complete
                  </span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${
                  isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                }`}>
                  <div className="h-full w-1/4 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-900'
                  }`}>
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Jordan Reyes"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      isDarkMode
                        ? 'bg-black/30 border-white/10 text-white placeholder-white/40'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-900'
                  }`}>
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      isDarkMode
                        ? 'bg-black/30 border-white/10 text-white placeholder-white/40'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-900'
                  }`}>
                    Primary role
                  </label>
                  <select
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      isDarkMode
                        ? 'bg-black/30 border-white/10 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  >
                    <option>Founder / CEO</option>
                    <option>Operator</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>

                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                }`}>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                    Your login gives you access to the dashboard instantly once the intake is complete.
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/sign-up?fullName=${encodeURIComponent(formData.fullName)}&email=${encodeURIComponent(formData.email)}&role=${encodeURIComponent(formData.role)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Timeline Section - How It Works */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Activate and start using today
              </h3>
              <p className={`text-lg ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                Typically a business can be up and running in under 90 min
              </p>
            </div>

            <div className="space-y-6">
              {/* Day 1 */}
              <div className={`relative flex gap-6 p-6 rounded-2xl border ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-blue-500">Day 1</span>
                    <div className={`h-px flex-1 ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}></div>
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    You See Where Every Lead Goes
                  </h4>
                  <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                    You get access to the full TrueFlow system. Core automations, pipelines, AI follow-up logic, and templates are pre-installed. You're guided through connecting your tools and choosing your setup path.
                  </p>
                </div>
              </div>

              {/* Days 1-7 */}
              <div className={`relative flex gap-6 p-6 rounded-2xl border ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-cyan-500">Days 1–7</span>
                    <div className={`h-px flex-1 ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}></div>
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Follow-Up Runs Without You
                  </h4>
                  <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                    You follow step-by-step instructions to configure your lead flow, messaging, and routing. Our automations and team assist with validating, testing, and optimizing. Support is available if you get stuck.
                  </p>
                </div>
              </div>

              {/* Days 8-13 */}
              <div className={`relative flex gap-6 p-6 rounded-2xl border ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-purple-500">Days 8–13</span>
                    <div className={`h-px flex-1 ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}></div>
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Proof Shows Up in Your Pipeline
                  </h4>
                  <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                    Your system is live. Leads are captured, followed up with, and routed automatically. You can see what's working and what needs adjustment.
                  </p>
                </div>
              </div>

              {/* Day 14 */}
              <div className={`relative flex gap-6 p-6 rounded-2xl border ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-green-500">Day 14</span>
                    <div className={`h-px flex-1 ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}></div>
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Keep What's Working or Walk Away Clean
                  </h4>
                  <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>
                    Continue generating leads, booked appointments, and sales. Billing begins at $297/month. Cancel anytime before 14 days, no charge. Or if you want a TrueFlow Expert to build this for you, keep scrolling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Done-for-You Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
              isDarkMode
                ? 'bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-transparent border-cyan-400/30'
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
            }`}>
              <div className="text-center mb-8">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent`}>
                  Some clients decide they don't want to touch this
                </h3>
                <p className={`text-xl mb-6 ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
                  If you want us to build, customize, and run the entire system for you - we do that too
                </p>
              </div>

              <div className="mb-8">
                <p className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white/90' : 'text-gray-900'}`}>
                  Plus get access to:
                </p>
                <ul className="space-y-3">
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>CRM pipelines, content engine, AI chat set up for you</span>
                  </li>
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Ongoing support and maintenance</span>
                  </li>
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Monthly success manager touchpoints</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mb-8">
                <p className={`text-lg mb-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Pricing varies... book a private demo to get a quote
                </p>
                <Link
                  href="/white-glove"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className={`text-sm mt-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  Live call with a TrueFlow expert
                </p>
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                  Typical plans start with a $3–5k setup fee + $497/mo
                </p>
              </div>
            </div>
          </div>

          {/* Lead Machine Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border shadow-2xl ${
              isDarkMode
                ? 'bg-gradient-to-br from-green-400/10 via-cyan-500/10 to-transparent border-green-400/30'
                : 'bg-gradient-to-br from-green-50 to-cyan-50 border-green-200'
            }`}>
              <div className="text-center mb-8">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-600 bg-clip-text text-transparent`}>
                  Need more customers?
                </h3>
                <p className={`text-xl mb-6 ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
                  Our Lead Machine™ finds and qualifies hot prospects for your business
                </p>
              </div>

              <div className="mb-8">
                <p className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white/90' : 'text-gray-900'}`}>
                  What you get:
                </p>
                <ul className="space-y-3">
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-green-400 mt-1">•</span>
                    <span>Targeted outreach to high-intent buyers actively looking for what you sell</span>
                  </li>
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-green-400 mt-1">•</span>
                    <span>Real-time engagement and qualification of prospects</span>
                  </li>
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-green-400 mt-1">•</span>
                    <span>Sales-ready leads delivered directly to you</span>
                  </li>
                  <li className={`flex items-start gap-3 text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                    <span className="text-green-400 mt-1">•</span>
                    <span>24/7 optimization and live performance dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mb-8">
                <p className={`text-lg mb-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Pricing varies... book a demo to get a quote
                </p>
                <Link
                  href="/lead-machine"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className={`text-sm mt-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  See how the Lead Machine™ works
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Storytelling Section */}
      <section id="why-trueflow" className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Business Evolution: Side-by-Side Comparison */}
          <div className="max-w-7xl mx-auto">
            {/* Vertical Stacked Chapters */}
            <div className="flex flex-col gap-12 max-w-4xl mx-auto">

          </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 px-4" ref={testimonialsScrollRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 transition-all duration-1000 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Real businesses. Real results.
            </h2>
            <p className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto px-4 transition-all duration-1000 ${
              isDarkMode ? 'text-white/70' : 'text-gray-600'
            }`}>
              See how TrueFlow is helping business owners worldwide reach more customers, increase revenue, and save time.
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
                  <div className={`flex items-center mb-4 sm:mb-6 relative z-10 ${
                    ''
                  }`} style={{ animationDelay: `${index * 200 + 400}ms` }}>
                    {/* Profile image with glow effect */}
                    <div className="relative mr-3 sm:mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30"
                      />
                      {/* Animated ring around profile */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-500 "></div>
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
                        {/* Gentle checkmark */}
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
                        className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-[icon-float_4s_ease-in-out_infinite]"
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
                    'bg-blue-400'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-16 sm:py-24 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Latest from Our Blog
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
              Stay updated with industry insights and tips to grow your business
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mounted && recentBlogPosts.map((post, index) => {
              // Use primary tag for color, fallback to first tag
              const primaryTagSlug = post.primaryTag?.slug || post.tags[0]?.slug
              const gradientClass = primaryTagSlug && tagColorPalettes[primaryTagSlug] 
                ? tagColorPalettes[primaryTagSlug]
                : 'from-gray-500 to-slate-600'
              
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className={`rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col border transform hover:-translate-y-1 ${
                    isDarkMode
                      ? 'bg-white/10 backdrop-blur-sm hover:bg-white/15 border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10'
                      : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-xl'
                  }`}>
                    {/* Featured Image */}
                    <div className={`h-48 bg-gradient-to-br ${gradientClass} relative overflow-hidden group`}>
                      {post.featuredImage ? (
                        <>
                          <Image
                            src={post.featuredImage.url}
                            alt={post.featuredImage.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Color-coded transparency overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                          {/* Additional dark overlay for better text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        </>
                      ) : (
                        <>
                          {/* Decorative elements for posts without images */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full"></div>
                          </div>
                          {/* Pattern overlay */}
                          <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
                          }}></div>
                        </>
                      )}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className={`backdrop-blur-sm px-3 py-1 rounded-full text-sm ${
                          isDarkMode ? 'bg-white/20 text-white' : 'bg-white text-gray-800'
                        }`}>
                          {post.category.name}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className={`flex items-center gap-4 text-sm mb-3 ${
                        isDarkMode ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime} min read
                        </span>
                      </div>

                      <h3 className={`text-xl font-semibold mb-3 transition-colors line-clamp-2 ${
                        isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {post.title}
                      </h3>

                      <p className={`mb-4 line-clamp-3 flex-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => {
                          const tagGradient = tagColorPalettes[tag.slug] || 'from-gray-500 to-slate-600'
                          return (
                            <span
                              key={tag.slug}
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tagGradient} text-white opacity-80`}
                            >
                              {tag.name}
                            </span>
                          )
                        })}
                        {post.tags.length > 3 && (
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? 'bg-white/10 text-white/60' : 'bg-gray-100 text-gray-600'
                          }`}>
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                          By {post.author.name}
                        </span>
                        <span className={`transition-transform ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        } group-hover:translate-x-1`}>
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}


          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 sm:py-24 lg:py-32 px-4 ${isDarkMode ? 'bg-black/40' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              "But What About..."
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
              We get it. You have questions. Here are the honest answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need to know anything about technology?",
                answer: "Not at all. TrueFlow handles all the technical setup and maintenance. You just complete guided steps inside the platform."
              },
              {
                question: "How long does it take to get set up?",
                answer: "Your system is set up immediately, and you have 14 days to use and optimize. We guide you through so there's no guesswork."
              },
              {
                question: "What if I need changes or want to add something new?",
                answer: "That's included. We're not a set-it-and-forget-it service. As your needs change, we adjust your automations. All packages include ongoing support and updates."
              },
              {
                question: "Will this work with my existing tools?",
                answer: "Almost always, yes. TrueFlow connects with your existing phone, email, calendar, website, and CRM systems."
              },
              {
                question: "How much does it cost?",
                answer: "$297/month for the standard plan with full CRM, automations, chat agents, and content engine. White Glove packages with custom setup start at $3–5k setup fee + $497/month."
              },
              {
                question: "What if it doesn't work for my business?",
                answer: "We're confident it will, but if you're not happy with the results, we'll work with you to make it right or part ways on good terms."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes. We typically recommend staying for at least 90 days to see the full impact, but there are no long-term contracts or cancellation fees."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`backdrop-blur-md rounded-xl border p-6 transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/5 border-white/20 hover:bg-white/10'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{faq.question}</h3>
                <p className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>Still have questions?</p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span>Book your live demo</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className={`text-sm mt-3 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
              Live call with a TrueFlow expert
            </p>
          </div>
        </div>
      </section>

      <Footer />


      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`backdrop-blur-md p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-float-up-down ${
              isDarkMode
                ? 'bg-black/50 text-white hover:bg-black/70 border border-white/20'
                : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[999] px-4 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.name} details`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseProductModal()
            }
          }}
        >
          <div
            className={`relative w-full max-w-3xl rounded-3xl p-8 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] border ${
              isDarkMode
                ? 'bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/20'
                : 'bg-white border-gray-200'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseProductModal}
              className={`absolute top-4 right-4 transition-colors ${
                isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-400 hover:text-gray-600'
              }`}
              aria-label="Close product details"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className={`text-xs uppercase tracking-[0.4em] ${selectedProduct.accent}`}>Hook</p>
                <p className={`text-xl sm:text-2xl leading-relaxed ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
                  {selectedProduct.hook}
                </p>
              </div>
              <div className="space-y-3">
                <p className={`text-xs uppercase tracking-[0.4em] ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Story</p>
                <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  {selectedProduct.story}
                </p>
              </div>
              <div className="space-y-4">
                <p className={`text-xs uppercase tracking-[0.4em] ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>Offer</p>
                <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProduct.offer}
                </p>
                <ul className="grid sm:grid-cols-3 gap-3">
                  {selectedProduct.offerHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className={`rounded-xl px-4 py-3 text-sm ${
                        isDarkMode
                          ? 'bg-white/5 border border-white/10 text-white/80'
                          : 'bg-gray-50 border border-gray-200 text-gray-700'
                      }`}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                  Ready to build the {selectedProduct.name.toLowerCase()}?
                </p>
                <Link
                  href={selectedProduct.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${selectedProduct.gradientFrom} ${selectedProduct.gradientTo} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity`}
                >
                  Build My System
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Booking Modal */}
      {isDemoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div
            className={`relative w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden ${
              isDarkMode ? 'bg-gray-900 border border-white/20' : 'bg-white border border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-6 max-h-[85vh] overflow-y-auto">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Schedule Your Demo
              </h3>
              <div className="w-full" style={{ minHeight: '500px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/nc8KAbjOlywMkW6XPSBj"
                  style={{ width: '100%', border: 'none', minHeight: '500px' }}
                  scrolling="yes"
                  id="nc8KAbjOlywMkW6XPSBj_1765305582551"
                ></iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
