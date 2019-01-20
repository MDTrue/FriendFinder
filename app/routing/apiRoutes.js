//data variables
var friends = require("../data/friends.js")

module.exports = function (app) {




    //get route for json of possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    //post route for incoming survey results and compatibility logic

    app.post("/api/friends", function (req, res) {
        console.log("hello", req.body)


        //placeholder variable & object
        var friendScore = req.body.scores;
        var scores = [];
        var bestFriend = 0;





        //users scores for comparison to friends




        for (var j = 0; j < friends.length; j++) {
            var difference = 0

            for (var k = 0; k < friendScore.length; k++) {
                difference += Math.abs(friends[j].scores[k] - friendScore[k]);
            }
            scores.push(difference)

            for (var l = 0; l < scores.length; l++)
                if (scores[l] <= scores[bestFriend]) {
                    bestFriend = l;
                };


        }


        var bestie = friends[bestFriend];
        res.json(bestie);
        friends.push(req.body)
        console.log("ARRRRGHHH", bestie, "GRRRRRRR")




    })



};
