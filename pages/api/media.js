import prisma from '../../lib/prisma'
export default async function handler(req,res){
  if(req.method !== 'GET') return res.status(405).end()
  const media = await prisma.media.findMany({ orderBy: { createdAt: 'desc' } })
  const safe = media.map(m => ({ id:m.id, title:m.title, thumbnail:m.thumbnail, isPremium:m.isPremium, createdAt:m.createdAt }))
  res.json(safe)
}
