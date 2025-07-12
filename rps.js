let getComputerChoice = function() {
  let i = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[i];
};

let playRound = function(humanChoice, computerChoice) {
  let choices = humanChoice.toLowerCase() + "-" + computerChoice.toLowerCase();
  let p1 = document.querySelector("#result-line1");
  let p2 = document.querySelector("#result-line2");
  console.log("You chose " + humanChoice + ", Computer chose " + computerChoice);
  switch (choices) {
    case "rock-rock":
      p1.textContent = "You chose rock. Computer chose rock."
      p2.textContent = "It's a tie! No points awarded to anyone.";
      break;
    case "rock-paper":
      p1.textContent = "You chose rock. Computer chose paper."
      p2.textContent = "You lost the round! Computer gets +1 point.";
      computerScore++;
      break;
    case "rock-scissors":
      p1.textContent = "You chose rock. Computer chose scissors."
      p2.textContent = "You won the round! You get +1 point.";
      humanScore++;
      break;
    case "paper-rock":
      p1.textContent = "You chose paper. Computer chose rock."
      p2.textContent = "You won the round! You get +1 point.";
      humanScore++;
      break;
    case "paper-paper":
      p1.textContent = "You chose paper. Computer chose paper."
      p2.textContent = "It's a tie! No points awarded to anyone.";
      break;
    case "paper-scissors":  
      p1.textContent = "You chose paper. Computer chose scissors."
      p2.textContent = "You lost the round! Computer gets +1 point.";
      computerScore++;
      break;
    case "scissors-rock":
      p1.textContent = "You chose scissors. Computer chose rock."
      p2.textContent = "You lost the round! Computer gets +1 point.";
      computerScore++;
      break;
    case "scissors-paper":
      p1.textContent = "You chose scissors. Computer chose paper."
      p2.textContent = "You won the round! You get +1 point.";
      humanScore++;
      break;
    case "scissors-scissors":
      p1.textContent = "You chose scissors. Computer chose scissors."
      p2.textContent = "It's a tie! No points awarded to anyone.";
      break;
    default:
      round_result.textContent = "Invalid move detected";
  }
};

let humanScore = 0;
let computerScore = 0;

let rock_button = document.querySelector("#rock");
rock_button.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  let human_score_node = document.querySelector("#player-score");
  let computer_score_node = document.querySelector("#computer-score");

  human_score_node.textContent = "Player: " + humanScore;
  computer_score_node.textContent = "Computer: " + computerScore; 

  let winner = document.querySelector("#winner");
  if (humanScore == 5) {
    winner.textContent = "You won! Congratulations!";
  } else if (computerScore == 5) {
    winner.textContent = "The computer won! Better luck next time!";
  }
});

let paper_button = document.querySelector("#paper");
paper_button.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  let human_score_node = document.querySelector("#player-score");
  let computer_score_node = document.querySelector("#computer-score");
  
  human_score_node.textContent = "Player: " + humanScore;
  computer_score_node.textContent = "Computer: " + computerScore; 

  let winner = document.querySelector("#winner");
  if (humanScore == 5) {
    winner.textContent = "You won! Congratulations!";
  } else if (computerScore == 5) {
    winner.textContent = "The computer won! Better luck next time!";
  }
});

let scissors_button = document.querySelector("#scissors");
scissors_button.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  let human_score_node = document.querySelector("#player-score");
  let computer_score_node = document.querySelector("#computer-score");

  human_score_node.textContent = "Player: " + humanScore;
  computer_score_node.textContent = "Computer: " + computerScore; 

  let winner = document.querySelector("#winner");
  if (humanScore == 5) {
    winner.textContent = "You won! Congratulations!";
  } else if (computerScore == 5) {
    winner.textContent = "The computer won! Better luck next time!";
  }
});
