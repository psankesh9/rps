function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === "win") {
      console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`);
      playerScore++;
    } else if (result === "lose") {
      console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`);
      computerScore++;
    } else {
      console.log("It's a tie!");
    }
  }

  // Determine and log the overall winner
  if (playerScore > computerScore) {
    console.log(`You are the winner with a score of ${playerScore} to ${computerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins with a score of ${computerScore} to ${playerScore}. Better luck next time!`);
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
game();
