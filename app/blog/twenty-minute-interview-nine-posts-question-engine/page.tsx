'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'twenty-minute-interview-nine-posts-question-engine'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "One Twenty-Minute Interview Produced Nine Posts. Transcription Wasn't the Hard Part, and Neither Was the Writing."

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
              <span className="text-white/50 text-sm">September 18, 2026</span>
              <span className="text-white/20">•</span>
              <span className="text-white/50 text-sm">5 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              One Twenty-Minute Interview Produced Nine Posts. Transcription Wasn&apos;t the Hard Part, and Neither Was the Writing.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We recorded twenty minutes of our founder talking on September 16 and came out with nine distinct posts, a rewritten positioning document, and two mistakes worth publishing. The scarce skill in automating someone&apos;s voice is the question, not the transcript.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>On September 16 we recorded a twenty-minute conversation with our own founder and came out of it with nine distinct posts, a rewritten positioning document, and a list of phrases nobody would have written down on purpose.</p>

              <p>The conversation was the product. Everything after it was mechanical.</p>

              <p>That is worth saying plainly, because the thing we spent the following day specifying is not a writer. It is an interviewer, and the distinction is the whole argument.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Part Everybody Sells Is the Part That Already Works</h2>

              <p>Transcription is solved. You can buy it for cents a minute and it will be more accurate than a person taking notes. Generation is solved too &mdash; hand a model a transcript and a style guide and it will produce something fluent, on length, on schedule, indefinitely.</p>

              <p>Which is why the market is full of tools that do both, and full of content that sounds like nobody.</p>

              <p>The scarce part sits upstream of both. It is the question that makes somebody say the thing he actually thinks, in the words he actually uses, instead of the thing everyone says when asked to describe himself. We spent that session finding out which questions those are, by asking about fifteen of them and watching four die on the table.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">&ldquo;Twenty-Eight Minutes In, You Said This&rdquo;</h2>

              <p>Highest-yield move of the session, by a distance: quote the person back to himself, then ask for more.</p>

              <p>It worked because the interviewer had read a real call transcript before sitting down, and could open with a specific line from twenty-eight minutes into a previous conversation. Being quoted back to yourself is what makes a person talk. &ldquo;So what&apos;s on your mind&rdquo; gets the answer everyone gives.</p>

              <p>Second best: name the implication out loud and let him confirm it or knock it down. <em>That&apos;s not a time pitch, that&apos;s an attention pitch, and you landed it on his marriage.</em> Both outcomes are useful. The correction is often the better one, because it shows you where the real edge of the position is.</p>

              <p>Third: put a third person in the chair. Asking what a named client&apos;s Tuesday looks like produced more than asking about his own week, every time.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">&ldquo;Nothing I Can Think Of&rdquo;</h2>

              <p>Four questions failed, and the way they failed is the more useful half of the day.</p>

              <p>Recall-dependent questions died first. <em>Give me an example from last week where that happened.</em> Flat answer: nothing I can think of. That is not a person being unhelpful. It is a question carrying too much retrieval load, put to somebody who has spent the week working rather than indexing.</p>

              <p>Questions built on a false premise cost momentum. We asked about a change that hadn&apos;t happened, got corrected, and recovered only by conceding in the same breath.</p>

              <p>Anything abstract produced boilerplate. Ask a man to characterize himself and you get a bio.</p>

              <p>The rule we took out of it: when a question lands flat, drop it and re-angle. Never rephrase and push. &ldquo;I can&apos;t think of anything&rdquo; is information about the question, not about the person answering it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">We Rendered Two Streaming Subscriptions as a Blu-ray Boxset</h2>

              <p>Two things went wrong on our side, and they are the reason there is a human checkpoint in the design.</p>

              <p>Five minutes of that session exist on camera only, because dictation was off and nobody noticed until afterward. Not recoverable from the transcript. The fix is a recording indicator loud enough to be irritating, plus a flag on any silence gap longer than about thirty seconds.</p>

              <p>The second one is worse. A draft written off the transcript rendered a detail about his life as a Blu-ray boxset. It was two streaming subscriptions. Small, plausible, wrong &mdash; which is the exact profile of the error that ruins a first-person piece, because the one reader guaranteed to catch it is the person it claims to be about.</p>

              <p>So every specific a draft asserts about somebody&apos;s life gets surfaced for confirmation before it publishes. Not the draft re-read line by line. A short list of the factual claims, each one confirmable in a tap.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Nine Posts, Not One</h2>

              <p>The decision that made the twenty minutes pay was refusing to write an article.</p>

              <p>The transcript gets processed once, into an inventory of angles. Each angle carries the claim in one sentence, the verbatim quotes behind it with timestamps, the position it argues against, and a status: unused, drafted, published. The generator then pulls the next unused angle instead of hunting for a topic at four in the morning.</p>

              <p>Turn a transcript straight into one finished post and you have discarded most of what the person said. Nine angles came out of that session. This is one of them.</p>

              <p>The voice pass is the other half. Each session appends the new phrasings to a profile &mdash; &ldquo;tabs,&rdquo; &ldquo;showing up and hoping you get noticed,&rdquo; &ldquo;the sound of a stick breaking on a dark trail and your entire body freezes.&rdquo; No style guide we could write would have produced that third one, and it does more work than a page of voice guidelines.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What This Costs You to Check</h2>

              <p>If content leaves your business with your name on it, two questions.</p>

              <p>Where did this week&apos;s topic come from: something you said, or something that was available? And what is the last thing you said out loud that nobody wrote down?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>The hard part of automating somebody&apos;s voice was never the transcription or the writing. It was getting the person to say something worth transcribing, which takes a question built out of what he already told you. We ran it by hand on September 16, lost five minutes to a recording indicator that was too quiet, put one wrong fact in a draft, and got nine posts and a positioning document out of twenty minutes of talking. The machine&apos;s work starts after the interesting part is over.</p>

              <p className="italic text-white/70 pt-4">If you&apos;d like help plugging a recorded interview loop like this into how your own content gets made, <a href="https://trueflow.ai/book-strategy-call" className="text-cyan-400 hover:text-cyan-300 underline">book a strategy call with our team</a>.</p>

              <p className="italic text-white/60 pt-4">First-party: our own recorded founder session (September 16, 2026) and the interview-loop specification written from it (September 17, 2026).</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white/80 text-lg mb-6">
              Want help plugging a recorded interview loop into how your content gets made?
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
