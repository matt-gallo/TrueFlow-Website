'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount (defaults to light)
  useEffect(() => {
    const savedTheme = localStorage.getItem('trueflow-theme') as Theme
    // Use saved theme if it exists, otherwise default to light
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    } else {
      // Default to light mode if no saved preference
      setTheme('light')
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
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values for SSG/SSR when context is not available
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
      isDarkMode: false
    }
  }
  return context
}
