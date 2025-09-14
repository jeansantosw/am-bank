import type { ICreateClients } from '@/types/clients/clients-types'
import { CreateClientsUsecase } from '../../../usecase/create-clients-usecase'

export function createClientsControllers(client: ICreateClients) {
  const createClientsUsecase = new CreateClientsUsecase()

  createClientsUsecase.execute({
    cpf: client.cpf,
    name: client.name,
    email: client.email,
    address: client.address,
    workplace: client.workplace,
    profession: client.profession,
  })
}
