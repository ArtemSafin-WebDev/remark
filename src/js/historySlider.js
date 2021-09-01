import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function historySlider() {
    const elements = Array.from(document.querySelectorAll('.js-history-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
            speed: 600,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
