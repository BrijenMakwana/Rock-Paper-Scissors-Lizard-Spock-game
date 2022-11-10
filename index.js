const score = document.getElementById("score");
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

allOptions.forEach((option) => {
  option.addEventListener("click", () => {
    console.log(option.id);
    // hide all options
    bg_pentagon.style.display = "none";
    // display result
    selected_options_container.style.display = "flex";
    user_choice_container.classList.add(`user-${option.id}`);
    user_choice_image.src = `./images/icon-${option.id}.svg`;
  });
});
