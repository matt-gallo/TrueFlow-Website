'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight, 
  Play, 
  Sparkles, 
  Zap, 
  Brain, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Users, 
  MessageSquare,
  ArrowRight,
  Clock,
  CheckCircle,
  Star,
  Menu,
  X
} from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-500 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <Image
                src="/true-flow-logo.webp"
                alt="TrueFlow"
                width={280}
                height={70}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
                style={{ maxWidth: '100%', objectFit: 'contain' }}
                priority
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-lg">Home</a>
              <a href="/content-engine" className="text-white/70 hover:text-white transition-colors text-lg">Content Engine</a>
              <a href="#features" className="text-white/70 hover:text-white transition-colors text-lg">Features</a>
              <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-lg">How it Works</a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors text-lg">Success Stories</a>
              <a href="/faq" className="text-white/70 hover:text-white transition-colors text-lg">FAQs</a>
              <a href="/blog" className="text-white/70 hover:text-white transition-colors text-lg">Blog</a>
              <a href="/readiness-assessment" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>
            
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Link href="/content-engine" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-12 border border-white/20 mt-16 hover:bg-white/20 transition-colors">
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="text-white/90 text-lg">Introducing TrueFlow AI Content Engine</span>
            </Link>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
              We build AI systems that<br/>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                make you money
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Transform your voice into powerful email campaigns and blog content with our intelligent AI system. 
              <strong className="text-white"> 10x faster content creation, 85% higher engagement rates.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/readiness-assessment" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-all flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group flex items-center space-x-3 text-white/90 hover:text-white transition-colors text-xl">
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                  <Play className="h-6 w-6" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">TrueFlow?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI-powered platform transforms how you create and manage content, giving you more time to focus on what matters most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Zap className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/70">Create content 10x faster with our advanced AI system that understands your voice and style.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Brain className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-white/70">Advanced machine learning algorithms adapt to your unique communication style and preferences.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <TrendingUp className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Higher Engagement</h3>
              <p className="text-white/70">See up to 85% higher engagement rates with AI-optimized content that resonates with your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join thousands of creators who have already revolutionized their content workflow with TrueFlow AI.
          </p>
          <Link href="/readiness-assessment" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2">
            <span>Start Your Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}