document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const bgColorPicker = document.getElementById("bg-color-picker");
    const userScore = document.getElementById("user-score");
    const maxRange = document.getElementById("max-range");
    const guessInput = document.getElementById("guess-input");
    const submitGuess = document.getElementById("submit-guess");
    const feedback = document.getElementById("feedback");
  
    // Initialize user data
    let userName = localStorage.getItem("userName");
    let score = parseInt(localStorage.getItem("userScore")) || 0;
    let range = parseInt(localStorage.getItem("maxRange")) || 2;
    let bgColor = localStorage.getItem("bgColor") || "#ffffff";
  
    if (!userName) {
      userName = prompt("What is your name?");
      localStorage.setItem("userName", userName);
    }
  
    document.body.style.backgroundColor = bgColor;
    bgColorPicker.value = bgColor;
    welcomeMessage.textContent = `Welcome, ${userName}!`;
    userScore.textContent = score;
    maxRange.textContent = range;
  
    bgColorPicker.addEventListener("input", (e) => {
      const selectedColor = e.target.value;
      document.body.style.backgroundColor = selectedColor;
      localStorage.setItem("bgColor", selectedColor);
    });
  
    submitGuess.addEventListener("click", () => {
      const guess = parseInt(guessInput.value, 10);
      if (isNaN(guess) || guess < 1 || guess > range) {
        feedback.textContent = `Please enter a valid number between 1 and ${range}.`;
        feedback.style.color = "red";
        return;
      }
  
      const randomNumber = Math.floor(Math.random() * range) + 1;
  
      if (guess === randomNumber) {
        score++;
        range *= 2;
        feedback.textContent = `Correct! The number was ${randomNumber}. Your score is now ${score}.`;
        feedback.style.color = "green";
      } else {
        feedback.textContent = `Wrong! The number was ${randomNumber}. Try again.`;
        feedback.style.color = "red";
      }
  
      // Update data and UI
      localStorage.setItem("userScore", score);
      localStorage.setItem("maxRange", range);
      userScore.textContent = score;
      maxRange.textContent = range;
      guessInput.value = "";
    });
  });
  