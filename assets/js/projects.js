// Featured Projects Rendering
// Renders featured projects dynamically
// Uses projectsData from data/projects-data.js

function renderProjects(containerId = "projects-container", projects = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use provided projects or fall back to window.projectsData
  const projectsToRender =
    projects || (typeof window !== "undefined" && window.projectsData) || [];

  container.innerHTML = projectsToRender
    .map(
      (project) => `
    <div
      class="group p-4 sm:p-5 bg-slate-50/50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
    >
      <div class="flex items-start justify-between mb-3">
        <div>
          <h3
            class="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1"
          >
            ${project.title}
          </h3>
          <span class="text-xs text-slate-600 dark:text-slate-400"
            >${project.category}</span
          >
        </div>
        <span
          class="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded"
        >
          ${project.status}
        </span>
      </div>
      <p
        class="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed"
      >
        ${project.description}
      </p>
      <div class="flex flex-wrap gap-1.5 mb-3">
        ${project.technologies
          .map(
            (tech) => `
          <span
            class="px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-600"
            >${tech}</span
          >
        `
          )
          .join("")}
      </div>
      <a
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
      >
        View Project
        <i class="fas fa-external-link-alt text-xs"></i>
      </a>
    </div>
  `
    )
    .join("");
}

// Export for use in resume.js
if (typeof window !== "undefined") {
  window.renderProjects = renderProjects;
}
