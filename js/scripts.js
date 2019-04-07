var scores, roundScore, gamePlaying, ScoreToReach;
var theScoreInput = document.getElementById('finalScoreInput');

// reset scores
init();

document.querySelector('.roll').addEventListener('click', function () {
	if(gamePlaying) {
		ScoreToReach = theScoreInput.value;

    theScoreInput.disabled = true;
  		theScoreInput.classList.add('locked');

	var rarerifyOne = Math.random() * (1.9 - 1.5) + 1.5
  		
