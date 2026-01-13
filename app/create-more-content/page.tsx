'use client'

import Link from 'next/link'
import Script from 'next/script'
import {
  Calendar,
  Clock,
  Ticket,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap
} from 'lucide-react'

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-white/70 hover:text-white">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              How to Create More Content Than You Can Handle (In Minutes)
            </h1>
            <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-white/70">
              A live workshop showing you the simple voice-powered workflow that turns one short recording into a week of content -without stress, burnout, or busywork.
            </p>

            <div className="inline-flex flex-col sm:flex-row gap-6 mb-8 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span className="font-semibold text-white">Monday, December 16</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <span className="font-semibold text-white">4:00pm EST</span>
              </div>
              <div className="flex items-center gap-3">
                <Ticket className="w-6 h-6 text-pink-400" />
                <span className="font-semibold text-white">Free Registration</span>
              </div>
            </div>

            <button className="cta-button inline-flex items-center gap-3 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl">
              Save My Spot
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-16 p-4 sm:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <div className="rounded-2xl overflow-hidden bg-black/40">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/AD0sHjDFWbStc5KlOyD6"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="AD0sHjDFWbStc5KlOyD6_1765321577247"
                className="w-full"
                title="TrueFlow Webinar Registration"
              />
            </div>
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </div>

          <section className="mb-16 p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-white">
              If creating content feels like a full-time job you never signed up for… you are not alone.
            </h2>
            <p className="text-lg mb-6 text-white/80">Most business owners are overwhelmed because content requires:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="text-lg text-white/80">Too many steps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="text-lg text-white/80">Too much time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="text-lg text-white/80">Too much rewriting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="text-lg text-white/80">Too much starting from scratch</span>
              </li>
            </ul>
            <p className="text-lg mb-4 text-white/80">And even after all that work, the results often feel… underwhelming.</p>
            <div className="p-6 rounded-xl mt-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <p className="text-xl font-semibold mb-2 text-white">The good news?</p>
              <p className="text-xl font-semibold mb-2 text-white">It is not a you problem.</p>
              <p className="text-xl font-semibold text-white">It is a workflow problem.</p>
              <p className="text-lg mt-4 font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                This workshop shows you the new way.
              </p>
            </div>
          </section>

          <section className="mb-16 p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              What You Will Learn
            </h2>
            <p className="text-lg mb-8 text-white/80">In this live 45–60 minute session, you will discover:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Why content has felt overwhelming (and why discipline is not the problem)</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">How to turn one voice note into emails, social posts, and blogs</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">The 4-step TrueFlow Constant Content Engine™ workflow</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">How to build a simple content calendar that keeps you consistent</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">How creators are producing more content while spending less time creating</span>
              </li>
            </ul>
            <p className="text-lg font-semibold text-white">
              You will walk away with a clear, repeatable method for staying consistent -even if you have struggled for months or hate writing.
            </p>
          </section>

          <section className="mb-16 p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Who This Is For
            </h2>
            <p className="text-lg mb-6 text-white/80">This workshop is perfect if you are:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Tired of feeling behind on content</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Frustrated that your posting is not actually driving results</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Overwhelmed by the blank screen</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Ready to show up consistently with content you are proud of</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Curious how AI can support your business without making you sound like a robot</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-white">If you want your content to finally feel easy, this is your event.</p>
          </section>

          <section className="mb-16 p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              What Makes This Different
            </h2>
            <p className="text-lg mb-6 text-white/80">This is not a theoretical content strategy talk.</p>
            <p className="text-lg mb-6 text-white/80">This is a <strong className="text-white">live demonstration</strong> of a voice-powered workflow that:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Captures your ideas in seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Turns them into polished content in your actual voice</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Schedules everything at optimal times</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Keeps you consistent even when life gets busy</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-white">You are going to see it in action -step by step.</p>
          </section>

          <section className="mb-16 p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              The Result
            </h2>
            <p className="text-lg mb-6 text-white/80">By the end of the workshop, you will know how to:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Generate more content than you can handle</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Hit publish without stress</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Stay consistent without spending hours creating</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Build a presence and brand that finally reflect your expertise</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-white">If you want content to feel light, fast, and under control… you do not want to miss this.</p>
          </section>

          <section className="mb-16 p-8 rounded-2xl backdrop-blur-md border-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/50">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Bonus for Attending Live
            </h2>
            <p className="text-lg mb-6 text-white/80">
              Everyone who attends live gets access to a <strong className="text-white">14-Day TrueFlow Content Engine Test Drive</strong>, including:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Brand voice learning</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Newsletter + blog + social content generation</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Smart scheduling and auto-publishing</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">Advanced analytics dashboard</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-white">Come see the workflow, then try it yourself.</p>
          </section>

          <section className="p-12 rounded-2xl backdrop-blur-md text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
                <div className="flex items-center gap-3 justify-center">
                  <Calendar className="w-7 h-7 text-cyan-400" />
                  <span className="font-bold text-xl text-white">Monday, December 16</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Clock className="w-7 h-7 text-purple-400" />
                  <span className="font-bold text-xl text-white">4:00pm EST</span>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center mb-8">
                <Ticket className="w-7 h-7 text-pink-400" />
                <span className="font-bold text-xl text-white">Free to attend  - limited spots</span>
              </div>
            </div>
            <button className="cta-button inline-flex items-center gap-3 text-white px-12 py-6 rounded-full font-bold text-2xl shadow-2xl mb-6">
              Save My Spot Now
              <ArrowRight className="w-7 h-7" />
            </button>
            <p className="text-sm text-white/60">Can not attend live? Register anyway -we will send the replay.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
