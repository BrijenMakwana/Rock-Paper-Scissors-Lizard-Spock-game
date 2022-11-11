const score_board = document.getElementById("score");
const allOptions = document.querySelectorAll(".option-container");
const bg_pentagon = document.getElementById("bg-pentagon");
const selected_options_container = document.getElementById(
  "selected-options-container"
);

const user_choice_container = document.getElementById("user-choice");
const house_choice_container = document.getElementById("house-choice");
const user_choice_image = document.getElementById("user-choice-image");
const house_choice_image = document.getElementById("house-choice-image");

const game_result_text = document.getElementById("game-result-text");
const play_again_btn = document.getElementById("play-again-btn");

const bodyContainer = document.getElementsByTagName("body");

const availableMoves = ["rock", "paper", "scissors", "lizard", "spock"];

let userChoice,
  houseChoice = "";
let score = 0;

score_board.innerHTML = localStorage.getItem("stored_score");

allOptions.forEach((option) => {
  option.addEventListener("click", () => {
    userChoice = option.id;
    // hide all options
    bg_pentagon.style.display = "none";
    // display result
    selected_options_container.style.display = "flex";
    user_choice_container.classList.add(`user-${userChoice}`);
    user_choice_image.src = `./images/icon-${userChoice}.svg`;

    houseMove();
  });
});

const houseMove = () => {
  const randomNumber = Math.floor(Math.random() * availableMoves.length);
  houseChoice = availableMoves[randomNumber];
  // display result
  house_choice_container.classList.add(`user-${houseChoice}`);
  house_choice_image.src = `./images/icon-${houseChoice}.svg`;

  getResult();
};

const getResult = () => {
  if (userChoice === houseChoice) {
    game_result_text.innerHTML = "it's a draw";
  } else {
    switch (userChoice) {
      case "rock":
        if (houseChoice === "scissors" || houseChoice === "lizard") {
          game_result_text.innerHTML = "you win";
          score++;
        } else {
          game_result_text.innerHTML = "you lose";
          score--;
        }
        break;
      case "paper":
        if (houseChoice === "rock" || houseChoice === "Spock") {
          game_result_text.innerHTML = "you win";
          score++;
        } else {
          game_result_text.innerHTML = "you lose";
          score--;
        }
        break;
      case "scissors":
        if (houseChoice === "paper" || houseChoice === "lizard") {
          game_result_text.innerHTML = "you win";
          score++;
        } else {
          game_result_text.innerHTML = "you lose";
          score--;
        }
        break;
      case "lizard":
        if (houseChoice === "paper" || houseChoice === "spock") {
          game_result_text.innerHTML = "you win";
          score++;
        } else {
          game_result_text.innerHTML = "you lose";
          score--;
        }
        break;
      case "spock":
        if (houseChoice === "rock" || houseChoice === "scissors") {
          game_result_text.innerHTML = "you win";
          score++;
        } else {
          game_result_text.innerHTML = "you lose";
          score--;
        }
        break;
    }
    score_board.innerHTML = score;
    localStorage.setItem("stored_score", score);
  }
};
const playAgain = () => {
  bg_pentagon.style.display = "block";
  selected_options_container.style.display = "none";
  user_choice_container.classList.remove(`user-${userChoice}`);
  house_choice_container.classList.remove(`user-${houseChoice}`);
};

play_again_btn.addEventListener("click", playAgain);
