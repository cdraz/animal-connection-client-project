const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("******* GET JOBS *******");
  const qFilter = req.query;
  const sqlQuery = queryGen(qFilter)
  console.log(qFilter);
  let queryText =
    `
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

function queryGen(qFilter){
    console.log('#####################', qFilter);
  let paramNumber = 1;
  let sqlQuery = { // will contain sqlString, plus params
      sqlString: '',
      sqlParams: [],
    }
    switch (qFilter.isActive) {
        case 'all':
            sqlQuery.sqlString += ` WHERE "id" > 0`
            break;
        case 'true':
            sqlQuery.sqlString += ` WHERE "active" = 'true'`
            break;
        case 'false':
            sqlQuery.sqlString += ` WHERE "active" = false`
            break;
        default:
            break;
    }
    let sqlString = '';
    if(qFilter.client){
        sqlQuery.sqlString += ` AND LOWER("client") ~ $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.client);
        paramNumber++;
    }
    if(qFilter.jobNumber){
        sqlQuery.sqlString += ` AND "jobNumber" = $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.jobNumber);
        paramNumber++;
    }
    if(qFilter.minD && qFilter.minD !== ''){
        sqlQuery.sqlString += ` AND "date" >= $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.minD);
        paramNumber++;
    }
    if(qFilter.maxD && qFilter.maxD !== ''){
        sqlQuery.sqlString += ` AND "breed" <= $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.maxD);
        paramNumber++;
    }
    console.log(sqlQuery);
    return sqlQuery
}
