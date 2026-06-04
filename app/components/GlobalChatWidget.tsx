'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Routes that load their own chat widget and should NOT get the global one.
const SUPPRESSED_PATHS = ['/ai-growth-audit', '/ai-growth-audit/chat', '/ai-growth-audit/chat/embed', '/chat-test']

/**
 * Loads the site-wide GoHighLevel chat bubble on every page EXCEPT routes that
 * embed their own widget. Lives in a client component so it can read the path.
 */
export default function GlobalChatWidget() {
  const pathname = usePathname()

  if (SUPPRESSED_PATHS.includes(pathname)) {
    return null
  }

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6830ad06619d7c1715180638"
      strategy="afterInteractive"
    />
  )
}
