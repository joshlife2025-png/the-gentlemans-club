        import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: { email: 'demo@example.com', password: 'hashed-demo-password', tier: 'FREE' }
  })
  await prisma.media.create({ data: { title: 'Sample Free Video', thumbnail: 'https://picsum.photos/400/300?random=12', fileKey: 'sample-free.mp4', isPremium: false, userId: user.id } })
  await prisma.media.create({ data: { title: 'Premium Video', thumbnail: 'https://picsum.photos/400/300?random=13', fileKey: 'sample-premium.mp4', isPremium: true, userId: user.id } })
  console.log('Seeded database.')
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect())
