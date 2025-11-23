export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">14-Day Money-Back Guarantee</h2>
              <p className="mb-4">
                We want you to be completely satisfied with your purchase of InstaContent Studio Pro. If you're not happy with our service, we offer a 14-day money-back guarantee for annual subscriptions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800 font-semibold">
                  💡 Monthly subscriptions can be canceled at any time and won't renew, but are not eligible for refunds of the current billing period.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Eligibility for Refunds</h2>
              <p className="mb-4">To be eligible for a refund:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Your refund request must be within 14 days of your initial purchase</li>
                <li>You must have an annual subscription plan</li>
                <li>You must contact us directly at support@instacontentstudio.com</li>
                <li>Refunds are not available for partial months or years of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Non-Refundable Situations</h2>
              <p className="mb-4">We cannot provide refunds in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Monthly subscription plans (you can cancel to prevent future charges)</li>
                <li>Requests made after 14 days of purchase</li>
                <li>Unused portion of subscription if you cancel mid-term</li>
                <li>Change of mind after extensive use of the service</li>
                <li>Violation of our Terms of Service resulting in account suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">How to Request a Refund</h2>
              <p className="mb-4">
                To request a refund, please contact our support team at support@instacontentstudio.com with:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Your account email address</li>
                <li>Date of purchase</li>
                <li>Reason for refund request</li>
              </ul>
              <p className="mb-4">
                We typically process refunds within 5-7 business days. The refund will be issued to the original payment method.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Subscription Cancellation</h2>
              <p className="mb-4">
                You can cancel your subscription at any time from your account dashboard. Canceling your subscription will stop future charges but will not generate a refund for the current billing period.
              </p>
              <p className="mb-4">
                After cancellation, you'll retain access to Pro features until the end of your current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technical Issues</h2>
              <p className="mb-4">
                If you're experiencing technical issues that prevent you from using our service, please contact our support team first. We'll do our best to resolve any issues before processing a refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">
                For any questions about this refund policy or to request a refund, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold">Email: support@instacontentstudio.com</p>
                <p className="text-gray-600">We typically respond within 24 hours.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}