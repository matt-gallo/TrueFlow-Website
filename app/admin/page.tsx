'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/app/components/ThemeProvider'
import { RefreshCw, Trash2, Zap, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

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

interface WebhookEvent {
  id: string
  timestamp: string
  type: string
  body: any
  headers: any
  processingTime: number
}

export default function AdminDashboard() {
  const { isDarkMode } = useTheme()
  const [envStatus, setEnvStatus] = useState<EnvStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [testResults, setTestResults] = useState<Record<string, TestResult>>({})
  const [webhookEvents, setWebhookEvents] = useState<WebhookEvent[]>([])
  const [webhooksLoading, setWebhooksLoading] = useState(false)
  const [e2eFlowRunning, setE2eFlowRunning] = useState(false)
  const [e2eFlowSteps, setE2eFlowSteps] = useState<Array<{step: string, status: 'pending' | 'running' | 'success' | 'error', message?: string}>>([])

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

  const testEndpoint = async (endpoint: string, name: string, payload: any, method: string = 'POST') => {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: method !== 'GET' ? JSON.stringify(payload) : undefined
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

  const loadWebhooks = async () => {
    setWebhooksLoading(true)
    try {
      const response = await fetch('/api/webhooks/ghl?limit=20')
      const data = await response.json()
      setWebhookEvents(data.events || [])
    } catch (error) {
      console.error('Failed to load webhooks:', error)
    }
    setWebhooksLoading(false)
  }

  const clearWebhooks = async () => {
    if (!confirm('Clear all webhook event history? This cannot be undone.')) return

    try {
      await fetch('/api/webhooks/ghl', { method: 'DELETE' })
      setWebhookEvents([])
      alert('Webhook history cleared')
    } catch (error) {
      alert('Failed to clear webhooks')
    }
  }

  const runEndToEndTest = async () => {
    if (!confirm('This will create a REAL sub-account in GoHighLevel. Continue?')) return

    setE2eFlowRunning(true)
    const signupId = `e2e-test-${Date.now()}`

    const steps = [
      { step: 'Store signup data', status: 'pending' as const },
      { step: 'Trigger webhook', status: 'pending' as const },
      { step: 'Create sub-account', status: 'pending' as const },
      { step: 'Send welcome email', status: 'pending' as const },
      { step: 'Cleanup test data', status: 'pending' as const }
    ]
    setE2eFlowSteps(steps)

    try {
      // Step 1: Store signup data
      setE2eFlowSteps(prev => prev.map((s, i) => i === 0 ? {...s, status: 'running'} : s))
      const signupData = {
        signupId,
        name: `E2E Test Business ${Date.now()}`,
        email: 'test-e2e@example.com',
        phone: '+1-555-999-0000',
        address: '123 Test St',
        city: 'Test City',
        state: 'CA',
        country: 'US',
        postalCode: '90001',
        timezone: 'America/Los_Angeles',
        prospectInfo: {
          firstName: 'E2E',
          lastName: 'Test',
          email: 'test-e2e@example.com'
        }
      }

      const storeResponse = await fetch('/api/signup-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      })

      if (!storeResponse.ok) throw new Error('Failed to store signup data')
      setE2eFlowSteps(prev => prev.map((s, i) => i === 0 ? {...s, status: 'success', message: 'Stored'} : s))

      // Step 2: Trigger webhook
      setE2eFlowSteps(prev => prev.map((s, i) => i === 1 ? {...s, status: 'running'} : s))
      const webhookResponse = await fetch('/api/webhooks/ghl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'payment.succeeded',
          signup_id: signupId,
          email: 'test-e2e@example.com',
          name: 'E2E Test'
        })
      })

      if (!webhookResponse.ok) throw new Error('Webhook processing failed')
      setE2eFlowSteps(prev => prev.map((s, i) => i === 1 ? {...s, status: 'success', message: 'Webhook processed'} : s))

      // Steps 3-4 happen automatically in webhook handler
      setE2eFlowSteps(prev => prev.map((s, i) => i === 2 ? {...s, status: 'success', message: 'Check GHL'} : s))
      setE2eFlowSteps(prev => prev.map((s, i) => i === 3 ? {...s, status: 'success', message: 'Check email'} : s))

      // Step 5: Cleanup
      setE2eFlowSteps(prev => prev.map((s, i) => i === 4 ? {...s, status: 'running'} : s))
      await fetch(`/api/signup-data?signupId=${signupId}`, { method: 'DELETE' })
      setE2eFlowSteps(prev => prev.map((s, i) => i === 4 ? {...s, status: 'success', message: 'Cleaned up'} : s))

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      setE2eFlowSteps(prev => prev.map(s => s.status === 'running' ? {...s, status: 'error', message: errorMessage} : s))
    }

    setE2eFlowRunning(false)
  }

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
  const validatePhone = (phone: string) => /^\+?[0-9\-\s()]{7,}$/.test(phone)
  const validateCountryCode = (code: string) => /^[A-Za-z]{2}$/.test(code)

  const theme = {
    bg: isDarkMode ? 'bg-black' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textMuted: isDarkMode ? 'text-white/70' : 'text-gray-600',
    card: isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200',
    success: isDarkMode ? 'text-green-400' : 'text-green-600',
    error: isDarkMode ? 'text-red-400' : 'text-red-600',
    warning: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
    info: isDarkMode ? 'text-blue-400' : 'text-blue-600',
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
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className={theme.textMuted}>Test API endpoints and monitor sign-up flow</p>
        </div>

        {/* Quick Actions */}
        <div className={`${theme.card} border rounded-2xl p-6`}>
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={loadWebhooks}
              disabled={webhooksLoading}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${webhooksLoading ? 'animate-spin' : ''}`} />
              {webhooksLoading ? 'Loading...' : 'Load Recent Webhooks'}
            </button>

            <button
              onClick={clearWebhooks}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-red-500/50 text-red-400 font-semibold hover:bg-red-500/10"
            >
              <Trash2 className="h-4 w-4" />
              Clear Webhook History
            </button>

            <button
              onClick={runEndToEndTest}
              disabled={e2eFlowRunning}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:opacity-90 disabled:opacity-50"
            >
              <Zap className="h-4 w-4" />
              {e2eFlowRunning ? 'Running...' : 'Run E2E Test'}
            </button>
          </div>
        </div>

        {/* End-to-End Test Progress */}
        {e2eFlowSteps.length > 0 && (
          <div className={`${theme.card} border rounded-2xl p-6`}>
            <h2 className="text-2xl font-bold mb-4">End-to-End Test Progress</h2>
            <div className="space-y-3">
              {e2eFlowSteps.map((step, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${theme.card} border`}>
                  {step.status === 'pending' && <div className="h-5 w-5 rounded-full border-2 border-gray-400" />}
                  {step.status === 'running' && <RefreshCw className="h-5 w-5 text-blue-400 animate-spin" />}
                  {step.status === 'success' && <CheckCircle className="h-5 w-5 text-green-400" />}
                  {step.status === 'error' && <XCircle className="h-5 w-5 text-red-400" />}

                  <div className="flex-1">
                    <div className="font-semibold">{step.step}</div>
                    {step.message && <div className={`text-sm ${theme.textMuted}`}>{step.message}</div>}
                  </div>

                  <span className={`text-xs px-2 py-1 rounded ${
                    step.status === 'success' ? 'bg-green-500/20 text-green-400' :
                    step.status === 'error' ? 'bg-red-500/20 text-red-400' :
                    step.status === 'running' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {step.status}
                  </span>
                </div>
              ))}
            </div>
            <div className={`mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm`}>
              ⚠️ This test creates a REAL sub-account in GoHighLevel. Remember to delete it manually afterward.
            </div>
          </div>
        )}

        {/* Webhook Events Viewer */}
        {webhookEvents.length > 0 && (
          <div className={`${theme.card} border rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Webhook Events</h2>
              <span className={`text-sm ${theme.textMuted}`}>{webhookEvents.length} events</span>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {webhookEvents.map((event) => (
                <details key={event.id} className={`${theme.card} border rounded-lg p-4`}>
                  <summary className="cursor-pointer font-semibold flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded text-xs ${theme.card} border`}>{event.type}</span>
                      <span className={theme.textMuted}>{new Date(event.timestamp).toLocaleString()}</span>
                    </div>
                    <span className={`text-xs ${theme.textMuted}`}>{event.processingTime}ms</span>
                  </summary>
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="text-sm font-semibold mb-1">Body:</div>
                      <pre className={`text-xs p-3 rounded ${isDarkMode ? 'bg-black/50' : 'bg-gray-100'} overflow-x-auto`}>
                        {JSON.stringify(event.body, null, 2)}
                      </pre>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Form Validation Tester */}
        <div className={`${theme.card} border rounded-2xl p-6`}>
          <h2 className="text-2xl font-bold mb-4">Form Validation Tester</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ValidationTester
              label="Email"
              testValue="test@example.com"
              validator={validateEmail}
              theme={theme}
              isDarkMode={isDarkMode}
            />
            <ValidationTester
              label="Phone"
              testValue="+1-555-123-4567"
              validator={validatePhone}
              theme={theme}
              isDarkMode={isDarkMode}
            />
            <ValidationTester
              label="Country Code"
              testValue="US"
              validator={validateCountryCode}
              theme={theme}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Environment Variables Status */}
        <div className={`${theme.card} border rounded-2xl p-6`}>
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
            isDarkMode={isDarkMode}
          />

          {/* Intake API Test */}
          <EndpointTester
            title="Intake (Sub-Account Creation)"
            endpoint="/api/intake"
            theme={theme}
            defaultPayload={{
              name: "DELETE ME - Test Business",
              email: "test@example.com",
              phone: "+1-555-987-6543",
              address: "123 Main St",
              city: "San Francisco",
              state: "CA",
              country: "US",
              postalCode: "94102",
              website: "https://testbusiness.com",
              timezone: "America/Los_Angeles",
              prospectInfo: {
                firstName: "Test",
                lastName: "User",
                email: "test@example.com"
              }
            }}
            envVarsUsed={[
              'GHL_AGENCY_PRIVATE_INTEGRATION_TOKEN',
              'GHL_COMPANY_ID',
              'RESEND_API_KEY'
            ]}
            onTest={(payload) => testEndpoint('/api/intake', 'intake', payload)}
            result={testResults['intake']}
            isDarkMode={isDarkMode}
            warning="⚠️ Creates REAL sub-account in GHL"
          />

          {/* Webhook Test */}
          <EndpointTester
            title="GHL Webhook (Payment)"
            endpoint="/api/webhooks/ghl"
            theme={theme}
            defaultPayload={{
              type: "payment.succeeded",
              email: "test@example.com",
              signup_id: `test-${Date.now()}`,
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
            isDarkMode={isDarkMode}
          />

          {/* Signup Data Test */}
          <EndpointTester
            title="Signup Data Storage"
            endpoint="/api/signup-data"
            theme={theme}
            defaultPayload={{
              signupId: `test-${Date.now()}`,
              name: "Test Business",
              email: "test@example.com",
              phone: "+1-555-999-8888",
              address: "123 Test St",
              city: "Test City",
              state: "CA",
              country: "US",
              postalCode: "90001"
            }}
            envVarsUsed={[]}
            onTest={(payload) => testEndpoint('/api/signup-data', 'signup-data', payload)}
            result={testResults['signup-data']}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  )
}

// Validation Tester Component
function ValidationTester({
  label,
  testValue,
  validator,
  theme,
  isDarkMode
}: {
  label: string
  testValue: string
  validator: (value: string) => boolean
  theme: any
  isDarkMode: boolean
}) {
  const [value, setValue] = useState(testValue)
  const isValid = validator(value)

  return (
    <div className={`${theme.card} border rounded-lg p-4`}>
      <label className="text-sm font-semibold mb-2 block">{label} Validation</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full p-2 rounded border ${isDarkMode ? 'bg-black/50 border-white/20' : 'bg-gray-100 border-gray-300'} text-sm mb-2`}
      />
      <div className={`flex items-center gap-2 text-sm ${isValid ? theme.success : theme.error}`}>
        {isValid ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
        {isValid ? 'Valid' : 'Invalid'}
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
  result,
  isDarkMode,
  warning
}: {
  title: string
  endpoint: string
  theme: any
  defaultPayload: any
  envVarsUsed: string[]
  onTest: (payload: any) => void
  result?: TestResult
  isDarkMode: boolean
  warning?: string
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

      {warning && (
        <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
          {warning}
        </div>
      )}

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
