CREATE TABLE IF NOT EXISTS "lmf_early_access" (
	"id" varchar(255) PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "lmf_early_access_email_unique" UNIQUE("email")
);
