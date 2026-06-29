'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'the-thing-nobody-tells-you-about-automation-same-way-twice'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Thing Nobody Tells You About Automation: You Have to Do the Job the Same Way Twice First"

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
              <span className="text-white/50 text-sm">June 26, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Thing Nobody Tells You About Automation: You Have to Do the Job the Same Way Twice First
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Most automations don&apos;t break because of bad software &mdash; they break because the process was never the same thing twice. Here&apos;s the Sameness Test we run before we automate anything.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week we trained a new salesperson on a client&apos;s entire sales pipeline. The whole thing took about nine minutes. Not because the rep is a prodigy or the tool is magic &mdash; but because the pipeline has exactly one manual step. A human drags a new deal from &ldquo;New&rdquo; to &ldquo;Contacted.&rdquo; After that, the customer moves the deal: they accept a quote, they fill out a form, they book a time, and each of those actions advances the pipeline on its own.</p>
              <p>People assume a system that clean took something exotic to build. It didn&apos;t. It took something boring. We made the process run the same way every single time <em>before</em> we automated any of it.</p>
              <p>Here&apos;s the thing nobody selling you AI tools will say out loud: <strong>you cannot automate a process you perform differently every time you do it.</strong></p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The real reason your automations break</h2>
              <p>Most owners try to automate the version of a task that lives in their head &mdash; the one with seventeen exceptions. The &ldquo;well, for <em>this</em> client we do it a little differently.&rdquo; The step you quietly skip when you&apos;re slammed. A machine can&apos;t run a process that has a different shape every Tuesday. So you build the automation around the average case, the edge cases slip through, and three weeks later you&apos;re back to doing it by hand and telling everyone &ldquo;automation just doesn&apos;t really work for my business.&rdquo;</p>
              <p>It works fine. The process was never the same thing twice.</p>
              <p>That&apos;s the uncomfortable part. The bottleneck usually isn&apos;t the software you bought. It&apos;s that the work has no fixed shape, so it can&apos;t be handed to anything &mdash; not to a tool, not to a new hire, not to you on a bad day.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Sameness Test</h2>
              <p>Before we automate anything, we run what we call the Sameness Test. Three questions:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Same trigger?</strong> Does this process always start the same way &mdash; or does it kick off from a text one day, an email the next, a hallway conversation the third?</li>
                <li><strong>Same inputs, same place?</strong> When it runs, is the information it needs always in the same field, the same form, the same folder &mdash; or do you go hunting for it?</li>
                <li><strong>Same destination?</strong> Does the output land in the same place every time, for the same person to pick up?</li>
              </ol>
              <p>If any answer is &ldquo;it depends,&rdquo; you don&apos;t have an automation problem. You have a standardization problem &mdash; and automating on top of it just makes the chaos faster and harder to see.</p>
              <p>This is the step almost everyone skips. Our approach is subtraction first: Delete, then Condense, then Automate. The Sameness Test is the gate between Condense and Automate. Most people jump straight from &ldquo;we do this a lot&rdquo; to &ldquo;let&apos;s automate it,&rdquo; and they end up paving the cow path &mdash; turning a messy manual process into a messy automated one.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What to do with it this week</h2>
              <p>Pick the process eating the most of your week. Don&apos;t open a single tool yet. Write down how it actually ran the last five times &mdash; not how it&apos;s <em>supposed</em> to run, how it actually went. You&apos;ll almost always find two or three forks: the client who emails instead of using the form, the deal you update from your phone and forget to finish, the report you build a little differently depending on your mood.</p>
              <p>Kill the forks first. One intake path. One place the data lives. One destination. Make it boring and identical. <em>Then</em> automate &mdash; and notice how little maintenance it needs, because there are no exceptions left for it to choke on.</p>
              <p>The reason owners spend an estimated 21 hours a week on administrative work isn&apos;t that they haven&apos;t found the right tool yet. It&apos;s that the work is shaped differently every time they touch it, so it can never be handed off. Sameness is what makes a task delegable. Automation is just the delivery method.</p>
              <p>The most underrated automation skill isn&apos;t technical at all. It&apos;s the discipline to do a thing the same boring way twice before you ever ask a machine to do it for you.</p>
              <p className="text-white/50 text-sm italic">Data source: SCORE, &ldquo;How Hard Small Business Owners Work&rdquo; (2024).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Get one operational fix like this every week</h3>
            <p className="text-white/60 mb-6">Straight to your inbox &mdash; no fluff, just one thing to fix in your business.</p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Subscribe &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
