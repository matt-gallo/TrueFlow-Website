'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function ShareRedirect() {
  const params = useParams()
  const path = Array.isArray(params.path) ? params.path.join('/') : params.path

  useEffect(() => {
    // Check if we're in an iframe
    if (window.parent !== window) {
      // We're in iframe, just navigate normally
      window.location.href = `/${path}`
    } else {
      // We're not in iframe (direct visit), show instructions
      // This page will be accessed via Railway URL directly
    }
  }, [path])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Redirecting...</h1>
        
        <div className="bg-white/10 rounded-lg p-6 mb-6">
          <p className="mb-4">You're being redirected to:</p>
          <p className="font-mono text-blue-400 mb-4">/{path}</p>
          
          <a 
            href={`https://trueflow.ai#/${path}`}
            className="inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue to TrueFlow AI
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p>Or visit the article directly at:</p>
          <a 
            href={`https://trueflow-landing-page-production.up.railway.app/${path}`}
            className="text-blue-400 hover:underline"
          >
            https://trueflow-landing-page-production.up.railway.app/{path}
          </a>
        </div>
      </div>
    </div>
  )
}