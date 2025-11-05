import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'

const TALLY_EMBED_URL = 'https://tally.so/embed/w4ODAY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment - TrueFlow',
  description: 'Discover how automation can help your business grow. Take our free readiness assessment.',
}

export default function AIReadinessAssessmentPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      {/* Brand lighting accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[220px]" />
        <div className="absolute bottom-[-140px] left-[-80px] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[200px]" />
        <div className="absolute bottom-[-160px] right-[-40px] h-[380px] w-[380px] rounded-full bg-blue-500/25 blur-[180px]" />
      </div>

      <Navigation />

      <main className="relative pt-40 pb-24">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 text-center">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              TrueFlow AI
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              AI Readiness Assessment
            </h1>
            <p className="text-lg text-white/70 sm:text-xl">
              Answer a few quick questions to receive a personalized roadmap for implementing AI across your business. It takes less than five minutes and helps our team craft recommendations tailored to your goals.
            </p>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" aria-hidden />
            <div className="relative rounded-[28px] border border-white/10 bg-black/70 p-4 shadow-[0_30px_80px_rgba(59,130,246,0.18)] backdrop-blur-2xl sm:p-8 md:p-10">
              <iframe
                src={TALLY_EMBED_URL}
                title="TrueFlow AI Readiness Assessment"
                className="h-[900px] w-full rounded-[20px] border-0 bg-transparent"
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
