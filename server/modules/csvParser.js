const fs = require('fs');
const csv = require('@fast-csv/parse');

const results = [];

fs.createReadStream('./csvpractice.csv') // <--------------File Path
    .pipe(csv.parse({headers: true}))                    //headers: true uses the first row of CSV file as names for obj
    .on('error', error => console.error(error))         //error handler
    .on('data', row => results.push(row))              //happens per row of CSV file
    .on('end', rowCount => console.log(results));     //happens at the end of function, will need to move results somewhere