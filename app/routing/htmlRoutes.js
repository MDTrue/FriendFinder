var path = require("path");

module.exports = function (app) {
    //get route to survey to display survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname,  "/../public/survey.html"));
    })

    //default to home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname,  "/../public/home.html"))
    })
}