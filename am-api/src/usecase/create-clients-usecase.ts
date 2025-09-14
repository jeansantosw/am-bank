import type { ICreateClientsUsecase } from './types'
import { clients } from '@/database/schema'
import { db } from '@/database/client'

export class CreateClientsUsecase {
  // constructor() {}
  execute({
    cpf,
    name,
    email,
    address,
    workplace,
    profession,
  }: ICreateClientsUsecase) {
    async function create() {
      const createClients = await db
        .insert(clients)
        .values({ cpf, name, email, address, workplace, profession })
        .returning({ clientId: clients.id })

      return { client: createClients[0] }
    }

    create()
    // server.post('/clients', async (_, reply) => {
    //   const createClients = await db
    //     .insert(clients)
    //     .values({ cpf, name, email, address, workplace, profession })
    //     .returning({ clientId: clients.id })

    //   reply.status(201).send({ client: createClients[0] })
    // })
  }
}
