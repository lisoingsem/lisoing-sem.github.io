// Education Data
// Reusable education data for resume and other pages
// Updated from https://lisoing-sem.vercel.app/

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    school: "Royal University of Phnom Penh",
    period: "2022 – 2025",
    status: "Fresh Graduate",
    statusClass:
      "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-100 dark:border-green-800",
    description:
      "Comprehensive study in computer science fundamentals, software engineering, and modern technologies. Gained solid foundation in programming, database systems, and software development methodologies.",
  },
  {
    degree: "Web Developer Course",
    school: "Sunrise Institute of Technology",
    period: "2022 – 2023",
    status: "Completed",
    statusClass:
      "bg-slate-900/50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-300 border-slate-700/30 dark:border-slate-600/30",
    description:
      "Intensive web development program covering modern frontend and backend technologies. Gained practical experience in building responsive web applications and working with various frameworks.",
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.educationData = educationData;
}
