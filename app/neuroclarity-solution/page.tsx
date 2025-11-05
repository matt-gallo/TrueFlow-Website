'use client'

import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import { Brain, Sparkles, Zap } from 'lucide-react'

export default function NeuroClaritySolutionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#04010f] via-[#070325] to-black" />
        <div className="absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-fuchsia-500/40 blur-3xl" />
        <div className="absolute right-[-10rem] top-56 -z-10 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#7f5af0]/40 via-transparent to-transparent opacity-80" />

        <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-40 md:flex-row md:items-center md:gap-16 md:pt-48">
          <div className="relative flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              NeuroClarity Cognitive Performance Suite
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Unlock your brain&apos;s hidden potential
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
              NeuroClarity combines neuroscience-backed coaching with adaptive AI to decode how your mind works, eliminate cognitive bottlenecks, and build a repeatable state of high performance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-fuchsia-500/50"
              >
                Start the Clarity Assessment
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-10 grid gap-6 text-sm text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                <div className="mb-2 font-semibold text-white">NeuroBench™</div>
                Pinpoint the habits and environments that sharpen or dull your cognition in under 14 minutes.
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                <div className="mb-2 font-semibold text-white">Adaptive Roadmaps</div>
                Weekly micro-protocols tuned to your neurochemistry, energy cycles, and decision fatigue thresholds.
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                <div className="mb-2 font-semibold text-white">Measured Momentum</div>
                Track executive function, focus depth, and recovery gains with tangible score improvements.
              </div>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-purple-500/20 backdrop-blur">
              <div className="absolute inset-0 rounded-[32px] border border-white/5" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/40">
                      <Brain className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-white/60">Realtime Clarity</div>
                      <div className="text-lg font-semibold text-white">Executive Flow Index</div>
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                    Live Sync
                  </div>
                </div>

                <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/40 p-6">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Focus Depth</span>
                    <span className="text-xl font-semibold text-white">87%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Decision Clarity</span>
                    <span className="text-xl font-semibold text-white">92%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Recovery Readiness</span>
                    <span className="text-xl font-semibold text-white">78%</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 p-6">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Zap className="h-4 w-4 text-cyan-300" />
                    <span>Next micro-protocol releases in</span>
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-white">02h : 16m</div>
                  <p className="mt-2 text-sm text-white/60">
                    Stay in the zone with timed resets that keep your neurochemistry balanced.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/40">
              <span className="rounded-full border border-white/10 px-4 py-2">Cognitive Health</span>
              <span className="rounded-full border border-white/10 px-4 py-2">High-Performance Teams</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Creative Leaders</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
