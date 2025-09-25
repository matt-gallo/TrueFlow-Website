import Link from 'next/link'
import { Phone, Globe, Menu } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-rose-400/30 rounded-lg blur-md" />
                <div className="relative bg-gradient-to-r from-amber-500 to-rose-500 p-2 rounded-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-semibold text-white">TrueFlow AI</span>
            </div>
            <p className="text-white/60 text-sm">
              Your AI-powered digital assistant for business growth and customer engagement.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {/* <li><Link href="/for-business" className="text-white/60 hover:text-white text-sm">For Business</Link></li> */}
              <li><Link href="/content-engine" className="text-white/60 hover:text-white text-sm">Constant Content Engine™</Link></li>
              <li><Link href="/api-docs" className="text-white/60 hover:text-white text-sm">API Documentation</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white text-sm">FAQ</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white text-sm">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-white/60 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@trueflow.ai" className="text-white/60 hover:text-white text-sm">hello@trueflow.ai</a></li>
              <li><a href="tel:+15555551234" className="text-white/60 hover:text-white text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (555) 555-1234
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">&copy; 2025 TrueFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}