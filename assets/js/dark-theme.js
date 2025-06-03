/* =================================================================== 
 * Dark Theme JavaScript
 * Modern interactive functionality
 * ------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

    // ===================================================================
    // # PRELOADER
    // ===================================================================

    const preloader = document.getElementById('preloader');

    window.addEventListener('load', function () {
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        }
    });    // ===================================================================
    // # HEADER SCROLL EFFECT & NAVIGATION HIGHLIGHTING
    // ===================================================================

    const header = document.getElementById('header');
    const scrollTop = document.getElementById('scroll-top');
    let ticking = false;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Header scroll effect
        if (scrollY > 100) {
            header.classList.add('scrolled');
            if (scrollTop) {
                scrollTop.classList.add('visible');
            }
        } else {
            header.classList.remove('scrolled');
            if (scrollTop) {
                scrollTop.classList.remove('visible');
            }
        }

        // Navigation highlighting
        highlightNavigation();

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    // ===================================================================
    // # MOBILE NAVIGATION
    // ===================================================================

    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ===================================================================
    // # SMOOTH SCROLLING
    // ===================================================================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================================================
    // # SCROLL TO TOP
    // ===================================================================

    if (scrollTop) {
        scrollTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================================================
    // # ACTIVE NAVIGATION HIGHLIGHTING
    // ===================================================================

    const sections = document.querySelectorAll('section[id]');
    const navLinksForHighlight = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksForHighlight.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===================================================================
    // # SCROLL ANIMATIONS
    // ===================================================================

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.timeline-item, .portfolio-item, .stat-item, .skill-tag');
    animateElements.forEach(el => observer.observe(el));

    // ===================================================================
    // # PORTFOLIO INTERACTIONS
    // ===================================================================

    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        // Add hover sound effect (optional)
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Add click effect
        item.addEventListener('click', function (e) {
            if (!e.target.closest('a')) {
                const link = this.querySelector('.portfolio-footer .btn');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });

    // ===================================================================
    // # SKILL TAG INTERACTIONS
    // ===================================================================

    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';

            this.style.position = 'relative';
            this.appendChild(ripple);

            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });

    // ===================================================================
    // # STATS COUNTER ANIMATION
    // ===================================================================

    const statsNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const suffix = element.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 60; // 60 frames for 1 second animation

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };

        updateCounter();
    };

    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsNumbers.forEach(stat => statsObserver.observe(stat));

    // ===================================================================
    // # TIMELINE ITEM HOVER EFFECTS
    // ===================================================================

    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            // Add glow effect to timeline icon
            const icon = this.querySelector('.timeline-icon');
            if (icon) {
                icon.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)';
            }
        });

        item.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.timeline-icon');
            if (icon) {
                icon.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
            }
        });
    });

    // ===================================================================
    // # CONTACT METHOD INTERACTIONS
    // ===================================================================

    const contactMethods = document.querySelectorAll('.contact-method');

    contactMethods.forEach(method => {
        method.addEventListener('click', function () {
            const link = this.querySelector('a');
            if (link) {
                // Create click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px)';
                    if (link.href.startsWith('mailto:') || link.href.startsWith('https:')) {
                        window.open(link.href, link.target || '_self');
                    }
                }, 150);
            }
        });
    });

    // ===================================================================
    // # BACKGROUND PARTICLE EFFECTS
    // ===================================================================

    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;

        document.body.appendChild(particleContainer);

        // Create floating particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #00ffff;
                border-radius: 50%;
                opacity: ${Math.random() * 0.5 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s infinite linear;
            `;

            particleContainer.appendChild(particle);
        }
    }

    // Initialize particles
    createParticles();

    // ===================================================================
    // # ADD RIPPLE ANIMATION CSS
    // ===================================================================

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes float {
            0% { transform: translateY(100vh) translateX(0px); }
            25% { transform: translateY(75vh) translateX(10px); }
            50% { transform: translateY(50vh) translateX(-5px); }
            75% { transform: translateY(25vh) translateX(15px); }
            100% { transform: translateY(-10vh) translateX(-10px); }
        }
        
        .animate-in {
            animation: slideInUp 0.8s ease forwards;
        }
        
        .particle-container {
            pointer-events: none !important;
        }
    `;
    document.head.appendChild(style);    // ===================================================================
    // # CONSOLE GREETING
    // ===================================================================

    console.log('%c👋 Hello Developer!', 'color: #00ffff; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the source at: https://github.com/LisoingSem', 'color: #00ffff;');

});

// ===================================================================
// # UTILITY FUNCTIONS
// ===================================================================

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
