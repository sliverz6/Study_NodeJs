const slides = document.querySelectorAll('.slide__item');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');

let currentSlide = 0;

const showSlide = index => {
    slides.forEach((slide, idx) => {
        if (index === idx) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
}   

const moveSlide = dir => {
    if (dir === 'left' && currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    } else if (dir === 'right' && currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
};

showSlide(currentSlide);

leftBtn.addEventListener('click', moveSlide.bind(null, 'left'));
rightBtn.addEventListener('click', moveSlide.bind(null, 'right'));