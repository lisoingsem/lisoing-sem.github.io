// Typing Animation
// Handles the typing animation effect for phrases

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let typingInterval;

function typeAnimation() {
  const typingText = document.getElementById("typingText");
  if (!typingText) return;

  const fullText = phrases[currentPhrase];

  let newText = "";
  if (isDeleting) {
    newText = fullText.substring(0, currentChar - 1);
    currentChar--;
  } else {
    newText = fullText.substring(0, currentChar + 1);
    currentChar++;
  }

  if (newText === "") {
    typingText.innerHTML = "&nbsp;";
  } else {
    typingText.textContent = newText;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentChar === fullText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    typeSpeed = 500;
  }

  clearTimeout(typingInterval);
  typingInterval = setTimeout(typeAnimation, typeSpeed);
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.getElementById("typingText");
  if (typingText) {
    typingText.textContent = "";
    setTimeout(typeAnimation, 500);
  }
});

