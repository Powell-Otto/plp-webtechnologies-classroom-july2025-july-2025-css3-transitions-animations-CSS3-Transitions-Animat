// Demonstrating functions, scope, and triggering animations

// Local vs Global scope demo
let globalCounter = 0;

function incrementCounter(step) {
    let localCounter = step; // local scope
    globalCounter += localCounter;
    return globalCounter;
}

// Animate Box
const box = document.getElementById('animateBox');
const triggerBtn = document.getElementById('triggerBtn');

triggerBtn.addEventListener('click', () => {
    box.classList.toggle('animate');
    console.log('Counter:', incrementCounter(1));
});

// Card Flip
const card = document.getElementById('flipCard');
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    console.log('Counter:', incrementCounter(2));
});

// Modal Popup
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    console.log('Counter:', incrementCounter(3));
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Reusable function example
function toggleAnimation(element, className) {
    element.classList.toggle(className);
    return element.classList.contains(className);
}