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
          db.user_instrument.create({
            user_id: userData.id,
            instrument_id: req.body.instrumentId,
            skill_level: req.body.skillLevel
          }).then((userInstrumentData) => res.json(userInstrumentData));
        }
        // if a new user wasn't created because the username is taken,
        // send back an object with a false value to let the front end know.
        else {
          throw new Error("User already exists");
        }
      })
      .catch((err) => { throw new Error(err) });
  },
  // get user login by email ("find one") check password after we get db response from query.
  userLogin: function (req, res) {
    db.user.findOne({
      where: {
        username: req.body.username
      }
    })
      .then((userData) => {
        db.user_instrument.findOne({
          where: {
            user_id: userData.id
          }
        }).then((userInstrumentData) => res.json([userInstrumentData, userData.password]));
      })
      .catch((err) => res.json(err));
  },
  // create a jam session
  createNewSession: function (req, res) {
    console.log(req.body);
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
    db.session.findAll({})
      .then((sessionsData) => res.json(sessionsData))
      .catch((err) => res.json(err));
  },
  getUserName: function (req, res) {
    console.log("req body: ", req.body);
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
    const user = 3;
    const user3 = "usr3";
    db.session.update({
      [user3]: user
    })
      .then((sessionData) => res.json(sessionData))
      .catch((err) => res.json(err));
  }

}