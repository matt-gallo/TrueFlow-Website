'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-employee-four-minute-tasks-four-hour-failures'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your 'AI Employee' Nails the 4-Minute Job and Quietly Blows the 4-Hour One. Here's Where to Draw the Line."

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between px-6 py-6 max-w-4xl mx-auto">
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={140} height={35} className="h-8 w-auto" /></Link>
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">← Back to Blog</Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Automation</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 29, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your &lsquo;AI Employee&rsquo; Nails the 4-Minute Job and Quietly Blows the 4-Hour One. Here&apos;s Where to Draw the Line.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The newest research on AI agents shows exactly where they break &mdash; and it&apos;s not random. Here&apos;s the rule we use to decide what an AI runs unsupervised in a small business, and what still needs a human at the wheel.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Everyone selling you an &ldquo;AI employee&rdquo; is selling you the part that works. The part that breaks is in the research, and almost nobody pitching you has read it.</p>
              <p>Here&apos;s the finding worth your attention. METR, a nonprofit that benchmarks frontier AI models on real tasks, measured how task <em>length</em> affects whether an agent actually finishes the job. The result is brutal and specific: today&apos;s best models complete tasks that take a human under about four minutes with near-100% reliability &mdash; and tasks that take a human more than about four hours less than 10% of the time. The relationship is so consistent that task length alone predicts success with an R&sup2; of 0.83. The models aren&apos;t dumber on the long tasks. They just can&apos;t hold it together across the full chain of steps. METR calls it the compound failure problem.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>For two years, the pitch has been &ldquo;hand the whole job to an AI.&rdquo; The data says hand it the <em>short, bounded</em> job. An agent that drafts a reply, tags a lead, or pulls one number is operating inside its four-minute strike zone. An agent told to &ldquo;run our intake,&rdquo; &ldquo;manage the pipeline,&rdquo; or &ldquo;handle customer success&rdquo; is being asked to stay coherent across hours of branching decisions &mdash; exactly where reliability falls off a cliff.</p>
              <p>This isn&apos;t a today-only problem you can wait out, but it&apos;s also not nothing. METR found the length of task an AI can do unsupervised with even 50% reliability is doubling roughly every seven months. So the strike zone is growing &mdash; slowly, predictably. What it is not is the &ldquo;fully autonomous staffer&rdquo; already on the sales page.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Other Number</h2>
              <p>Zoom out from the lab and the failure shows up in budgets. RAND has reported that more than 80% of AI projects fail &mdash; roughly double the failure rate of ordinary IT projects. Different studies, same shape: the technology demos beautifully on a three-minute task and falls apart when you point it at a real, hours-long workflow and walk away. Most &ldquo;failed AI projects&rdquo; aren&apos;t bad models. They&apos;re good models aimed at jobs longer than they can finish.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>We won&apos;t sell you an AI employee, because the phrase is a marketing wrapper around the exact 10% that breaks. Instead we build to the strike zone.</p>
              <p>First, we slice every workflow into the shortest steps that still mean something &mdash; draft this, route that, fill this field &mdash; and let the AI own each slice, not the whole job. Second, we put the human checkpoint on the long-horizon judgment, not the busywork. In one client&apos;s sales pipeline, the only manual action is a single drag to confirm first contact; everything downstream is automated because each downstream step is short and deterministic. Third, we bound the dangerous ones. When a workflow can fire at scale &mdash; say, generating an ad campaign or sending a batch &mdash; we cap it, log it, and review the output before it touches a customer. We&apos;ve watched a single unbounded AI action quietly create hundreds of broken records because nobody drew that line first.</p>
              <p>The agencies stacking &ldquo;autonomous agents&rdquo; into your business are quietly betting you won&apos;t notice which 10% failed. We&apos;d rather you never reach the 10%.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Two questions before you let any AI run on its own. One: how long would this task take a competent human in one sitting? If the honest answer is &ldquo;more than an hour of judgment calls,&rdquo; it needs a checkpoint, not a green light. Two: when this step fails, who finds out, and how fast? If the answer is &ldquo;the customer, eventually,&rdquo; you&apos;ve automated a liability, not a job.</p>
              <p>The takeaway is simple. AI is extraordinary at the four-minute task and unreliable at the four-hour one, and the whole game in a small business is knowing which is which before you hand over the keys.</p>
              <p className="text-white/50 text-sm italic">Sources: METR, &ldquo;Measuring AI Ability to Complete Long Tasks&rdquo; and its Time Horizons update (metr.org); RAND Corporation research on AI project failure rates (2025&ndash;2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want help drawing that line?</h3>
            <p className="text-white/60 mb-6">We&apos;ll scope which tasks your AI should run unsupervised &mdash; and which still need a human at the wheel.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
