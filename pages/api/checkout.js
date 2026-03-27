import Stripe from 'stripe'

// Check for environment variables before initializing Stripe
let stripe
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
} else {
  console.warn('⚠️ STRIPE_SECRET_KEY is missing')
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!stripe) {
    return res.status(500).json({ error: 'Stripe not configured' })
  }

  // Validate required environment variables
  const priceId = process.env.STRIPE_PRICE_ID
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!priceId || !siteUrl) {
    return res
      .status(500)
      .json({ error: 'Missing STRIPE_PRICE_ID or NEXT_PUBLIC_SITE_URL' })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    res.status(500).json({ error: 'Stripe checkout failed' })
  }
}
