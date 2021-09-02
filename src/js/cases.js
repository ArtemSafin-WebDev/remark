import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function cases() {
    const elements = Array.from(document.querySelectorAll('.js-cases'));

    elements.forEach(element => {
       
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: window.matchMedia('(max-width: 640px)').matches ? 'auto' : element.matches('.cases--compact') ? 3 : 4,
            spaceBetween: 10,
            watchOverflow: true,
            threshold: 5,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            breakpoins: {
                641: {
                    spaceBetween: 30
                }
            }
        });
    });
}
