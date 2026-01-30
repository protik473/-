// script.js

// 1. Marigold Petal Animation
function createPetals() {
    const container = document.getElementById('petal-container');
    const petalCount = 20;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize size, position, and duration
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 2 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(petal);
    }
}

// 2. Surprise Reveal Logic
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
const bgMusic = document.getElementById('bgMusic');

surpriseBtn.addEventListener('click', () => {
    // Reveal hidden content
    hiddenMessage.classList.remove('hidden');
    surpriseBtn.style.display = 'none';
    
    // Play music (Modern browsers need user interaction)
    bgMusic.volume = 0.3;
    bgMusic.play().catch(e => console.log("Music play blocked by browser."));

    // Scroll to the bottom to see reveal
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// 3. Simple Scroll Reveal
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top >= offset) {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }
    });
});

// Initialize
window.onload = () => {
    createPetals();
    // Initially hide sections for scroll effect
    document.querySelectorAll('.section').forEach(s => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(20px)';
        s.style.transition = '0.8s ease-out';
    });
};
