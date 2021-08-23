import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function interviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-interviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            watchOverflow: true,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
