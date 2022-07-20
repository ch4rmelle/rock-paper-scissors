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