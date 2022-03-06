const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

    // actFilter: "all",
    // audition: "",
    // breed:'',
    // maxD: '',
    // maxW: '',
    // minD: '',
    // minW: '',
    // type: '',

    const queryText = `
        SELECT * FROM "animals" 
        WHERE "breed"=${req.params.breed}
        WHERE "breed"=${req.params.breed}
        WHERE "type"=${req.params.type}
        `;

    pool.query(queryText, [username, password])
        .then(() => res.sendStatus(201))
        .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
    });;
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
