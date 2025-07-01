document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
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
    const subjectCardsContainer = document.querySelector('.subject-cards');
    
    // Sample subject data (in a real app, this would come from an API)
    const subjects = [
        { id: 1, name: 'Mathematics', category: 'science', image: 'math.jpg', questions: 1250, lessons: 45 },
        { id: 2, name: 'English Language', category: 'arts', image: 'english.jpg', questions: 980, lessons: 32 },
        { id: 3, name: 'Physics', category: 'science', image: 'physics.jpg', questions: 870, lessons: 38 },
        { id: 4, name: 'Chemistry', category: 'science', image: 'chemistry.jpg', questions: 920, lessons: 40 },
        { id: 5, name: 'Biology', category: 'science', image: 'biology.jpg', questions: 850, lessons: 36 },
        { id: 6, name: 'Economics', category: 'commercial', image: 'economics.jpg', questions: 760, lessons: 28 },
        { id: 7, name: 'Government', category: 'arts', image: 'government.jpg', questions: 680, lessons: 25 },
        { id: 8, name: 'Literature in English', category: 'arts', image: 'literature.jpg', questions: 540, lessons: 20 },
        { id: 9, name: 'Financial Accounting', category: 'commercial', image: 'accounting.jpg', questions: 620, lessons: 22 },
        { id: 10, name: 'Commerce', category: 'commercial', image: 'commerce.jpg', questions: 580, lessons: 18 },
    ];

    function renderSubjects(filter = 'all') {
        subjectCardsContainer.innerHTML = '';
        
        const filteredSubjects = filter === 'all' 
            ? subjects 
            : subjects.filter(subject => subject.category === filter);
        
        filteredSubjects.forEach(subject => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.innerHTML = `
                <img src="images/${subject.image}" alt="${subject.name}">
                <div class="subject-info">
                    <h3>${subject.name}</h3>
                    <p>Comprehensive coverage of ${subject.name} syllabus with detailed explanations.</p>
                    <div class="subject-meta">
                        <span><i class="fas fa-question-circle"></i> ${subject.questions} Questions</span>
                        <span><i class="fas fa-video"></i> ${subject.lessons} Lessons</span>
                    </div>
                </div>
            `;
            subjectCardsContainer.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            renderSubjects(filter);
        });
    });

    // Initialize with all subjects
    renderSubjects();

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
                navLinks.style.display = 'none';
                authButtons.style.display = 'none';
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