var express = require('express');
var router = express.Router();

// require and use "multer"...
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('upfile'), function(req, res, next) {
  res.json({'name': req.file.originalname, 'type': req.file.mimetype, 'size': req.file.size})
});

module.exports = router;
