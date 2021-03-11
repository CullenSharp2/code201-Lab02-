'use strict';

let totalCorrectAnswers = 0;

function getName(){
  let userName = prompt('Please Enter your Name: ');
  alert('Welcome to my page, ' + userName + '!');
}

getName();

function guessAge() {
  let ageAnswer = prompt('What is my age?');

  if (ageAnswer > 37) {
    alert('Too High');
  } else if (ageAnswer < 37) {
    alert('Too Low');
  } else {
    alert('Correct!');
    totalCorrectAnswers += 1;
  }
}

guessAge();

function guessBirthplace() {
    let birthPlaceAnswer = prompt('True or False: I was born in Montana.').toLowerCase();
    if (birthPlaceAnswer === 'true') {
    alert('Yep!');
    totalCorrectAnswers += 1;
    } else {
    alert('Nice try, but no!');
    }
}

guessBirthplace();

let instrumentAnswer = prompt('True or False: I play a woodwind instrument').toLowerCase();
if (instrumentAnswer === 'false') {
  alert('That is correct! I play brass!');
  totalCorrectAnswers += 1;
} else {
  alert('Nope! There is no way I would play an oboe!');
}

let jobAnswer = prompt('True or False: I currently teach at the University of Idaho').toLowerCase();
if (jobAnswer === 'false') {
  alert('Correct, I taught there 2017-2019.');
  totalCorrectAnswers += 1;
} else {
  alert('Nope, but I did 2017-2019.');
}

let sportsAnswer = prompt('True or False: My favorite sport is basketball.').toLowerCase();
if (sportsAnswer === 'true') {
  alert('Yes! My favorite team is the Portland Trail Blazers!');
  totalCorrectAnswers += 1;
} else {
  alert('Nope! NBA all the way!');
}

let correctAnswer = 6;
let guesses = 4;

for (let i = 0; i < guesses; i++) {
  let answer = parseInt(prompt('Please Enter a number 1-10'));
  if (answer === correctAnswer) {
    alert('Congratulation!');
    totalCorrectAnswers += 1;
    break;
  } else if (answer > correctAnswer) {
    alert('Too high! Try Again!');
  } else if (answer < correctAnswer) {
    alert('Too low! Try Again!');
  }
}
alert('The answer is 6!');

let possibleAnswers = [34, 9, 14, 26, 43, 2];
let guess = 0;
let maxGuess = 6;
let isCorrectAnswer = false;
let userAnswer = parseInt(prompt('Guess a number in my array 1-50!'));
while (guess < maxGuess) {
  for (let i = 0; i < possibleAnswers.length; i += 1) {
    if (possibleAnswers[i] === userAnswer) {
      isCorrectAnswer = true;
      alert('Congrats! You got it right!');
      totalCorrectAnswers += 1;
      break;
    }
  }
  guess += 1;
  if (isCorrectAnswer === true) {
    break;
  }
  userAnswer = prompt('Guess again! Guess a number in my array 1-50!');
}
alert('The answers were 34, 9, 14, 26, 43, and 2.');

alert('Okay, you got ' + totalCorrectAnswers + ' correct out of 7!');
