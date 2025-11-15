// Main JavaScript File - Consolidated all functionality
class Portfolio {
    constructor() {
        this.projects = [];
        this.visibleProjects = 6;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initTypingEffect();
        this.loadProjects();
        this.initSkillsChart();
        this.initGitHubCalendar();
        this.animateOnScroll();
        this.setupFormValidation();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Load more projects
        const loadMoreBtn = document.getElementById('load-more-projects');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => this.loadMoreProjects());
        }

        // Form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });
    }

    initTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const roles = ['MERN Stack Developer', 'Full Stack Developer', 'Problem Solver', 'UI/UX Enthusiast'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        const type = () => {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        // Start typing effect
        setTimeout(type, 1000);
    }

    loadProjects() {
        this.projects = [
            {
                title: "GEU ERP Redesign",
                description: "A modern, fast, and student-friendly redesign of the GEU Legacy Portal with optimized UI, faster navigation, and easy access to academics, attendance, results, and more.",
                image: "assets/project-preview/geu-preview.webp",
                technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind", "Shadcn UI"],
                github: "https://github.com/abhijeetsinghrajput/geu-erp.git",
                demo: "https://geu-erp.onrender.com/login",
                featured: true
            },
            {
                title: "Notehub",
                description: "A clean and collaborative note-management platform to write, organize, and share notes. Supports smart formatting, LaTeX, real-time collaboration, and distraction-free UI.",
                image: "assets/project-preview/notehub-preview.webp",
                technologies: ["React", "Express", "Node.js", "MongoDB", "Socket IO"],
                github: "https://github.com/abhijeetSinghRajput/notehub-production.git",
                demo: "https://notehub-38kp.onrender.com/",
                featured: true
            },
            {
                title: "Chess Engine",
                description: "A strong chess engine built with advanced algorithms capable of defeating experienced players. Features strategic move evaluation and smart decision-making.",
                image: "assets/project-preview/chess-preview1.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/abhijeetSinghRajput/ChessEngine.git",
                demo: "https://chessleague.netlify.app",
                featured: true
            },
            {
                title: "Path Finder Visualizer",
                description: "An interactive visualizer that demonstrates popular pathfinding algorithms like A*, BFS, DFS, and Dijkstra in real-time for clearer understanding.",
                image: "assets/project-preview/pathfinder-preview.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/abhijeetSinghRajput/pathFinderVisualizer.git",
                demo: "https://path-explorer.netlify.app",
                featured: false
            },
            {
                title: "Whisper Chat App",
                description: "A fast and secure real-time chat application with typing indicators, live messaging, authentication, and smooth UI built using MERN stack.",
                image: "assets/project-preview/whisper-preview.webp",
                technologies: ["React", "Express", "Node.js", "MongoDB", "Socket IO"],
                github: "https://github.com/abhijeetSinghRajput/whisper",
                demo: "https://whisper-chat-app-m4ks.onrender.com",
                featured: true
            },
            {
                title: "Sorting Simulator",
                description: "A real-time visualization tool to learn how sorting algorithms work with step-by-step animations for Bubble, Selection, Insertion, Merge, and Quick Sort.",
                image: "assets/project-preview/sorting-preview.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/abhijeetSinghRajput/sorting-simulation.git",
                demo: "https://sortsimulator.netlify.app",
                featured: false
            },
            {
                title: "Portfolio Website",
                description: "A personal developer portfolio showcasing skills, experience, and featured projects with a clean and modern UI for seamless navigation.",
                image: "assets/project-preview/portfolio-preview.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/naveengupta09/portfolio",
                demo: "https://naveengupta.netlify.app",
                featured: false
            },
            {
                title: "TypingGuru",
                description: "A typing speed trainer designed to improve accuracy and WPM with engaging practice sessions and performance analytics.",
                image: "assets/project-preview/typingGuru-preview.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/abhijeetSinghRajput/TypingGuru",
                demo: "https://fingersfast.netlify.app/",
                featured: false
            },
            {
                title: "Num Pie Calculator",
                description: "A smart scientific equation solver that evaluates complex expressions instantly with an intuitive UI and efficient calculation engine.",
                image: "assets/project-preview/numpie-preview.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/abhijeetSinghRajput/Num-Pie.git",
                demo: "https://numpie.netlify.app/",
                featured: false
            },
            {
                title: "Snake Game",
                description: "A fun, nostalgic version of the classic Snake Game with smooth controls, colorful UI, and score tracking for an enjoyable gaming experience.",
                image: "assets/project-preview/snake-preview.webp",
                technologies: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/abhijeetSinghRajput/snake-game.git",
                demo: "https://2dsnake.netlify.app",
                featured: false
            }
        ];

        this.renderProjects();
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        const projectsToShow = this.projects.slice(0, this.visibleProjects);
        
        projectsGrid.innerHTML = projectsToShow.map(project => `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-primary">Live Demo</a>` : ''}
                        <a href="${project.github}" target="_blank" class="btn btn-secondary">View Code</a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            Live Demo
                        </a>` : ''}
                        <a href="${project.github}" target="_blank" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.04 17.65 15.95 17.18 15.75 16.75C15.55 16.32 15.24 15.96 14.85 15.69C17.25 15.39 19.75 14.48 19.75 9.69C19.75 8.39 19.29 7.2 18.45 6.28C18.82 5.23 18.82 4.11 18.45 3.06C18.45 3.06 17.45 2.75 15.25 4.28C13.39 3.81 11.41 3.81 9.55 4.28C7.35 2.75 6.35 3.06 6.35 3.06C5.98 4.11 5.98 5.23 6.35 6.28C5.51 7.2 5.05 8.39 5.05 9.69C5.05 14.48 7.55 15.39 9.95 15.69C9.56 15.96 9.25 16.32 9.05 16.75C8.85 17.18 8.76 17.65 8.8 18.13V22" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Update load more button visibility
        const loadMoreBtn = document.getElementById('load-more-projects');
        if (loadMoreBtn) {
            if (this.visibleProjects >= this.projects.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }
    }

    loadMoreProjects() {
        this.visibleProjects += 3;
        this.renderProjects();
    }

    initSkillsChart() {
        const ctx = document.getElementById('skillsRadarChart');
        if (!ctx) return;

        // Destroy existing chart if it exists
        if (this.skillsChart) {
            this.skillsChart.destroy();
        }

        const skillsData = {
            labels: ['React.js', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'Express.js', 'CSS', 'HTML'],
            datasets: [{
                label: 'Technical Skills',
                data: [90, 85, 95, 80, 82, 85, 88, 92],
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 1)',
                pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                pointRadius: 4
            }]
        };

        this.skillsChart = new Chart(ctx, {
            type: 'radar',
            data: skillsData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: '#f8fafc',
                            font: {
                                size: 12,
                                family: "'Poppins', sans-serif"
                            }
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            color: 'rgba(255, 255, 255, 0.5)',
                            showLabelBackdrop: false,
                            stepSize: 20
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#f8fafc',
                        borderColor: 'rgba(99, 102, 241, 0.5)',
                        borderWidth: 1
                    }
                }
            }
        });

        // Animate skill bars
        this.animateSkillBars();
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 500);
        });
    }

    initGitHubCalendar() {
        this.renderGitHubCalendar();
        
        // Try to fetch real GitHub data
        this.fetchGitHubData();
    }

    async fetchGitHubData() {
        try {
            // Using a proxy to avoid CORS issues
            const response = await fetch('/.netlify/functions/github-contributions');
            
            if (response.ok) {
                const data = await response.json();
                this.renderRealGitHubCalendar(data);
            } else {
                // Fallback to mock data
                console.log('Using mock GitHub data');
            }
        } catch (error) {
            console.log('Failed to fetch GitHub data, using mock data');
        }
    }

    renderGitHubCalendar() {
        const calendarGraph = document.getElementById('calendar-graph');
        const monthLabels = document.getElementById('month-labels');
        const contributionCount = document.getElementById('contribution-count');

        if (!calendarGraph || !monthLabels) return;

        // Generate mock data for demonstration
        const contributions = this.generateMockContributions();
        let totalContributions = 0;

        // Render calendar days
        calendarGraph.innerHTML = '';
        contributions.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = `calendar-day level-${day.level}`;
            dayElement.setAttribute('data-tooltip', `${day.count} contributions on ${day.date}`);
            calendarGraph.appendChild(dayElement);
            totalContributions += day.count;
        });

        // Update contribution count
        if (contributionCount) {
            contributionCount.textContent = totalContributions;
        }

        // Render month labels
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        monthLabels.innerHTML = months.map(month => `<span>${month}</span>`).join('');
    }

    generateMockContributions() {
        const contributions = [];
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 364); // One year ago

        for (let i = 0; i < 365; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            
            // More realistic contribution pattern
            let count = 0;
            const rand = Math.random();
            
            if (rand < 0.3) count = 0; // 30% no contributions
            else if (rand < 0.6) count = 1; // 30% 1 contribution
            else if (rand < 0.8) count = 2; // 20% 2 contributions
            else if (rand < 0.95) count = 3; // 15% 3 contributions
            else count = 4 + Math.floor(Math.random() * 6); // 5% 4+ contributions
            
            let level = 0;
            if (count >= 10) level = 4;
            else if (count >= 7) level = 3;
            else if (count >= 4) level = 2;
            else if (count >= 1) level = 1;

            contributions.push({
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                count: count,
                level: level
            });
        }

        return contributions;
    }

    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate skill bars when skills section is visible
                    if (entry.target.id === 'skills') {
                        this.animateSkillBars();
                    }
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('section, .project-card, .timeline-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    setupFormValidation() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.value) {
                    input.classList.remove('error');
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                this.showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        } else if (field.required && !value) {
            field.classList.add('error');
            this.showFieldError(field, 'This field is required');
            return false;
        }
        
        field.classList.remove('error');
        this.hideFieldError(field);
        return true;
    }

    showFieldError(field, message) {
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    hideFieldError(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Validate all fields
        let isValid = true;
        form.querySelectorAll('input, textarea').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            this.showMessage('Please fill in all fields correctly.', 'error');
            return;
        }

        // Show loading spinner
        this.showLoading(true);

        try {
            // Send to Netlify function
            const response = await fetch('/.netlify/functions/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Failed to send message. Please try again or email me directly.', 'error');
        } finally {
            this.showLoading(false);
        }
    }

    showLoading(show) {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.style.display = show ? 'flex' : 'none';
        }
    }

    showMessage(message, type) {
        const messageEl = document.getElementById('success-message');
        if (messageEl) {
            messageEl.textContent = message;
            messageEl.className = `success-message ${type} show`;
            
            // Add styles for different message types
            if (type === 'error') {
                messageEl.style.background = '#ef4444';
            } else if (type === 'success') {
                messageEl.style.background = '#10b981';
            }
            
            setTimeout(() => {
                messageEl.classList.remove('show');
            }, 5000);
        }
    }
}

// Field error styles
const style = document.createElement('style');
style.textContent = `
    .field-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: none;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444;
    }
`;
document.head.appendChild(style);

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Add some utility functions
window.utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
};