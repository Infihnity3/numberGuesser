let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random())
  }
  function compareGuesses(userGuess, computerGuess, secretTarget) {
    if (Math.abs(userGuess) > Math.abs(computerGuess)) {
      return true
    } else if (Math.abs(userGuess) < Math.abs(computerGuess)) {
      return false
    }
  }
  
  function updateScore(update){
    if (update == 'human'){
    humanScore += 1
    } else if (update == 'computer'){
      computerScore += 1
    }
  }
  
  function advanceRound(){
    currentRoundNumber += 1
  }
  
