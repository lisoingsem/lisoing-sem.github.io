/**
 * Stack Inventory Rendering
 *
 * Dynamically renders the stack inventory skills with brand-colored hover effects.
 * Matches mrpunyapal.dev style exactly.
 */

// Stack Inventory - Easy to add/remove skills
const STACKS = [
  "PHP",
  "Laravel",
  "Vue.js",
  "Tailwind",
  "JavaScript",
  "MySQL",
  "Git",
  "Node.js",
  "Express",
  "API",
];

// Skill hover colors mapping - brand colors for visual appeal
const SKILL_HOVER_COLORS = {
  PHP: "#777BB4",
  Laravel: "#FF2D20",
  "Vue.js": "#4FC08D",
  Tailwind: "#06B6D4",
  JavaScript: "#F7DF1E",
  MySQL: "#4479A1",
  Git: "#F05032",
  "Node.js": "#339933",
  // Express and API use default primary color
};

// CSS class constants
const CARD_BASE_CLASSES =
  "p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-center group transition-all duration-300 rounded hover:shadow-sm hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 w-full";
const TEXT_BASE_CLASSES =
  "text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors block";
const DEFAULT_HOVER_BORDER = "hover:border-primary-500";
const DEFAULT_HOVER_TEXT =
  "group-hover:text-primary-500 dark:group-hover:text-primary-500";

/**
 * Creates a skill card HTML element
 * @param {string} skill - The skill name
 * @param {string|null} hoverColor - The hover color hex code, or null for default
 * @returns {string} HTML string for the skill card
 */
const createSkillCard = (skill, hoverColor) => {
  if (hoverColor) {
    // Use inline style for custom colors
    return `
      <div class="${CARD_BASE_CLASSES}" style="--hover-color: ${hoverColor};" onmouseenter="this.style.borderColor='${hoverColor}'; this.querySelector('span').style.color='${hoverColor}';" onmouseleave="this.style.borderColor=''; this.querySelector('span').style.color='';">
        <span class="${TEXT_BASE_CLASSES}">${skill}</span>
      </div>
    `;
  } else {
    // Use default Tailwind classes
    return `
      <div class="${CARD_BASE_CLASSES} ${DEFAULT_HOVER_BORDER}">
        <span class="${TEXT_BASE_CLASSES} ${DEFAULT_HOVER_TEXT}">${skill}</span>
      </div>
    `;
  }
};

/**
 * Renders the stack inventory into the container
 */
const renderStackInventory = () => {
  const container = document.getElementById("stack-inventory-container");
  if (!container) {
    console.warn("Stack inventory container not found");
    return;
  }

  const cards = STACKS.map((skill) => {
    const hoverColor = SKILL_HOVER_COLORS[skill] || null;
    return createSkillCard(skill, hoverColor);
  });

  container.innerHTML = cards.join("");
};

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderStackInventory);
} else {
  // DOM already loaded
  renderStackInventory();
}

// Export for potential external use
if (typeof window !== "undefined") {
  window.renderStackInventory = renderStackInventory;
}
