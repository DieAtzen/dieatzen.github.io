const colors = [
    '#FF7E5F',
    '#FEB47B',
    '#FF9A9E',
    '#FAD0C4',
    '#FF7E5F',
];

let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 3000); 