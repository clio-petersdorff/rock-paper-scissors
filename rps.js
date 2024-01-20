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
        console.log("Computer played "+computerSelection.toUpperCase())
        win = "you are TIED"

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("Computer played "+computerSelection.toUpperCase())
        win =  "YOU win!"

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("Computer: "+computerSelection.toUpperCase())
        
        win =  "YOU win!"

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("Computer played "+computerSelection.toUpperCase())
        win =  "YOU win!"
    } else {
        console.log("Computer played "+computerSelection.toUpperCase())
        win =  "COMPUTER wins!"
    }

    // return "Your choice was "+playerSelection.toUpperCase()+" and the computer chose "+computerSelection.toUpperCase()+" therefore "+win
    return win
  }
   
// const playerSelection = "rOck";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

function game(playRound){
    let round = 0
    let your_score = 0
    let comp_score = 0

    while (round < 5) {
        let playerSelection = prompt("Rock, Paper, Scissors?")
        const computerSelection = getComputerChoice();
        win = playRound(playerSelection,computerSelection)
        
        if (win === "YOU win!"){
            your_score += 1
            round += 1
        } else if (win === "you are TIED!"){
            round += 1
        } else {
            comp_score +=1
            round += 1
        }

        console.log(win+" Your current score is "+your_score)
    }

    return your_score

}

console.log(game(playRound))
