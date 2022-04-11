












































///////////////Halfway through I noticed that I really dislike my approach... Gonna try again, this time with clean code


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
