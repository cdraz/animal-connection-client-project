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
  console.log("req.params is", req.params);

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

/**
 * Delete an Job
 */
router.delete("/:id", (req, res) => {
  // endpoint functionality

  const queryText = "DELETE FROM jobs WHERE id=$1";
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing Delete job query", err);
      res.sendStatus(500);
    });
});

/**
 * PUT to set job to Inactive an Job
 */
router.put("/:id", (req, res) => {
  // endpoint functionality

  const queryText = `UPDATE jobs
    SET active = NOT active
    WHERE id = $1
    `;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing put job query", err);
      res.sendStatus(500);
    });
});

module.exports = router;

function queryGen(qFilter) {
  switch (qFilter.isActive) {
    // case 'all':
    //     sqlQuery.sqlString += `AND "animals"."active"`
    //     break;
    case "true":
      sqlQuery.sqlString += `AND "animals"."active" = true`;
      break;
    case "false":
      sqlQuery.sqlString += `AND "animals"."active" = false`;
      break;
    default:
      break;
  }
  console.log("#####################", qFilter);
  let sqlString = "";
  if (qFilter.breed) {
    sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.breed);
    paramNumber++;
  }
  if (qFilter.breed) {
    sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.breed);
    paramNumber++;
  }
  if (qFilter.breed && qFilter.breed !== "") {
    sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.breed);
    paramNumber++;
  }
  return sqlString;
}
