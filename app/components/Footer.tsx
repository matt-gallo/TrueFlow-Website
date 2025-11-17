import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 bg-black/80 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image 
                src="/true-flow-logo.webp" 
                alt="TrueFlow" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm">
              We build the automations that help small businesses capture more leads, save time, and grow.
            </p>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/api-docs" className="text-white/60 hover:text-white transition-colors text-sm">API</Link></li>
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Integrations</Link></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Help Center</Link></li>
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Status</Link></li>
              <li><Link href="/coming-soon" className="text-white/60 hover:text-white transition-colors text-sm">Community</Link></li>
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <Link href="/ai-readiness-assessment" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block text-center">
              Get started here
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 TrueFlow™ AI, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-white/40 hover:text-white/60 transition-colors text-sm">Terms</Link>
            <Link href="/privacy" className="text-white/40 hover:text-white/60 transition-colors text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
