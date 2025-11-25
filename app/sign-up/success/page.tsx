'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'

export default function SignUpSuccess() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const signupId = searchParams.get('signupId')

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
          <Loader2 className="h-16 w-16 text-cyan-500 mx-auto mb-6 animate-spin" />
          <h1 className="text-3xl font-bold text-white mb-4">
            Setting up your account...
          </h1>
          <p className="text-gray-400 mb-6">
            Please wait while we create your TrueFlow workspace. This usually takes 10-30 seconds.
          </p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              Processing payment confirmation
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              Creating your sub-account
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              Setting up user access
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to TrueFlow!
          </h1>
          <p className="text-gray-400 mb-6">
            Your account has been created successfully. Check your email for login instructions.
          </p>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-cyan-400 mb-2">
              Redirecting to login in {countdown} seconds...
            </p>
            <button
              onClick={() => window.location.href = 'https://login.trueflow.ai'}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              Go to Login Now
            </button>
          </div>
          <p className="text-xs text-gray-500">
            You'll receive a password setup email shortly. Check your inbox and spam folder.
          </p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-400 mb-6">
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
              className="block w-full border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors font-semibold"
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
