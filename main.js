document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove("navlink-active"));
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            link.classList.add("navlink-active");

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});

// Select all company links
const companyLinks = document.querySelectorAll('.company-list li a');

// Function to handle click event on links
companyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove the active class from all links
        companyLinks.forEach(link => link.classList.remove('active'));

        // Add the active class to the clicked link
        link.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.exp-content').forEach(section => {
            // Remove visible class to fade out
            section.classList.remove('visible');
            // Use setTimeout to wait for the fade out transition before setting display to none
            section.addEventListener('transitionend', () => {
                if (!section.classList.contains('visible')) {
                    section.style.display = 'none'; // Hide the section after fade out
                }
            });
        });

        // Show the content section associated with the clicked link
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.style.display = 'block'; // Show the section first
        setTimeout(() => {
            targetSection.classList.add('visible'); // Add visible class to fade in
        }, 10); // Slight delay to allow block display to take effect
    });
});
