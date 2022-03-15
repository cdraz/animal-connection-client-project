const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET Animal types
 */
 router.get('/', rejectUnauthenticated, async (req, res) => {
    try {
        console.log('******* GET /types *******');
        const queryText = 'SELECT * FROM "animalTypes"';
        const dbRes = await pool.query(queryText);
        res.send(dbRes.rows);
    }
    catch (error) {
        console.error('ERROR in GET /animals/types', error);
        res.sendStatus(500);
    }
});

module.exports = router;