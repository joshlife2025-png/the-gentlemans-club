import { PrismaClient } from '@prisma/client'
const globalForPrisma = globalThis
globalForPrisma.__prismaClient = globalForPrisma.__prismaClient || new PrismaClient()
const prisma = globalForPrisma.__prismaClient
export default prisma
