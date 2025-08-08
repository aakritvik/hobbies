const slides = document.querySelectorAll('.slide');
let current = 0;

// Navigation buttons
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Swipe detection for mobile
let startX = 0;
let endX = 0;

document.querySelector('.slider').addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // Swipe left
    current = (current + 1) % slides.length;
    showSlide(current);
  } else if (endX - startX > 50) {
    // Swipe right
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});
