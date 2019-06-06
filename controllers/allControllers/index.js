const db = require("../../models");

module.exports = {
  // create new account
  createNewUser: function (req, res) {
    // come back to later
    db.user.findOrCreate({
      defaults: {
        password: req.body.password,
        skill_level: req.body.skillLevel,
        instrument: req.body.instrumentId
      },
      where: {
        username: req.body.username
      }
    })
      .then(([userData, created]) => {
        // If a new user was created, meaning the username was available/unique, 
        // send a response containing the data of the newly created user and a boolean of true.
        if (created) {
          res.json([userData, true]);
        }
        // if a new user wasn't created because the username is taken,
        // send back a response of false to let the front end know.
        else {
          res.json(false);
        }
      })
      .catch((err) => res.json(err));
  },
  // get user login by email ("find one") check password after we get db response from query.
  userLogin: function (req, res) {
    db.user.findOne({
      where: {
        username: req.body.username
      }
    })
      .then((userData) => {
        if (!userData || userData.length <= 0 || userData.password !== req.body.password) {
          res.json(false);
        }
        else {
          res.json([userData, true]);
        }
      })
      .catch((err) => res.json(err));
  },
  // create a jam session
  createNewSession: function (req, res) {
    db.session.create({
      name: req.body.name,
      usr1: req.body.usr1,
      inst1: req.body.inst1,
      skill_level1: req.body.skillLevel1,
      inst2: req.body.inst2,
      skill_level2: req.body.skillLevel2,
      inst3: req.body.inst3,
      skill_level3: req.body.skillLevel3,
      inst4: req.body.inst4,
      skill_level4: req.body.skillLevel4,
      inst5: req.body.inst5,
      skill_level5: req.body.skillLevel5,
      scheduled_date: req.body.date,
      scheduled_time: req.body.time,
      description: req.body.description
    })
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  },
  // get jam sessions
  getJamSessions: function (req, res) {
    db.session.findAll({
      include: [db.user]
    })
      .then((sessionsData) => res.json(sessionsData))
      .catch((err) => res.json(err));
  },
  getUserName: function (req, res) {
    db.user.findOne({
      where: {
        id: req.body.userId
      }
    })
      .then((userData) => res.json(userData))
      .catch((err) => res.json(err));
  },
  // getting a single jam session
  viewJamSession: function (req, res) {
    db.session.findOne({ id: req.params.id })
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  },
  // join a jam session
  joinSession: function (req, res) {
    const userPosition = req.body.userPosition;
    let usrDatabase;
    if (userPosition === 2) {
      usrDatabase = "usr2"
    }
    else if (userPosition === 3) {
      usrDatabase = "usr3"
    }
    else if (userPosition === 4) {
      usrDatabase = "usr4"
    }
    else {
      usrDatabase = "usr5"
    }
    db.session.update({
      [usrDatabase]: parseInt(req.body.userId)
    }, {
        where: {
          id: req.body.sessionId
        }
      })
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  }

}