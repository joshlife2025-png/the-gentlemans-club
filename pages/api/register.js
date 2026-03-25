import bcrypt from 'bcryptjs'
import prisma from '../../lib/prisma'
import { signToken } from '../../utils/auth'

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body || {}
  if(!email || !password) return res.status(400).json({error: 'Missing email or password'})
  const existing = await prisma.user.findUnique({ where: { email } })
  if(existing) return res.status(409).json({ error: 'User already exists' })
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({ data: { email, password: hashed } })
  const token = signToken({ id: user.id, email: user.email, tier: user.tier })
  res.json({ token, user: { id: user.id, email: user.email, tier: user.tier } })
}
