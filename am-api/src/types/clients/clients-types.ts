export interface ICreateClientsDTO {
  cpf: string
  name: string
  email: string | null
  address: string
  workplace: string | null
  profession: string
}

export interface ICreateClients {
  id: string
  cpf: string
  name: string
  email: string | null
  address: string
  workplace: string | null
  profession: string
}
