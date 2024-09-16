document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const mainContent = document.querySelector('.main-content');
    const links = document.querySelectorAll('.link');

    // Smooth scroll to main content
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: mainContent.offsetTop,
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

    // Dino game implementation
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    let dino;
    let obstacles = [];
    let gameInterval;

    class Dino {
        constructor() {
            this.x = 50;
            this.y = canvas.height - 60;
            this.width = 40;
            this.height = 40;
            this.jumpHeight = 0;
            this.isJumping = false;
        }

        draw() {
            ctx.fillStyle = '#555';
            ctx.fillRect(this.x, this.y - this.jumpHeight, this.width, this.height);
        }

        jump() {
            if (!this.isJumping) {
                this.isJumping = true;
                this.jumpHeight = 0;
                const jumpUp = setInterval(() => {
                    if (this.jumpHeight >= 100) {
                        clearInterval(jumpUp);
                        const jumpDown = setInterval(() => {
                            if (this.jumpHeight <= 0) {
                                clearInterval(jumpDown);
                                this.isJumping = false;
                            }
                            this.jumpHeight -= 5;
                            this.draw();
                        }, 20);
                    }
                    this.jumpHeight += 5;
                    this.draw();
                }, 20);
            }
        }
    }

    class Obstacle {
        constructor() {
            this.x = canvas.width;
            this.y = canvas.height - 60;
            this.width = 20;
            this.height = 40;
            this.speed = 5;
        }

        draw() {
            ctx.fillStyle = '#f00';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        move() {
            this.x -= this.speed;
            this.draw();
        }
    }

    function initGame() {
        dino = new Dino();
        obstacles = [];
        gameInterval = setInterval(gameLoop, 20);
        document.addEventListener('keydown', e => {
            if (e.code === 'Space') {
                dino.jump();
            }
        });
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dino.draw();
        if (Math.random() < 0.02) {
            obstacles.push(new Obstacle());
        }
        obstacles.forEach((obstacle, index) => {
            obstacle.move();
            if (obstacle.x + obstacle.width < 0) {
                obstacles.splice(index, 1);
            }
            if (collision(dino, obstacle)) {
                clearInterval(gameInterval);
                alert('Game Over!');
                initGame();
            }
        });
    }

    function collision(dino, obstacle) {
        return !(dino.x + dino.width < obstacle.x || dino.x > obstacle.x + obstacle.width || dino.y < obstacle.y - dino.jumpHeight || dino.y - dino.jumpHeight > obstacle.y + obstacle.height);
    }

    initGame();
});