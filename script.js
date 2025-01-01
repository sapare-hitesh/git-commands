// script.js
// This script will handle animations and interactivity

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Check if the content is already visible
            const isVisible = content.style.maxHeight;

            // Toggle max-height for smooth transition
            if (isVisible) {
                content.style.maxHeight = null; // Collapse
                header.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand
                header.classList.add('active');
            }
        });
    });
});
