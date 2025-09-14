import type { ICreateClients } from '@/types/clients/clients-types'
import { CreateClientsUsecase } from '../../../usecase/create-clients-usecase'

export async function createClientsControllers(client: ICreateClients) {
  const createClientsUsecase = new CreateClientsUsecase()

  return await createClientsUsecase.execute({
    cpf: client.cpf,
    name: client.name,
    email: client.email,
    address: client.address,
    workplace: client.workplace,
    profession: client.profession,
  })
}
