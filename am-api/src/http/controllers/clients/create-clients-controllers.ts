import { server } from '@/app'
import { db } from '@/database/client'
import { clients } from '@/database/schema'

export async function createClientsControllers() {
  type insertClients = typeof clients.$inferInsert

  server.post('/clients', async (request, reply) => {
    const clientsBody = request.body as insertClients

    const createClients = await db
      .insert(clients)
      .values(clientsBody)
      .returning({ clientId: clients.id })

    reply.status(201).send({ client: createClients[0] })
  })
}
