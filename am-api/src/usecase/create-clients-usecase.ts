import type { ICreateClientsUsecase } from './types'
import { clients } from '@/database/schema'
import { db } from '@/database/client'

export class CreateClientsUsecase {
  // constructor() {}
  async execute({
    cpf,
    name,
    email,
    address,
    workplace,
    profession,
  }: ICreateClientsUsecase) {
    const createClients = await db
      .insert(clients)
      .values({ cpf, name, email, address, workplace, profession })
      .returning()

    return createClients[0]
  }
}
