const fs = require('fs');
const csv = require('@fast-csv/parse');

const results = [];
const csvParser = (filePath) => {
    fs.createReadStream(filePath) // <--------------File Path
        .pipe(csv.parse({headers: true}))                    //headers: true uses the first row of CSV file as names for obj, can replace tru with an array of custom headers
        .on('error', error => console.error(error))         //error handler
        .on('data', row => {                               //happens per row of CSV file    ?? fire off posts here ??
                yield axios.post(`/api/csv`, action.payload);
                results.push(row)
            })              
        .on('end', rowCount => console.log(results));     //happens at the end of function, will need to move results somewhere
}

function* uploadCSV(action){
    csvParser(action.payload)
}

function* csvSaga () {
    yield takeLatest('UPLOAD_CSV', uploadCSV);
}
export default csvSaga;