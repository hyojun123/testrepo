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
    getBoards(req, res);
});

router.get('/write', function (req, res) {
    res.render('board/boardInsert.ejs');
});

router.post('/', function(req, res) {
    insertBoards(req, res);
});

router.get('/:idx', function (req, res) {
    getBoardDetail(req, res);
});

router.put('/:idx', function (req ,res) {
    console.log(req.params.idx);
})
function insertBoards(req, res) {
    var title = req.body.title;
    var writer = req.body.writer;
    var content = req.body.content;
    var query =
        `   INSERT 
              INTO Boards(
                    title,
                    writer,
                    content,
                    createdAt
                   )
            VALUES (
                    '${title}',
                    '${writer}',
                    '${content}',
                    now()
                   )
        `;
    console.log(query);
    connection.query(query,{},function(err, rows) {
        if(err) throw err;
        res.redirect('/boards');
    })
}

function getBoards(req, res) {
    var query =
        `select idx,
                title,
                content,
                date_format(createdAt,'%Y-%m-%d %h:%m') createdAt
           from Boards
          order by createdAt desc 
                `;
    connection.query(query, function (err, rows) {
        res.render('board/board.ejs',{board:rows});
    });
}

function getBoardDetail(req, res) {
    var idx = req.params.idx;
    var updateHit =
        `UPDATE Boards
            SET hits = hits + 1
          WHERE idx = '${idx}'    
        `;
    var getQuery =
        `SELECT
               idx,
               title,
               writer,
               content,
               date_format(createdAt,'%Y-%m-%d %h:%m') createdAt,
               hits
         FROM Boards 
          WHERE idx = '${idx}' 
        `
    console.log('updateHit : ' + updateHit);
    console.log('getQuery : ' + getQuery);
    connection.query(updateHit,{},function(err, rows) {
        if(err) throw err;
        connection.query(getQuery,{}, function (err, rows) {
           if(err) throw err;

           res.render('board/boardDetailView.ejs', {board : rows[0]});
        });
    })
}

module.exports = router;
