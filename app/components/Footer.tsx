'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

export function Footer() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'

  return (
    <footer className={`py-12 sm:py-16 px-4 border-t backdrop-blur-md transition-colors ${
      isDarkMode ? 'bg-black/80 border-white/10' : 'bg-gray-100 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src={logoSrc}
                alt="TrueFlow"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
              We build the automations that help small businesses capture more leads, save time, and grow.
            </p>
          </div>

          {/* Quick Links - No Header */}
          <div className="flex items-center">
            <ul className="space-y-2">
              <li><Link href="/contact" className={`transition-colors text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</Link></li>
              <li><Link href="/coming-soon" className={`transition-colors text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Help Center</Link></li>
              <li>
                <Link
                  href="https://www.skool.com/the-hive-9609/about"
                  className={`transition-colors text-sm ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
            <div className="space-y-2">
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                1621 Central Avenue<br />
                Cheyenne, Wyoming 82001
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                <a href="tel:+14246675537" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                  +1 424-667-5537
                </a>
                <br />
                <span className={`text-xs ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>(call or text)</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link href="/sign-up" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block text-center mt-10">
              Get started here
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4 ${
          isDarkMode ? 'border-white/10' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
            © 2025 TrueFlow™ AI, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className={`transition-colors text-sm ${isDarkMode ? 'text-white/40 hover:text-white/60' : 'text-gray-500 hover:text-gray-700'}`}>Terms</Link>
            <Link href="/privacy" className={`transition-colors text-sm ${isDarkMode ? 'text-white/40 hover:text-white/60' : 'text-gray-500 hover:text-gray-700'}`}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
