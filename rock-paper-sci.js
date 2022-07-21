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

let playerScore = 0;
let compScore = 0;
let tieScore = 0;

function playRound (playerSelection, computerSelection) {
let loseText = `You lost! ${computerSelection} beats ${capitalize(playerSelection)}`;
let winText = `You won! ${capitalize(playerSelection)} beats ${computerSelection}`;
let tieText = `You tied!`;
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Check if computer wins
    if ( (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection.toLowerCase() === 'scissors')) {
        console.log(loseText);
        compScore +=1;
        console.log(`Player: ${playerScore} Computer: ${compScore} Tie: ${tieScore}`);
        return compScore;
    // Check if Player Wins
    } else if (playerSelection === 'rock' && computerSelection.toLowerCase() ==='scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection == 'paper' && computerSelection === 'rock') {
        console.log(winText);
        playerScore += 1;
        console.log(`Player: ${playerScore} Computer: ${compScore} Tie: ${tieScore}`);
        return playerScore;
    // Check if there's a tie
    } else if (playerSelection === computerSelection) {
        console.log(tieText);
        tieScore += 1;
        console.log(`Player: ${playerScore} Computer: ${compScore} Tie: ${tieScore}`);
        return tieScore;
    }
    }

//write a capitalize function
function capitalize(text) {
    text = text.toLowerCase();
    let firstLetter = (text.substring(1,0)).toUpperCase();
    let remainingText = text.substring(1);
    return firstLetter + remainingText;
}

function game() {
    resetGame();
    for (let x = 0; x < 5; x++){
        let playerSelection = prompt(`Choose: Rock, Paper, or Scissors`,'');
        playRound(playerSelection, getComputerChoice());
}
}
// Reset variables
function resetGame() {
    compScore = 0;
    playerScore = 0;
    tieScore = 0;
}

