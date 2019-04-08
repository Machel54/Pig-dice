//backend logic
let scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

        let dice = Math.floor(Math.random() * 6) + 1;

         if (dice === 1) {
            var diceDOM = document.querySelector('.dice');
        }

         if (dice === 2) {
            var diceDOM = document.querySelector('.dice');
        }

         if (dice === 3) {
            var diceDOM = document.querySelector('.dice');

        }

         if (dice === 4) {
            var diceDOM = document.querySelector('.dice');

        }

         if (dice === 5) {
            var diceDOM = document.querySelector('.dice');

        }

         if (dice === 6) {
            var diceDOM = document.querySelector('.dice');


        }


// frontend logic
        if (dice !== 1) {

            roundScore += dice;
            document.querySelector('#score-' + activePlayer).textContent = roundScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();
        }
    }


});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        scores[activePlayer] += roundScore;


        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        var input = document.querySelector('.final-score').value;
        var winningScore;


        if (input) {
            winningScore = input;
        } else {
            winningScore = 50;
        }


        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');


            gamePlaying = false;
        } else {

            nextPlayer();
        }
    }

});


function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}


function init() {
    scores = [0,0];
    roundScore = 0
    activePlayer = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
