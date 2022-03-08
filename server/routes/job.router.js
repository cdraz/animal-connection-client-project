const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("******* GET JOBS *******");
  console.log(req.body);
  const qFilter = req.query;
  let queryText =
    `
        SELECT * FROM "jobs"
        ` + queryGen(qFilter);
  console.log(queryText);
  pool
    .query(queryText)
    .then((dbRes) => res.send(dbRes.rows))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res, next) => {

  const client = req.body.client;
  const jobNumber = req.body.jobNumber;
  const jobDate = req.body.jobDate;
  const notes = req.body.notes;
  const description = req.body.description;

  const queryText = `INSERT INTO "jobs" (description, date, client, notes, "jobNumber")
      VALUES ($1, $2, $3, $4, $5) `;
  pool
    .query(queryText, [description, jobDate, client, notes, jobNumber])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("project creation failed: ", err);
      res.sendStatus(500);
    });
});

/**
 * Get all of the animals that work the job by ID
 */
 router.get("/:id", (req, res) => {
     console.log('req.params is',req.params);
     
    const queryText = `SELECT * FROM "jobsJunction" 
    JOIN "animals" 
    ON "jobsJunction"."animalsId" = animals.id 
    JOIN "contacts"
    ON "animals"."contactsId" = contacts.id
    WHERE "jobId"=$1`;
    pool
      .query(queryText, [req.params.id])
  
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.error("err in get jobDetails ", err);
        console.log("req.params.id", req.params);
      });
  });

module.exports = router;

function queryGen(qFilter) {
  console.log("#####################", qFilter);
  let sqlString = "";
  if (qFilter.breed) {
    sqlString += `WHERE "breed" = ${qFilter.breed}`;
  }
  if (qFilter.breed) {
    sqlString += `WHERE "type" = ${qFilter.type}`;
  }
  if (qFilter.minA) {
    sqlString += `WHERE "date" > ${qFilter.minA} AND "date" < ${qFilter.maxA}`;
  }
  if (qFilter.minL) {
    sqlString += `WHERE "length" > ${qFilter.minL} AND "length" < ${qFilter.maxL}`;
  }
  if (qFilter.minH) {
    sqlString += `WHERE "height" > ${qFilter.minH} AND "height" < ${qFilter.maxH}`;
  }
  if (qFilter.minN) {
    sqlString += `WHERE "neck" > ${qFilter.minN} AND "neck" < ${qFilter.maxN}`;
  }
  if (qFilter.minB) {
    sqlString += `WHERE "belly" > ${qFilter.minB} AND "belly" < ${qFilter.maxB}`;
  }
  if (qFilter.minW) {
    sqlString += `WHERE "weight" > ${qFilter.minW} AND "weight" < ${qFilter.maxW}`;
  }
  return sqlString;
}
