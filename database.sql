
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
    "type" VARCHAR(255), -- Animal Owner, Client, Crew
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "company" VARCHAR(255),
    "primaryNumber" VARCHAR(11),
    "secondaryNumber" VARCHAR(11),
    "text" BOOLEAN,
    "email" VARCHAR(255),
    "website" VARCHAR(255),
    "address" VARCHAR(255),
    "notes" VARCHAR(20000)
);  

CREATE TABLE "animalTypes" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR(255)
);

CREATE TABLE "animals" (
    "id" SERIAL PRIMARY KEY,
    "contactsId" INT REFERENCES "contacts",
    "animalType" INT REFERENCES "animalTypes", -- Dog, Cat, Rabbit, Horse, Other
    "otherTypeDetail" VARCHAR(255), -- If animalType is Other, this text field is used to describe what it is exactly (Lizard, Kangaroo, Parrot, etc.)
    "image" VARCHAR(3500), -- From audition form will be uploaded by user, can be overwritten by Barbara
    "name" VARCHAR(255),
    "color" VARCHAR(255),
    "breed" VARCHAR(255), --Int?
    "sex" VARCHAR(255),
    "notes" VARCHAR(2055),
    "birthday" DATE,
    "active" BOOLEAN,
    "rating" INTEGER, -- 1 to 5, chosen by Barbara
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
    "mark" BOOLEAN, -- Can move to a mark on command
    "loudNoiseLights" BOOLEAN, -- Fear of loud noises, true if afraid, false if unafraid
    "shortNotice" BOOLEAN,
    "livesClose" BOOLEAN,
    "overnight" BOOLEAN, -- True if animal can stay overnight for shoot, false if not
    "strangerHandle" BOOLEAN, -- Whether or not a stranger can handle the animal
    "strangerDress" BOOLEAN -- Whether or not a stranger can dress the animal in clothes
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
    "notes" VARCHAR(2055),
    "jobNumber" VARCHAR(255)
);

CREATE TABLE "jobContacts" ( -- This is a junction table that will allow Barbara to associate certain contacts with a job, whether they are crew or client
    "id" SERIAL PRIMARY KEY,
    "jobId" INT REFERENCES "jobs",
    "contactId" INT REFERENCES "contacts"
);

CREATE TABLE "jobsJunction" (
    "id" SERIAL PRIMARY KEY,
    "animalsId" INT REFERENCES "animals",
    "jobId" INT REFERENCES "jobs",
    "paid" BOOLEAN, -- Have they been paid yet
    "checkNumber" VARCHAR(255), -- if paid, what is check number
    "checkAmount" FLOAT, -- if paid, what is check amount
    "checkDate" DATE -- if paid, what is check date
);

INSERT INTO "public"."animals"("id","contactsId","animalType","otherTypeDetail","image","name","color","breed","sex","notes","birthday","active","rating","height","weight","length","neckGirth","bellyGirth","sitOnLeash","sitOffLeash","standOnLeash","standOffLeash","downOnLeash","downOffLeash","barkOnCommand","holdItem","offLeashTrained","goodAroundChildren","otherDogs","smallAnimals","atDistanceFromTrainer","silentCommands","mark","loudNoiseLights","shortNotice","livesClose","overnight","strangerHandle","strangerDress")
VALUES
(1,1,E'dog',E'a',E'https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg',E'tom',E'Brown',1,E'Male',E'Tom is a great dog',E'2022-03-07',TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE);
INSERT INTO "public"."animals"("id","contactsId","animalType","otherTypeDetail","image","name","color","breed","sex","notes","birthday","active","rating","height","weight","length","neckGirth","bellyGirth","sitOnLeash","sitOffLeash","standOnLeash","standOffLeash","downOnLeash","downOffLeash","barkOnCommand","holdItem","offLeashTrained","goodAroundChildren","otherDogs","smallAnimals","atDistanceFromTrainer","silentCommands","mark","loudNoiseLights","shortNotice","livesClose","overnight","strangerHandle","strangerDress")
VALUES
(2,2,E'dog',E'g',E'https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg',E'Bear',E'black',2,E'Male',E'Bear is super derp',E'2022-03-10',TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE);

