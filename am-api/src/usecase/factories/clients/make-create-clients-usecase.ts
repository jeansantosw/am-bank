import { DrizzleClientsRepository } from '@/repositories/drizzle/clients/drizzle-clients-repository'
import { CreateClientsUsecase } from '@/usecase/clients/create-clients-usecase'

export function makeCreateClientsUsecase() {
  const drizzleClientsRepository = new DrizzleClientsRepository()
  const createClients = new CreateClientsUsecase(drizzleClientsRepository)
  return createClients
}
