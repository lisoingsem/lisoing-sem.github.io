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
      class="glow-card group p-5 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-xl hover:border-indigo-500/60 dark:hover:border-indigo-500/60 transition-all flex flex-col justify-between"
    >
      <div>
        <div class="flex items-start justify-between gap-2 mb-2.5">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            ${project.category}
          </span>
          <span
            class="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 rounded-full"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            ${project.status}
          </span>
        </div>

        <h3
          class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2"
        >
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1.5">
            <span>${project.title}</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[11px] text-slate-400 group-hover:text-indigo-500 transition-colors"></i>
          </a>
        </h3>

        <p
          class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed"
        >
          ${project.description}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.technologies
            .map(
              (tech) => `
            <span
              class="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200/60 dark:border-slate-700/60"
              >${tech}</span
            >
          `
            )
            .join("")}
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <a
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            <span>Live Platform</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
          <span class="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
            ${new URL(project.url).hostname.replace("www.", "")}
          </span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Export for use in resume.js
if (typeof window !== "undefined") {
  window.renderProjects = renderProjects;
}
