'use client'

import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

export default function TermsOfService() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Terms of Service</h1>

        <div className={`prose prose-lg max-w-none ${isDarkMode ? 'text-white/80' : 'prose-slate text-slate-600'}`}>
          <p className={`text-sm mb-8 ${isDarkMode ? 'text-white/60' : 'text-slate-500'}`}>Last updated: January 13, 2025</p>
          
          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>1. Agreement to Terms</h2>
            <p>
              By accessing or using TrueFlow AI LLC's services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our Services.
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p><strong>TrueFlow AI LLC</strong></p>
              <p>Physical Address: 30 N Gould St Ste R, Sheridan, WY 82801</p>
              <p>Email: matt@trueflow.ai</p>
              <p>Phone: (307) 317-4795</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>2. Description of Services</h2>
            <p>
              TrueFlow AI provides an AI-powered digital assistant platform designed to help businesses automate customer interactions, manage appointments, and streamline operations. Our Services include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>AI chat assistant integration</li>
              <li>Appointment scheduling and management</li>
              <li>Customer communication automation</li>
              <li>Analytics and reporting tools</li>
              <li>Integration with third-party services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>3. Account Registration</h2>
            <p>To use our Services, you must:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <p>
              We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>4. Acceptable Use</h2>
            <p>You agree not to use our Services to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Harass, abuse, or harm others</li>
              <li>Send spam or unauthorized communications</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our Services</li>
              <li>Use our Services for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>5. SMS Communications and Consent</h2>

            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Consent to Receive SMS Messages</h3>
            <p>
              By providing your mobile phone number and opting in to receive SMS messages, you expressly consent to receive text messages from TrueFlow AI LLC at the number provided. This includes:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Transactional messages (appointment confirmations, reminders, account alerts)</li>
              <li>Service notifications and system updates</li>
              <li>Marketing and promotional messages (only with explicit consent)</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-2 mt-4 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Message Frequency and Costs</h3>
            <p>
              Message frequency varies based on your service usage and account settings. Standard message and data rates may apply from your mobile carrier. You are responsible for all charges from your mobile carrier related to SMS messages.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-4 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Opt-Out Instructions</h3>
            <p>
              You may opt out of SMS communications at any time by:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Reply STOP:</strong> Text STOP to any message you receive from us to unsubscribe</li>
              <li><strong>Reply HELP:</strong> Text HELP for assistance or more information</li>
              <li><strong>Contact us:</strong> Email matt@trueflow.ai or call (307) 317-4795</li>
            </ul>
            <p>
              After you send STOP, we will send one final confirmation message and then stop sending SMS messages to your number. You may continue to receive SMS messages briefly while we process your request.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-4 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Supported Carriers</h3>
            <p>
              Our SMS service is supported by major U.S. carriers. If you have questions about your carrier's support or experience delivery issues, text HELP or contact us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>6. Intellectual Property Rights</h2>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Our Property</h3>
            <p>
              All content, features, and functionality of our Services, including but not limited to text, graphics, logos, and software, are owned by TrueFlow AI and protected by intellectual property laws.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-4 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Your Content</h3>
            <p>
              You retain ownership of content you submit to our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with providing our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>7. Payment Terms</h2>
            <p>
              If you purchase a paid subscription:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>You agree to pay all fees according to your selected plan</li>
              <li>Fees are non-refundable unless otherwise stated</li>
              <li>We may change pricing with 30 days' notice</li>
              <li>You authorize us to charge your payment method on a recurring basis</li>
              <li>You are responsible for keeping payment information current</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>8. Disclaimers and Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              We do not warrant that our Services will be uninterrupted, secure, or error-free, or that defects will be corrected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRUEFLOW AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="mt-4">
              Our total liability shall not exceed the amount you paid us in the twelve (12) months prior to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless TrueFlow AI, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of our Services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>11. Data Processing and Privacy</h2>
            <p>
              Your use of our Services is subject to our Privacy Policy. By using our Services, you consent to our collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>12. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>
            <p className="mt-4">
              Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that should reasonably survive termination will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>13. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our Services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in our jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>15. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in our jurisdiction, and judgment on the award may be entered in any court having jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>17. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and TrueFlow AI regarding the use of our Services and supersede any prior agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>18. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p><strong>TrueFlow AI LLC</strong></p>
              <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
              <p>Email: matt@trueflow.ai</p>
              <p>Phone: (307) 317-4795</p>
              <p>Website: www.trueflow.ai</p>
            </div>
            <p className="mt-4">
              <strong>For SMS support:</strong> Reply STOP to opt out or HELP for assistance. You can also text or call (307) 317-4795.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
