// Contact/Social Links Rendering
// Renders contact links dynamically
// Uses contactData from data/contact-data.js

function renderContactLinks(
  containerId = "contact-links-container",
  contactLinks = null
) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use provided contactLinks or fall back to window.contactData.links
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
      ${
        link.url.startsWith("http")
          ? 'target="_blank" rel="noopener noreferrer"'
          : ""
      }
      class="group w-12 h-12 flex items-center justify-center border-2 border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-300 ${
        link.hoverClass
      }"
      aria-label="${link.ariaLabel}"
      title="${link.name}"
    >
      <i class="${link.icon} text-base transition-transform"></i>
    </a>
  `
    )
    .join("");
}

// Export for use in other scripts
if (typeof window !== "undefined") {
  window.renderContactLinks = renderContactLinks;
}

// Auto-initialize when DOM is ready (for landing page)
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("contact-links-container");
  if (container) {
    renderContactLinks();
  }
});
