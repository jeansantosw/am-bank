import { server } from '@/app'
import { db } from '@/database/client'
import { clients } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function updateClientsControllers() {
  server.put('/clients/:id', async (request, reply) => {
    const clientId = request.params as { id: string }

    const updateClients = request.body as typeof clients.$inferInsert

    const updateClient = await db
      .update(clients)
      .set(updateClients)
      .where(eq(clients.id, clientId.id))
      .returning()

    reply.status(200).send({ client: updateClient[0] })
  })
}
