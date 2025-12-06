// main.js

// Navigation toggle for mobile
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const links = document.querySelectorAll(".nav-list a");

  if (navToggle && header && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(!!isOpen));
    });

    // Close nav when a link is clicked (mobile)
    links.forEach((a) => {
      a.addEventListener("click", () => {
        if (header.classList.contains("open")) {
          header.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Quiz response handling
  const quizBtns = document.querySelectorAll(".quiz-btn");
  const quizResult = document.getElementById("quiz-result");
  quizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.answer === "correct") {
        quizResult.textContent = "Nice! You guessed it. Thank you for playing!";
      } else {
        quizResult.textContent = "Try Again!";
      }
    });
  });
});
