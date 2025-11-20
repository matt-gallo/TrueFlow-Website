'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/true-flow-logo.webp"
              alt="TrueFlow"
              width={280}
              height={70}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform"
              priority
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-white/80 hover:text-white transition-colors"
          >
            ← Back to Blog
          </Link>
        </nav>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                The Lead Machine: How AI-Powered Storytelling Creates Meaningful Connections
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8">Why authentic stories, not algorithms, are the secret to turning strangers into clients</p>

            {/* Author Section */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image
                src="/avatars/matt-gallo.jpg"
                alt="Matt Gallo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Matt Gallo</p>
                <p className="text-white/60 text-sm">Operations & Creative Director</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 mb-8">
              <span>November 20, 2025</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>AI & Lead Generation</span>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('The Lead Machine: How AI-Powered Storytelling Creates Meaningful Connections 🤖📖\n\nDiscover why authentic stories matter more than automation when connecting with clients.\n\n#AI #LeadGeneration #Storytelling')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </a>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                I've spent the last decade watching business owners make the same mistake over and over again: they treat lead generation like it's a numbers game.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                More traffic. More ads. More automation. More, more, more.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                And you know what? It doesn't work. Not sustainably. Not meaningfully. Not in a way that builds real relationships with the people who actually become your best clients.
              </p>
              <p className="text-white/80 leading-relaxed">
                That's why we built the Lead Machine. Not as another automation tool, but as a storytelling engine powered by AI.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">The Problem: Everyone Sounds the Same</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Walk through any industry right now and you'll see it: every business sounds identical.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                "We're passionate about helping you succeed."<br />
                "We deliver results-driven solutions."<br />
                "Your success is our mission."
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Bland. Generic. Forgettable.
              </p>
              <p className="text-white/80 leading-relaxed">
                Here's the truth: <strong className="text-white">people don't connect with features, they connect with stories.</strong> They don't buy from businesses that sound like everyone else—they buy from businesses that understand them, that share their values, that have walked their path.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">What Makes the Lead Machine Different</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                The Lead Machine isn't about pumping out generic content. It's about using AI to help you tell your story in a way that resonates with the exact people you're trying to reach.
              </p>

              <div className="space-y-6 mb-6">
                <div className="p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">1. It Learns Your Voice</h3>
                  <p className="text-white/80 leading-relaxed">
                    Not some corporate robot voice. YOUR voice. The way you actually talk to clients. The phrases you use. The stories you tell. The Lead Machine learns this and amplifies it across every piece of content.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">2. It Tells Stories That Matter</h3>
                  <p className="text-white/80 leading-relaxed">
                    Every email, every blog post, every social update is crafted to tell a story. Not just "buy this thing" but "here's why this matters to you, here's how we've helped people like you, here's what's possible."
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-pink-400">3. It Creates Connection, Not Just Clicks</h3>
                  <p className="text-white/80 leading-relaxed">
                    The goal isn't to get someone to click. It's to get them to FEEL something. To recognize themselves in your story. To think "wow, they really get it." That's when leads become clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Example */}
            <div className="mb-12 p-6 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">A Real Example</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Take one of our clients—a driving school in Staten Island. Before TrueFlow, their marketing was all features:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-white/70 mb-4">
                "We offer defensive driving courses. Certified instructors. Flexible scheduling."
              </blockquote>
              <p className="text-white/80 leading-relaxed mb-4">
                Boring, right? But here's the thing: the owner, Josh, had an incredible story. He'd survived a serious accident as a teenager. That experience drove him to become an instructor—not just to teach people to drive, but to <em>keep them alive</em>.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                The Lead Machine helped Josh tell that story. Every email, every post shared pieces of his journey. Parents started reaching out saying, "This is exactly who I want teaching my kid."
              </p>
              <p className="text-white font-semibold">
                That's not automation. That's human connection, scaled.
              </p>
            </div>

            {/* Why Storytelling Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Why Storytelling Works in Lead Generation</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Neuroscience backs this up. When we hear a good story, our brains release oxytocin—the chemical that creates trust and empathy. Stories literally make us care.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                But here's the challenge: telling good stories consistently is HARD. It takes time, creativity, and intention. That's where AI comes in.
              </p>
              <p className="text-white/80 leading-relaxed">
                The Lead Machine doesn't replace your story—it amplifies it. It helps you find the right angle, the right words, the right moment to connect with someone who needs what you offer.
              </p>
            </div>

            {/* How It Actually Works */}
            <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">How It Actually Works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Step 1: We Capture Your Voice</h3>
                  <p className="text-white/80 leading-relaxed">
                    Through a simple onboarding process, we learn how you talk, what stories you tell, what matters to you. This becomes the foundation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Step 2: AI Crafts Your Content</h3>
                  <p className="text-white/80 leading-relaxed">
                    The Lead Machine generates emails, social posts, and blog content that sounds like you. Every piece tells a story, shares value, and invites connection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-pink-400">Step 3: You Review and Refine</h3>
                  <p className="text-white/80 leading-relaxed">
                    Nothing goes out automatically. You review everything, make it yours, and hit send. You stay in control while AI handles the heavy lifting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">Step 4: Leads Become Relationships</h3>
                  <p className="text-white/80 leading-relaxed">
                    Over time, people start to recognize your voice. They feel like they know you. When they're ready to buy, you're the obvious choice—not because you automated them into submission, but because you earned their trust.
                  </p>
                </div>
              </div>
            </div>

            {/* The Bigger Picture */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">The Bigger Picture: AI as a Tool for Humanity</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                There's a lot of fear around AI right now. People worry it'll make everything robotic, impersonal, soulless.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                I see it differently. AI doesn't have to dehumanize us. Used right, it can make us MORE human.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                Think about it: as a business owner, how much time do you spend on tasks that don't move the needle? Scheduling posts, rewriting emails, trying to come up with fresh content ideas. That's exhausting. And it keeps you from doing what actually matters—connecting with clients, refining your offer, building relationships.
              </p>
              <p className="text-white/80 leading-relaxed">
                The Lead Machine gives you that time back. It handles the repetitive stuff so you can focus on the human stuff. That's the whole point.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="mb-12 p-8 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-2 border-cyan-500/30 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Final Thoughts: Build a Business People Actually Want to Buy From</h2>
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                At the end of the day, people don't buy from businesses. They buy from people.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                They buy from someone who understands their problem, who's walked a similar path, who can help them get where they want to go. That's what storytelling does. It reveals the human behind the business.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                The Lead Machine is our way of scaling that. Of helping you show up consistently, authentically, powerfully—without burning out or sacrificing your humanity.
              </p>
              <p className="text-white font-semibold text-xl">
                Because lead generation isn't about tricking people into clicking. It's about creating real connections with the people who need what you offer.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center py-12">
              <p className="text-white/80 mb-6 text-lg">
                Want to see how AI-powered storytelling can transform your lead generation?
              </p>
              <Link
                href="/sign-up"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                Try TrueFlow's Lead Machine
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  )
}
