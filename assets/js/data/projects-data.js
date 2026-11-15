// Projects Data
// Reusable projects data for resume and other pages

const projectsData = [
  {
    title: "KrupYang",
    category: "Software Solutions Platform",
    status: "Live",
    description:
      "Official website for KrupYang Digital Ecosystem. Built with a custom CMS block engine and 3-language localization (Khmer, English, Chinese).",
    technologies: [
      "Laravel",
      "Inertia.js",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "i18n",
    ],
    url: "https://krupyang.com/",
  },
  {
    title: "NetBlock",
    category: "Parental Control SaaS",
    status: "Live",
    description:
      "Parental control platform for managing children's screen time. Built subscription billing, app blocking schedule rules, and real-time location tracking APIs.",
    technologies: [
      "PHP",
      "Node.js",
      "Express",
      "REST APIs",
      "Billing",
    ],
    url: "https://www.netblock.app/",
  },
  {
    title: "EDU Partner",
    category: "School Management Platform",
    status: "Live",
    description:
      "Platform for partner schools to manage collaboration. Built custom features for course and student management with Tailwind UI.",
    technologies: [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "Customization",
    ],
    url: "https://www.edupartner.app/",
  },
  {
    title: "Cambodia Tourism Association",
    category: "National Tourism Platform",
    status: "Live",
    description:
      "Tourism portal with interactive regional maps, event listings, and member directory to promote Cambodia tourism.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "REST APIs",
      "Responsive",
    ],
    url: "https://www.cata.org.kh/",
  },
  {
    title: "HEMIS Management System",
    category: "Higher Education Management",
    status: "Live",
    description:
      "Comprehensive education system to manage university student records, academic history, and institutional analytics dashboards.",
    technologies: [
      "Laravel",
      "Laravel Modules",
      "Vue.js",
      "MySQL",
    ],
    url: "https://hemis.dghekh.com/",
  },
  {
    title: "Sunsimexco Ltd",
    category: "E-Commerce Retail Platform",
    status: "Live",
    description:
      "Modern e-commerce platform with product catalog management and search engine optimization (SEO) to increase online sales.",
    technologies: [
      "Laravel",
      "Vue.js",
      "SEO",
      "Responsive",
    ],
    url: "https://sunsimexco.com.kh/",
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.projectsData = projectsData;
}
