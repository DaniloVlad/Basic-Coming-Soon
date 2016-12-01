var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json()); //Populates body of requests
app.use(express.static(__dirname)); //declare the directory

app.get("/", function(req, res, next) {
	res.sendFile('index.html');
});

app.post("/email", function(req,res,next) {
	var email = req.body.email; //do what you want with the users email
	console.log(email);
	res.sendStatus(200);
})
app.listen(3000);