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
// var playerAns = [];
// I = ++J
var playerScore = 0;
var playerArray = JSON.parse(localStorage.getItem('players')) || [];
var startBtn = document.querySelector('#start');
var ulEl = document.querySelector("#question-options");
var notif = document.querySelector('#ans-result');
var timerEl = document.querySelector("#timer");
var timeLeft = 10;
// arrays of objects == JSON
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

// cycle question 
function cycleQ(index) {
    var h3 = document.querySelector("#question");
    h3.textContent = questionBank[index];
    for (var i = (index * 4); i < index * 4 + 4; i++) {
        var li = document.createElement("li");
        li.textContent = answerBank[i];
        li.setAttribute('data-index', i);
        ulEl.appendChild(li);
    }
}

// submit answer, check answer, cycle next question, stop quiz, tally score, push score to local storage

ulEl.addEventListener("click", function (event) {
    // retrieve the data-index, compare to solutionBank
    var selectedAnsIndex = event.target.getAttribute('data-index');
    var selectedAns = answerBank[selectedAnsIndex];
    console.log(selectedAns);
    var isCorrect = playerScore;
    // ulEl
    for (var i = 0; i < 4; i++) {
        if (selectedAns == solutionBank[i]) {
            playerScore++;
            // print correct
        }
    }
    // includes method

    console.log(playerScore);

    if (isCorrect + 1 == playerScore) {
        // print correct
        notif.textContent = 'Your answer was correct!';
    } else {
        // print not correct
        notif.textContent = 'Your answer was incorrect';
        // decrement time
        timeLeft = timeLeft -10;
    }

    // submit answer
    // check answer
    // if true push true to playerAns[] else push false
});

// check answer
function checkAnswer() {

}


// stops quiz input, tally score, push score to local storage
function checkResults() {
    ulEl.removeEventListener("click", function () { });
    // var score;

    // for (var i = 0; i < 4; i++) {
    //     if (playerAns[i] == true) {
    //         score++;
    //     }
    // }


    var initial = initals();
    player = {
        initals: initial, 
        score: playerScore
    };
    playerArray.push(player);

    localStorage.setItem("players", JSON.stringify(playerArray));
    return;
}


function initals() {
    var inital = window.prompt("Enter your initals")
    if (inital.length == 2) {
        console.log(inital.length);
        return inital;
    } else {
        console.log(inital.length);
        return initals();
    }
}