const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');
const multer = require("multer");
// const upload = multer({ dest: 'public/uploads/' })

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
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.put(
    "/",
    upload.single("selectedFile"),
    rejectUnauthenticated,
    (req, res, next) => {
      console.log("req.body is", req.body);
      console.log("req.file is", req.file);
  
      const queryText = `UPDATE "animals"
      SET image = $1
      WHERE id = $2
      `;
  
      const queryParams = [
        req.file.filename,
        req.body.id,
      ];
  
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