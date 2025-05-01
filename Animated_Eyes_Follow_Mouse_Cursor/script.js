document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = 60; // pupil movement limit

        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);

        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});
