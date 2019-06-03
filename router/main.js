module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index/index.html');
    });
    app.get('/boards', function(req, res) {
        res.render('board/main.html');
    });
}