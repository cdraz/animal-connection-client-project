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

        ${sqlQuery.sqlString};`
    console.log(queryText);
    let parameters = qFilter
    pool.query(queryText, sqlQuery.sqlParams)
        .then(dbRes => { res.send(dbRes.rows); console.log(dbRes.rows) })
        .catch((err) => {
            console.log('User registration failed: ', err);
            res.sendStatus(500);
        });
});

router.get('/:id', async (req, res) => {
    try {
        const queryText = `
        SELECT
            "animals".*,
            JSON_AGG(DISTINCT "contacts".*) AS contact,
            JSON_AGG(DISTINCT "auditions") AS auditions,
            JSON_AGG(DISTINCT JSONB_BUILD_OBJECT(
                'jobId', "jobs"."id",
                'jobDescription', "jobs"."description",
                'jobDate', "jobs"."date",
                'jobClient', "jobs"."client",
                'jobActive', "jobs"."active",
                'jobNotes', "jobs"."notes",
                'paid', "jobsJunction"."paid",
                'checkNumber', "jobsJunction"."checkNumber",
                'checkAmount', "jobsJunction"."checkAmount",
                'checkDate', "jobsJunction"."checkDate"
                )) AS jobs
        FROM "animals"
        JOIN "contacts"
            ON "contacts"."id" = "animals"."contactsId"
        JOIN "auditions"
            ON "auditions"."animalsId" = "animals"."id"
        JOIN "jobsJunction"
            ON "jobsJunction"."animalsId" = "animals"."id"
        JOIN "jobs"
            ON "jobsJunction"."jobId" = "jobs"."id"
        WHERE "animals"."id" = $1
        GROUP BY "animals"."id";
        `;
        const queryParams = [
            req.params.id
        ];
        const dbRes = await pool.query(queryText, queryParams);
        console.log(dbRes.rows);
        res.send(dbRes.rows);
    }
    catch (error) {
        console.error('error in GET /api/animal/:id');
        res.sendStatus(500);
    }
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;

function queryGen(qFilter) {
    console.log('#####################', qFilter);
    let paramNumber = 1;
    let sqlQuery = { // will contain sqlString, plus params
        sqlString: '',
        sqlParams: [],
    }
    switch (qFilter.hasWorked) {
        case 'all':
            sqlQuery.sqlString += `WHERE "animals"."id" >= 0`
            break;
        case 'true':
            sqlQuery.sqlString += `WHERE EXISTS (SELECT * FROM "auditions" WHERE "auditions"."animalsId" = "animals"."id" )`
            break;
        case 'false':
            sqlQuery.sqlString += `WHERE NOT EXISTS (SELECT * FROM "auditions" WHERE "auditions"."animalsId" = "animals"."id" )`
            break;
        default:
            break;
    }

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

    if (qFilter.breed && qFilter.breed !== '') {
        console.log('breed');
        sqlQuery.sqlString += ` AND "breed" = $${paramNumber}`;
        sqlQuery.sqlParams.push(qFilter.breed);
        paramNumber++;
    }
    if (qFilter.type && qFilter.type !== '') {
        console.log('type');
        sqlQuery.sqlString += ` AND "type" = $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.type);
        paramNumber++;
    }
    if (qFilter.minA && qFilter.minA !== '') {
        console.log('minA');
        sqlQuery.sqlString += ` AND "date" >= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.minA);
        paramNumber++;
    }
    if (qFilter.maxA && qFilter.maxA !== '') {
        console.log('maxA');
        sqlQuery.sqlString += ` AND "date" <= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.minA);
        paramNumber++;
    }
    if (qFilter.minL && qFilter.minL !== '') {
        console.log('minL');
        sqlQuery.sqlString += ` AND "length" >= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.minL);
        paramNumber++;
    }
    if (qFilter.maxL && qFilter.maxL !== '') {
        console.log('maxL');
        sqlQuery.sqlString += ` AND "length" <= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.maxL);
        paramNumber++;
    }
    if (qFilter.minH && qFilter.minH !== '') {
        console.log('minH');
        sqlQuery.sqlString += ` AND "height" >= $${paramNumber}}`
        sqlQuery.sqlParams.push(qFilter.minH);
        paramNumber++;
    }
    if (qFilter.maxH && qFilter.maxH !== '') {
        console.log('maxH');
        sqlQuery.sqlString += ` AND "height" <= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.maxH);
        paramNumber++;
    }
    if (qFilter.minN && qFilter.minN !== '') {
        console.log('minN');
        sqlQuery.sqlString += ` AND "neckGirth" >= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.minN);
        paramNumber++;
    }
    if (qFilter.maxN && qFilter.maxN !== '') {
        console.log('maxN');
        sqlQuery.sqlString += ` AND "neckGirth" <= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.maxN);
        paramNumber++;
    }
    if (qFilter.minB && qFilter.minB !== '') {
        sqlQuery.sqlString += ` AND "bellyGirth" >= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.minB);
        paramNumber++;
    }
    if (qFilter.maxB && qFilter.maxB !== '') {
        sqlQuery.sqlString += ` AND "bellyGirth" <= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.maxB);
        paramNumber++;
    }
    if (qFilter.minW && qFilter.minW !== '') {
        sqlQuery.sqlString += ` AND "weight" >= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.minW);
        paramNumber++;
    }
    if (qFilter.maxW && qFilter.maxW !== '') {
        sqlQuery.sqlString += ` AND "weight" <= $${paramNumber}`
        sqlQuery.sqlParams.push(qFilter.maxW);
        paramNumber++;
    }
    console.log(sqlQuery);
    return sqlQuery
}
