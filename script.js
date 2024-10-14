// script.js
const phrases = [
    "De tradição à inovação",
    "A inovação está em nosso DNA.",
    "Trabalhamos para o futuro!",
    "Junte-se a nós nesta jornada."
]; 

const speed = 100; 
const pause = 1000; 
let index = 0; 
let charIndex = 0; 

function type() {
  
    if (charIndex < phrases[index].length) {
        document.getElementById("typed-text").innerHTML += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(deleteText, pause);
    }
}

function deleteText() {
    if (charIndex > 0) {
        document.getElementById("typed-text").innerHTML = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, speed);
    } else {
        index = (index + 1) % phrases.length; 
        setTimeout(type, pause); 
    }
}

type();


const slides = document.querySelectorAll('.slide');
const slideInfos = document.querySelectorAll('.slide-info');
const nextBtn = document.querySelector('.slider--btn__next');
const prevBtn = document.querySelector('.slider--btn__prev');

let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.removeAttribute('data-current');
    slide.removeAttribute('data-next');
    slide.removeAttribute('data-previous');
    
    slideInfos[index].removeAttribute('data-current');
  });

  slides[currentSlide].setAttribute('data-current', '');
  slideInfos[currentSlide].setAttribute('data-current', '');

  const nextSlide = (currentSlide + 1) % slides.length;
  const prevSlide = (currentSlide - 1 + slides.length) % slides.length;

  slides[nextSlide].setAttribute('data-next', '');
  slides[prevSlide].setAttribute('data-previous', '');
  slideInfos[nextSlide].setAttribute('data-next', '');
  slideInfos[prevSlide].setAttribute('data-previous', '');
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

// Initialize the slider
updateSlides();

function toggleContent(card) {
  card.classList.toggle('active'); // Alterna a classe 'active' no card
}