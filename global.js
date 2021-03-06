window.onload = function(){

  // This loads all our variables.  I think they're fairly self-explanatory.  
  var correctAnswer = 0;
  var numberOfQuestions = 3;
  var current_question_index = 0;
  var question = document.getElementById("question");
  var choices = document.getElementById("choices");
  var answer = document.getElementById("answer");
  var question_result = document.getElementById("question_result");
  var next = document.getElementById("next");
  
  // Our questions objects are created below.
  var questionHashOne = new Object();
    questionHashOne["question"] = "As I was going to St. Ives, <br> I met a man with seven wives, <br> Each wife had seven sacks, <br> Each sack had seven cats, <br> Each cat had seven kits: <br> Kits, cats, sacks, and wives, <br> How many were there going to St. Ives?";
    questionHashOne["choices"] = ["1, 2402, 343, or 2401"];
    questionHashOne["solution"] = "1";

  var questionHashTwo = new Object();
    questionHashTwo["question"] = "What is bigger than the universe, <br> dead people eat it, <br> and when living people eat it they die?";
    questionHashTwo["choices"] = ["Arsenic, Pi, Nothing, or Water"];
    questionHashTwo["solution"] = "Nothing";

  var questionHashThree = new Object();
    questionHashThree["question"] = "What walks on four legs in the morning, <br> two legs in the afternoon, <br> and three in the evening?";
    questionHashThree["choices"] = ["Man, a dog, a mutant, or Steve"];
    questionHashThree["solution"] = "Man";

  // Clicking the button begins the quiz.  
  var button = document.getElementById('begin_button');

  // This creates an array of our question objects.
  var questionsArray = [questionHashOne, questionHashTwo, questionHashThree]
  button.addEventListener("click", function() {

    // This displays our first question on the page.
    var quiz = document.getElementById('quiz');
      question.innerHTML = questionHashOne["question"];
      choices.innerHTML = questionHashOne["choices"];
      quiz.style.display = "block";

    // The blocks below were created to extract the functions from the         .addEventListener contracts to ease readability and, hopefully, provide clarity.  
    var next_block = function(){
      current_question_index++;  
      question_result.innerHTML = "";
      answer.value = "";
      quiz = document.getElementById('quiz');
      question.innerHTML = questionsArray[current_question_index]["question"];
      choices.innerHTML = questionsArray[current_question_index]["choices"];
      quiz.style.display = "block";
    };  

    var question_result_block = function(){
      if (answer.value == questionsArray[current_question_index]["solution"]) {
        correctAnswer++
        question_result.innerHTML = "That's correct!"
      }
      else {
        question_result.innerHTML = "Sorry, that's incorrect."
      };
    }; 
    
    var total_result_block = function() {
      if(current_question_index == numberOfQuestions){

      quiz.style.display = "none";
      var percentageCorrect = ((correctAnswer/numberOfQuestions) * 100);
      var total_result = document.getElementById("total_result");
        total_result.innerHTML = "You got " + correctAnswer + " out of " + numberOfQuestions + " correct!  That's good for " + percentageCorrect + "%!"
        total_result.style.display = "block";
      };
    };

    // After the first question is answered and you click submit and this is what follows.
    submitter.addEventListener("click", question_result_block);

    next.addEventListener("click", next_block);

    submitter.addEventListener("click", question_result_block);

    next.addEventListener("click", next_block); 

    submitter.addEventListener("click", question_result_block );

    next.addEventListener("click", total_result_block );

  });
};



  // var correctAnswer = 0
  // var numberOfQuestions = 3
  // var button = document.getElementById("begin_button");

  // button.addEventListener("click", function(){

  //   var questionOne = prompt("What weighs more? \n A)A feather \n B)An elephant \n C)The moon \n D)Nothing");

  //     if (questionOne == "c"){
  //       alert("That's correct!");
  //       correctAnswer++;
  //     }
  //     else {
  //       alert("Aww, better luck with the next one.");
  //     };

  //   var questionTwo = prompt("What weighs less? \n A)A bowling ball \n B)A neutron star \n C)A puppy \n D)Your conscience");

  //     if (questionTwo == "c") {
  //       alert("That's correct!");
  //       correctAnswer++;
  //     }
  //     else {
  //       alert("Aww, better luck with the next one.");
  //     };

  //   var questionThree = prompt("What weighs on you more? \n A)The atmosphere \n B)Debt \n C)Guilt \n D)Responsibility");

  //     if (questionTwo == "c") {
  //       alert("That's correct!");
  //       correctAnswer++;
  //     }
  //     else {
  //       alert("Aww, well, there are other quizzes.");
  //     };

  //     var percentageCorrect = ((correctAnswer/numberOfQuestions) * 100);

  //     alert("you got " + correctAnswer + " out of " + numberOfQuestions + " correct!  That's good for " + percentageCorrect + "%!");

  //   });
