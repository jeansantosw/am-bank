CREATE TABLE "clients" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cpf" text NOT NULL,
	"name" text NOT NULL,
	"email" text,
	"address" text NOT NULL,
	"workplace" text,
	"profession" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
