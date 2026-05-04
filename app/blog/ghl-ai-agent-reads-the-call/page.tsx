'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} /></Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Your AI Agent Couldn&apos;t Hear the Sales Call Until Friday. That Was the Whole Problem.</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>May 3, 2026</span><span>•</span><span>4 min read</span><span>•</span><span>Automation</span>
            </div>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("GHL's AI Agent can now read your sales call transcripts.\n\nThe five-tool Whisper-to-Make-to-OpenAI stack most agencies are still selling just got shipped natively for free.\n\n#GoHighLevel #AIAgents #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </a>
              <button onClick={() => { const u = typeof window !== 'undefined' ? window.location.href : ''; if (navigator.share) { navigator.share({ title: "Your AI Agent Couldn't Hear the Sales Call Until Friday", url: u }) } else { navigator.clipboard.writeText(u); alert('Link copied!') } }} className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-white/80">On Friday, May 1, GoHighLevel pushed two changes to the AI Agent action that most agencies skimmed past because they shipped under one combined changelog post. The headline read &quot;AI Agent Action — Call Transcript Tool, Feedback Flow &amp; Stability Improvements.&quot; The two lines that actually matter:</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80">1. The Workflow AI Builder was rebuilt from the ground up — now a transparent, streaming, context-aware copilot that shows you every step (clarifying questions, action search, schema build, validation) instead of a black box that returned a finished workflow.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">2. The AI Agent action now has a built-in <strong className="text-white">Call Transcript tool</strong>. Reference call transcripts in the agent prompt, and the agent retrieves the contact&apos;s voice history automatically. No configuration. No external service. No Make scenario. That second one is the real story. And it should be making the agencies still pricing voice-to-CRM &quot;integration&quot; projects very uncomfortable.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What Just Changed (In English)</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">Until Friday, the AI Agent inside a GHL workflow could see chat history, form fields, custom values, and whatever you crammed into the prompt. It couldn&apos;t hear the sales call. If a lead said &quot;we&apos;re moving in 60 days&quot; on a 30-minute discovery call, the AI that wrote the follow-up an hour later had no idea that sentence existed. The dominant fix for two years was a five-tool Frankenstein: record in Twilio or LC Phone, transcribe via Whisper, pipe through Make.com, summarize with OpenAI, write back to a GHL custom field, then let the AI Agent read the field. Five vendors, four API keys, two recurring bills, and a 90-second delay where things broke quietly. That stack collapsed in one changelog entry. Reference <code>call transcripts</code> in your prompt. The agent reads them. Done.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Trend Nobody&apos;s Saying Out Loud</h2>
              <p className="text-lg leading-relaxed mb-8 text-white/80">This is the pattern playing out on every agent platform right now, and SMB agencies are pretending it isn&apos;t. April 22: OpenAI shipped Workspace Agents. April: Anthropic&apos;s Managed Agents went public beta with a hosted harness, built-in tools, and SSE streaming. May 1: GHL&apos;s AI Builder rebuild — transparent execution, streaming progress, batch operations. The platforms are absorbing the harness, the orchestration, and now the voice context. Every &quot;AI agency&quot; still selling Make.com glue between three SaaS tools to do what one platform now does natively is selling a stair-climber on an escalator.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We deleted the voice-glue stack from new proposals.</strong> Any project where the previous scope included Twilio + Whisper + Make + OpenAI for transcript-aware follow-up is now a single AI Agent action with the Call Transcript tool referenced in the prompt. We pass that savings through. Not because we&apos;re nice — because charging for plumbing the platform now ships free is how agencies get fired in 90 days.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">We&apos;re rebuilding post-call follow-ups around the Transcript Generated trigger.</strong> The same release added a workflow trigger that fires the moment a call transcript is available — across Voice AI, IVR, and LC Phone calls. We&apos;re moving every &quot;send a follow-up email after a discovery call&quot; workflow off <code>Appointment Booked + Wait 1 Hour</code> and onto <code>Transcript Generated</code>. The follow-up now references what the lead actually said. The reply rate math changes.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80"><strong className="text-white">We ship workflows live on the client Zoom.</strong> The rebuilt AI Builder&apos;s streaming progress card means they watch the AI search actions, pick triggers, place nodes, and validate. Approval cycles compress. The &quot;what did you actually do back there&quot; handoff disappears.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Takeaway</h2>
              <p className="text-lg leading-relaxed mb-8 text-white">The AI Agent in your CRM started listening to your sales calls on Friday. The platforms keep eating the orchestration layer. Every quarter, the line between &quot;what the platform does&quot; and &quot;what an agency builds on top of it&quot; moves up the stack — and the agencies pricing yesterday&apos;s gap as today&apos;s project will get caught. The right question in May 2026 isn&apos;t &quot;can we automate this.&quot; It&apos;s &quot;what&apos;s left to build once the platform finishes shipping?&quot;</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4">Get Your Sales System Built in 3 Days — Free</h2>
            <p className="text-xl mb-8 text-white/80">Take the free 2-minute AI Readiness Assessment — get a personalized report on your top automation opportunities.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/ai-readiness-assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1">Take the Free Assessment →</a>
              <a href="/sign-up" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">See If You Qualify</a>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
