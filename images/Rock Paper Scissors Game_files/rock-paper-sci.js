let playerScore = 0;
let compScore = 0;
let tieScore = 0;

function getComputerChoice() {
    let compChoice;
    const randomNumber = Math.floor(Math.random() * 60) + 1; 
    console.log(randomNumber);
    if (randomNumber <= 20) {
        compChoice = `rock`;
    } else if (randomNumber > 20 & randomNumber <= 40) {
        compChoice = `paper`;
    } else if (randomNumber > 40 && randomNumber <= 60) {
        compChoice = `scissors`;
    }
    return compChoice;
}
const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener('click', () => {
            game();
            return input.id
        });
    });


function playRound (playerSelection, computerSelection) {
    
    let loseText = `You lost! ${computerSelection} beats your ${capitalize(playerSelection)}`;
    let winText = `You won! Your ${capitalize(playerSelection)} beats ${computerSelection}`;
    let tieText = `You tied! Your ${capitalize(playerSelection)} ties with ${computerSelection}`;

    computerSelection = computerSelection.toLowerCase();
    // Check if computer wins
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'scissors' && computerSelection === 'rock' || 
            playerSelection === 'paper' && computerSelection.toLowerCase() === 'scissors') {
            console.log(loseText);
            compScore +=1;
            console.log(`Player: ${playerScore} Computer: ${compScore} Tie: ${tieScore}`);
             return compScore;
    // Check if Player Wins
    } else if (playerSelection === 'rock' && computerSelection.toLowerCase() ==='scissors' ||
            playerSelection === 'scissors' && computerSelection === 'paper' || 
            playerSelection == 'paper' && computerSelection === 'rock') {
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

function getWinner() {
    if (compScore > playerScore) {
        return console.log("The Computer won the whole game!");
    } else if (playerScore > compScore) {
        return console.log("You won the whole game!");
    } else if (playerScore === compScore) {
        return console.log("You tied the whole game!");
    }
}

//Capitalize the first letter of argument
function capitalize(text) {
    text = text.toLowerCase();
    let firstLetter = (text.substring(1,0)).toUpperCase();
    let remainingText = text.substring(1);
    return firstLetter + remainingText;
}

function game() {
    resetGame();
    playRound(input.id, getComputerChoice());
    getWinner();
}
// Reset variables
function resetGame() {
    compScore = 0;
    playerScore = 0;
    tieScore = 0;
}
