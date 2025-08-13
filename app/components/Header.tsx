'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg blur-md" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-semibold text-white">TrueFlow AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/for-business" className="text-white/80 hover:text-white transition-colors">
              For Business
            </Link>
            <Link href="/content-engine" className="text-white/80 hover:text-white transition-colors">
              Content Engine
            </Link>
            <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/login" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
              Log In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link href="/for-business" className="text-white/80 hover:text-white transition-colors">
              For Business
            </Link>
            <Link href="/content-engine" className="text-white/80 hover:text-white transition-colors">
              Content Engine
            </Link>
            <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/login" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all text-center">
              Log In
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}