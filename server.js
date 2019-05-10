const express = require("express");

const app = express();
<<<<<<< HEAD
/* const routes = require("./routes"); */
const PORT = process.env.PORT || 4000;
const db = require('./models');
=======
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

<<<<<<< HEAD
/* app.use(routes); */
=======
app.use(routes);
>>>>>>> d550d6a199ded16f0ab943fc0f27dfe289d40bec

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
