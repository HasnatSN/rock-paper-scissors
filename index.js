let options = ["Rock", "Paper", "Scissors"];

let computerChoice = () => {
  cc = Math.random(0, 3) * 3;
  cc = Math.floor(cc) + 1;
  return cc - 1;
};

comChoice = computerChoice();
console.log(comChoice);

// userInput = "Rock";
// userInput = userInput.toLowerCase();
userInput = window.prompt("Your choice: ").toLowerCase();
console.log(userInput);

switch (userInput) {
  case "rock":
    userChoice = 0;
  case "paper":
    userChoice = 1;
  case "scissors":
    userChoice = 2;
  default:
    break;
}

console.log(userChoice);

let playOneRound = (comChoice, userChoice) => {
  switch (true) {
    case userChoice == "0" && comChoice == "2":
      console.log("User wins");
      break;

    case userChoice == "2" && comChoice == "0":
      console.log("Com wins");
      break;

    case userChoice > comChoice:
      console.log("User wins");
      break;

    case userChoice === comChoice:
      console.log("Draw.");
      break;

    case userChoice < comChoice:
      console.log("Com wins.");
      break;

    default:
      console.log("Wrong input");
      break;
  }
};

playOneRound(userChoice, comChoice);
