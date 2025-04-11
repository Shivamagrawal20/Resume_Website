// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute('data-theme', 
        body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeToggle.innerHTML = body.getAttribute('data-theme') === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Scroll to Top Button
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate Skill Bars
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
};

// Profile Image Animation
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.05)';
    profileImage.style.transition = 'transform 0.3s ease';
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});

// Experience Cards Animation
const experienceCards = document.querySelectorAll('.experience-card');
experienceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const logo = card.querySelector('.company-logo');
        logo.style.transform = 'rotate(360deg)';
        logo.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const logo = card.querySelector('.company-logo');
        logo.style.transform = 'rotate(0deg)';
    });
});

// Project Cards Animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const techStack = card.querySelector('.tech-stack');
        techStack.style.transform = 'translateY(-5px)';
        techStack.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const techStack = card.querySelector('.tech-stack');
        techStack.style.transform = 'translateY(0)';
    });
});

// Certification Cards Animation
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const issuer = card.querySelector('.issuer');
        issuer.style.color = '#0056b3';
        issuer.style.transition = 'color 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const issuer = card.querySelector('.issuer');
        issuer.style.color = 'var(--primary-color)';
    });
});

// Smooth Scroll for Navigation
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

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skill-progress')) {
                animateSkillBars();
            }
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add specific animations for different sections
            if (entry.target.classList.contains('experience-card')) {
                entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            }
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            }
            if (entry.target.classList.contains('cert-card')) {
                entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all interactive elements
document.querySelectorAll('section, .skill-progress, .experience-card, .project-card, .cert-card').forEach(element => {
    observer.observe(element);
});

// Timeline Progress
const timelineProgress = document.querySelector('.timeline-progress');
const timelineItems = document.querySelectorAll('.timeline-item');

const updateTimelineProgress = () => {
    const timelineHeight = document.querySelector('.timeline').offsetHeight;
    const scrollPosition = window.scrollY;
    const timelineTop = document.querySelector('.timeline').offsetTop;
    const timelineBottom = timelineTop + timelineHeight;
    
    if (scrollPosition >= timelineTop && scrollPosition <= timelineBottom) {
        const progress = ((scrollPosition - timelineTop) / timelineHeight) * 100;
        timelineProgress.style.height = `${Math.min(progress, 100)}%`;
    }
};

window.addEventListener('scroll', updateTimelineProgress);

// Social Share Buttons
const shareButtons = document.querySelectorAll('.share-btn');

shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        const platform = button.getAttribute('data-platform');
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        let shareUrl;
        switch(platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// Download Resume Button
const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // You can add your resume PDF file here
    alert('Resume download functionality will be implemented soon!');
}); 