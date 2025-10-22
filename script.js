// ===== Typing Animation =====
const text = ["Software Engineer", "React & Node.js Developer", "AI Enthusiast"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else { setTimeout(type, 100); }
})();

// ===== Theme Toggle =====
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
