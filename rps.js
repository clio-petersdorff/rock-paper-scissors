// This function assigns the computer "rock", "paper", "scissors" randomly
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

// This function takes your input and the computers selection and compares them
function playRound(playerSelection, computerSelection) {

    let win = null

    if (playerSelection.toLowerCase() === computerSelection){
        console.log("Computer played "+computerSelection.toUpperCase())
        win = "you are TIED"

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("Computer played "+computerSelection.toUpperCase())
        win =  "YOU win"

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("Computer: "+computerSelection.toUpperCase())
        
        win =  "YOU win"

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("Computer played "+computerSelection.toUpperCase())
        win =  "YOU win"
    } else {
        console.log("Computer played "+computerSelection.toUpperCase())
        win =  "COMPUTER wins"
    }

    // return "Your choice was "+playerSelection.toUpperCase()+" and the computer chose "+computerSelection.toUpperCase()+" therefore "+win
    return win
  }
   


// This function compares your scores and determines who the winner is 
function determineWinner(your_score, comp_score){
    
    let winner = null

    if (your_score > comp_score) {
        winner = "YOU"
    } else {
        winner = "COMPUTER"
    }

    return winner

}

// This function plays allows you to play until theres a winner (at least 5 rounds)

function game(playRound, determineWinner){
    let round = 0
    let your_score = 0
    let comp_score = 0

    while (round < 5) {
        let playerSelection = prompt("Round " + (round + 1) +": Rock, Paper, Scissors?")
        const computerSelection = getComputerChoice();
        win = playRound(playerSelection,computerSelection)
        
        if (win === "YOU win"){
            your_score += 1
            round += 1
        } else if (win === "you are TIED"){
            round = round
        } else {
            comp_score +=1
            round += 1
        }

        console.log(win+" this round! Your score: "+your_score)
    }

    const winner = determineWinner(your_score, comp_score)
    return winner

}

console.log("GAME COMPLETE. WINNER: "+ game(playRound, determineWinner))
