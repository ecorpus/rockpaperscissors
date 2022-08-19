function game() {

    let playerScore = 0;
    let computerScore = 0;

    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    const btn = document.querySelectorAll('#btn');

    // we use the .forEach method to iterate through each button
    btn.forEach((btn) => {

        // and for each one we add a 'click' listener
        btn.addEventListener('click', () => {


            let playerAnswer = btn.innerText;

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


            //  let text = "You Selected: " + playerAnswer + " Computer Selected: " + computerAnswer + "" <br> "Score - User: " + playerScore + " Computer Score: " + computerScore;;
            const results = document.querySelector('#results');

            results.textContent = "";

            const content1 = document.createElement('div');
            content1.classList.add('content1');
            content1.textContent = "You Selected: " + playerAnswer + " | Computer Selected: " + computerAnswer;
            results.appendChild(content1);


            const content2 = document.createElement('div');
            content2.classList.add('content2');
            content2.textContent = String(str1);
            results.appendChild(content2);


            const content3 = document.createElement('div');
            content3.classList.add('content3');
            content3.textContent = "Score - User: " + playerScore + " Computer Score: " + computerScore;
            results.appendChild(content3);

            if (playerScore === 5) {
                const content4 = document.createElement('div');
                content4.classList.add('content3');
                content4.textContent = "Player Wins!"
                results.appendChild(content4);

                return;
            } else if (computerScore === 5) {
                const content4 = document.createElement('div');
                content4.classList.add('content3');
                content4.textContent = "Computer Wins!";
                results.appendChild(content4);

                return;
            }

        });
    });
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