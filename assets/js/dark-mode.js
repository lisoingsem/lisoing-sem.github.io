// Simple Dark Mode System
// Reads DARK_MODE from app.js and applies it
(function () {
  "use strict";

  function initTheme() {
    // Wait for app.js to load DARK_MODE
    function applyTheme() {
      // Get DARK_MODE from app.js (it's in the global scope)
      const mode = typeof DARK_MODE !== "undefined" ? DARK_MODE : "light";
      const root = document.documentElement;

    // Prevent flash of wrong theme
      root.style.transition = "none";

      if (mode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

    // Re-enable transitions after a short delay
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.style.transition = "";
        });
      });

      console.log("✅ Theme applied:", mode);
    }

    // Try to apply immediately
    if (typeof DARK_MODE !== "undefined") {
      applyTheme();
    } else {
      // Wait a bit for app.js to load
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;
        if (typeof DARK_MODE !== "undefined") {
          clearInterval(checkInterval);
          applyTheme();
        } else if (attempts > 20) {
          clearInterval(checkInterval);
          console.warn("⚠️ DARK_MODE not found in app.js, defaulting to light");
          document.documentElement.classList.remove("dark");
        }
      }, 50);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme);
  } else {
    initTheme();
  }
})();
