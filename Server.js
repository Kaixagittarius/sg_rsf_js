var express = require('./node_modules/express');
var app = express();

var ListenPort = 3000;

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/css', express.static(__dirname + '/assets/css'));
app.use('/img', express.static(__dirname + '/assets/img'));
app.use('/views', express.static(__dirname + '/views'));

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(ListenPort, function() {
	console.log("Live at Port " + ListenPort.toString());
});