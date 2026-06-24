'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'stop-updating-your-pipeline-let-the-customer-move-the-deal'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Stop Updating Your Sales Pipeline by Hand. Let the Customer Move the Deal."

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Sales</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">June 24, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Stop Updating Your Sales Pipeline by Hand. Let the Customer Move the Deal.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A pipeline that needs a human to keep it current is already leaking. Here&apos;s the One-Drag Test we run on every sales build &mdash; and why the best-built pipeline has exactly one manual step.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week we walked a new salesperson through a sales pipeline we&apos;d built for the business he just joined. The whole training took about twenty minutes, and most of that was logging in. The actual workflow fit in one sentence: <em>drag the card from &ldquo;New Deal&rdquo; to &ldquo;Contacted&rdquo; after your first call &mdash; and then don&apos;t touch the stages again.</em></p>
              <p>That&apos;s it. One manual move, ever. Everything after it advances on its own.</p>
              <p>Send a quote, and the deal slides to &ldquo;Submitted Pricing&rdquo; automatically. The customer accepts, and they&apos;re handed a short form to collect the legal details &mdash; and submitting that form moves the deal to the next stage and pings the person who handles fulfillment. The salesperson never drags another card. He just sells. The pipeline keeps itself honest because the things that move it forward are things that were going to happen anyway.</p>
              <p>Here&apos;s the opinion most CRM consultants won&apos;t say out loud: a sales pipeline that depends on a human to keep it up to date is already broken. You just haven&apos;t seen the leak yet.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The problem isn&apos;t discipline. It&apos;s design.</h2>
              <p>Every owner has heard the complaint, or made it themselves: &ldquo;the team doesn&apos;t update the CRM.&rdquo; Then comes the fix that never works &mdash; a Monday reminder, a manager nagging in standup, a rule that says <em>log it before you go home.</em></p>
              <p>The data says save your breath. Across Salesforce&apos;s State of Sales research, reps spend less than a third of their week actually selling; the rest disappears into admin and data entry. And roughly two-thirds of reps simply avoid updating their records at all. That&apos;s not a willpower gap you can train away. It&apos;s what happens when you ask the busiest, most easily distracted person in the building to be your system of record.</p>
              <p>So stop asking. Build the pipeline so it updates itself off events that are already occurring.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The One-Drag Test</h2>
              <p>Here&apos;s the framework we run on every sales build. Walk your pipeline stage by stage, and for each transition ask one question:</p>
              <p><strong className="text-white">&ldquo;What event already happens here that could move this deal forward &mdash; without anyone remembering to?&rdquo;</strong></p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>A quote gets sent. That&apos;s an event. Wire it to advance the stage.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>A customer accepts, signs, or pays. That&apos;s an event. Wire it.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">•</span><span>A form gets submitted, a call gets booked, an invoice clears. All events. All triggers.</span></li>
              </ul>
              <p>If a stage can only advance when someone <em>remembers</em> to drag a card, you&apos;ve found a leak. That&apos;s the stage where deals go stale, where follow-up dies quietly, where your reporting starts lying to you. Mark it. Then go find the event that should be moving it instead.</p>
              <p>Run the whole board this way and count what&apos;s left: the number of stages that still need a human to move them by hand. We call that number your manual count. In a clean build it should be one &mdash; the moment a real person decides &ldquo;I&apos;ve made contact, this is a live deal.&rdquo; That single judgment call is worth keeping human. Everything downstream is just bookkeeping the system should do for you.</p>
              <p>Most pipelines we inherit score five or six. Every one of those is a place the owner is paying &mdash; in stale data, missed follow-ups, and forecasts nobody trusts &mdash; for the privilege of doing a robot&apos;s job.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why customer actions are the best triggers of all</h2>
              <p>Notice the pattern in the good build: the strongest triggers weren&apos;t internal at all. They were <em>customer</em> actions &mdash; accepting the quote, filling out the form, making the payment. Those are the events you can trust most, because the customer has every incentive to complete them. Your rep might forget to update a stage. The buyer who wants their thing rarely forgets to say yes.</p>
              <p>Build your pipeline so the customer&apos;s own momentum carries the deal forward, and you get a system that&apos;s accurate by default &mdash; not because anyone is disciplined, but because the only way to skip a step is to lose the sale.</p>
              <p>The takeaway is simple: stop measuring your CRM by how diligently people update it. Measure it by how little updating it needs. The best pipeline isn&apos;t the one your team keeps current. It&apos;s the one that stays current whether they remember it or not.</p>
              <p className="text-white/50 text-sm italic">Source: Salesforce, State of Sales research (rep selling-time and CRM-update behavior).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want a pipeline that updates itself?</h3>
            <p className="text-white/60 mb-6">We run the One-Drag Test on every build &mdash; and aim for exactly one manual step.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
