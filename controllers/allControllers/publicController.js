var exports = module.exports = {}
var path = require("path");

exports.home = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  
}
  exports.login = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  
}
  exports.createAccount = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/createaccount.html"));
  
}

exports.fourohfour = function (req, res) {

  res.sendFile(path.join(__dirname, "../public/html/index.html"));

}