'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useSpring, useInView } from 'framer-motion'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'
import {
  ArrowRight,
  CalendarClock,
  CreditCard,
  KeyRound,
  MessageSquare,
  PhoneOff,
  Search,
  TrendingDown,
  UserX
} from 'lucide-react'

/* ────────────────────────────────────────────────────────────
   Design tokens — practice #5 (consistency) and #10 (semantic
   names). Every radius, gap and surface on this page comes from
   here rather than being eyeballed per-section.
   ──────────────────────────────────────────────────────────── */
const TYPE = {
  h1: 'text-[clamp(2.25rem,4.2vw+1rem,4rem)] font-extrabold leading-[1.05] tracking-[-0.02em]',
  h2: 'text-[clamp(1.75rem,2vw+1rem,2.75rem)] font-bold leading-[1.15] tracking-[-0.015em]',
  h3: 'text-[clamp(1.125rem,0.6vw+1rem,1.375rem)] font-bold',
  lede: 'text-[clamp(1.125rem,0.8vw+1rem,1.5rem)] font-light leading-[1.5]',
  body: 'text-[1.0625rem] leading-[1.65]'
}

const RADIUS = { card: 'rounded-2xl', panel: 'rounded-3xl', pill: 'rounded-full' }
const PROSE = 'max-w-[65ch]' // practice #8 — 50–75 characters per line
const FOCUS =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

/* ─── Content ─────────────────────────────────────────────── */

const heroStats = [
  { to: 19, suffix: '', label: 'new members', detail: 'from 89 leads' },
  { to: 0, prefix: '$', label: 'spent on ads', detail: 'across 11 months' },
  { to: 2, suffix: ' days', label: 'median decision', detail: 'first contact to joining' }
]

const results = [
  { metric: 'Conversations handled by the AI front desk', to: 108 },
  { metric: 'Intros booked onto coaches’ calendars', to: 32 },
  { metric: 'Leads generated', to: 89 },
  { metric: 'Became paying members', to: 19 },
  { metric: 'Lead-to-member conversion', to: 21, suffix: '%' },
  { metric: 'Median days from first contact to joining', to: 2 },
  { metric: 'Money spent on ads', to: 0, prefix: '$' }
]

const leaks = [
  {
    icon: UserX,
    stat: '19%',
    headline: 'of paying members were unreachable',
    detail:
      'Of 199 people who had paid in the last 45 days, 37 did not exist in the marketing system at all. Another 46 had neither an email nor a phone number anywhere in the business — and 45 of them were still coming to class.'
  },
  {
    icon: CalendarClock,
    stat: '79',
    headline: 'intros that never got a follow-up',
    detail:
      'They walked through the door, took a free class, and never heard from anyone again. The warmest list the box had, sitting untouched.'
  },
  {
    icon: PhoneOff,
    stat: '1,443',
    headline: 'former members never contacted',
    detail:
      'Nine years of people who used to train there. Not one reactivation attempt, because there was no way to reach a group instead of a spreadsheet.'
  },
  {
    icon: CreditCard,
    stat: '24',
    headline: 'members training on a card that had already failed',
    detail:
      '1,484 declined charges since January across 44 members. One card declined 134 times. The retry fees cost $445 to chase $1,380 — and those athletes were still hitting the 6am, training for free, with nobody aware.'
  },
  {
    icon: TrendingDown,
    stat: '368 → 199',
    headline: 'the member count was fiction',
    detail:
      'The gym software reported 368 active members. Only 199 had paid anything in the last 45 days. Staffing, class times and rent were all being decided against a number 85% too high.'
  }
]

const built = [
  {
    icon: KeyRound,
    title: 'Gave him the keys first',
    body:
      'We did not migrate the old account — we could not, and we would not have wanted to. We rebuilt inside an account with his name on it. His site, his number, his automations, his data. If he fired us tomorrow, he keeps every bit of it.'
  },
  {
    icon: Search,
    title: 'Built a front door that works',
    body:
      'A site aimed at what people type into Google before they walk into a box for the first time — leading with the objection, not the equipment list. The form writes straight into the CRM instead of an inbox nobody checks between classes.'
  },
  {
    icon: MessageSquare,
    title: 'Put someone on it around the clock',
    body:
      'An AI front desk that answers questions and books intros onto the coaches’ calendars. Trained on the actual class schedule, the on-ramp, the programming and how they coach.'
  },
  {
    icon: TrendingDown,
    title: 'Made him findable without paying for it',
    body:
      'First page of Google for “best CrossFit gym” in his city, two results in the top ten. And ask an AI assistant the same question — it now names the box, using copy from the site we built. Almost no affiliate has claimed that channel yet.'
  }
]

