const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET New contact
router.get('/', (req, res) => {
    console.log("GET CONTACTS");
    console.log(req.body);
    let queryText =
      `
          SELECT * 
          FROM "contacts"
          ORDER BY id DESC
          LIMIT 1
          ` 
    pool.query(queryText)
      .then((dbRes) => res.send(dbRes.rows[0]))
      .catch((err) => {
        console.log("User registration failed: ", err);
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

//Edit contact 
router.put('/', (req, res) => {
  console.log('this is req.body in put', req.body);
  const sqlText = `UPDATES "contacts"
                   SET
                    "type" = $1,
                    "firstName" = $2,
                    "lastName" = $3,
                    "primaryNumber" = $4,
                    "secondaryNumber" $5,
                    "text" = $6,
                    "email" = $7, 
                    "website" = $8,
                    "address" = $9,
                    "notes" = $10 
                   WHERE "id" = $11 
                    
                    `;
  const sqlParams = [
    req.body.type,
    req.body.firstName,
    req.body.lastNme,
    req.body.primaryNumber,
    req.body.secondaryNumber,
    req.body.text,
    req.body.email,
    req.body.website,
    req.body.address,
    req.body.notes,
    req.body.id
  ]
  pool.query(sqlText, sqlParams)
   .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("project creation failed: ", err);
      res.sendStatus(500);
    });
                   
})

module.exports = router;
