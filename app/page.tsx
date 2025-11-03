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
  X,
  Mic,
  FileText
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
              The All-in-One<br/>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                AI Marketing & Sales Platform
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Fully automated, AI-driven system that transforms your voice into powerful campaigns, content, and conversations.
              <strong className="text-white"> 10x faster execution, 85% higher engagement, zero manual work.</strong>
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

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Powered by Industry-Leading Technology
            </h3>
            <p className="text-lg text-white/60">
              Built on the same infrastructure trusted by over 500,000+ businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500K+</div>
              <div className="text-white/60 text-sm">Businesses Powered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-white/60 text-sm">Faster Execution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-white/60 text-sm">Higher Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white/60 text-sm">Automated Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Engine Section */}
      <section id="lead-engine" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Lead Engine™
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Never Run Out of <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Qualified Leads</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                AI-powered prospecting system that finds, engages, and qualifies leads automatically—while you sleep.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">AI Lead Hunter</div>
                    <div className="text-white/60">Finds buyers searching for your offer in the last 7 days</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Conversation AI</div>
                    <div className="text-white/60">Handles replies and qualifies prospects automatically</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Auto-Booking</div>
                    <div className="text-white/60">Schedules qualified leads directly on your calendar</div>
                  </div>
                </div>
              </div>

              <Link href="/lead-machine" className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all">
                <span>Explore Lead Engine</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30">
              <div className="space-y-6">
                <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold">Lead Flow</span>
                    <span className="text-green-400 text-sm">● Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">New Leads Today</span>
                      <span className="text-white font-bold">47</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Qualified & Booked</span>
                      <span className="text-white font-bold">12</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Conversion Rate</span>
                      <span className="text-blue-400 font-bold">25.5%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                  <div className="text-white/60 text-sm mb-3">Recent Conversation</div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-500/20 rounded-lg p-3 text-white">
                      "I'm interested in learning more about your services..."
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-white/80">
                      "Great! I'd love to show you how we can help. Are you available for a quick call this week?"
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-green-400">✓ Auto-qualified & scheduled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Engine Section */}
      <section id="content-engine" className="py-32 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Mic className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Voice Recording</div>
                        <div className="text-white/60 text-sm">5 min session</div>
                      </div>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                      <div className="flex items-center space-x-2 text-purple-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Processing your voice...</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <div className="text-white/60 text-sm mb-3">Generated Content</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-500/10 rounded border border-green-500/30">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-white">Email Newsletter</span>
                        </div>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-500/10 rounded border border-green-500/30">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-white">Blog Post</span>
                        </div>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-500/10 rounded border border-blue-500/30">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span className="text-sm text-white">Social Posts</span>
                        </div>
                        <Clock className="h-4 w-4 text-blue-400 animate-spin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Content Engine™
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Create Content in <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Your Voice</span>, Instantly
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Transform a 5-minute voice recording into newsletters, blog posts, and social content—all fully automated.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Voice-to-Content AI</div>
                    <div className="text-white/60">Speak naturally, get professional content instantly</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Multi-Format Output</div>
                    <div className="text-white/60">One recording becomes emails, blogs, and social posts</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Smart Distribution</div>
                    <div className="text-white/60">Auto-publish at optimal times across all channels</div>
                  </div>
                </div>
              </div>

              <Link href="/content-engine" className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all">
                <span>Explore Content Engine</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Platform Overview */}
      <section id="features" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">
              The Complete <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Business Operating System</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to run, scale, and automate your entire marketing and sales operation—all in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Zap className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/70">Create campaigns, content, and conversations 10x faster with our advanced AI system.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Brain className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Fully Automated</h3>
              <p className="text-white/70">From lead generation to content creation—everything runs on autopilot 24/7.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <TrendingUp className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Higher ROI</h3>
              <p className="text-white/70">85% higher engagement rates and 3x better conversion with AI-optimized operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join thousands of businesses scaling with AI-driven marketing and sales automation.
          </p>
          <Link href="/readiness-assessment" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2">
            <span>Start Your Free Assessment</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}