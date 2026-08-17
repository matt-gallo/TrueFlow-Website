'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = '76-percent-use-ai-14-percent-load-bearing'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "76% of Small Businesses Use AI. Only 14% Have It Doing Real Work."

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
              <span className="text-white/50 text-sm">August 4, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              76% of Small Businesses Use AI. Only 14% Have It Doing Real Work.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A Goldman Sachs survey of 1,256 owners found 76% using AI and 14% with it embedded in core operations. Seventy-three percent asked for more training. That&apos;s the wrong ask &mdash; and the three-question Load-Bearing Test shows why.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On March 17, 2026, Goldman Sachs published a survey of 1,256 small business owners, fielded by Babson College and David Binder Research between January 27 and February 4. The headline number was 76% &mdash; that&apos;s how many currently use AI.</p>

              <p>The number further down the page is the one worth your morning: only 14% say AI is fully embedded in their core operations.</p>

              <p>Sixty-two points of daylight. That gap is the actual state of small business AI right now.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Adoption stopped being the story. The U.S. Chamber&apos;s <em>Empowering Small Business</em> report put generative-AI use at 58% back in August 2025. It&apos;s 76% now. Whatever &ldquo;are small businesses using AI?&rdquo; was ever measuring, it&apos;s measured.</p>

              <p>What that 76% mostly describes is a browser tab. Someone opens it, asks it something, pastes the answer into an email, closes the tab. That is a personal habit, not a system. Habits live inside one person&apos;s day and vanish when that person gets busy, takes a week off, or leaves.</p>

              <p>The 14% describes something different: AI that owns a step. It runs whether or not anyone thought about it that morning, and if it stopped, the business would visibly change shape.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Second Number, and What Everyone Got Wrong About It</h2>
              <p>Same survey: 73% of owners said they&apos;d benefit from more training and implementation resources. The barriers they named were lack of technical expertise, difficulty choosing tools, and data privacy.</p>

              <p>Here&apos;s the unpopular part. Training is the wrong ask.</p>

              <p>Almost nobody in that 62-point gap is stuck because they can&apos;t write a good prompt. The owners we talk to are fluent &mdash; they use AI every day and they&apos;re right that it helps them. What they don&apos;t have is one workflow where AI sits on the critical path. That isn&apos;t a skills gap and no course closes it, because the missing ingredient isn&apos;t knowledge. It&apos;s a decision to let something run without a person watching it.</p>

              <p>Look at what the same owners reported: 93% said AI had a positive impact, and 84% named efficiency and productivity as the benefit. Efficiency is exactly what assistance produces. It makes the person faster. It doesn&apos;t take the work off the person. An entire market is being trained to be faster at tasks it should have handed over.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Load-Bearing Test</h2>
              <p>Three questions. Run them against any AI tool you pay for.</p>

              <p><strong className="text-white">1. Trigger.</strong> Does something other than a human deciding to open a tab start it? A form submission, a booking, a missed call, a clock.</p>

              <p><strong className="text-white">2. Destination.</strong> Does the output land somewhere other than back in front of the person who asked for it? A CRM field, a customer&apos;s inbox, a queue someone else works from.</p>

              <p><strong className="text-white">3. Absence.</strong> Does it run on a day you are not working?</p>

              <p>Three yeses and it&apos;s load-bearing &mdash; that&apos;s the 14%. Any single no and it&apos;s assistance. Assistance is real and worth paying for; it just isn&apos;t operations, and it will never show up in your capacity.</p>

              <p>Most stacks we audit score zero. Five tools, real spend, and not one thing that runs without a person starting it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Do Differently</h2>
              <p>We don&apos;t open with which tools you use. We ask which step you&apos;d be willing to stop touching &mdash; and we move exactly one workflow across that line before adding anything anywhere else. Breadth is what got the stack to five tools and zero load-bearing steps.</p>

              <p>Then we require a non-human trigger before we build. If the only way the thing starts is someone remembering, it&apos;s a habit with extra steps, and we&apos;d rather delete it than automate it.</p>

              <p>And we name the destination first. Where the output goes, who works it, and what happens when it&apos;s wrong &mdash; decided before anything gets built, not discovered afterward.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Which single step in your business are you willing to stop being the trigger for? And if you can&apos;t name one, is that a limit of the tools &mdash; or a limit of how much you&apos;re prepared to let go of?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>You&apos;re almost certainly in the 76%. That&apos;s not an accomplishment anymore; it&apos;s the baseline, and it&apos;s worth roughly nothing on its own. The move this quarter isn&apos;t another tool or another course. It&apos;s picking one workflow and putting it through all three questions until it answers yes to each. One load-bearing step beats ten helpful tabs.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help moving one workflow from assistance to load-bearing, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Goldman Sachs 10,000 Small Businesses Voices survey of 1,256 owners, fielded January 27 &ndash; February 4, 2026, published March 17, 2026; U.S. Chamber of Commerce, Empowering Small Business: The Impact of Technology on U.S. Small Business, August 2025.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
