import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function partners() {
    const elements = Array.from(document.querySelectorAll('.js-partners'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 20,
            watchOverflow: true,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            breakpoins: {
                641: {
                    
                    slidesPerView: 4,
                    spaceBetween: 50
                }
            }
        });
    });
}
