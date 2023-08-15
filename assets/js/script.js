

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

// start button

// cycle question + populate first question

// use click on 'start button', 'submit answer/pick answer', 'cycle answer'

window.addEventListener("click", function(){
    // submit answer
    // check answer
});

// cycle answer

// check answer
function checkAnswer(){

}

var timeLeft = 10;
var timeInterval = setInterval(function() {
    if (timeLeft > 1){
        timerEl.textContent = "Timer: " + timeLeft + "seconds";
        timeLeft--;
    }else if (timeLeft > 0) {
        timerEl.textContent = "Timer: " + timeLeft + "second";
        timeLeft--;
    }else {
        timerEl.textContent = "Game Over";
        clearInterval(timeInterval);
        checkResults();
    }
}, 1000);

// stops quiz input, tally score, push score to local storage
function checkResults() {
    window.removeEventListener();

}