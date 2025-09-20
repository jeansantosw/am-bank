import type { IClientsRepository } from '@/repositories/drizzle/clients/clients-reposirory'
import type { ICreateClientsDTO } from '@/types/clients/clients-types'

export class CreateClientsUsecase {
  constructor(private clientesRepository: IClientsRepository) {}

  async execute({
    cpf,
    name,
    email,
    address,
    workplace,
    profession,
  }: ICreateClientsDTO) {
    const client = await this.clientesRepository.create({
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
