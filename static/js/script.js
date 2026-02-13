'use strict';

// selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');

const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')

const current0EL = document.getElementById('current--0')
const current1EL = document.getElementById('current--1')

const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden')


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer+1)%2;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

// rolling the dice
btnRoll.addEventListener(
    'click',
    function(){
        if(playing){
            const dice = Math.trunc(Math.random()*6 + 1);
            diceEL.classList.remove('hidden');
            diceEL.src = `../static/assets/dice-${dice}.png`;
            if (dice !==1) {
                    currentScore+=dice;
                    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
                }
            else{
                switchPlayer();
            }
        }
    }
)

btnHold.addEventListener(
    'click',
    function(){
        if (playing){
            scores[activePlayer] += currentScore;
            document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
            if(scores[activePlayer] >= 5){
                playing = false;
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
                playing =false;

            }
            else{
                switchPlayer();
            }
        }
    }
)


btnNew.addEventListener(
    'click',
    function(){
        score0EL.textContent = 0;
        score1EL.textContent = 0;
        current0EL.textContent = 0;
        current1EL.textContent = 0;
        playing = true;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = (activePlayer+1)%2;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        currentScore = 0
        scores = [0, 0]
    }

)




