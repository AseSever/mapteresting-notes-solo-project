
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- database name mapteresting_notes

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "notes" (
	"id" SERIAL PRIMARY KEY,
	"lat" NUMERIC(11) NOT NULL,
	"lng" NUMERIC(11) NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255),
	"image" VARCHAR(255),
	"public" BOOLEAN DEFAULT true,
	"date_created" DATE DEFAULT NOW(),
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "likes" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"notes_id" INT REFERENCES "notes"
);