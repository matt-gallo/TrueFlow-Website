'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import { useTheme } from '@/app/components/ThemeProvider'
import { Coffee, ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  email: string
  businessName: string
  businessType: string
  biggestBottleneck: string
}

const businessTypes = [
  'Home Services (HVAC, Plumbing, Electrical, Roofing, etc.)',
  'Health & Wellness (Chiro, PT, Gym, Yoga, Med Spa, etc.)',
  'Real Estate & Property Management',
  'Professional Services (Law, Accounting, Financial Advisor, etc.)',
  'Construction & Trades',
  'Retail & Hospitality',
  'Agency & Consulting',
  'Other'
]

export default function FoundersCoffeePage() {
  const router = useRouter()
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    biggestBottleneck: ''
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

      router.push('/coffee/welcome')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Registration error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/snow-trees-light.jpg"
            alt="Colorado Winter"
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-br from-black/80 via-black/60 to-black/40'
              : 'bg-gradient-to-br from-white/80 via-white/60 to-white/40'
          }`} />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-8">
              <Coffee className="w-5 h-5 text-cyan-400" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Front Range Founders
              </span>
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Before You Read
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Any Further
              </span>
            </h1>

            <div className={`max-w-2xl mx-auto space-y-4 text-lg sm:text-xl ${
              isDarkMode ? 'text-white/80' : 'text-gray-700'
            }`}>
              <p>Read this entire page.</p>
              <p>Not skim it. Not scroll to the bottom.</p>
              <p className="font-medium">Actually read it.</p>
              <p>Because what this is about will matter more over the next ten years than most people realize.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Something Strange */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content - 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className={`text-4xl sm:text-5xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Something Strange Is Happening
              </h2>

              <div className={`space-y-4 text-lg leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                <p className="text-xl font-medium">Connection is dying.</p>
                <p>Not dramatically. Quietly.</p>
                <p>Conversations are becoming messages. Relationships are becoming transactions.</p>
                <p>People who once built businesses by talking to customers now spend most of their time staring at screens.</p>

                <div className="pl-6 border-l-2 border-cyan-400 space-y-2">
                  <p>Email.</p>
                  <p>Slack.</p>
                  <p>Dashboards.</p>
                  <p>Notifications.</p>
                  <p>Automation.</p>
                  <p className="font-medium">And now… AI.</p>
                </div>

                <p className="pt-4">Don't misunderstand me.</p>
                <p>AI is powerful. It will change almost every industry. It will automate enormous amounts of work.</p>
                <p className="text-xl font-medium">But something else is happening at the same time.</p>
                <p className="text-xl">The more technology expands… the more human connection quietly disappears.</p>
              </div>
            </div>

            {/* Image - 5 cols */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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

      {/* Section 2: Why It Matters - Asymmetric reversed */}
      <div className={`py-24 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image - 5 cols, order-1 on mobile */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
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

            {/* Content - 7 cols, order-2 on mobile */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className={`text-4xl sm:text-5xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                And That Matters More Than People Think
              </h2>

              <div className={`space-y-4 text-lg leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                <p className="text-xl font-medium">Because the most important breakthroughs in business have never come from software.</p>
                <p className="text-xl">They come from conversations.</p>
                <p>The kind where someone leans forward and says:</p>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                  <p className="italic">"Here's what we tried."</p>
                  <p className="italic mt-2">Or "We almost lost the business because of this mistake."</p>
                  <p className="italic mt-2">Or "Here's the system we built that finally fixed it."</p>
                </div>

                <p className="pt-4">Those conversations don't happen in comment threads.</p>
                <p className="text-xl font-medium">They happen across tables. Over coffee. Between people who are actually building things.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: What I Decided */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl sm:text-5xl font-bold leading-tight mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            So I Decided To Do Something About It
          </h2>

          <div className={`space-y-6 text-lg leading-relaxed ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}>
            <p>Over the past year I've had dozens of conversations with business owners around Evergreen, Golden, and the Front Range.</p>

            <div className="grid sm:grid-cols-2 gap-4 py-6">
              {['Contractors', 'Realtors', 'Gym owners', 'Consultants', 'Builders', 'Operators'].map((type) => (
                <div key={type} className={`p-4 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                  <p className="font-medium">{type}</p>
                </div>
              ))}
            </div>

            <p>People creating real businesses in the real world.</p>
            <p className="text-xl font-medium">And something interesting kept happening.</p>
            <p>Every time we sat down for coffee… within about fifteen minutes the conversation became valuable.</p>

            <div className={`p-8 rounded-2xl ${
              isDarkMode ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20' : 'bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200'
            }`}>
              <p>Ideas started flowing.</p>
              <p className="mt-2">Problems got solved.</p>
              <p className="mt-2">People left with better clarity than they arrived with.</p>
            </div>

            <p className="text-xl font-medium pt-4">So I asked a simple question.</p>
            <p className="text-xl">What if those conversations happened regularly?</p>
            <p>Not as a networking event.</p>
            <p className="text-xl font-medium">But as a small room.</p>
          </div>
        </div>
      </div>

      {/* Section 4: The Coffee Club - Asymmetric with coffee photo */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-5xl sm:text-6xl font-bold leading-tight mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              The Front Range
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Founders Coffee Club
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Coffee photo - 5 cols */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-[3rem] blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/coffee-photo.png"
                    alt="Coffee"
                    width={500}
                    height={700}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>

            {/* Content - 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              <div className={`space-y-6 text-lg leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                <p>Each month I host a small coffee gathering for local business owners.</p>
                <p className="text-xl font-medium">Usually around 10–12 people.</p>
                <p>Not 50. Not 100.</p>
                <p>Because the moment a room gets too large… the conversation changes.</p>
                <p>People start performing.</p>
                <p className="text-xl font-medium">Small rooms create honest conversations.</p>
                <p className="text-xl font-medium">And honest conversations create better businesses.</p>
              </div>

              <div className={`p-8 rounded-2xl ${
                isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-xl'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  How It Works
                </h3>
                <div className={`space-y-4 text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  <p>We meet at a local coffee shop.</p>
                  <p>We sit down.</p>
                  <p>And we talk.</p>
                  <div className={`p-4 rounded-xl mt-6 ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                    <p>No presentations.</p>
                    <p className="mt-2">No sales pitches.</p>
                    <p className="mt-2">No networking theater.</p>
                    <p className="mt-4 font-medium">Just conversation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Why Now */}
      <div className={`py-24 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl sm:text-5xl font-bold leading-tight mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why This Matters Right Now
          </h2>

          <div className={`space-y-6 text-lg leading-relaxed ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}>
            <p className="text-xl">We are entering a strange moment in history.</p>

            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-200'}`}>
                <p className="font-medium text-xl">Machines are becoming more capable</p>
              </div>
              <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'}`}>
                <p className="font-medium text-xl">Automation is accelerating</p>
              </div>
              <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-pink-500/10 border border-pink-500/20' : 'bg-pink-50 border border-pink-200'}`}>
                <p className="font-medium text-xl">Entire industries are being reshaped</p>
              </div>
            </div>

            <p className="text-xl font-medium">And yet… what people want has not changed.</p>

            <div className={`p-8 rounded-2xl ${
              isDarkMode ? 'bg-gradient-to-br from-white/5 to-white/0 border border-white/10' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
            }`}>
              <p className="text-xl mb-4">People want:</p>
              <div className="space-y-2 text-xl font-medium">
                <p>Time.</p>
                <p>Freedom.</p>
                <p>Flexibility.</p>
                <p>Experiences.</p>
                <p>Conversations that actually matter.</p>
                <p>A life that isn't spent entirely in front of a computer solving problems that will be forgotten tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: The Choice */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl sm:text-5xl font-bold leading-tight mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            So Here's The Choice
          </h2>

          <div className={`space-y-6 text-lg leading-relaxed ${
            isDarkMode ? 'text-white/70' : 'text-gray-600'
          }`}>
            <p>If you want to spend all day in front of a screen…</p>
            <p>stressing over dashboards… answering emails… optimizing systems…</p>
            <p>you can absolutely do that.</p>
            <p>Many people will.</p>

            <div className="my-12 py-8 border-y border-cyan-400">
              <p className="text-xl font-medium">But if you want something else…</p>
            </div>

            <p>If you want to expand your impact.</p>
            <p>If you want better ideas.</p>
            <p>If you want deeper conversations with other people building real businesses.</p>
            <p className="text-xl font-medium pt-4">Then you might enjoy this room.</p>
          </div>
        </div>
      </div>

      {/* Section 7: Personal Note with image */}
      <div className={`py-24 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block">
                <div className={`px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-500/20 text-cyan-700'
                } text-sm font-medium`}>
                  A Personal Note
                </div>
              </div>

              <h2 className={`text-4xl sm:text-5xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why I Started This
              </h2>

              <div className={`space-y-4 text-lg leading-relaxed ${
                isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
                <p>My wife and I moved to Colorado because we wanted a different kind of life.</p>
                <p>More time outside. More freedom. More meaningful conversations with interesting people.</p>
                <p>After meeting a lot of local business owners here, it became obvious that many of us want the same thing.</p>
                <p className="text-xl font-medium pt-4">We want to build businesses that support a life worth living.</p>
                <p>The Front Range Founders Coffee Club is simply a way to bring those people together.</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/front-range-2.jpg"
                  alt="Colorado"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="form-section" className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Accept The Invitation
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Because the group stays intentionally small, each meetup is limited to about 10–12 people. If the next one fills up, you'll receive an invitation to the following one.
            </p>
          </div>

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
                  Name
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
                  Industry
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

              <div>
                <label htmlFor="biggestBottleneck" className={`block text-sm font-semibold mb-3 ${
                  isDarkMode ? 'text-white/90' : 'text-gray-700'
                }`}>
                  Optional: What's the biggest bottleneck in your business right now?
                </label>
                <textarea
                  id="biggestBottleneck"
                  name="biggestBottleneck"
                  rows={4}
                  value={formData.biggestBottleneck}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl transition-all text-lg ${
                    isDarkMode
                      ? 'bg-white/5 border-2 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:bg-white/10'
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:bg-white'
                  }`}
                  placeholder="Lead response, hiring, systems, marketing..."
                />
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
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Accept the Invitation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Final thought */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-8 rounded-2xl ${
              isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                One Final Thought
              </h3>
              <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                If you know another business owner who belongs in this kind of room…
              </p>
              <p className={`text-lg mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                You're welcome to bring them.
              </p>
              <p className={`text-xl font-medium mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                The best rooms grow through good people inviting other good people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
