document.addEventListener('DOMContentLoaded', () => {
    // Audio control
    const audio = document.getElementById('birthdaySong');
    const toggleButton = document.getElementById('toggleAudio');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    toggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    // Confetti effect
    function launchConfetti() {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            // Use random colors
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#f7fff7']
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#f7fff7']
            }));
        }, 250);
    }

    // Launch confetti on page load
    setTimeout(launchConfetti, 2000);
    
    // Launch confetti periodically
    setInterval(launchConfetti, 15000);

    // Photo hover effects
    const photos = document.querySelectorAll('.photo');
    
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', () => {
            confetti({
                particleCount: 50,
                spread: 70,
                origin: { 
                    x: (photo.getBoundingClientRect().left + photo.getBoundingClientRect().width / 2) / window.innerWidth,
                    y: (photo.getBoundingClientRect().top + photo.getBoundingClientRect().height / 2) / window.innerHeight
                }
            });
        });
    });

    // Animate balloons
    function animateBalloons() {
        const balloons = document.querySelectorAll('.balloon');
        
        balloons.forEach(balloon => {
            // Reset the animation
            balloon.style.animation = 'none';
            balloon.offsetHeight; // Trigger reflow
            balloon.style.animation = 'float 15s ease-in-out infinite';
            
            // Randomize balloon size
            const size = Math.random() * 30 + 50; // 50-80px
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.2}px`;
            
            // Randomize horizontal position
            const leftPos = Math.random() * 100;
            balloon.style.left = `${leftPos}%`;
        });
    }

    // Initial balloon animation
    animateBalloons();
    
    // Re-animate balloons periodically
    setInterval(animateBalloons, 15000);

    // Add 3D tilt effect to greeting card
    const card = document.querySelector('.greeting-card');
    
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        const rotateX = mouseY * -0.05;
        const rotateY = mouseX * 0.05;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    // Add sparkle effect to title
    const title = document.querySelector('.main-title');
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position within the title
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        sparkle.style.cssText = `
            position: absolute;
            left: ${left}%;
            top: ${top}%;
            width: 4px;
            height: 4px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
            pointer-events: none;
            opacity: 0;
            animation: sparkleAnimation 1s ease-in-out forwards;
        `;
        
        title.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
    
    // Add keyframe animation for sparkles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleAnimation {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Create sparkles periodically
    setInterval(() => {
        createSparkle();
    }, 300);
}); 