// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Form submission handling - Direct to WhatsApp
const bookingForm = document.getElementById('booking-form');

// Package names mapping
const packageNames = {
    'single': 'Single Lesson - $80',
    '5hour': '5-Hour Package - $390',
    '10hour': '10-Hour Package - $750',
    'test': 'Test Preparation - $230'
};

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const packageType = formData.get('package');
    const packageName = packageNames[packageType] || packageType;
    const message = formData.get('message');

    // Create WhatsApp message
    const whatsappMessage = `Hi Sydney Go Driving!

I'd like to book a driving lesson.

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Package:* ${packageName}
${message ? `*Message:* ${message}` : ''}

Please confirm my booking. Thank you!`;

    // WhatsApp link with Australian number format
    const whatsappLink = `https://wa.me/61450995898?text=${encodeURIComponent(whatsappMessage)}`;

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<span class="spinner"></span> Opening WhatsApp...';
    submitBtn.disabled = true;

    // Open WhatsApp after short delay
    setTimeout(() => {
        window.open(whatsappLink, '_blank');

        // Reset form and show success
        submitBtn.innerHTML = 'Request Booking';
        submitBtn.disabled = false;
        this.reset();

        // Show success notification
        showNotification(`Thanks ${name}! WhatsApp opened. Please send the message to complete your booking.`);
    }, 500);
});

// Success notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-green-600 text-white p-4 rounded-lg shadow-2xl z-50 transform transition-all duration-300';
    notification.innerHTML = `
        <div class="flex items-start gap-3">
            <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(notification);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('section > .container').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-800', 'font-semibold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-800', 'font-semibold');
        }
    });
});
