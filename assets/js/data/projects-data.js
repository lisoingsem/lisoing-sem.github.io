// Projects Data
// Reusable projects data for resume and other pages

const projectsData = [
  {
    title: "KrupYang",
    category: "Digital Agency & Multi-Service Platform",
    status: "Live",
    description:
      "Modern full-stack digital agency and business services ecosystem built with enterprise architecture. Features multilingual localization (Khmer, English, Chinese), dynamic CMS block management, service discovery, and client consultation workflows.",
    technologies: [
      "Laravel",
      "Inertia.js",
      "Vue.js",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "PHP",
      "MySQL",
    ],
    url: "https://krupyang.com/",
  },
  {
    title: "Digital KrupYang",
    category: "Digital Products & E-Commerce Platform",
    status: "Live",
    description:
      "Automated digital marketplace delivering instant digital asset fulfillment, customer digital wallet management, integrated payment gateways (Bakong KHQR, Cutluy, PayWay), seamless checkout flows, and automated license distribution.",
    technologies: [
      "Laravel",
      "Inertia.js",
      "Vue.js",
      "Tailwind CSS",
      "Digital Wallet",
      "Payment Gateways",
      "API Architecture",
    ],
    url: "https://digital.krupyang.com/",
  },
  {
    title: "NetBlock",
    category: "Parental Control & Digital Wellbeing Platform",
    status: "Live",
    description:
      "Parental control platform for managing children's screen time with scheduled blocking, app lock, live location tracking, and geofencing alerts. Built with secure APIs for subscription management and real-time device monitoring.",
    technologies: [
      "PHP",
      "Node.js",
      "Express",
      "API Design",
      "Database Analysis",
      "Real-time Tracking",
      "Subscription Management",
      "Analytics Dashboard",
    ],
    url: "https://www.netblock.app/",
  },
  {
    title: "EDU Partner",
    category: "Education Platform",
    status: "Live",
    description:
      "Led full-stack development to modernize the platform UX, introduce new collaboration features, and tailor learning workflows that match partner schools' requirements.",
    technologies: [
      "Laravel",
      "Full Stack",
      "UI/UX Improvements",
      "Feature Development",
      "Customization",
    ],
    url: "https://www.edupartner.app/",
  },
  {
    title: "Cambodia Tourism Association",
    category: "Tourism Platform",
    status: "Live",
    description:
      "Tourism Website – Built a platform with maps, event listings, and secure login to promote tourism in Cambodia.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "API Integration",
      "Web Design",
      "Authentication",
    ],
    url: "https://www.cata.org.kh/",
  },
  {
    title: "HEMIS Management System",
    category: "Education System",
    status: "Live",
    description:
      "Education System – Created a system to manage students, academic records, and dashboards for universities.",
    technologies: [
      "Laravel",
      "Laravel Modules",
      "Vue.js",
      "Database Design",
      "Dashboard",
    ],
    url: "https://hemis.dghekh.com/",
  },
  {
    title: "Sunsimexco Ltd",
    category: "E-commerce Platform",
    status: "Live",
    description:
      "E-commerce Website – Developed a modern, responsive site with online product listings and SEO to boost visibility and sales.",
    technologies: [
      "Laravel",
      "Laravel Modules",
      "Vue.js",
      "Full Stack",
      "SEO",
      "Responsive",
    ],
    url: "https://sunsimexco.com.kh/",
  },
  {
    title: "3Winbiz Cambodia Co., Ltd",
    category: "E-commerce Platform",
    status: "Live",
    description:
      "E-commerce Platform – Built a system with vendor and agent roles to manage product listings, sales, and business operations.",
    technologies: [
      "Laravel",
      "Laravel Modules",
      "Vue.js",
      "Full Stack",
      "SEO",
      "Responsive",
    ],
    url: "https://3winbiz.com.kh/",
  },
];

// Expose to window for global access
if (typeof window !== "undefined") {
  window.projectsData = projectsData;
}
