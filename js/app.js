// 3 data types
// let a = 'some text';
// let b = 4;
// let c = true;
// let d = [1,4,2,'some text',4,true,5,false];
// // above line 5 is an example of an array
// console.log(typeof(b));

// conditionals

let ageAnswer = prompt('What is my age?');    
    if (ageAnswer > 37) {
       alert('Too High');
    } else if (ageAnswer < 37) {
       alert('Too Low');
    } else {
       alert('Correct');
}

let birthPlaceAnswer = prompt('True or False: I was born in Montana.').toLowerCase();
    if (birthPlaceAnswer === 'true') {
        alert('Yep!');
    } else { 
        alert('Nice try, but no!');
    }

let instrumentAnswer = prompt('True of False: I play a woodwind instrument').toLowerCase();
    if (instrumentAnswer === 'false') {
        alert('That is correct! I play brass!')
    } else {
        alert('Nope! There is no way I would play an oboe!')
    }

let jobAnswer = prompt('True of False: I currently teach at the University of Idaho').toLowerCase();
    if (jobAnswer === 'false') {
        alert('Correct, I taught there 2017-2019.') 
    } else {
        alert('Nope, but I did 2017-2019.')
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

// alert('mixED Case TEXT'.toLowerCase());
// alert('mixED Case TEXT'.toUpperCase());