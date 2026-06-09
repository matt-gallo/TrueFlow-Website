/**
 * Bare embed page for the GHL chat widget — loaded inside an iframe.
 *
 * The widget renders as a position:fixed panel. By putting it alone on this
 * page and embedding the page in a sized <iframe>, "the viewport" becomes the
 * iframe box, so the widget is visually contained in whatever element holds
 * the iframe (true inline placement on the parent page).
 *
 * No nav, no copy — just a transparent body and the widget, auto-opened.
 */

'use client'

import { useEffect } from 'react'

const chatLoaderSrc = 'https://beta.leadconnectorhq.com/loader.js'
const chatResourcesUrl = 'https://beta.leadconnectorhq.com/chat-widget/loader.js'
const chatWidgetId = '67e414b9b02706ad1f6e4b50'

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

export default function ScaleWithoutYouChatEmbedPage() {
  useEffect(() => {
    // Transparent background so it blends into the parent section.
    document.body.style.background = 'transparent'
    document.documentElement.style.background = 'transparent'

    if (!document.querySelector('script[data-ghl-loader]')) {
      const script = document.createElement('script')
      script.src = chatLoaderSrc
      script.setAttribute('data-resources-url', chatResourcesUrl)
      script.setAttribute('data-widget-id', chatWidgetId)
      script.setAttribute('data-ghl-loader', 'true')
      script.async = true
      document.body.appendChild(script)
    }

    let opened = false
    const interval = window.setInterval(() => {
      const api = window.leadConnector?.chatWidget
      if (api?.openWidget && !opened) {
        api.openWidget()
        opened = true
        window.clearInterval(interval)
      }
    }, 300)
    const timeout = window.setTimeout(() => window.clearInterval(interval), 15000)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timeout)
    }
  }, [])

  return <div style={{ width: '100%', height: '100%' }} />
}
