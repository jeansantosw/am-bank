export class VariablesErrors extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid environment variables')
  }
}
