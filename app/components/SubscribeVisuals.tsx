'use client'

import { Clock, Mail, CalendarDays, Users } from 'lucide-react'
import { useTheme } from './ThemeProvider'

/**
 * Shared gradient used by the variant motifs.
 * userSpaceOnUse is required: the default objectBoundingBox units collapse to a
 * zero-area box on straight <line>/<polyline> strokes, which then paint nothing.
 */
function MotifDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="20" y1="20" x2="100" y2="100">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  )
}

/** A — urgency: a clock whose hand sweeps past a missed marker. */
function MotifUrgency({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <MotifDefs id="g-a" />
      <circle cx="60" cy="60" r="46" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.35" />
      <circle
        cx="60"
        cy="60"
        r="46"
        fill="none"
        stroke="url(#g-a)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="215 289"
        transform="rotate(-90 60 60)"
      />
      {[0, 90, 180, 270].map((d) => (
        <line
          key={d}
          x1="60"
          y1="20"
          x2="60"
          y2="27"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
          transform={`rotate(${d} 60 60)`}
        />
      ))}
      <line x1="60" y1="60" x2="60" y2="34" stroke="url(#g-a)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="60" y1="60" x2="82" y2="60" stroke="url(#g-a)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="60" r="4" fill="url(#g-a)" />
    </svg>
  )
}

/** B — toolkit: a stack of tools/cards fanning out of a box. */
function MotifToolkit({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <MotifDefs id="g-b" />
      <rect x="26" y="30" width="56" height="40" rx="5" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" transform="rotate(-12 54 50)" />
      <rect x="32" y="34" width="56" height="40" rx="5" fill="none" stroke="url(#g-b)" strokeWidth="2" opacity="0.6" transform="rotate(-5 60 54)" />
      <rect x="34" y="44" width="56" height="44" rx="6" fill="none" stroke="url(#g-b)" strokeWidth="3" />
      <line x1="44" y1="58" x2="80" y2="58" stroke="url(#g-b)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="66" x2="72" y2="66" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <line x1="44" y1="74" x2="76" y2="74" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <circle cx="88" cy="36" r="9" fill="none" stroke="url(#g-b)" strokeWidth="3" />
      <line x1="88" y1="31" x2="88" y2="41" stroke="url(#g-b)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="83" y1="36" x2="93" y2="36" stroke="url(#g-b)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

/** C — proof: a rising bar chart with a signal spike. */
function MotifProof({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <MotifDefs id="g-c" />
      <line x1="24" y1="92" x2="98" y2="92" stroke={stroke} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {[
        { x: 30, h: 18 },
        { x: 46, h: 32 },
        { x: 62, h: 26 },
      ].map((b) => (
        <rect key={b.x} x={b.x} y={90 - b.h} width="10" height={b.h} rx="3" fill={stroke} opacity="0.25" />
      ))}
      <rect x="78" y="34" width="10" height="56" rx="3" fill="url(#g-c)" />
      <polyline
        points="30,74 46,60 62,66 83,32"
        fill="none"
        stroke="url(#g-c)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="83" cy="32" r="5.5" fill="url(#g-c)" />
      <circle cx="83" cy="32" r="10" fill="none" stroke="url(#g-c)" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}

export function VariantMotif({ variant }: { variant: 'a' | 'b' | 'c' }) {
  const { isDarkMode } = useTheme()
  const stroke = isDarkMode ? '#ffffff' : '#374151'
  const Motif = variant === 'a' ? MotifUrgency : variant === 'b' ? MotifToolkit : MotifProof

  return (
    <div className="mx-auto mb-6 h-20 w-20 sm:h-24 sm:w-24" aria-hidden>
      <Motif stroke={stroke} />
    </div>
  )
}

/**
 * Cadence / format stats. Deliberately NO subscriber count — we don't have a
 * verified number, and inventing one would be a fabricated claim on a page
 * that's about to take paid traffic.
 */
const STATS: { Icon: typeof Clock; value: string; label: string }[] = [
  { Icon: Clock, value: '3 min', label: 'to read' },
  { Icon: CalendarDays, value: 'Mon–Fri', label: 'every weekday' },
  { Icon: Mail, value: '1 signal', label: 'per issue' },
  { Icon: Users, value: 'Free', label: 'unsubscribe anytime' },
]

export function StatStrip() {
  const { isDarkMode } = useTheme()

  return (
    <div
      className={`mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-4 ${
        isDarkMode ? 'border-white/10 bg-white/10' : 'border-gray-200 bg-gray-200'
      }`}
    >
      {STATS.map(({ Icon, value, label }) => (
        <div
          key={label}
          className={`flex flex-col items-center gap-1 px-4 py-5 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}
        >
          <Icon className="mb-1 h-4 w-4 text-blue-400" />
          <div
            className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {value}
          </div>
          <div className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{label}</div>
        </div>
      ))}
    </div>
  )
}
