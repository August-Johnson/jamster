var exports = module.exports = {}
var path = require("path");


exports.login = function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
}

exports.createAccount = function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/createaccount.html"));
}

exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

}