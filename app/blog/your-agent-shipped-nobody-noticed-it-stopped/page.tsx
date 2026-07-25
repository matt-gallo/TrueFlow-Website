'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'your-agent-shipped-nobody-noticed-it-stopped'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your Agent Shipped Last Month. Nobody Noticed When It Stopped Producing Anything."

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
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Automation</span>
              <span className="text-white/40 text-sm">July 18, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Your Agent Shipped Last Month. Nobody Noticed When It Stopped Producing Anything.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Most agents fail silently. They run without error, output drops to zero, and the person who should care doesn&apos;t know it happened. Here&apos;s the Agent Health Check &mdash; a 10-minute audit that catches the ones already dead.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">Your agent went live in June. It ran for a week, drafted forty follow-ups, posted them to a channel, and everyone agreed it worked. Then July came. Nobody&apos;s looking at it. The person who&apos;s supposed to review its output got swamped. The workflow that feeds it is broken in a way nobody diagnosed. The agent keeps running. The drafts keep appearing in a channel nobody watches. By now, it&apos;s sent three weeks of work into the void.</p>
              <p className="text-white/80 leading-relaxed mb-6">This is the most common failure mode of AI agents at small businesses. Not a crash. Not an error message. Not &ldquo;it&apos;s broken&rdquo; &mdash; which would trigger a fix. It&apos;s silent. The agent runs. The review queue fills up. Nobody checks. The business keeps paying for it, and the only metric is that it&apos;s technically working.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What This Actually Is</h2>
              <p className="text-white/80 leading-relaxed mb-6">Deployment isn&apos;t the same as adoption. An agent that runs and produces drafts nobody reads is indistinguishable from one that crashed, except in one way: it cost money and created busywork. The real measure of an agent isn&apos;t whether it executes. It&apos;s whether the output lands in front of someone who can do something with it, and whether that person has both the time and the permission to act on it.</p>
              <p className="text-white/80 leading-relaxed mb-6">Here&apos;s the part another agency will push back on, because it means more work before launch: <strong className="text-white">if nobody owns the output, the agent isn&apos;t deployed. It&apos;s abandoned.</strong> It&apos;s sitting in your infrastructure, burning cycles, creating noise, and quietly burying the case for ever trying this again.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">The Agent Health Check: Five Questions</h2>
              <p className="text-white/80 leading-relaxed mb-6">This takes ten minutes. If you can&apos;t answer all five in sixty seconds each, your agent is probably failing silently right now.</p>
              <p className="text-white/80 leading-relaxed mb-4"><strong className="text-white">1. What is it supposed to produce?</strong> Not &ldquo;it&apos;s an agent.&rdquo; Specifically: how many drafts per day? In what format? To where? If the honest answer is &ldquo;I&apos;m not sure,&rdquo; that&apos;s the first defect.</p>
              <p className="text-white/80 leading-relaxed mb-4"><strong className="text-white">2. Who is checking that output?</strong> Name one person. Not a team. Not &ldquo;whoever has time.&rdquo; One person, by name, with this as part of their job. If that person doesn&apos;t exist, the output has nowhere to go.</p>
              <p className="text-white/80 leading-relaxed mb-4"><strong className="text-white">3. How much time does that person have for it?</strong> Minutes per day? Hours per week? Be precise. Because if the honest answer is &ldquo;not enough,&rdquo; the agent is creating overwork, and the person will find reasons not to do it &mdash; silently, until the agent&apos;s output is worth less than the noise.</p>
              <p className="text-white/80 leading-relaxed mb-4"><strong className="text-white">4. How would you know if it stopped?</strong> A Slack alert? A daily report? A missing metric? If the honest answer is &ldquo;I wouldn&apos;t, until someone complained,&rdquo; then it&apos;s already been dead for days without you knowing.</p>
              <p className="text-white/80 leading-relaxed mb-6"><strong className="text-white">5. When was the last time you spot-checked what it actually produced?</strong> Not the count. The actual quality. Pick three outputs at random and read them. Did any of them surprise you? Disappoint you? If you can&apos;t remember the last time you did this, it&apos;s been too long.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What We Do Differently</h2>
              <p className="text-white/80 leading-relaxed mb-6">We don&apos;t ship an agent that produces output. We ship an agent whose output somebody named is responsible for reviewing, inside a time budget they actually have, with an alarm that fires if the output stops. We put a human owner on it before launch. We measure the first week by output volume, the second week by output quality. And we refuse to count &ldquo;deployed&rdquo; as &ldquo;done.&rdquo; Done means someone woke up today, saw what it produced, and made a decision about it.</p>
              <p className="text-white/80 leading-relaxed mb-6">Agents are cheap to build now. They&apos;re expensive to run unreviewed. Most failures aren&apos;t technical. They&apos;re organizational &mdash; nobody specified who owns the output, and the output piled up until it wasn&apos;t worth anyone&apos;s time to catch up. Build that ownership before you flip the switch. Silent failures are expensive to debug because they don&apos;t feel like failures. They feel like an experiment that didn&apos;t work.</p>
              <p className="text-white/50 text-sm italic mt-8">Source: internal TrueFlow client agent deployments and post-launch audits, July 2026; anonymized client feedback from 12+ agent builds, June&ndash;July 2026.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Get one operational fix like this every week.</h3>
            <p className="text-white/60 mb-6">Subscribe to the TrueFlow newsletter &mdash; practical fixes for the work eating your week.</p>
            <Link href="/subscribe" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Subscribe &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
