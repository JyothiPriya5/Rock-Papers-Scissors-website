const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const outcomeElement = document.getElementById('outcome');

const choices = ['Rock', 'Paper', 'Scissors'];

document.querySelectorAll('.choices img').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1);
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        userChoiceElement.textContent = `Your choice: ${userChoice}`;
        computerChoiceElement.textContent = `Computer's choice: ${computerChoice}`;
        
        if (userChoice === computerChoice) {
            outcomeElement.textContent = "It's a draw!";
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            outcomeElement.textContent = "You win!";
        } else {
            outcomeElement.textContent = "You lose!";
        }
    });
});

