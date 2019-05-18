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
  },
  // getting user's info for myProfile page
  getMyInfo: function (req, res) {
    db.user.findOne({ username: req.body.username })
      .then((userData) => res.json(userData))
      .catch((err) => res.json(err));
  },

  // create a user instrument relationship and skill level
  // createUserInstrument: function (req, res) {
  //   return db.sequelize.transaction((t) => {

  //     return db.user.findOne({
  //       where: {
  //         username: req.body.username
  //       }
  //     }, { transaction: t }).then((userData) => {
  //         console.log(userData.id);
  //         return db.instrument.findOrCreate({
  //           where: {
  //             instrument: req.body.instrument
  //           }
  //         }, { transaction: t }).then(([instrumentData, created]) => {
  //             console.log(instrumentData);
  //             return db.user_instrument.create({
  //               user_id: userData.id,
  //               instrument_id: instrumentData.id,
  //               skill_level: req.body.skillLevel
  //             }, { transaction: t });
  //           });
  //       });
  //   })
  //     .then((userInstrumentData) => res.json(userInstrumentData))
  //     .catch((err) => res.json(err));

  // }

  // createUserInstrument: function (req, res) {
  //   this.createNewUser({
  //     username: req.body.username,
  //     password: req.body.password
  //   }).then((userData) => {

  //   })

  // }
}