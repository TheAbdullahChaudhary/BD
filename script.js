// Cursor following effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Typing effect for greeting
const greetingText = "Hey You Know What! You're the most adorable human i ever met! 💖";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 100);
    }
}

greetingElement.style.fontFamily = "'Dancing Script', cursive";
greetingElement.style.fontSize = "1.8rem";

// Create floating elements
const floatingElements = ['💖', '✨', '🌸', '💫', '💕', '🦋', '⭐', '🌟', '💗', '💝'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 25 + 15) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -600,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 2 + 2,
        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Initialize animations
window.addEventListener('load', () => {
    // Title animation
    gsap.to('h1', {
        opacity: 1,
        duration: 1,
        y: 20,
        ease: "bounce.out"
    });

    // Days counter animation
    const totalDays = 8766;
    
    gsap.to('.days-counter', {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "back.out"
    });

    // Animate the number counting up
    let currentDay = 0;
    const countInterval = setInterval(() => {
        currentDay += Math.ceil(totalDays / 50);
        if (currentDay >= totalDays) {
            currentDay = totalDays;
            clearInterval(countInterval);
        }
        document.getElementById('daysCount').textContent = currentDay.toLocaleString();
    }, 30);

    // Button animation
    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: -20,
        ease: "back.out"
    });

    // Start typing effect
    typeGreeting();

    // Create floating elements periodically
    setInterval(createFloating, 150);
    
    // Create initial burst
    for(let i = 0; i < 20; i++) {
        setTimeout(createFloating, i * 50);
    }
});

// Hover effects
       // Hover effects
       document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.1,
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3
            });
        });

        // Smooth page transition on click
        button.addEventListener('click', () => {
            gsap.to('body', {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    window.location.href = 'wishes.html';
                }
            });
        });
    });