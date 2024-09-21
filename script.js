const colors = [
    '#FF7E5F', // 0
    '#FEB47B', // 1
    '#FF9A9E', // 2
    '#FAD0C4', // 3
    '#FF5B8C', // 4
    '#FFC371', // 5
    '#FF6A98', // 6
    '#FFC371', // 7
    '#FFB75E', // 8
    '#FF6F61', // 9
];

let currentIndex = 0;
const overlay = document.getElementById('colorOverlay');

function getNextColor() {

    currentIndex = (currentIndex + 1) % colors.length;
    return colors[currentIndex];
}

function changeBackgroundColor() {
    const currentColor = getNextColor();
    

    overlay.style.background = `linear-gradient(to bottom, ${currentColor}, rgba(255, 255, 255, 0.1))`;
    overlay.style.opacity = 1; 


    setTimeout(() => {
        overlay.style.opacity = 0; 
    }, 3000); 
}


particlesJS.load('body', 'particles.json', function() {
    console.log('particles.js loaded - callback called');
});


changeBackgroundColor();
setInterval(changeBackgroundColor, 8000); 