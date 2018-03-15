$(document).ready(function(){


    
    // var questions = [q1.question, q2.question, q3.question, q4.question, q5.question, q6.question];
    // var randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    // $('#randomQuestion').text(randomQuestion)
    
    //shuffle questions
    //for loop
    //combine answers
    //for loop answers
    
    
    
    
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
    
    $('#startButton').on("click", function startFunction(){
        $('#start').hide();
        $('#questions').show();
    })
    var allObjects= [q1, q2, q3 , q4, q5, q6]
    // function randomQuestions(){
    //     var random = all[Math.floor(Math.random() * all.length)]
    //     console.log(random);}
    // randomQuestions();

    
    function shuffle(array) {
        var currentIndex = array.length, tempValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          tempValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = tempValue;
        }
      
        return array;
      }
      
      console.log(shuffle(allObjects));
      


    
});