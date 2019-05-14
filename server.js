const express = require("express");

const app = express();
/* const routes = require("./routes"); */
const PORT = process.env.PORT || 4000;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

/* app.use(routes); */

db.sequelize.sync({force: true}).then(() => {
  console.log("wtf");
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
