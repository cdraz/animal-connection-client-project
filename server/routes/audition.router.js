const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * POST an audition
 */
 router.post("/", rejectUnauthenticated, (req, res) => {
    const queryText = `
        INSERT INTO "auditions" ("animalsId", "date")
        VALUES ($1, $2);
      `;

    const queryParams = [
        req.body.id,
        req.body.date
    ];

    pool
      .query(queryText, queryParams)
      .then((dbRes) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error("Error in POST /api/audition", err);
      });
  });

  /**
 * DELETE an audition
 */
 router.delete("/:id", rejectUnauthenticated, (req, res) => {
    const queryText = `
        DELETE FROM "auditions"
        WHERE "id" = $1
      `;

    const queryParams = [
        req.params.id
    ];
    pool
      .query(queryText, queryParams)
      .then((dbRes) => {
        res.sendStatus(201);
        console.log('DELETE SUCCESS in /api/audition');
      })
      .catch((err) => {
        console.error("Error in DELETE /api/audition/:id", err);
      });
  });

module.exports = router;
