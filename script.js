"use strict";

let score = 20;
let highsScore = [0];
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayGameMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayGameScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const checkHighScore = function () {
  let lastNumberOfArray = highsScore[highsScore.length - 1];
  let highScore = Math.max(...highsScore);

  if (lastNumberOfArray >= highScore) {
    document.querySelector(".highscore").textContent = lastNumberOfArray;
  }
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = secretNumber;

  if (!guess) {
    displayGameMessage(" ⛔ No Number!!!");
  } else if (guess === secretNumber) {
    displayGameMessage(" 🎊 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    highsScore.push(score);
    checkHighScore();
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayGameMessage(
        guess > secretNumber ? "🤏 Too high!!!" : "🤏 Too low!!!"
      );
      score--;
      displayGameScore(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  displayGameMessage("Start guessing...");
  score = 20;
  displayGameScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
