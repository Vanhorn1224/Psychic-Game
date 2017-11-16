var computerChoices =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 0;
var compGuess = null;
var domWins = document.getElementById('wins');
var domLosses = document.getElementById('losses');
var domGuessesLeft = document.getElementById('guessesLeft');
console.log(domGuessesLeft)
console.log(domWins)
var userGuesses = document.getElementById('userGuesses');
function getCompGuess() {
  compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return compGuess;
}
function reset() {
  wins = 0
  losses = 0;
  guesses = 9;
  guessesLeft = 0;
  compGuess = null;
  domWins.innerHTML = "Wins: ";
  domLosses.innerHTML = "Losses: ";
  domGuessesLeft.innerHTML = "Guesses left: " + guesses;
  userGuesses.innerHTML = "Your Guesses so far " + guessesLeft;
}
document.addEventListener('keyup', (event) => {
  guesses--;
  guessesLeft++;
  domGuessesLeft.innerHTML = "Guesses left: " + guesses;
  userGuesses.innerHTML = "Your Guesses so far: " + guessesLeft;
  var userGuess = event.key;
  if (userGuess === getCompGuess())  {
    console.log(userGuess, compGuess)
    wins++;
    domWins.innerHTML = "Wins: " + wins;
  } else {
    losses++
    domLosses.innerHTML ="Losses: " + losses;
  }
  if (guesses <= -1) {
    alert("game over")
    reset();
  }
});



