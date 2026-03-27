import type { Metadata } from 'next'
import AIReadinessAssessmentContent from './AssessmentContent'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment — TrueFlow',
  description: 'Discover where your business is leaking time and money. Get your free AI readiness score in 2 minutes.',
}

export default function AIReadinessAssessmentPage() {
  return <AIReadinessAssessmentContent />
}
