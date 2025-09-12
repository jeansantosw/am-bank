import fastify from 'fastify'
import { getClientControllers } from './http/controllers/clients/get-clients-controllers'

export const server = fastify()

server.register(getClientControllers)
