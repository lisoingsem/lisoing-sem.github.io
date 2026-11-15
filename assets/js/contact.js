// Contact/Social Links Rendering
// Uses contactData from data/contact-data.js

function renderContactLinks(
  containerId = "contact-links-container",
  contactLinks = null
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const linksToRender =
    contactLinks ||
    (typeof window !== "undefined" &&
      window.contactData &&
      window.contactData.links) ||
    [];

  container.innerHTML = linksToRender
    .map(
      (link) => `
    <a
      href="${link.url}"
      ${link.url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}
      class="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-sm"
      aria-label="${link.ariaLabel}"
      title="${link.name}"
    >
      <i class="${link.icon} text-sm transition-transform group-hover:scale-110"></i>
      <span class="text-xs font-semibold">${link.name}</span>
    </a>
  `
    )
    .join("");
}

if (typeof window !== "undefined") {
  window.renderContactLinks = renderContactLinks;
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("contact-links-container");
  if (container) {
    renderContactLinks();
  }
});
