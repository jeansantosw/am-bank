import { fastify } from 'fastify'
import { env } from './env'

export const server = fastify()

server.listen({ port: env.PORT }, () => {
  console.log('HTTP Server is running 🔥')
})
