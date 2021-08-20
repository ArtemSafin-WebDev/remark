import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function pressCenter() {
    const elements = Array.from(document.querySelectorAll('.js-press-center'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const btns = Array.from(element.querySelectorAll('.press-center__control'));
       

        const slider = new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 40,
            slidesPerView: 1,
            init: false,
            on: {
                init: swiper => {
                    setActiveLink(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveLink(swiper.realIndex);
                }
            }
        });

        slider.init();

        function setActiveLink(index) {
            btns.forEach(btn => btn.classList.remove('active'));

            btns[index].classList.add('active');
        };

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveLink(btnIndex);
                slider.slideTo(btnIndex);
            });
        });
    });
}
