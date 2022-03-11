
-------------DUMMYDATA
INSERT INTO "user" (
    "username",
    "password"
) VALUES ('admin', 'admin');

INSERT INTO "contacts" (
    "type", -- Animal Owner, Client, Crew
    "firstName",
    "lastName",
    "company",
    "primaryNumber",
    "text",
    "email",
    "website",
    "address",
    "notes"
)VALUES ('pet owner', 'jacob', 'larson', 'prime', '6125554206', 'true', 'jacob@github.io', 'j3nkii.github.io', '123 ohyeah lane', 'pretty awesome guy'),
    ('pet owner', 'subash', 'khatri', 'prime', '6125554206', 'false', 'jacob@github.io', 'j3nkii.github.io', '123 ohyeah lane', 'pretty awesome guy');


INSERT INTO "animalTypes" (
    "type"
) VALUES ('dog'), ('cat');

INSERT INTO "animals"("id","contactsId","animalType","otherTypeDetail","image","name","color","breed","sex","notes","birthday","active","rating","height","weight","length","neckGirth","bellyGirth","sitOnLeash","sitOffLeash","standOnLeash","standOffLeash","downOnLeash","downOffLeash","barkOnCommand","holdItem","offLeashTrained","goodAroundChildren","otherDogs","smallAnimals","atDistanceFromTrainer","silentCommands","mark","loudNoiseLights","shortNotice","livesClose","overnight","strangerHandle","strangerDress")
VALUES
(1,1,1,'a','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','tom','Brown',1,'Male','Tom is a great dog','2022-03-07',TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
(2,2,1,'g','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','Bear','black',2,'Male','Bear is super derp','2022-03-10',TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE);

INSERT INTO "auditions" (
    "animalsId",
    "date"
) VALUES ('1', 'NOW'),('2', 'now');

INSERT INTO "jobs" (
    "description",
    "date",
    "client",
    "active",
    "notes",
    "jobNumber"
) VALUES ('needs 1000 chickens', 'now', 'Chris', 'true', 'might not have enought chickens', '4'),
    ('needs 20 aligators', 'now', 'justin', 'true', 'plenty o gators', '5');

INSERT INTO "jobContacts" (
    "jobId",
    "contactId"
) VALUES ('1', '1'), ('2', '2');

INSERT INTO "jobsJunction" (
    "animalsId",
    "jobId",
    "paid", -- Have they been paid yet
    "checkNumber", -- if paid, what is check number
    "checkAmount", -- if paid, what is check amount
    "checkDate"
) VALUES ('1', '1', 'true', 'EEEEEE555', '80', 'now');

