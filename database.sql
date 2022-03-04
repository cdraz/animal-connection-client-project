
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
  
CREATE TABLE "contacts" (
    "id" SERIAL PRIMARY KEY,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "primaryNumber" INTEGER,
    "secondaryNumber" INTEGER,
    "text" BOOLEAN,
    "email" VARCHAR(255),
    "type" VARCHAR(255),
    "website" VARCHAR(255),
    "address" VARCHAR(255),
    "notes" VARCHAR(20000),
    "shortNotice" BOOLEAN,
    "livesClose" BOOLEAN,
    "willTravel" BOOLEAN
);  
  
  CREATE TABLE "animals" (
    "id" SERIAL PRIMARY KEY,
    "contactsId" INT REFERENCES "contacts",
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "breed" INTEGER,
    "sex" VARCHAR(255),
    "notes" VARCHAR(255),
    "birthday" DATE,
    "active" BOOLEAN,
    "rating" INTEGER,
    "height" FLOAT,
    "weight" FLOAT,
    "length" FLOAT,
    "neckGirth" FLOAT,
    "bellyGirth" FLOAT,
    "sitOnLeash" BOOLEAN,
    "sitOffLeash" BOOLEAN,
    "standOnLeash" BOOLEAN,
    "standOffLeash" BOOLEAN,
    "downOnLeash" BOOLEAN,
    "downOffLeash" BOOLEAN,
    "barkOnCommand" BOOLEAN,
    "holdItem" BOOLEAN,
    "offLeashTrained" BOOLEAN,
    "goodAroundChildren" BOOLEAN,
    "otherDogs" BOOLEAN,
    "smallAnimals" BOOLEAN,
    "atDistanceFromTrainer" BOOLEAN,
    "silentCommands" BOOLEAN,
    "mark" BOOLEAN,
    "loudNoiseLights" BOOLEAN
);  
  
CREATE TABLE "auditions" (
    "id" SERIAL PRIMARY KEY,
    "animalsId" INT REFERENCES "animals",
    "date" DATE
);

CREATE TABLE "jobs" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255),
    "date" DATE,
    "client" VARCHAR(255),
    "active" BOOLEAN,
    "notes" VARCHAR(255),
    "jobNumber" VARCHAR(255)
);

CREATE TABLE "jobsJunction" (
    "id" SERIAL PRIMARY KEY,
    "animalsId" INT REFERENCES "animals",
    "jobId" INT REFERENCES "jobs"
);
