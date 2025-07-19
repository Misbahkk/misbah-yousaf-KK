// Enhanced Projects JavaScript

// Project Data
const projectsData = {
  1: {
  "title": "QuizifyAI – Smart Quiz Builder with AI Integration",
  "duration": "2 months",
  "teamSize": "Solo Project",
  "role": "Full Stack Developer",
  "technologies": [
    "React.js",
    "Django",
    "PostgreSQL",
    "OpenAI API",
    "RESTful APIs",
    "JWT Authentication"
  ],
  "githubLink": "https://github.com/Misbahkk/backend-Quize-app",
  "liveLink": "https://github.com/Misbahkk/backend-Quize-app",
  "description": "QuizifyAI is an AI-powered quiz platform where users can generate quizzes, get smart suggestions, edit questions, and analyze results – all in one place. It includes secure authentication, real-time participation, and detailed result analysis. Built with a clean architecture, it integrates GPT APIs to automate quiz creation and supports user-friendly features for both participants and quiz creators.",
  "challenges": "Integrating AI with quiz logic, maintaining real-time result updates, and managing user access levels with secure authentication were major challenges. Ensuring a clean codebase across the React-Django stack and designing intuitive user experiences for both creators and participants also required careful architectural planning.",
  "features": [
    "AI-powered quiz generation (topic and difficulty based)",
    "Secure login/signup with email verification & password reset",
    "Quiz editing with smart suggestions using GPT",
    "Real-time quiz participation and scoring",
    "Live poll & result updates for participants",
    "Detailed result analysis with performance charts",
    "Quiz management (edit, delete, track responses)",
    "Clean RESTful APIs tested with Postman",
    "Full-stack automation and code organization"
  ],
  "images": [
    "images/quize_images/quiz_1.png",
    "images/quize_images/quiz_2.png",
    "images/quize_images/quiz_3.png",
    "images/quize_images/quiz_4.png",
    "images/quize_images/quiz_5.png",
    "images/quize_images/quiz_6.png",
    "images/quize_images/quiz_7.png",
    "images/quize_images/quiz_8.png",
    "images/quize_images/quiz_9.png",
    "images/quize_images/quiz_10.png",
    "images/quize_images/quiz_11.png",
    
  ]
}
,
  2: {
  "title": "Full-Stack E-commerce Web App with Cart, Coupons & Secure Checkout",
  "duration": "1.5 months",
  "teamSize": "Solo Project",
  "role": "Full Stack Developer",
  "technologies": [
    "React.js",
    "Django",
    "PostgreSQL",
    "RESTful API",
    "JWT Authentication"
  ],
  "githubLink": "https://github.com/yourusername/ecommerce-app",
  "liveLink": "#",
  "description": "An end-to-end e-commerce platform built using Django and React, featuring secure authentication, real-time cart updates, coupon-based discounts, and an integrated checkout flow. Users can browse products, manage their carts, apply discount codes, and place orders securely. Admins can handle inventory and track orders through a dedicated dashboard.",
  "challenges": "Ensuring a smooth cart experience with live quantity updates and discount logic was challenging. Implementing secure payment integration and email-based account verification required careful attention to security and user experience. Building a scalable backend structure for admin control and product management also added depth to the architecture.",
  "features": [
    "User signup/login with email verification",
    "Cart system with quantity management",
    "Coupon system for dynamic discounts",
    "Secure payment and checkout integration",
    "Order history and status tracking",
    "Admin dashboard to manage products and orders",
    "RESTful API structure with JWT-based authentication",
    "Clean UI with responsive design in React",
    "Database design and integration using PostgreSQL"
  ],
  "images": [
    "images/e-commerce_pic/image_1.png",
    "images/e-commerce_pic/image_2.png",
    "images/e-commerce_pic/image_3.png",
    "images/e-commerce_pic/image_4.png",
    "images/e-commerce_pic/image_5.png",
    "images/e-commerce_pic/image_6.png",


  ]
}
,
  3: {
    title: "Portfolio Website",
    duration: "3 weeks",
    teamSize: "Solo Project",
    role: "Frontend Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS", "Responsive Design"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio.com",
    description: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with clean HTML, CSS, and JavaScript, featuring smooth animations, interactive elements, and a professional design that works seamlessly across all devices.",
    challenges: "Creating a design that stands out while maintaining professional appeal was challenging. I focused on implementing smooth animations without compromising performance, ensuring cross-browser compatibility, and optimizing for both desktop and mobile experiences. The biggest technical challenge was creating custom CSS animations that enhance user experience.",
    features: [
      "Fully responsive design",
      "Smooth scroll animations",
      "Interactive project showcase",
      "Contact form with validation",
      "SEO optimized structure",
      "Cross-browser compatibility"
    ],
    images: [
      "images/project-1.png",
      "images/project-1.png",
      "images/project-1.png"
    ]
  },
  4: {
    title: "Weather App",
    duration: "2 weeks",
    teamSize: "Solo Project",
    role: "Full Stack Developer",
    technologies: ["Python", "Requests", "OpenWeatherMap API", "Tkinter", "JSON"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "#",
    description: "A desktop weather application that provides current weather conditions and forecasts for any location worldwide. The app integrates with OpenWeatherMap API to fetch real-time weather data and presents it in a clean, user-friendly interface.",
    challenges: "Working with external APIs and handling various edge cases was the main challenge. I had to implement proper error handling for network issues, invalid locations, and API rate limits. Additionally, parsing and displaying weather data in a meaningful way required careful UI/UX consideration.",
    features: [
      "Real-time weather data from OpenWeatherMap API",
      "Location-based weather search",
      "5-day weather forecast",
      "Temperature unit conversion (Celsius/Fahrenheit)",
      "Weather condition icons and descriptions",
      "Offline error handling"
    ],
    images: [
      "images/project-2.png",
      "images/project-2.png",
      "images/project-2.png"
    ]
  },
  5: {
    title: "Todo List & User Registration",
    duration: "3 weeks",
    teamSize: "Solo Project",
    role: "Full Stack Developer",
    technologies: ["Python", "Django", "SQLite", "HTML/CSS", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/yourusername/todo-app",
    liveLink: "https://your-todo-app.herokuapp.com",
    description: "A comprehensive task management system with user authentication, allowing users to create, edit, delete, and organize their tasks. The application features user registration, login functionality, and personalized task lists with priority levels and due dates.",
    challenges: "Implementing secure user authentication and creating a robust database schema for task management were the primary challenges. I had to ensure data security, implement proper user session management, and create an intuitive interface for task organization. The CRUD operations needed to be seamless and error-free.",
    features: [
      "User registration and authentication",
      "CRUD operations for tasks",
      "Task priority levels and categories",
      "Due date tracking and notifications",
      "Search and filter functionality",
      "Responsive design for all devices"
    ],
    images: [
      "images/project-3.png",
      "images/project-3.png",
      "images/project-3.png"
    ]
  },
  6: {
    title: "Employee Registration System",
    duration: "1 month",
    teamSize: "Solo Project",
    role: "Full Stack Developer",
    technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/yourusername/employee-system",
    liveLink: "#",
    description: "A comprehensive employee management system for organizations to handle employee registration, data management, and basic HR operations. The system includes employee profiles, department management, and administrative controls with role-based access.",
    challenges: "Building a scalable database architecture and implementing role-based access control were significant challenges. I had to design a system that could handle large amounts of employee data while maintaining security and performance. Creating different user roles (admin, HR, employee) with appropriate permissions required careful planning.",
    features: [
      "Employee registration and profile management",
      "Department and role management",
      "Role-based access control",
      "Employee search and filtering",
      "Data export functionality",
      "Administrative dashboard"
    ],
    images: [
      "images/project-6.png",
      "images/project-6.png",
      "images/project-6.png"
    ]
  }
};

// Theme Management - Only Dark Theme
class ThemeManager {
  constructor() {
    this.applyDarkTheme(); // Always apply dark theme
  }

  applyDarkTheme() {
    document.body.classList.add('dark-theme');
  }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

// Project Modal Manager
class ProjectModalManager {
  constructor() {
    this.modal = document.getElementById('projectModal');
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Setup view project buttons
    document.querySelectorAll('.view-project').forEach(button => {
      button.addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-project');
        this.showProject(projectId);
      });
    });
  }

  showProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Update modal content
    this.updateModalContent(project);
    
    // Show modal
    $('#projectModal').modal('show');
  }

  updateModalContent(project) {
    // Update title
    document.getElementById('projectModalLabel').textContent = project.title;
    document.getElementById('modal-project-title').textContent = project.title;

    // Update project meta
    document.getElementById('modal-duration').textContent = project.duration;
    document.getElementById('modal-team-size').textContent = project.teamSize;
    document.getElementById('modal-role').textContent = project.role;

    // Update tech stack
    const techStackContainer = document.getElementById('modal-tech-stack');
    techStackContainer.innerHTML = '';
    project.technologies.forEach(tech => {
      const badge = document.createElement('span');
      badge.className = 'tech-badge';
      badge.textContent = tech;
      techStackContainer.appendChild(badge);
    });

    // Update links
    document.getElementById('modal-github-link').href = project.githubLink;
    document.getElementById('modal-live-link').href = project.liveLink;

    // Update description and challenges
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-challenges').textContent = project.challenges;

    // Update features
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresContainer.appendChild(li);
    });

    // Update carousel images
    this.updateCarousel(project.images);
  }

  updateCarousel(images) {
    const carouselContainer = document.getElementById('carousel-images');
    carouselContainer.innerHTML = '';

    images.forEach((image, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      const img = document.createElement('img');
      img.src = image;
      img.className = 'd-block w-100';
      img.alt = `Project screenshot ${index + 1}`;
      
      carouselItem.appendChild(img);
      carouselContainer.appendChild(carouselItem);
    });
  }
}

// Animation Manager
class AnimationManager {
  constructor() {
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.add('fade-in');
      observer.observe(card);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme manager
  const themeManager = new ThemeManager();
  
  // Initialize project modal manager
  const modalManager = new ProjectModalManager();
  
  // Initialize animation manager
  const animationManager = new AnimationManager();

// ✅ Add smooth scrolling ONLY for in-page anchor links (not external links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Only handle if href is a valid CSS selector (i.e., not just "#")
    if (href && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});


  // Add loading states for project buttons
  document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function() {
      const originalText = this.innerHTML;
      this.innerHTML = '<span class="loading"></span> Loading...';
      this.disabled = true;
      
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
      }, 1000);
    });
  });

  // Add hover effects for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  console.log('Enhanced Projects System Initialized Successfully!');
});