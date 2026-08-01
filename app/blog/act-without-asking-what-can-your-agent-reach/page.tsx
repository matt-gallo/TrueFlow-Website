'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'act-without-asking-what-can-your-agent-reach'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Your AI Agent Has a Setting Called 'Act Without Asking.' Do You Know What It Can Reach?"

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
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">AI Trends</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">August 1, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Your AI Agent Has a Setting Called &ldquo;Act Without Asking.&rdquo; Do You Know What It Can Reach?
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Researchers disclosed flaws in a Claude browser extension in late July that let rogue extensions fire Gmail, Docs, and Calendar actions with no user click &mdash; with risk concentrated in one autonomy toggle. The lesson isn&apos;t that agents are dangerous. It&apos;s that almost no owner has ever looked at what theirs can reach.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>In the last week of July 2026, researchers disclosed a set of flaws in Anthropic&apos;s Claude Chrome extension: malicious browser extensions could generate synthetic clicks that fired real actions inside Gmail, Google Docs, and Google Calendar without the user touching anything. Per the disclosure, the risk was highest when the beta extension&apos;s &ldquo;Act without asking&rdquo; capability was switched on.</p>

              <p>Read that setting name again. It&apos;s doing exactly what it says on the label.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Nothing about the agent broke. That&apos;s the part worth sitting with. The agent had permission to act in a Gmail account, so it acted in that Gmail account. Somebody else supplied the instruction.</p>

              <p>This is now the dominant shape of AI incidents, and it is not a malfunction story. In the same stretch of July, Microsoft acknowledged a flaw in its Azure DevOps MCP server where hidden instructions buried inside a pull request could steer an AI coding assistant into exposing company information &mdash; using the developer&apos;s own permissions. Not stolen credentials. Borrowed ones. Legitimately granted, never scoped.</p>

              <p>The industry has finally named the missing control. OWASP&apos;s Top 10 for Agentic Applications, published December 10, 2025, calls it <em>Least Agency</em>: minimum autonomy, minimum tool access, minimum credential scope. NIST&apos;s NCCoE concept paper on AI Agent Identity and Authorization (February 2026) breaks the same idea into four questions you should be able to answer about any agent you&apos;re running &mdash; who is it, what is it allowed to do, whose authority is it borrowing, and where is that written down.</p>

              <p>Almost no small business can answer any of the four. And this isn&apos;t a new failure mode dressed up in new language: OWASP&apos;s Non-Human Identities Top 10 attributes 37% of non-human identity incidents to over-privileged identities &mdash; accounts handed far more than the job ever needed.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What TrueFlow Is Actually Doing Differently</h2>
              <p>Here&apos;s the uncomfortable version. Most of the automation being sold to owners right now gets installed by clicking &ldquo;Allow&rdquo; on a consent screen that asks for everything, because everything is easier for the vendor to support than something.</p>

              <p>We don&apos;t build that way, and I&apos;d argue nobody should:</p>

              <p><strong className="text-white">Every agent gets its own identity, not yours.</strong> If an agent runs on your login, you can&apos;t revoke it without locking yourself out, and your audit log will say <em>you</em> did whatever it did. One agent, one credential, revocable on its own.</p>

              <p><strong className="text-white">Scope to the job, not the platform.</strong> An agent that drafts follow-ups for new leads needs write access to one pipeline, not your entire CRM. The agent that produces this blog authenticates with a token scoped to a single repository &mdash; it cannot reach any other repo, including near-identical ones sitting on adjacent accounts. That isn&apos;t paranoia. It&apos;s what makes a mistake survivable instead of expensive.</p>

              <p><strong className="text-white">Reversible by default, approval-gated when it isn&apos;t.</strong> Drafting is reversible; sending is not. Updating a record is reversible; deleting a contact is not. Agents act freely on the first category and wait for a human on the second &mdash; and yes, that deliberately makes some workflows slower. We think that trade is obviously correct, and we know plenty of shops that would rather demo the fast version.</p>

              <p><strong className="text-white">Write down what it touched.</strong> If you can&apos;t reconstruct what your agent did last Tuesday, you don&apos;t have automation. You have a rumor.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p><strong className="text-white">First: what could this agent do on its worst day?</strong> Not its typical day &mdash; its worst one, fed a bad instruction from a form submission, a forwarded email, a scraped page. That&apos;s the real permission question, and it has nothing to do with whether the tool is trustworthy.</p>

              <p><strong className="text-white">Second: if you had to shut it off in ten minutes, could you &mdash; without breaking anything else?</strong> If the honest answer involves changing your own password, the agent was never scoped in the first place.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>Autonomy isn&apos;t a feature you buy. It&apos;s a dial you set, per agent, per job &mdash; and almost nobody has looked at theirs since the afternoon it was installed. Go open the permissions screen on every agent touching your business. It takes about twenty minutes, and it&apos;s the highest-leverage twenty minutes in your stack this month.</p>

              <p className="text-white/70 italic pt-4">If you&apos;d like help scoping your agents&apos; permissions down to the jobs they actually do, <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: eSecurity Planet weekly security roundup, July 28, 2026, and TechRepublic reporting on the Claude Chrome extension flaws; Microsoft&apos;s acknowledgment of the Azure DevOps MCP prompt-injection issue, July 2026; OWASP Top 10 for Agentic Applications (December 10, 2025) and OWASP Non-Human Identities Top 10; NIST NCCoE concept paper on AI Agent Identity and Authorization (February 2026).</p>
            </div>
          </motion.div>

        </article>
      </div>
    </div>
  )
}
