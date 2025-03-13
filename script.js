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

    // Create floating balloons
    const balloons = document.querySelectorAll('.balloons');
    balloons.forEach((balloon, index) => {
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.top = `${Math.random() * 100}vh`;
    });

    // Add confetti effect
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Create confetti periodically
    setInterval(createConfetti, 300);

    // Add hover effect to photos
    const photos = document.querySelectorAll('.gallery-img');
    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            photo.style.transform = 'scale(1.1)';
        });
        photo.addEventListener('mouseout', () => {
            photo.style.transform = 'scale(1)';
        });
    });

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.photo-container').forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'all 0.6s ease-out';
        observer.observe(container);
    });
}); 