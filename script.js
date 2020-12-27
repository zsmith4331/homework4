var i = 0;
var score = 0;
var secondsLeft = 75;
var countdown = document.querySelector("#time");
var messageDiv = document.querySelector("#message");
var scoreTotals;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var correctSound = new Audio("assets/audio/correct.wav");
var incorrectSound = new Audio("assets/audio/incorrect.wav");

//interval timer countdown//
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countdown.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("You are out of Time!");
            gameOver();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

//Begin quiz//
function beginQuiz() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        gameOver();
        
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

document.getElementById("startButton").addEventListener("click", beginQuiz);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});

answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        incorrectSound.play();
    }
    i++;
    beginQuiz();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        incorrectSound.play();
    }
    i++;
    beginQuiz();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        incorrectSound.play();
    }
    i++;
    beginQuiz();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
        incorrectSound.play();
    }
    i++;
    beginQuiz();
})

//What happens when game is over//
function gameOver() {

    //Creates header for user score//
    var scoreTag = document.createElement("h3");

    //Creates intial input field//
    var inputTag = document.createElement("input");

    //Create submit button//
    var submitButton = document.createElement("Button");

    //Create Text to let user know game is over//
    document.getElementById("question").textContent = "All Done!";

    //Remove elements from screen//
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    countdown.remove();

    //Creates text for to alert user score//
    document.body.children[1].append(scoreTag);
    document.getElementsByTagName("h3")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + secondsLeft;

    //Creates input box to enter intials//
    document.body.children[1].append(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");

    //Creates submit button//
    document.body.children[1].append(submitButton);
    submitButton.textContent = "Submit";

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = secondsLeft + 1;
        storeScores(highScoreText);
        window.location.href = "highScores.html";
    });
}

//Store Scores from Quiz//
function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));

    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}