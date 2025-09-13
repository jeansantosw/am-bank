import fastify from 'fastify'
import { getClientControllers } from './http/controllers/clients/get-clients-controllers'
import { createClientsControllers } from './http/controllers/clients/create-clients-controllers'

export const server = fastify()

server.register(getClientControllers)
server.register(createClientsControllers)
