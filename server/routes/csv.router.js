const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const multer = require("multer");
const Papa = require('papaparse')

const {
    rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//using storage over destination so i can customize the storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  //file name contains original name plus a random number to keep it unique
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 15);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});
//limit file size "dont trust user"
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});



router.post("/", function (req, res) {
    Papa.parse(req.body, {
        header: true,
        complete: function(results) {
            console.log("Finished:", results.data);
        }
    });
    // console.log('###############');
    // res.send("Successfully uploaded " + req.file.length + " files!");
});


// router.put(
//     "/",
//     upload.single("selectedFile"),
//     rejectUnauthenticated,
//     (req, res, next) => {
//     console.log("req.body is", req.body);
//     console.log("req.file is", req.file);

//     const queryText = `UPDATE "animals"
//         SET image = $1
//         WHERE id = $2
//     `;

//     const queryParams = [req.file.location, req.body.id];

//     pool
//         .query(queryText, queryParams)
//         .then(() => res.sendStatus(201))
//         .catch((err) => {
//         console.log("Add item failed: ", err);
//         res.sendStatus(500);
//     });
// }
// );


module.exports = router;




// fs = require('fs');
// const csv = require('@fast-csv/parse');
// //const results = [];

// const csvParser = (filePath, onComplete) => {
//     let results = [];
//     fs.createReadStream(filePath) // <--------------File Path
//         .pipe(csv.parse({headers: true}))                    //headers: true uses the first row of CSV file as names for obj, can replace tru with an array of custom headers
//         .on('error', error => console.error(error))         //error handler
//         .on('data', row => {                               //happens per row of CSV file    ?? fire off posts here ??
//                 // yield axios.post(`/api/csv`, action.payload);
//                 results.push(row)
//             })              
//         .on('end', rowCount => onComplete(results));     //happens at the end of function, will need to move results somewhere
// }


// router.post('/', (req, res) => {
//     csvParser('file.csv', (results) => {
//         res.send(results);
//     })
// })