'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'we-almost-migrated-a-quoting-system-over-one-missing-number'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "We Almost Rebuilt a Client's Whole Quoting System Over One Missing Number"

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
              <span className="text-white/50 text-sm">July 31, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              We Almost Rebuilt a Client&apos;s Whole Quoting System Over One Missing Number
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Most &ldquo;we need to switch platforms&rdquo; conversations are a missing field wearing a foundation costume. Here&apos;s the Layer Test we run before anyone migrates anything &mdash; and the one case where migrating is the only honest answer.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>Last week we came within an afternoon of rebuilding a client&apos;s entire quoting system. We didn&apos;t. What we built instead took about an hour, and the process we used to get there is the most reusable thing we&apos;ve done all month.</p>

              <p>The complaint was real. Their quotes go out as documents their buyers can download as PDFs &mdash; non-negotiable, because those buyers have to walk the quote into a board meeting and hand it across a table. But the document tool doesn&apos;t number anything. Every quote left unnumbered, which meant nobody could reliably say what had been sent, to whom, or in what order.</p>

              <p>The obvious fix was to move everything to the estimates tool sitting one menu over, which numbers quotes automatically. It also can&apos;t produce a PDF.</p>

              <p>So: migrate the whole process and lose the one feature the client can&apos;t operate without, or stay put and keep flying blind. That&apos;s the shape of most &ldquo;we need to switch platforms&rdquo; conversations. It is almost always a false choice.</p>

              <p>What we built instead was a workflow that increments a stored counter, stamps the new number onto the quote, and writes it back to the record. Same tool, same PDF, numbered quotes. Nothing migrated, nothing retrained, no weekend lost.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Layer Test</h2>
              <p>Every platform complaint we hear lands on one of three layers. Naming the layer first is the whole job, because the layer decides the fix &mdash; and only one of the three is worth a migration.</p>

              <p><strong className="text-white">Layer 1 &mdash; Field.</strong> The information could exist, but nothing is generating or capturing it. A quote number. A signing date. A lead source. The system is perfectly capable of holding it; nobody ever told it to. The fix is to build the thing that creates it. Hours, not weeks. You should never migrate a platform over a missing field, and yet this is the layer where most migration conversations start.</p>

              <p><strong className="text-white">Layer 2 &mdash; Wiring.</strong> Two systems each hold half of what you need and they don&apos;t talk. We had a client entering every appointment by hand into their CRM after already entering it in their calendar. Adoption collapsed, and the diagnosis in the room was &ldquo;this software doesn&apos;t fit how we work.&rdquo; It fit fine. The input was manual. Once the calendar fed the CRM, the reminders, the review requests, and the contact records all started firing off data that was already being typed once. Nothing about the platform changed.</p>

              <p><strong className="text-white">Layer 3 &mdash; Foundation.</strong> The platform structurally cannot hold your data, or cannot let it out. This is the real one, and it is rarer than it feels &mdash; but when it&apos;s real, no amount of cleverness saves you. We&apos;re in the middle of a migration right now where one account holds a community of a couple thousand members and the platform has no supported path to move them anywhere. No workflow fixes that. No integration fixes that. That is a foundation problem, and foundation problems are the only kind that justify a migration.</p>

              <p>Here&apos;s the part another agency will push back on: most vendors love a Layer 3 diagnosis, because migrations bill better than counters do. A one-hour workflow is a bad quarter for your vendor and a very good month for you. If every problem you bring someone comes back as a platform problem, you are not getting a diagnosis. You are getting a quote.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">How to Run It in Five Minutes</h2>
              <p>Write the complaint as one sentence, then ask three questions in order and stop at the first yes.</p>

              <p>Is something missing that the system could generate or store? Layer 1. Is something present in one place that another place can&apos;t see? Layer 2. Is something structurally unable to exist here at all, no matter how you configure it? Layer 3.</p>

              <p>The grammar gives it away. If you can name the missing thing as a noun &mdash; a number, a date, a tag &mdash; you&apos;re at Layer 1. If you describe it as a verb &mdash; &ldquo;these don&apos;t sync,&rdquo; &ldquo;it doesn&apos;t pull from&rdquo; &mdash; you&apos;re at Layer 2. Only when you find yourself describing something the platform flatly refuses to do have you earned Layer 3.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Switching platforms feels like decisive leadership. Usually it&apos;s an expensive way to avoid a thirty-minute build. Run the Layer Test before you price a migration, and be suspicious of how often the answer comes back &ldquo;you need a new system&rdquo; from the people who sell new systems. Sometimes you do. Far more often, you need one field that nobody ever built.</p>

              <p className="text-white/70 italic pt-4">Get one operational fix like this in your inbox every week &mdash; <Link href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</Link>.</p>
              <p className="text-white/50 text-sm italic">Drawn from TrueFlow client build sessions and account audits, July 2026; client details anonymized.</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
