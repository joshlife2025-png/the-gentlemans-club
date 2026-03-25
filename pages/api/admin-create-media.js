import prisma from '../../lib/prisma'
import { verifyToken } from '../../utils/auth'

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const auth = req.headers.authorization?.split(' ')[1]
  const user = verifyToken(auth)
  if(!user) return res.status(401).json({ error: 'Unauthorized' })
  const { title, thumbnail, fileKey, isPremium } = req.body || {}
  if(!title || !fileKey) return res.status(400).json({ error: 'Missing fields' })
  const created = await prisma.media.create({ data: { title, thumbnail, fileKey, isPremium: !!isPremium, userId: user.id } })
  res.json({ media: created })
}
