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
          <Link href="/">
            <Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Automation</span>
              <span className="text-white/40 text-sm">May 28, 2026</span>
              <span className="text-white/40 text-sm">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL Just Shipped &ldquo;Ask AI Memory&rdquo; &mdash; Your Brand Voice Is Now A File Upload. The AI Persona Setup Retainer Is Done.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              GoHighLevel quietly pushed Ask AI Memory V1 into Labs this month. A non-technical owner can now upload a memory file describing their brand voice, offers, and niche &mdash; and the platform absorbs it across every prompt. The &ldquo;AI persona setup&rdquo; phase agencies have been billing $2K&ndash;$5K for is officially a text box.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL Just Shipped 'Ask AI Memory' — Your Brand Voice Is Now A File Upload. The AI Persona Setup Retainer Is Done."; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                GoHighLevel pushed Ask AI Memory V1 into Labs this month. The feature lives at the bottom-right of the Ask AI panel &mdash; click your name, open the memory panel, paste in a memory file, save. From that point forward, every Ask AI query inside that GHL account is grounded in your brand voice, your offers, your niche, and how you talk to your customers. HighLevel&apos;s own setup recommendation is to ask Claude or ChatGPT to write the memory file, then paste it in.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                That single feature deletes a service line.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                For 18 months, &ldquo;AI persona setup&rdquo; was a billable phase on most agency proposals: a discovery workshop, a 4&ndash;6 page brand voice document, a set of tuned system prompts living inside Conversation AI, the AI Employee, and workflow agent steps. Pricing was usually $2,000&ndash;$5,000 upfront plus a $300&ndash;$800 monthly &ldquo;prompt optimization&rdquo; retainer.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Ask AI Memory collapses that into a paste. Once the memory file is loaded, the platform itself carries the brand context &mdash; not the prompt on each agent. Voice AI, Conversation AI, Ask AI, workflow-embedded agent steps all draw from one persistent context. The prompt-engineering layer agencies kept invisible inside their builds is now a 30-second admin task the client can do themselves. And HighLevel told everyone the cheat code: write the memory file with Claude or ChatGPT in five minutes. The vendor is openly skipping the agency.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Stack this against Google I/O &apos;26 on May 19. Gemini Spark and the Gemini Enterprise Agent Platform now ship with persistent memory in the runtime &mdash; Google charges $0.25 per 1,000 memory events for session storage, and that&apos;s it. Salesforce&apos;s Summer &apos;26 release, announced May 11, makes shared context across multi-agent orchestration a platform feature, not a configuration project. Three months ago, &ldquo;the AI remembers your customer&rdquo; was something an agency built. This month, every major platform ships it as a checkbox.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Meanwhile, NFIB&apos;s April reading landed at 95.9 &mdash; below the 52-year average for the second consecutive month &mdash; with 46% of small businesses unable to find qualified hires. The owner staring at that data is not approving a $4,000 &ldquo;AI brand voice setup&rdquo; line item when the vendor&apos;s own help docs say to write the file in ChatGPT. They will skip the proposal.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">1. We stopped charging for &ldquo;AI persona configuration&rdquo; as a phase.</strong> It is not a phase. It is a memory file. We deliver the file as part of the 3-day build and show the client where to paste it. The skill is writing a brand voice doc tight enough to control an agent &mdash; not the paste.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">2. The artifact is the deliverable, not the maintenance.</strong> A well-built memory file &mdash; offer catalog, audience descriptors, tone rules, do-not-say list, objection handling &mdash; is a real asset. We build it once with the client in a 90-minute session, validate it across Ask AI, Conversation AI, and Voice AI, and hand it over. Files do not require a retainer.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">3. The memory file lives in the client&apos;s account.</strong> Past agency norm: bury prompts inside system messages, charge to &ldquo;manage&rdquo; them. Our norm: the client owns and edits the file. We are not the chokepoint on their own voice.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">4. Pricing follows the artifact, not the access.</strong> Built in 3 days, free until you see traction. The memory file is part of the build, not a separate line item.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>If GHL&apos;s Ask AI Memory now stores my brand voice as a single uploaded file, why is my current provider charging a monthly fee to &ldquo;manage&rdquo; prompts inside agent steps?</em></span></li>
                <li className="flex items-start gap-3 text-white/80"><span className="text-cyan-400 mt-1">•</span><span><em>Can my agency show me the memory file I own, sitting in my Ask AI panel &mdash; or is the brand voice trapped inside system prompts they will not hand over?</em></span></li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                If they cannot show you the file, what you are paying for is access to your own voice.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Final Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Every release this month has the same shape. A capability that used to be a build step turns into a configuration. A configuration that used to be billable turns into a paste. Last week the orchestration layer collapsed. This week the persona layer collapsed. The only durable thing left is the artifact that goes in the file &mdash; a brand voice doc tight enough that a model can stay on it without supervision. Writing that is a craft. Maintaining where it gets pasted is not. Charge for the craft. Stop charging for the paste.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: HighLevel Support Portal &mdash; Ask AI Memory V1 documentation and Labs release notes, May 2026; Google Cloud Next &apos;26 Gemini Enterprise Agent Platform launch coverage; Salesforce Summer &apos;26 product release announcement (May 11, 2026); NFIB Small Business Optimism Index, April 2026 report.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want the Brand Voice File, Not the Retainer?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We build the memory file with you in one session and you own it. Discovery is free. You don&apos;t pay until the system produces the outcome we agreed on &mdash; not when the file gets pasted.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">Take the Free Assessment</Link>
              <Link href="https://trueflow.ai" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">See If You Qualify</Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
