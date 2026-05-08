// Function to handle dark mode toggling
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const btn = document.getElementById('themeToggleBtn');
    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'Toggle Light Mode';
    } else {
        btn.textContent = 'Toggle Dark Mode';
    }
}

// Attach the event listener to the button once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
});

// Add smooth scrolling for any anchor links (e.g., if you add an internal navigation menu later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default if the href is literally just "#"
        if(this.getAttribute('href') !== '#') {
            const targetElement = document.querySelector(this.getAttribute('href'));
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});