'use client'

import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import DailyNewsletterSignup from '../components/DailyNewsletterSignup'
import DeviceMockup, { GradientOrbs } from '../components/DeviceMockup'
import { VariantMotif, StatStrip } from '../components/SubscribeVisuals'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

// Variation C — "Proof & format led" (authority / show the real product)
// NOTE: the testimonial quotes below are PLACEHOLDERS. Replace with real subscriber
// quotes (or a verified subscriber count) before driving paid traffic here.
const SAMPLE_BLOCKS = [
  { label: 'One real signal', body: 'A major CRM shipped an AI setup that writes in your brand voice from your past emails — no prompt library, no consultant. The kind of thing agencies used to charge a monthly retainer to configure.' },
  { label: 'TrueFlow’s take', body: 'If you’re paying someone to “manage your AI voice,” that line item is now optional. Here’s the 20-minute setup and the one setting that trips people up.' },
  { label: 'Questions to ask', body: '“What do we still pay our provider for that the platform now does for free?”' },
]

const TESTIMONIALS = [
  { quote: 'The only AI email I don’t archive. It tells me the one thing that matters and what to do — not 12 links.', who: '— [Name], owner, [Company]' },
  { quote: 'Cancelled a $2k/mo “AI consultant” after two issues showed me the platform already did it.', who: '— [Name], [Industry] operator' },
  { quote: 'Three minutes, and I walk into my Monday call sounding like I read every release. I didn’t.', who: '— [Name], founder, [Company]' },
]

export default function SubscribePageC() {
  const { isDarkMode } = useTheme()
  const card = isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? 'bg-gradient-to-b from-black via-gray-950 to-black text-white'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to TrueFlow
        </Link>
      </div>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-4 pt-12 pb-8 text-center">
        <GradientOrbs />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 mb-6">
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
            Read by operators, not tourists
          </span>
        </div>

        <VariantMotif variant="c" />

        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          You can&apos;t track 40 AI releases a week.{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            We read them so you run one.
          </span>
        </h1>

        <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
          The TrueFlow Daily turns the week&apos;s AI noise into one signal you can act on before lunch. Here&apos;s exactly
          what lands in your inbox tomorrow morning:
        </p>

        <div className="mt-12">
          <DeviceMockup tone="c" />
        </div>
      </section>

      {/* Sample issue + form */}
      <section className="max-w-5xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className={`rounded-2xl border overflow-hidden ${card}`}>
            <div className={`px-5 py-3 text-xs border-b ${isDarkMode ? 'text-white/50 border-white/10' : 'text-gray-500 border-gray-200'}`}>
              The TrueFlow Daily — sample issue · Tue · ~3 min read
            </div>
            <div className="p-6">
              <p className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Your CRM just learned your brand voice while you slept
              </p>
              {SAMPLE_BLOCKS.map((b) => (
                <div key={b.label} className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-1">{b.label}</div>
                  <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>

          <DailyNewsletterSignup
            variant="c"
            headline="Read tomorrow's issue."
            subheadline="Free Q2/2026 AI Toolkit lands the moment you join. Mon–Fri — unsubscribe in one click."
          />
        </div>
      </section>

      {/* Format at a glance */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <StatStrip />
      </section>

      {/* Social proof — PLACEHOLDER, replace before running paid traffic */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Why operators keep it open
        </h2>
        <p className={`text-center text-sm mb-8 ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
          Replace these with real subscriber quotes or a verified count before shipping.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.who} className={`rounded-2xl p-6 border ${card}`}>
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>&ldquo;{t.quote}&rdquo;</p>
              <div className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{t.who}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
