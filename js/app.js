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

let userName = prompt('Please Enter your Name: ');
    alert('Welcome ' + userName);
    console.log(userName);



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