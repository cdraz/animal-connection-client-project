const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * Get all of the active jobs
 */
 router.get("/", (req, res) => {
    const queryText = `
      SELECT * FROM "jobs" 
      WHERE "active" = true`;
    pool
      .query(queryText)
      .then((dbRes) => {
        console.log(dbRes);
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.error("err in get active jobs ", err);
      });
  });

module.exports = router;
