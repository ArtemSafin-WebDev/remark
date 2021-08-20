import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function partners() {
    const elements = Array.from(document.querySelectorAll('.js-partners'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 4,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 50,
            watchOverflow: true,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}