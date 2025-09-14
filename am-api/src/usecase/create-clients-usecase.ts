import { DrizzleClientsRepository } from '@/repositories/drizzle/clients/drizzle-clients-repository'
import type { ICreateClientsDTO } from '@/types/clients/clients-types'

export class CreateClientsUsecase {
  // constructor() {}
  drizzleClientsRepository = new DrizzleClientsRepository()
  async execute({
    cpf,
    name,
    email,
    address,
    workplace,
    profession,
  }: ICreateClientsDTO) {
    const client = await this.drizzleClientsRepository.create({
      cpf,
      name,
      email,
      address,
      workplace,
      profession,
    })

    return client
  }
}
