'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptInModal from './OptInModal';
import { AssessmentPopup } from '../components/AssessmentPopup';

export default function GymCaseStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasOptedIn, setHasOptedIn] = useState(true); // Temporarily true for preview

  const handleOptInSuccess = () => {
    setHasOptedIn(true);
    setIsModalOpen(false);
    // Scroll to case study section
    setTimeout(() => {
      document.getElementById('case-study-content')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AssessmentPopup />
      {/* Background Effects - Subtle atmospheric imagery */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent blur-3xl" />
      </div>

      {/* SECTION 1 - HERO / ABOVE THE FOLD */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT COLUMN - TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Headline (H1) */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  How a CrossFit gym added 10 new members per month
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  without manual follow-up or owner involvement
                </span>
              </h1>

              {/* Subhead (H2) */}
              <h2 className="text-xl md:text-2xl text-white/70 font-light">
                Built for single-location CrossFit and functional fitness gyms with small teams.
              </h2>

              {/* Micro-credibility line */}
              <p className="text-sm text-white/50">
                Based on a real gym using automated follow-up and scheduling.
              </p>
            </motion.div>

            {/* RIGHT COLUMN - VSL EMBED */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 aspect-video">
                {/* Video Placeholder - Replace with actual embed URL when ready */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="text-center space-y-4 px-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white/50 text-sm">
                      Video will be embedded here
                    </p>
                  </div>
                </div>

                {/* When you have the video, replace the above div with an iframe like this: */}
                {/*
                <iframe
                  src="YOUR_VIDEO_EMBED_URL_HERE"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>
            </motion.div>
          </div>

          {/* SECTION 2 - CTA + OPT-IN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              See the Full Case Study
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* PAGE 2 - CASE STUDY CONTENT (Hidden until opt-in) */}
      <AnimatePresence>
        {hasOptedIn && (
          <motion.section
            id="case-study-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            className="relative px-6 py-24 bg-black"
          >
            <div className="max-w-3xl mx-auto space-y-16">

              {/* SECTION 1 - HERO / CONTEXT */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  How a CrossFit gym added 10 new members per month<br />
                  without manual follow-up or owner involvement
                </h1>
                <p className="text-lg text-white/60">
                  A real breakdown of what changed, what didn&apos;t, and why it worked.
                </p>
                <p className="text-sm text-white/40">
                  Gym type: CrossFit · Single location · Owner-coached · Small team
                </p>
              </div>

              {/* SECTION 2 - CASE STUDY VIDEO */}
              <div className="w-full">
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 aspect-video">
                  {/* Video Placeholder - Replace with actual case study video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <div className="text-center space-y-4 px-6">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-white/50 text-sm">
                        Case study video (8-12 minutes)
                      </p>
                    </div>
                  </div>
                  {/* Replace with actual embed:
                  <iframe
                    src="YOUR_CASE_STUDY_VIDEO_URL"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                  */}
                </div>
              </div>

              {/* SECTION 3 - THE SITUATION (BEFORE) */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">The situation before</h2>
                <div className="text-lg text-white/80 leading-relaxed space-y-4">
                  <p>The gym already had demand.</p>
                  <p>People were finding the website.<br />
                  DMs were coming in.<br />
                  Referrals were happening.</p>
                  <p>The problem was handling it consistently.</p>
                  <p>Leads came in while classes were running.<br />
                  Follow-up happened late or not at all.<br />
                  No-shows were common.</p>
                  <p>Growth depended on the owner being available.</p>
                </div>
              </div>

              {/* SECTION 4 - WHAT CHANGED (THE SYSTEM) */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left Column - Copy */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">What changed</h2>
                  <div className="text-lg text-white/80 leading-relaxed space-y-4">
                    <p>Nothing new was added to the gym&apos;s workload.</p>
                    <p>Instead:</p>
                    <ul className="space-y-2 list-none">
                      <li>• Follow-up was automated</li>
                      <li>• Intros were scheduled automatically</li>
                      <li>• No-shows were handled without manual effort</li>
                      <li>• Leads were tracked in one place</li>
                    </ul>
                    <p>The owner stopped being the safety net.</p>
                  </div>
                </div>

                {/* Right Column - Visual Placeholder */}
                <div className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-white/40 text-sm text-center">
                      Screenshot placeholder:<br />
                      • Intro calendar filled, or<br />
                      • Lead → Intro → Member pipeline, or<br />
                      • Automated messages (blurred)
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 5 - RESULTS */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">The result</h2>
                <div className="text-lg text-white/80 leading-relaxed space-y-4">
                  <ul className="space-y-2 list-none">
                    <li>• 10 new members per month added consistently</li>
                    <li>• Intros booked without manual follow-up</li>
                    <li>• Fewer no-shows</li>
                    <li>• Owner removed from day-to-day lead handling</li>
                  </ul>
                  <p>The gym didn&apos;t grow by working harder.<br />
                  It grew by removing friction.</p>
                </div>
              </div>

              {/* SECTION 6 - WHY THIS WORKED */}
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white">Why this worked</h2>
                <div className="text-lg text-white/80 leading-relaxed space-y-4">
                  <p>This didn&apos;t work because of better ads or better copy.</p>
                  <p>It worked because the system matched how gyms actually operate:</p>
                  <ul className="space-y-2 list-none">
                    <li>• Live classes</li>
                    <li>• Limited owner availability</li>
                    <li>• Small teams</li>
                    <li>• No dedicated front desk</li>
                  </ul>
                  <p>Follow-up and scheduling were handled automatically, even when the owner was coaching.</p>
                  <p>That consistency is what created predictable growth.</p>
                </div>
              </div>

              {/* SECTION 7 - WHO THIS IS FOR (FILTER) */}
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="text-lg text-white/80 leading-relaxed space-y-4">
                  <p>This system fits gyms that:</p>
                  <ul className="space-y-2 list-none">
                    <li>• Run live classes</li>
                    <li>• Have a single location</li>
                    <li>• Want predictable member growth</li>
                    <li>• Don&apos;t want the owner handling follow-up forever</li>
                  </ul>
                  <p className="text-white/60">If that&apos;s not your goal, this won&apos;t be a fit.</p>
                </div>
              </div>

              {/* SECTION 8 - CTA (DEMO BOOKING) */}
              <div className="border-t border-white/10 pt-16 space-y-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  See if this would work for your gym
                </h2>
                <button className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                  Book a 15-Minute Walkthrough
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-sm text-white/50">
                  A real look at how this would be installed in your gym.<br />
                  Clear yes or no.
                </p>
              </div>

              {/* OPTIONAL SECTION - SECONDARY PROOF */}
              <div className="border-t border-white/10 pt-8 max-w-2xl mx-auto">
                <blockquote className="text-lg text-white/70 italic text-center">
                  &ldquo;Once this was installed, leads were handled even while classes were running. That changed everything.&rdquo;
                </blockquote>
              </div>

            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Opt-in Modal */}
      <OptInModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleOptInSuccess}
      />
    </div>
  );
}
