const u_option = document.querySelector(".u_option");
const c_option = document.querySelector(".c_option");

const title_result = document.querySelector(".title");

const u_score = document.querySelector(".u_score");
const c_score = document.querySelector(".c_score");

const modalBg = document.querySelector(".modal-bg");
const modalTxt = document.querySelector(".modal-txt");
const modalBtn = document.querySelector('.mdl-btn');

let user_score = 0;
let com_score = 0;

const optionButtons = document.querySelectorAll("[data-option]");

const OPTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
];

let choices = ["rock", "paper", "scissors"];
let user_choice = "";

////////////Returns a random choice from the array choices/////////////
function randomOption() {
  const randomIndex = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[randomIndex];
}

optionButtons.forEach((optionButton) => {
  optionButton.addEventListener("click", () => {
    const optionName = optionButton.dataset.option;
    const option = OPTIONS.find((option) => option.name === optionName);
    pickOption(option);
  });
});

modalBtn.addEventListener("click", () => {
    console.log('logs')
    playAgain();
})

function pickOption(option) {
  const comOption = randomOption();
  const result = resultOfRound(option, comOption);
  console.log(result);
  addResult(option, comOption, result);
}

function resultOfRound(option, enemyOption) {
  switch (true) {
    case option.beats === enemyOption.name:
      return 1;

    case enemyOption.beats === option.name:
      return 0;
  }
}

function addResult(option, comOption, result) {
  u_option.textContent = option.emoji;
  c_option.textContent = comOption.emoji;

  if (result === 1) {
    user_score += 1;
    u_score.textContent = `Player: ${user_score}`;
    title_result.textContent = "You win this round!";
  } else if (result === 0) {
    com_score += 1;
    c_score.textContent = `Com: ${com_score}`;
    title_result.textContent = "Com wins this round!";
  } else {
    user_score += 1;
    com_score += 1;
    u_score.textContent = `Player: ${user_score}`;
    c_score.textContent = `Com: ${com_score}`;
    title_result.textContent = "It's a tie.";
  }

  gameOver(user_score, com_score);
}

function gameOver(user_score, com_score) {
  if (user_score >= 5 || com_score >= 5) {

    if (user_score > com_score) {
      modalTxt.textContent = "You won!";
    } else if (user_score < com_score) {
      modalTxt.textContent = "You lost...";
    } else {
      modalTxt.textContent = "It's a draw.";
    }
    modalBg.classList.add("bg-active");
  }
}

function playAgain () {
    user_score = 0;
    com_score = 0;
    title_result.textContent = "Another Round!";
    u_score.textContent = `Player: ${user_score}`;
    c_score.textContent = `Com: ${com_score}`;
    modalBg.classList.remove("bg-active");
}

///////////////Halfway through I noticed that I really dislike my approach... Gonna try again, this time with cleaner code

// const wrapper = document.querySelector("#wrapper");
// const rock = document.querySelector(".rock");
// const paper = document.querySelector(".paper");
// const scissors = document.querySelector(".scissors");

// const user_choice = document.createElement("div");

// user_choice.classList.add("user_choice-div");

// let computerChoice = () => {
//   cc = Math.random(0, 3) * 3;
//   cc = Math.floor(cc) + 1;
//   return cc - 1;
// };

// let playRound = (u_rps, c_rps) => {

//   switch (true) {
//     case u_rps == "0" && c_rps == "2":
//       console.log("User wins");
//       break;

//     case u_rps == "2" && c_rps == "0":
//       console.log("Com wins");
//       break;

//     case u_rps > c_rps:
//       console.log("User wins");
//       break;

//     case u_rps === c_rps:
//       console.log("Draw.");
//       break;

//     case u_rps < c_rps:
//       console.log("Com wins.");
//       break;

// };

// let u_points = 0;
// let c_points = 0;
// let u_rps = 0;

// rock.addEventListener("click", () => {
//   user_choice.textContent = "You picked Rock";
//   wrapper.appendChild(user_choice);

//   u_rps = 1;
//   c_rps = computerChoice();

//   playRound(u_rps, c_rps);
// });

// paper.addEventListener("click", () => {
//   user_choice.textContent = "You picked Paper";
//   wrapper.appendChild(user_choice);

//   u_rps = 2;
//   c_rps = computerChoice();

//   playRound(u_rps, c_rps);
// });

// scissors.addEventListener("click", () => {
//   user_choice.textContent = "You picked Scissors";
//   wrapper.appendChild(user_choice);

//   u_rps = 3;
//   c_rps = computerChoice();

//   playRound(u_rps, c_rps);
// });
