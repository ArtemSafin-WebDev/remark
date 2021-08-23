import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function reviews() {
    const elements = Array.from(document.querySelectorAll('.js-reviews'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            threshold: 5,
            effect: 'slide',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            breakpoins: {
                641: {
                    effect: 'fade',
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    });
}
