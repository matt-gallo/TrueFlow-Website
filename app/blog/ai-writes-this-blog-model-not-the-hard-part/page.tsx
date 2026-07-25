'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-writes-this-blog-model-not-the-hard-part'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We've Let an AI Write This Blog Every Morning for Weeks. The Model Was Never the Hard Part."

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
              <span className="text-white/40 text-sm">July 21, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                We&apos;ve Let an AI Write This Blog Every Morning for Weeks. The Model Was Never the Hard Part.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              This post was picked, researched, checked, and committed by a scheduled agent while we slept. The thing that made it reliable wasn&apos;t the model &mdash; it was three documents. Here&apos;s the part most automation agencies won&apos;t tell you.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">You&apos;re reading something an AI wrote. Not &ldquo;AI-assisted.&rdquo; Picked, researched, fact-checked, run through a pre-publish checklist, and committed to our website by a scheduled agent that ran while I was asleep. It chose today&apos;s topic, pulled the stat below, confirmed the stat had a source, and pushed the file. This happens every morning, including today. That sentence makes people assume the interesting part is the model. It isn&apos;t.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What Actually Breaks</h2>
              <p className="text-white/80 leading-relaxed mb-6">Gartner projects that over 40% of agentic AI projects will be canceled by the end of 2027. A March 2026 survey of 650 enterprise technology leaders found 78% running at least one agent pilot &mdash; and only 14% who had scaled one into everyday operations. The distance between &ldquo;the demo worked&rdquo; and &ldquo;it runs every day without me watching&rdquo; is where almost everyone falls in.</p>
              <p className="text-white/80 leading-relaxed mb-6">We fell in too. Our first version of this blog agent ran on a stronger model than the one publishing now, and it produced worse posts. It resurrected an offer we&apos;d killed months earlier. It reused the same hook three days in a row. It cited a number with no source. The model was plenty smart. The output was unusable. What fixed it wasn&apos;t a smarter model. It was three documents.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">The Operating Docs</h2>
              <p className="text-white/80 leading-relaxed mb-6">We now hand the agent what we&apos;d hand a new hire &mdash; not a pep talk, a rulebook. Three files do the work.</p>
              <p className="text-white/80 leading-relaxed mb-4"><strong className="text-white">A rulebook of what it can&apos;t do.</strong> Banned phrases, one call-to-action per post, a hard word count, a topic it can&apos;t repeat within fourteen days. Constraints, written down.</p>
              <p className="text-white/80 leading-relaxed mb-4"><strong className="text-white">A source-of-truth doc for claims.</strong> What we&apos;re allowed to say about ourselves, which offers actually exist, which numbers are real. The agent checks every claim against it instead of inventing one.</p>
              <p className="text-white/80 leading-relaxed mb-6"><strong className="text-white">A checklist it runs before publishing.</strong> Not aspirational &mdash; literal. Search the draft for five banned strings. Confirm the CTA link is correct. Confirm every stat has a date and a source. If any check fails, the post does not ship.</p>
              <p className="text-white/80 leading-relaxed mb-6">That&apos;s the whole trick. The reliability didn&apos;t come from the model getting smarter. It came from us writing down the judgment we wanted it to have. Here&apos;s the part most automation agencies won&apos;t say out loud: the model is now the cheapest, most swappable part of any agent you build. Replace it next quarter and almost nothing about your system changes. The governing documents are the actual asset. Anyone can rent the intelligence. Almost nobody writes down the rules.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">You Don&apos;t Need a Content Agent to Use This</h2>
              <p className="text-white/80 leading-relaxed mb-6">Any task you&apos;d hand an agent &mdash; follow-up, intake, reporting, scheduling &mdash; put it through the same three questions before you build anything. What are the three things it must never do? That&apos;s your rulebook. What does it need to check before it acts, and where does the truth live? That&apos;s your source doc. What has to be true for its output to be safe to send? That&apos;s your checklist.</p>
              <p className="text-white/80 leading-relaxed mb-6">If you can&apos;t answer those in writing, the agent will fail in production &mdash; not because the model is weak, but because you handed it a job with no edges. Write the rules first. The intelligence is already good enough.</p>
              <p className="text-white/50 text-sm italic mt-8">Sources: Gartner agentic AI project forecast (reported 2025&ndash;2026); March 2026 enterprise agent-adoption survey of 650 technology leaders; internal TrueFlow content pipeline, July 2026.</p>
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
