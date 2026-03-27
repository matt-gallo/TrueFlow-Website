'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, Zap, BarChart3, Clock, Users, Database, TrendingUp, AlertCircle } from 'lucide-react'

// ─── Questions ────────────────────────────────────────────────────────────────

const QUESTIONS = [
  // Category 1: Follow-up & Lead Management
  {
    id: 1,
    category: 'Follow-up & Leads',
    question: 'When a new lead comes in, how quickly does your team follow up?',
    options: [
      { label: 'Within minutes — we have a system', score: 4 },
      { label: 'Same day, but it\'s manual', score: 3 },
      { label: 'Within a few days if we remember', score: 2 },
      { label: 'Honestly, some fall through the cracks', score: 1 },
    ],
  },
  {
    id: 2,
    category: 'Follow-up & Leads',
    question: 'How do you currently manage follow-ups with prospects who don\'t respond?',
    options: [
      { label: 'Automated sequence handles it', score: 4 },
      { label: 'We manually follow up a couple of times', score: 2 },
      { label: 'We send one follow-up then move on', score: 1 },
      { label: 'We don\'t have a consistent process', score: 1 },
    ],
  },
  {
    id: 3,
    category: 'Follow-up & Leads',
    question: 'How are leads currently organized in your business?',
    options: [
      { label: 'CRM with tags, stages, and automation', score: 4 },
      { label: 'CRM but mostly manual, no real structure', score: 2 },
      { label: 'Spreadsheet or notes app', score: 1 },
      { label: 'Email inbox or memory', score: 1 },
    ],
  },

  // Category 2: Repetitive Tasks & Time
  {
    id: 4,
    category: 'Repetitive Tasks',
    question: 'How much of your week is spent on tasks you do the exact same way every time?',
    options: [
      { label: 'Less than 10% — most is automated', score: 4 },
      { label: 'Around 25% — some repetitive work', score: 3 },
      { label: 'Around 50% — it eats a lot of my time', score: 2 },
      { label: 'More than half my week is repetitive tasks', score: 1 },
    ],
  },
  {
    id: 5,
    category: 'Repetitive Tasks',
    question: 'Do you have documented SOPs (step-by-step processes) for your core operations?',
    options: [
      { label: 'Yes — written, followed, and mostly automated', score: 4 },
      { label: 'Yes — written but not automated', score: 3 },
      { label: 'Informally in my head or scattered notes', score: 2 },
      { label: 'No — everything is done ad hoc', score: 1 },
    ],
  },
  {
    id: 6,
    category: 'Repetitive Tasks',
    question: 'If you hired someone tomorrow, how long would it take to train them on your core processes?',
    options: [
      { label: 'A day — everything is documented and systematized', score: 4 },
      { label: 'A week — some docs but lots of hand-holding', score: 3 },
      { label: 'A month — it\'s mostly tribal knowledge', score: 2 },
      { label: 'I\'m not sure — I\'ve never thought about it', score: 1 },
    ],
  },

  // Category 3: Tools & Tech Stack
  {
    id: 7,
    category: 'Tools & Tech Stack',
    question: 'How would you describe your current software stack?',
    options: [
      { label: 'Integrated and connected — tools talk to each other', score: 4 },
      { label: 'Multiple tools but some manual handoffs', score: 3 },
      { label: 'A mix of things that don\'t really connect', score: 2 },
      { label: 'Minimal tools, mostly doing things manually', score: 1 },
    ],
  },
  {
    id: 8,
    category: 'Tools & Tech Stack',
    question: 'Are you currently using any automation tools (Zapier, Make, GHL workflows, etc.)?',
    options: [
      { label: 'Yes — multiple automations running across the business', score: 4 },
      { label: 'Yes — a few basic ones', score: 3 },
      { label: 'We\'ve tried but nothing stuck', score: 2 },
      { label: 'No — not yet', score: 1 },
    ],
  },
  {
    id: 9,
    category: 'Tools & Tech Stack',
    question: 'How do you handle appointment booking and scheduling?',
    options: [
      { label: 'Fully automated — calendar links, reminders, follow-ups', score: 4 },
      { label: 'Online booking but manual reminders', score: 3 },
      { label: 'Back-and-forth by email or phone', score: 1 },
      { label: 'No system — totally manual', score: 1 },
    ],
  },

  // Category 4: Data & Visibility
  {
    id: 10,
    category: 'Data & Visibility',
    question: 'How clearly can you see what\'s happening in your business right now?',
    options: [
      { label: 'Live dashboards — I know my numbers at all times', score: 4 },
      { label: 'Weekly or monthly reports I pull manually', score: 3 },
      { label: 'I have a rough idea but no real data', score: 2 },
      { label: 'I mostly go by gut feel', score: 1 },
    ],
  },
  {
    id: 11,
    category: 'Data & Visibility',
    question: 'Do you know which marketing channels are actually generating revenue?',
    options: [
      { label: 'Yes — tracked and attributed clearly', score: 4 },
      { label: 'Mostly — some blind spots', score: 3 },
      { label: 'I have guesses but no hard data', score: 2 },
      { label: 'No — I\'m not tracking this', score: 1 },
    ],
  },
  {
    id: 12,
    category: 'Data & Visibility',
    question: 'How do you measure whether your team (or you) is performing well week to week?',
    options: [
      { label: 'KPIs, scorecards, or dashboards reviewed regularly', score: 4 },
      { label: 'Informal check-ins and gut checks', score: 2 },
      { label: 'Revenue is the only metric I watch', score: 2 },
      { label: 'I don\'t have a consistent method', score: 1 },
    ],
  },

  // Category 5: Growth & Capacity
  {
    id: 13,
    category: 'Growth & Capacity',
    question: 'What\'s your biggest bottleneck to growing revenue right now?',
    options: [
      { label: 'Not enough leads coming in', score: 2 },
      { label: 'Leads come in but don\'t convert', score: 2 },
      { label: 'We can\'t handle more without hiring', score: 1 },
      { label: 'I don\'t have enough time to focus on growth', score: 1 },
    ],
  },
  {
    id: 14,
    category: 'Growth & Capacity',
    question: 'If your lead volume doubled tomorrow, could your current systems handle it?',
    options: [
      { label: 'Yes — our systems scale automatically', score: 4 },
      { label: 'Mostly — we\'d manage with some strain', score: 3 },
      { label: 'No — we\'d miss leads and drop the ball', score: 2 },
      { label: 'Definitely not — it would break everything', score: 1 },
    ],
  },
  {
    id: 15,
    category: 'Growth & Capacity',
    question: 'How aligned is your team on what needs to happen each day to hit your goals?',
    options: [
      { label: 'Fully aligned — clear priorities, automated accountability', score: 4 },
      { label: 'Mostly aligned — regular meetings keep us on track', score: 3 },
      { label: 'Loosely aligned — people are busy but not always on the right things', score: 2 },
      { label: 'Not aligned — everyone\'s doing their own thing', score: 1 },
    ],
  },
]

