import type { ICreateClients } from '@/types/clients/clients-types'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createClientsControllers } from './create-clients-controllers'

export const createClientsRoute: FastifyPluginAsyncZod = async (server) => {
  server.post('/clients', async (request) => {
    const client = request.body as ICreateClients

    createClientsControllers(client)
  })
}