const nowRunning = [
  {
    trigger: 'Someone joins',
    action: 'Their record syncs in seconds and the pipeline updates itself. Nobody retypes anything.'
  },
  {
    trigger: 'Someone stops showing up',
    action:
      'Flagged at seven days. Escalated at fourteen. At twenty-one, a task lands on a human to pick up the phone.'
  },
  {
    trigger: 'A cancellation is scheduled',
    action:
      'The save sequence fires while they are still a paying member — not after they surface on the termination report.'
  }
]

const weeks = [
  {
    when: 'Day one',
    what:
      'We pull your client list, your lead list and your transaction history, and reconcile all three against your marketing system. You build nothing and change no process. By that evening you have a list of every member who is not reachable, every intro who never got a follow-up, every card quietly failing, and — usually for the first time — which of your leads actually became members.'
  },
  {
    when: 'Week one',
    what:
      'The connection goes live. New members sync on their own. Your history gets loaded and segmented, so you can reach a group instead of a spreadsheet.'
  },
  {
    when: 'Week two',
    what:
      'The first at-risk flags fire. Someone who has been gone a week hears from you before they have decided anything.'
  }
]

const questions = [
  'If you left your marketing company tomorrow, what would you actually keep?',
  'Can you name every member who has not scanned in for two weeks — without pulling a report?',
  'How many people took a free intro last year and never heard from you again?',
  'How would you find out today that a member’s card has been failing since March?'
]

/* ─── Animated counter (elements.md → Animated Counter) ───────
   Dry figures are the entire argument here, so each one counts
   up when it scrolls into view. Skipped for reduced-motion.
   ──────────────────────────────────────────────────────────── */
function Counter({
  to,
  prefix = '',
  suffix = '',
  className = ''
}: {
  to: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced || to === 0) {
      setN(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 900
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      // ease-out — practice #13
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, reduced])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  )
}

