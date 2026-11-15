// Experience Data
// Reusable experience data for resume and other pages

const experienceData = [
  {
    title: "Backend Developer — Skylink Technologies",
    period: "Jun 2024 – Mar 2026",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Built RESTful APIs and Redis background queue workers for high-volume automation services.",
      "Designed MySQL database schemas and optimized slow SQL queries for faster report loading.",
      "Integrated third-party APIs and created webhook handlers for instant payment verification.",
      "Maintained staging and production servers, helping deploy weekly releases with minimal downtime.",
    ],
  },
  {
    title: "Full-Stack Developer — Durable Techs",
    period: "Jun 2024 – Dec 2024",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Built modular platform features using Laravel Modules and Vue 3 for educational clients.",
      "Worked directly with school staff to gather requirements, fix reported bugs, and deliver features on time.",
      "Designed responsive, mobile-friendly interfaces using Tailwind CSS.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer — Remote",
    period: "2022 – Present",
    status: "Active",
    statusClass:
      "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    responsibilities: [
      "Developed complete custom web applications from database schema to UI using Laravel and Vue.js.",
      "Integrated Cambodian payment systems (Bakong KHQR and ABA PayWay) with automated callback verification.",
      "Configured Linux VPS servers with Nginx, SSL certificates, and Cloudflare DNS protection.",
    ],
  },
  {
    title: "Front-End Developer — Phsar Tech",
    period: "Oct 2023 – Feb 2024",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Built and styled responsive web pages using Laravel Blade and Tailwind CSS for marketing clients.",
      "Fixed responsive layout bugs across mobile and desktop browsers.",
    ],
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.experienceData = experienceData;
}
