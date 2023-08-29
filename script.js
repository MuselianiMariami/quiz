"use strict";
// DOM elements
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
// DOM elements for opening the quiz card
const playButton = document.querySelector(".play");
const quizCard = document.querySelector(".quiz-container");
const closeButton = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
// Function to open the quiz card and overlay
const openCard = function () {
  quizCard.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Function to close the quiz card and overlay
const closeCard = function () {
  quizCard.classList.add("hidden");
  overlay.classList.add("hidden");
};
// Event listeners for buttons
startButton.addEventListener("click", () => {
  openCard();
  startQuiz();
});
closeButton.addEventListener("click", closeCard);
overlay.addEventListener("click", closeCard);
playButton.addEventListener("click", () => {
  openCard();
});
// Quiz starter data
let currentQuestionIndex = 0;
let correctAnswers = 0;

const questions = [
  // Array of question objects
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: false },
      { text: "Berlin", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "What is the capital of Nepal?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Kathmandu", correct: true },
      { text: "Bankok", correct: false },
      { text: "Manila", correct: false },
    ],
  },
  {
    question: "What is the capital of Philippines?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Kathmandu", correct: false },
      { text: "Bankok", correct: false },
      { text: "Manila", correct: true },
    ],
  },
  {
    question: "What is the capital of Vietnam?",
    answers: [
      { text: "Baku", correct: false },
      { text: "Hanoi", correct: true },
      { text: "Bankok", correct: false },
      { text: "Riyadh", correct: false },
    ],
  },
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Kathmandu", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Manila", correct: false },
    ],
  },
  {
    question: "What is the capital of Venezuela?",
    answers: [
      { text: "Caracas", correct: true },
      { text: "Kathmandu", correct: false },
      { text: "Lima", correct: false },
      { text: "Bogota", correct: false },
    ],
  },
  {
    question: "What is the capital of Peru?",
    answers: [
      { text: "Caracas", correct: false },
      { text: "Kathmandu", correct: false },
      { text: "Lima", correct: true },
      { text: "Bogota", correct: false },
    ],
  },
  {
    question: "What is the capital of Argentina",
    answers: [
      { text: "Buenos Aires", correct: true },
      { text: "Kathmandu", correct: false },
      { text: "Lima", correct: false },
      { text: "Bogota", correct: false },
    ],
  },
  {
    question: "What is the capital of Chile?",
    answers: [
      { text: "Sucre", correct: false },
      { text: "Brasilia", correct: false },
      { text: "Lima", correct: false },
      { text: "Santiago", correct: true },
    ],
  },
];
// Event listener for next button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
// Function to start the quiz
function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  progress.classList.remove("hide");
  totalQuestionsElement.textContent = questions.length;
  setNextQuestion();
}
// Function to display the next question
function setNextQuestion() {
  resetState();
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    currentQuestionElement.textContent = currentQuestionIndex + 1;
  } else {
    showResults();
  }
}
// Function to display a question and its answer choices
function showQuestion(question) {
  questionText.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn-container");
    button.addEventListener("click", () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}
// Function to reset the answer choices
function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  nextButton.classList.add("hide");
}
// Function to handle answer selection
function selectAnswer(isCorrect) {
  if (isCorrect) {
    correctAnswers++;
    event.target.style.backgroundColor = "lightgreen";
  } else {
    event.target.style.backgroundColor = "lightcoral";
  }
  const buttons = answerButtons.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
  nextButton.classList.remove("hide");
}
// Function to display quiz results
function showResults() {
  questionContainer.innerHTML = `<h2 style="color: white;">You've completed the quiz!</h2>
<p style="color: #240046; background-color:#e0aaff; padding:5px; border-radius:5px; margin-top: 5px;">You got ${correctAnswers} out of ${questions.length} questions correct.</p>`;
  progress.classList.add("hide");
}
