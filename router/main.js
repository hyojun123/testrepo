module.exports = function(app) {
    app.get('/', function(req, res) {
        console.log("get /");
        res.render('index.html');
    });
    app.get('/about', function(req, res) {
        console.log("get /about");
        res.render('about.html');
    });
}