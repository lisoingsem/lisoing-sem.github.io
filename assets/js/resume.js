// Resume Page Initialization
// Main script for resume page - orchestrates all rendering

// Load data files first
// Note: In a real setup, you might use ES modules or a bundler
// For now, we'll assume data files are loaded before this script

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all resume sections
  if (typeof window.renderSkills === "function") {
    window.renderSkills("skills-container", window.skillsData);
  }

  if (typeof window.renderExperience === "function") {
    window.renderExperience("experience-container", window.experienceData);
  }

  if (typeof window.renderEducation === "function") {
    window.renderEducation("education-container", window.educationData);
  }
});
