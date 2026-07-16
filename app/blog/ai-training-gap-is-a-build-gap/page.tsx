'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'ai-training-gap-is-a-build-gap'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "70% of Small Business Owners Say They Need More AI Training. Training Is the Wrong Fix."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Playbook</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">July 16, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              70% of Small Business Owners Say They Need More AI Training. Training Is the Wrong Fix.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Thryv&apos;s July 15 survey found adoption at 66% and 86% of owners comfortable with AI &mdash; yet 7 in 10 say they need more training. The gap isn&apos;t a skills problem. It&apos;s a build problem, and training is how the industry avoids admitting it.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Thryv published its 2026 AI and Small Business Adoption Survey on July 15 &mdash; 561 small and midsize business owners and decision-makers, none of them Thryv customers. Adoption is up to 66%, an 11-point jump in a year. Eighty-six percent say they&apos;re comfortable using AI. Ninety-two percent say it saves them time.</p>
              <p>And 70% say they need more training to use it productively.</p>
              <p>Thryv&apos;s president, Grant Freeman, put it well: &ldquo;Being comfortable isn&apos;t the same as being effective, and that gap is starting to show.&rdquo; He&apos;s right about the gap. The industry&apos;s answer to it is wrong.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>For three years, the small business AI story was adoption. That story is over. Two-thirds of small businesses use AI, and the third that doesn&apos;t isn&apos;t reading this.</p>
              <p>The new story is stranger: the people using AI every day are the ones telling researchers they don&apos;t know how to use it. That isn&apos;t a contradiction. That&apos;s what it feels like to own a capability instead of a system. You have the thing. You use the thing. You could not tell anyone what it is reliably doing for your business, so you assume the missing ingredient is you.</p>
              <p>It usually isn&apos;t.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Second Number</h2>
              <p>Goldman Sachs found nearly the same thing: 73% of small businesses say they need additional training to fully leverage AI. So where are owners getting that training? Fifty-seven percent say their primary source is YouTube and social media. Forty-nine percent rely on webinars and online resources. One in three opens ChatGPT and asks ChatGPT how to use AI.</p>
              <p>Read that last one again. A third of small business owners are asking the tool to teach them the tool. That is not an upskilling strategy. That is a person alone in a room at 9pm, trying to make a $100-a-month subscription justify itself.</p>
              <p>Here&apos;s the part another agency will push back on, because training is a product they sell: <strong>if your team needs to be trained to run your automation, the automation isn&apos;t finished.</strong> Training is how the industry converts a build problem into your problem. The system doesn&apos;t work, so you get a webinar and a certificate and the quiet implication that the shortfall lives in your head.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Actually Doing Differently</h2>
              <p><strong>We treat &ldquo;this needs explaining&rdquo; as a bug, not a curriculum.</strong> Last week we spent an hour walking a new sales rep through our own pipeline. The parts that took longest to explain were the parts we&apos;d built badly &mdash; the stage that meant two different things, the field nobody could name. We didn&apos;t write documentation. We rebuilt the stages. Every question in a training session is a defect report with a person attached.</p>
              <p><strong>We don&apos;t ship a tool and a Loom video.</strong> A build isn&apos;t done when it functions, it&apos;s done when it runs unattended and complains when it stops. If the handoff requires a training session, we shipped a demo.</p>
              <p><strong>We audit before we build, and we&apos;d rather delete a step than teach it.</strong> A step you remove needs no training forever. A step you teach needs training every time someone new walks in the door &mdash; and in a five-person business, that&apos;s a tax you pay with the same hour every year.</p>
              <p><strong>We measure the system by what happens when nobody&apos;s watching it.</strong> Not by whether you can operate it on a good day. By whether it holds on your worst week.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Take the AI tool you pay the most for. If your most capable person left tomorrow, would it still produce anything &mdash; or is its output actually their skill, wearing a subscription?</p>
              <p>And: the last time something in your stack needed explaining, did you write a doc, or did you fix the thing?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The training gap is real. The training answer is a dodge. Fifty-three percent of small businesses are now spending at least $100 a month on AI tools, and the recommended fix for the resulting confusion is more YouTube. You are not undertrained. You are under-built &mdash; running tools that require a skilled human in the loop and calling it automation. The measure of a system isn&apos;t how well you can drive it. It&apos;s how little driving it needs.</p>
              <p className="text-white/70 italic">If you&apos;d like help building systems your team doesn&apos;t need training to run, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: Thryv 2026 AI and Small Business Adoption Survey via Carrier Management, July 15, 2026; Goldman Sachs small business survey as cited therein; internal TrueFlow build and training sessions, July 9&ndash;15, 2026, client details anonymized.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Built to run without a training session</h3>
            <p className="text-white/60 mb-6">If your systems only work when the right person is watching, that&apos;s a build problem &mdash; and it&apos;s fixable.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
