import fastify from 'fastify'
import { getClientControllers } from './http/controllers/clients/get-clients-controllers'
import { createClientsControllers } from './http/controllers/clients/create-clients-controllers'
import { getClientsByIdControllers } from './http/controllers/clients/get-clients-by-id-controllers'

export const server = fastify()

server.register(getClientControllers)
server.register(createClientsControllers)
server.register(getClientsByIdControllers)
