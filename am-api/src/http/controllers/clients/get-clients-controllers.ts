import { server } from '@/app'
import { db } from '@/database/client'
import { clients } from '@/database/schema'

export async function getClientControllers() {
  server.get('/', async (request, reply) => {
    const result = await db.select().from(clients)
    reply.status(200).send({ clients: result })
  })
}
