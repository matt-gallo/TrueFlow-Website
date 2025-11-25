'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isDarkMode, toggleTheme } = useTheme()
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])
  
  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors ${
      isDarkMode
        ? 'border-white/10 bg-black/60'
        : 'border-gray-200 bg-white/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/true-flow-logo.webp" 
              alt="TrueFlow" 
              width={280} 
              height={70} 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
              priority
              style={{ 
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {pathname !== '/' && (
              <Link href="/" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm`}>
                Back to Home
              </Link>
            )}
            {pathname === '/' && (
              <>
                <Link href="/content-engine" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Constant Content Engine™</Link>
                <a href="#features" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Features</a>
                <a href="#how-it-works" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>How it Works</a>
                <a href="#testimonials" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Success Stories</a>
                <a href="#blog" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</a>
                <Link href="/faq" className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>FAQs</Link>
                <a
                  href="https://app.trueflow.ai/changelog"
                  className={`${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recent Updates
                </a>
              </>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
              href="https://login.trueflow.ai"
              className={`border px-5 py-2 rounded-full transition-colors text-sm font-semibold ${
                isDarkMode
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Sign in
            </a>
            <Link
              href="/sign-up"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-semibold"
            >
              Get started here
            </Link>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className={isDarkMode ? 'text-white' : 'text-gray-900'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-xl border-t transition-colors ${
          isDarkMode
            ? 'bg-black/90 border-white/10'
            : 'bg-white/90 border-gray-200'
        }`}>
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`block transition-colors text-lg ${
                pathname === '/'
                  ? isDarkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'
                  : isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              href="/content-engine"
              onClick={handleLinkClick}
              className={`block transition-colors text-lg ${
                pathname === '/content-engine'
                  ? isDarkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'
                  : isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Constant Content Engine™
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className={`block transition-colors text-lg ${
                pathname.startsWith('/blog')
                  ? isDarkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'
                  : isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              onClick={handleLinkClick}
              className={`block transition-colors text-lg ${
                pathname === '/faq'
                  ? isDarkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'
                  : isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              FAQs
            </Link>
            {pathname === '/' && (
              <>
                <a
                  href="https://app.trueflow.ai/changelog"
                  onClick={handleLinkClick}
                  className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recent Updates
                </a>
                <a
                  href="#features"
                  onClick={handleLinkClick}
                  className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={handleLinkClick}
                  className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  How it Works
                </a>
                <a
                  href="#testimonials"
                  onClick={handleLinkClick}
                  className={`block transition-colors text-lg ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Success Stories
                </a>
              </>
            )}
            <a
              href="https://login.trueflow.ai"
              onClick={handleLinkClick}
              className={`w-full border px-8 py-3 rounded-full transition-colors text-lg font-semibold block text-center ${
                isDarkMode
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Sign in
            </a>
            <Link
              href="/sign-up"
              onClick={handleLinkClick}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-lg font-semibold block text-center"
            >
              Get started here
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
