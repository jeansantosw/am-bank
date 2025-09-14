import z from 'zod'

export const createClientDTOSchema = z.object({
  cpf: z.string(),
  name: z.string(),
  email: z.string().nullable(),
  address: z.string(),
  workplace: z.string().nullable(),
  profession: z.string(),
})

export type ICreateClientsDTO = z.infer<typeof createClientDTOSchema>

export interface ICreateClients {
  id: string
  cpf: string
  name: string
  email: string | null
  address: string
  workplace: string | null
  profession: string
}
