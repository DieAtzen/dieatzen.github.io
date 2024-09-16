document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.particles');


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


    const title = document.querySelector('h1');
    const colors = ['#ff7e5f', '#feb47b', '#86a8e7', '#91eae4'];
    let colorIndex = 0;

    setInterval(() => {
        title.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 2000);


    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        particlesContainer.childNodes.forEach(particle => {
            const speed = parseFloat(particle.style.width) / 100;
            particle.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
        });
    });


    const content = document.querySelector('.content');
    let angle = 0;

    function floatContent() {
        angle += 0.01;
        const x = Math.sin(angle) * 10;
        const y = Math.cos(angle) * 10;
        content.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(floatContent);
    }

    floatContent();
});