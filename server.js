// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// Middleware
// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, 'app/public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())



// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});


var userArr = []

// Displays JSON of ALL Possible friends
app.get('/api/friends', function (req, res) {
  res.json(userArr)
})


app.post('/api/friends', function (req, res){
  res.redirect('contact.html')
})

var PORT = process.env.PORT || 	8889
// listening port
console.log('starting server on ' + PORT);
app.listen(PORT, function (e) {
  if (e) throw e
})


