var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");
var app = express();
app.use(bodyparser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var path = require('path');
app.use(express.static(__dirname + '/../'));

app.get("/", function(req, res) {
	res.sendFile(__dirname+'/'+"index.html");
});

var aanwezigen;
var url='http://localhost:3000/aanwezigen.json';
request({url: url, json: true}, function (error, response, body) {
  //  console.log(response);
    if (!error && response.statusCode === 200) {
        console.log('test@');
        console.log(body); // Print the json response
        aanwezigen = body;
    };
});

app.get("/aanwezigen", function(req, res) {
	res.json(aanwezigen);
});

var port = Number(process.env.PORT || 3000);

app.listen(port);
