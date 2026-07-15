'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'what-is-your-automation-waiting-on'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "What Would Happen If You Stopped Doing Data Entry Tomorrow? About Half Your Automations Would Go Quiet."

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
              <span className="text-white/50 text-sm">July 15, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              What Would Happen If You Stopped Doing Data Entry Tomorrow? About Half Your Automations Would Go Quiet.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Most automations that &ldquo;don&apos;t work&rdquo; are working fine &mdash; they&apos;re just waiting on a human to type something first. Here&apos;s the Trigger Test (Event, Hand, Silence), a 20-minute audit that finds the ones holding their breath.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Try this tomorrow. Don&apos;t touch your CRM. Don&apos;t type an appointment into anything. Don&apos;t move a card, don&apos;t tick a box, don&apos;t paste a phone number from a text message into a contact record.</p>
              <p>Now: which of the automations you&apos;re paying for still fire?</p>
              <p>Be honest, because the answer is the whole point. Most owners we talk to have three or four automations they describe as &ldquo;not really working.&rdquo; Almost none of them are broken. They&apos;re waiting. Something upstream never happened, so the trigger never fired, and the system sat there behaving perfectly &mdash; doing nothing, silently, exactly as designed.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Automation Was Never the Problem</h2>
              <p>We sat down with a notary business we work with last week to figure out why almost none of their automation had fired in weeks. No reminders. No review requests. No follow-up.</p>
              <p>The automation was fine. The trigger was an appointment record. And appointments were being written down by hand, in a phone, in the field, between jobs &mdash; and typed into the system later, if there was a later. There usually wasn&apos;t. So the reminders never sent, the review requests never went out, and the whole stack looked like a dud.</p>
              <p>The fix wasn&apos;t a better automation. It was moving the trigger to something that already happens on its own: the calendar. They were already putting the job on their Google Calendar, because otherwise they&apos;d miss it. Point the automation at the thing the human already does anyway, and every downstream step wakes up.</p>
              <p>Here&apos;s the part another agency will push back on: <strong>if your automation depends on a human doing optional data entry, you didn&apos;t buy an automation. You bought a chore with a reward attached.</strong> And you will lose that trade every time, because the chore is due today and the reward is abstract.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Trigger Test: Event, Hand, Silence</h2>
              <p>Twenty minutes, a piece of paper, one row per automation you own. Three columns.</p>
              <p><strong>Event</strong> &mdash; what literally has to happen for this to fire? Not &ldquo;when a lead comes in.&rdquo; What <em>record</em> changes? A contact is created, a stage moves, a form submits, a calendar event appears. If you can&apos;t name the specific event, stop &mdash; you&apos;ve found the problem already.</p>
              <p><strong>Hand</strong> &mdash; who or what creates that event? A form the customer fills out? A calendar the tool writes to? A payment processor? Or a person, deciding, at the end of a long day, to go type it in? Write the actual name of the human if it&apos;s a human.</p>
              <p><strong>Silence</strong> &mdash; if this never fired again, how long until you noticed? A day? A quarter? Never? This column is the brutal one. Anything where the honest answer is &ldquo;never&rdquo; is not a system you own. It&apos;s a thing you bought.</p>
              <p>Then sort. Every row where the Hand is a person doing optional entry gets re-pointed at an event that happens on its own &mdash; a calendar, a checkout, a form, an inbound text. Every row where Silence is &ldquo;never&rdquo; gets a signal: a weekly digest, a Slack ping, something that complains when the count is zero. Automations don&apos;t tell you when they stop. That&apos;s their worst quality, and it&apos;s the reason so many of them quietly die without anybody filing a complaint.</p>
              <p>The rows that survive both columns are the ones actually running your business. There will be fewer than you think.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Two Questions To Sit With</h2>
              <p>Pick the automation you&apos;re proudest of. What&apos;s the last thing a human had to do before it could fire &mdash; and would that human do it on their worst week, in a rush, with a customer waiting?</p>
              <p>And: if it stopped firing this morning, what would tell you?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Automation doesn&apos;t fail loudly. It fails by waiting. Every stalled system we open up has the same shape &mdash; a machine in perfect working order, tied to a trigger that depends on somebody remembering, and no alarm on the silence. Before you buy another tool to fix the automation you already have, spend twenty minutes finding out what it&apos;s waiting on. Usually it&apos;s you.</p>
              <p className="text-white/70 italic">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Source: internal TrueFlow client sessions and build reviews, July 8&ndash;14, 2026; client details anonymized.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">One operational fix a week</h3>
            <p className="text-white/60 mb-6">Short, practical, and built from real client work &mdash; the kind of thing you can run on a Tuesday.</p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Subscribe &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
