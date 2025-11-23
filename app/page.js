import Link from 'next/link'
import { Sparkles, Zap, Shield, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">InstaContent Studio</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
              <Link href="/dashboard" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Create Viral
          <span className="text-primary-600"> Instagram Content</span>
          <br />in Seconds
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI-powered content studio that helps you create engaging posts, captions, and stories. 
          Zero upfront costs - start for free and upgrade when you grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tools/post-generator" className="btn-primary text-lg px-8 py-3">
            Start Creating Free
          </Link>
		  <Link href="/pricing" className="btn-secondary text-lg px-8 py-3">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Grow on Instagram
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'AI Content Generation',
                description: 'Generate posts, captions, and hashtags using client-side AI'
              },
              {
                icon: Shield,
                title: 'Zero Cost Launch',
                description: 'No paid APIs - everything runs in your browser for free'
              },
              {
                icon: Globe,
                title: 'Tunisian Friendly',
                description: 'Paddle + Payoneer integration for easy payouts in Tunisia'
              }
            ].map((feature, index) => (
              <div key={index} className="card text-center">
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Content Creation Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Post Generator', desc: 'Create engaging posts with templates', path: '/tools/post-generator' },
              { name: 'Caption & Hashtags', desc: 'Generate viral captions and hashtags', path: '/tools/caption-generator' },
              { name: 'Feed Planner', desc: 'Plan your Instagram grid', path: '/tools/feed-planner' },
              { name: 'Story Creator', desc: 'Design eye-catching stories', path: '/tools/story-creator' },
              { name: 'Reel Scripts', desc: 'Write engaging reel scripts', path: '/tools/reel-scripts' },
              { name: 'Mockup Maker', desc: 'Create product mockups', path: '/tools/mockup-maker' }
            ].map((tool, index) => (
              <Link key={index} href={tool.path} className="card hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 InstaContent Studio. Zero-cost SaaS platform.</p>
          <p className="mt-2 text-sm">Built for creators in Tunisia and worldwide.</p>
        </div>
       <div className="mt-8 pt-8 border-t border-gray-200">
  <div className="flex flex-wrap justify-center gap-6 text-sm">
    <a href="/terms" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
    <a href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
    <a href="/refund" className="text-gray-500 hover:text-gray-700">Refund Policy</a>
    <a href="/pricing" className="text-gray-500 hover:text-gray-700">Pricing</a>
  </div>
</div>
      </footer>
    </div>
  )
}