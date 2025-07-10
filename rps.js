let getComputerChoice = function() {
  let i = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[i];
};

let getHumanChoice = function() {
  let choice = prompt("Please enter your choice (rock, paper, or scissors):");
  return choice;
};

let humanScore = 0;
let computerScore = 0;

let playRound = function(humanChoice, computerChoice) {
  let choices = humanChoice.toLowerCase() + "-" + computerChoice.toLowerCase();

  console.log("You chose " + humanChoice + ", Computer chose " + computerChoice);
  switch (choices) {
    case "rock-rock":
      console.log("Game tied! No points awarded to anyone.");
      break;
    case "rock-paper":
      console.log("You lost! Computer gets 1 point.");
      computerScore++;
      break;
    case "rock-scissors":
      console.log("You won! You get 1 point.");
      humanScore++;
      break;
    case "paper-rock":
      console.log("You won! You get 1 point.");
      humanScore++;
      break;
    case "paper-paper":
      console.log("Game tied! No points awarded to anyone.");
      break;
    case "paper-scissors":  
      console.log("You lost! Computer gets 1 point.");
      computerScore++;
      break;
    case "scissors-rock":
      console.log("You lost! Computer gets 1 point.");
      computerScore++;
      break;
    case "scissors-paper":
      console.log("You won! You get 1 point.");
      humanScore++;
      break;
    case "scissors-scissors":
      console.log("Game tied! No points awarded to anyone.");
      break;
    default:
      console.log("Invalid move detected, please input one of (rock, paper, scissors)");
  }
};

while (humanScore < 5 && computerScore < 5) {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
  console.log("\n\n");
  console.log("Current Scoreboard");
  console.log("####################");
  console.log("human: " + humanScore + " computer: " + computerScore);
  console.log("\n\n");
}

console.log((humanScore == 5) ? "You won, congratulations!" : "The Computer won, better luck next time!");