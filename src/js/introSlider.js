import { Swiper, Navigation, Autoplay } from 'swiper';
import gsap from 'gsap';
Swiper.use([Navigation, Autoplay]);

export default function introSlider() {
    const elements = Array.from(document.querySelectorAll('.js-intro-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        const progressBullets = Array.from(element.querySelectorAll('.intro__thumbs-slider-card'));

        let options = {
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            threshold: 5,
            speed: 800,
            breakpoints: {
                641: {
                    spaceBetween: 30
                }
            },
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            },
            on: {
                slideChangeTransitionStart: () => {
                    element.classList.add('slider-transitioning');
                },
                slideChangeTransitionEnd: () => {
                    element.classList.remove('slider-transitioning');
                },
                slideChange: swiper => {
                    autoplay(swiper.realIndex);
                }
            }
        };

        if (window.matchMedia('(max-width: 640px)').matches) {
            options = {
                ...options,
                autoplay: {
                    delay: 5000
                }
            };
        }

        const mainSlider = new Swiper(container, options);

        function autoplay(startIndex) {
            if (window.matchMedia('(max-width: 640px)').matches) return;
            progressBullets.forEach(bullet => {
                gsap.set(bullet, {
                    '--slider-progress': 0
                });
                gsap.killTweensOf(bullet);
            });

            if (window.matchMedia('(max-width: 576px)').matches) {
                progressBullets.forEach((bullet, bulletIndex) => {
                    if (bulletIndex < startIndex) {
                        gsap.set(bullet, {
                            '--slider-progress': 1
                        });
                    }
                });
            }

            gsap.fromTo(
                progressBullets[startIndex],
                { '--slider-progress': 0 },
                {
                    '--slider-progress': 1,
                    duration: 5,
                    ease: 'linear',
                    onComplete: () => {
                        if (progressBullets[startIndex + 1]) {
                            mainSlider.slideNext();
                        } else {
                            mainSlider.slideTo(0);
                        }
                    }
                }
            );
        }

        autoplay(0);

        progressBullets.forEach((bullet, bulletIndex) => {
            bullet.addEventListener('click', event => {
                event.preventDefault();
                mainSlider.slideTo(bulletIndex);
            });
        });
    });
}
