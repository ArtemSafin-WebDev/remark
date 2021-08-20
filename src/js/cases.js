import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function cases() {
    const elements = Array.from(document.querySelectorAll('.js-cases'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 4,
            spaceBetween: 30,
            watchOverflow: true,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
