/* ========================================
   Portfolio JavaScript
   ======================================== */

// ========== DOM Elements ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// ========== Hamburger Menu ==========
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========== Smooth Scroll & Active Link Highlighting ==========
document.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    // Get all sections
    const sections = document.querySelectorAll('section[id], .projects-hero[id]');
    const scrollY = window.scrollY;

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Find the current section and add active class
    for (let section of sections) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            const activeLink = document.querySelector(`a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            break;
        }
    }
}

// Set initial active link
window.addEventListener('load', () => {
    updateActiveNavLink();
});

// ========== Smooth Scrolling for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's a special link or external link
        if (href === '#' || this.target === '_blank') {
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            
            const offsetTop = target.offsetTop - 80; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ========== Intersection Observer for Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill categories and project cards on initial load
document.addEventListener('DOMContentLoaded', () => {
    const animatableElements = document.querySelectorAll(
        '.skill-category, .project-card, .project-detailed, .stat, .info-item'
    );
    
    animatableElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// ========== Utility: Prevent Multiple Scrolls ==========
let isScrolling = false;

document.addEventListener('wheel', (e) => {
    if (isScrolling) return;
}, { passive: true });

// ========== Export for compatibility ==========
window.portfolioScript = {
    updateActiveNavLink,
    observer
};

// ========== Mobile Navigation Accessibility ==========
// Trap focus within mobile menu when open
const trapFocus = (event) => {
    if (!navMenu.classList.contains('active')) return;
    
    const focusableElements = navMenu.querySelectorAll('a, button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
        if (event.shiftKey) {
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
};

document.addEventListener('keydown', trapFocus);

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========== Contact Form Handler (FormSubmit) ==========
// FormSubmit handles the actual email sending
const contactForm = document.querySelector('.contact-form-wrapper');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Show loading state on button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // FormSubmit will handle the submission and redirect
        // No need to prevent default - let it submit naturally
    });
}

// ========== Console Message ==========
console.log('%cHarichandra Bhukya\'s Portfolio', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #10b981; font-size: 14px;');
console.log('%cGithub: https://github.com/harichandra04', 'color: #818cf8; font-size: 12px;');
