import type {
  ICreateClientsDTO,
  ICreateClients,
} from '@/types/clients/clients-types'

export interface IClientsRepository {
  create(data: ICreateClientsDTO): Promise<ICreateClients>
}
