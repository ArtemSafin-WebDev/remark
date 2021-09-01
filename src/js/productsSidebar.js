
import './resizeSensor';
import StickySidebar from 'sticky-sidebar';

export default function productsSidebar() {
    const sidebar = document.querySelector('.js-products-sidebar');

    if (!sidebar) return;

    new StickySidebar(sidebar, {
        topSpacing: 40,
        bottomSpacing: 40,
        containerSelector: '.products__layout',
        innerWrapperSelector: '.products__sidebar-inner',
        minWidth: 641
    });
}