import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function historySlider() {
    const elements = Array.from(document.querySelectorAll('.js-history-slider'));
    const contents = Array.from(document.querySelectorAll('.js-about-content-slider'));

    let elementsSlider = new Array()
    let contentsSlider = new Array()

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        const slider = new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
            speed: 600,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });

        elementsSlider.push(slider)

    });

    contents.forEach(element => {
        const container = element.querySelector('.swiper-container');

        const slider = new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 30,
            allowTouchMove: false,
            speed: 600,
            watchSlidesVisibility: true
        });

        contentsSlider.push(slider)

    });

    elementsSlider.forEach((slider, index) => {
        slider.on('slideChange', function(e) {
            const i = e.activeIndex
            contentsSlider[index].slideTo(i)
        })
    });

}
