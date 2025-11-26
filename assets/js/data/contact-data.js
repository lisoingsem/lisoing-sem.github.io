// Contact/Social Links Data
// Reusable contact data for resume and other pages

const contactData = {
  email: "lisoingsem@gmail.com",
  phone: "+855 978 263 599",
  location: "Cambodia",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/lisoingsem",
      icon: "fab fa-github",
      ariaLabel: "GitHub",
      hoverClass:
        "hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white hover:border-slate-800 dark:hover:border-slate-600",
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/lisoing.sem",
      icon: "fab fa-facebook-f",
      ariaLabel: "Facebook",
      hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lisoing-sem-443511262",
      icon: "fab fa-linkedin-in",
      ariaLabel: "LinkedIn",
      hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "Telegram",
      url: "https://t.me/lisoingsem",
      icon: "fab fa-telegram",
      ariaLabel: "Telegram",
      hoverClass: "hover:bg-[#26A5E4] hover:text-white hover:border-[#26A5E4]",
    },
    {
      name: "Email",
      url: "mailto:lisoingsem@gmail.com",
      icon: "fas fa-envelope",
      ariaLabel: "Email",
      hoverClass: "hover:bg-red-500 hover:text-white hover:border-red-500",
    },
  ],
};

// Expose to window for global access
if (typeof window !== "undefined") {
  window.contactData = contactData;
}
