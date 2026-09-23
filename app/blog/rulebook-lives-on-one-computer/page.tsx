'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'rulebook-lives-on-one-computer'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "The Rulebook This Blog Obeys Lives on One Computer. This Morning It Read One File and Stopped."

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
              <span className="text-white/50 text-sm">September 23, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              The Rulebook This Blog Obeys Lives on One Computer. This Morning It Read One File and Stopped.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              This post is most of a working day late. The generator ran on time, then spent fifty-five minutes unable to read the documents that tell it what it is allowed to write. Every tool in the stack was fine. The instructions were unreachable, and almost nobody knows where theirs live.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>This post is late by most of a working day. Here is why.</p>

              <p>The generator that writes this blog starts at 4:20 every morning. Today it started on time. It opened the first of the three documents that govern what it is allowed to write, read it end to end, and reached for the second. The folder stopped answering. It kept not answering for fifty-five minutes.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Every Part Worth Checking Was Fine</h2>

              <p>The model was fine. The publishing script was fine. The site repository it commits to answered in under a second the entire time, and trueflow.ai never went down. If you had been watching any dashboard we own, you would have seen nothing at all.</p>

              <p>What went away was a folder on a Mac mini, and with it the three files that decide what this blog may say: the rulebook that governs format and voice, the brief that governs what we are permitted to claim about ourselves, and the library the headline framing comes from.</p>

              <p>The generator could still write. It could not find out what it was allowed to write. Those are different problems and the second one is worse, because a post written without the brief is not a late post. It is a post that might claim an offer we do not sell.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Configuration Is a Dependency and It Is the One Nobody Inventories</h2>

              <p>Most owners can list their tools. A fair number can list their integrations &mdash; what talks to the CRM, what fires on a form submission, which two systems share a contact record.</p>

              <p>Almost nobody can say where the instructions live.</p>

              <p>Not the automation. The thing the automation reads to know what to do. That is a real, physical location with real, physical requirements, and it is usually somewhere nobody chose on purpose:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>The Google Doc your intake workflow pulls reply templates from, in a folder owned by someone who left.</li>
                <li>The spreadsheet your quoting automation reads prices out of, which lives on one laptop and syncs when that laptop is open.</li>
                <li>The list of report recipients, maintained in a file on a shared drive that one VPN outage makes unreadable.</li>
                <li>The prompt itself, typed into a tool by whoever set it up, existing in exactly one place with no copy anywhere.</li>
              </ul>

              <p>Each of those is a single point of failure that produces no alert, because nothing broke. The workflow is still enabled. The tool is still paid for. The instruction it needs is just briefly nowhere.</p>

              <p>When the configuration lives inside the vendor&apos;s own platform, this is better &mdash; the dependency becomes their uptime instead of your hardware. That is a genuine improvement and it is still a dependency. You should be able to name it, and name who can edit it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Same Class of Failure Cost Us Four Days in August</h2>

              <p>This is the second time this has taken posts off the site.</p>

              <p>Between August 13 and August 16 the generator wrote four correct posts that never reached a reader. The publishing script had gone cold in that same folder, so the step that pushes to the repository died before doing anything. Nothing turned red. We found the gap four days later by reading a list of filenames, which is the worst way to find anything.</p>

              <p>Today cost hours rather than days, and there is exactly one reason for the difference: this morning the run said something. It sent a notification naming the file it could not read and the folder it could not reach. It did not guess at the rules, and it did not skip quietly.</p>

              <p>That is the whole gap between a bad morning and a bad week, and it is not a matter of better tooling. It is whether the thing running unattended is built to report that it is stuck.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Rulebook Moves Off the Mac Mini</h2>

              <p>Three changes, decided today.</p>

              <p>The three governing documents come off the single machine and go somewhere the run can reach without any computer being awake. Where they live has been the accident all along &mdash; they are sitting in the folder they happened to be written in, sixteen months ago.</p>

              <p>Until that finishes, an unreadable rulebook is a full stop with a notification attached. Never a silent skip, and never a draft written from memory of what the rules probably said.</p>

              <p>And the run now names its inputs in its report &mdash; which documents it read, and where each one came from. We have always reported what the run produced. Reporting what it consumed is the part that would have made this morning legible in thirty seconds instead of fifty-five minutes.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>An automation is only as reachable as the instructions it obeys. Ours sat in one folder on one computer, and nobody decided that &mdash; it is where the files happened to be the day they were written. Configuration ends up somewhere by default, and the default is rarely anywhere you would have chosen.</p>

              <p className="italic text-white/70 pt-4">Get one operational fix like this in your inbox every week &mdash; <a href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</a>.</p>

              <p className="italic text-white/60 pt-4">Sources: TrueFlow&apos;s own scheduled-task run record for September 23, 2026, and this site&apos;s repository commit history and published post index for August 13&ndash;20, 2026.</p>
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
