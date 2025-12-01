'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/app/components/ThemeProvider'

const inclusions = [
  {
    title: 'Full TrueFlow Lead Machine Build',
    subtitle: 'Normally $3,000 setup',
    bullets: [
      'Workflow + automation integration',
      'Cold outreach campaign setup',
      'Domain & inbox configuration',
      'Custom funnel or lead magnet build',
      '7-day nurture sequence written + installed',
      'Analytics & reporting dashboard'
    ],
    value: '$3,000 value'
  },
  {
    title: 'Core Campaign Activation',
    subtitle: 'Normally $750/mo — now $600/mo',
    bullets: [
      'Up to 70 new verified contacts per week (~280/mo)',
      'AI-driven outreach in your brand tone',
      'Replies delivered to your inbox or CRM',
      'Weekly optimization + deliverability management',
      'Continuous pipeline growth on autopilot'
    ],
    value: '$750/mo value'
  },
  {
    title: 'TrueFlow Accelerator Mastermind (3 Months)',
    subtitle: 'Normally $350/week ( $4,200 total )',
    bullets: [
      'Weekly live mastermind + implementation calls',
      'Direct Q&A with Matt + team',
      'Systems coaching, automation, and scaling strategies',
      'Private Slack/Telegram for support & accountability'
    ],
    value: '$4,200 value'
  },
  {
    title: 'TrueFlow Platform Access (3 Months)',
    subtitle: 'Normally $297/mo ( $891 total )',
    bullets: [
      'Lead Machine CRM + pipeline management',
      'Conversation AI tooling',
      'Pre-built automations + ROI tracking dashboards',
      'Done-for-you reporting + compliance monitoring'
    ],
    value: '$891 value'
  }
]

export default function LeadMachineOfferPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[560px] h-[560px] bg-purple-600/20 blur-[300px]" />
      </div>

      <div className="relative z-10">
        <header className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logoSrc} alt="TrueFlow" width={240} height={64} className="h-12 w-auto" />
          </Link>
          <div className="text-right space-y-1">
            <p className="text-sm text-white/70">Questions? Text the team at <span className="text-white">(305) 901-6455</span></p>
            <Link href="/lead-machine" className="text-sm text-blue-300 hover:text-blue-200">← Back to Lead Machine overview</Link>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 pb-20 space-y-12">
          <section className="text-center space-y-6">
            <p className="text-sm tracking-[0.35em] text-white/60 uppercase">Limited Launch Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold">TrueFlow Lead Machine Special Offer</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              $10,341+ in done-for-you growth assets for a one-time $2,600 build (then $600/month after 30 days). Only 10 spots available before pricing resets to $3,000 setup + $750/month.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center text-lg">
              <div className="px-6 py-3 rounded-full border border-white/20 bg-white/5">$2,600 today</div>
              <div className="px-6 py-3 rounded-full border border-white/20 bg-white/5">$600/month after 30 days</div>
              <div className="px-6 py-3 rounded-full border border-white/20 bg-white/5">Save $7,700+</div>
            </div>
          </section>

          <section className="grid gap-6">
            {inclusions.map((item) => (
              <div key={item.title} className="p-6 rounded-3xl border border-white/10 bg-white/5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-white/60 text-sm">{item.subtitle}</p>
                  </div>
                  <p className="text-white/70 text-sm font-medium">{item.value}</p>
                </div>
                <ul className="mt-4 grid gap-2 text-white/70 text-sm list-disc list-inside">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="p-6 rounded-3xl border border-emerald-400/40 bg-emerald-500/10 text-center space-y-4">
            <p className="text-2xl font-semibold text-emerald-200">90-Day ROI Guarantee</p>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              See measurable ROI within 90 days or we keep sending leads until you do. After that, you only pay the $297/mo platform access until the ROI target is met.
            </p>
          </section>

          <section className="p-6 rounded-3xl border border-white/10 bg-white/5 space-y-4 text-center">
            <p className="text-2xl font-semibold">Why this founder pricing?</p>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We&apos;re taking on 10 businesses at this rate to showcase wins before we reset to $3,000 setup + $750/month. Lock in this offer now—it will not return.
            </p>
          </section>

          <section className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold">Start Your Build Today</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Pay the $2,600 setup now to reserve your spot. Your first $600 monthly payment begins on day 30. Includes everything above plus white-glove onboarding support.
            </p>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
              <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
                <iframe
                  src="https://link.fastpaydirect.com/payment-link/6917746381766c67f95501ac"
                  width="100%"
                  height="900"
                  style={{ border: 0, overflow: 'hidden', borderRadius: '12px' }}
                  allow="payment"
                  loading="lazy"
                  title="TrueFlow Lead Machine Payment"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
