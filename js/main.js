/**
 * Portfolio Website - Main JavaScript
 * Minimal vanilla JavaScript for smooth scrolling and interactions
 */

(function() {
    'use strict';

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Don't prevent default if it's just '#'
                if (href === '#') return;
                
                e.preventDefault();
                
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add active state to navigation links based on scroll position
    function initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        if (sections.length === 0 || navLinks.length === 0) return;

        function updateActiveLink() {
            let current = '';
            const scrollPosition = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink(); // Call once on load
    }

    // Add entrance animations on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe cards and other elements
        const elements = document.querySelectorAll('.card, .principle, .capability-item, .audience-item');
        elements.forEach(el => observer.observe(el));
    }

    // Add CSS for fade-in animation
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .card, .principle, .capability-item, .audience-item {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .fade-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .nav-links a.active {
                color: var(--color-accent);
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize all functions when DOM is ready
    function init() {
        initSmoothScroll();
        initScrollSpy();
        addAnimationStyles();
        initScrollAnimations();
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
