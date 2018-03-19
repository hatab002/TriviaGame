var questionIndex = 0;
var questionsCorrect = 0;
var questionsUnanswered = 0;
var questionsWrong = 0;

$(document).ready(function(){

var q1 = {
        question : "this is a random question 1",
        correctAnswer : "correct answer",
        combinedAnswers: ["correct answer", "wrong answer1", "wrong answer2", "wrong answer 3"]
        }
var q2 = {
    question : "this is a random question 2",
    correctAnswer : "2correct answer",
    combinedAnswers: ["2correct answer", "2wrong answer1", "2wrong answer2", "2wrong answer 3"]
        }
var q3 = {
    question : "this is a random question 3",
    correctAnswer : "3correct answer",
    combinedAnswers: ["3correct answer", "3wrong answer1", "3wrong answer2", "3wrong answer 3"]
        }
var q4 = {
        question : "this is a random question 4",
        correctAnswer : "4correct answer",
        combinedAnswers: ["4correct answer", "4wrong answer1", "4wrong answer2", "4wrong answer 3"]
        }
var q5 = {
        question : "this is a random question 5",
        correctAnswer : "5correct answer",
        combinedAnswers: ["5correct answer", "5wrong answer1", "5wrong answer2", "5wrong answer 3"]
        }
var q6 = {
        question : "this is a random question 6",
        correctAnswer : "6correct answer",
        combinedAnswers: ["6correct answer", "6wrong answer1", "6wrong answer2", "6wrong answer 3"]
        }
        
var allObjects= [q1, q2, q3 , q4, q5, q6];
var questionIndex = 0;
    
var timer = {
    time : 10,
    start : countdown = function() {
        setInterval( function(){
            if (timer.time > 0){
            $('.timer').html("00:00:" + timer.time--);}
            else {
                timeOut();
                clearInterval(this);
                timer.time = 10;
                setTimeout(() => {
                    nextQuestionShinanigans();
                }, 3000);
                }
            }, 1000)},
    
    reset: function(){
                this.time = 10;
                $('.timer').html("00:00:" + timer.time);
            },
    stop: function(){clearInterval(countdown);}
            
            }
function startGame(){
    timer.start();
    load(questionIndex);
    $('#start').hide();
    $('#questions').show();
    $('.reset').hide();
    $('#results').hide();
    }
    
$('#startButton').on("click", startGame);
        
// Shuffling questions and answers -------------------------------------------------
function shuffle(array) {
    var currentIndex = array.length, tempValue, randomIndex; 
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
        }
    return array;
        }   
// ------------------------------------------------------------------------------------    
questionsCorrect = 0;
$('#questionsCorrect').text("Questions correct: " + questionsCorrect);
questionsWrong = 0;
$('#questionsWrong').text("Questions wrong: " + questionsWrong);
questionsUnanswered = 0;
$('#questionsUnanswered').text("Questions unanswered: " + questionsUnanswered);
    
function win(){
    houdini();
    $('#correctAnswer').empty();
    questionsCorrect++;
    $('#questionsCorrect').text("Questions correct: " + questionsCorrect);      
};
function lose(){
    $('#correctAnswer').empty();
    $('#correctAnswer').text("Correct answer: " + allObjects[questionIndex].correctAnswer)
    houdini();
    questionsWrong++;
    $('#questionsWrong').text("Questions wrong: " + questionsWrong);       
};
function timeOut(){
    if(questionIndex < allObjects.length){
        $('#correctAnswer').empty();
        $('#correctAnswer').text("Correct answer: " + allObjects[questionIndex].correctAnswer)
        $('#start').hide();
        houdini();
        questionsUnanswered++;
        $('#questionsUnanswered').text("Questions unanswered: " + questionsUnanswered);
        } 
    };

function houdini(){
    questionIndex++;
    $('#randomQuestion').empty();
    $('.answers').empty();
    $('#questions').hide();
    $('#results').show();
    }
    
shuffle(allObjects);
shuffle(allObjects[questionIndex].combinedAnswers);
function nextQuestionShinanigans(){
    if ( questionIndex < allObjects.length){
        $('.reset').hide();
        timer.stop();
        timer.reset();
        load();
        $('#questions').show();
        $('#results').hide();
    }
    else if (questionIndex = allObjects.length) {
        timer.stop();
        $('#questions').hide();
        $('#results').show();
        $('.reset').show();            
    }
}
function load(){
    if(questionIndex < allObjects.length){$('#randomQuestion').append(allObjects[questionIndex].question)};
    for (i =0; i < allObjects[questionIndex].combinedAnswers.length; i++){
    $('.answers').append("<button class='btnAnswer btn btn-primary abtn'>" + allObjects[questionIndex].combinedAnswers[i] + "</button>")
    };
}
// Answer check-----------------------------------------------
var correctAnswers = [q1.correctAnswer, q2.correctAnswer, q3.correctAnswer, q4.correctAnswer, q5.correctAnswer, q6.correctAnswer]

$('.answers').on("click",".btnAnswer", function answerCheck(){
            if ($(this).text() === correctAnswers[0] || $(this).text() === correctAnswers[1] || $(this).text() === correctAnswers[2] || $(this).text() === correctAnswers[3] || $(this).text() === correctAnswers[4] || $(this).text() === correctAnswers[5]){
                timer.stop();
                console.log($(this).text());
                win();
                setTimeout(() => {
                    nextQuestionShinanigans();
                }, 3000);
            } else {
                timer.stop();
                lose();
                setTimeout(() => {
                    nextQuestionShinanigans();
                }, 3000);
            };
});
       
function resetGame(){
    // $('#start').show();
    // $('#questions').hide();
    // $('#results').hide();
    // questionIndex = 0;
    // questionsCorrect = 0;
    // questionsUnanswered = 0;
    // questionsWrong = 0;
    // timer.stop();
    // timer.reset();
    // timer.time = 10;
    // nextQuestionShinanigans().stop();
    // load().stop();
    location.reload();
    }
    

    $('#results').append("<button class='reset btn btn-primary abtn'>Reset Game</button>");
    $('.reset').on("click", resetGame)
       
});