'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'openai-work-agent-documents-not-operations'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "OpenAI Just Shipped a Work Agent to Everyone. Your Bottleneck Was Never a Missing Document."

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/"><Image src={logoSrc} alt="TrueFlow" width={280} height={70} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform" priority style={{ maxWidth: '100%', objectFit: 'contain' }} /></Link>
          <Link href="/blog" className="px-4 py-2 text-white/80 hover:text-white transition-colors">← Back to Blog</Link>
        </nav>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">Industry</span>
              <span className="text-white/40 text-sm">July 22, 2026</span>
              <span className="text-white/40 text-sm">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                OpenAI Just Shipped a Work Agent to Everyone. Your Bottleneck Was Never a Missing Document.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              ChatGPT Work landed July 9 and it produces finished docs, sheets, and slides on demand &mdash; even on the free desktop app. But a work agent that makes artifacts is answering a question your business mostly isn&apos;t asking.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all text-sm">Copy Link</button>
            </div>
          </motion.header>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed mb-6">On July 9, 2026, OpenAI released GPT-5.6 and, alongside it, ChatGPT Work &mdash; an agent that takes an outcome, gathers information across your apps, and stays on a project for hours, breaking it into steps until it hands back finished materials: spreadsheets, slides, documents, even shareable web apps. It runs on the ChatGPT desktop app even if you&apos;re on the free tier. Translation: a general-purpose work agent is now sitting on every laptop in your office at no cost.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What Just Changed (In English)</h2>
              <p className="text-white/80 leading-relaxed mb-6">Anyone on your team can now hand a machine an outcome and get back a finished-looking artifact in an afternoon. Capability &mdash; the thing agencies have spent two years selling as scarce and hard &mdash; is no longer the scarce thing. It&apos;s a free checkbox on an app you already have. That sounds like it should fix your week. For most service businesses, it won&apos;t touch it.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">The Part the Launch Coverage Skips</h2>
              <p className="text-white/80 leading-relaxed mb-6">The teams getting real value from these agents aren&apos;t the ones generating more documents. They&apos;re the ones who mapped one messy recurring process, put a human approval step on anything risky, logged every action, and proved time saved. The wins reported across enterprise pilots are on data entry, invoice processing, and customer triage &mdash; the repetitive operational plumbing, not the deliverables.</p>
              <p className="text-white/80 leading-relaxed mb-6">That&apos;s the distinction ChatGPT Work quietly exposes. A deck is a <em>deliverable</em>. A booked appointment, a followed-up lead, an updated CRM record &mdash; those are <em>operations</em>. Your business does not drown in missing documents. It drowns in recurring operations nobody has time to run on time. A brilliant artifact generator is a magnificent answer to a question a clinic owner rarely asks.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What TrueFlow Is Actually Doing Differently</h2>
              <p className="text-white/80 leading-relaxed mb-6">We don&apos;t open the conversation with &ldquo;what could this agent make?&rdquo; We ask &ldquo;which recurring operation can it own, end to end, while nobody&apos;s watching?&rdquo; Those are different jobs, and the second one is the one that gives you your evenings back. We wire agents into the tools where the operation already lives &mdash; your CRM, your calendar, your inbox &mdash; not a chat window someone has to remember to open.</p>
              <p className="text-white/80 leading-relaxed mb-6">Most of what ChatGPT Work produces for a small business this year will be impressive, professional-looking, and operationally useless. Not because the tool is bad &mdash; it&apos;s genuinely good &mdash; but because producing an artifact and owning an operation are not the same act, and only one of them empties your plate.</p>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-10 mb-4">What You Should Be Asking Right Now</h2>
              <p className="text-white/80 leading-relaxed mb-6">Two questions cut through it. First: is the thing eating your week a missing document, or a recurring action nobody runs on time? Second: if an agent produced that thing for you, who checks it, and where does its output go once it&apos;s made? If the honest answer is &ldquo;onto a pile&rdquo; or &ldquo;nobody,&rdquo; you don&apos;t have an agent yet. You have a faster way to make piles.</p>
              <p className="text-white/80 leading-relaxed mb-6">Your bottleneck is operational. Operational work has to be owned, wired into your tools, and watched &mdash; not just generated on demand.</p>
              <p className="text-white/50 text-sm italic mt-8">Sources: OpenAI GPT-5.6 and ChatGPT Work announcement, July 9, 2026 (openai.com; TechCrunch; Axios); small-business AI coverage, July 2026.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Ready to figure out which recurring operations a work agent should actually own?</h3>
            <p className="text-white/60 mb-6">Book a strategy call and we&apos;ll sort it out together.</p>
            <Link href="/get-started" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
