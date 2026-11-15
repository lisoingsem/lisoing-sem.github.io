// Clean Dark Mode System with Persistence & Toggle
(function () {
  "use strict";

  function getSavedTheme() {
    return (
      localStorage.getItem("theme") ||
      (typeof DARK_MODE !== "undefined" ? DARK_MODE : "dark")
    );
  }

  function applyTheme(mode) {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  }

  // Apply immediately to prevent flash
  applyTheme(getSavedTheme());

  // Attach toggle listeners
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtns = document.querySelectorAll(
      "#theme-toggle-btn, [data-theme-toggle]"
    );
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const isDark = document.documentElement.classList.contains("dark");
        applyTheme(isDark ? "light" : "dark");
      });
    });
  });
})();
