import { server } from '@/app'
import { db } from '@/database/client'
import { clients } from '@/database/schema'
import { eq } from 'drizzle-orm'

interface clientId {
  id: string
}

export async function getClientsByIdControllers() {
  server.get('/clients/:id', async (request, reply) => {
    const clientId = request.params as clientId
    const client = await db
      .select()
      .from(clients)
      .where(eq(clients.id, clientId.id))

    reply.status(201).send({ client: client[0] })
  })
}
