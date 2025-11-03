'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

export default function ReadinessAssessment() {
  useEffect(() => {
    // Tally embed script
    const script = document.createElement('script')
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/true-flow-logo.webp" 
              alt="TrueFlow" 
              width={280} 
              height={70} 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
              priority
              style={{ 
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>
          <Link 
            href="/" 
            className="px-4 py-2 text-white/80 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Content Readiness Assessment
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover if your business is ready for AI-powered content that actually converts. 
            This 2-minute assessment will help us understand your current content challenges and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span>✓ Takes less than 2 minutes</span>
            <span>•</span>
            <span>✓ Personalized recommendations</span>
            <span>•</span>
            <span>✓ No spam, ever</span>
          </div>
        </motion.div>

        {/* Assessment Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto px-6 pb-20"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            {/* Tally Embed */}
            <div className="w-full">
              <iframe 
                data-tally-src="https://tally.so/embed/w4ODAY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="460" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Readiness Assessment"
                className="w-full min-h-[460px] rounded-lg"
              />
            </div>
          </div>

          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  1
                </div>
                <h3 className="font-semibold">Instant Results</h3>
                <p className="text-white/70 text-sm">
                  Get your personalized readiness score and recommendations immediately after completing the assessment.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h3 className="font-semibold">Custom Strategy</h3>
                <p className="text-white/70 text-sm">
                  Receive a tailored content strategy based on your specific business needs and current challenges.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <h3 className="font-semibold">Optional Follow-up</h3>
                <p className="text-white/70 text-sm">
                  If you&apos;re a good fit, we&apos;ll reach out to discuss how TrueFlow can accelerate your content goals.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}