'use client'
import { useState, useEffect } from 'react'
import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = {
    free: {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '10 generations per month',
        'Basic templates',
        'Watermark on outputs',
        'Community support',
        'Standard quality'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    pro: {
      name: 'Pro',
      price: isAnnual ? '$4.08' : '$4.99',
      period: isAnnual ? '/month billed annually' : '/month',
      description: 'Everything you need to grow',
      features: [
        'Unlimited generations',
        'All premium templates',
        'No watermark',
        'Priority support',
        'HD quality exports',
        'Advanced editing tools',
        'Batch processing',
        'Custom branding'
      ],
      cta: 'Start Pro Trial',
      popular: true
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more power. No hidden fees, no surprise charges.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 border border-gray-200 inline-flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                !isAnnual ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                isAnnual ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual (Save 18%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`relative rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-primary-600 shadow-xl scale-105' 
                  : 'border-gray-200 shadow-lg'
              } bg-white p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                onClick={() => {
                  if (key === 'pro') {
                    // Initialize Paddle checkout
                    if (window.Paddle) {
                      window.Paddle.Checkout.open({
                        product: isAnnual ? 'your_annual_product_id' : 'your_monthly_product_id',
                        success: '/dashboard?payment=success',
                        close: '/pricing'
                      });
                    }
                  } else {
                    window.location.href = '/tools/post-generator';
                  }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 14-day money-back guarantee for all annual plans. Monthly plans can be canceled anytime without further charges."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and various local payment methods through our payment processor Paddle."
              },
              {
                question: "Can I switch between monthly and annual billing?",
                answer: "Yes, you can switch between billing cycles at any time from your account settings."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}