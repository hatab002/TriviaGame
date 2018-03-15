$(document).ready(function(){

var q1 = {
        question : "this is a random question 1",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["wrong answer1", "wrong answer2", "wrong answer 3"],
        combinedAnswers: ["correct answer", "wrong answer1", "wrong answer2", "wrong answer 3"]
    }
var q2 = {
    question : "this is a random question 2",
    correctAnswer : ["2correct answer"],
    wrongAnswers : ["2wrong answer1", "2wrong answer2", "2wrong answer 3"],
    combinedAnswers: ["2correct answer", "2wrong answer1", "2wrong answer2", "2wrong answer 3"]
}
var q3 = {
    question : "this is a random question 3",
    correctAnswer : ["3correct answer"],
    wrongAnswers : ["3wrong answer1", "3wrong answer2", "3wrong answer 3"],
    combinedAnswers: ["3correct answer", "3wrong answer1", "3wrong answer2", "3wrong answer 3"]
}
var q4 = {
        question : "this is a random question 4",
        correctAnswer : ["4correct answer"],
        wrongAnswers : ["4wrong answer1", "4wrong answer2", "4wrong answer 3"],
        combinedAnswers: ["4correct answer", "4wrong answer1", "4wrong answer2", "4wrong answer 3"]
    }
    var q5 = {
        question : "this is a random question 5",
        correctAnswer : ["5correct answer"],
        wrongAnswers : ["5wrong answer1", "5wrong answer2", "5wrong answer 3"],
        combinedAnswers: ["5correct answer", "5wrong answer1", "5wrong answer2", "5wrong answer 3"]
    }
    var q6 = {
        question : "this is a random question 6",
        correctAnswer : ["6correct answer"],
        wrongAnswers : ["6wrong answer1", "6wrong answer2", "6wrong answer 3"],
        combinedAnswers: ["6correct answer", "6wrong answer1", "6wrong answer2", "6wrong answer 3"]
    }
    
    var allObjects= [q1, q2, q3 , q4, q5, q6];

    

    $('#startButton').on("click", function startFunction(){
        $('#start').hide();
        $('#questions').show();
        $('#results').hide();
        
    })
    
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
      shuffle(allObjects);

      for (i = 0; i < allObjects.length; i++){
        let ques = allObjects[i].question;
        $('#randomQuestion').html(ques);
        let ans = allObjects[i].combinedAnswers
        shuffle(ans);
        $('#answerA').text(ans[0]);
        $('#answerB').text(ans[1]);
        $('#answerC').text(ans[2]);
        $('#answerD').text(ans[3]);

        $('.answer').on("click", function loadNext(){
            if ($('.answer').value === allObjects[i].correctAnswer){
                win();
                console.log($('.answer').value);

            }
        });
    }
    // Timer----------------------------------------------------------
    var sec = 30
    var timer = setInterval(function() { 
    $('.timer').html("00:00:" + sec--);
    if (sec === 0) {
        timeOut();
        clearInterval(timer);
    }
    }, 1000);
    // ---------------------------------------------------------------
    var questionsCorrect = 0;
    $('#questionsCorrect').text(questionsCorrect);
    var questionsWrong = 0;
    $('#questionsWrong').text(questionsWrong);
    var questionsUnanswered = 0;
    $('#questionsUnanswered').text(questionsUnanswered);

    function win(){
        $('#questions').hide();
        $('#results').show();
        questionsCorrect++;
        $('#questionsCorrect').text(questionsCorrect);

    };
    function lose(){
        $('#questions').hide();
        $('#results').show();
        questionsWrong++;
        $('#questionsWrong').text(questionsWrong);

    };
    function timeOut(){
        $('#questions').hide();
        $('#results').show();
        questionsUnanswered++;
        $('#questionsUnanswered').text(questionsUnanswered);

    };





});