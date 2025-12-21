'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/app/components/ThemeProvider'

interface EnvStatus {
  grouped: {
    ghl: Record<string, boolean>
    email: Record<string, boolean>
    app: Record<string, boolean>
    admin: Record<string, boolean>
  }
  summary: {
    total: number
    configured: number
    missing: number
  }
}

interface TestResult {
  status: number
  success: boolean
  data: any
  error?: string
  timestamp: string
}

export default function AdminDashboard() {
  const { isDarkMode } = useTheme()
  const [envStatus, setEnvStatus] = useState<EnvStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [testResults, setTestResults] = useState<Record<string, TestResult>>({})

  // Fetch environment variable status
  useEffect(() => {
    fetch('/api/admin/env-status')
      .then(res => res.json())
      .then(data => {
        setEnvStatus(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load env status:', err)
        setLoading(false)
      })
  }, [])

  const testEndpoint = async (endpoint: string, name: string, payload: any) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      setTestResults(prev => ({
        ...prev,
        [name]: {
          status: response.status,
          success: response.ok,
          data,
          timestamp: new Date().toISOString()
        }
      }))
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        [name]: {
          status: 0,
          success: false,
          data: null,
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        }
      }))
    }
  }

  const theme = {
    bg: isDarkMode ? 'bg-black' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textMuted: isDarkMode ? 'text-white/70' : 'text-gray-600',
    card: isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200',
    success: isDarkMode ? 'text-green-400' : 'text-green-600',
    error: isDarkMode ? 'text-red-400' : 'text-red-600',
    warning: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
  }

  if (loading) {
    return (
      <div className={`min-h-screen ${theme.bg} ${theme.text} flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className={theme.textMuted}>Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className={theme.textMuted}>Test API endpoints and monitor environment variables</p>
        </div>

        {/* Environment Variables Status */}
        <div className={`${theme.card} border rounded-2xl p-6 mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>

          {envStatus && (
            <>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className={`${theme.card} border rounded-xl p-4`}>
                  <div className="text-3xl font-bold">{envStatus.summary.total}</div>
                  <div className={theme.textMuted}>Total Variables</div>
                </div>
                <div className={`${theme.card} border rounded-xl p-4`}>
                  <div className={`text-3xl font-bold ${theme.success}`}>{envStatus.summary.configured}</div>
                  <div className={theme.textMuted}>Configured</div>
                </div>
                <div className={`${theme.card} border rounded-xl p-4`}>
                  <div className={`text-3xl font-bold ${theme.error}`}>{envStatus.summary.missing}</div>
                  <div className={theme.textMuted}>Missing</div>
                </div>
              </div>

              {/* Environment Variable Groups */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(envStatus.grouped).map(([category, vars]) => (
                  <div key={category} className={`${theme.card} border rounded-xl p-4`}>
                    <h3 className="font-semibold text-lg mb-3 capitalize">{category} Configuration</h3>
                    <div className="space-y-2">
                      {Object.entries(vars).map(([name, isSet]) => (
                        <div key={name} className="flex items-center justify-between">
                          <span className={`text-sm ${theme.textMuted}`}>{name}</span>
                          <span className={`text-xs px-2 py-1 rounded ${isSet ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {isSet ? '✓ Set' : '✗ Missing'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* API Endpoint Testers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Partial Lead Notification Test */}
          <EndpointTester
            title="Partial Lead Notification"
            endpoint="/api/partial-lead-notification"
            theme={theme}
            defaultPayload={{
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              phone: "+1-555-123-4567",
              timestamp: new Date().toISOString(),
              isPartialLead: true
            }}
            envVarsUsed={[
              'GHL_TRUEFLOW_SUBACCOUNT_CONTACT_CREATION',
              'GHL_LOCATION_ID',
              'RESEND_API_KEY'
            ]}
            onTest={(payload) => testEndpoint('/api/partial-lead-notification', 'partial-lead', payload)}
            result={testResults['partial-lead']}
          />

          {/* Intake API Test */}
          <EndpointTester
            title="Intake (Sub-Account Creation)"
            endpoint="/api/intake"
            theme={theme}
            defaultPayload={{
              name: "Test Business LLC",
              phone: "+1-555-987-6543",
              address: "123 Main St",
              city: "San Francisco",
              state: "CA",
              country: "US",
              postalCode: "94102",
              website: "https://testbusiness.com",
              timezone: "America/Los_Angeles"
            }}
            envVarsUsed={[
              'GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN',
              'GHL_COMPANY_ID',
              'RESEND_API_KEY'
            ]}
            onTest={(payload) => testEndpoint('/api/intake', 'intake', payload)}
            result={testResults['intake']}
          />

          {/* Webhook Test */}
          <EndpointTester
            title="GHL Webhook (Payment)"
            endpoint="/api/webhooks/ghl"
            theme={theme}
            defaultPayload={{
              type: "payment.succeeded",
              email: "test@example.com",
              signup_id: "test-signup-123",
              name: "Test User",
              amount: 29700,
              currency: "USD"
            }}
            envVarsUsed={[
              'GHL_WEBHOOK_SECRET',
              'GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN',
              'NEXT_PUBLIC_LANDING_URL'
            ]}
            onTest={(payload) => testEndpoint('/api/webhooks/ghl', 'webhook', payload)}
            result={testResults['webhook']}
          />

          {/* Signup Data Test */}
          <EndpointTester
            title="Signup Data Storage"
            endpoint="/api/signup-data"
            theme={theme}
            defaultPayload={{
              id: "test-" + Date.now(),
              fullName: "Jane Smith",
              email: "jane@example.com",
              businessName: "Smith Consulting",
              role: "Consultant"
            }}
            envVarsUsed={[]}
            onTest={(payload) => testEndpoint('/api/signup-data', 'signup-data', payload)}
            result={testResults['signup-data']}
          />
        </div>
      </div>
    </div>
  )
}

// Endpoint Tester Component
function EndpointTester({
  title,
  endpoint,
  theme,
  defaultPayload,
  envVarsUsed,
  onTest,
  result
}: {
  title: string
  endpoint: string
  theme: any
  defaultPayload: any
  envVarsUsed: string[]
  onTest: (payload: any) => void
  result?: TestResult
}) {
  const [payload, setPayload] = useState(JSON.stringify(defaultPayload, null, 2))
  const [testing, setTesting] = useState(false)

  const handleTest = async () => {
    setTesting(true)
    try {
      const parsed = JSON.parse(payload)
      await onTest(parsed)
    } catch (error) {
      alert('Invalid JSON payload')
    }
    setTesting(false)
  }

  return (
    <div className={`${theme.card} border rounded-2xl p-6`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <code className={`text-sm ${theme.textMuted}`}>{endpoint}</code>
      </div>

      {/* Environment Variables Used */}
      {envVarsUsed.length > 0 && (
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2">Required Environment Variables:</div>
          <div className="flex flex-wrap gap-2">
            {envVarsUsed.map(varName => (
              <code key={varName} className={`text-xs px-2 py-1 rounded ${theme.card} border`}>
                {varName}
              </code>
            ))}
          </div>
        </div>
      )}

      {/* Payload Editor */}
      <div className="mb-4">
        <label className="text-sm font-semibold mb-2 block">Test Payload (JSON):</label>
        <textarea
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          className={`w-full h-48 p-3 rounded-lg font-mono text-sm ${isDarkMode ? 'bg-black/50 border-white/20' : 'bg-gray-100 border-gray-300'} border`}
        />
      </div>

      {/* Test Button */}
      <button
        onClick={handleTest}
        disabled={testing}
        className={`w-full py-3 rounded-lg font-bold transition-all ${
          testing
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
        } text-white`}
      >
        {testing ? 'Testing...' : 'Test Endpoint'}
      </button>

      {/* Results */}
      {result && (
        <div className={`mt-4 p-4 rounded-lg border ${result.success ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`font-bold ${result.success ? theme.success : theme.error}`}>
              {result.success ? '✓ Success' : '✗ Failed'}
            </span>
            <span className={`text-xs ${theme.textMuted}`}>
              Status: {result.status}
            </span>
          </div>
          <pre className={`text-xs overflow-x-auto ${theme.textMuted}`}>
            {JSON.stringify(result.data || result.error, null, 2)}
          </pre>
          <div className={`text-xs ${theme.textMuted} mt-2`}>
            {new Date(result.timestamp).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  )
}

function isDarkMode() {
  return true // Placeholder, will be replaced by actual theme context
}
