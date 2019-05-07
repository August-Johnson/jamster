require("dotenv").config();
var express = require("express");
var db = require("./app/models");
var app = express();
var PORT = process.env.PORT || 3000;
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("app/public"));

// Routes

require("./app/routes/apiRoutes")(app, db);
require("./app/routes/auth.js")(app,passport);
require("./app/routes/protectedHTML.js")(app, db);
require("./app/routes/publicHTML.js")(app, db);

 

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
