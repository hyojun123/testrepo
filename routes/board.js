var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'hjtech.xyz',
    user     : 'chlgkwk',
    password : 'zlfhd134!!',
    database : 'board'
});
/* GET home page. */
router.get('/', function(req, res, next) {
    var query = 'select * from user';
    connection.query(query,function (err, rows) {
        if(err) throw err;
        console.log(rows);
        res.render('board/board.ejs');
    });
});

module.exports = router;
