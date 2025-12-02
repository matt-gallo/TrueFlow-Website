'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import ThemePreferenceModal from './ThemePreferenceModal'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('trueflow-theme') as Theme
    const hasChosenTheme = localStorage.getItem('trueflow-theme-chosen')

    if (savedTheme) {
      setTheme(savedTheme)
    }

    // Show modal only if user hasn't chosen a theme before
    if (!hasChosenTheme) {
      setShowModal(true)
    }

    setMounted(true)
  }, [])

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('trueflow-theme', theme)
      // Apply theme class to document
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const handleThemeSelection = (selectedTheme: Theme) => {
    setTheme(selectedTheme)
    setShowModal(false)
  }

  const value = {
    theme,
    toggleTheme,
    setTheme,
    isDarkMode: theme === 'dark'
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={value}>
      {showModal && <ThemePreferenceModal onSelectTheme={handleThemeSelection} />}
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values for SSG/SSR when context is not available
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
      isDarkMode: true
    }
  }
  return context
}
