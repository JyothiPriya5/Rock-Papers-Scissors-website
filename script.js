const rulePage = document.getElementById("rule-page");
const playPage = document.getElementById("play-page");
const scorePage = document.getElementById("score-page");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let playerChoice;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
let plays = 0;

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

rock.addEventListener("click", () => {
    playerChoice = "rock";
    playRound();
});
paper.addEventListener("click", () => {
    playerChoice = "paper";
    playRound();
});
scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    playRound();
});

function startGame() {
    rulePage.style.display = "none";
    playPage.style.display = "block";
}

function restartGame() {
    scorePage.style.display = "none";
    playPage.style.display = "block";
    playerPoints = 0;
    computerPoints = 0;
    plays = 0;
    results.innerHTML = "";
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    computerChoice = getComputerChoice();
    results.innerHTML = ""; 

    if (playerChoice === computerChoice) {
        results.innerHTML = `<p>It's a tie! You both chose ${playerChoice}.</p>`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        results.innerHTML = `<p>You win! ${playerChoice} beats ${computerChoice}.</p>`;
        playerPoints++;
    } else {
        results.innerHTML = `<p>You lose! ${computerChoice} beats ${playerChoice}.</p>`;
        computerPoints++;
    }

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    plays++;

    if (plays === 10) {
        endGame();
    }
}

function endGame() {
    playPage.style.display = "none";
    scorePage.style.display = "block";
}