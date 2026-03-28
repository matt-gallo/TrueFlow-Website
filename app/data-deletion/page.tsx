'use client'

import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useTheme } from '../components/ThemeProvider'

export default function DataDeletion() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Data Deletion Instructions</h1>

        <div className={`prose prose-lg max-w-none ${isDarkMode ? 'text-white/80' : 'prose-slate text-slate-600'}`}>
          <p className={`text-sm mb-8 ${isDarkMode ? 'text-white/60' : 'text-slate-500'}`}>Last updated: March 20, 2026</p>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Overview</h2>
            <p>
              This page provides instructions for requesting deletion of data collected by TrueFlow AI through our Facebook/Meta
              Marketing API integration. We are committed to providing you with full control over your data and honoring all
              deletion requests in a timely manner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>What Data Is Collected</h2>
            <p>
              When you connect your Facebook account to TrueFlow AI, we may collect and store the following data:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Your Facebook ad account information and business assets</li>
              <li>Advertising campaign data (campaign names, budgets, targeting parameters)</li>
              <li>Ad performance metrics and analytics (impressions, clicks, conversions, spend)</li>
              <li>Facebook Pages and business profiles you manage</li>
              <li>Audience lists and custom audience data</li>
              <li>Creative assets associated with your campaigns</li>
            </ul>
            <p className="mt-4">
              For a complete description of our data practices, please see our{' '}
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>How to Request Data Deletion</h2>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Option 1: Disconnect the App via Facebook</h3>
            <p>
              The easiest way to request deletion of your Facebook-related data is to disconnect our application through Facebook:
            </p>
            <ol className="list-decimal ml-6 mb-4">
              <li>Log into your Facebook account</li>
              <li>Go to <strong>Settings & Privacy</strong> → <strong>Settings</strong></li>
              <li>Click <strong>Business Integrations</strong> in the left menu</li>
              <li>Find "Claude Code API Interface" in the list</li>
              <li>Click <strong>Remove</strong> or <strong>View and Edit</strong> → <strong>Remove</strong></li>
              <li>Confirm the removal</li>
            </ol>
            <p className="mt-4">
              When you disconnect our app through Facebook, we will automatically delete all Facebook-related data within 30 days.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>Option 2: Contact Us Directly</h3>
            <p>
              You can also request data deletion by contacting us directly:
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p><strong>TrueFlow AI LLC</strong></p>
              <p>Email: <a href="mailto:matt@trueflow.ai" className="text-cyan-400 hover:text-cyan-300">matt@trueflow.ai</a></p>
              <p>Phone: (307) 317-4795</p>
              <p>Address: 1621 Central Avenue, Cheyenne, Wyoming 82001</p>
            </div>
            <p className="mt-4">
              When contacting us, please include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Your full name</li>
              <li>Email address associated with your TrueFlow AI account</li>
              <li>Facebook account or business name (if applicable)</li>
              <li>Subject line: "Data Deletion Request - Facebook Integration"</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Deletion Timeline</h2>
            <p>
              Upon receiving your deletion request (either through Facebook disconnection or direct contact):
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Immediate:</strong> Access to your Facebook data through our platform will be revoked</li>
              <li><strong>Within 24 hours:</strong> You will receive confirmation of your deletion request</li>
              <li><strong>Within 30 days:</strong> All Facebook-related data will be permanently deleted from our systems</li>
            </ul>
            <p className="mt-4">
              Please note that some data may be retained for a limited time if required by law or for legitimate business purposes
              (such as resolving disputes or preventing fraud), but this will be clearly communicated to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>What Happens After Deletion</h2>
            <p>
              After your data deletion request is processed:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>We will no longer have access to your Facebook account or business data</li>
              <li>Any active advertising campaigns managed through our platform will stop immediately</li>
              <li>Campaign performance data and analytics will be removed from our systems</li>
              <li>You will need to reconnect your Facebook account if you wish to use our Facebook integration features again</li>
            </ul>
            <p className="mt-4">
              <strong>Important:</strong> Deleting data from TrueFlow AI does not delete your campaigns or data from Facebook itself.
              Your Facebook ads and data will remain on Facebook's platform and can be managed through Facebook's native tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Verifying Your Identity</h2>
            <p>
              To protect your privacy and security, we may need to verify your identity before processing a deletion request.
              This may involve:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Confirming your email address matches our records</li>
              <li>Asking security questions about your account</li>
              <li>Requesting additional identifying information</li>
            </ul>
            <p className="mt-4">
              This verification process helps ensure that only authorized individuals can request deletion of account data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Additional Resources</h2>
            <p>
              For more information about our data practices:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</a> - Complete details on data collection and usage</li>
              <li><a href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">Terms of Service</a> - User rights and responsibilities</li>
              <li><a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Facebook Privacy Policy</a> - How Facebook handles your data</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Questions or Concerns?</h2>
            <p>
              If you have any questions about the data deletion process or our data practices, please don't hesitate to contact us:
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p><strong>TrueFlow AI LLC</strong></p>
              <p>1621 Central Avenue, Cheyenne, Wyoming 82001</p>
              <p>Email: <a href="mailto:matt@trueflow.ai" className="text-cyan-400 hover:text-cyan-300">matt@trueflow.ai</a></p>
              <p>Phone: (307) 317-4795</p>
              <p>Website: <a href="https://www.trueflow.ai" className="text-cyan-400 hover:text-cyan-300">www.trueflow.ai</a></p>
            </div>
            <p className="mt-4">
              We typically respond to all inquiries within 1-2 business days.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