/* ─── Scroll reveal (elements.md → Scroll Reveal) ─────────── */
function Reveal({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function CaseStudyContent() {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode } = useTheme()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    setMounted(true)
  }, [])

  // practice #18 — design the loading state, don't flash blank
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="w-full max-w-3xl space-y-4" aria-hidden="true">
          <div className="h-3 w-40 rounded-full bg-white/10" />
          <div className="h-12 w-full rounded-xl bg-white/10" />
          <div className="h-12 w-4/5 rounded-xl bg-white/10" />
          <div className="h-56 w-full rounded-3xl bg-white/5" />
        </div>
        <span className="sr-only">Loading case study</span>
      </div>
    )
  }

  /* Semantic surface tokens, resolved once per theme */
  const surface = isDarkMode ? 'bg-white/[0.04] border-white/10' : 'bg-white border-gray-200 shadow-lg'
  const text = isDarkMode ? 'text-white/80' : 'text-gray-700'
  const muted = isDarkMode ? 'text-white/65' : 'text-gray-600'
  const faint = isDarkMode ? 'text-white/45' : 'text-gray-500'
  const rule = isDarkMode ? 'divide-white/10' : 'divide-gray-200'
  // Accent reserved for ~10% of the page — practice #9
  const accent = 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'

  return (
    <div className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-gray-900'}>
      {/* Scroll progress — orientation on a long read (elements.md) */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-cyan-400 to-purple-500 z-[60]"
        aria-hidden="true"
      />

      <Navigation />

      {/* Faded grid lines — technical, audit-like texture (elements.md) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: isDarkMode
            ? 'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 75%)'
        }}
      />

      <main className="relative z-10">
        {/* ══ HERO ══════════════════════════════════════════ */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p
                className={`inline-flex items-center gap-2 px-4 py-1.5 ${RADIUS.pill} text-xs uppercase tracking-[0.3em] border ${
                  isDarkMode ? 'border-white/20 text-white/60' : 'border-gray-300 text-gray-600 bg-white'
                }`}
              >
                Case study · Single-location box
              </p>

              <h1 className={`${TYPE.h1} mt-8 max-w-[20ch]`}>
                He didn’t own his website. Or his automations. Or the phone number on his own front door.
              </h1>

              <p className={`${TYPE.lede} ${muted} mt-7 ${PROSE}`}>
                A 200-member affiliate in the Northeast. Twelve coaches, no full-time admin, an owner running
                fifteen classes a week. Here is what surfaced once he could finally see inside his own
                business.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <div className={`${RADIUS.panel} overflow-hidden relative border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <Image
                  src="/case-study-crossfit/box-dawn.webp"
                  alt="An empty CrossFit box in the half-light before the first class of the day"
                  width={1600}
                  height={914}
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {heroStats.map((s, i) => (
                <Reveal key={s.label} delay={0.15 + i * 0.08}>
                  <div className={`${RADIUS.card} border p-7 h-full ${surface}`}>
                    <p className={`text-[2.75rem] font-extrabold leading-none ${accent}`}>
                      <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                    <p className="text-sm font-semibold mt-3">{s.label}</p>
                    <p className={`text-xs mt-1 ${faint}`}>{s.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ THE OWNERSHIP TRAP ════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className={PROSE}>
              <h2 className={TYPE.h2}>He came to us because he wanted a new website</h2>

              <div className={`mt-7 space-y-5 ${TYPE.body} ${text}`}>
                <p className="text-xl font-semibold">He couldn’t change his own.</p>
                <p>
                  His site, his automations, his marketing phone number and every contact he had ever
                  collected lived inside an account owned by the gym-marketing agency he paid every month. To
                  swap a photo on the schedule page, he filled out a form and booked a call.
                </p>
                <p>
                  We asked that agency to transfer the account to him. They said no. It was their
                  intellectual property.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote
                className={`mt-10 ${RADIUS.card} border-l-[3px] border-cyan-400 p-7 ${PROSE} ${
                  isDarkMode ? 'bg-white/[0.04]' : 'bg-white shadow-lg'
                }`}
              >
                <p className={`text-lg leading-relaxed italic ${text}`}>
                  “I forgot how to do all this stuff — the automations, the triggers, all that. No clue how to
                  do it. I’m telling you, I suck at this.”
                </p>
                <footer className={`text-sm mt-4 not-italic ${faint}`}>— The owner</footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.1} className={PROSE}>
              <div className={`mt-10 space-y-5 ${TYPE.body} ${text}`}>
                <p>
                  So we went in to see what he had been paying for. The account was full — funnels, landing
                  pages, automations, campaigns.
                </p>
              </div>
            </Reveal>

            {/* Single hardest fact on the page, given its own room — practice #4 */}
            <Reveal delay={0.15}>
              <p className={`mt-8 text-[clamp(1.5rem,2.4vw+1rem,2.25rem)] font-bold leading-snug max-w-[24ch]`}>
                Exactly one thing was running. A workflow called{' '}
                <span className={accent}>“new lead submission.”</span>
              </p>
              <p className={`mt-5 ${TYPE.body} ${text} ${PROSE}`}>
                The forms had not been touched in months. The campaign section was empty. The landing pages
                had never been used once.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ THE LIST ══════════════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className={`${RADIUS.panel} border overflow-hidden ${surface}`}>
                <Image
                  src="/case-study-crossfit/front-desk.webp"
                  alt="A gym owner's desk at the edge of the floor: laptop open to a spreadsheet, stacked paper waivers, a cold coffee"
                  width={1600}
                  height={914}
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="w-full h-auto object-cover"
                />
                <div className="p-8 md:p-14">
                  <h2 className={TYPE.h2}>“Who the hell are all these people?”</h2>

                  <div className={`mt-7 space-y-5 ${TYPE.body} ${text} ${PROSE}`}>
                    <p>
                      His contact list came out at <strong className="font-semibold">2,405 records</strong>.
                      He could not tell you what a single one of them was — current member, past member,
                      someone who filled in a form in 2019. Nothing could sort them, so nobody ever did.
                    </p>
                    <p>
                      On import,{' '}
                      <strong className="font-semibold">
                        half the email addresses came back flagged high-risk or undeliverable.
                      </strong>
                    </p>
                    <p>
                      The gym software claimed 356 active members. Both of us knew that was wrong. He had
                      hand-cleaned the list two months earlier and it had already drifted. People who quit
                      years ago were still marked active. Parents who signed a waiver so their kid could take
                      a class had been added to the adult roster — one record we opened was an eight-year-old.
                    </p>
                    <p>
                      Reaching any of them at scale was off the table anyway. His gym software had killed mass
                      texting. He was still paying for a referral tool he had stopped using. He had no
                      marketing number of his own, because that belonged to the agency too.
                    </p>
                  </div>

                  <div
                    className={`mt-9 p-7 ${RADIUS.card} border ${
                      isDarkMode ? 'bg-cyan-400/[0.06] border-cyan-400/25' : 'bg-cyan-50 border-cyan-200'
                    }`}
                  >
                    <p className={`${TYPE.body} ${text} ${PROSE}`}>
                      <strong className="font-semibold">None of this is unusual.</strong> It is what most
                      affiliates look like underneath: a platform somebody else controls, a library of things
                      nobody turned on, a member list nobody trusts. It does not happen through carelessness.
                      It happens because running a box takes all day, and then the 5:30 starts.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ WHAT WE BUILT ═════════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className={`${TYPE.h2} max-w-[18ch]`}>What we built</h2>
              <p className={`${TYPE.body} ${muted} mt-4 ${PROSE}`}>
                Four moves. The first one was the condition for the other three.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {built.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div
                    className={`${RADIUS.panel} border p-8 h-full transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${surface}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                    </div>
                    <h3 className={`${TYPE.h3} mt-6`}>{item.title}</h3>
                    <p className={`mt-3 ${TYPE.body} ${text}`}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ RESULTS ═══════════════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className={`${RADIUS.panel} border p-8 md:p-14 ${surface}`}>
                <h2 className={TYPE.h2}>What it produced</h2>
                <p className={`mt-4 ${TYPE.body} ${muted}`}>
                  Eleven months, October through August, with nothing spent on ads.
                </p>

                <dl className={`mt-10 divide-y ${rule}`}>
                  {results.map(row => (
                    <div key={row.metric} className="flex items-baseline justify-between gap-6 py-5">
                      <dt className={`${TYPE.body} ${text}`}>{row.metric}</dt>
                      <dd className="text-2xl md:text-[2rem] font-extrabold tabular-nums whitespace-nowrap">
                        <Counter to={row.to} prefix={row.prefix} suffix={row.suffix} />
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className={`mt-10 ${TYPE.body} ${text} ${PROSE}`}>
                  Fourteen of the nineteen are still training there. Collected revenue from that group is past{' '}
                  <strong className="font-semibold">$11,000</strong>, with roughly{' '}
                  <strong className="font-semibold">$14,000 a year now recurring</strong> — from a channel
                  carrying no cost per lead.
                </p>
              </div>
            </Reveal>

            {/* The one number that changed operations — hero moment #2 */}
            <Reveal delay={0.1}>
              <div className="mt-6 rounded-3xl p-8 md:p-14 bg-gradient-to-br from-cyan-400/[0.09] to-purple-500/[0.09] border border-cyan-400/25">
                <p className="text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tight">
                  <span className={accent}>
                    <Counter to={2} suffix=" days" />
                  </span>
                </p>
                <p className={`text-xl md:text-2xl mt-6 font-semibold leading-snug max-w-[30ch]`}>
                  Median time from first contact to signing up.
                </p>
                <p className={`mt-5 ${TYPE.body} ${text} ${PROSE}`}>
                  Nobody is being convinced over six weeks. They decide almost immediately — and the ones who
                  do not hear back inside a day are already at the box down the road. That is the entire job
                  of the AI front desk.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ THE OTHER END ═════════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className={PROSE}>
              <h2 className={TYPE.h2}>Then we looked at the other end</h2>
              <p className={`mt-7 ${TYPE.body} ${text}`}>
                Getting people through the door was working. So we connected the gym software to the marketing
                system — for the first time — and went looking for what happened to people <em>after</em> they
                walked in.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className={`mt-10 ${RADIUS.panel} p-8 md:p-12 border ${
                  isDarkMode ? 'bg-rose-500/[0.07] border-rose-400/25' : 'bg-rose-50 border-rose-200'
                }`}
              >
                <p className="text-[clamp(1.5rem,3vw+.5rem,2.5rem)] font-bold leading-[1.15] max-w-[22ch]">
                  The CRM said 4 of those leads became members.
                  <br />
                  The real number was 19.
                </p>
                <p className={`mt-6 ${TYPE.body} ${text} ${PROSE}`}>
                  Nothing closed the loop between the two systems, so nobody updated the pipeline. The box had
                  been undercounting its own conversion rate five-fold — and deciding what was working on top
                  of that number.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05} className={`${PROSE} mt-16`}>
              <h3 className={TYPE.h3}>Then the rest of it</h3>
              <p className={`mt-3 ${TYPE.body} ${muted}`}>
                Same disease as the old agency account, different system. The data existed. Nobody could see
                it, so nobody acted on it.
              </p>
            </Reveal>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {leaks.map((leak, i) => (
                <Reveal key={leak.headline} delay={i * 0.05}>
                  <div className={`${RADIUS.panel} border p-8 h-full ${surface}`}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                        <leak.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className={`text-[2rem] font-extrabold leading-none ${accent}`}>{leak.stat}</p>
                        <p className="text-base font-semibold mt-2 leading-snug">{leak.headline}</p>
                      </div>
                    </div>
                    <p className={`mt-5 ${TYPE.body} ${text}`}>{leak.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ OBJECTION ═════════════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className={`${RADIUS.panel} border p-8 md:p-14 ${surface}`}>
                <h2 className={`${TYPE.h2} max-w-[22ch]`}>“My gym software probably does some of this”</h2>

                <div className={`mt-7 space-y-5 ${TYPE.body} ${text} ${PROSE}`}>
                  <p>
                    It probably does. He said the same thing, and he was right — his platform is good and he
                    likes it. We did not replace it. We did not want to.
                  </p>
                  <p className="text-xl font-semibold">
                    The honest test is not <em>can</em> it. It is <em>did</em> it.
                  </p>
                  <p>Last month, without you going to look, did your software tell you —</p>
                  <ul className="space-y-3 pt-1">
                    {[
                      'which members stopped scanning in?',
                      'that two dozen people were training on dead cards?',
                      'which of last year’s leads became members?'
                    ].map(q => (
                      <li key={q} className="flex gap-3">
                        <span className="text-cyan-400 shrink-0" aria-hidden="true">
                          •
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-semibold pt-2">
                    If the answer is “the data’s in there somewhere” — that is the finding.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ WHAT RUNS NOW ═════════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <h2 className={TYPE.h2}>What runs now</h2>
              <div className="mt-8 space-y-4">
                {nowRunning.map(item => (
                  <div key={item.trigger} className={`${RADIUS.card} border p-6 ${surface}`}>
                    <p className="font-bold">{item.trigger}</p>
                    <p className={`mt-2 ${TYPE.body} ${text}`}>{item.action}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={`${RADIUS.panel} overflow-hidden border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <Image
                  src="/case-study-crossfit/coach-phone.webp"
                  alt="A coach standing alone in his box after hours, lit by his phone screen"
                  width={1600}
                  height={914}
                  sizes="(max-width: 1024px) 100vw, 576px"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              <blockquote
                className={`mt-6 ${RADIUS.card} border-l-[3px] border-cyan-400 p-7 ${
                  isDarkMode ? 'bg-white/[0.04]' : 'bg-white shadow-lg'
                }`}
              >
                <p className={`text-lg leading-relaxed italic ${text}`}>
                  “It was someone I’d been meaning to reach out to, and I didn’t. When I saw that she
                  terminated, I was like — that could have been avoided. If I had contacted her, I should have
                  reached out and offered to help. And I didn’t, because I just can’t do it. I get so busy.”
                </p>
                <footer className={`text-sm mt-4 not-italic ${faint}`}>
                  — The owner, on a member he lost earlier that year
                </footer>
              </blockquote>

              <p className="mt-6 text-xl font-semibold">She would have been flagged on day seven.</p>
            </Reveal>
          </div>
        </section>

        {/* ══ FIRST TWO WEEKS ═══════════════════════════════ */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className={TYPE.h2}>What the first two weeks look like</h2>
            </Reveal>

            <div className="mt-10 space-y-4">
              {weeks.map((step, i) => (
                <Reveal key={step.when} delay={i * 0.07}>
                  <div className={`${RADIUS.panel} border p-8 ${surface}`}>
                    <p className={`text-xs uppercase tracking-[0.28em] ${faint}`}>{step.when}</p>
                    <p className={`mt-4 ${TYPE.body} ${text}`}>{step.what}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-10 text-xl md:text-2xl font-semibold text-center max-w-[28ch] mx-auto leading-snug">
                Nothing about how you run classes changes. You just stop finding out late.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ QUESTIONS + CTA ═══════════════════════════════ */}
        <section className="py-20 pb-28 md:py-24 md:pb-32 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className={`${RADIUS.panel} overflow-hidden mb-14 border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <Image
                  src="/case-study-crossfit/class-in-progress.webp"
                  alt="A class mid-workout with the coach watching from the side of the floor"
                  width={1600}
                  height={914}
                  sizes="(max-width: 896px) 100vw, 896px"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              <h2 className={TYPE.h2}>Four questions</h2>
            </Reveal>

            <ol className="mt-9 space-y-3">
              {questions.map((q, i) => (
                <Reveal key={q} delay={i * 0.05}>
                  <li className={`${RADIUS.card} border p-6 flex gap-5 items-baseline ${surface}`}>
                    <span className={`text-2xl font-extrabold shrink-0 tabular-nums ${accent}`}>{i + 1}</span>
                    <p className={`${TYPE.body} ${text}`}>{q}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.1}>
              <p className={`mt-9 ${TYPE.body} ${text} ${PROSE}`}>
                If those land uncomfortably, that is the normal answer. Every box we have opened up has a
                version of this, and not one of them got there through carelessness. They got there because
                they run a gym with two or three people, and nobody ever built the thing that watches.
              </p>
            </Reveal>

            {/* Single CTA — copywriting #3 (Rule of One), #17, #18, #20 */}
            <Reveal delay={0.1}>
              <div className="mt-14 p-9 md:p-14 rounded-3xl bg-gradient-to-br from-cyan-400/[0.09] to-purple-500/[0.09] border border-cyan-400/25 text-center">
                <h2 className="text-[clamp(1.5rem,2.4vw+1rem,2.25rem)] font-bold leading-tight max-w-[20ch] mx-auto">
                  Find out what your numbers say
                </h2>
                <p className={`mt-5 ${TYPE.body} ${text} max-w-[52ch] mx-auto`}>
                  We run the same reconciliation on your data and hand you the same list we handed him: who is
                  unreachable, who never got followed up, whose card is failing, and which leads actually
                  became members.
                </p>

                <Link
                  href="/book-strategy-call"
                  className={`inline-flex items-center gap-3 mt-9 px-8 py-4 min-h-[44px] text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 ${RADIUS.pill} transition-transform duration-200 hover:scale-[1.03] motion-reduce:hover:scale-100 hover:shadow-2xl hover:shadow-cyan-500/30 ${FOCUS} group`}
                >
                  Get my reconciliation
                  <ArrowRight
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                    aria-hidden="true"
                  />
                </Link>

                {/* Risk reversal, right where the doubt hits */}
                <p className={`text-sm mt-5 ${muted}`}>
                  Takes a day. You build nothing, and change no process. No commitment attached to the list.
                </p>
                <p className={`text-xs mt-6 ${faint}`}>
                  Gym identity withheld at the owner’s request. Every figure verified against payment records.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
