import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function alsoRecommended() {
    const elements = Array.from(document.querySelectorAll('.js-also-recommended'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        let options = {
            slidesPerView: 'auto',
            spaceBetween: 15,
            watchOverflow: true,
            speed: 600,

            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        };

        if (window.matchMedia('(min-width: 641px)').matches) {
            options = {
                ...options,
                slidesPerView: element.matches('.also-recommended--wide') ? 5 : 4,
                spaceBetween: 30
            };
        }
        new Swiper(container, options);
    });
}
