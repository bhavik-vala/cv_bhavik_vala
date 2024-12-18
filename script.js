// Responsive Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on mobile
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close the menu on mobile after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Toggle "About Me" and "Education" Sections
const toggleButtons = document.querySelectorAll('.toggle-btn');
const contentSections = document.querySelectorAll('.content');

// Function to show the active section
function showContent(index) {
    contentSections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Set active class on the clicked button
    toggleButtons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize: Show the first section by default
showContent(0);

// Add event listeners to toggle buttons
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showContent(index);
    });
});
