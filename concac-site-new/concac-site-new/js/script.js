// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg)';
            this.querySelector('span:nth-child(1)').style.top = '8px';
            this.querySelector('span:nth-child(2)').style.opacity = '0';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg)';
            this.querySelector('span:nth-child(3)').style.top = '8px';
        } else {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(0)';
            this.querySelector('span:nth-child(1)').style.top = '0';
            this.querySelector('span:nth-child(2)').style.opacity = '1';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(0)';
            this.querySelector('span:nth-child(3)').style.top = '16px';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.querySelector('span:nth-child(1)').style.transform = 'rotate(0)';
                menuToggle.querySelector('span:nth-child(1)').style.top = '0';
                menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
                menuToggle.querySelector('span:nth-child(3)').style.transform = 'rotate(0)';
                menuToggle.querySelector('span:nth-child(3)').style.top = '16px';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('#header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('#header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.about-box, .product-card, .press-content, .certificate-box, .contact-box');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .about-box, .product-card, .press-content, .certificate-box, .contact-box {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .about-box.animate, .product-card.animate, .press-content.animate, .certificate-box.animate, .contact-box.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .about-box:nth-child(2), .product-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .about-box:nth-child(3), .product-card:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .about-box:nth-child(4) {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('load', checkIfInView);
});
