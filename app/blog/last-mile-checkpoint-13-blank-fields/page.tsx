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
        <div className="flex items-center justify-between px-6 py-6 max-w-4xl mx-auto">
          <Link href="/">
            <Image src={logoSrc} alt="TrueFlow" width={140} height={35} className="h-8 w-auto" />
          </Link>
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to Blog
          </Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Operations
              </span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 12, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">3 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              An Automated Contract Almost Went Out With 13 Blank Fields This Week. A Boring, Manual Step Caught It.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Inside a real build review: why the one human checkpoint we refused to automate saved a client&apos;s sales agreement &mdash; and the Last-Mile Checkpoint rule you should copy.
            </p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('An Automated Contract Almost Went Out With 13 Blank Fields This Week. A Boring, Manual Step Caught It.')}&url=${encodeURIComponent('https://trueflow.ai/blog/last-mile-checkpoint-13-blank-fields')}`, '_blank')}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all"
              >
                Share on X
              </button>
              <button
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://trueflow.ai/blog/last-mile-checkpoint-13-blank-fields')}`, '_blank')}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all"
              >
                Share on LinkedIn
              </button>
              <button
                onClick={() => navigator.clipboard.writeText('https://trueflow.ai/blog/last-mile-checkpoint-13-blank-fields')}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all"
              >
                Copy Link
              </button>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/80 text-lg leading-relaxed">
                This week we walked through an end-to-end sales workflow with a sales team we work with. Lead comes in through a form, an opportunity gets created, the quote goes out, the buyer fills in their details, and the system assembles the final sales agreement automatically. Every stage worked. Then we opened the finished agreement and found 13 required fields &mdash; buyer info the system already had &mdash; sitting blank.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                No customer ever saw it. Not because the automation was clever, but because one step in that workflow is a person whose entire job is to read the agreement before it leaves the building.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                That step looks like a failure of automation. It&apos;s the best-designed part of the system.
              </p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">
                The Instinct Everyone Has Is Wrong
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                When owners buy automation, they grade it by how few humans touch the process. Vendors encourage this &mdash; &ldquo;fully hands-off,&rdquo; &ldquo;runs itself,&rdquo; &ldquo;zero touch.&rdquo; So when a workflow still has a manual review in it, it feels like an apology. Something to engineer away as fast as possible.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Here&apos;s the opinion most agencies won&apos;t say out loud: a workflow that&apos;s 100% automated on day one is a workflow nobody stress-tested. Software fails quietly. A field mapping breaks, an integration token expires, a form gets edited by someone who didn&apos;t know it fed a contract &mdash; and the system keeps cheerfully producing output. Automation doesn&apos;t make errors less likely. It makes them <em>faster, more consistent, and harder to notice.</em>
              </p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">
                The Last-Mile Checkpoint
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                The fix is a rule we now apply to every build. It has three parts:
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                <strong className="text-white">1. Find the irreversible step.</strong> In any workflow, there&apos;s a moment where the output stops being internal and becomes real: a contract reaches a customer, money moves, a message goes to your whole list. Everything before that moment is recoverable. That moment isn&apos;t.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                <strong className="text-white">2. Put one human immediately before it.</strong> Not five approvals scattered everywhere &mdash; one named person, one specific job: read the thing the system produced before it crosses the line. In the build above, that single checkpoint was the difference between a bug report and a customer holding a half-blank legal document.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                <strong className="text-white">3. Set graduation criteria.</strong> The checkpoint isn&apos;t forever. Decide up front what earns the system more trust &mdash; say, 20 consecutive clean runs &mdash; then downgrade the human step from &ldquo;review everything&rdquo; to &ldquo;spot-check weekly.&rdquo; Trust is granted on evidence, not on launch day.
              </p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">
                How to Apply This in Your Business This Week
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Take your most important automated workflow &mdash; follow-up, intake, invoicing, proposals &mdash; and ask one question: <em>what&apos;s the last thing this system produces before a customer or a bank account sees it?</em> Then ask who looks at it. If the answer is &ldquo;nobody, it&apos;s automated,&rdquo; you don&apos;t have a finished system. You have a fast one. Those are different things.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                And if a vendor pitches you a build with no human checkpoint anywhere &mdash; and no plan for earning its removal &mdash; that&apos;s not confidence in their automation. That&apos;s indifference to your downside.
              </p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">
                The Takeaway
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                The goal of automation was never zero humans. It&apos;s zero <em>wasted</em> humans. Move people out of the copy-paste middle of your workflows, and station one at the last mile, where mistakes become expensive. The blank fields will get fixed this week; that&apos;s plumbing. The checkpoint that caught them is architecture.
              </p>
              <p className="text-white/60 text-sm mt-8 italic">
                Source: an internal TrueFlow client build review, June 2026; details anonymized.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-black text-white mb-3">Ready to build workflows that don&apos;t fail quietly?</h3>
            <p className="text-white/60 mb-6">Get one operational fix like this in your inbox every week &mdash; and let&apos;s talk about what your last mile looks like.</p>
            <Link
              href="/get-started"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started &rarr;
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
