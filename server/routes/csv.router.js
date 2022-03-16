const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const multer = require("multer");
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// //using storage over destination so i can customize the storage
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

    router.post("/", upload.single("selectedFile"), function (req, res, next) {
        res.send("Successfully uploaded " + req.files.length + " files!");
    });

module.exports = router;







fs = require('fs');
const csv = require('@fast-csv/parse');
const results = [];

const csvParser = (filePath) => {
    fs.createReadStream(filePath) // <--------------File Path
        .pipe(csv.parse({headers: true}))                    //headers: true uses the first row of CSV file as names for obj, can replace tru with an array of custom headers
        .on('error', error => console.error(error))         //error handler
        .on('data', row => {                               //happens per row of CSV file    ?? fire off posts here ??
                // yield axios.post(`/api/csv`, action.payload);
                results.push(row)
            })              
        .on('end', rowCount => console.log(results));     //happens at the end of function, will need to move results somewhere
}