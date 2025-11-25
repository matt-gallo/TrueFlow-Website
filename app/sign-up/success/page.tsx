'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { useTheme } from '@/app/components/ThemeProvider'

function SignUpSuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const signupId = searchParams.get('signupId')
  const { isDarkMode } = useTheme()

  const [status, setStatus] = useState<'checking' | 'ready' | 'error'>('checking')
  const [accountData, setAccountData] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    if (!signupId) {
      setStatus('error')
      setErrorMessage('Missing signup ID. Please contact support.')
      return
    }

    let attempts = 0
    const maxAttempts = 60 // Poll for up to 5 minutes (60 * 5 seconds)

    const checkAccountStatus = async () => {
      try {
        attempts++
        console.log(`[SignUpSuccess] Checking account status (attempt ${attempts}/${maxAttempts})`)

        // Check if signup data still exists (means account not created yet)
        const signupDataResponse = await fetch(`/api/signup-data?signupId=${signupId}`)

        if (signupDataResponse.status === 404 || signupDataResponse.status === 410) {
          // Data was deleted, meaning account was created successfully
          setStatus('ready')
          setAccountData({ message: 'Account created successfully!' })

          // Start countdown to redirect
          const countdownInterval = setInterval(() => {
            setCountdown(prev => {
              if (prev <= 1) {
                clearInterval(countdownInterval)
                // Redirect to password reset page
                window.location.href = 'https://login.trueflow.ai'
                return 0
              }
              return prev - 1
            })
          }, 1000)

          return true // Stop polling
        }

        // Account not created yet, continue polling
        if (attempts >= maxAttempts) {
          setStatus('error')
          setErrorMessage('Account creation is taking longer than expected. Please check your email or contact support.')
          return true // Stop polling
        }

        return false // Continue polling
      } catch (error) {
        console.error('[SignUpSuccess] Error checking account status:', error)
        if (attempts >= maxAttempts) {
          setStatus('error')
          setErrorMessage('Unable to verify account creation. Please check your email or contact support.')
          return true
        }
        return false
      }
    }

    // Initial check
    checkAccountStatus().then(shouldStop => {
      if (shouldStop) return

      // Poll every 5 seconds
      const pollInterval = setInterval(async () => {
        const shouldStop = await checkAccountStatus()
        if (shouldStop) {
          clearInterval(pollInterval)
        }
      }, 5000)

      return () => clearInterval(pollInterval)
    })
  }, [signupId])

  if (status === 'checking') {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <div className={`max-w-md w-full backdrop-blur-xl border rounded-2xl p-8 text-center transition-colors ${
          isDarkMode
            ? 'bg-black/60 border-white/10'
            : 'bg-white/80 border-gray-200 shadow-xl'
        }`}>
          <Loader2 className="h-16 w-16 text-cyan-500 mx-auto mb-6 animate-spin" />
          <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Setting up your account...
          </h1>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Please wait while we create your TrueFlow workspace. This usually takes 10-30 seconds.
          </p>
          <div className="space-y-3 text-left">
            <div className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              Processing payment confirmation
            </div>
            <div className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              Creating your sub-account
            </div>
            <div className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              Setting up user access
            </div>
            <div className={`flex items-center gap-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              Sending welcome email
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'ready') {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <div className={`max-w-md w-full backdrop-blur-xl border rounded-2xl p-8 text-center transition-colors ${
          isDarkMode
            ? 'bg-black/60 border-white/10'
            : 'bg-white/80 border-gray-200 shadow-xl'
        }`}>
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Welcome to TrueFlow!
          </h1>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your account has been created successfully. Check your email for login instructions.
          </p>
          <div className={`border rounded-lg p-4 mb-6 ${
            isDarkMode
              ? 'bg-cyan-500/10 border-cyan-500/20'
              : 'bg-cyan-50 border-cyan-200'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
              Redirecting to login in {countdown} seconds...
            </p>
            <button
              onClick={() => window.location.href = 'https://login.trueflow.ai'}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              Go to Login Now
            </button>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            You'll receive a password setup email shortly. Check your inbox and spam folder.
          </p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <div className={`max-w-md w-full backdrop-blur-xl border rounded-2xl p-8 text-center transition-colors ${
          isDarkMode
            ? 'bg-black/60 border-white/10'
            : 'bg-white/80 border-gray-200 shadow-xl'
        }`}>
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Something went wrong
          </h1>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {errorMessage}
          </p>
          <div className="space-y-3">
            <button
              onClick={() => router.push('/')}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              Return to Home
            </button>
            <a
              href="mailto:support@trueflow.ai"
              className={`block w-full border px-6 py-3 rounded-full transition-colors font-semibold ${
                isDarkMode
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default function SignUpSuccess() {
  const { isDarkMode } = useTheme()

  return (
    <Suspense fallback={
      <div className={`min-h-screen flex items-center justify-center px-4 transition-colors ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <div className={`max-w-md w-full backdrop-blur-xl border rounded-2xl p-8 text-center transition-colors ${
          isDarkMode
            ? 'bg-black/60 border-white/10'
            : 'bg-white/80 border-gray-200 shadow-xl'
        }`}>
          <Loader2 className="h-16 w-16 text-cyan-500 mx-auto mb-6 animate-spin" />
          <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Loading...
          </h1>
        </div>
      </div>
    }>
      <SignUpSuccessContent />
    </Suspense>
  )
}
