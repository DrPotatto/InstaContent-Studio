export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using InstaContent Studio ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Use of Service</h2>
              <p className="mb-4">
                InstaContent Studio provides AI-powered content creation tools for Instagram. You may use the Service for lawful purposes only and in accordance with these Terms.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>You must be at least 13 years old to use the Service</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You may not use the Service for any illegal or unauthorized purpose</li>
                <li>You may not reproduce, duplicate, copy, or resell the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Subscription and Payments</h2>
              <p className="mb-4">
                The Service is offered on a subscription basis. By subscribing, you agree to pay the applicable fees using our payment processor Paddle.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Fees are billed in advance on a recurring basis</li>
                <li>All fees are exclusive of applicable taxes</li>
                <li>You can cancel your subscription at any time</li>
                <li>No refunds are provided for partial billing periods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Content Ownership</h2>
              <p className="mb-4">
                You retain all rights to the content you create using our Service. By using the Service, you grant us a limited license to store and display your content solely for the purpose of providing the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are owned by InstaContent Studio and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall InstaContent Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at support@instacontentstudio.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}