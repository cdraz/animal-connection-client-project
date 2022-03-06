const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const qFilter = req.params

    // actFilter: "all",
    // audition: "",
    // breed:'',

    // maxL: '',
    // minL: '',

    // maxH: '',
    // minH: '',

    // maxN: '',
    // minN: '',

    // maxB: '',
    // minB: '',

    // minW: '',
    // maxW: '',

    // type: '',

    const queryText = `
        SELECT * FROM "animals" 
        WHERE "breed" = ${qFilter.breed}
        WHERE "type" = ${qFilter.type}
        WHERE "date" > ${qFilter.minA} AND "date" < ${qFilter.maxA}
        WHERE "length" > ${qFilter.minL} AND "length" < ${qFilter.maxL}
        WHERE "height" > ${qFilter.minH} AND "height" < ${qFilter.maxH}
        WHERE "neck" > ${qFilter.minN} AND "neck" < ${qFilter.maxN}
        WHERE "belly" > ${qFilter.minB} AND "belly" < ${qFilter.maxB}
        WHERE "weight" > ${qFilter.minW} AND "weight" < ${qFilter.maxW}
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
