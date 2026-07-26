'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'five-things-we-say-before-we-build-anything'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The 5 Things We Say Before We Build You Anything (Most Agencies Skip Every One)"

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Operations</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 26, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The 5 Things We Say Before We Build You Anything (Most Agencies Skip Every One)
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Most automation agencies open with &ldquo;what do you want to build?&rdquo; We open by trying to talk you out of half of it &mdash; here&apos;s the exact five-part conversation we run before touching a single workflow.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Every automation agency has a first-call script. Most of them are a version of &ldquo;tell us what you want to build, and we&apos;ll build it.&rdquo; Ours runs the other direction. Before we touch a workflow, we run the same five-part conversation with every client &mdash; and it usually ends with a smaller build than the one they walked in wanting.</p>

              <p>Here it is, unedited. Steal it. If your vendor won&apos;t have this conversation with you, that tells you something.</p>

              <p><strong className="text-white">1. &ldquo;Show us the version of this that&apos;s already half-working.&rdquo;</strong> Nobody starts from zero. A clinic operator we sat with last week was sure she needed a brand-new intake system. She already had one &mdash; buried inside a tool she was paying for and using at a fraction of what it could do. Most of the &ldquo;new build&rdquo; was switching on things she already owned. We look for the half-working version first, because building next to it is faster, cheaper, and doesn&apos;t add a sixth login to a stack that already has five.</p>

              <p><strong className="text-white">2. &ldquo;What happens if we delete this instead of automating it?&rdquo;</strong> This is the question almost every agency skips, because deleting doesn&apos;t bill. A lot of the work owners want automated shouldn&apos;t exist at all &mdash; a report nobody reads, a step someone added in 2021 for a reason no one remembers. Automating a useless task just makes you produce useless output faster. We ask the delete question on every item before we ask the automate question. Sometimes the whole project collapses into &ldquo;stop doing three of these five things,&rdquo; and that&apos;s a good day.</p>

              <p><strong className="text-white">3. &ldquo;Whose tool are we living inside?&rdquo;</strong> We don&apos;t force migrations. If you have a documents system your clients rely on for the PDF they hand to their board, we build the missing piece next to it &mdash; we don&apos;t rip it out and sell you our favorite platform. We hit exactly this recently: a client&apos;s quoting setup was missing an auto-incrementing number, and the &ldquo;obvious&rdquo; fix was to switch to a different tool that had one. We added one small counter workflow instead. Kept the tool, kept the PDF, solved the actual problem in an afternoon. Migrations are where good businesses quietly lose data, members, and months.</p>

              <p><strong className="text-white">4. &ldquo;What&apos;s the outcome &mdash; in a number you already track?&rdquo;</strong> Not &ldquo;save time.&rdquo; Not &ldquo;be more efficient.&rdquo; A number that already lives in your business: no-show rate, leads that never got a second touch, days-to-quote. If we can&apos;t tie the build to a number you already watch, we&apos;re selling you activity &mdash; and activity is the thing you&apos;re already drowning in. Outcomes are checkable. &ldquo;Feels more organized&rdquo; is not.</p>

              <p><strong className="text-white">5. &ldquo;What breaks when it breaks &mdash; and who notices?&rdquo;</strong> Every automation fails eventually. The only question is whether it fails loud or fails silent. We don&apos;t ship anything without deciding, out loud, what the failure looks like and who gets pinged when it happens. An automation that quietly stops is worse than no automation, because you&apos;ve stopped watching the thing it used to do for you.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why This Is the Whole Game</h2>
              <p>None of this is modesty. It&apos;s economics. The over-tooled, under-systematized business &mdash; five subscriptions, no system &mdash; doesn&apos;t need a sixth thing. It needs someone willing to subtract before they build. We call the sequence the Pre-Build Conversation, and we run it in order: find what&apos;s half-working, try to delete it, stay inside your tools, tie it to a real number, and decide how it fails. Most projects get smaller. The ones that survive actually hold.</p>

              <p>Here&apos;s the part another agency would argue with: we turn down more build requests on the first call than we accept. Not because the work is hard &mdash; because most of it shouldn&apos;t be built. The businesses that scale aren&apos;t the ones with the most automations. They&apos;re the ones with the fewest moving parts doing the most work.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Before you pay anyone to build you an automation, run their answers through these five questions. If they can&apos;t tell you what to delete, what number it moves, and how it fails &mdash; they&apos;re selling you activity, not outcomes.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Based on TrueFlow&apos;s own client build conversations, July 2026.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
