'use client'

import Script from 'next/script'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

const TALLY_EMBED_URL = 'https://tally.so/embed/w4ODAY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'

export default function AIReadinessAssessmentContent() {
  const { isDarkMode } = useTheme()

  const containerClasses = `relative min-h-screen overflow-hidden transition-colors duration-500 ${
    isDarkMode ? 'bg-[#050712] text-white' : 'bg-[#f5f7fb] text-slate-900'
  }`

  const badgeClasses = `inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] shadow-sm ${
    isDarkMode
      ? 'border-white/15 bg-white/5 text-white/70'
      : 'border-slate-200 bg-white text-slate-500'
  }`

  const headingClasses = `text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl ${
    isDarkMode ? 'text-white' : 'text-slate-900'
  }`

  const paragraphClasses = `text-lg sm:text-xl ${
    isDarkMode ? 'text-white/70' : 'text-slate-600'
  }`

  const cardClasses = `relative rounded-[28px] border p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-colors duration-500 sm:p-8 md:p-10 ${
    isDarkMode ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-white'
  }`

  const iframeClasses = `h-[900px] w-full rounded-[20px] border transition-colors duration-500 ${
    isDarkMode ? 'border-white/10 bg-[#050712]' : 'border-slate-100 bg-white'
  }`

  const glowTop = isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/40'
  const glowLeft = isDarkMode ? 'bg-purple-500/20' : 'bg-purple-200/50'
  const glowRight = isDarkMode ? 'bg-blue-500/20' : 'bg-blue-200/50'
  const gradientHalo = isDarkMode
    ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20'
    : 'bg-gradient-to-r from-cyan-200/70 via-blue-200/60 to-purple-200/70'

  return (
    <div className={containerClasses}>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[220px] ${glowTop}`} />
        <div className={`absolute bottom-[-140px] left-[-80px] h-[420px] w-[420px] rounded-full blur-[200px] ${glowLeft}`} />
        <div className={`absolute bottom-[-160px] right-[-40px] h-[380px] w-[380px] rounded-full blur-[180px] ${glowRight}`} />
      </div>

      <Navigation />

      <main className="relative pt-32 pb-24">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 text-center">
          <div className="max-w-3xl space-y-6">
            <span className={badgeClasses}>TrueFlow AI</span>
            <h1 className={headingClasses}>AI Readiness Assessment</h1>
            <p className={paragraphClasses}>
              Answer a few quick questions to receive a personalized roadmap for implementing AI across your business.
              It takes less than five minutes and helps our team craft recommendations tailored to your goals.
            </p>
          </div>

          <div className="relative w-full">
            <div className={`absolute inset-0 -z-10 rounded-[32px] blur-3xl ${gradientHalo}`} aria-hidden />
            <div className={cardClasses}>
              <iframe
                src={TALLY_EMBED_URL}
                title="TrueFlow AI Readiness Assessment"
                className={iframeClasses}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
