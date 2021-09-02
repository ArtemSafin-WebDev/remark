import { Swiper, Navigation  } from 'swiper';

Swiper.use([Navigation ]);

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
            },
            breakpoins: {
                641: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        };
        new Swiper(container, options);
    });
}
