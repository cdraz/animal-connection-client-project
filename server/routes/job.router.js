const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('******* GET JOBS *******');
    console.log(req.body);
    const qFilter = req.query
    let queryText = `
        SELECT * FROM "jobs"
        ` + queryGen(qFilter);
    console.log(queryText);
    pool.query(queryText)
        .then( dbRes => res.send(dbRes.rows))
        .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

function queryGen(qFilter){
    switch (qFilter.isActive) {
        // case 'all':
        //     sqlQuery.sqlString += `AND "animals"."active"`
        //     break;
        case 'true':
            sqlQuery.sqlString += `AND "animals"."active" = true`
            break;
        case 'false':
            sqlQuery.sqlString += `AND "animals"."active" = false`
            break;
        default:
            break;
    }
    console.log('#####################', qFilter);
    let sqlString = '';
    if(qFilter.breed){
        sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.breed);
        paramNumber++;
    }
    if(qFilter.breed){
        sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.breed);
        paramNumber++;
    }
    if(qFilter.breed && qFilter.breed !== ''){
        sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.breed);
        paramNumber++;
    }
    return sqlString
}
