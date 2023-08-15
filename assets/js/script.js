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
var playerAns = [];
var startBtn = document.querySelector('#start');
// timer vars
var timerEl = document.querySelector("#timer");
var timeLeft = 10;

// when start button clicked: cycle question + hide start button
startBtn.addEventListener("click", function () {
    setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Time remaining: " + timeLeft + " seconds";
            timeLeft--;
        } else if (timeLeft > 0) {
            timerEl.textContent = "Time remaining: " + timeLeft + " second";
            timeLeft--;
        } else {
            timerEl.textContent = "Game Over";
            clearInterval();
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
    var ulEl = document.querySelector("#question-options");
    for (var i = index*4; i < 4; i++) {
        var li = document.createElement("li");
        li.textContent = answerBank[i];
        ulEl.appendChild(li);
    }
}


window.addEventListener("click", function () {
    // submit answer
    // check answer
});

// check answer
function checkAnswer() {

}


// stops quiz input, tally score, push score to local storage
function checkResults() {
    window.removeEventListener("click");

}