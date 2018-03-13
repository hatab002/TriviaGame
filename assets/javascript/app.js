$(document).ready(function(){


    
    var q1 = {
        question : "this is a random question 1",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["wrong answer1", "wrong answer2", "wrong answer 3"],
        
    }
    var q2 = {
        question : "this is a random question 2",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["2wrong answer1", "2wrong answer2", "2wrong answer 3"]
    }
    var q3 = {
        question : "this is a random question 3",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["3wrong answer1", "3wrong answer2", "3wrong answer 3"]
    }
    var q4 = {
        question : "this is a random question 4",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["4wrong answer1", "4wrong answer2", "4wrong answer 3"]
    }
    var q5 = {
        question : "this is a random question 5",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["5wrong answer1", "5wrong answer2", "5wrong answer 3"]
    }
    var q6 = {
        question : "this is a random question 6",
        correctAnswer : ["correct answer"],
        wrongAnswers : ["6wrong answer1", "6wrong answer2", "6wrong answer 3"]
    }
    
    var questions = [q1.question, q2.question, q3.question, q4.question, q5.question, q6.question];
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    $('#randomQuestion').text(randomQuestion);

    $('#startButton').on("click", function startFunction(){
        $('#start').hide();
        $('#questions').show();
    })
    






});