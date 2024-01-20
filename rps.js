function getComputerChoice() {
    choice = (Math.random()*3)
    choice = Math.ceil(choice)

    let comp_choice = null;

    if (choice === 1){
        comp_choice = "rock"
    } else if (choice === 2) {
        comp_choice = "scissors"
    } else {
        comp_choice = "paper"
    }

    return comp_choice
}

function playRound(playerSelection, computerSelection) {

    let win = null

    if (playerSelection.toLowerCase() === computerSelection){
        win = "TIED - Please play again"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        win =  "YOU win!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        win =  "YOU win!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        win =  "YOU win!"
    } else {
        win =  "COMPUTER wins!"
    }

    return "Your choice was "+playerSelection.toUpperCase()+" and the computer chose "+computerSelection.toUpperCase()+" therefore "+win
  }
   
const playerSelection = "rOck";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

