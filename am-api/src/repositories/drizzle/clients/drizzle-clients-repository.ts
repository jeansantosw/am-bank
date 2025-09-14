import type { ICreateClientsDTO } from '@/types/clients/clients-types'
import type { IClientsRepository } from './clients-reposirory'
import { db } from '@/database/client'
import { clients } from '@/database/schema'

export class DrizzleClientsRepository implements IClientsRepository {
  async create(data: ICreateClientsDTO) {
    const createClients = await db.insert(clients).values(data).returning()

    return createClients[0]
  }
}
