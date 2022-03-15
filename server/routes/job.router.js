const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get("/", rejectUnauthenticated,(req, res) => {
  console.log("******* GET JOBS *******");
  const qFilter = req.query;
  const sqlQuery = queryGen(qFilter);
  let queryText = `
        SELECT * FROM "jobs"
        ${sqlQuery.sqlString};`;  
  console.log(queryText);
  pool
    .query(queryText, sqlQuery.sqlParams)
    .then((dbRes) => res.send(dbRes.rows))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", rejectUnauthenticated, (req, res, next) => {
  const client = req.body.client;
  const jobNumber = req.body.jobNumber;
  const jobDate = req.body.date;
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
 * Get Job details for job cards by id of job
 */

router.get("/:id", rejectUnauthenticated, (req, res) => {
  console.log("req.params is", req.params);


  const queryText = `SELECT "jobsJunction".*, animals.image,animals."name" ,contacts."firstName",contacts."lastName",contacts."primaryNumber",contacts."secondaryNumber",contacts.email
      FROM "jobsJunction"
    JOIN "animals" 
      ON "jobsJunction"."animalsId" = animals.id 
    JOIN "contacts"
      ON "animals"."contactsId" = contacts.id
    WHERE "jobId"= $1`;
  pool
    .query(queryText, [req.params.id])

    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("err in get jobDetails selected job cards", err);
      console.log("req.params.id", req.params);
    });
});

/**
 * Get Job contacts for jobcontacts table by id of job
 */
router.get("/contacts/:id", (req, res) => {
  console.log("req.params of get job contacts by  id", req.params);

  const queryText = `SELECT "jobContacts".*, contacts."firstName",contacts."lastName",contacts."primaryNumber",contacts."secondaryNumber"
      FROM "jobContacts"
    JOIN "contacts" 
      ON "jobContacts"."contactId" = contacts.id 
    WHERE "jobId"= $1`;
  pool
    .query(queryText, [req.params.id])

    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("err in get jobDetails selected job cards", err);
      console.log("req.params.id", req.params);
    });
});

/**
 * Get  get selected job details by job ID for top of selected job page
 */
router.get("/selectedJob/:id", (req, res) => {
  console.log("req.params of selected job details is", req.params.id);

  const queryText = `SELECT * FROM "jobs"
  WHERE "id" = $1
  `;
  pool
    .query(queryText, [req.params.id])

    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("err in get jobDetails selected job top of page ", err);
      console.log("req.params.id", req.params);
    });
});

/**
 * Delete an Job
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
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
router.put("/:id", rejectUnauthenticated, (req, res) => {
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

//put to edit the title of project based on project id
router.put("/edit/:id", rejectUnauthenticated, (req, res) => {
  const sqlText = `UPDATE jobs
    SET description = $1, date = $2, client = $3, notes = $4, "jobNumber" = $5
    WHERE id = $6
    `;
  pool
    .query(sqlText, [
      req.body.newDescription,
      req.body.newDate,
      req.body.newClient,
      req.body.newNotes,
      req.body.newJobNumber,
      req.params.id,
    ])
    .then((result) => {
      res.sendStatus(200);
    })

    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.put("/edit/pay/:id", rejectUnauthenticated, (req, res) => {
  const sqlText = `UPDATE "jobsJunction"
      SET paid = $1, "checkNumber" = $2, "checkAmount" = $3, "checkDate" = $4
      WHERE id = $5
      `;
  pool
    .query(sqlText, [
      req.body.newPaid,
      req.body.newCheckNumber,
      req.body.newCheckAmount,
      req.body.newCheckDate,
      req.params.id,
    ])
    .then((result) => {
      res.sendStatus(200);
    })

    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

/**
 * Delete pet from a Job
 */
router.delete("/pet/:id", (req, res) => {
  // endpoint functionality

  const queryText = `DELETE FROM "jobsJunction" WHERE id= $1`;
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
 * Delete contact from a Job
 */
 router.delete("/contact/:id", (req, res) => {
  // endpoint functionality

  const queryText = `DELETE FROM "jobContacts" WHERE id = $1 `;
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
module.exports = router;

function queryGen(qFilter) {
  console.log("#####################", qFilter);
  let paramNumber = 1;

  let sqlQuery = {
    // will contain sqlString, plus params
    sqlString: "",
    sqlParams: [],
  };
  switch (qFilter.isActive) {
    case "all":
      sqlQuery.sqlString += ` WHERE "id" > 0`;
      break;
    case "true":
      sqlQuery.sqlString += ` WHERE "active" = 'true'`;
      break;
    case "false":
      sqlQuery.sqlString += ` WHERE "active" = false`;
      break;
    default:
      break;
  }
  // let sqlString = ''; --? unsure why this is here, will delete if nothing breaks
  if (qFilter.client) {
    sqlQuery.sqlString += ` AND LOWER("client") ~ $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.client);
    paramNumber++;
  }
  if (qFilter.jobNumber) {
    sqlQuery.sqlString += ` AND "jobNumber" = $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.jobNumber);
    paramNumber++;
  }
  if (qFilter.minD && qFilter.minD !== "") {
    sqlQuery.sqlString += ` AND "date" >= $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.minD);
    paramNumber++;
  }
  if (qFilter.maxD && qFilter.maxD !== "") {
    sqlQuery.sqlString += ` AND "date" <= $${paramNumber}`;
    sqlQuery.sqlParams.push(qFilter.maxD);
    paramNumber++;
  }
  console.log(sqlQuery);
  return sqlQuery;
}
