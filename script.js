document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const links = document.querySelectorAll('.link');

    // Smooth scroll to main content
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.main-content').offsetTop,
            behavior: 'smooth'
        });
    });

    // Animate scroll indicator
    const animateScrollIndicator = () => {
        scrollIndicator.classList.add('bounce');
        setTimeout(() => scrollIndicator.classList.remove('bounce'), 1500);
    };

    animateScrollIndicator();
    setInterval(animateScrollIndicator, 3000);

    // Dynamic link hover effect
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
});