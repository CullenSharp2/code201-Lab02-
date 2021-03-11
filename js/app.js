'use strict'

let userName = prompt('Please Enter your Name: '); {
    alert('Welcome to my page, ' + userName + '!');
// console.log(userName);
}

let totalCorrectAnswers = 0;

let ageAnswer = prompt('What is my age?');
    // console.log(ageAnswer);    
    if (ageAnswer > 37) {
       alert('Too High');
    } else if (ageAnswer < 37) {
       alert('Too Low');
    } else {
       alert('Correct!');
       totalCorrectAnswers +=1;
}

let birthPlaceAnswer = prompt('True or False: I was born in Montana.').toLowerCase();
    // console.log(birthPlaceAnswer);
    if (birthPlaceAnswer === 'true') {
        alert('Yep!');
        totalCorrectAnswers +=1;
    } else { 
        alert('Nice try, but no!');
    }

let instrumentAnswer = prompt('True or False: I play a woodwind instrument').toLowerCase();
    // console.log(instrumentAnswer);
    if (instrumentAnswer === 'false') {
        alert('That is correct! I play brass!')
        totalCorrectAnswers +=1;
    } else {
        alert('Nope! There is no way I would play an oboe!')
    }

let jobAnswer = prompt('True or False: I currently teach at the University of Idaho').toLowerCase();
    // console.log(jobAnswer);
    if (jobAnswer === 'false') {
        alert('Correct, I taught there 2017-2019.')
        totalCorrectAnswers +=1; 
    } else {
        alert('Nope, but I did 2017-2019.')
    }

let sportsAnswer = prompt('True or False: My favorite sport is basketball.').toLowerCase();
    // console.log(sportsAnswer);
    if (sportsAnswer === 'true') {
        alert('Yes! My favorite team is the Portland Trail Blazers!')
        totalCorrectAnswers +=1;
    } else {
        alert('Nope! NBA all the way!')
    }

let correctAnswer = 6;
let guesses = 4;

for(let i = 0; i < guesses; i++) { 
    let answer = prompt('Please Enter a number 1-10');
     if(answer == correctAnswer){
        alert('Congratulation!');
        totalCorrectAnswers +=1;
        break;
    } else if (answer > correctAnswer) {
         alert('Too high! Try Again!');
    } else if (answer < correctAnswer) {
        alert('Too low! Try Again!');
    } 
}
    alert('The answer is 6!');

let possibleAnswers = [34,9,14,26,43,2]; 
console.log(possibleAnswers);
let guess = 0;
let maxGuess = 6;
let isCorrectAnswer = false;
let userAnswer = prompt('Guess a number in my array 1-50!');
while (guess < maxGuess) {
    for (let i = 0; i < possibleAnswers.length; i+=1) {
        console.log(userAnswer);
        // console.log(possibleAnswers[i]);
        if(possibleAnswers[i] == userAnswer) {
            isCorrectAnswer = true;
            alert('Congrats! You got it right!');
            totalCorrectAnswers +=1;
            break;
        }
    }
    guess +=1;
    if(isCorrectAnswer === true){
        break;
    }
    userAnswer = prompt('Guess again! Guess a number in my array 1-50!');
}
    alert('The answers were 34, 9, 14, 26, 43, and 2.')
    
    alert('Okay, you got ' + totalCorrectAnswers + ' correct out of 7!')


// while(answer < 1 || answer > 100){
    //      answer = prompt('Outside of Range. Please Enter a number 1-10')
    // }





// let useranswer = prompt('What is my favorite color? Green, blue, or yellow?');
// switch (useranswer.toLowerCase()) {
        
//     case ('green'):
//         alert('Correct');
//          break;
//     case ('blue'):
//         alert('No');
//         break;
//     case ('yellow'):
//         alert('No');
//         break;
//     default:
//         alert("Try again!")
//         console.low(useranswer)
//     }

// let age = 17;

// if(age >= 18) {
//   alert('vote');
// } else if (age === 19) {
//   alert('one year with vote')
// }
// else {
//   alert('too young :(')
// }

// // switch statements

// switch(age) {
//   case(17):
//   alert('almost can vote');
//   break;
//   case(18):
//   alert('you now can vote');
//   break;
//   case(19):
//   alert('one year voting');
//   break;
//   default:
//   alert('too young or old enough');
//   break;
// }

// 3 data types
// let a = 'some text';
// let b = 4;
// let c = true;
// let d = [1,4,2,'some text',4,true,5,false];
// // above line 5 is an example of an array
// console.log(typeof(b));

// conditionals

// alert('mixED Case TEXT'.toLowerCase());
// alert('mixED Case TEXT'.toUpperCase());