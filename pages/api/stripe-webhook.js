import prisma from '../../lib/prisma'
import Stripe from 'stripe'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    console.log("Webhook received")
    // Temporary stub — no micro or buffer
    return res.status(200).json({ received: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Webhook error' })
  }
}
