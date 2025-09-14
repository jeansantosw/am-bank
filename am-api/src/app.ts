import fastify from 'fastify'
import { getClientControllers } from './http/controllers/clients/get-clients-controllers'
import { getClientsByIdControllers } from './http/controllers/clients/get-clients-by-id-controllers'
import { updateClientsControllers } from './http/controllers/clients/update-clients-controllers'
import { deleteClientsControllers } from './http/controllers/clients/delete-clients-controllers'
import { createClientsRoute } from './http/controllers/clients/routes'

export const server = fastify()

server.register(getClientControllers)
server.register(createClientsRoute)
server.register(getClientsByIdControllers)
server.register(updateClientsControllers)
server.register(deleteClientsControllers)
