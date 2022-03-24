const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const multer = require("multer");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//AWS3
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const app = express();
const s3 = new aws.S3({
  accessKeyID: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// const upload = multer({ dest: 'public/uploads/' })

//Multer s3 upload
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "starpet-prime",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {

      cb(null, Date.now() + `--` + file.originalname)
    },
  }),
});

// //using storage over destination so i can customize the storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/");
//   },
//   //file name contains original name plus a random number to keep it unique
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 15);
//     cb(null, file.originalname + "-" + uniqueSuffix);
//   },
// });
// //limit file size "dont trust user"
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10000000 },
// });

router.post("/", upload.array("photos", 3), function (req, res, next) {
  res.send("Successfully uploaded " + req.files.length + " files!");
});

router.put(
  "/",
  upload.single("selectedFile"),
  rejectUnauthenticated,
  (req, res, next) => {
    const queryText = `UPDATE "animals"
      SET image = $1
      WHERE id = $2
      `;

    const queryParams = [req.file.location, req.body.id];

    pool
      .query(queryText, queryParams)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log("Add item failed: ", err);
        res.sendStatus(500);
      });
  }
);
module.exports = router;
