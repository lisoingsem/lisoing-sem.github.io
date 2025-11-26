// Skills Data
// Reusable skills data for resume and other pages

const skillsData = [
  {
    title: "Frontend",
    icon: "fas fa-desktop",
    iconBg: "bg-blue-50 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    skills: [
      "Vue.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
      "Blade templates",
      "responsive design",
    ],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    iconBg: "bg-green-50 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    skills: [
      "Laravel",
      "Laravel Modules",
      "PHP",
      "Node.js",
      "Express",
      "API Development",
      "RESTful APIs",
    ],
  },
  {
    title: "Database",
    icon: "fas fa-database",
    iconBg: "bg-purple-50 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    skills: [
      "MySQL",
      "Database Design",
      "Database Analysis",
      "Data modeling",
      "Query optimization",
    ],
  },
  {
    title: "DevOps / Cloud",
    icon: "fas fa-cloud",
    iconBg: "bg-orange-50 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    skills: [
      "Git",
      "Version Control",
      "Cloud Solutions",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Other",
    icon: "fas fa-tools",
    iconBg: "bg-red-50 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    skills: [
      "Git",
      "Version Control",
      "API Design",
      "Full Stack Development",
      "Client Collaboration",
      "Problem Solving",
    ],
    colSpan: "sm:col-span-2",
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.skillsData = skillsData;
}
