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
      "Built RESTful APIs and background queue workers for cloud and automation services.",
      "Designed MySQL database tables and optimized slow database queries.",
      "Integrated third-party APIs and handled webhook payment callbacks.",
      "Collaborated with team members to deploy updates and maintain server uptime.",
    ],
  },
  {
    title: "Full-Stack Developer — Durable Techs",
    period: "Jun 2024 – Dec 2024",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Developed modular platform features using Laravel Modules and Vue 3.",
      "Worked directly with school clients to build requested features and fix bugs.",
      "Built clean, responsive, mobile-friendly user interfaces using Tailwind CSS.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer — Remote",
    period: "2022 – Present",
    status: "Active",
    statusClass:
      "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    responsibilities: [
      "Built client web applications from scratch using Laravel, Vue.js, and MySQL.",
      "Integrated Cambodian payment gateways: Bakong KHQR and ABA PayWay.",
      "Deployed websites to Linux servers with Nginx, SSL certificates, and Cloudflare.",
    ],
  },
  {
    title: "Front-End Developer — Phsar Tech",
    period: "Oct 2023 – Feb 2024",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Built and styled responsive web pages using Laravel Blade and Tailwind CSS.",
      "Fixed responsive layout bugs across mobile and desktop browsers.",
    ],
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.experienceData = experienceData;
}
