const colors = [
    '#FF7E5F',
    '#FEB47B',
    '#FF9A9E',
    '#FAD0C4',
    '#FF5B8C',
    '#FFC371',
];

let currentIndex = 0;

function changeBackgroundColor() {
    const overlay = document.getElementById('colorOverlay');


    overlay.style.backgroundColor = colors[currentIndex];
    overlay.style.opacity = 1;


    setTimeout(() => {
        overlay.style.opacity = 0; 
    }, 2000);

    currentIndex = (currentIndex + 1) % colors.length;
}


particlesJS.load('body', 'particles.json', function() {
    console.log('particles.js loaded - callback called');
});


changeBackgroundColor();
setInterval(changeBackgroundColor, 5000); 