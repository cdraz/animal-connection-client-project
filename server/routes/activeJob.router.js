const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the active jobs
 */
 router.get("/", rejectUnauthenticated, (req, res) => {
    const queryText = `
      SELECT * FROM "jobs" 
      WHERE "active" = true`;
    pool
      .query(queryText)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.error("err in get active jobs ", err);
      });
  });

module.exports = router;
