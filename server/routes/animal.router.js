const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('******* GET ANIMALS *******');
    console.log('body is', req.body);
    const qFilter = req.query
    //the silly where id > 0 is just to add a where statement
    //that way i can chain a bunch of AND statement for filtering
    const sqlQuery = queryGen(qFilter)
    let queryText = `
        SELECT * FROM "animals" 
        JOIN "auditions"
            ON "auditions"."animalsId" = "animals"."id"
        ${sqlQuery.sqlString};`
    console.log(queryText);
    let parameters = qFilter
    pool.query(queryText, sqlQuery.sqlParams)
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
    console.log('#####################', qFilter);
    //add params counter, add counter to query 
    //add item to params
    let paramNumber = 1;
    let sqlQuery = { // will contain sqlString, plus params
        sqlString: '',
        sqlParams: [],
    }
    switch (qFilter.actFilter) {
        case 'all':
            sqlQuery.sqlString += `WHERE "animals"."id" >= 0`
            break;
        case 'active':
            sqlQuery.sqlString += `WHERE EXISTS (SELECT * FROM "auditions" WHERE "auditions"."animalsId" = "animals"."id" )`
            break;
        case 'inactive':
            sqlQuery.sqlString += `WHERE NOT EXISTS (SELECT * FROM "auditions" WHERE "auditions"."animalsId" = "animals"."id" )`
            break;
        default:
            break;
    }
    if(qFilter.breed){
        sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.breed);
        paramNumber++;
    }
    if(qFilter.breed){
        sqlQuery.sqlString += ` AND "type" = $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.type);
        paramNumber++;
    }
    if(qFilter.minA){
        sqlQuery.sqlString += ` AND "date" >= $${paramNumber} AND "date" <= $${paramNumber+1}`
        sqlQuery.sqlParams.push(qFilter.minA, qFilter.maxA);
        paramNumber+=2;
    }
    if(qFilter.minL){
        sqlQuery.sqlString += ` AND "length" >= $${paramNumber} AND "length" <= $${paramNumber+1}`
        sqlQuery.sqlParams.push(qFilter.minL, qFilter.maxL);
        paramNumber+=2;
    }
    if(qFilter.minH){
        sqlQuery.sqlString += ` AND "height" >= $${paramNumber} AND "height" <= $${paramNumber+1}`
        sqlQuery.sqlParams.push(qFilter.minH, qFilter.maxH);
        paramNumber+=2;
    }
    if(qFilter.minN){
        sqlQuery.sqlString += ` AND "neckGirth" >= $${paramNumber} AND "neckGirth" <= $${paramNumber+1}`
        sqlQuery.sqlParams.push(qFilter.minN, qFilter.maxN);
        paramNumber+=2;
    }
    if(qFilter.minB){
        sqlQuery.sqlString += ` AND "bellyGirth" >= $${paramNumber} AND "bellyGirth" <= $${paramNumber+1}`
        sqlQuery.sqlParams.push(qFilter.minB, qFilter.maxB);
        paramNumber+=2;
    }
    if(qFilter.minW){
        sqlQuery.sqlString += ` AND "weight" >= $${paramNumber} AND "weight" <= $${paramNumber+1}`
        sqlQuery.sqlParams.push(qFilter.minW, qFilter.maxW);
        paramNumber+=2;
    }
    console.log(sqlQuery);
    return sqlQuery
}
