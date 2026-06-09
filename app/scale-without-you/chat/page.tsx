/**
 * Scale Without You — chat page.
 * Hero + the GHL chat widget caged inside an iframe so it renders inline
 * within a sized section (instead of floating fixed in the viewport).
 *
 * The iframe loads /scale-without-you/chat/embed, which contains only the widget.
 */

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '../../components/ThemeProvider'

export default function ScaleWithoutYouChatPage() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const originalBody = document.body.style.cssText
    const originalHtml = document.documentElement.style.cssText
    document.body.style.background = '#000000'
    document.body.style.backgroundImage = 'none'
    document.documentElement.style.background = '#000000'
    return () => {
      document.body.style.cssText = originalBody
      document.documentElement.style.cssText = originalHtml
    }
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading…</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Minimal nav */}
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-center">
        <Link href="/scale-without-you" className="flex items-center">
          <Image
            src={logoSrc}
            alt="TrueFlow"
            width={220}
            height={55}
            className="h-9 sm:h-10 w-auto"
            priority
            style={{ maxWidth: '100%', objectFit: 'contain' }}
          />
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-4 pt-4 pb-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Start Your Free Growth Audit
          </h1>
          <p className={`text-base sm:text-lg max-w-xl mx-auto ${
            isDarkMode ? 'text-white/60' : 'text-gray-600'
          }`}>
            Chat with our assistant below to see if you&apos;re a fit and book your
            call — it takes about 2 minutes.
          </p>
        </div>
      </section>

      {/* Chat widget caged inside an iframe so it renders inline in this box. */}
      <section className="px-4 pb-16 flex justify-center">
        <div className={`w-full max-w-md rounded-3xl overflow-hidden border shadow-2xl ${
          isDarkMode ? 'border-white/10 bg-black/40' : 'border-gray-200 bg-white'
        }`}>
          <iframe
            src="/scale-without-you/chat/embed"
            title="Growth Audit Chat"
            style={{ width: '100%', height: '640px', border: 'none', display: 'block' }}
          />
        </div>
      </section>
    </div>
  )
}
