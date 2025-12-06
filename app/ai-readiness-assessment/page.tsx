import type { Metadata } from 'next'
import AIReadinessAssessmentContent from './AssessmentContent'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment - TrueFlow',
  description: 'Discover how automation can help your business grow. Take our free readiness assessment.',
}

export default function AIReadinessAssessmentPage() {
  return <AIReadinessAssessmentContent />
}
