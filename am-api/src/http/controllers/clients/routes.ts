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
          email: z.string().nullable(),
          address: z.string(),
          workplace: z.string().nullable(),
          profession: z.string(),
        }),
        response: {
          201: z.object({
            clientId: z.uuid(),
          }),
        },
      },
    },
    createClientsControllers,
  )
}
