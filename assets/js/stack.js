/**
 * Stack Inventory Rendering
 * Dynamically renders stack inventory skills with brand-colored hover glows.
 */

const STACKS = [
  { name: "Laravel", color: "#FF2D20", icon: "fab fa-laravel" },
  { name: "Vue.js", color: "#4FC08D", icon: "fab fa-vuejs" },
  { name: "PHP", color: "#777BB4", icon: "fab fa-php" },
  { name: "Inertia.js", color: "#9553E9", icon: "fa-solid fa-layer-group" },
  { name: "TypeScript", color: "#3178C6", icon: "fa-solid fa-code" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "fa-solid fa-wind" },
  { name: "MySQL", color: "#4479A1", icon: "fa-solid fa-database" },
  { name: "REST APIs", color: "#10B981", icon: "fa-solid fa-network-wired" },
  { name: "Node.js", color: "#339933", icon: "fab fa-node-js" },
  { name: "Git", color: "#F05032", icon: "fab fa-git-alt" },
];

const renderStackInventory = () => {
  const container = document.getElementById("stack-inventory-container");
  if (!container) return;

  container.innerHTML = STACKS.map(
    (item) => `
    <div
      class="p-3 sm:p-3.5 bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-xl flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default group"
      onmouseenter="this.style.borderColor='${item.color}'; this.style.boxShadow='0 8px 20px -6px ${item.color}40';"
      onmouseleave="this.style.borderColor=''; this.style.boxShadow='';"
    >
      <div
        class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
        style="background-color: ${item.color}15; color: ${item.color};"
      >
        <i class="${item.icon} text-sm"></i>
      </div>
      <span class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
        ${item.name}
      </span>
    </div>
  `
  ).join("");
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderStackInventory);
} else {
  renderStackInventory();
}

if (typeof window !== "undefined") {
  window.renderStackInventory = renderStackInventory;
}
