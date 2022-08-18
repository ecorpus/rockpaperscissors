function game() {

    let playerScore = 0;
    let computerScore = 0;

    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    for (let i = 0; i < 5; i++) {
        let playerAnswer = prompt("Please enter Rock, Paper, or Scissors: ");

        playerAnswer = playerAnswer.toLowerCase();
        playerAnswer = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1);

        let num1 = Math.floor(Math.random() * 3);

        computerAnswer = getComputerChoice(myArray, num1);
        let str1 = battle(playerAnswer, computerAnswer);

        if (str1.includes("Win")) {
            playerScore++;
        } else if (str1.includes("Lose")) {
            computerScore++;
        }

        console.log("Score - User: " + playerScore + " Computer Score: " + computerScore);
    }


}

function getComputerChoice(myArray, num) {
    return myArray[num];
}

function battle(playerSelection, computerSelection) {

    console.log("You selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);

    let conclusion;

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        conclusion = "You Lose!, Paper beats Rock";

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        conclusion = "You Win!, Rock beats Scissors";

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        conclusion = "You Win!, Paper beats Rock";

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        conclusion = "You Lose!, Scissors beats Paper";

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        conclusion = "You Lose!, Scissors beats Rock";

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        conclusion = "You Win!, Scissors beats Paper";

    } else if ((playerSelection === "Rock" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Paper")) {
        conclusion = "Tie!";
    }

    console.log(conclusion);
    return conclusion;
}

game();