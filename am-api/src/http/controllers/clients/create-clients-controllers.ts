import { createClientDTOSchema } from '@/types/clients/clients-types'
import { CreateClientsUsecase } from '../../../usecase/clients/create-clients-usecase'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function createClientsControllers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createClientsUsecase = new CreateClientsUsecase()

  const { cpf, name, email, address, workplace, profession } =
    createClientDTOSchema.parse(request.body)

  try {
    const client = await createClientsUsecase.execute({
      cpf,
      name,
      email,
      address,
      workplace,
      profession,
    })
    reply.status(201).send({ clientId: client.id })
  } catch (error) {
    throw new Error()
  }
}
