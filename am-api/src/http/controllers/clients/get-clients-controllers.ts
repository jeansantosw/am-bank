import { server } from '@/app'

export async function getClientControllers() {
  server.get('/', async (request, reply) => {
    reply.status(200).send('OK')
  })
}
