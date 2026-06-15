'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'crm-outcome-pricing-flat-retainer-last-holdout'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Every Major CRM Now Charges by the Result — Per Resolution, Per Lead. The Flat Automation Retainer Is the Last Holdout.'

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
              <span className="text-white/50 text-sm">June 13, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Every Major CRM Now Charges by the Result &mdash; Per Resolution, Per Lead. The Flat Automation Retainer Is the Last Holdout.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              HubSpot, Intercom, Salesforce, and Sierra now charge only when their AI produces a result. Here&apos;s why that quietly redefines what your automation provider is allowed to bill for.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On April 14, 2026, HubSpot stopped charging for its Breeze AI agents by usage and started charging by results. The Customer Agent went from $1.00 per conversation to <strong className="text-white">$0.50 per <em>resolved</em> conversation</strong>. The Prospecting Agent dropped its monthly per-contact fee for <strong className="text-white">$1 per qualified lead</strong> handed to sales. No resolution, no charge. No qualified lead, no invoice. There&apos;s no opt-out and no grandfathered old-pricing tier &mdash; every HubSpot customer is on this model now.</p>
              <p>Sit with the number for a second. A public company with thousands of customers just told the market it&apos;s confident enough in its own AI to only get paid when the AI actually finishes the job.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>For a decade, software billed you for <em>access</em>. You paid per seat, per contact, per month &mdash; whether the tool worked or sat untouched. Outcome pricing flips that: you pay per <em>thing that happened</em>. A closed ticket. A booked lead. A dollar of value you can point to.</p>
              <p>And this isn&apos;t a HubSpot quirk. It&apos;s the whole category moving at once. Intercom crossed $100M+ ARR charging per resolution on its Fin agent. Salesforce scrapped its old $2-per-conversation Agentforce model for credit-based actions at roughly $0.10 each. Sierra reportedly passed $150M+ ARR on <em>pure</em> outcome pricing. Zendesk already switched. As of spring 2026, the flat monthly AI fee is the anomaly, not the norm.</p>
              <p>Here&apos;s the part most owners miss: the platforms didn&apos;t do this to be generous. They did it because they finally trust their own output enough to tie revenue to it. That&apos;s the real signal. When a vendor moves to &ldquo;pay for results,&rdquo; they&apos;re telling you the results are now reliable enough to bet their invoice on.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Question This Forces</h2>
              <p>So look at your automation provider&apos;s bill. If a $4B company will only charge you 50 cents when its agent <em>resolves</em> something, why does your retainer charge the same flat number every month whether your follow-up booked thirty appointments or zero?</p>
              <p>That&apos;s the uncomfortable opinion most agencies won&apos;t print: the flat monthly automation retainer survives precisely because it&apos;s <em>unmeasured</em>. The moment you can see the number &mdash; leads worked, appointments booked, conversations resolved &mdash; &ldquo;we keep the lights on&rdquo; stops being a deliverable. The platforms just made that number visible by default. The retainer that hides behind &ldquo;maintenance&rdquo; is now standing in a very well-lit room.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p><strong className="text-white">We benchmark builds against the platform&apos;s own outcome metrics.</strong> If HubSpot reports its Customer Agent resolves 65% of conversations and cuts resolution time 39%, that&apos;s the bar your build answers to &mdash; not &ldquo;we shipped a workflow.&rdquo; We write the target down before we build.</p>
              <p><strong className="text-white">We point clients toward outcome-priced features instead of reselling access.</strong> If a platform will charge you per qualified lead, we&apos;d rather configure that than wrap a flat markup around it and call the markup our value. The setup is the work. The subscription isn&apos;t ours to resell.</p>
              <p><strong className="text-white">We build the scoreboard, not the slideshow.</strong> Every system we hand off can answer &ldquo;how many results did this produce this week&rdquo; without a meeting. You shouldn&apos;t need us &mdash; or a monthly PDF &mdash; to find out whether the thing is working.</p>
              <p><strong className="text-white">Our stance is simple: you should be able to see what you&apos;re paying for, in outcomes.</strong> We favor being measured on the number that matters over being paid for activity. If a provider can&apos;t tell you which number their fee moves, that&apos;s the tell.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>Two questions, this week. First, to every AI tool and provider you pay: <em>&ldquo;What result do I get if this produces nothing this month &mdash; do I still pay full price?&rdquo;</em> Second, the sharper one: <em>&ldquo;What&apos;s the one number this is supposed to move, and can I see it without asking you?&rdquo;</em> If the honest answer to the second is &ldquo;no,&rdquo; you&apos;re funding access, not outcomes.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The CRM industry just repriced AI around results because it finally could. That&apos;s good news if you buy outcomes and bad news if you sell months. Don&apos;t migrate your whole stack over a pricing memo &mdash; but do hold every line item to the standard HubSpot just set for itself: get paid when something happens, or explain why you&apos;re the exception.</p>
              <p className="text-white/50 text-sm italic">Sources: HubSpot Breeze outcome-based pricing announcement (effective April 14, 2026, via MarTech and CX Today); Salesforce Agentforce, Intercom Fin, and Sierra pricing reporting (SaaStr, spring 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want automation you can measure in outcomes?</h3>
            <p className="text-white/60 mb-6">Let&apos;s build something with a scoreboard attached.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Get Started &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
