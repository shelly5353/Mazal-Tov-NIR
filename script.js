document.addEventListener('DOMContentLoaded', () => {
    // Music control
    const birthdaySong = document.getElementById('birthdaySong');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            birthdaySong.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i><span class="music-text">תנגן אותי</span>';
        } else {
            birthdaySong.play();
            musicToggle.innerHTML = '<i class="fas fa-pause"></i><span class="music-text">עצור</span>';
        }
        isPlaying = !isPlaying;
    });

    // Create floating balloons with random colors
    const balloons = document.querySelectorAll('.balloons');
    const colors = [
        ['#ff9a9e', '#fad0c4'],
        ['#a8e6cf', '#dcedc1'],
        ['#ffd3b6', '#ffaaa5'],
        ['#ff6b6b', '#ff8e8e'],
        ['#ffd93d', '#ffd700']
    ];

    balloons.forEach((balloon, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.background = `radial-gradient(circle at 30% 30%, ${randomColor[0]}, ${randomColor[1]})`;
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.top = `${Math.random() * 100}vh`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
    });

    // Enhanced confetti effect
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random confetti colors
        const colors = ['#ff6b6b', '#ffd93d', '#4ecdc4', '#45b7d1', '#96ceb4'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = randomColor;
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Create confetti periodically
    setInterval(createConfetti, 300);

    // Add hover effect to photos with scale and rotation
    const photos = document.querySelectorAll('.gallery-img');
    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            const rotation = Math.random() * 4 - 2; // Random rotation between -2 and 2 degrees
            photo.style.transform = `scale(1.1) rotate(${rotation}deg)`;
        });
        photo.addEventListener('mouseout', () => {
            photo.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(0deg)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.photo-container').forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px) rotate(-2deg)';
        container.style.transition = 'all 0.8s ease-out';
        observer.observe(container);
    });
}); 