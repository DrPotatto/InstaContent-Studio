import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabaseClient'

export async function POST(request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('paddle-signature')
    
    // Verify webhook signature (implementation depends on Paddle SDK)
    // const isValid = verifyPaddleWebhook(body, signature)
    // if (!isValid) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    
    const event = JSON.parse(body)
    
    switch (event.alert_name) {
      case 'subscription_created':
        await handleSubscriptionCreated(event)
        break
      case 'subscription_updated':
        await handleSubscriptionUpdated(event)
        break
      case 'subscription_cancelled':
        await handleSubscriptionCancelled(event)
        break
    }
    
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

async function handleSubscriptionCreated(event) {
  const { email, user_id, subscription_id, plan_id, status } = event
  
  // Find user by email
  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single()
  
  if (userData) {
    await supabase.from('subscriptions').upsert({
      user_id: userData.id,
      paddle_subscription_id: subscription_id,
      plan_id: plan_id,
      status: status,
      current_period_start: new Date().toISOString(),
      current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // +30 days
    })
  }
}

async function handleSubscriptionUpdated(event) {
  const { subscription_id, status } = event
  
  await supabase
    .from('subscriptions')
    .update({ status })
    .eq('paddle_subscription_id', subscription_id)
}

async function handleSubscriptionCancelled(event) {
  const { subscription_id } = event
  
  await supabase
    .from('subscriptions')
    .update({ status: 'cancelled' })
    .eq('paddle_subscription_id', subscription_id)
}