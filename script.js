// script.js

// 1. Petal Animation
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.width = Math.random() * 15 + 10 + 'px';
    petal.style.height = petal.style.width;
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 5 + 5 + 's'; /* 5-10s */
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.opacity = Math.random() * 0.4 + 0.3; /* 0.3 to 0.7 */
    document.getElementById('petal-container').appendChild(petal);

    // Remove petal after animation to prevent DOM overflow
    petal.addEventListener('animationend', () => petal.remove());
}

// Generate a continuous stream of petals
let petalInterval;
function startPetalAnimation() {
    for (let i = 0; i < 20; i++) { // Initial burst
        createPetal();
    }
    petalInterval = setInterval(createPetal, 500); // New petal every 0.5s
}
function stopPetalAnimation() {
    clearInterval(petalInterval);
}

// 2. Intersection Observer for Scroll Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove 'show' class when out of view
            // entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.3 }); // Element is 30% visible

document.querySelectorAll('.reveal-item, .reveal-text').forEach(element => {
    revealObserver.observe(element);
});

// 3. Surprise Button Logic & Music Play
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
const bgMusic = document.getElementById('bgMusic');

surpriseBtn.addEventListener('click', () => {
    hiddenMessage.classList.remove('hidden');
    surpriseBtn.style.display = 'none';

    // Attempt to play music after user interaction
    bgMusic.volume = 0.3; // Set a comfortable volume
    bgMusic.play().then(() => {
        console.log("Background music started.");
    }).catch(error => {
        console.warn("Music autoplay blocked. User might need to interact more:", error);
    });

    // Generate a burst of petals for confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(createPetal, i * 50);
    }

    // Scroll to the revealed message
    hiddenMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// 4. Initial load setup
window.onload = () => {
    startPetalAnimation(); // Start petals on page load
};
