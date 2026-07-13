'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'every-platform-now-builds-agents-not-the-hard-part'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "Every Platform You Already Pay For Now Builds AI Agents for You. Building Was Never the Hard Part."

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
              <span className="text-white/50 text-sm">July 13, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Every Platform You Already Pay For Now Builds AI Agents for You. Building Was Never the Hard Part.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              HubSpot opened its Prospecting Agent to every paid account this month, Google put a no-code agent builder inside Workspace, and Anthropic shipped its most agentic model yet. The cost of building an agent went to zero. The cost of reviewing what it produces didn&apos;t.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>In its July 2026 release, HubSpot opened the Prospecting Agent to every paid portal &mdash; it used to be limited to a smaller set of accounts &mdash; and wired in a Seamless integration that finds net-new contacts matching your personas and hands you drafted outreach, ready to send.</p>
              <p>Read that again. Your CRM will now go out, find strangers, and write to them for you. Any paid seat. Today.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What Just Changed (In English)</h2>
              <p>Building an AI agent used to require someone technical. That barrier is gone, and it didn&apos;t fall gradually.</p>
              <p>Google rolled Workspace Studio out to every Workspace domain on March 19, 2026 &mdash; a no-code builder where you describe what you want automated in plain English and Gemini assembles an agent that works across Gmail, Docs, and Sheets. Anthropic shipped Claude Sonnet 5 this month, its most agentic model yet, capable of running browsers and terminals on its own, at a fraction of what that capability cost a year ago.</p>
              <p>So the picture in July 2026 is this: the software you already pay for will build you an agent, the model underneath it is cheap and competent, and nobody has to write a line of code.</p>
              <p>Every agency in our category is telling you this is your moment. Here&apos;s the part they&apos;re skipping.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Building Was Never Your Bottleneck</h2>
              <p>An agent that produces work someone has to check isn&apos;t a labor saver. It&apos;s a work generator.</p>
              <p>HubSpot&apos;s own pricing tells you exactly what these things do: the Prospecting Agent bills $1.00 per qualified lead, the Customer Agent $0.50 per resolved conversation (announced April 2026). Those prices are honest &mdash; you&apos;re buying <em>output</em>. And output has to land somewhere. Forty drafted emails is not forty emails sent. It&apos;s forty decisions, sitting in a queue, waiting for the one person in your business who can tell a good one from an embarrassing one.</p>
              <p>That person is you. You are the bottleneck, and no agent builder on the market ships more of you.</p>
              <p>Here&apos;s the line other agencies will hate: <strong>most small service businesses should build zero agents this quarter.</strong> Not because agents don&apos;t work &mdash; they do, we build them &mdash; but because the thing you&apos;re trying to fix is almost always a process nobody has written down yet. An agent pointed at a broken process doesn&apos;t fix it. It runs it faster, at a dollar an outcome, and now you have a mess with an API.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We&apos;re Actually Doing Differently</h2>
              <p>Four behaviors, concretely.</p>
              <p><strong>We ask if it can be a rule before we let it be an agent.</strong> If you can write &ldquo;when X happens, do Y&rdquo; and be right 100% of the time, that&apos;s a workflow. It&apos;s free, it&apos;s deterministic, and it never has an opinion. Agents are for the jobs where you <em>can&apos;t</em> write the rule &mdash; judgment, unstructured input, ambiguity. Paying per outcome for something an if/then would have handled is the most common waste we find.</p>
              <p><strong>We subtract before we add.</strong> On a client build last week, the first real work wasn&apos;t building anything &mdash; it was archiving the unused workflows already cluttering their account. You cannot see what&apos;s broken through a stack of things that aren&apos;t running.</p>
              <p><strong>We put a readiness assessment in front of every conversation.</strong> Before anyone gets on a strategy call with us, they complete an AI Readiness Assessment. Half the value is the filter; the other half is that it forces an owner to describe the process out loud before anyone tries to automate it.</p>
              <p><strong>Every agent we ship gets a named owner and a review budget.</strong> How many minutes per week will a human spend checking this thing&apos;s output? If the answer is &ldquo;nobody has those minutes,&rdquo; we don&apos;t ship it. That&apos;s not caution. That&apos;s the whole job.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What You Should Be Asking Right Now</h2>
              <p>If this agent produced forty drafts tomorrow morning, who reads them &mdash; and what does that person stop doing to make room?</p>
              <p>And: could this have been an if/then rule? Be honest. If yes, you don&apos;t need an agent. You need forty-five minutes and a workflow.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Takeaway</h2>
              <p>The build cost went to zero this year. The review cost didn&apos;t move at all. Which means the constraint in your business just moved from &ldquo;can we build it&rdquo; to &ldquo;can anyone absorb what it makes&rdquo; &mdash; and that&apos;s a question about your capacity, not about HubSpot&apos;s changelog. Answer it first. The agent will still be one click away next week.</p>
              <p className="text-white/70 italic">If you&apos;d like help deciding which of your processes is genuinely ready for an agent &mdash; and which just needs a rule &mdash; <Link href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</Link>.</p>
              <p className="text-white/50 text-sm italic">Sources: HubSpot July 2026 product release notes; HubSpot company news on outcome-based agent pricing (April 2026); Google Workspace Updates, Workspace Studio general availability (March 19, 2026); Anthropic&apos;s Claude Sonnet 5 launch (July 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Rule or agent?</h3>
            <p className="text-white/60 mb-6">We&apos;ll walk your processes with you and tell you which ones are ready for an agent &mdash; and which ones just need a workflow.</p>
            <Link href="https://trueflow.ai/book-strategy-call" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">Book a Strategy Call &rarr;</Link>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
