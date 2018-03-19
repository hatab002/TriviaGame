var questionIndex = 0;
var questionsCorrect = 0;
var questionsUnanswered = 0;
var questionsWrong = 0;

$(document).ready(function(){

var q1 = {
        question : "What are the only birds known to fly backwards?",
        correctAnswer : "Hummingbirds",
        combinedAnswers: ["Hummingbirds", "Eagles", "Cardinals", "Hawks"]
        }
var q2 = {
    question : "What is the largest living bird by wingspan?",
    correctAnswer : "Wandering Albatross",
    combinedAnswers: ["Wandering Albatross", "Ostrich", "Bald Eagle", "Emu"]
        }
var q3 = {
    question : "What is a group of parrots called?",
    correctAnswer : "Pandemonium",
    combinedAnswers: ["Pandemonium", "Flock", "School", "None of the above"]
        }
var q4 = {
        question : "What is a baby swan called?",
        correctAnswer : "A cygnet",
        combinedAnswers: ["A cygnet", "An eyasse", "A swanlet", "A poult"]
        }
var q5 = {
        question : "What is the maximum speed of a chicken?",
        correctAnswer : "9 mph",
        combinedAnswers: ["9 mph", "15 mph", "2 mph", "5 mph"]
        }
var q6 = {
        question : "Which of these birds can sleep AND fly at the same time?",
        correctAnswer : "An albatross",
        combinedAnswers: ["An albatross", "A duck", "A pelican", "An owl"]
        }
        
var allObjects= [q1, q2, q3 , q4, q5, q6];
var questionIndex = 0;

function startGame(){
    timer.start();
    load(questionIndex);
    $('#start').hide();
    $('#questions').show();
    $('.reset').hide();
    $('#results').hide();
    }
    
$('#startButton').on("click", startGame);

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