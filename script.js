const title = document.querySelector(".title");
const point = document.querySelector(".point");
const input = document.querySelector(".input");
const wrongBox = document.querySelector(".wrong");
let score = 0;
let wrong = 0;
let num1 = 1;
let num2 = 1;

// Generate random numbers between 1 and 10
function generateNumbers() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
}

// Display the multiplication question
function provideQuestion() {
  generateNumbers();
  title.innerHTML = `What is ${num1} multiplied by ${num2}?`;
}

// Check user's answer
function checkAnswer(userAnswer, correctAnswer) {
  input.value = "";
  if (userAnswer === correctAnswer) {
    score++;
    point.innerHTML = `Score: ${score}`;
  } else {
    wrong++;
    wrongBox.innerHTML = `Wrong Ans: ${wrong}`;
  }
}

// When user clicks submit
document.querySelector(".submit").addEventListener("click", () => {
  const userRes = parseInt(input.value);
  if (isNaN(userRes)) return;
  checkAnswer(userRes, num1 * num2);
  provideQuestion();
});

// Initial question
provideQuestion();
