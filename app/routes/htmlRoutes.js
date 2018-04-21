
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// GET route to survey.html
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html")
    })


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
// Defaut catch all to home.html
module.exports = function (app) {
    app.get('/', function (req, res) {
        res
    })
}


