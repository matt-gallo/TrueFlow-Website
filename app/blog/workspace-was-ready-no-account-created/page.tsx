'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'workspace-was-ready-no-account-created'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Our App Said Your Workspace Was Ready. No Account Had Been Created."

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
          <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">&larr; Back to Blog</Link>
        </div>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Operations</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">September 28, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Our App Said Your Workspace Was Ready. No Account Had Been Created.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              On September 23 we signed up for our own beta the way a stranger would. Google authorization failed, the screen said the workspace was ready, and the signup looped back to the start. The authorization bug was the louder problem. The screen was the more expensive one.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 23 we signed up for our own beta the way a stranger would. Join the beta. Sign up with Google. Profile. Company name.</p>

              <p>The last screen said <em>Setting up your workspace</em>, then <em>Your workspace is ready</em>, and then it put us back at the beginning of the signup.</p>

              <p>Google authorization had failed several seconds before that screen appeared. No account was created. We confirmed it the only way that settles the question: no confirmation email arrived, because there was no user to send one to.</p>

              <p>The authorization bug is ours and it is being fixed. It is not the part worth writing about.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Screen Was Reporting on Nothing</h2>

              <p>&ldquo;Your workspace is ready&rdquo; is a sentence about a record. It should be printable only by code that is holding that record. Ours printed it because the step before it had finished &mdash; not because anything had been written anywhere.</p>

              <p>That distinction runs through every business that sends a confirmation. A confirmation either reads a result or announces an intention. The two are identical to the person reading them. They differ only on the days something breaks, which are the only days they matter.</p>

              <p>Most confirmations are the second kind, and not because anyone decided that. They get wired to the submit event, because at the moment you build the flow the write always succeeds. You test it by doing it correctly. Doing it correctly is the one path that proves nothing.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">He Would Have Counted as a Conversion</h2>

              <p>Here is the part that should bother you more than the bug.</p>

              <p>A failure that announces itself gets fixed. Somebody sees an error, screenshots it, sends it to you, and it enters the world as a ticket. A failure that congratulates the customer does not. The stranger who saw our screen would not have written to us. He would have believed he had an account, come back three days later, failed to sign in, decided our software is flaky, and gone quiet. Nothing anywhere holds a record of him.</p>

              <p>Worse than nothing, actually. Our onboarding funnel would have counted him. He reached the final step. The final step said ready. As far as any number we look at, that was a completed signup.</p>

              <p>A false confirmation does not only hide the failure. It files it under wins. That is how this class of bug survives for months inside businesses that watch their dashboards closely &mdash; the dashboard is reading the same optimistic message the customer got.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Fixed the Quieter Bug First</h2>

              <p>Two things were wrong: authorization failed, and the screen lied about it.</p>

              <p>The obvious order is authorization first, because that is what blocks people today. We did the other one first, and I would argue for that order in anyone&apos;s business.</p>

              <p>Fix only the authorization and you have repaired one path through a flow that will still congratulate the customer the next time any part of it breaks. So the confirmation moved behind the account write, and it can now render only from an account that exists. Authorization was fixed after that. The second fix protects one path. The first one protects every path that flow will ever have.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Break It On Purpose and Read What the Customer Is Told</h2>

              <p>You will not find these by reading code, and you certainly will not find them by using your own form correctly.</p>

              <p>Take the step your confirmation depends on and break it deliberately. Revoke the calendar connection. Put a wrong character in the CRM key. Disconnect the mail integration. Then go to your own site as a customer, submit the form, and read what the page says back to you.</p>

              <p>If the confirmation still appears, it was never reading anything. Then check the inbox &mdash; if a message arrives telling you the appointment is booked, the file was received, the request is in, that message is a decoration too, and it travels further than the page did.</p>

              <p>Run it on the three that carry the most weight: the booking, the intake form, the payment. Twenty minutes, and you know which of your promises are made by software that checked and which are made by software that assumed.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>A confirmation is either reading something or it is not. Your customer cannot tell the difference, and until you break the thing underneath it on purpose, neither can your reporting.</p>

              <p className="italic text-white/70 pt-4">Get one operational fix like this in your inbox every week &mdash; <a href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</a>.</p>

              <p className="italic text-white/60 pt-4">Source: a recorded internal test of the TrueFlow beta onboarding flow, September 23, 2026.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              One operational fix like this in your inbox every week.
            </p>
            <Link href="https://trueflow.ai/subscribe" className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Subscribe
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
