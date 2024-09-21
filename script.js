const colors = [
    '#FF7E5F',
    '#FEB47B',
    '#FF9A9E',
    '#FAD0C4',
    '#FF7E5F',
];

let currentIndex = 0;

function changeBackgroundColor() {
    const overlay = document.getElementById('colorOverlay');


    overlay.style.backgroundColor = colors[currentIndex];
    overlay.style.opacity = 1; // Start fading in


    setTimeout(() => {
        overlay.style.opacity = 0; 
    }, 1500); 

    currentIndex = (currentIndex + 1) % colors.length;
}


changeBackgroundColor();
setInterval(changeBackgroundColor, 3000); 