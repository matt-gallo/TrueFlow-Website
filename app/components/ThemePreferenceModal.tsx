'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

interface ThemePreferenceModalProps {
  onSelectTheme: (theme: 'light' | 'dark') => void
}

export default function ThemePreferenceModal({ onSelectTheme }: ThemePreferenceModalProps) {
  const [show, setShow] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    // Check if user has already chosen a theme
    const hasChosenTheme = localStorage.getItem('trueflow-theme-chosen')

    if (!hasChosenTheme) {
      // Small delay for smooth entrance
      setTimeout(() => setShow(true), 300)
    }
  }, [])

  const handleSelectTheme = (theme: 'light' | 'dark') => {
    setSelectedTheme(theme)

    // Smooth transition before applying theme
    setTimeout(() => {
      localStorage.setItem('trueflow-theme-chosen', 'true')
      onSelectTheme(theme)
      setShow(false)
    }, 200)
  }

  if (!show) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      />

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-2xl mx-4 sm:mx-6"
        style={{
          animation: 'slideUp 0.4s ease-out'
        }}
      >
        <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-500/20 p-6 sm:p-10 lg:p-12">
          {/* Decorative gradient line */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              Welcome to TrueFlow AI
            </h2>
            <p className="text-base sm:text-lg text-white/70">
              Which experience do you prefer?
            </p>
          </div>

          {/* Theme options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Light theme option */}
            <button
              onClick={() => handleSelectTheme('light')}
              className={`
                group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300
                ${selectedTheme === 'light'
                  ? 'border-blue-500 bg-white scale-105 shadow-xl shadow-blue-500/30'
                  : 'border-gray-300 bg-white hover:border-blue-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20'
                }
              `}
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className={`
                  rounded-full p-3 sm:p-4 transition-all duration-300
                  ${selectedTheme === 'light'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-blue-400 group-hover:to-purple-500'
                  }
                `}>
                  <Sun className={`
                    h-8 w-8 sm:h-10 sm:w-10 transition-colors duration-300
                    ${selectedTheme === 'light' ? 'text-white' : 'text-gray-700 group-hover:text-white'}
                  `} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Light</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Clean & modern</p>
                </div>
              </div>

              {/* Selection indicator */}
              {selectedTheme === 'light' && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="rounded-full bg-blue-500 p-1">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </button>

            {/* Dark theme option */}
            <button
              onClick={() => handleSelectTheme('dark')}
              className={`
                group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300
                ${selectedTheme === 'dark'
                  ? 'border-purple-500 bg-gradient-to-br from-slate-900 to-slate-800 scale-105 shadow-xl shadow-purple-500/30'
                  : 'border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20'
                }
              `}
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className={`
                  rounded-full p-3 sm:p-4 transition-all duration-300
                  ${selectedTheme === 'dark'
                    ? 'bg-gradient-to-br from-purple-500 to-blue-600'
                    : 'bg-gradient-to-br from-slate-700 to-slate-600 group-hover:from-purple-400 group-hover:to-blue-500'
                  }
                `}>
                  <Moon className={`
                    h-8 w-8 sm:h-10 sm:w-10 transition-colors duration-300
                    ${selectedTheme === 'dark' ? 'text-white' : 'text-slate-300 group-hover:text-white'}
                  `} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Dark</h3>
                  <p className="text-xs sm:text-sm text-white/60">Sleek & focused</p>
                </div>
              </div>

              {/* Selection indicator */}
              {selectedTheme === 'dark' && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="rounded-full bg-purple-500 p-1">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-white/50">
              You can change this anytime from the top navigation bar
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
