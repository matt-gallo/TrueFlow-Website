/**
 * GHL AI chat widget — button opens the widget's own panel.
 *
 * Confirmed API (from diagnostics):
 *   window.leadConnector.chatWidget.openWidget() / .closeWidget() / .isActive
 *
 * The widget renders as its own floating panel (it won't embed in a custom
 * modal), but openWidget() pops it open on demand — so a button triggers it.
 */

'use client'

import { useEffect, useState } from 'react'
import { MessageSquare } from 'lucide-react'

const LOADER_SRC = 'https://beta.leadconnectorhq.com/loader.js'
const RESOURCES_URL = 'https://beta.leadconnectorhq.com/chat-widget/loader.js'
const WIDGET_ID = '67e414b9b02706ad1f6e4b50'

declare global {
  interface Window {
    leadConnector?: {
      chatWidget?: {
        openWidget?: () => void
        closeWidget?: () => void
        isActive?: boolean
        isLoaded?: boolean
      }
    }
  }
}

export default function ChatTestPage() {
  const [ready, setReady] = useState(false)

  // Load the GHL loader once and poll until the chatWidget API is available.
  useEffect(() => {
    if (!document.querySelector('script[data-ghl-loader]')) {
      const script = document.createElement('script')
      script.src = LOADER_SRC
      script.setAttribute('data-resources-url', RESOURCES_URL)
      script.setAttribute('data-widget-id', WIDGET_ID)
      script.setAttribute('data-ghl-loader', 'true')
      script.async = true
      document.body.appendChild(script)
    }

    const interval = window.setInterval(() => {
      if (window.leadConnector?.chatWidget?.openWidget) {
        setReady(true)
        window.clearInterval(interval)
      }
    }, 300)
    return () => window.clearInterval(interval)
  }, [])

  const openChat = () => {
    window.leadConnector?.chatWidget?.openWidget?.()
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Chat Widget Popup Test</h1>
      <p className="text-white/60 text-center max-w-md">
        Clicking the button opens the AI chat panel via the widget&apos;s own
        <code className="mx-1 px-1 rounded bg-white/10">openWidget()</code> API.
      </p>

      <button
        onClick={openChat}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all inline-flex items-center gap-3 disabled:opacity-50"
        disabled={!ready}
      >
        <MessageSquare className="h-6 w-6" />
        {ready ? 'Book Your AI Growth Audit' : 'Loading chat…'}
      </button>

      <p className="text-xs text-white/30">
        {ready ? 'widget ready' : 'waiting for widget to load…'}
      </p>
    </div>
  )
}
