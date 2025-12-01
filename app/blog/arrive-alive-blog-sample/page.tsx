'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/components/ThemeProvider'

export default function ArriveAliveBlogSample() {
  const { isDarkMode } = useTheme()
  const logoSrc = isDarkMode ? '/true-flow-logo.webp' : '/true-flow-logo-light-mode.png'
  return (
    <div className="min-h-screen bg-white text-black">
      <style jsx global>{`
        .arrive-alive-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .arrive-alive-header {
          background: linear-gradient(135deg, #dc2626, #000);
          color: white;
          padding: 40px 0;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .arrive-alive-header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .arrive-alive-header .subtitle {
          font-size: 1.2em;
          opacity: 0.9;
        }
        
        .arrive-alive-content h2 {
          color: #dc2626;
          font-size: 1.8em;
          margin: 30px 0 15px 0;
          border-left: 4px solid #dc2626;
          padding-left: 15px;
        }
        
        .arrive-alive-content h3 {
          color: #000;
          font-size: 1.4em;
          margin: 25px 0 10px 0;
        }
        
        .arrive-alive-content p {
          margin-bottom: 15px;
          font-size: 1.1em;
          line-height: 1.6;
        }
        
        .highlight-box {
          background-color: #f8f9fa;
          border: 2px solid #dc2626;
          padding: 20px;
          margin: 25px 0;
          border-radius: 8px;
        }
        
        .highlight-box h3 {
          color: #dc2626;
          margin-top: 0;
        }
        
        .stats-box {
          background: linear-gradient(135deg, #000, #333);
          color: white;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          text-align: center;
        }
        
        .stats-box h3 {
          color: #dc2626;
          font-size: 2em;
          margin-bottom: 10px;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #dc2626, #000);
          color: white;
          padding: 40px;
          text-align: center;
          border-radius: 12px;
          margin: 40px 0;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #fff;
          color: #dc2626;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 1.2em;
          margin: 15px 10px;
          transition: all 0.3s ease;
          border: 2px solid #fff;
        }
        
        .cta-button:hover {
          background-color: #dc2626;
          color: #fff;
          border-color: #fff;
        }
        
        .social-section {
          background-color: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-radius: 8px;
          margin: 30px 0;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin: 20px 0;
        }
        
        .social-link {
          display: inline-block;
          padding: 10px 20px;
          background-color: #000;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
        
        .social-link:hover {
          background-color: #dc2626;
        }
        
        .newsletter-box {
          background: linear-gradient(135deg, #000, #333);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 8px;
          margin: 30px 0;
        }
        
        .newsletter-input {
          padding: 12px;
          border: none;
          border-radius: 4px;
          margin: 10px;
          width: 250px;
          font-size: 1em;
        }
        
        .newsletter-button {
          padding: 12px 25px;
          background-color: #dc2626;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1em;
          cursor: pointer;
          margin: 10px;
          transition: background-color 0.3s ease;
        }
        
        .newsletter-button:hover {
          background-color: #b91c1c;
        }
        
        .author-box {
          background-color: #f8f9fa;
          padding: 25px;
          border-radius: 8px;
          margin: 30px 0;
          border-left: 4px solid #dc2626;
        }
        
        .author-box h3 {
          color: #dc2626;
          margin-bottom: 10px;
        }
        
        .arrive-alive-content ul {
          margin: 15px 0 15px 30px;
        }
        
        .arrive-alive-content li {
          margin-bottom: 8px;
          font-size: 1.1em;
        }
        
        .emphasis {
          color: #dc2626;
          font-weight: bold;
        }
      `}</style>

      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto bg-white border-b border-gray-200">
        <Link href="/" className="flex items-center">
          <Image 
            src={logoSrc} 
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
        <div className="flex items-center gap-4">
          <Link 
            href="/blog" 
            className="px-4 py-2 text-gray-600 hover:text-black transition-colors"
          >
            ← Back to Blog
          </Link>
          <div className="text-sm text-gray-500">Sample for: Arrive Alive Training</div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="arrive-alive-header">
          <div className="arrive-alive-content">
            <h1>The Hidden Liability Every Corporate Safety Manager Should Fear</h1>
            <p className="subtitle">Why Your Current Emergency Training Could Be Putting Lives—and Your Career—at Risk</p>
          </div>
        </div>

        <div className="arrive-alive-content">
          <p><strong>Picture this:</strong> It's 2:30 PM on a Tuesday. Sarah from accounting suddenly collapses at her desk. Her face is blue. She's not breathing. Everyone's looking at you—the safety coordinator—expecting you to know what to do.</p>

          <p>Do you freeze? Do you panic? Or do you spring into action with the confidence that comes from <em>real</em> emergency preparedness training?</p>

          <p>If you're like most corporate safety managers, you've probably checked the "CPR training" box on your compliance list. But here's the uncomfortable truth: <span className="emphasis">most workplace emergency training is outdated, uninspiring, and completely inadequate when real emergencies strike.</span></p>

          <div className="stats-box">
            <h3>395,000</h3>
            <p>Americans suffer cardiac arrest outside of hospitals each year. Less than 40% receive bystander CPR—often because workplace training failed to prepare employees for the real thing.</p>
          </div>

          <h2>The Problem With "Check-the-Box" Training</h2>

          <p>Here's what I see happening in corporate America every single day: Companies invest in the cheapest, most convenient training option available. Employees sit through a boring video, practice on a mannequin for 10 minutes, get their certificate, and everyone feels good about compliance.</p>

          <p>Then reality hits.</p>

          <p>When a real emergency happens, that "trained" employee panics. They can't remember the steps. They're paralyzed by fear. And worst of all? <span className="emphasis">You—the safety coordinator—are the one who gets blamed when the training fails.</span></p>

          <div className="highlight-box">
            <h3>The Real Cost of Inadequate Training</h3>
            <p>It's not just about liability (though OSHA violations can cost up to $156,259 per incident). It's about your reputation, your peace of mind, and ultimately, the lives of the people you're responsible for protecting every single day.</p>
          </div>

          <h2>Why Traditional Training Fails When It Matters Most</h2>

          <p>I'm Josh, the founder of Arrive Alive Training, and I've spent years working as a first responder. I've seen what happens when people are truly prepared—and when they're not. The difference is stark, and it comes down to three critical failures in traditional corporate training:</p>

          <h3>1. One-Size-Fits-All Approaches Don't Work</h3>
          <p>Your accounting team faces different risks than your warehouse staff. Your executives need different skills than your front-line managers. Cookie-cutter training ignores these realities and leaves dangerous gaps in your emergency preparedness.</p>

          <h3>2. No Real-World Application</h3>
          <p>Practicing on a mannequin in perfect conditions is nothing like performing CPR on a colleague who just collapsed in a crowded break room. Most training programs never bridge this gap between theory and real-world application.</p>

          <h3>3. No Ongoing Reinforcement</h3>
          <p>Skills fade fast. Studies show that CPR skills begin deteriorating within just 3-6 months without practice. Yet most companies treat emergency training as a one-and-done annual requirement.</p>

          <h2>A Better Way: Expert-Led Training That Actually Prepares People</h2>

          <p>At Arrive Alive Training, we do things differently. Our approach is built on three core principles that set us apart from every other training provider:</p>

          <div className="highlight-box">
            <h3>Blended Learning That Actually Works</h3>
            <p>Online preparation + hands-on skill mastery = confident, capable responders. Our students complete theory online at their own pace, then practice real scenarios with expert instructors in small groups where everyone gets individual attention.</p>
          </div>

          <h3>Accredited Excellence You Can Trust</h3>
          <p>We're aligned with American Heart Association, American Red Cross, and HSI standards. But we go beyond compliance—we ensure your team truly understands and can apply these life-saving skills under pressure.</p>

          <h3>Realistic, Scenario-Based Training</h3>
          <p>We don't just teach techniques; we create realistic emergency scenarios specific to your workplace. Your team practices responding to the exact situations they might actually face, building muscle memory and confidence that kicks in when every second counts.</p>

          <h2>The Arrive Alive Difference: Why Corporate Safety Managers Choose Us</h2>

          <p><strong>Convenience Without Compromise:</strong> We offer on-site training that fits your schedule, mobile options for multiple locations, and flexible scheduling that doesn't disrupt operations.</p>

          <p><strong>Small Groups, Big Impact:</strong> Our instructors work with small groups, ensuring every participant gets hands-on practice and personalized feedback. No one gets lost in the crowd.</p>

          <p><strong>Ongoing Support:</strong> We don't disappear after certification. Our blended learning platform provides ongoing skill reinforcement, quick refreshers, and updated protocols to keep your team sharp.</p>

          <div className="author-box">
            <h3>Meet Josh: Your Expert Instructor</h3>
            <p>As a certified first responder with years of real-world emergency experience, I know what it takes to save lives under pressure. But more importantly, I know how to teach these skills in a way that's engaging, memorable, and actually sticks. My students don't just pass their certification—they become confident, capable first responders who can act decisively when lives are on the line.</p>
          </div>

          <h2>What Corporate Safety Managers Are Saying</h2>

          <p><em>"Josh's training transformed our workplace culture around safety. Our employees actually feel prepared now, not just certified. When we had a real emergency last month, our team responded flawlessly—and we know it's because of the realistic, hands-on training Josh provided."</em> - Safety Director, Manufacturing Company</p>

          <p><em>"The difference in confidence and competence after Arrive Alive Training was night and day. This isn't just compliance training—it's real preparation that gives me peace of mind as a safety coordinator."</em> - HR Safety Manager, Tech Company</p>

          <h2>Your Team's Safety Can't Wait</h2>

          <p>Every day you delay implementing real emergency preparedness training is another day your team—and your career—are at risk. The next emergency won't wait for convenient timing or budget approvals.</p>

          <p>But here's the good news: <span className="emphasis">getting your team properly trained is easier than you think.</span></p>

          <p>Our Corporate Safety Package includes:</p>
          <ul>
            <li>On-site training for up to 20 employees</li>
            <li>CPR/AED certification for all participants</li>
            <li>Bleeding control and basic first aid training</li>
            <li>Customized scenarios based on your workplace risks</li>
            <li>Compliance documentation and tracking</li>
            <li>12 months of online refresher access</li>
            <li>Emergency response protocol development</li>
          </ul>

          <div className="cta-section">
            <h3>Don't Let Another Day Pass Without Real Protection</h3>
            <p>Your employees trust you to keep them safe. Your company depends on you for compliance and risk management. Give them—and yourself—the confidence that comes from expert-led, hands-on emergency preparedness training.</p>
            
            <a href="#contact" className="cta-button">Schedule Your Corporate Training</a>
            <a href="#quote" className="cta-button">Get Custom Quote</a>
            
            <p style={{marginTop: '20px', fontSize: '0.9em'}}>Call now: <strong>(555) 123-4567</strong> or email <strong>josh@arrivealivetraining.com</strong></p>
          </div>

          <div className="social-section">
            <h3>Follow Arrive Alive Training</h3>
            <p>Join our community for ongoing safety tips, success stories, and emergency preparedness insights:</p>
            <div className="social-links">
              <a href="https://instagram.com/arrivealivetraining" className="social-link">📸 Instagram</a>
              <a href="https://facebook.com/arrivealivetrainingllc" className="social-link">📘 Facebook</a>
              <a href="https://youtube.com/arrivealivetrainingchannel" className="social-link">📹 YouTube</a>
              <a href="https://linkedin.com/company/arrivealivetraining" className="social-link">🖇️ LinkedIn</a>
            </div>
          </div>

          <div className="newsletter-box">
            <h3>Stay Prepared with Our Newsletter</h3>
            <p>Get monthly safety tips, training updates, and emergency preparedness insights delivered to your inbox.</p>
            <form>
              <input type="email" placeholder="Enter your email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-button">Subscribe for Updates</button>
            </form>
            <p style={{fontSize: '0.9em', marginTop: '15px'}}>Join 2,500+ safety professionals who trust Arrive Alive Training for the latest in emergency preparedness.</p>
          </div>

          <p style={{textAlign: 'center', marginTop: '40px', color: '#666', fontStyle: 'italic'}}>Because when emergencies strike, there's no second chance to get it right.</p>

        </div>
      </motion.div>
    </div>
  )
}
