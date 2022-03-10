const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('******* GET CONTACTS *******');
  const qFilter = req.query;
  const sqlQuery = queryGen(qFilter)
  let queryText = `
      SELECT * FROM "contacts" 
      ${sqlQuery.sqlString};`
  console.log(queryText);
  pool.query(queryText, sqlQuery.sqlParams)
      .then(dbRes => { res.send(dbRes.rows); console.log(dbRes.rows) })
      .catch((err) => {
          console.log('User registration failed: ', err);
          res.sendStatus(500);
      });
});

//POST New contact
router.post('/', (req, res, next) => {
    console.log('contact detail req.body', req.body);
    const sqlText = `
    INSERT INTO "contacts"
    ("type", "firstName", "lastName", "primaryNumber", "secondaryNumber", "text", "email", "website", "address", "notes")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`
    
    const sqlParams = [
        req.body.type, 
        req.body.firstName,
        req.body.lastName,
        req.body.primaryNumber,
        req.body.secondaryNumber,
        req.body.text,
        req.body.email,
        req.body.website,
        req.body.address,
        req.body.notes
    ]
    pool.query(sqlText, sqlParams)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("project creation failed: ", err);
      res.sendStatus(500);
    });
})

module.exports = router;
