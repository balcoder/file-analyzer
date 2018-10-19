var express = require('express');
var router = express.Router();

// require and use "multer"...Multer is a node.js middleware for handling
// multipart/form-data, which is primarily used for uploading files.
var multer  = require('multer')

// set the destination to the uploads folder in root
var upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('upfile'), function(req, res, next) {
  res.json({'name': req.file.originalname, 'type': req.file.mimetype, 'size': req.file.size})
});

module.exports = router;
