document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('animated-name');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        nameElement.style.transform = `rotateY(${x * 50}deg) rotateX(${-y * 50}deg)`;
    });
});
