import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createClientsControllers } from './create-clients-controllers'
import z from 'zod'

export const createClientsRoute: FastifyPluginAsyncZod = async (server) => {
  server.post(
    '/clients',
    {
      schema: {
        body: z.object({
          cpf: z.string(),
          name: z.string(),
          email: z.string(),
          address: z.string(),
          workplace: z.string(),
          profession: z.string(),
        }),
        response: {
          201: z.object({
            clientId: z.uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      const body = request.body

      const client = await createClientsControllers(body)

      reply.status(201).send({ clientId: client.id })
    },
  )
}
