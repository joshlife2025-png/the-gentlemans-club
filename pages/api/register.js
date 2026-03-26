import prisma from '../../lib/prisma'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' })

  const hashed = await bcrypt.hash(password, 10)
  try {
    const user = await prisma.user.create({
      data: { email, password: hashed }
    })
    res.status(201).json({ id: user.id, email: user.email })
  } catch (err) {
    res.status(400).json({ error: 'User already exists' })
  }
}
