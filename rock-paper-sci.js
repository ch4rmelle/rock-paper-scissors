// function getComputerChoice 
    // assign random number between 1-60
    // if num <= 20 (choice = "rock")
    // if (num > 20 && num <=40) (choice = 'paper')
    //if (num > 40 && num <=60) (choice = 'scissors')
    //return choice
function getComputerChoice() {
    let compChoice;
    let num;
    const randomNumber = Math.floor(Math.random()* 60) + 1;
    console.log(randomNumber);
    if (randomNumber <= 20) {
        compChoice = `Rock`;
        console.log(compChoice);
    } else if (randomNumber > 20 & randomNumber <= 40) {
        compChoice = `Paper`;
    } else if (randomNumber > 40 && randomNumber <= 60) {
        compChoice = `Scissors`;
    }
    return compChoice;
}



// Check if computer wins
 // ps == rock and cs == paper, cs win
 // ps == scissors and cs == rock, cs win
 // ps == paper and cs == scissors, cs win
//return loserText
 // Check if player wins
  //ps == rock and cs == scissors, ps win
  // ps == scissors and cs == paper, ps win
  // ps == paper and cs == rock, ps win
  //return winnerText
// Check for a tie
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  let playerSelection = "paper";

  function playRound (playerSelection, computerSelection) {
    let loseText = `You lost! ${computerSelection} beats ${capitalize(playerSelection)}`;
    console.log(loseText);
    let winText = `You won! ${capitalize(playerSelection)} beats ${computerSelection}`;
    let tieText = `You tied!`
    let result;
    if ( (playerSelection === 'rock' && computerSelection.toLowerCase() === 'paper') ||
    (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'rock') || (playerSelection === 'paper' && computerSelection.toLowerCase() === 'scissors')) {
        return loseText;
    } else if (playerSelection === 'rock' && computerSelection.toLowerCase() ==='scissors' ||
    playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper' || playerSelection == 'paper' && computerSelection.toLowerCase() === 'rock') {
        return winText;
    } else if (playerSelection === computerSelection.toLowerCase()) {
        return tieText;
    }
  }

  //write a capitalize function
  function capitalize(text) {
    text = text.toLowerCase();
    let firstLetter = (text.substring(1,0)).toUpperCase();
    let remainingText = text.substring(1);
    return firstLetter + remainingText;


  }