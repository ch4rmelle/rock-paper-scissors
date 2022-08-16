let playerScore = 0;
let compScore = 0;
let tieScore = 0;
let roundCounter = 0;
let computerSelection= '';
let playerSelection = '';


// Game UI
const imgs = document.querySelectorAll('img');
const startBtn = document.querySelector('.start-btn')
const resultPara = document.querySelector('.scores');
const restartBtn = document.querySelector(".restart-btn");
const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
const tieScorePara = document.querySelector("#tie-score");
const roundTrackerPara = document.querySelector('#round');


const winnerDiv = document.querySelector('.winner-result');
const loserDiv = document.querySelector('.lose-result');
const roundWinner = document.querySelector('.round-winner');

// audio
const loserSound = document.querySelector('#loser-sound');
const winnerSound = document.querySelector('#winner-sound');

const playerChoicePara = document.querySelector('.player-choice');
const compChoicePara = document.querySelector('.computer-choice');




// event listeners 
startBtn.addEventListener('click',startGame);
startBtn.addEventListener('click',updateScore);
restartBtn.addEventListener('click', resetGame)

winnerDiv.style.display = "none";
loserDiv.style.display = "none";
roundWinner.style.display = "none";

function startGame() {
    imgs.forEach((img) => {
        img.addEventListener('click', playRound)});
    imgs.forEach((img) => {
        img.addEventListener('click', getGameRound)});
    startBtn.style.display = "none";
    
}

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerSelection();
    getWinner(playerSelection, computerSelection);
    updateScore();
    displayChoices(playerSelection, computerSelection);
    displayRoundResult(playerSelection, computerSelection);
    displayGameWinner();
    removeEventListener();
    
}

function removeEventListener() {
    if (playerScore === 5) {
        imgs.forEach((img) => {
            img.removeEventListener('click', playRound)});
        imgs.forEach((img) => {
            img.removeEventListener('click', getGameRound)});
    
} else if (compScore === 5) {
        imgs.forEach((img) => {
            img.removeEventListener('click', playRound)});
        imgs.forEach((img) => {
            img.removeEventListener('click', getGameRound)});

    }
}

function getComputerSelection() {
    let compChoice = ['rock', 'paper', 'scissors'];
    return compChoice[Math.floor(Math.random()*compChoice.length)];
}

function getWinner (playerSelection, computerSelection) {
    // Check if computer wins
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' || 
        playerSelection === 'paper' && computerSelection === 'scissors') {
            compScore +=1;
            return compScore;
            
    // Check if Player Wins
    } else if (playerSelection === 'rock' && computerSelection ==='scissors' ||
            playerSelection === 'scissors' && computerSelection === 'paper' || 
            playerSelection == 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            return playerScore;
    // Check if there's a tie
    } else if (playerSelection === computerSelection) {
            tieScore += 1;
            return tieScore;
    }
    }
function displayChoices(playerSelection, computerSelection) {
    computerSelection = capitalize(computerSelection);
    playerSelection = capitalize(playerSelection);
    compChoicePara.textContent = `Computer: ${computerSelection}`;
    playerChoicePara.textContent = `Player: ${playerSelection}`;
}
    
function updateScore() {
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent =`Computer: ${compScore}`;
    tieScorePara.textContent = `Tie: ${tieScore}`;
    roundTrackerPara.textContent = `Round: ${roundCounter}`;
    compChoicePara.textContent = `Computer: ${computerSelection}`;
    playerChoicePara.textContent = `Player: ${playerSelection}`;
}

function displayRoundResult(playerSelection, computerSelection) {
    roundWinner.style.display = "block";
    if (playerSelection === computerSelection) {
        roundWinner.textContent = `It's a tie!`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' || 
        playerSelection === 'paper' && computerSelection === 'scissors') {
        roundWinner.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        } 
    else if (playerSelection === 'rock' && computerSelection ==='scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' || 
        playerSelection == 'paper' && computerSelection === 'rock') {
        roundWinner.textContent = `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        }
}

function displayGameWinner() {
    if (playerScore === 5) {
        winnerDiv.style.display = winnerDiv.style.display === "none" ? "block": "none";
        playResultSound();
        roundWinner.style.display = "none";
    } else if (compScore === 5){
        loserDiv.style.display = loserDiv.style.display === "none" ? "block" : "none";
        playResultSound();
        roundWinner.style.display = "none";
    }
}

// capitalize first letter
function capitalize(text) {
    text = text.toLowerCase();
    let firstLetter = (text.substring(1,0)).toUpperCase();
    let remainingText = text.substring(1);
    return firstLetter + remainingText;
}

function getGameRound() {
    roundCounter++;
    roundTrackerPara.textContent = `Round: ${roundCounter}`;
}

// Play sounds
function playSound(soundobj) {
    let sound=document.getElementById(soundobj);
    sound.play();
}

function playResultSound() {
    if (playerScore === 5){
        winnerSound.play();
    }else if (compScore === 5) {
        loserSound.play();
    }
}

// Resets whole game and play again
function resetGame() {
    resetGlobalVariables();
    updateScore();
    displayRoundResult();
    roundWinner.style.display = "none";
    winnerDiv.style.display = "none";
    loserDiv.style.display = "none";
    startGame();

}

function resetGlobalVariables() {
    playerSelection = '';
    computerSelection = '';
    compScore = 0;
    playerScore = 0;
    tieScore = 0;
    roundCounter = 0;
}

