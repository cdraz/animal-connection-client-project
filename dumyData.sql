-------------DUMMYDATA
INSERT INTO "user" (
    "username",
    "password"
) VALUES ('admin', 'admin');



INSERT INTO "contacts" 
    ("type", "firstName", "lastName", "company", "primaryNumber", "text", "email", "website", "address", "notes")
VALUES ('client', 'Benny', 'Blanco', 'prime', '6125554206', 'true', 'dogluvver3@github.io', '', '123 Wilson lane', 'High profile client!! Dont ruin this'),
    ('pet owner', 'Wilson', 'Peterson', '', '6125554206', 'false', 'dogluvver1@github.io', '', '456 Sheradin St.', 'crappy huamn , cute dog'),
    ('pet owner', 'Kyle', 'Chadderton', '', '6125554206', 'true', 'dogluvver@github.io', '', '789 Lilly lane', 'trains all his dogs super well'),
    ('pet owner', 'Melissa', 'Bismark', '', '6125554206', 'false', 'bismark@github.io', '', '6735 persnickity way', 'shes basically the best'),
    ('pet owner', 'frank', 'Frankson', '', '6125554206', 'true', 'frankenstein@github.io', '', '23 bombard circle', 'pretty awesome guy'),
    ('pet owner', 'amy', 'Powell', '', '6125554206', 'false', 'powellsmagazines@github.io', '', '9263 biscuit lane', 'pretty awesome guy'),
    ('pet owner', 'Selena', 'Butterson', '', '6125554206', 'false', 'butterson@github.io', '', '4 hennepin street', 'shes basically the best'),
    ('pet owner', 'Alan', 'Schmidt', '', '6125554206', 'true', 'cerealkiller420@github.io', '', '6390 89th ave', 'pretty awesome guy'),
    ('pet owner', 'Jose', 'Hernandez', '', '6125554206', 'false', 'hernandaz@github.io', '', '6553 89th ave', 'pretty awesome guy'),
    ('trainer', 'Sophie', 'Williams', '', '6125554206', 'false', 'williams@github.io', '', '12 Hennepin street', 'lead trainer'),
    ('pet owner', 'Rosanne', 'Jacobson', '', '6125554206', 'true', 'jacobson@github.io', '', '6729 comstock lane', ''),
    ('trainer', 'Merle', 'Gustav', '', '6125554206', 'false', 'gustav@github.io', '', '789 Poss Grove', 'new guy, migh');



INSERT INTO "animals"
    ("contactsId","animalType","otherTypeDetail","image","name","color","breed",
    "sex","notes","birthday","active","rating","height","weight","length","neckGirth","bellyGirth","sitOnLeash",
    "sitOffLeash","standOnLeash","standOffLeash","downOnLeash","downOffLeash","barkOnCommand","holdItem","offLeashTrained",
    "goodAroundChildren","otherDogs","smallAnimals","atDistanceFromTrainer","silentCommands","mark","loudNoiseLights","shortNotice",
    "livesClose","overnight","strangerHandle","strangerDress")
VALUES
    (1,1,'Female','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','tom','golden retriever',
        1,'Male','Tom is a great dog','2022-03-07',
        TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
    (2,1,'','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','Bear','black lab',
        2,'Male','Bear is super derp','2022-03-10',
        TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE),
    (3,1,'','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','sampson','collie',
        1,'female','Tom is a great dog','2022-03-07',
        TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
    (2,1,'','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','phillip','Corgie',
        2,'female','Bear is super derp','2022-03-10',
        TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE),
    (4,1,'','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','buscuit','collie',
        1,'female','Tom is a great dog','2022-03-07',
        TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
    (2,1,'','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','maggie','red',
        2,'female','Bear is super derp','2022-03-10',
        TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE),
    (5,1,'','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','tom','australian shepard',
        1,'Male','Tom is a great dog','2022-03-07',
        TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
    (6,1,'','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','Bear','black',
        2,'female','Bear is super derp','2022-03-10',
        TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE),
    (7,1,'','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','tom','husky',
        1,'Male','Tom is a great dog','2022-03-07',
        TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
    (8,1,'','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','Bear','black',
        2,'Male','Bear is super derp','2022-03-10',
        TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE),
    (9,1,'','https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg','tom','Brown',
        1,'Male','Tom is a great dog','2022-03-07',
        TRUE,5,5,50,5,5,5,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,TRUE,TRUE),
    (10,1,'','https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg','Bear','black',
        2,'Male','Bear is super derp','2022-03-10',
        TRUE,5,8,85,8,8,8,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE);



INSERT INTO "auditions" 
    ("animalsId", "date")
VALUES
    ('1', 'NOW'),('2', 'now'),('1', 'NOW'),('2', 'now'),
    ('2', 'now'),('1', 'NOW'),('2', 'now'),('2', 'now'),
    ('1', 'NOW'),('2', 'now'),('2', 'now'),('2', 'now');



INSERT INTO "jobs" 
    ("description", "date", "client", "active", "notes", "jobNumber")
VALUES
    ('needs 1000 chickens', 'now', 'Chris', 'true', 'might not have enought chickens', 'AA-1001'),
    ('needs 20 aligators', 'now', 'justin', 'true', 'plenty o gators', 'AA-1002'),
    ('dogs for target ads', 'now', 'target', 'true', 'plenty o dogs', 'AA-1003'),
    ('needs 5 horses', 'now', 'subash', 'true', 'plenty o horses', 'AA-1004'),
    ('needs 17 tigers', 'now', 'edan', 'true', '', 'AA-1005'),
    ('needs 5 horses', 'now', 'subash', 'true', 'plenty o horses', 'AA-1006');



INSERT INTO "jobContacts" 
    ("jobId", "contactId")
VALUES
    ('1', '1'), ('2', '2');



INSERT INTO "jobsJunction" 
    ("animalsId", "jobId", "paid", "checkNumber", "checkAmount", "checkDate")
VALUES
    ('1', '1', 'true', 'EEEEEE555', '80', 'now');

