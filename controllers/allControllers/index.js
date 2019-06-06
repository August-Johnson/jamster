const db = require("../../models");
const Op = db.Sequelize.Op;

module.exports = {
  // Create new account
  createNewUser: function (req, res) {
    // Find or create a user. Looks for an existing user with the username entered in the front end.
    // Return false for created, if a user was found with that username, otherwise return true.
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
        // If a new user wasn't created because the username is taken,
        // send back a response of false to let the front end know.
        else {
          res.json(false);
        }
      })
      .catch((err) => res.json(err));
  },
  // Get user login by username ("find one")and check 
  // their password after we get a database response from the query.
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
  // Create a jam session using the object being passed/submitted from the front end.
  createNewSession: function (req, res) {
    db.session.create({
      name: req.body.name,
      scheduled_date: req.body.date,
      scheduled_time: req.body.time,
      description: req.body.description,
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
      skill_level5: req.body.skillLevel5
    })
      .then((sessionData) => {
        db.user_session.create({
          userId: sessionData.usr1,
          sessionId: sessionData.id
        })
          .then((userSessionResponse) => res.json(userSessionResponse));
      })
      .catch((err) => res.json(err));
  },
  // get jam sessions and all users in each session.
  getJamSessions: function (req, res) {
    // Only return the user data we need. (not their password)
    // Only return the jam sessions that the user didn't create
    db.session.findAll({
      include: {
        model: db.user,
        attributes: { exclude: ['password'] }
      },
      where: {
        usr1: {
          [Op.ne]: req.body.id
        }
      }
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
  // Getting a single jam session (not implemented yet)
  viewJamSession: function (req, res) {
    db.session.findOne({ id: req.params.id })
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  },
  // Join a jam session
  joinSession: function (req, res) {
    // Checking for the position the user joined at.
    const userPosition = req.body.userPosition;
    let usrDatabase;
    switch (parseInt(userPosition)) {
      case 2:
        usrDatabase = "usr2";
        break;
      case 3:
        usrDatabase = "usr3";
        break;
      case 4:
        usrDatabase = "usr4";
        break;
      default:
        usrDatabase = "usr5"
    }
    // Update the position the user joined at in the database to hold their id.
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