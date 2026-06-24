'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'the-great-thinning-your-agency-is-about-to-pick-a-platform'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Salesforce Just Cut Its Partner Badges From 170 to 28. Your Automation Agency Is About to Pick a Side."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Industry</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 20, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Salesforce Just Cut Its Partner Badges From 170 to 28. Your Automation Agency Is About to Pick a Side.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              The big platforms are quietly forcing every implementation shop to specialize in one CRM. Here&apos;s why that should change the first question you ask anyone who automates your business.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On March 9, 2026, Salesforce tore up its partner program. The old four tiers &mdash; Base, Ridge, Crest, Summit &mdash; became two: Select and Summit. Roughly 170 partner badges collapsed into 28 &ldquo;core competencies,&rdquo; and Salesforce rebranded the whole thing &ldquo;outcome architecture.&rdquo; HubSpot reshaped its own partner program within months. Analysts already have a name for what&apos;s spreading across the ecosystem: the great thinning.</p>
              <p>Here&apos;s what that means in plain English, from someone who runs an agency: the big platforms are quietly forcing every implementation shop to pick a side.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What&apos;s Actually Happening Behind the Curtain</h2>
              <p>For years, agencies advertised expertise in everything &mdash; Salesforce and HubSpot and Zoho and whatever you already ran. The badges made the pose look credible. Deeper certification requirements just made it expensive to keep up. You can&apos;t be a top-tier Salesforce partner and a top-tier HubSpot partner anymore without paying for two specialist teams, so most agencies will quietly choose one. And from that day forward, every problem you bring them looks like a job for that platform.</p>
              <p>Sit with that part. When your provider is certified in one CRM, the recommendation is decided before they hear your problem. The &ldquo;audit&rdquo; becomes a funnel toward the platform they&apos;re already aligned to. You don&apos;t get the best system for your business &mdash; you get the one their badge rewards.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Second Thing Moving &mdash; In the Opposite Direction</h2>
              <p>While the sales channel pushes agencies toward single-platform lock-in, the actual technology is sprinting the other way. Google&apos;s Agent2Agent protocol &mdash; a standard that lets AI agents on different platforms talk to each other &mdash; passed 150 organizations in production this year, is now governed by the Linux Foundation, and counts Microsoft, AWS, Salesforce, SAP, and ServiceNow among its users. Anthropic&apos;s Model Context Protocol does the same job for connecting agents to the tools you already own.</p>
              <p>Read those two trends together. The plumbing is standardizing so your tools interoperate regardless of vendor &mdash; at the exact moment the partner ecosystem is pressuring agencies to specialize in one vendor and stay there. The technology says &ldquo;it doesn&apos;t matter what you run.&rdquo; The sales incentive says &ldquo;it had better be ours.&rdquo;</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Doing Differently (and Why)</h2>
              <p>We&apos;re not a Salesforce shop. We&apos;re not a HubSpot shop. We never chased the badges, and the great thinning is one of the better things to happen to how we work.</p>
              <p>We start inside the tools you already pay for. Before recommending anything, we ask what we can delete &mdash; the duplicate CRM, the third inbox, the workflow nobody&apos;s touched since onboarding. Subtraction first, because half the time the fix isn&apos;t a platform at all.</p>
              <p>When a build genuinely needs software, we choose for your situation, not our certification. Those interoperability standards are what make that honest: we can wire your CRM to your scheduler to your phone system without forcing you to live inside one vendor&apos;s walled garden.</p>
              <p>And we&apos;ll tell you when the answer is &ldquo;stay put.&rdquo; A platform-agnostic provider is allowed to say &ldquo;your current stack is fine, it just needs configuring.&rdquo; A single-platform partner structurally can&apos;t &mdash; their incentive is a migration.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>One question this week, for anyone who touches your automation: <em>&ldquo;Are you certified or aligned with a specific platform &mdash; and if so, what happens to your recommendation when that platform isn&apos;t the best fit for me?&rdquo;</em> Then the follow-up: <em>&ldquo;Before you build anything, will you tell me what I can cancel?&rdquo;</em> An agency loyal to a single vendor struggles to answer the second one honestly, because deletions don&apos;t earn badges.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The great thinning is real, and it will make plenty of agencies genuinely sharper at one platform. That&apos;s fine &mdash; if you&apos;ve already decided that platform is your future. But if you&apos;re a service-business owner who just wants the operational chaos to stop, your provider&apos;s loyalty should be to your outcome, not their certification wall. Pick the agency that starts by asking what to delete, regardless of whose logo is on its website.</p>
              <p className="text-white/50 text-sm italic">Sources: Salesforce partner program overhaul and &ldquo;the great thinning&rdquo; ecosystem analysis (Salesforce Ben, MarTech, Harro; March 2026); Agent2Agent protocol production adoption (Google Cloud, The Next Web; 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want automation advice that isn&apos;t locked to one platform?</h3>
            <p className="text-white/60 mb-6">We start by asking what to delete &mdash; not what to migrate.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
