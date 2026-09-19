'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function BlogPost() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  const slug = 'six-figure-vehicle-video-six-views'
  const url = `https://trueflow.ai/blog/${slug}`
  const title = "A Six-Figure Vehicle Had a Video With Six Views. Nothing Needed to Be Filmed Again."

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
              <span className="text-white/50 text-sm">September 19, 2026</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-white/50 text-sm">4 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              A Six-Figure Vehicle Had a Video With Six Views. Nothing Needed to Be Filmed Again.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A client already owned a walkaround video of every unit on the lot, fifty shop photographs and twenty-five drone shots. None of it had been aimed at anyone. The gap between what that business owned and what its buyers could see was never a production problem.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on X</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Share on LinkedIn</button>
              <button onClick={() => navigator.clipboard.writeText(url)} className="text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all">Copy Link</button>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>In late August we spent two days writing a six-month marketing plan for a client who sells used commercial vehicles. The units go for six figures. The buyer is usually several states away and will commit the money without ever standing next to the machine.</p>

              <p>On the second day, going through what they already owned, we found a walkaround video of every vehicle on the lot. Silent. About six views each.</p>

              <p>Nobody needed that explained to them. What took longer to say out loud is that it was not a production problem, and that filming more would have made it worse.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Ours First: Forty-Six Posts Behind One Photograph of a Laptop</h2>

              <p>Before diagnosing anybody else, ours.</p>

              <p>This blog publishes on a schedule, written by an agent, committed without a human in the loop. For a stretch this summer every post it shipped carried the same stock photograph of an orange laptop, because the publisher had one image hardcoded and nothing checked. Forty-six posts went out that way before anyone noticed.</p>

              <p>The pipeline was working exactly as written. The commit succeeded every morning. What nobody did was open the listing page and look at it.</p>

              <p>That is the same failure as six views, and it has nothing to do with capability. Somebody made the thing. Nobody decided who it was for, and nobody looked at it afterward.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Fifty Photographs, Twenty-Five Drone Shots, and Nothing From a Single Customer</h2>

              <p>The folder had more in it than the videos.</p>

              <p>About fifty photographs of the shop floor and the mechanics working. Twenty-five drone shots of the yard. Taken deliberately, paid for, never published anywhere. And years of customers satisfied enough to come back and buy a second unit, with not one sentence from any of them written down.</p>

              <p>So the business had the evidence a nervous buyer needs and no path for that evidence to reach him. That is not a content gap. It is a routing gap, and the two get treated as the same thing constantly, because only one of them has a vendor attached.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">What We Did Before Anybody Filmed Anything</h2>

              <p>The order mattered more than the list.</p>

              <p>First we wrote down the buyer&apos;s actual sentence &mdash; <em>I am about to spend six figures on a machine I cannot stand next to, and my name is on the decision.</em> Everything the business owned got read against that one line. Most of it answered a question nobody was asking.</p>

              <p>Then the silent videos got a voice track over the existing footage, recorded by a man on staff who spent forty years on the buyer&apos;s side of the desk, saying what he would check if he were still the one buying. Same footage. Nothing re-shot.</p>

              <p>The photographs went out as they were. The testimonials got collected by sending an email and asking, which is a Tuesday, not a project.</p>

              <p>None of that required a new tool, which is why it is the work least likely to be proposed to you. Production has a line item on an invoice. Opening a folder does not.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">A Model Can Make Nine More. It Cannot Make the One.</h2>

              <p>This is the point where the reflex is to aim a model at the problem, and the reflex is not stupid. A model will cut that footage, write the descriptions, and produce nine variants by Friday. We build those systems and we will build you one.</p>

              <p>It still cannot manufacture the thing the buyer is short of, which is evidence that this specific machine is what you said it is. Forrester&apos;s 2026 B2B predictions, published October 28, 2025, found 19% of buyers using AI applications felt <em>less</em> confident in a purchase because of unreliable information they got from one. More generated material pointed at a buyer already in that state is not neutral. It is noise with your name on it.</p>

              <p>Footage of a man who has done the job for forty years walking around a vehicle and saying what he would check is not content. It is the closest that buyer gets to standing in the yard, and no amount of volume substitutes for it.</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">The Question Worth Twenty Minutes</h2>

              <p>Not what to make next.</p>

              <p>What have you already paid to have made that nobody outside your company has ever seen &mdash; and who, specifically, was it for?</p>

              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent pt-4">Takeaway</h2>

              <p>The videos were fine. The photographs were fine. The customers were willing to say so. What was missing was a decision about who each asset was for and somebody looking at the output afterward. We shipped forty-six posts behind the same picture of a laptop before we applied that to ourselves.</p>

              <p className="italic text-white/70 pt-4">Get one operational fix like this in your inbox every week &mdash; <a href="https://trueflow.ai/subscribe" className="text-cyan-400 hover:text-cyan-300 underline">subscribe here</a>.</p>

              <p className="italic text-white/60 pt-4">First-party: a client marketing plan we wrote on August 28, 2026, and our own blog publishing logs from August 2026. External: Forrester&apos;s 2026 B2B Marketing, Sales, and Product Predictions, published October 28, 2025.</p>
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
