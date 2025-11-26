// Education Rendering
// Renders education information dynamically
// Uses educationData from data/education-data.js

function renderEducation(
  containerId = "education-container",
  education = null
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use provided education or fall back to window.educationData
  const educationToRender =
    education || (typeof window !== "undefined" && window.educationData) || [];

  container.innerHTML = educationToRender
    .map(
      (edu) => `
    <div
      class="p-5 bg-slate-50/50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all"
    >
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0">
          <div
            class="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center border border-indigo-100 dark:border-indigo-800"
          >
            <i class="fas fa-graduation-cap text-lg"></i>
          </div>
        </div>
        <div class="flex-1">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2"
          >
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
              ${edu.degree}
            </h3>
            <span
              class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${edu.statusClass}"
            >
              ${edu.status}
            </span>
          </div>
          <p
            class="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-3"
          >
            ${edu.school}
          </p>
          <p
            class="text-sm text-slate-500 dark:text-slate-400 font-mono mb-3"
          >
            ${edu.period}
          </p>
          <p
            class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            ${edu.description}
          </p>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Export for use in resume.js
if (typeof window !== "undefined") {
  window.renderEducation = renderEducation;
}
