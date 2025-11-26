// Work Experience Rendering
// Renders work experience timeline dynamically
// Uses experienceData from data/experience-data.js

function renderExperience(
  containerId = "experience-container",
  experiences = null
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use provided experiences or fall back to window.experienceData
  const experiencesToRender =
    experiences ||
    (typeof window !== "undefined" && window.experienceData) ||
    [];

  container.innerHTML = experiencesToRender
    .map(
      (exp, index) => `
    <div
      class="relative experience-item ${
        index > 0
          ? "pl-8 sm:pl-10 border-l-2 border-slate-300/50 dark:border-slate-600/40 mt-8"
          : ""
      }"
    >
      ${
        index > 0
          ? `
      <div
        class="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-500 rounded-full shadow-md z-10"
      ></div>
      `
          : ""
      }
      <div class="mb-4">
        <div
          class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 mb-2"
        >
          <h3
            class="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors"
          >
            ${exp.title}
          </h3>
          <span
            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
              exp.statusClass
            }"
          >
            ${exp.status}
          </span>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
          ${exp.period}
        </p>
      </div>
      <ul
        class="list-disc list-outside text-slate-600 dark:text-slate-300 space-y-2 text-sm pl-5 marker:text-slate-400 dark:marker:text-slate-500"
      >
        ${exp.responsibilities
          .map((resp) => `<li class="leading-relaxed">${resp}</li>`)
          .join("")}
      </ul>
    </div>
  `
    )
    .join("");
}

// Export for use in resume.js
if (typeof window !== "undefined") {
  window.renderExperience = renderExperience;
}
