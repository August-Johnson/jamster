const express = require("express");

const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const db = require('./models');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.use(path.join(__dirname, 'build'));
}

app.use(routes);

// this is a test comment line 

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
