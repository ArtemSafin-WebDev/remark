export default function productTagsShowMore() {
    const elements = Array.from(document.querySelectorAll('.products__tags-show-more'));

    elements.forEach(element => {
        let shown = false;
        const originalText = element.textContent;
        const openText = element.getAttribute('data-text');
        
        element.addEventListener('click', event => {
            event.preventDefault();
            const productsTags = event.target.closest('.products__tags');
            if (!shown) {
                productsTags.classList.add('show-all');
                element.textContent = openText;
                shown = true;
            } else {
                productsTags.classList.remove('show-all');
                element.textContent = originalText;
                shown = false;
            }
        });
    });
}
