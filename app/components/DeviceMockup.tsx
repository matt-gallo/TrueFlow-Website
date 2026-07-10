'use client'

import { useTheme } from './ThemeProvider'

/**
 * Hero device cluster: phone + laptop + tablet, each rendering a real (small)
 * version of the daily brief. Pure CSS/SVG so it stays sharp on retina, follows
 * the theme toggle, and the on-screen copy is editable text rather than a bitmap.
 */

type ScreenTone = 'a' | 'b' | 'c'

const ISSUE = {
  kicker: 'THE TRUEFLOW DAILY',
  date: 'Tue · 3 min read',
  headline: 'Your CRM just learned your brand voice while you slept',
  blocks: [
    { label: 'One real signal', lines: 3 },
    { label: 'TrueFlow’s take', lines: 2 },
    { label: 'Questions to ask', lines: 1 },
  ],
}

/** Skeleton text lines — suggest body copy without unreadable micro-type. */
function Lines({ count, dark, wide = false }: { count: number; dark: boolean; wide?: boolean }) {
  const widths = ['100%', '92%', '78%', '85%']
  return (
    <div className={wide ? 'space-y-[5px]' : 'space-y-[2px]'}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full ${wide ? 'h-[4px]' : 'h-[2px]'} ${dark ? 'bg-white/20' : 'bg-gray-300'}`}
          style={{ width: widths[i % widths.length] }}
        />
      ))}
    </div>
  )
}

/** The newsletter as it appears on a device screen. */
function IssueScreen({ dark, scale = 1 }: { dark: boolean; scale?: number }) {
  const big = scale > 1
  return (
    <div className={`h-full w-full overflow-hidden ${dark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* mail header */}
      <div className={`flex items-center gap-1.5 border-b px-2 py-1.5 ${dark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
        <div className={`text-[4px] font-bold uppercase tracking-wider ${dark ? 'text-white/60' : 'text-gray-500'}`}>
          {ISSUE.kicker}
        </div>
      </div>

      <div className={big ? 'px-4 py-3' : 'px-2 py-2'}>
        <div className={`mb-1 ${big ? 'text-[5px]' : 'text-[3.5px]'} ${dark ? 'text-white/40' : 'text-gray-400'}`}>
          {ISSUE.date}
        </div>

        {/* headline — real text, kept legible */}
        <div
          className={`font-bold leading-tight ${big ? 'mb-3 text-[10px]' : 'mb-2 text-[5px]'} ${
            dark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {ISSUE.headline}
        </div>

        <div className={big ? 'space-y-3' : 'space-y-1.5'}>
          {ISSUE.blocks.map((b) => (
            <div key={b.label}>
              <div className={`font-bold uppercase tracking-wider text-purple-400 ${big ? 'mb-[5px] text-[5.5px]' : 'mb-[3px] text-[3px]'}`}>
                {b.label}
              </div>
              <Lines count={b.lines} dark={dark} wide={big} />
            </div>
          ))}
        </div>

        {/* CTA pill */}
        <div
          className={`rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ${
            big ? 'mt-4 h-[12px]' : 'mt-2 h-[6px]'
          } w-2/3`}
        />
      </div>
    </div>
  )
}

function Phone({ dark }: { dark: boolean }) {
  return (
    <div
      className={`relative h-[190px] w-[95px] rounded-[16px] border-[3px] p-[3px] shadow-2xl sm:h-[215px] sm:w-[108px] ${
        dark ? 'border-gray-800 bg-gray-900' : 'border-gray-300 bg-gray-200'
      }`}
    >
      {/* notch */}
      <div
        className={`absolute left-1/2 top-[3px] z-10 h-[7px] w-[34px] -translate-x-1/2 rounded-b-[5px] ${
          dark ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      />
      <div className="h-full w-full overflow-hidden rounded-[11px]">
        <IssueScreen dark={dark} />
      </div>
    </div>
  )
}

function Laptop({ dark }: { dark: boolean }) {
  return (
    <div className="relative w-[268px] sm:w-[360px]">
      {/* lid */}
      <div
        className={`rounded-t-[10px] border-[4px] border-b-0 p-[3px] shadow-2xl ${
          dark ? 'border-gray-800 bg-gray-900' : 'border-gray-300 bg-gray-200'
        }`}
      >
        {/* browser chrome */}
        <div className={`flex items-center gap-[3px] rounded-t-[5px] px-1.5 py-1 ${dark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="h-[3px] w-[3px] rounded-full bg-red-400/70" />
          <div className="h-[3px] w-[3px] rounded-full bg-yellow-400/70" />
          <div className="h-[3px] w-[3px] rounded-full bg-green-400/70" />
        </div>
        <div className="h-[172px] overflow-hidden rounded-b-[5px] sm:h-[212px]">
          <IssueScreen dark={dark} scale={1.2} />
        </div>
      </div>
      {/* base */}
      <div className={`h-[7px] rounded-b-[10px] ${dark ? 'bg-gray-700' : 'bg-gray-300'}`}>
        <div className={`mx-auto h-[2px] w-[52px] rounded-b-full ${dark ? 'bg-gray-600' : 'bg-gray-400'}`} />
      </div>
      {/* rubber foot / shadow spread */}
      <div className={`mx-auto h-[3px] w-[86%] rounded-b-full ${dark ? 'bg-gray-800/60' : 'bg-gray-400/40'}`} />
    </div>
  )
}

function Tablet({ dark }: { dark: boolean }) {
  return (
    <div
      className={`relative h-[178px] w-[132px] rounded-[12px] border-[3px] p-[3px] shadow-2xl sm:h-[205px] sm:w-[152px] ${
        dark ? 'border-gray-800 bg-gray-900' : 'border-gray-300 bg-gray-200'
      }`}
    >
      <div className="h-full w-full overflow-hidden rounded-[8px]">
        <IssueScreen dark={dark} />
      </div>
      {/* home indicator */}
      <div
        className={`absolute bottom-[5px] left-1/2 h-[2px] w-[34px] -translate-x-1/2 rounded-full ${
          dark ? 'bg-white/25' : 'bg-gray-400'
        }`}
      />
    </div>
  )
}

/** Soft blurred gradient orbs — depth without an image payload. */
export function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl motion-safe:animate-pulse" />
      <div
        className="absolute right-1/4 top-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: '1.2s', animationDuration: '5s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: '2.4s', animationDuration: '6s' }}
      />
    </div>
  )
}

export default function DeviceMockup({ tone = 'a' }: { tone?: ScreenTone }) {
  const { isDarkMode } = useTheme()

  return (
    <div className="relative flex items-end justify-center gap-3 sm:gap-5" aria-hidden>
      {/* phone — tucked left, slightly back */}
      <div className="hidden translate-y-3 -rotate-6 transition-transform duration-500 hover:-translate-y-1 sm:block">
        <Phone dark={isDarkMode} />
      </div>

      {/* laptop — hero, front and center */}
      <div className="z-10 transition-transform duration-500 hover:-translate-y-1">
        <Laptop dark={isDarkMode} />
      </div>

      {/* tablet — right, angled in */}
      <div className="hidden translate-y-2 rotate-6 transition-transform duration-500 hover:-translate-y-1 sm:block">
        <Tablet dark={isDarkMode} />
      </div>
    </div>
  )
}
