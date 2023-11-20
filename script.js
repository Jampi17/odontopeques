const carouselWrapper = document.getElementById('carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    carouselWrapper.appendChild(carouselWrapper.firstElementChild);
});

prevBtn.addEventListener('click', () => {
    carouselWrapper.prepend(carouselWrapper.lastElementChild);
});