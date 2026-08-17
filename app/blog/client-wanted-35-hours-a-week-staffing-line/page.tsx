'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'client-wanted-35-hours-a-week-staffing-line'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Lost a Client Who Wanted 35 Hours a Week. They Were Right to Leave."

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
              <span className="text-white/50 text-sm">August 16, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Lost a Client Who Wanted 35 Hours a Week. They Were Right to Leave.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A client ended our engagement on Thursday because another agency could commit thirty-five hours a week. The failure wasn&apos;t the loss &mdash; it was that the unit of value had quietly changed from output to attendance. Here&apos;s the Staffing Line, a fifteen-minute pass over every vendor you pay monthly.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On Thursday a client ended our engagement. They had been talking with another agency for a while, and that agency could commit thirty-five hours a week. We could not, had not, and were not going to start.</p>

              <p>They made the right call.</p>

              <p>Thirty-five hours a week is not a service. It is a person. It is most of a full-time job, billed as a retainer and staffed by whoever picks up. Wanting that is reasonable &mdash; plenty of businesses need exactly that and should go buy it. The trouble is the label on it. When you buy hours and file them under automation, you pay agency rates for staffing, and the disappointment arrives twice: once at the invoice, and again the month the hours stop and nothing is left running.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The part that&apos;s ours</h2>
              <p>We let it get there.</p>

              <p>Somewhere in the engagement the standing question stopped being &ldquo;is the thing built and is it running&rdquo; and became &ldquo;how much time are you putting in this week.&rdquo; We answered the second one. Month after month, because it is the easier question and answering it keeps everybody comfortable. By the time it mattered, the unit of value had changed from output to attendance, and nobody had said so out loud.</p>

              <p>That is the actual failure. Not the loss &mdash; the drift.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why this is showing up everywhere right now</h2>
              <p>Thryv surveyed 561 U.S. small and mid-sized business decision-makers in April 2026 and published the results on July 9. Adoption sits at 66%, up from 55% a year earlier. And 70% of those owners say they need more training to use what they have already bought.</p>

              <p>Read that second number as a purchasing signal rather than a skills gap. Seventy percent of people who bought software are describing a need for somebody&apos;s time. That demand is real, and right now it gets routed into tool budgets, agency retainers, and subscriptions that were never built to deliver a person&apos;s attention. It comes out the other side as frustration on both ends.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Staffing Line</h2>
              <p>Fifteen minutes, one page.</p>

              <p>List every outside party you pay on a recurring basis. Agency, contractor, freelancer, fractional anything. Three columns each.</p>

              <p>1. <strong className="text-white">What it produces.</strong> Something that exists now and did not before. A booked appointment. A campaign that ran. A sent invoice.<br />2. <strong className="text-white">Where you&apos;d check.</strong> The specific place you would look to confirm it happened. A pipeline view, an inbox, a report line.<br />3. <strong className="text-white">Hours expected.</strong> How much of their week you assume is yours.</p>

              <p><strong className="text-white">The Staffing Line</strong> is the point where column three is the only one you can fill in.</p>

              <p>Above the line, you are buying an outcome and the hours are their problem. Below it, you are buying availability, and the outcome is yours whether or not you agreed to that.</p>

              <p>Both are legitimate purchases. The expensive version is making the second one while budgeting for the first.</p>

              <p>There is a quick tell, and it is your own reaction to a quiet week. If a vendor delivered everything on the list and you still feel underserved because you did not hear much from them, you are below the line. If a vendor is in your inbox daily and you cannot name what got built, you are below it from the other direction, and that one costs more.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two ways to fix a row, and buying more hours is neither</h2>
              <p>Rewrite the row so column one has an answer. Name the output, agree how it gets measured, let the hours float.</p>

              <p>Or accept that what you want is a person, stop paying agency rates for one, and hire.</p>

              <p>The version that fails is the one where nobody says which it is. We ran that version for months.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>An engagement priced in hours will eventually be judged in hours. Ours was, and the judgment was accurate.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help deciding which of your vendor relationships is buying an outcome and which is buying hours, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Thryv AI and Small Business Adoption Survey, fielded April 2026 among 561 U.S. small and mid-sized business decision-makers, released July 9, 2026; internal TrueFlow engagement review, August 14, 2026. Client details anonymized.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
