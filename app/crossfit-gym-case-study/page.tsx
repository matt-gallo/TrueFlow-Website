import type { Metadata } from 'next'
import { Suspense } from 'react'
import CaseStudyContent from './CaseStudyContent'

export const metadata: Metadata = {
  title: 'CrossFit Box Case Study — 19 Members, Zero Ad Spend | TrueFlow AI',
  description:
    'A 200-member box could not log into its own website. Here is what we found when we connected the gym software to the marketing system: 19 members from 89 leads with no ad spend, a 5x undercounted conversion rate, 79 intros never followed up, and 24 members training on dead cards.',
  openGraph: {
    title: 'The box that could not log into its own website',
    description:
      '19 members, zero ad spend, and a reconciliation that found 79 unworked intros and 24 members on failed cards.',
    type: 'article'
  }
}

export default function CrossfitGymCaseStudyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <CaseStudyContent />
    </Suspense>
  )
}
