// Generate particles dynamically
function generateParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;
    
    // Animation types available
    const animations = [
        'particle-orbit-1', 'particle-orbit-2', 'particle-orbit-3', 'particle-orbit-4',
        'particle-spiral', 'particle-spiral-reverse', 'particle-wave', 'particle-wave-reverse',
        'particle-figure-eight', 'particle-pendulum'
    ];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        // Random size between 6px and 12px
        const size = Math.floor(Math.random() * 7) + 6;
        
        // Random animation
        const animationType = animations[Math.floor(Math.random() * animations.length)];
        const duration = Math.floor(Math.random() * 15) + 15; // 15-30 seconds
        const delay = Math.random() * -40; // Random delay up to -40s
        
        // Apply styles
        particle.style.cssText = `
            top: ${top}%;
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            animation: ${animationType} ${duration}s linear infinite;
            animation-delay: ${delay}s;
        `;
        
        // Add glow effect to some particles
        if (Math.random() > 0.7) {
            particle.style.animation += `, particle-glow ${Math.floor(Math.random() * 3) + 3}s ease-in-out infinite`;
        }
        
        particlesContainer.appendChild(particle);
    }
}