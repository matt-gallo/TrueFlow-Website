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
          <Link href="/" className="flex items-center">
            <Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Your Best Week Shouldn&apos;t Be Your Business&apos;s Worst
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>April 17, 2026</span><span>•</span><span>4 min read</span><span>•</span><span>Automation</span>
            </div>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Your best week shouldn't be your business's worst.\n\nWhen you step into your highest-leverage work, your systems should compound it — not collapse.\n\n#BusinessAutomation #TrueFlowAI")}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </a>
              <button onClick={() => { const u = typeof window !== 'undefined' ? window.location.href : ''; if (navigator.share) { navigator.share({ title: "Your Best Week Shouldn't Be Your Business's Worst", url: u }) } else { navigator.clipboard.writeText(u); alert('Link copied!') } }} className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Share on Instagram
              </button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">

              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Right now, our founder is in Chiang Mai, standing in front of a room full of people at a three-day live class. He&apos;s present. He&apos;s teaching. He&apos;s not checking his inbox, not refreshing a pipeline view, not opening Slack between sessions to see what&apos;s on fire.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">
                And while he&apos;s in that room, something quiet is happening 8,000 miles away. New leads are landing on the site and getting a reply within minutes. A weekly content batch is being drafted for the following week. A Friday revenue snapshot is compiling itself. This blog post — the one you&apos;re reading — is being written, formatted, and shipped without anyone at the company watching it happen.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">
                That&apos;s the test most businesses never pass. Not because they couldn&apos;t. Because nobody designed them to.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Hidden Cost of Peak Weeks</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/80">
                Every business owner has a version of the &quot;best week.&quot; The retreat you lead. The keynote you give. The product launch you&apos;re running. The week you finally take off to be present with your family.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">
                For most owners, those weeks come with a private tax. Leads pile up. Follow-ups go cold. Deals stall mid-pipeline. The team gets stuck waiting on decisions only you can make. By the time you&apos;re back at your desk, you&apos;ve spent a Monday and a Tuesday digging out of a hole that was created by doing your highest-value work. That&apos;s not a scheduling problem. That&apos;s a system problem.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">What Compounding Actually Looks Like</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/80">The goal isn&apos;t for your business to <em>survive</em> your best weeks. The goal is for it to multiply them.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80">A well-built operation turns peak weeks into compounding weeks. While you&apos;re teaching, the system is still:</p>
              <ul className="list-none space-y-2 mb-8">
                {[
                  "Replying to inbound leads in under five minutes with a personalized message",
                  "Booking discovery calls directly onto your calendar for the week you get back",
                  "Sending the deposit invoice the moment a prospect says yes, with reminders built in",
                  "Kicking off onboarding for anyone who paid — welcome email, form, kickoff slot, client portal — without a human touch",
                  "Re-engaging the leads who went quiet ten, fifteen, thirty days ago",
                  "Tagging and scoring new contacts by intent so your pipeline is cleaner, not messier, when you land"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed mb-8 text-white/80">
                None of that is futuristic. It&apos;s what happens when your business is built to capture value on the days you&apos;re most visible in the world — instead of losing value on the days you step away from your laptop.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The TrueFlow Litmus Test</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/80">Picture your next peak week. Ask yourself three questions:</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">Can a lead come in, get a warm reply, and book a call without you lifting a finger?</strong> If yes, your front door is automated. If no, your front door closes every time you do.</p>
              <p className="text-lg leading-relaxed mb-4 text-white/80"><strong className="text-white">Can a prospect say yes — and move all the way to &ldquo;paid, scheduled, and onboarded&rdquo; — without a manual handoff from you?</strong> If yes, your conversion path is live. If no, every &quot;yes&quot; is just a promise to build something later.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80"><strong className="text-white">Will you know what happened while you were gone without having to dig?</strong> If yes, your reporting layer is earning its keep. If no, you&apos;ll spend half of your first day back reconstructing the week.</p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Compounding Principle</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/80">You&apos;re not supposed to be the engine forever. You&apos;re supposed to be the architect.</p>
              <p className="text-lg leading-relaxed mb-8 text-white/80">
                The moment the business can run a great week without you as the bottleneck is the moment you get to have more great weeks. Teach more. Launch more. Travel more. Take on the big work, the creative work, the work that actually grows the thing — because the operational floor is holding.
              </p>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-12 mb-6">The Takeaway</h2>
              <p className="text-lg leading-relaxed mb-8 text-white">
                If stepping into your best work causes your business to step backward, you&apos;ve been running a schedule, not a system. Your peak weeks should compound. That&apos;s what the system is for.
              </p>

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
