'use client'

import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

export default function PrivacyPolicy() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Privacy Policy</h1>

        <div className={`prose prose-lg max-w-none ${isDarkMode ? 'text-white/80' : 'prose-slate text-slate-600'}`}>
          <p className={`text-sm mb-8 ${isDarkMode ? 'text-white/60' : 'text-slate-500'}`}>Last updated: March 20, 2026</p>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>1. Introduction</h2>
            <p>
              TrueFlow AI LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p><strong>TrueFlow AI LLC</strong></p>
              <p>Physical Address: 1621 Central Avenue, Cheyenne, Wyoming 82001</p>
              <p>Email: matt@trueflow.ai</p>
              <p>Phone: (307) 317-4795</p>
            </div>
            <p className="mt-4">
              Our lead machine, outreach, and associated data processing services operate solely within the United States outside California,
              and we automatically exclude California-based business contact records from those offerings. All other platform features operate
              globally and currently have no geographic restrictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>2. Information We Collect</h2>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, such as:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company or organization name and role</li>
              <li>Account credentials and authentication data</li>
              <li>Billing details processed by trusted third-party payment providers</li>
              <li>Content you share with our team (support requests, feedback, or messages)</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Automatically Collected Information</h3>
            <p>When you use our services, we automatically collect certain information, including:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>IP address, device identifiers, and approximate location</li>
              <li>Browser type, operating system, and language preferences</li>
              <li>Pages visited, time spent on our website, and referring URLs</li>
              <li>Usage data and diagnostics to improve performance</li>
            </ul>
            <p>
              Lead machine and outreach datasets are sourced only from U.S. business contacts outside California, and we suppress California
              business contact records during ingestion and processing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide, maintain, and improve our products and services</li>
              <li>Process transactions and send billing or account-related updates</li>
              <li>Deliver onboarding, support, and technical notices</li>
              <li>Respond to inquiries, feedback, or troubleshooting requests</li>
              <li>Send marketing communications (email and SMS) with easy opt-out options</li>
              <li>Send appointment reminders and service notifications via SMS</li>
              <li>Monitor trends and usage to inform product decisions</li>
              <li>Detect, investigate, and prevent fraud or misuse</li>
              <li>Comply with contractual and legal obligations</li>
              <li>Operate lead machine, outreach, and data processing services solely in U.S. jurisdictions outside California, excluding California-based business contact records</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>SMS Communications</h3>
            <p>
              When you provide your mobile phone number and consent to receive SMS messages, we may send you:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Transactional messages (appointment confirmations, reminders, account updates)</li>
              <li>Service notifications and alerts</li>
              <li>Marketing and promotional messages (only with your explicit consent)</li>
            </ul>
            <p>
              <strong>Important SMS Information:</strong>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Message frequency varies based on your service usage and preferences</li>
              <li>Standard message and data rates may apply from your mobile carrier</li>
              <li>Your SMS consent is not shared with third parties for their marketing purposes</li>
              <li>You can opt out at any time by replying STOP to any message</li>
              <li>Reply HELP for assistance or contact us at (307) 317-4795</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>4. Information Sharing and Disclosure</h2>
            <p>We do not sell or rent personal information. We may share data only when necessary:</p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Service Providers:</strong> Trusted vendors who help us operate, subject to confidentiality and security obligations. This includes SMS delivery providers (such as Twilio, GoHighLevel) who transmit messages on our behalf strictly for business operations. These providers are contractually prohibited from using your data for their own purposes.</li>
              <li><strong>Legal Requirements:</strong> When required by applicable law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, financing, or acquisition of all or part of our business.</li>
              <li><strong>Consent:</strong> When you direct us to share information with partners or third parties.</li>
              <li><strong>Aggregated Insights:</strong> Non-identifying analytics used for benchmarking or marketing.</li>
            </ul>
            <p className="mt-4">
              <strong>Third-Party SMS Services:</strong> When you consent to receive SMS communications, your phone number and message content are transmitted through our SMS service providers solely for the purpose of delivering messages to you. Your SMS consent is never shared with third parties for their own marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>5. Data Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect personal information against
              unauthorized access, alteration, disclosure, or destruction. While we strive for industry best practices, no
              method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes outlined here, resolve disputes,
              enforce our agreements, and comply with legal, accounting, or reporting obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>7. Your Rights and Choices</h2>
            <p>
              Because our outreach and prospecting are focused on business contacts, most of the data we collect falls under U.S. state
              exemptions for B2B communications. Even so, you may always contact us to:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Request access to or a copy of information we maintain about you</li>
              <li>Correct or update inaccurate business contact details</li>
              <li>Request deletion where legally permissible</li>
              <li>Opt out of marketing emails using the unsubscribe link provided in every message</li>
            </ul>
            <p>
              We verify requests using information already associated with the business contact record and respond within reasonable timelines
              consistent with applicable U.S. laws that regulate B2B outreach.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>8. Cookies and Tracking Technologies</h2>
            <p>
              We use first- and third-party cookies, device identifiers, and similar tracking technologies to enable core platform
              functionality, remember preferences, analyze traffic, and measure campaign performance. You can adjust cookie settings
              in your browser or opt out of analytics and advertising cookies using industry tools such as the Network Advertising Initiative opt-out page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or integrations. Their privacy practices are governed by their own
              policies, and we encourage you to review those statements before providing information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>10. Compliance Standards</h2>
            <p>
              Our lead machine, outreach, and related data processing services are designed for U.S.-based business-to-business (B2B) outreach outside California.
              We prioritize states that expressly exempt B2B communications from their consumer privacy statutes (for example, the Virginia CDPA,
              Colorado Privacy Act, and similar laws) and avoid collecting consumer data in jurisdictions that do not offer a clear business-contact
              exemption. These geographic limits do not apply to other platform features, which continue to operate globally. Our safeguards include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>CAN-SPAM Act:</strong> Accurate sender details, truthful subject lines, and prominent unsubscribe links with opt-outs honored within 10 business days.</li>
              <li><strong>Telephone Consumer Protection Act (TCPA):</strong> Documented consent for automated dialing or SMS, internal do-not-contact lists, and respect for time-of-day restrictions.</li>
              <li><strong>State B2B Safe Harbor Monitoring:</strong> Ongoing tracking of state laws that distinguish between commercial and consumer contexts to confirm that campaign segments stay within approved categories, with California contacts excluded only from the lead machine and outreach automations.</li>
              <li><strong>Vendor Oversight:</strong> Due diligence on lead providers to confirm that contact data originates from lawful commercial sources with audit trails.</li>
            </ul>
            <p>
              We document our compliance decisions so that clients can review how contacts were sourced, which state exemptions apply, and how opt-outs are enforced.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>11. Facebook Marketing API Integration</h2>
            <p>
              Our platform integrates with Meta's (Facebook's) Marketing API to enable you to create, manage, and publish advertising campaigns
              directly through our service. This integration is designed to streamline your advertising workflow and provide enhanced campaign
              management capabilities.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Data We Access From Facebook</h3>
            <p>When you authorize our application to connect with your Facebook account, we may access:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Your Facebook ad account information and business assets</li>
              <li>Advertising campaign data, including campaign names, budgets, and targeting parameters</li>
              <li>Ad performance metrics and analytics (impressions, clicks, conversions, spend)</li>
              <li>Facebook Pages and business profiles you manage</li>
              <li>Audience lists and custom audience data you've created</li>
              <li>Creative assets (images, videos, ad copy) associated with your campaigns</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>How We Use Facebook Data</h3>
            <p>We use the data accessed through the Facebook Marketing API exclusively to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Create and publish advertising campaigns on your behalf through our platform</li>
              <li>Manage, optimize, and monitor your active ad campaigns</li>
              <li>Provide analytics, reporting, and performance insights within our dashboard</li>
              <li>Synchronize campaign settings and creative assets between our platform and Facebook</li>
              <li>Enable automated campaign optimization and budget management features</li>
              <li>Troubleshoot technical issues and provide customer support</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Data Sharing With Meta Platforms</h3>
            <p>
              To provide our advertising services, we share the following data with Meta Platforms (Facebook):
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Campaign configurations, ad creative content, and targeting parameters you create through our platform</li>
              <li>Budget allocations and bidding strategies you set for your campaigns</li>
              <li>API requests necessary to create, update, or delete campaigns on your behalf</li>
            </ul>
            <p className="mt-4">
              <strong>Important:</strong> We do not sell, rent, or share your Facebook data with third parties for their own marketing purposes.
              All data sharing with Meta is strictly necessary to operate the advertising services you've requested and is governed by Facebook's
              Platform Terms and Data Policy.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Data Storage and Retention</h3>
            <p>
              We temporarily cache certain Facebook data (such as campaign performance metrics) on our servers to improve platform performance
              and enable offline reporting features. This cached data is refreshed regularly and retained only for as long as necessary to
              provide our services. When you disconnect our application from your Facebook account or request data deletion, we remove all
              associated Facebook data from our systems within 30 days.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Your Control and Rights</h3>
            <p>You maintain full control over the data our application can access from your Facebook account:</p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Revoke Access:</strong> You can disconnect our application at any time through Facebook's Settings → Business Integrations page</li>
              <li><strong>Manage Permissions:</strong> Review and modify the specific permissions our app has through Facebook's App Settings</li>
              <li><strong>Request Data Deletion:</strong> Contact us at matt@trueflow.ai to request deletion of all Facebook-related data we've collected</li>
              <li><strong>Download Your Data:</strong> Request a copy of the Facebook data we've stored on your behalf</li>
            </ul>
            <p className="mt-4">
              When you revoke our app's access through Facebook, we will no longer be able to access your Facebook data, and any scheduled
              campaigns or automation workflows will stop immediately.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Compliance With Facebook Platform Policies</h3>
            <p>
              Our use of the Facebook Marketing API is subject to Meta's Platform Terms, Developer Policies, and Advertising Policies. We are
              committed to maintaining compliance with all Facebook platform requirements and promptly addressing any policy violations. For more
              information about how Facebook handles your data, please review Facebook's Privacy Policy at{' '}
              <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                https://www.facebook.com/privacy/policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>12. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.
              If we learn that a child has provided personal information, we will delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>13. International Data Transfers</h2>
            <p>
              Your information may be transferred to servers located in the United States or other jurisdictions where we or our service providers
              operate. We use contractual protections and due diligence to safeguard data during cross-border transfers. International transfers apply
              to platform features that operate globally, while the lead machine, outreach, and related data processing remain U.S.-only and exclude
              California business contact records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy as our services evolve. Material changes will be posted on this page with an updated "Last updated" date,
              and we will notify you through product or email notices when legally required.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>15. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p><strong>TrueFlow AI LLC</strong></p>
              <p>1621 Central Avenue, Cheyenne, Wyoming 82001</p>
              <p>Email: matt@trueflow.ai</p>
              <p>Phone: (307) 317-4795</p>
              <p>Website: www.trueflow.ai</p>
            </div>
            <p className="mt-4">
              <strong>For SMS-related inquiries or to opt out:</strong> Reply STOP to any SMS message or text HELP to (307) 317-4795.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
