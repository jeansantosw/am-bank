import type { ICreateClientsDTO } from '@/types/clients/clients-types'
import { CreateClientsUsecase } from '../../../usecase/create-clients-usecase'

export async function createClientsControllers(client: ICreateClientsDTO) {
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
