document.addEventListener('DOMContentLoaded', () => {
    // Start playing the birthday song
    const birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.play().catch(error => {
        console.log("Audio playback failed:", error);
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
}); 