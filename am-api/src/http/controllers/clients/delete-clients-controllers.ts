import { server } from '@/app'
import { db } from '@/database/client'
import { clients } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function deleteClientsControllers() {
  server.delete('/clients/:id', async (request, reply) => {
    const clientId = request.params as { id: string }
    await db.delete(clients).where(eq(clients.id, clientId.id))

    reply.status(204).send()
  })
}
