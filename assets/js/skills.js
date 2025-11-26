// Technical Skills Rendering
// Renders technical skills dynamically
// Uses skillsData from data/skills-data.js

function renderSkills(containerId = "skills-container", skills = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use provided skills or fall back to window.skillsData
  const skillsToRender =
    skills || (typeof window !== "undefined" && window.skillsData) || [];

  container.innerHTML = skillsToRender
    .map(
      (skill) => `
    <div
      class="group relative p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-800/70 border-r border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors ${
        skill.colSpan || ""
      }"
    >
      <!-- Corner markers -->
      <div
        class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 z-10 rounded-full"
      >
        <svg
          class="w-full h-full"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0V12M0 6H12"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>
      <div
        class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 z-10 rounded-full"
      >
        <svg
          class="w-full h-full"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0V12M0 6H12"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>
      <div
        class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 z-10 rounded-full"
      >
        <svg
          class="w-full h-full"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0V12M0 6H12"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>
      <div
        class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 z-10 rounded-full"
      >
        <svg
          class="w-full h-full"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0V12M0 6H12"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </div>
      
      <div class="flex items-center gap-3 mb-3">
        <div
          class="w-8 h-8 rounded ${
            skill.iconBg
          } flex items-center justify-center ${skill.iconColor}"
        >
          <i class="${skill.icon}"></i>
        </div>
        <strong class="text-slate-900 dark:text-slate-100 font-semibold"
          >${skill.title}</strong
        >
      </div>
      <p
        class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
      >
        ${skill.skills.join(", ")}.
      </p>
    </div>
  `
    )
    .join("");
}

// Export for use in resume.js
if (typeof window !== "undefined") {
  window.renderSkills = renderSkills;
}