// ─── Scoring ──────────────────────────────────────────────────────────────────

const MAX_SCORE = QUESTIONS.length * 4 // 60

function getScoreTier(pct: number) {
  if (pct >= 80) return {
    label: 'AI-Ready',
    color: 'from-cyan-400 to-blue-500',
    textColor: 'text-cyan-400',
    description: 'Your systems are strong. You\'re in the best position to implement advanced AI — and the ROI will compound fast.',
    icon: <Zap className="h-6 w-6" />,
  }
  if (pct >= 60) return {
    label: 'Nearly There',
    color: 'from-blue-400 to-purple-500',
    textColor: 'text-blue-400',
    description: 'You have solid foundations but a few key gaps are limiting your growth. Targeted automation will unlock significant capacity.',
    icon: <TrendingUp className="h-6 w-6" />,
  }
  if (pct >= 40) return {
    label: 'Building Momentum',
    color: 'from-purple-400 to-pink-500',
    textColor: 'text-purple-400',
    description: 'You\'re aware of the gaps and taking steps forward. The right automation stack will give you leverage you can feel immediately.',
    icon: <BarChart3 className="h-6 w-6" />,
  }
  return {
    label: 'Early Stage',
    color: 'from-orange-400 to-red-500',
    textColor: 'text-orange-400',
    description: 'You\'re leaving significant time and money on the table. The good news: the biggest gains are often the fastest to implement.',
    icon: <AlertCircle className="h-6 w-6" />,
  }
}

