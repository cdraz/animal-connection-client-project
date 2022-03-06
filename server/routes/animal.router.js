const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('******* GET ANIMALS *******');
    console.log('body is', req.body);
    const qFilter = req.query
    //the silly where id > 0 is just to add a where statement
    //that way i can chain a bunch of AND statement for filtering
    let queryText = `
        SELECT * FROM "animals" 
        JOIN "auditions"
            ON "auditions".'animalsId' = "animals".'id'
        WHERE id >= 0
        ${queryGen(qFilter)};`
    console.log(queryText);
    let parameters = qFilter
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

// function queryGen(qFilter){
//     console.log('#####################', qFilter);
//     let sqlString = '';
//     if(qFilter.breed){
//         sqlString += ` WHERE "breed" = $1`;
//     }
//     if(qFilter.breed){
//         sqlString += ` WHERE "type" = $2`
//     }
//     if(qFilter.minA){
//         sqlString += ` WHERE "date" > $3 AND "date" < $4`
//     }
//     if(qFilter.minL){
//         sqlString += ` WHERE "length" > $5 AND "length" < $6`
//     }
//     if(qFilter.minH){
//         sqlString += ` WHERE "height" > $7 AND "height" < $8`
//     }
//     if(qFilter.minN){
//         sqlString += ` WHERE "neck" > $9 AND "neck" < $10`
//     }
//     if(qFilter.minB){
//         sqlString += ` WHERE "belly" > $11 AND "belly" < $12`
//     }
//     if(qFilter.minW){
//         sqlString += ` WHERE "weight" > $13 AND "weight" < $14`
//     }
//     return sqlString
// }

//how secure is this? couldnt someone just add sql into the url? 
function queryGen(qFilter){
    //add params counter, add counter to query 
    //add item to params
    console.log('#####################', qFilter);
    let sqlString = '';
    switch (qFilter.actFilter) {
        case 'all':
            sqlString += ''
            break;
        case 'active':
            sqlString += `WHERE EXISTS (SELECT * FROM "auditions" WHERE "auditions"."animalsId" = "animals"."audition" )`
            break;
        case 'inactive':
            sqlString += ''
            break;
        default:
            break;
    }
    if(qFilter.breed){
        sqlString += ` AND "breed" = ${qFilter.breed}`;
    }
    if(qFilter.breed){
        sqlString += ` AND "type" = ${qFilter.type}`
    }
    if(qFilter.minA){
        sqlString += ` AND "date" > ${qFilter.minA} AND "date" < ${qFilter.maxA}`
    }
    if(qFilter.minL){
        sqlString += ` AND "length" > ${qFilter.minL} AND "length" < ${qFilter.maxL}`
    }
    if(qFilter.minH){
        sqlString += ` AND "height" > ${qFilter.minH} AND "height" < ${qFilter.maxH}`
    }
    if(qFilter.minN){
        sqlString += ` AND "neckGirth" > ${qFilter.minN} AND "neckGirth" < ${qFilter.maxN}`
    }
    if(qFilter.minB){
        sqlString += ` AND "bellyGirth" > ${qFilter.minB} AND "bellyGirth" < ${qFilter.maxB}`
    }
    if(qFilter.minW){
        sqlString += ` AND "weight" > ${qFilter.minW} AND "weight" < ${qFilter.maxW}`
    }
    return sqlString
}