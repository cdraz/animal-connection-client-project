const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('******* GET ANIMALS *******');
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
        `;

    pool.query(queryText)
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

function queryGen(qFilter){
    let sqlString = '';
    if(qFilter.breed !== ''){
        sqlString += `WHERE "breed" = ${qFilter.breed}`;
    }
    if(qFilter.breed !== ''){
        `WHERE "type" = ${qFilter.type}`
    }
    if(qFilter.minA !== ''){
        `WHERE "date" > ${qFilter.minA} AND "date" < ${qFilter.maxA}`
    }
    if(qFilter.minL !== ''){
        `WHERE "length" > ${qFilter.minL} AND "length" < ${qFilter.maxL}`
    }
    if(qFilter.minH !== ''){
        `WHERE "height" > ${qFilter.minH} AND "height" < ${qFilter.maxH}`
    }
    if(qFilter.minN !== ''){
        `WHERE "neck" > ${qFilter.minN} AND "neck" < ${qFilter.maxN}`
    }
    if(qFilter.minB !== ''){
        `WHERE "belly" > ${qFilter.minB} AND "belly" < ${qFilter.maxB}`
    }
    if(qFilter.minW !== ''){
        `WHERE "weight" > ${qFilter.minW} AND "weight" < ${qFilter.maxW}`
    }
}