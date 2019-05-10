var exports = module.exports = {}
var path = require("path");

exports.dashboard = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
}


exports.profile = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/myprofile.html"));
}

exports.settings = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/settings.html"));
}


exports.reports = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/reports.html"));
}


exports.newreview = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/newreview.html"));
}


exports.bestdriver = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/bestdriver.html"));
}


exports.Error = function (req, res) {

    res.sendFile(path.join(__dirname, "../public/html/404.html"));
}