document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.particles');

    // Generate particles
    for (let i = 0; i < 150; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const top = Math.random() * 100;
        const left = Math.random() * 100;
        particle.style.top = `${top}%`;
        particle.style.left = `${left}%`;

        particlesContainer.appendChild(particle);
    }

    // Title color animation
    const title = document.querySelector('h1');
    const colors = ['#ff7e5f', '#feb47b', '#86a8e7', '#91eae4'];
    let colorIndex = 0;

    setInterval(() => {
        title.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 2000);
});
