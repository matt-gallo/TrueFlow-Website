import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg prose-slate max-w-none text-slate-600">
          <p className="text-sm text-slate-500 mb-8">Last updated: March 15, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              TrueFlow AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, such as:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company or organization name and role</li>
              <li>Account credentials and authentication data</li>
              <li>Billing details processed by trusted third-party payment providers</li>
              <li>Content you share with our team (support requests, feedback, or messages)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">Automatically Collected Information</h3>
            <p>When you use our services, we automatically collect certain information, including:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>IP address, device identifiers, and approximate location</li>
              <li>Browser type, operating system, and language preferences</li>
              <li>Pages visited, time spent on our website, and referring URLs</li>
              <li>Usage data and diagnostics to improve performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide, maintain, and improve our products and services</li>
              <li>Process transactions and send billing or account-related updates</li>
              <li>Deliver onboarding, support, and technical notices</li>
              <li>Respond to inquiries, feedback, or troubleshooting requests</li>
              <li>Send marketing communications with easy opt-out options</li>
              <li>Monitor trends and usage to inform product decisions</li>
              <li>Detect, investigate, and prevent fraud or misuse</li>
              <li>Comply with contractual and legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p>We do not sell or rent personal information. We may share data only when necessary:</p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Service Providers:</strong> Trusted vendors who help us operate, subject to confidentiality and security obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by applicable law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, financing, or acquisition of all or part of our business.</li>
              <li><strong>Consent:</strong> When you direct us to share information with partners or third parties.</li>
              <li><strong>Aggregated Insights:</strong> Non-identifying analytics used for benchmarking or marketing.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect personal information against
              unauthorized access, alteration, disclosure, or destruction. While we strive for industry best practices, no
              method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes outlined here, resolve disputes,
              enforce our agreements, and comply with legal, accounting, or reporting obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Your Rights and Choices</h2>
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
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Cookies and Tracking Technologies</h2>
            <p>
              We use first- and third-party cookies, device identifiers, and similar tracking technologies to enable core platform
              functionality, remember preferences, analyze traffic, and measure campaign performance. You can adjust cookie settings
              in your browser or opt out of analytics and advertising cookies using industry tools such as the Network Advertising Initiative opt-out page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or integrations. Their privacy practices are governed by their own
              policies, and we encourage you to review those statements before providing information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Compliance Standards</h2>
            <p>
              Our services are designed for U.S.-based business-to-business (B2B) outreach. We prioritize states that expressly exempt
              B2B communications from their consumer privacy statutes (for example, the Virginia CDPA, Colorado Privacy Act, and similar laws)
              and avoid collecting consumer data in jurisdictions that do not offer a clear business-contact exemption. Our safeguards include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>CAN-SPAM Act:</strong> Accurate sender details, truthful subject lines, and prominent unsubscribe links with opt-outs honored within 10 business days.</li>
              <li><strong>Telephone Consumer Protection Act (TCPA):</strong> Documented consent for automated dialing or SMS, internal do-not-contact lists, and respect for time-of-day restrictions.</li>
              <li><strong>State B2B Safe Harbor Monitoring:</strong> Ongoing tracking of state laws that distinguish between commercial and consumer contexts to confirm that campaign segments stay within approved categories.</li>
              <li><strong>Vendor Oversight:</strong> Due diligence on lead providers to confirm that contact data originates from lawful commercial sources with audit trails.</li>
            </ul>
            <p>
              We document our compliance decisions so that clients can review how contacts were sourced, which state exemptions apply, and how opt-outs are enforced.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.
              If we learn that a child has provided personal information, we will delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. International Data Transfers</h2>
            <p>
              Your information may be transferred to servers located in the United States or other jurisdictions where we or our service providers
              operate. We use contractual protections and due diligence to safeguard data during cross-border transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy as our services evolve. Material changes will be posted on this page with an updated "Last updated" date,
              and we will notify you through product or email notices when legally required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:
            </p>
            <div className="mt-4">
              <p><strong>TrueFlow AI</strong></p>
              <p>Email: matt@trueflow.ai</p>
              <p>Website: www.trueflow.ai</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
