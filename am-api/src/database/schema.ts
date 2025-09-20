import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const clients = pgTable('clients', {
  id: uuid().primaryKey().defaultRandom(),
  cpf: text().notNull().unique(),
  name: text().notNull(),
  email: text(),
  address: text().notNull(),
  workplace: text(),
  profession: text().notNull(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
})
