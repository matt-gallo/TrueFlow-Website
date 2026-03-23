'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import { useTheme } from '@/app/components/ThemeProvider'
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Coffee,
  Share2,
  Download,
  ExternalLink
} from 'lucide-react'

export default function CoffeeConfirmedPage() {
  const { isDarkMode } = useTheme()
  const [copied, setCopied] = useState(false)

  // Placeholder event details
  const eventDetails = {
    date: 'Saturday, March 21, 2026',
    time: '9:00 AM - 11:00 AM',
    location: 'The Coffee House',
    address: '123 Main Street, Denver, CO 80202',
    contactEmail: 'matt@trueflow.ai',
    contactPhone: '+1 (424) 667-5537'
  }

  const handleAddToCalendar = () => {
    // TODO: Implement calendar download (.ics file)
    alert('Calendar download feature coming soon!')
  }

  const handleShareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Local Business Coffee Meetup',
          text: 'Join me at the Local Business Coffee meetup!',
          url: window.location.origin + '/coffee/register'
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + '/coffee/register')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={`min-h-screen transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navigation />

      {/* Hero Section with Success State */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with mountain image */}
        <div className="absolute inset-0">
          <Image
            src="/front-range-1.webp"
            alt="Colorado Mountains"
            fill
            className="object-cover opacity-10"
          />
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-br from-green-900/30 via-black to-black'
              : 'bg-gradient-to-br from-green-50 via-white to-gray-50'
          }`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Success icon with animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className={`absolute inset-0 ${
                isDarkMode ? 'bg-green-500/20' : 'bg-green-500/30'
              } rounded-full blur-3xl animate-pulse`} />
              <div className={`relative p-8 rounded-full ${
                isDarkMode ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-green-500/20 border-2 border-green-500/40'
              }`}>
                <CheckCircle2 className="w-20 h-20 text-green-400" />
              </div>
            </div>
          </div>

          <h1 className={`text-5xl sm:text-7xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            See You There
          </h1>

          <p className={`text-xl sm:text-2xl mb-3 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
            Looking forward to the conversation
          </p>

          <p className={`text-lg ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
            Details and calendar invite are on the way to your inbox
          </p>
        </div>
      </div>

      {/* Main Content - Asymmetric Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Event Details - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main event card */}
            <div className={`rounded-3xl p-8 sm:p-12 ${
              isDarkMode
                ? 'bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-2xl'
                : 'bg-white border border-gray-200 shadow-2xl'
            }`}>
              <h2 className={`text-3xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Event Details
              </h2>

              <div className="space-y-6">
                {/* Date */}
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      Date
                    </p>
                    <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {eventDetails.date}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      Time
                    </p>
                    <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {eventDetails.time}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      Location
                    </p>
                    <p className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {eventDetails.location}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(eventDetails.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${
                        isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'
                      } transition-colors font-medium`}
                    >
                      {eventDetails.address}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`mt-10 pt-8 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'} flex flex-col sm:flex-row gap-4`}>
                <button
                  onClick={handleAddToCalendar}
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/20 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300 text-gray-900'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Add to Calendar
                </button>

                <button
                  onClick={handleShareEvent}
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/20 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300 text-gray-900'
                  }`}
                >
                  <Share2 className="w-5 h-5" />
                  {copied ? 'Link Copied!' : 'Share Event'}
                </button>
              </div>
            </div>

            {/* What to Bring */}
            <div className={`rounded-3xl p-8 ${
              isDarkMode
                ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20'
                : 'bg-gradient-to-br from-cyan-50 to-purple-50 border border-cyan-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Come As You Are
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    Your biggest win or challenge from the past month
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    Willingness to be honest about what's not working
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                  <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    An open mind—the best insights often come from unexpected places
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 5 columns, sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/front-range-4.png"
                alt="Colorado Mountains"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>

            {/* Contact Card */}
            <div className={`rounded-3xl p-8 ${
              isDarkMode
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <Coffee className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Questions?
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                    We're here to help
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${eventDetails.contactEmail}`}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 text-cyan-400'
                      : 'bg-gray-50 hover:bg-gray-100 text-cyan-600'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">{eventDetails.contactEmail}</span>
                </a>

                <a
                  href={`tel:${eventDetails.contactPhone}`}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 text-cyan-400'
                      : 'bg-gray-50 hover:bg-gray-100 text-cyan-600'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">{eventDetails.contactPhone}</span>
                </a>
              </div>

              <p className={`mt-6 text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Need to reschedule? Life happens. Just let me know and I'll save you a spot at the next gathering.
              </p>
            </div>

            {/* Looking Forward Card */}
            <div className={`rounded-3xl p-8 ${
              isDarkMode
                ? 'bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20'
                : 'bg-gradient-to-br from-green-50 to-white border border-green-200 shadow-lg'
            }`}>
              <p className={`text-lg italic mb-4 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                "Can't wait to hear what you're working on and what challenges you're navigating. These conversations are always the highlight of my month."
              </p>
              <p className={`font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                — Matt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