function getInsights(answers: number[]): string[] {
  const insights: string[] = []

  // Follow-up (Q1–3)
  const followUpScore = answers.slice(0, 3).reduce((a, b) => a + b, 0)
  if (followUpScore <= 6) insights.push('Your lead follow-up process has gaps — slow or inconsistent response is costing you deals that are already warm.')
  else if (followUpScore <= 9) insights.push('Your follow-up is manual and inconsistent. Automating your lead response sequence could recover 20–30% of lost opportunities.')

  // Repetitive tasks (Q4–6)
  const taskScore = answers.slice(3, 6).reduce((a, b) => a + b, 0)
  if (taskScore <= 6) insights.push('A large portion of your week is consumed by repetitive work that could be automated — freeing hours per day for high-value activity.')
  else if (taskScore <= 9) insights.push('You\'re still doing too much manually. Systematizing your core processes would reduce errors and free your team to focus on growth.')

  // Tools (Q7–9)
  const toolScore = answers.slice(6, 9).reduce((a, b) => a + b, 0)
  if (toolScore <= 6) insights.push('Your tools aren\'t talking to each other. Disconnected software creates manual work and data blind spots that slow everything down.')
  else if (toolScore <= 9) insights.push('Your tech stack has potential but isn\'t fully connected. Better integration would eliminate manual handoffs and reduce human error.')

  // Data (Q10–12)
  const dataScore = answers.slice(9, 12).reduce((a, b) => a + b, 0)
  if (dataScore <= 6) insights.push('You\'re running the business on gut feel rather than data. Without visibility, it\'s impossible to know what to fix or where to invest.')
  else if (dataScore <= 9) insights.push('You have some data visibility but gaps in attribution and performance tracking mean you\'re making decisions with incomplete information.')

  // Growth (Q13–15)
  const growthScore = answers.slice(12, 15).reduce((a, b) => a + b, 0)
  if (growthScore <= 6) insights.push('Your systems can\'t scale with your ambitions. If lead volume increased tomorrow, things would break — and growth would create chaos, not momentum.')
  else if (growthScore <= 9) insights.push('You\'re close to hitting a capacity ceiling. Getting the right systems in place now will let you grow without burning out or missing revenue.')

  // Return top 3
  return insights.slice(0, 3)
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AIReadinessAssessmentContent() {
  const { isDarkMode } = useTheme()
  const searchParams = useSearchParams()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const contactFirstName = searchParams.get('firstName') || ''
  const contactEmail = searchParams.get('email') || ''

  const question = QUESTIONS[current]
  const progress = ((current) / QUESTIONS.length) * 100

  const handleSelect = (score: number) => setSelected(score)

  const handleNext = () => {
    if (selected === null) return
    const newAnswers = [...answers, selected]

    if (current + 1 >= QUESTIONS.length) {
      setAnswers(newAnswers)
      setShowResults(true)

      // Fire results to GHL asynchronously
      if (contactEmail) {
        const finalScore = Math.round((newAnswers.reduce((a, b) => a + b, 0) / MAX_SCORE) * 100)
        const finalTier = getScoreTier(finalScore)
        const finalInsights = getInsights(newAnswers)
        fetch('/api/assessment-results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: contactFirstName,
            email: contactEmail,
            score: finalScore,
            tier: finalTier.label,
            insights: finalInsights,
          }),
        }).catch(err => console.error('Failed to save assessment results:', err))
      }
    } else {
      setAnswers(newAnswers)
      setCurrent(current + 1)
      setSelected(null)
    }
  }

  const handleBack = () => {
    if (current === 0) return
    const newAnswers = answers.slice(0, -1)
    setAnswers(newAnswers)
    setCurrent(current - 1)
    setSelected(answers[current - 1] ?? null)
  }

  const totalScore = answers.reduce((a, b) => a + b, 0)
  const scorePct = Math.round((totalScore / MAX_SCORE) * 100)
  const tier = getScoreTier(scorePct)
  const insights = getInsights(answers)

  const bg = isDarkMode ? 'bg-[#050712] text-white' : 'bg-[#f5f7fb] text-slate-900'
  const cardBg = isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'
  const optionBase = isDarkMode
    ? 'border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-white/10 text-white'
    : 'border-slate-200 bg-white hover:border-cyan-400 hover:bg-cyan-50/50 text-slate-800'
  const optionSelected = 'border-cyan-500 bg-cyan-500/10 text-white'

  if (showResults) {
    return (
      <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${bg}`}>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[220px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[200px]" />
        </div>

        <Navigation />

        <main className="relative pt-28 pb-24">
          <div className="mx-auto max-w-2xl px-4">

            {/* Score card */}
            <div className={`rounded-2xl border p-8 mb-6 text-center ${cardBg}`}>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 mb-6">
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Your Results</span>
              </div>

              {/* Score circle */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/10" />
                  <circle
                    cx="50" cy="50" r="42" fill="none" strokeWidth="8"
                    stroke="url(#scoreGrad)"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - scorePct / 100)}`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">{scorePct}</span>
                  <span className="text-xs text-white/50">out of 100</span>
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${tier.color} bg-opacity-10 mb-3`}>
                <span className="text-white font-bold text-lg">{tier.label}</span>
              </div>
              <p className={`text-sm leading-relaxed max-w-md mx-auto ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
                {tier.description}
              </p>
            </div>

            {/* Insights */}
            {insights.length > 0 && (
              <div className={`rounded-2xl border p-6 mb-6 ${cardBg}`}>
                <h3 className={`font-semibold text-base mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Your Top {insights.length} Opportunities
                </h3>
                <ul className="space-y-4">
                  {insights.map((insight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>{insight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className={`rounded-2xl border p-8 text-center ${cardBg}`}>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ready to fix these gaps?
              </h3>
              <p className={`text-sm mb-6 ${isDarkMode ? 'text-white/60' : 'text-slate-500'}`}>
                Book a free 30-minute strategy call. We'll walk through your results and show you exactly where AI automation can make the biggest impact in your business — fast.
              </p>
              <Link
                href="https://api.leadconnectorhq.com/widget/booking/nc8KAbjOlywMkW6XPSBj"
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Calendar className="h-4 w-4" />
                Book My Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs mt-4 text-white/30">No obligation · 30 minutes · Personalized to your results</p>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${bg}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[220px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[200px]" />
      </div>

      <Navigation />

      <main className="relative pt-28 pb-24">
        <div className="mx-auto max-w-xl px-4">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 mb-4">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">AI Readiness Assessment</span>
            </div>
            <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Find your score
            </h1>
            <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>
              Question {current + 1} of {QUESTIONS.length}
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question card */}
          <div className={`rounded-2xl border p-8 mb-4 ${cardBg}`}>
            <div className="inline-block text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full mb-4">
              {question.category}
            </div>
            <h2 className={`text-lg font-semibold leading-snug mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.score)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all duration-150 ${
                    selected === opt.score && answers.length === current
                      ? optionSelected
                      : selected === opt.score
                      ? optionSelected
                      : optionBase
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={current === 0}
              className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl transition-colors ${
                current === 0
                  ? 'opacity-0 pointer-events-none'
                  : isDarkMode ? 'text-white/50 hover:text-white' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={selected === null}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-30"
            >
              {current + 1 === QUESTIONS.length ? 'See My Results' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
