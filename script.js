document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamic Open/Closed Status
    const statusElement = document.getElementById('status-indicator');
    if (statusElement) {
        checkOpenStatus(statusElement);
        // Update every minute
        setInterval(() => checkOpenStatus(statusElement), 60000);
    }
});

function checkOpenStatus(element) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ...
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    // Hours:
    // Mon-Fri: 9am - 6pm (9:00 - 18:00)
    // Sat: 10am - 2pm (10:00 - 14:00)
    // Sun: Closed

    let isOpen = false;

    if (day >= 1 && day <= 5) { // Mon-Fri
        if (hour > 9 || (hour === 9 && minute >= 0)) { // After 9:00
            if (hour < 18) { // Before 18:00
                isOpen = true;
            }
        }
    } else if (day === 6) { // Saturday
        if (hour > 10 || (hour === 10 && minute >= 0)) { // After 10:00
            if (hour < 14) { // Before 14:00
                isOpen = true;
            }
        }
    }
    // Sunday is closed

    if (isOpen) {
        element.textContent = "We are currently Open";
        element.style.color = "var(--success)";
        element.style.fontWeight = "bold";
    } else {
        element.textContent = "We are currently Closed";
        element.style.color = "var(--danger)";
        element.style.fontWeight = "bold";
    }
}
