'use strict';
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

/////////// section START
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const button = document.querySelector('.check');

/////////// section CHECK
button.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  ////// sub section MESSAGE CHANGER
  const messageDis = function (str) {
    document.querySelector('.message').textContent = str;
  };

  //////  when thre is no input
  if (!guess) {
    messageDis('⛔️ No number!');
  }
  ////// when guess is correct
  else if (num === guess) {
    messageDis('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    button.disabled = true;
    document.querySelector('.number').textContent = num;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (num !== guess) {
    if (score > 1) {
      let str = '';
      //////  when guess is low
      num > guess
        ? (str = '📉 Too low!')
        : //////  when guess is high
          (str = '📈 Too high!');
      messageDis(str);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageDis('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/////////// section AGAIN
document.querySelector('.again').addEventListener('click', function () {
  num = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  messageDis('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  button.disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
