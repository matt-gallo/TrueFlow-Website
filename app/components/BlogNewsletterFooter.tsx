'use client'

import NewsletterSignup from './NewsletterSignup'
import { useTheme } from './ThemeProvider'

// Renders the newsletter signup at the bottom of every page under /blog
// (the listing and each individual post). Theme-aware background so the band
// matches the page above it instead of falling back to the black <body>.
export default function BlogNewsletterFooter() {
  const { isDarkMode } = useTheme()
  return (
    <div className={`pt-8 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <NewsletterSignup />
    </div>
  )
}
