'use client'

import { useState } from 'react'
import { Mountain, Compass, MapPin, Wifi, WifiOff, Users, Star, ArrowRight, CheckCircle, Truck, Navigation } from 'lucide-react'
import Link from 'next/link'

export default function OverlandPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showOffer, setShowOffer] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/lead-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'Overland Expo - Special Offer',
          message: `Claimed expo offer: 2 weeks free + 50% off for life. Email: ${email}`
        }),
      })

      if (response.ok) {
        setShowOffer(true)
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setShowOffer(true)
      setIsSubmitted(true) // Still show success to user
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 opacity-10">
            <Mountain className="w-32 h-32 text-yellow-400" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-10">
            <Compass className="w-24 h-24 text-orange-400" />
          </div>
          <div className="absolute top-1/2 left-1/4 opacity-5">
            <Truck className="w-20 h-20 text-white" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-yellow-500/20 border border-yellow-400/30 rounded-full backdrop-blur-sm">
            <Mountain className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Mountain West Overland Expo 2024</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Less Screen.</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2">More Trail.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            TrueFlow handles your business so you can handle the wilderness. 
            Set up automated workflows before you hit the trail, then disconnect knowing everything runs smoothly.
          </p>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/get-started"
                className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-2xl flex items-center"
              >
                Start Your Adventure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#how-it-works"
                className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                See How It Works
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                No contracts
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                Works offline
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-black/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <WifiOff className="w-8 h-8 text-red-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">The Overland Dilemma</h2>
              </div>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                You want to disconnect and explore, but your business needs constant attention. 
                Clients expect responses, leads need follow-up, and opportunities slip away while you're off-grid.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Missing client calls while on remote trails</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Leads going cold during multi-day adventures</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/70">Feeling tethered to your phone instead of free on the trail</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl border border-red-400/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <WifiOff className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <p className="text-white/60 font-medium">Phone buzzing with missed opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
              <Wifi className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-green-400 text-sm font-medium">The TrueFlow Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Business Runs Itself
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Set up intelligent workflows before you leave civilization. 
              TrueFlow handles everything automatically while you focus on the adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Compass className="w-8 h-8" />,
                title: "Set Your Course",
                description: "Configure automated responses, lead qualification, and client communication workflows before you hit the trail."
              },
              {
                icon: <Mountain className="w-8 h-8" />,
                title: "Hit the Trail",
                description: "Adventure with confidence knowing your business is running smoothly in the background, even without cell service."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Return to Success",
                description: "Come back to organized leads, satisfied clients, and a business that grew while you were away."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/20 p-6 h-full">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features for Overlanders */}
      <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for Adventure Entrepreneurs
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Features designed specifically for business owners who refuse to choose between success and adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Offline-First Design",
                description: "Set everything up before you leave. Works even when you're completely off-grid for days.",
                icon: <WifiOff className="w-6 h-6" />
              },
              {
                title: "Smart Lead Qualification",
                description: "AI filters and prioritizes leads so you only see the ones worth cutting your trip short for.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Scheduled Check-ins",
                description: "Send pre-written updates to clients and team while you're watching sunsets, not screens.",
                icon: <MapPin className="w-6 h-6" />
              },
              {
                title: "Emergency Escalation",
                description: "Only truly urgent matters reach you via satellite communication or when you hit civilization.",
                icon: <Star className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-md rounded-xl border border-white/20 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expo Special CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl border border-yellow-400/30 p-8 md:p-12">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-yellow-500/30 border border-yellow-400/50 rounded-full">
              <Mountain className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Exclusive Expo Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See You at the Expo!
            </h2>
            
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              I'll be walking around the expo sharing how overlanders are scaling their businesses while exploring the world. 
              Get special expo pricing and let's chat about automating your adventure business!
            </p>
            
            {/* Offer Highlight */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">🏔️ Exclusive Expo Deal</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                  <div className="bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 font-semibold">2 weeks FREE</span>
                  </div>
                  <div className="text-white/60">+</div>
                  <div className="bg-yellow-500/20 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 font-semibold">50% off FOREVER</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-2">Available only at Mountain West Overland Expo</p>
              </div>
            </div>

            <div className="space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
                  >
                    Claim 50% Off For Life
                  </button>
                </form>
              ) : (
                <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-400/30 rounded-xl p-6 max-w-lg mx-auto">
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">🎉 Expo Offer Claimed!</h3>
                    <div className="space-y-2 mb-4">
                      <div className="text-green-400 font-semibold">✓ 2 weeks completely free</div>
                      <div className="text-yellow-400 font-semibold">✓ 50% off for life after trial</div>
                      <div className="text-white/80 text-sm">✓ Cancel anytime, keep the discount forever</div>
                    </div>
                    <p className="text-white/70 text-sm">
                      I'll find you at the expo with your personal signup link!
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/get-started"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm font-medium"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a 
                  href="mailto:hello@trueflow.ai"
                  className="inline-flex items-center px-6 py-3 text-white/80 hover:text-white transition-colors duration-200 font-medium"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mr-4">TrueFlow</div>
              <div className="text-white/60 text-sm">Less Screen. More Trail.</div>
            </div>
            <div className="flex space-x-6 text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="mailto:hello@trueflow.ai" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}