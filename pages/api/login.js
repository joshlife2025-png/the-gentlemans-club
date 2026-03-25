import bcrypt from 'bcryptjs'
import prisma from '../../lib/prisma'
import { signToken } from '../../utils/auth'

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body || {}
  if(!email || !password) return res.status(400).json({error: 'Missing email or password'})
  const user = await prisma.user.findUnique({ where: { email } })
  if(!user) return res.status(401).json({ error: 'Invalid credentials' })
  const ok = await bcrypt.compare(password, user.password)
  if(!ok) return res.status(401).json({ error: 'Invalid credentials' })
  const token = signToken({ id: user.id, email: user.email, tier: user.tier })
  res.json({ token, user: { id: user.id, email: user.email, tier: user.tier } })
}
