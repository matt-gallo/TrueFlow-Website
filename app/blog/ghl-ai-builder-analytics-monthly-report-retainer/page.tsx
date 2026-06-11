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
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/">
            <Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} />
          </Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Automation</span>
              <span className="text-white/40 text-sm">June 10, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GHL&apos;s AI Now Answers &ldquo;Is This Working?&rdquo; Off Live Data &mdash; If Your Agency&apos;s Monthly Report Is the Deliverable, You&apos;re Paying for a PDF
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              On June 4, GoHighLevel taught its AI Builder to answer analytics questions in plain language off live account data &mdash; and quietly made the agency reporting retainer the next line item owners should question.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => { const url = window.location.href; const text = "GHL's AI Now Answers 'Is This Working?' Off Live Data — If Your Agency's Monthly Report Is the Deliverable, You're Paying for a PDF"; window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => { const url = window.location.href; window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank') }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href) }} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">
                On June 4, 2026, GoHighLevel shipped an analytics upgrade to its AI Builder: the AI Assistant inside any workflow can now answer performance questions in plain language, off live data, with zero setup. Ask &ldquo;how is my follow-up workflow doing&rdquo; and you get entries versus the prior period, a status breakdown, completion rate, goal conversions, and &mdash; the part that matters &mdash; exactly where contacts drop off. You can pull delivered, opened, clicked, replied, bounced, and unsubscribed for any email or SMS step by asking for it.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Read that again: the question every business owner actually has &mdash; <em>is this thing working?</em> &mdash; is now a chat message. Not a dashboard. Not a monthly call. A sentence.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What Just Changed (In English)</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Until last week, your automation data lived in stats panels you never opened, or it got exported into your agency&apos;s reporting tool, dressed up, and walked back to you once a month. The translation layer &mdash; &ldquo;here&apos;s what your numbers mean&rdquo; &mdash; was the agency&apos;s job, and a quiet chunk of what your retainer paid for.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                This rides on the AI Builder rebuild GHL rolled out this spring: streaming responses, conversational memory, compound requests in one turn. The platform spent two months rebuilding the engine, then bolted analytics onto it. And critically, the Assistant is read-only when answering &mdash; it never touches your workflows. There is no &ldquo;but what if the client breaks something&rdquo; excuse for keeping them out of it.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Trend Nobody&apos;s Saying Out Loud</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Owners aren&apos;t intimidated by this stuff anymore. BizBuySell&apos;s 2026 survey puts small business AI adoption at 63%, with 83% of adopters reporting actual results. The median small business now runs five AI tools. That owner has used ChatGPT. They know what asking a question in plain language feels like &mdash; and they know what it costs: nothing.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                So here&apos;s the uncomfortable math. When the platform answers &ldquo;where do contacts drop off&rdquo; for free, in seconds, off live data, the polished monthly PDF stops being a deliverable and starts being a markup. The reporting layer was never the value. It was the <em>proof of</em> value &mdash; and the platform just nationalized it.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What TrueFlow Is Actually Doing Differently</span></h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We stopped building client-facing reporting dashboards.</strong> As of this month, new builds don&apos;t include a custom reporting deliverable. We hand clients five questions to ask the AI Assistant instead &mdash; starting with &ldquo;where do contacts drop off&rdquo; &mdash; and teach them in the handoff call. Ten minutes, owned forever.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Drop-off answers are now our build queue.</strong> Every optimization sprint starts by asking the Assistant where contacts stall, and that answer becomes the next fix. We don&apos;t decide what to improve; the data does.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">We&apos;re cleaning accounts like the AI is going to read them out loud &mdash; because it is.</strong> A sub-account with forty half-named test workflows was embarrassing before; now it&apos;s <em>visible</em>, because the Assistant will surface &ldquo;New Workflow : 1743...&rdquo; right back at the owner. Naming, archiving, and hygiene just became client-facing work, and we treat it that way.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                <strong className="text-white">We get paid on the number, not the narration.</strong> Our retainer ties to outcomes &mdash; appointments booked, leads worked &mdash; because if the platform can tell you what happened, the only thing left worth paying for is making the number go up.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">What You Should Be Asking Right Now</span></h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Ask your current provider: <em>&ldquo;If my CRM can tell me my completion rates and drop-off points in a sentence, what exactly does your monthly report add?&rdquo;</em> Then ask the sharper one: <em>&ldquo;What number are you paid on?&rdquo;</em> If the answer is a deliverable instead of an outcome, you&apos;re funding overhead.
              </p>

              <h2 className="text-2xl font-bold mb-4"><span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">The Takeaway</span></h2>
              <p className="text-white/80 leading-relaxed">
                Platforms keep absorbing the layers agencies billed for &mdash; setup, prompts, orchestration, and now reporting. Every absorption is bad news for agencies selling activity and good news for the ones selling results. The monthly report was never the point. The booked appointment was.
              </p>
              <p className="text-white/80 leading-relaxed mt-6">
                <strong>Want this built for you in just 3 days&mdash;for free&mdash;and you don&apos;t pay until you see traction? DM &lsquo;FLOW&rsquo; or <Link href="https://trueflow.ai" className="text-cyan-400 hover:text-cyan-300 underline">click here</Link> to see if you qualify.</strong>
              </p>
              <p className="text-white/50 text-sm mt-6">
                <em>Sources: HighLevel Changelog (AI Builder analytics, June 4, 2026; AI Builder rebuild, spring 2026) and BizBuySell&apos;s 2026 small business AI adoption survey.</em>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16 p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Want to Be Paid on the Number, Not the Report?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We tie our fee to booked appointments and leads worked. Discovery is free. You don&apos;t pay until the system produces the outcome we agreed on &mdash; not when the PDF lands in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">Take the Free Assessment</Link>
              <Link href="https://trueflow.ai" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors">See If You Qualify</Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
