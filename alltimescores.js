var highScoreList = document.querySelector("#highscores");
var backToGameButton = document.querySelector("#go-back");
var clearHighScores = document.querySelector("#clear-highscores");

initScores();

function initScores() {
    scoreTotals = JSON.parse(localStorage.getItem("scores"));

    if (scoreTotals !== null) {
        scoreList = scoreTotals;
    }
    renderScores();
}

function clearAll() {
    window.localStorage.clear();
}

function renderScores() {
    if (scoreTotals !== null) {
        scoreList.sort(function (a, b) {
            return a.newScore - b.newScore;
        });
        scoreList.reverse(function (a, b) {
            return a.newScore - b.newScore
        })

        for (i = 0; i < scoreList.length; i++) {
            var scoreListItem = scoreList[i];
            var tr = document.createElement("tr");
            var nameCell = document.createElement("td");
            var nameCellText = document.createTextNode(scoreListItem.name);
            var scoreCell = document.createElement("td");
            var scoreCellNum = document.createTextNode(scoreListItem.newScore);

            tr.setAttribute("tr-index", i);
            document.getElementById("highscores").appendChild(tr);
            tr.appendChild(nameCell);
            nameCell.appendChild(nameCellText);
            tr.appendChild(scoreCell);
            scoreCell.appendChild(scoreCellNum);

        }
    }
}

clearHighScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "highscores.html";
})
backToGameButton.addEventListener("click", function () {
    window.location.href = "index.html";
})