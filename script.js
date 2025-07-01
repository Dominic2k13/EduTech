document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });

    // Modal Handling
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    function openModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    loginBtn.addEventListener('click', () => openModal(loginModal));
    signupBtn.addEventListener('click', () => openModal(signupModal));

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Subject Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const subjectCards = document.querySelectorAll('.subject-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter subjects
            subjectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }

    prevBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });

    // Auto-rotate testimonials
    setInterval(() => {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
            }
        });
    });

    // Form submission handling
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, you would handle authentication here
        alert('Login functionality would be implemented here');
        closeModal(loginModal);
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, you would handle registration here
        alert('Signup functionality would be implemented here');
        closeModal(signupModal);
    });
});