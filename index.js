var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question("What's your name? ");
console.log("Hi " + userName + ". Let's play a football quiz.");
console.log("⚽️⚽️⚽️⚽️⚽️⚽️⚽️")
score = 0;

function game(question, answer){
  userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.green("You are right!"));
    score = score + 1;
    console.log(score);
  }else{
    console.log(chalk.red("You are wrong!"));
    score = score;
    console.log(score);
  }
  console.log("----------------");
}

var questions = [
  {
    question: "1) Who has won the most Premier League title? (United/Chelsea) ",
    answer: "United"
  },{
    question: "2) Who is the all-time highest mens international goalscorer? (Ronaldo/Messi) ",
    answer: "Ronaldo"
  },{
    question: "3) Who has won the most Balon D'or? (Messi/Ronaldo) ",
    answer: "Messi"
  },{
    question: "4) Who is the GOAT manager? (Sir Alex/Pep) ",
    answer: "Sir Alex"
  },{
    question: "5) Which player has won the most PL titles? (Giggs/Beckham) ",
    answer: "Giggs"
  }
]
 
for (var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.green("Your total score is " + score + "."));
console.log("****************")

var highScores = [
  {
    name: "Abhishek",
    score: 3,
  },

  {
    name: "Adarsh",
    score: 2,
  },
]

console.log(chalk.blue("Thanks for playing. If you have beaten the high score, please send me a screenshot."));

highScores.map(score => console.log(score.name, " : ", score.score))
