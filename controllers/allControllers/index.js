const db = require("../../models");

module.exports = {
  // create new account
  createNewUser: function (req, res) {
    // come back to later
    db.user.findOrCreate({
      defaults: {
        password: req.body.password
      },
      where: {
        username: req.body.username
      }
    })
      .then(([userData, created]) => {
        // join for data from other tables to pass back to the front end.
        if (created) {
          const createdUser = {
            username: userData.username
          }
          res.json(createdUser);
        }
        // if a new user wasn't created because the username is taken,
        // send back an object with a false value to let the front end know.
        else {
          const existingUser = {
            userCreated: false
          }
          res.json(existingUser);
        }
      })
      .catch((err) => res.json(err));
  },
  // get user login by email ("find one") check password after we get db response from query.
  userLogin: function (req, res) {
    db.user.findOne({ username: req.body.username })
      .then((userData) => res.json(userData))
      .catch((err) => res.json(err));
  },
  // create a jam session
  createNewSession: function (req, res) {
    db.session.create(req.body)
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  },
  // get jam sessions
  getJamSessions: function (req, res) {
    db.session.findAll({})
      .then((sessionsData) => res.json(sessionsData))
      .catch((err) => res.json(err));
  },
  // join a jam session
  joinSession: function (req, res) {
    db.session.update({

    })
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  }
}