import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const menu = document.querySelector('.page-header__menu');
    const burger = document.querySelector('.page-header__burger');
    let menuOpen = false;

    const openMenu = () => {
        if (menuOpen) return;
        document.body.classList.add('menu-open');
        disableBodyScroll(menu, {
            reserveScrollBarGap: true
        });
        menuOpen = true;
    };

    const closeMenu = () => {
        if (!menuOpen) return;
        document.body.classList.remove('menu-open');
        enableBodyScroll(menu);
        menuOpen = false;
    };

    window.closeMenu = closeMenu;
    window.openMenu = openMenu;

    burger.addEventListener('click', event => {
        event.preventDefault();

        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    
}
