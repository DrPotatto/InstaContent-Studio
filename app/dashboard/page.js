'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { Sparkles, Download, Share2, Users } from 'lucide-react'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [content, setContent] = useState([])
  const [subscription, setSubscription] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      
      if (user) {
        // Fetch user's content
        const { data: contentData } = await supabase
          .from('content_assets')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
        
        setContent(contentData || [])
        
        // Fetch subscription
        const { data: subData } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single()
        
        setSubscription(subData)
      }
    }
    
    getUser()
  }, [])

  const referralCode = user ? btoa(user.id).slice(0, 8) : ''
  const referralLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/signin?ref=${referralCode}`

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    alert('Referral link copied!')
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in</h2>
          <a href="/auth/signin" className="btn-primary">Sign In</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.email}</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-primary-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Generations This Month</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {content.length}/{(subscription?.status === 'active' && subscription?.plan_id === 'pro') ? 'Unlimited' : '10'}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <Download className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Saved Content</p>
                <p className="text-2xl font-semibold text-gray-900">{content.length}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Referral Earnings</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Subscription Status</h3>
          {subscription?.status === 'active' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                🎉 You're on the <strong>Pro Plan</strong>! Enjoy unlimited generations and no watermarks.
              </p>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                You're on the <strong>Free Plan</strong>. Upgrade to Pro for unlimited generations and no watermarks.
              </p>
              <a href="/pricing" className="btn-primary mt-3 inline-block">Upgrade Now</a>
            </div>
          )}
        </div>

        {/* Referral Program */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Referral Program</h3>
          <p className="text-gray-600 mb-3">
            Share your referral link and get 1 month free when someone signs up through your link and subscribes!
          </p>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={referralLink} 
              readOnly 
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button onClick={copyReferralLink} className="btn-secondary">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Recent Content */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Recent Content</h3>
          {content.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No content saved yet. Start creating!</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <img 
                    src={item.thumbnail_url || item.public_url} 
                    alt="Generated content"
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <p className="text-sm font-medium">{item.tool}</p>
                  <p className="text-xs text-gray-500">{new Date(item.created_at).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}