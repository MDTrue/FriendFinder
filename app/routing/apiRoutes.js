//data variables
var friends = require("../data/friends.js")

module.exports = function (app) {




    //get route for json of possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    //post route for incoming survey results and compatibility logic

    app.post("/api/friends", function (req, res) {
console.log("hello",req.body)
        //placeholder variable & object
        var totalDifference = 1000


        var matchName = ""
        var matchImg = ""


        //users scores for comparison to friends
        var userInput = req.body;
        var userScores = userInput.scores



        for (var j = 0; j < friends.length; j++) {
            var difference = 0

            for (var k = 0; k < userScores.length; k++) {
                difference += Math.abs(friends[j], scores[k] - userScores[k]);
            }

            if (difference < totalDifference) {
                totalDifference = difference;
                bestMatch.name = friends[j].name
                matchImage = friends[j].photo
            }
        }







    })


    
};
