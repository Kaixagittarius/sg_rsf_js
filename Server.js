var express = require("./node_modules/express");
var app = express();
var router = express.Router();

var ListenPort = 3000;

app.use(express.static("assets"));

router.use(function (req, res, next){
	console.log("/" + req.method);
	next();
});

var staticHtmlPath = __dirname + '/views/';

router.get("/", function(req, res){
	res.sendFile(staticHtmlPath + "index.html");
});

router.get("/about", function(req, res){
	res.sendFile(staticHtmlPath + "about.html");
});

router.get("/contact", function(req, res){
	res.sendFile(staticHtmlPath + "contact.html");
});

app.use("/", router);

app.use("*", function(req, res){
	res.sendFile(staticHtmlPath + "404.html");
});

app.listen(ListenPort, function(){
	console.log("Live at Port " + ListenPort.toString());
});