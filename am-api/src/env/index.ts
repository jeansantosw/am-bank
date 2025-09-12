import 'dotenv/config'
import { z } from 'zod'
import { VariablesErrors } from '../helpers/_errors/variables-errors'

const envSchema = z.object({
  NODE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('Invalid environment variables')

  throw new VariablesErrors()
}

export const env = _env.data
