var i = 0;
var score = 0;
var secondsLeft = 75;
var countdown = document.querySelector("#time");
var messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var correctSound = new Audio("assets/audio/correct.wav");
var incorrectSound = new Audio("assets/audio/incorrect.wav");


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countdown.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("You are out of Time!");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

function questionStarter() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

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

document.getElementById("startButton").addEventListener("click", questionStarter);
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
    questionStarter();
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
    questionStarter();
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
    questionStarter();
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
    questionStarter();
})