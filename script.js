// Mobile Menu Toggle
var menuToggle = document.getElementById('menuToggle');
var navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Close menu when a link is clicked
var navLinks = document.querySelectorAll('.nav-menu a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navMenu.classList.remove('show');
    });
}

// Contact Form Handler
var contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        
        // Check if all fields are filled
        if (name == '' || email == '' || subject == '' || message == '') {
            alert('Please fill in all fields!');
            return;
        }
        
        // Check if email is valid
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email!');
            return;
        }
        
        // Show success message
        alert('Thank you! Your message has been sent.');
        
        // Clear the form
        contactForm.reset();
    });
}

// Smooth Scroll
var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        var targetId = this.getAttribute('href');
        
        if (targetId == '#') {
            return;
        }
        
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}
