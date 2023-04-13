//TODAY WE'LL LEARN HOW TO MANIPULATE DOM
'use strict';

/////////////////////////////////////
//DOM
/////////////////////////////////////
//Allows JS to access HTML elements & styles to manipulate them
// makes a tree kinda structure of the already made HTML
//document is parent node-->thus doc.queryselector
// DOM != JS, DOM are a part of Web API's,
//we use just inbuilt fn(DOM), background me saara webAPI's handles

// console.log((document.querySelector('.message').textContent = 'WTF'));

// console.log((document.querySelector('.score').textContent = 200));

// console.log((document.querySelector('.guess').value = 400));

// console.log((document.querySelector('.check')).textContent = 2)

// set the score to the number itself
// don't rely on DOM here, as the number would be changed in DOM structure(which is not good)
//let currentScore = document.querySelector('.my-score').textContent;
let currentScore = 20;
let highScore = 0;
//HERE, 20 IS A STATE VARIABLE, AS ITS A PART OF APPLICATION STATE
let randomNum = Math.trunc(Math.random() * 20) + 1; //0-19, then +1, so 1-20....
//document.querySelector('.number').textContent = randomNum; --->make it question mark

//functionalities:
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//button function
document.querySelector('.check').addEventListener('click', function () {
  const myGuess = Number(document.querySelector('.guess').value);

  // no input
  if (!myGuess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
    currentScore--;
    document.querySelector('.my-score').textContent = currentScore;
  }

  // correct number
  else if (myGuess == randomNum) {
    document.querySelector('.number').textContent = randomNum;
    displayMessage('Correct Number!!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    //not dot, coz just an element not a class.........
    document.querySelector('.number').style.width = '30rem';

    //high-score
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    document.querySelector('.highscore').textContent = highScore;
  }

  //incorrect number
  else if (myGuess != randomNum) {
    // dry principle
    if (currentScore > 0) {
      displayMessage(
        myGuess < randomNum ? 'Its too small!!!!' : 'Its too big Number!!!!'
      );
      currentScore--;
      document.querySelector('.my-score').textContent = currentScore;
    } else {
      displayMessage("Time's up my friend☕");
    }
  }

  // // small number
  // else if (myGuess < randomNum) {
  //   if (currentScore > 0) {
  //     document.querySelector('.message').textContent = 'Its too small!!!!';
  //     currentScore--;
  //     document.querySelector('.my-score').textContent = currentScore;
  //   } else {
  //     document.querySelector('.message').textContent =
  //     "Time's up my friend☕";
  //   }
  // }
  // // big number
  // else if (myGuess > randomNum) {
  //   if (currentScore > 0) {
  //     document.querySelector('.message').textContent = 'Its too big Number!!!!';
  //     currentScore--;
  //     document.querySelector('.my-score').textContent = currentScore;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       "Time's up my friend☕";
  //   }
  // }
  //console.log(myGuess, typeof myGuess);
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1; //0-19, then +1, so 1-20....
  document.querySelector('.number').textContent = randomNum;

  document.querySelector('.my-score').textContent = '20';
  displayMessage('Start Guessing...');

  //document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  console.log('again hai....');
});

//in JS, a function is just like a value,
const s = function () {
  console.log('a new function...taddaa!');
};
