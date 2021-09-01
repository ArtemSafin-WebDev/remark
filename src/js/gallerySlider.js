import { Swiper, Thumbs, Navigation, EffectFade } from 'swiper';

Swiper.use([Thumbs, Navigation, EffectFade]);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.gallery-slider__main .swiper-container');
        const thumbsContainer = element.querySelector('.gallery-slider__thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 0,
            thumbs: {},
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.gallery-slider__arrow--next'),
                prevEl: element.querySelector('.gallery-slider__arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 3,
            threshold: 10,
            speed: 700,
            slideToClickedSlide: true,
            spaceBetween: 14,
            centerInsufficientSlides: true,
            centeredSlides: true,
            centeredSlidesBounds: true
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}