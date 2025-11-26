// Dark Mode Configuration
// Set to 'light' or 'dark' to control the theme
const DARK_MODE = "dark"; // Change to 'light' for light mode

// Typing animation is in typing.js
// Stack inventory is in stack.js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Track external link clicks (if analytics needed)
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener("click", function () {
      // Analytics tracking can be added here
      console.log("External link clicked:", this.href);
    });
  });
});
