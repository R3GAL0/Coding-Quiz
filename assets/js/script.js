var questionBank = [
    "Which of these is not a primitive data type?",
    "Which HTML element is used to link the script?",
    "Which of these forms a loop?",
    "What can be stored in an object?"
];
var answerBank = [
    "Boolean", "String", "Undefined", "Object",
    "<script>", "<javascript>", "<js>", "<JSON>",
    "if (true)", "while (true)", ".loop", ".itterate",
    "Primitive data types", "Functions/Methods", "Objects", "All of the above"
];
var solutionBank = ["Object", "<script>", "while (true)", "All of the above"];
var questionIndex = 0;
var playerScore = 0;
var playerArray = JSON.parse(localStorage.getItem('players')) || [];
var highScores = document.querySelector('#highScores');
var startBtn = document.querySelector('#start');
var ulEl = document.querySelector("#question-options");
var notif = document.querySelector('#ans-result');
var timerEl = document.querySelector("#timer");
var timeLeft = 40;


// when start button clicked: cycle question + hide start button
startBtn.addEventListener("click", function () {
    var interval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Time remaining: " + timeLeft + " seconds";
            timeLeft--;
        } else if (timeLeft > 0) {
            timerEl.textContent = "Time remaining: " + timeLeft + " second";
            timeLeft--;
        } else {
            timerEl.textContent = "Game Over";
            clearInterval(interval);
            checkResults();
        }
    }, 1000);
    startBtn.textContent = ' ';
    cycleQ(0);
})

// populates the highscores on the page
function scores() {
    // if there are no prev players skip this
    if (playerArray.length == 0) {
        return;
    }
    // print 'initals' and 'score' for each player
    for (var i = 0; i < playerArray.length; i++) {
        var li = document.createElement("li");
        li.textContent = playerArray[i].initals + ', ' + playerArray[i].score;
        console.log(playerArray[i].initals + ', ' + playerArray[i].score);
        highScores.appendChild(li);

    }
}

// cycle question. Populates the question and possible answers
function cycleQ(index) {
    var h3 = document.querySelector("#question");
    h3.textContent = questionBank[index];
    for (var i = (index * 4); i < index * 4 + 4; i++) {
        var li = document.createElement("li");
        li.textContent = answerBank[i];
        li.setAttribute('data-index', i);
        ulEl.appendChild(li);
    }

    // need to clear old list
    if (index > 0) {
        for (var i = (index-1) * 4; i < (index-1) * 4 + 4; i++) {
            // li = find the data-index i
            var dIndex = ulEl.querySelectorAll('data-index');
            var li; 
            console.log(dIndex);
            // li.textContent = ' ';
        }
    }
}

// Submits the player's answer, checks the answer, and cycles the next question
ulEl.addEventListener("click", function (event) {
    // retrieve the data-index, compare to solutionBank
    var selectedAnsIndex = event.target.getAttribute('data-index');
    var selectedAns = answerBank[selectedAnsIndex];
    console.log("Player selected: " + selectedAns);
    var isCorrect = playerScore;

    for (var i = 0; i < 4; i++) {
        if (selectedAns == solutionBank[i]) {
            playerScore++;
        }
    }
    // USE includes method?

    if (isCorrect + 1 == playerScore) {
        notif.textContent = 'Your answer was correct!';
    } else {
        notif.textContent = 'Your answer was incorrect';
        timeLeft = timeLeft - 10;
    }

    questionIndex++;
    if (questionIndex < 4) {
        cycleQ(questionIndex);
    } else {
        ulEl.removeEventListener("click", function(){});
        checkResults();
        return;
    }

});

// stops quiz input, tally score, push score to local storage
function checkResults() {
    ulEl.removeEventListener("click", function () { });
    var initial = initals();
    player = {
        initals: initial,
        score: playerScore
    };
    playerArray.push(player);

    localStorage.setItem("players", JSON.stringify(playerArray));
    return;
}

// prompts user for their initals
function initals() {
    var inital = window.prompt("Enter your initals")
    if (inital.length == 2) {
        return inital;
    } else {
        return initals();
    }
}

scores();