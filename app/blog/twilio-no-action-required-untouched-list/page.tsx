'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'twilio-no-action-required-untouched-list'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Twilio Says No Action Is Required. Starting September 14, It Moves the Code Nobody at Your Company Has Opened in Years."

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
              <span className="text-white/50 text-sm">September 11, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Twilio Says No Action Is Required. Starting September 14, It Moves the Code Nobody at Your Company Has Opened in Years.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Between September 14 and October 26, Twilio migrates every active Functions (Classic) build to its new platform without asking. Here&apos;s the Untouched List &mdash; every automation nobody has edited in twelve months, who built it, what it sends, and the one outside test that proves it still runs.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On August 13, 2026, Twilio posted a changelog entry with a sentence in it that reads as reassurance: &ldquo;No action is required from customers.&rdquo; Starting September 13, nobody can create a new Functions (Classic) build. Between September 14 and October 26, Twilio migrates every active Classic function &mdash; URLs, function and asset names, environment variables, deployed code &mdash; to the new Functions.</p>

              <p>If a freelancer built your missed-call text-back or after-hours call routing on Twilio in 2020 or 2021, there is a fair chance it runs on Classic. Classic is the previous editor. Whatever is still on it is there because nobody moved it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">&ldquo;No Action Required&rdquo; Describes the Migration, Not the Outcome</h2>
              <p>The phrase is accurate. Twilio does not need you to do anything for the move to happen. It says nothing about whether you will know when it happened, or whether the thing worked on the other side.</p>

              <p>Twilio&apos;s own migration guide, last updated July 21, is the manual version of the same move. It runs nine steps. Step nine: if any phone numbers still reference the original Classic function, update them. A boxed warning: Assets (Classic) are not compatible with the new editor; re-upload them. A second warning covers auth tokens pasted straight into code instead of an environment variable &mdash; while a token updates, that function returns 403 Forbidden.</p>

              <p>The automated migration may handle all of that cleanly. The changelog says the URLs move with the code. What it cannot do is tell you which day your account was moved, or place a test call afterward. Six weeks is the window. The day is Twilio&apos;s.</p>

              <p>One more line from the guide: in Classic, logs &ldquo;were available only while you viewed them in the Console UI.&rdquo; Whatever a Classic function did at two in the morning for the past several years, no record was kept unless someone was watching the screen. If one of yours has been failing quietly since spring, the migration will not be what broke it. It will be the first time anyone looked.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Pipedrive Will Switch It Off for You</h2>
              <p>Twilio is not the only vendor acting on the parts of an account nobody opens. Pipedrive&apos;s April 2026 product update: automations that keep failing are now deactivated automatically &ldquo;based on defined safeguards.&rdquo; May added email alerts to the automation owner when failures persist. Reasonable on its face. It also means a workflow that has been failing for months gets turned off by the vendor, and the notice goes to the owner of record, which on an account set up by an agency in 2022 may be a login nobody checks.</p>

              <p>Twilio moves your code. Pipedrive turns off your workflow. HubSpot, as of September 8, enforces admin-set required fields on API writes; we covered that on September 1. Platforms have started touching the parts of your stack that nobody at your company touches. Those parts used to be safe precisely because they were untouched.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part We Left Out in August</h2>
              <p>We wrote on August 20 about the four days our own blog publisher did nothing and nothing reported it. The part we did not dwell on: the file that failed was the one nobody had opened since it was written. The operating system had offloaded it as a cold file. It was cold because it had worked, and because it worked, nobody looked. That is the exact profile of a Classic function.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Untouched List</h2>
              <p>Every automation nobody has edited in twelve months, with three things written beside each: who built it, what it answers or sends, and the one test from outside that proves it still runs.</p>

              <ol className="list-decimal pl-6 space-y-3">
                <li>Pull the list from the tools, not from memory. Functions (Classic) has its own section in the Twilio Console. Most workflow builders show a last-edited date; anything older than a year goes on the list.</li>
                <li>Name the builder. If the answer is a company you no longer work with, write that down. It is the most important field on the list.</li>
                <li>Write what it does in one line &mdash; what comes in, what goes out, and to whom.</li>
                <li>Write the outside test. For a phone function: call the number from a phone the CRM has never seen, after hours, and check where the text and the record land. For a workflow: trigger it with a fresh test record and look for the output, not the status.</li>
                <li>Run the test now, and again the week after any vendor-announced window closes. For Twilio, that is the week of October 26.</li>
              </ol>

              <p>Twelve months is the line because that is about how long an automation runs before nobody remembers how it is wired.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>
              <p>Twilio&apos;s changelog says no action is required. That is a statement about Twilio&apos;s work, not yours. The code being moved is, by definition, the code nobody at your company has opened, and the only evidence it survived will be a call you place yourself.</p>

              <p className="italic text-white/60 pt-4">Sources: Twilio Changelog, &ldquo;Functions Classic is being deprecated and existing Functions (Classic) are moving to the new Functions,&rdquo; August 13, 2026; Twilio Docs, &ldquo;Migrating from Functions (Classic) to the new Functions Editor,&rdquo; updated July 21, 2026; Pipedrive Product Updates, April and May 2026; HubSpot Developer Changelog, 2026-09 API version.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              If you&apos;d like help building an Untouched List for your phone and CRM automations, book a strategy call with our team.
            </p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Book a Strategy Call
            </Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
