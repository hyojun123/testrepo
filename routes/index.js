var express = require('express');
var router = express.Router();
var boardRouter = require('./board');
router.use('/board',boardRouter);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
