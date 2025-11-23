export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information to provide better services to our users. The types of information we collect include:
              </p>
              <h3 className="font-semibold mb-2">Personal Information:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Email address</li>
                <li>Name (if provided)</li>
                <li>Payment information (processed by Paddle)</li>
              </ul>
              <h3 className="font-semibold mb-2">Usage Information:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Content generation history</li>
                <li>Feature usage patterns</li>
                <li>Device and browser information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. How We Use Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative messages and updates</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and advertisers.
              </p>
              <p className="mb-4">
                We use third-party service providers (Supabase for data storage and Paddle for payment processing) who have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Data Storage and Security</h2>
              <p className="mb-4">
                We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
              <p className="mb-4">
                Your data is stored securely with Supabase, which provides enterprise-grade security and compliance. All payment information is processed securely by Paddle and we never store your payment details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. User Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify or update your personal data</li>
                <li>Delete your personal data</li>
                <li>Restrict or object to our processing of your personal data</li>
                <li>Data portability</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at support@instacontentstudio.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at support@instacontentstudio.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}