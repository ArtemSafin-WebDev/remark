export default function productCards() {
    document.addEventListener('click', event => {
        if (event.target.matches('.product-catalog-card__add-to-cart') || event.target.closest('.product-catalog-card__add-to-cart')) {
            event.preventDefault();

            const productCard = event.target.closest('.product-catalog-card');
            const input = productCard.querySelector('.js-amount-input');
            const minusBtn = productCard.querySelector('.js-amount-minus');

            minusBtn.disabled = false;

            input.value = Number(input.value) + 1;
            const changeEvent = new Event('change');
            input.dispatchEvent(changeEvent);
            productCard.classList.add('flipped');
        }

        if (event.target.matches('.js-amount-plus') || event.target.closest('.js-amount-plus')) {
            event.preventDefault();
            const btn = event.target.matches('.js-amount-plus') ? event.target : event.target.closest('.js-amount-plus');
            const input = btn.parentElement.querySelector('.js-amount-input');

            const minValue = input.hasAttribute('data-min-value') ? Number(input.getAttribute('data-min-value')) : 0;
            
            input.value = Number(input.value) + 1;

            if (Number(input.value) >= minValue) {
                const minusBtn = btn.parentElement.querySelector('.js-amount-minus');
                minusBtn.disabled = false;
            }
            
            const changeEvent = new Event('change');
            input.dispatchEvent(changeEvent);
        }
        if (event.target.matches('.js-amount-minus') || event.target.closest('.js-amount-minus')) {
            event.preventDefault();
            const btn = event.target.matches('.js-amount-minus') ? event.target : event.target.closest('.js-amount-minus');
            const input = btn.parentElement.querySelector('.js-amount-input');
           
            input.value = Number(input.value) - 1;

            const minValue = input.hasAttribute('data-min-value') ? Number(input.getAttribute('data-min-value')) : 0;

            if (Number(input.value) <= minValue) {
                input.value = minValue;
              
                const card = event.target.closest('.product-catalog-card');

                if (card) {
                    card.classList.remove('flipped');
                }

                btn.disabled = true;
            }
            const changeEvent = new Event('change');
            input.dispatchEvent(changeEvent);
        }
    });
}
