'use client'

import { usePathname } from 'next/navigation'
import { ExternalLink } from 'lucide-react'

export default function VisitMainSite() {
  const pathname = usePathname()
  
  // Only show if we're not in an iframe
  if (typeof window !== 'undefined' && window.parent === window) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href={`https://trueflow.ai/#${pathname}`}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Visit on TrueFlow.ai</span>
        </a>
      </div>
    )
  }
  
  return null
}