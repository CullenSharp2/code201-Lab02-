'use strict'

let ageAnswer = prompt('What is my age?');
    // console.log(ageAnswer);    
    if (ageAnswer > 37) {
       alert('Too High');
    } else if (ageAnswer < 37) {
       alert('Too Low');
    } else {
       alert('Correct');
}

let birthPlaceAnswer = prompt('True or False: I was born in Montana.').toLowerCase();
    // console.log(birthPlaceAnswer);
    if (birthPlaceAnswer === 'true') {
        alert('Yep!');
    } else { 
        alert('Nice try, but no!');
    }

let instrumentAnswer = prompt('True or False: I play a woodwind instrument').toLowerCase();
    // console.log(instrumentAnswer);
    if (instrumentAnswer === 'false') {
        alert('That is correct! I play brass!')
    } else {
        alert('Nope! There is no way I would play an oboe!')
    }

let jobAnswer = prompt('True or False: I currently teach at the University of Idaho').toLowerCase();
    // console.log(jobAnswer);
    if (jobAnswer === 'false') {
        alert('Correct, I taught there 2017-2019.') 
    } else {
        alert('Nope, but I did 2017-2019.')
    }

let sportsAnswer = prompt('True or False: My favorite sport is basketball.').toLowerCase();
    // console.log(sportsAnswer);
    if (sportsAnswer === 'true') {
        alert('Yes! My favorite team is the Portland Trail Blazers!')
    } else {
        alert('Nope! NBA all the way!')
    }


// let correctAnswer = Math.floor(Math.random() * 10) + 1;
//     console.log(correctAnswer);
// let guesses = 4;
    
// for(let i = 0; i < guesses; i++) {
//     let userAnswer = prompt('Please Enter a number 1-50');
//     while(userAnswer < 1 || userAnswer > 100){
//           userAnswer = prompt('Outside of Range. Please Enter a number 1-100')
//      }
//     if(userAnswer == correctAnswer){
//          alert('Congratulations!');
//          break;
//     } else if (userAnswer > correctAnswer) {
//         alert('Too high! Try Again!')
//     } else if(userAnswer < correctAnswer) {
//             alert('Too low! Try Again!')
//     }



let userName = prompt('Please Enter your Name: ');
    alert('Welcome to my page, ' + userName + '!');
    // console.log(userName);



let useranswer = prompt('What is my favorite color? Green, blue, or yellow?');
switch (useranswer.toLowerCase()) {
        
    case ('green'):
        alert('Correct');
         break;
    case ('blue'):
        alert('No');
        break;
    case ('yellow'):
        alert('No');
        break;
    default:
        alert("Try again!")
        console.low(useranswer)
    }

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