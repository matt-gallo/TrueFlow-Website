'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'
import { 
  ChevronDown, 
  ChevronRight, 
  Copy, 
  Check,
  Search,
  Code,
  Book,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  Calendar,
  Target,
  BarChart,
  Plug,
  Webhook,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react'

// HTTP Method Badge Component
function MethodBadge({ method }: { method: string }) {
  const colors = {
    GET: 'bg-green-500/10 text-green-500 border-green-500/20',
    POST: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    PUT: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    DELETE: 'bg-red-500/10 text-red-500 border-red-500/20',
    PATCH: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  }

  return (
    <span className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded-md border text-[10px] md:text-xs font-bold ${colors[method as keyof typeof colors] || 'bg-gray-500/10 text-gray-500'}`}>
      {method}
    </span>
  )
}

// Status Code Explanation Component
function StatusCodeGuide() {
  const [isOpen, setIsOpen] = useState(false)
  
  const statusCategories = [
    {
      range: '2xx Success',
      color: 'text-green-500',
      icon: <CheckCircle className="w-5 h-5" />,
      codes: [
        { code: '200', name: 'OK', description: 'Request succeeded. Response body contains the requested data.' },
        { code: '201', name: 'Created', description: 'Resource was successfully created. Usually returned from POST requests.' },
        { code: '204', name: 'No Content', description: 'Request succeeded but no content to return. Common for DELETE requests.' }
      ]
    },
    {
      range: '4xx Client Errors',
      color: 'text-yellow-500',
      icon: <AlertCircle className="w-5 h-5" />,
      codes: [
        { code: '400', name: 'Bad Request', description: 'Invalid request parameters or malformed request body.' },
        { code: '401', name: 'Unauthorized', description: 'Missing or invalid API token. Check your authentication.' },
        { code: '403', name: 'Forbidden', description: 'Valid token but insufficient permissions for this resource.' },
        { code: '404', name: 'Not Found', description: 'The requested resource doesn\'t exist.' },
        { code: '409', name: 'Conflict', description: 'Request conflicts with current state (e.g., duplicate resource).' },
        { code: '429', name: 'Too Many Requests', description: 'Rate limit exceeded. Wait before making more requests.' }
      ]
    },
    {
      range: '5xx Server Errors',
      color: 'text-red-500',
      icon: <XCircle className="w-5 h-5" />,
      codes: [
        { code: '500', name: 'Internal Server Error', description: 'Unexpected server error. Try again later.' },
        { code: '503', name: 'Service Unavailable', description: 'Server temporarily unavailable (maintenance or overload).' }
      ]
    }
  ]
  
  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-purple-400" />
          <span className="text-white font-medium">Understanding HTTP Status Codes</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="border-t border-white/10 p-4 md:p-6 space-y-4 md:space-y-6">
          {statusCategories.map((category) => (
            <div key={category.range}>
              <div className={`flex items-center gap-2 mb-2 md:mb-3 ${category.color}`}>
                {category.icon}
                <h4 className="font-semibold text-sm md:text-base">{category.range}</h4>
              </div>
              <div className="space-y-2">
                {category.codes.map((status) => (
                  <div key={status.code} className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-2 md:p-3 rounded-lg bg-white/5">
                    <span className="text-white font-mono font-bold text-sm md:text-base min-w-[45px] sm:min-w-[50px]">{status.code}</span>
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm md:text-base">{status.name}</span>
                      <p className="text-white/60 text-xs md:text-sm mt-0.5 md:mt-1">{status.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Code Example Component
function CodeExample({ code, language = 'javascript' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre className="bg-black/50 rounded-lg p-2 md:p-4 overflow-x-auto max-w-full">
        <code className="text-xs md:text-sm text-white/80 font-mono whitespace-pre-wrap break-all">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-1 right-1 md:top-2 md:right-2 p-1.5 md:p-2 rounded-lg bg-white/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400" /> : <Copy className="w-3 h-3 md:w-4 md:h-4 text-white/60" />}
      </button>
    </div>
  )
}

// Endpoint Card Component
function EndpointCard({ endpoint, category }: { endpoint: any; category: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-lg border border-white/10 overflow-hidden hover:border-purple-500/30 transition-colors">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-3 md:p-4 flex items-start md:items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left flex-1">
          <MethodBadge method={endpoint.method} />
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-medium text-sm md:text-base truncate">{endpoint.name}</h4>
            <code className="text-purple-400 text-xs md:text-sm break-all">{endpoint.endpoint}</code>
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 text-white/60 transition-transform flex-shrink-0 ml-2 ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="border-t border-white/10 p-3 md:p-4 space-y-3 md:space-y-4">
          <p className="text-white/80 text-xs md:text-sm">{endpoint.description}</p>
          
          {endpoint.authentication && (
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>Requires authentication</span>
            </div>
          )}
          
          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div>
              <h5 className="text-white font-medium mb-2">Parameters</h5>
              <div className="space-y-2">
                {endpoint.parameters.map((param: any, idx: number) => (
                  <div key={idx} className="bg-black/30 rounded-lg p-2 md:p-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div className="flex flex-wrap items-center gap-1">
                        <code className="text-purple-400 text-xs md:text-sm">{param.name}</code>
                        <span className="text-white/60 text-xs md:text-sm">{param.type}</span>
                        {param.required && <span className="text-red-400 text-[10px] md:text-xs">Required</span>}
                      </div>
                      {param.default && (
                        <span className="text-white/40 text-xs md:text-sm">Default: {param.default}</span>
                      )}
                    </div>
                    <p className="text-white/60 text-xs md:text-sm mt-0.5 md:mt-1">{param.description}</p>
                    {param.in && (
                      <p className="text-white/40 text-[10px] md:text-xs mt-0.5 md:mt-1">Location: {param.in}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {endpoint.response && (
            <div>
              <h5 className="text-white font-medium mb-2">Response Example</h5>
              <CodeExample code={JSON.stringify(endpoint.response, null, 2)} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function ApiDocsPage() {
  const { isDarkMode } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [copiedToken, setCopiedToken] = useState(false)

  // Add custom CSS for hiding scrollbar on mobile
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `
    if (!document.querySelector('[data-scrollbar-style]')) {
      style.setAttribute('data-scrollbar-style', 'true')
      document.head.appendChild(style)
    }
  }, [])
  
  // API Data (from the JSON provided)
  const apiData = {
    authentication: {
      category: "Authentication",
      icon: <Shield className="w-5 h-5" />,
      endpoints: [
        {
          name: "Get Auth Status",
          endpoint: "/api/auth/status",
          method: "GET",
          description: "Check current authentication status and retrieve user information",
          authentication: true,
          parameters: [],
          response: {
            success: true,
            user: {
              id: "uuid",
              email: "user@example.com",
              name: "John Doe"
            }
          }
        },
        {
          name: "Create API Token",
          endpoint: "/api/auth/token",
          method: "POST",
          description: "Generate a new API token for integrations",
          authentication: true,
          parameters: [
            {
              name: "name",
              type: "string",
              required: true,
              description: "Name for the token (e.g., 'Zapier Integration')"
            },
            {
              name: "expiresIn",
              type: "string",
              required: false,
              description: "Token expiration (e.g., '30d', '1y')",
              default: "90d"
            }
          ],
          response: {
            success: true,
            token: "tk_live_abc123xyz...",
            expiresAt: "2025-05-01T00:00:00Z"
          }
        }
      ]
    },
    widgets: {
      category: "AI Chat Widgets",
      icon: <MessageSquare className="w-5 h-5" />,
      endpoints: [
        {
          name: "List Widgets",
          endpoint: "/api/widgets",
          method: "GET",
          description: "Get all chat widgets for authenticated user",
          authentication: true,
          parameters: [],
          response: {
            success: true,
            data: [{
              id: "uuid",
              widget_key: "wgt_abc123",
              settings: {
                title: "AI Assistant",
                primaryColor: "#8B5CF6"
              }
            }]
          }
        },
        {
          name: "Create Widget",
          endpoint: "/api/widgets",
          method: "POST",
          description: "Create a new chat widget for your website",
          authentication: true,
          parameters: [
            {
              name: "name",
              type: "string",
              required: true,
              description: "Display name for the widget"
            },
            {
              name: "settings",
              type: "object",
              required: false,
              description: "Widget configuration settings"
            }
          ],
          response: {
            success: true,
            data: {
              id: "uuid",
              widget_key: "wgt_abc123",
              embed_code: "<script>...</script>"
            }
          }
        },
        {
          name: "Update Widget",
          endpoint: "/api/widgets",
          method: "PUT",
          description: "Update widget settings",
          authentication: true,
          parameters: [
            {
              name: "id",
              type: "string",
              required: true,
              description: "Widget ID to update"
            },
            {
              name: "settings",
              type: "object",
              required: false,
              description: "Updated settings object"
            }
          ],
          response: {
            success: true,
            data: {
              id: "uuid",
              updated: true
            }
          }
        },
        {
          name: "Delete Widget",
          endpoint: "/api/widgets",
          method: "DELETE",
          description: "Delete a widget",
          authentication: true,
          parameters: [
            {
              name: "id",
              type: "string",
              required: true,
              description: "Widget ID to delete",
              in: "query"
            }
          ],
          response: {
            success: true,
            message: "Widget deleted successfully"
          }
        }
      ]
    },
    conversations: {
      category: "Conversations & CRM",
      icon: <MessageSquare className="w-5 h-5" />,
      endpoints: [
        {
          name: "List Conversations",
          endpoint: "/api/conversations",
          method: "GET",
          description: "Get all conversations with filtering options",
          authentication: true,
          parameters: [
            {
              name: "source",
              type: "string",
              required: false,
              description: "Filter by source (SMS, EMAIL, INSTAGRAM, FACEBOOK, WHATSAPP, WEB)",
              in: "query"
            },
            {
              name: "leadType",
              type: "string",
              required: false,
              description: "Filter by lead type (HOT, WARM, COLD)",
              in: "query"
            },
            {
              name: "page",
              type: "integer",
              required: false,
              default: 1,
              description: "Page number for pagination",
              in: "query"
            }
          ],
          response: {
            data: [{
              id: "uuid",
              name: "John Doe",
              lastMessage: "Thanks for your help!",
              source: "web"
            }],
            pagination: {
              page: 1,
              total: 100
            }
          }
        },
        {
          name: "Create Conversation",
          endpoint: "/api/conversations",
          method: "POST",
          description: "Create a new conversation",
          authentication: true,
          parameters: [
            {
              name: "name",
              type: "string",
              required: true,
              description: "Contact name"
            },
            {
              name: "source",
              type: "string",
              required: true,
              description: "Conversation source"
            }
          ],
          response: {
            id: "uuid",
            name: "John Doe",
            createdAt: "2025-01-01T12:00:00Z"
          }
        }
      ]
    },
    calendar: {
      category: "Calendar & Events",
      icon: <Calendar className="w-5 h-5" />,
      endpoints: [
        {
          name: "List Events",
          endpoint: "/api/calendar/events",
          method: "GET",
          description: "Get calendar events with date filtering",
          authentication: true,
          parameters: [
            {
              name: "start_date",
              type: "string",
              required: false,
              description: "Start date (ISO format)",
              in: "query"
            },
            {
              name: "end_date",
              type: "string",
              required: false,
              description: "End date (ISO format)",
              in: "query"
            }
          ],
          response: {
            success: true,
            data: [{
              id: "uuid",
              title: "Client Meeting",
              start_datetime: "2025-01-15T10:00:00Z"
            }]
          }
        },
        {
          name: "Create Event",
          endpoint: "/api/calendar/events",
          method: "POST",
          description: "Create a new calendar event",
          authentication: true,
          parameters: [
            {
              name: "title",
              type: "string",
              required: true,
              description: "Event title"
            },
            {
              name: "start_datetime",
              type: "string",
              required: true,
              description: "Start date/time (ISO format)"
            },
            {
              name: "end_datetime",
              type: "string",
              required: true,
              description: "End date/time (ISO format)"
            }
          ],
          response: {
            success: true,
            data: {
              id: "uuid",
              title: "Client Meeting",
              created: true
            }
          }
        }
      ]
    },
    tasks: {
      category: "Task Management",
      icon: <Target className="w-5 h-5" />,
      endpoints: [
        {
          name: "List Tasks",
          endpoint: "/api/tasks",
          method: "GET",
          description: "Get all tasks with filtering options",
          authentication: true,
          parameters: [
            {
              name: "status",
              type: "string",
              required: false,
              description: "Filter by status (pending, in_progress, completed)",
              in: "query"
            }
          ],
          response: {
            success: true,
            data: [{
              id: "uuid",
              title: "Complete API documentation",
              status: "in_progress"
            }]
          }
        },
        {
          name: "Create Task",
          endpoint: "/api/tasks",
          method: "POST",
          description: "Create a new task",
          authentication: true,
          parameters: [
            {
              name: "title",
              type: "string",
              required: true,
              description: "Task title"
            },
            {
              name: "priority",
              type: "string",
              required: false,
              default: "medium",
              description: "Priority level (low, medium, high, urgent)"
            }
          ],
          response: {
            success: true,
            data: {
              id: "uuid",
              title: "New task",
              created: true
            }
          }
        }
      ]
    },
    content: {
      category: "Content Generation",
      icon: <Zap className="w-5 h-5" />,
      endpoints: [
        {
          name: "Generate Content",
          endpoint: "/api/content/generate",
          method: "POST",
          description: "Generate AI content using knowledge base",
          authentication: true,
          parameters: [
            {
              name: "type",
              type: "string",
              required: true,
              description: "Content type (blog, social_media, email, ad_copy)"
            },
            {
              name: "topic",
              type: "string",
              required: true,
              description: "Topic or prompt for content"
            }
          ],
          response: {
            success: true,
            data: {
              id: "uuid",
              content: "Generated content text...",
              metadata: {
                word_count: 500
              }
            }
          }
        }
      ]
    },
    analytics: {
      category: "Analytics & Metrics",
      icon: <BarChart className="w-5 h-5" />,
      endpoints: [
        {
          name: "Get Performance Metrics",
          endpoint: "/api/analytics/performance",
          method: "GET",
          description: "Get performance metrics and KPIs",
          authentication: true,
          parameters: [
            {
              name: "period",
              type: "string",
              required: false,
              default: "30d",
              description: "Time period (7d, 30d, 90d, 1y)",
              in: "query"
            }
          ],
          response: {
            success: true,
            data: {
              conversations: {
                total: 150,
                growth: "+15%"
              }
            }
          }
        }
      ]
    },
    webhooks: {
      category: "Webhooks",
      icon: <Webhook className="w-5 h-5" />,
      endpoints: [
        {
          name: "Create Webhook",
          endpoint: "/api/webhooks",
          method: "POST",
          description: "Create a new webhook for real-time events",
          authentication: true,
          parameters: [
            {
              name: "url",
              type: "string",
              required: true,
              description: "Webhook endpoint URL"
            },
            {
              name: "events",
              type: "array",
              required: true,
              description: "Events to subscribe to"
            }
          ],
          response: {
            success: true,
            data: {
              id: "uuid",
              secret: "whsec_abc123..."
            }
          }
        }
      ]
    }
  }
  
  const categories = [
    { id: 'all', name: 'All Endpoints', icon: <Globe className="w-4 h-4" /> },
    ...Object.entries(apiData).map(([key, value]) => ({
      id: key,
      name: value.category,
      icon: value.icon
    }))
  ]
  
  // Filter endpoints based on search and category
  const filteredEndpoints = Object.entries(apiData).filter(([key, value]) => {
    if (selectedCategory !== 'all' && key !== selectedCategory) return false
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return value.endpoints.some((endpoint: any) => 
        endpoint.name.toLowerCase().includes(query) ||
        endpoint.endpoint.toLowerCase().includes(query) ||
        endpoint.description.toLowerCase().includes(query)
      )
    }
    
    return true
  })
  
  const handleCopyToken = () => {
    navigator.clipboard.writeText('Bearer your_api_token_here')
    setCopiedToken(true)
    setTimeout(() => setCopiedToken(false), 2000)
  }
  
  return (
    <div className={`min-h-screen ${
      isDarkMode
        ? 'bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20'
        : 'bg-white'
    }`}>
      <Navigation />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-24">
        {/* Development Notice Banner */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-y border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <p className="text-yellow-100 text-sm md:text-base">
              <span className="font-semibold">Note:</span> The TrueFlow API is currently in development and not yet available for external use or private integrations. 
              It is currently operational for backend services only. Full public API access is coming soon!
            </p>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
            <Code className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
            <span className="text-purple-400 text-xs md:text-sm">API Version 1.0.0</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            TrueFlow API Documentation
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-white/60 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Build powerful integrations with our comprehensive REST API. Access CRM, AI chat, content generation, and automation features.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4 px-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base hover:shadow-xl transition-shadow">
              Get API Key
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-white/20 transition-colors">
              View SDKs
            </button>
          </div>
        </div>
      </section>
      
      {/* Quick Start */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
              Quick Start
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="text-white font-medium mb-3">1. Authentication</h3>
                <p className="text-white/60 text-sm mb-3">
                  All API requests require a Bearer token in the Authorization header:
                </p>
                <div className="bg-black/50 rounded-lg p-2 md:p-4 flex items-start md:items-center justify-between gap-2">
                  <code className="text-purple-400 text-xs md:text-sm break-all">Authorization: Bearer your_api_token_here</code>
                  <button
                    onClick={handleCopyToken}
                    className="p-1.5 md:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0"
                  >
                    {copiedToken ? <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400" /> : <Copy className="w-3 h-3 md:w-4 md:h-4 text-white/60" />}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">2. Base URL</h3>
                <p className="text-white/60 text-sm mb-3">
                  All API endpoints are relative to:
                </p>
                <div className="bg-black/50 rounded-lg p-2 md:p-4">
                  <code className="text-purple-400 text-xs md:text-sm break-all">https://app.trueflow.ai/api</code>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-6">
              <h3 className="text-white font-medium mb-2 md:mb-3 text-sm md:text-base">3. Rate Limiting</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                <div className="bg-black/30 rounded-lg p-2 md:p-3">
                  <p className="text-white/60 text-[10px] md:text-xs mb-0.5 md:mb-1">Default Limit</p>
                  <p className="text-white font-medium text-sm md:text-base">1000 req/hour</p>
                </div>
                <div className="bg-black/30 rounded-lg p-2 md:p-3">
                  <p className="text-white/60 text-[10px] md:text-xs mb-0.5 md:mb-1">Burst Limit</p>
                  <p className="text-white font-medium text-sm md:text-base">50 req/minute</p>
                </div>
                <div className="bg-black/30 rounded-lg p-2 md:p-3">
                  <p className="text-white/60 text-[10px] md:text-xs mb-0.5 md:mb-1">Reset Header</p>
                  <p className="text-white font-medium text-xs md:text-base break-all">X-RateLimit-Reset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HTTP Status Codes Guide */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <StatusCodeGuide />
        </div>
      </section>
      
      {/* API Endpoints */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">API Endpoints</h2>

            {/* Search and Filter */}
            <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="relative">
                <Search className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md rounded-lg px-8 md:px-10 py-2 md:py-3 text-sm md:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg whitespace-nowrap transition-colors text-xs md:text-sm ${
                      selectedCategory === cat.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    <span className="w-3 h-3 md:w-4 md:h-4">{cat.icon}</span>
                    <span className="hidden sm:inline">{cat.name}</span>
                    <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Endpoints List */}
          <div className="space-y-6 md:space-y-8">
            {filteredEndpoints.map(([key, categoryData]) => (
              <div key={key}>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="w-4 h-4 md:w-5 md:h-5">{categoryData.icon}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{categoryData.category}</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {categoryData.endpoints.map((endpoint: any, idx: number) => (
                    <EndpointCard key={idx} endpoint={endpoint} category={categoryData.category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {filteredEndpoints.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No endpoints found matching your search.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* SDKs Section */}
      <section className="py-8 md:py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">SDKs & Libraries</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="bg-yellow-500/10 p-1.5 md:p-2 rounded-lg">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base">JavaScript/TypeScript</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">Official SDK for Node.js and browser environments</p>
              <CodeExample code="npm install @trueflow/sdk" language="bash" />
              <div className="mt-4">
                <CodeExample code={`import { TrueFlow } from '@trueflow/sdk'

const client = new TrueFlow('your_api_token')
const widgets = await client.widgets.list()`} />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="bg-blue-500/10 p-1.5 md:p-2 rounded-lg">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base">Python</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">Python SDK for server-side integrations</p>
              <CodeExample code="pip install trueflow" language="bash" />
              <div className="mt-4">
                <CodeExample code={`from trueflow import TrueFlow

client = TrueFlow('your_api_token')
widgets = client.widgets.list()`} />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="bg-purple-500/10 p-1.5 md:p-2 rounded-lg">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base">REST API</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">Direct HTTP requests to our endpoints</p>
              <CodeExample code={`curl -H 'Authorization: Bearer your_token' \\
  https://app.trueflow.ai/api/widgets`} language="bash" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Webhook Events */}
      <section className="py-8 md:py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Webhook Events</h2>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 p-4 md:p-6">
            <p className="text-white/60 text-sm md:text-base mb-4 md:mb-6">Subscribe to these events for real-time updates:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {[
                'conversation.created',
                'conversation.updated',
                'message.sent',
                'message.received',
                'task.created',
                'task.completed',
                'event.created',
                'widget.interaction',
                'content.generated'
              ].map((event) => (
                <div key={event} className="bg-black/30 rounded-lg px-3 py-1.5 md:px-4 md:py-2">
                  <code className="text-purple-400 text-xs md:text-sm">{event}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </div>
  )
}
