// Experience Data
// Reusable experience data for resume and other pages
// Updated from https://lisoing-sem.vercel.app/

const experienceData = [
  {
    title: "Backend Developer — Skylink Technologies",
    period: "Jun 2024 – Present",
    status: "Current",
    statusClass:
      "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-100 dark:border-green-800",
    responsibilities: [
      "Leading backend initiatives across cloud and automation projects.",
      "Building secure APIs, modernizing data architecture, and collaborating with cross-functional teams.",
      "Delivering scalable business solutions for enterprise clients.",
      "Working with Node.js, API Architecture, Database Design, and Cloud Solutions.",
    ],
  },
  {
    title: "Full-Stack Developer — Durable Techs",
    period: "Jun 2024 – Dec 2024",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Improved features on an education platform using Laravel Modules and Vue3 for development.",
      "Working closely with clients to meet specific requirements and delivering high-quality solutions.",
      "Collaborated with cross-functional teams to enhance platform functionality.",
      "Focused on UI/UX improvements and feature development for better user experience.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer — Remote",
    period: "2022 – Present",
    status: "Current",
    statusClass:
      "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-100 dark:border-green-800",
    responsibilities: [
      "Built responsive web applications with Laravel & Vue.js.",
      "Created APIs and improved app performance.",
      "Delivered custom solutions directly to clients while applying best practices.",
      "Enhanced code quality, security, and performance across multiple projects.",
    ],
  },
  {
    title: "Front-End Developer — Phsar Tech",
    period: "Oct 2023 – Feb 2024",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    responsibilities: [
      "Built and cloned responsive websites using Laravel & Tailwind CSS.",
      "Worked with QA and senior developers to test and improve features.",
      "Developed custom solutions for an Advertising Agency based on client needs.",
      "Focused on responsive design and modern UI/UX principles.",
    ],
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.experienceData = experienceData;
}
