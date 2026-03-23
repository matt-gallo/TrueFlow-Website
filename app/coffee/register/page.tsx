'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import { useTheme } from '@/app/components/ThemeProvider'
import { Coffee, Users, Building2, MapPin, Calendar, ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  email: string
  businessName: string
  businessType: string
}

const businessTypes = [
  'Home Services (HVAC, Plumbing, Electrical, etc.)',
  'Health & Wellness (Chiro, PT, Gym, Yoga, etc.)',
  'Real Estate & Property Management',
  'Professional Services (Law, Accounting, Financial, etc.)',
  'Retail & Hospitality',
  'Other'
]

export default function CoffeeRegisterPage() {
  const router = useRouter()
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessName: '',
    businessType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/coffee-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit registration')
      }

      const data = await response.json()
      router.push('/coffee/welcome')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Registration error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={`min-h-screen transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navigation />

      {/* Hero Section - Full bleed with asymmetric layout */}
      <div className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Large background image */}
        <div className="absolute inset-0">
          <Image
            src="/front-range-5.jpg"
            alt="Colorado Front Range"
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-br from-black/70 via-black/50 to-transparent'
              : 'bg-gradient-to-br from-white/70 via-white/50 to-transparent'
          }`} />
        </div>

        {/* Hero Content - Asymmetric positioning */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left side - Text content (takes 7 columns) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
                  <Coffee className="w-5 h-5 text-cyan-400" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Private Gathering · Limited to 12
                  </span>
                </div>

                <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  A Private
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Invitation
                  </span>
                  <br />
                  for Founders
                </h1>

                <p className={`text-xl sm:text-2xl leading-relaxed max-w-xl ${
                  isDarkMode ? 'text-white/80' : 'text-gray-700'
                }`}>
                  An intimate gathering where Colorado business owners share what's really happening behind the scenes.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Where</div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Denver, CO</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Frequency</div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monthly</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Attendance</div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Max 12 People</div>
                    </div>
                  </div>
                </div>

                {/* Scroll indicator */}
                <button
                  onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Request an invitation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right side - Floating image card (takes 5 columns) */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative">
                  {/* Decorative blob */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-2xl" />

                  {/* Image card */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/front-range-2.jpg"
                      alt="Colorado Mountains"
                      width={500}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section - Asymmetric with side image */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image column - 5 cols */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                {/* Stacked image effect */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/front-range-3.jpg"
                    alt="Colorado Landscape"
                    width={500}
                    height={400}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-900 hidden sm:block">
                  <Image
                    src="/front-range-1.webp"
                    alt="Mountain Detail"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Content column - 7 cols */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-block">
                <div className={`px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-500/20 text-cyan-700'
                } text-sm font-medium`}>
                  A Note from Matt
                </div>
              </div>

              <h2 className={`text-4xl sm:text-5xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why I Keep These Private
              </h2>

              <div className={`space-y-4 text-lg leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                <p>
                  I moved to Colorado for the mountains and stayed for the people. But running a business here—or anywhere—can feel lonely. You're making decisions that matter, dealing with challenges no one else seems to understand.
                </p>

                <p>
                  Here's what I learned: the most valuable conversations happen in small rooms with the right people. Not at networking events with 100 strangers exchanging cards. Not at conferences with staged panel discussions.
                </p>

                <p className="font-medium text-xl">
                  They happen over coffee with 8-12 owners who actually get it.
                </p>

                <p>
                  That's why I keep these gatherings intentionally small. When you know everyone at the table, real conversations happen. Walls come down. People share what's actually working—and what's not. It becomes less about networking and more about building something rare: a trusted circle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes This Different - Cards with image backgrounds */}
      <div className={`py-24 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What Makes This Special
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              These gatherings are intentionally different
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className={`group relative rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-105 ${
              isDarkMode
                ? 'bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40'
                : 'bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Protected Space
              </h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                No pitches. No posturing. What's shared in the room stays in the room. This is where you can be honest about the challenges no one else sees.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`group relative rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-105 ${
              isDarkMode
                ? 'bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40'
                : 'bg-gradient-to-br from-purple-50 to-white border border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Intentionally Intimate
              </h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Limited to 8-12 owners per gathering. Small enough that everyone speaks, large enough for diverse perspectives. You'll know everyone's name by the end.
              </p>
            </div>

            {/* Card 3 */}
            <div className={`group relative rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-105 ${
              isDarkMode
                ? 'bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/40'
                : 'bg-gradient-to-br from-pink-50 to-white border border-pink-200 hover:border-pink-300 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Curated Mix
              </h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Diverse industries, similar challenges. The breakthrough you need might come from how a gym owner handles the same problem you're facing in real estate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section - Split layout with image */}
      <div id="form-section" className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/front-range-4.png"
            alt="Mountains"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Sticky benefits */}
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Request Your Invitation
                </h2>
                <p className={`text-xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  Spaces are limited to maintain the intimacy of these gatherings
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Off The Record
                    </h3>
                    <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                      Private conversations in a trusted environment
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Your Inner Circle
                    </h3>
                    <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                      Build relationships with owners who understand the journey
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Unfiltered Insights
                    </h3>
                    <p className={`${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                      What's really working behind the scenes
                    </p>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className={`p-6 rounded-2xl ${
                isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
              }`}>
                <p className={`italic mb-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  "This isn't networking. It's the conversation I needed to have three years ago. Intimate, honest, and incredibly valuable."
                </p>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  — Returning Member
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className={`rounded-3xl p-8 sm:p-12 backdrop-blur-sm ${
              isDarkMode
                ? 'bg-white/5 border border-white/10 shadow-2xl'
                : 'bg-white border border-gray-200 shadow-2xl'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl transition-all text-lg ${
                      isDarkMode
                        ? 'bg-white/5 border-2 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                        : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                    }`}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl transition-all text-lg ${
                      isDarkMode
                        ? 'bg-white/5 border-2 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                        : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                    }`}
                    placeholder="john@yourbusiness.com"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl transition-all text-lg ${
                      isDarkMode
                        ? 'bg-white/5 border-2 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                        : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                    }`}
                    placeholder="Your Business LLC"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    What Industry Are You In?
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl transition-all text-lg ${
                      isDarkMode
                        ? 'bg-white/5 border-2 border-white/10 text-white focus:border-cyan-400 focus:bg-white/10'
                        : 'bg-gray-50 border-2 border-gray-200 text-gray-900 focus:border-cyan-500 focus:bg-white'
                    }`}
                  >
                    <option value="" disabled>Select your industry</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className={isDarkMode ? 'bg-gray-900' : 'bg-white'}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border-2 border-red-500/20">
                    <p className="text-red-400 font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 px-8 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-105 active:scale-95 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting Request...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Request Invitation
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>

                <p className={`text-center text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  We'll reach out with details about the next gathering
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
