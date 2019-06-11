var express = require('express');
var router = express.Router();
var boardRouter = require('./board');
router.use('/boards',boardRouter);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/boards');
});

module.exports = router;
