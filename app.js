//Global variable to keep track of score
let score = 0;

// Click listener to "whack" the mole, only clicakable once, makes mole retreat back to his hole, increases score.
$('.mole').click(function() {
  if ($(this).hasClass('active')) {
    score++
  }
  $(this).removeClass('active');
  $('.score').text(Number(score))
});

//Button to start game, resets score after game is over.
$('.start-game').click(function() {
  score = 0;
  $('.score').text(Number(score));
  $('.mole').removeClass('active');
  popUp();
  scoreAlert();
});

//Sets how long the mole pops up for and how long the game is set.  Just under a second for mole to appear, 30 second game time.
function popUp () {
  let int = setInterval(() => { randomHole() }, 900);
  setTimeout(() => { clearInterval(int) }, 30000);
}

//Helper function to randomize which hole the mole pops out of.
function randomHole() {
  const holeIndex = Math.floor(Math.random() * 6);
  $('.mole')[holeIndex].classList.add('active');
  setTimeout(() => {
    $('.mole')[holeIndex].classList.remove('active');
  }, 900);
}

//Browser alert notification of when game is complete and what the final score was.
function scoreAlert() {
  setTimeout(() => {
    alert("Game Over!  Your score is: " + score);
  }, 32000);
}