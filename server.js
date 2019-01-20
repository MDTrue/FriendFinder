//requirements

var express = require("express");
var bodyParser = require("body-parser")
var path = require("path")
//setting app = express for shorthand
var app = express();
//connecting to localhost set up for heroku
var PORT = process.env.PORT || 3000

//bodyparser to access requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Serve up static assets from public
app.use(express.static(path.join(__dirname, './app/public')));

//mapping server to route files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);




//port listener set up
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
  })