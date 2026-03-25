import prisma from '../../lib/prisma'
import Stripe from 'stripe'
import { buffer } from 'micro'
export const config = { api: { bodyParser: false } }
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const sig = req.headers['stripe-signature']
  const webhookSecret = process.env.WEBHOOK_SECRET || ''
  let event
  try {
    const buf = await buffer(req)
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }
  try {
    if(event.type === 'checkout.session.completed'){
      const session = event.data.object
      console.log('Checkout session completed:', session.id)
    } else if(event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.created'){
      const subscription = event.data.object
      await prisma.subscription.upsert({
        where: { stripeId: subscription.id },
        update: { status: subscription.status, currentPeriodEnd: new Date(subscription.current_period_end*1000) },
        create: { stripeId: subscription.id, status: subscription.status, currentPeriodEnd: new Date(subscription.current_period_end*1000), userId: '' }
      })
    }
  } catch (err) {
    console.error('Error processing webhook:', err)
  }
  res.json({ received: true })
}
