module.exports = function (app) {

    app.get('/data/friends', function (req, res) {
        res.json(friends)
    })
    // Posting a new friend from survey
    app.post('/data/friends', function (req, res) {
        var surveyInput = req.body
    // user scores
        var surveyScores = []
        var userScores = surveyInput.surveyScores
        var bestMatch = 0
        var worstMatch = 0
        for(var i = 0; i < friends.length; i++){

            for(var x = 0; userScores.length; x++){
                totalDiff += (Math.abs(parseInt(friends[i].scores[x])))- parseInt(userScores[x])
            }
            scores.push(totalDiff)
        }

// Comparisons
for(var i = 0; i<scores.length; i++){
    //compare scores to each other, and choose the lowest score, 
    //where bestFriend starts at [0] and changes only when another score is lower than it
    if(scores[i] <= scores[bestFriend]){
        bestFriend = i
    }
}

//best friend returned as json
var foundFriend = friends[bestFriend]
res.json(foundFriend)

//add user
friends.push(inputSurvey)
})

}
