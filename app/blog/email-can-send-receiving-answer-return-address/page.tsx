'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'email-can-send-receiving-answer-return-address'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = 'Your Business Can Send Email. Receiving the Answer Is a Separate Setting.'

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
              <span className="text-white/50 text-sm">August 25, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your Business Can Send Email. Receiving the Answer Is a Separate Setting.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We authenticated a client&apos;s sending domain down to the DKIM key, then read our own DMARC record back and found it reporting to nobody. Here&apos;s the Return Address &mdash; the three-step install that gives every automated message a way for the answer to reach a human.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On August 1 we finished authenticating a client&apos;s sending domain. A dedicated subdomain, so the root mail flow stayed untouched. SPF authorizing the sending platform. A published DKIM key. A DMARC record at <code className="text-cyan-300">_dmarc</code>. Every one verified by direct lookup rather than by asking.</p>

              <p>Then we read our own DMARC record back: <code className="text-cyan-300">v=DMARC1; p=none;</code>. Nothing after the semicolon.</p>

              <p>That record asks every receiving server on the internet to watch mail sent as that domain and file a daily report. It never says where to send the report. We had installed a monitor and left off the address. Correct, verifiable, and pointed at nobody.</p>

              <p>One missing field. It is also the same missing field, three times over, in the stacks we audit.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Sending Is One Build. Being Reachable Is Another.</h2>
              <p>Every automated message your business sends has a forward path and a return path.</p>

              <p>The forward path gets the attention, because it is the part that visibly works. The email went out. The workflow shows a green check. Somebody says the automation is live.</p>

              <p>The return path is where an answer comes back &mdash; from the customer, or from the mail system itself &mdash; and it is configured somewhere else entirely. Usually by default. Usually to nowhere.</p>

              <p>Three places it goes dark.</p>

              <p><strong className="text-white">The reply-to header.</strong> Your platform will accept any string in the <code className="text-cyan-300">From:</code> field and will never ask what happens when someone hits reply. If reply-to is unset, the answer goes back to that string. Often that is a mailbox nobody opens. Sometimes it is <code className="text-cyan-300">no-reply@</code>, an address whose only function is to discard a customer who wanted to talk to you. Delete every no-reply address you own. No volume of outbound mail justifies refusing the response.</p>

              <p><strong className="text-white">The DMARC <code className="text-cyan-300">rua</code>.</strong> Aggregate reports are how you learn your mail is failing before a provider tells you the hard way. Without <code className="text-cyan-300">rua=mailto:</code>, <code className="text-cyan-300">p=none</code> is a policy with no readout. On July 31 a client&apos;s referral blast went out at 10:57 AM and the provider paused sending for bounce rate at 11:38 &mdash; about forty minutes. Nothing in that interval was visible to anyone.</p>

              <p><strong className="text-white">The forwarding rule on an outreach domain.</strong> If you send cold email from a lookalike domain, replies land in a mailbox on that domain, not the one you check. Somebody has to forward it. It is the last step of the setup and the first one skipped.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Return Address</h2>
              <p>Twenty minutes, one message, three steps. Pick something the business already sends on its own &mdash; the booking confirmation, the invoice, the follow-up &mdash; and install a return path for it.</p>

              <p>1. <strong className="text-white">Set reply-to explicitly</strong>, to an inbox a named person opens. Not the <code className="text-cyan-300">From:</code>. Not a shared alias with no owner. Not no-reply.</p>

              <p>2. <strong className="text-white">Add <code className="text-cyan-300">rua=mailto:</code> to the DMARC record</strong> for that sending domain, pointed at that inbox or one beside it. If the root domain has no <code className="text-cyan-300">_dmarc</code> record at all, add a monitoring one there too.</p>

              <p>3. <strong className="text-white">Reply to the message yourself</strong>, from an outside address, with one word. Then go find that word.</p>

              <p>Step three is the build. The first two are configuration, and configuration reports on itself. A word you sent from your phone and then found in an inbox is evidence.</p>

              <p>Run step three again the day anything about the sending domain changes, which is the day it usually breaks.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Why It Is Worth the Twenty Minutes Now</h2>
              <p>Since November 2025 Gmail has rejected non-compliant bulk mail at the SMTP level instead of filing it under spam, and in October 2025 Google retired the old Postmaster Tools dashboard for one organized around compliance status. Both changes assume a sender who is reading reports.</p>

              <p>If nothing is reading them, the failure mode is not a full spam folder. It is silence, and silence looks exactly like a quiet week.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Sent is a fact about your software. Received is a fact about a person. Nothing about the first one tells you anything about the second.</p>

              <p className="italic text-white/60 pt-4">Sources: TrueFlow client sending-domain SOP and DNS verification records, August 1, 2026; Google Gmail sender guidelines enforcement change, November 2025.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Get one operational fix like this in your inbox every week.
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
