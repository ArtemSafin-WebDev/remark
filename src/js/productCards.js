export default function productCards() {
    document.addEventListener('click', event => {
        if (event.target.matches('.product-catalog-card__add-to-cart') || event.target.closest('.product-catalog-card__add-to-cart')) {
            event.preventDefault();

            const productCard = event.target.closest('.product-catalog-card');
            const input = productCard.querySelector('.product-catalog-card__amount-input');
            const minusBtn = productCard.querySelector('.product-catalog-card__amount-btn--minus');

            minusBtn.disabled = false;

            input.value = Number(input.value) + 1;

            const changeEvent = new Event('change');
            input.dispatchEvent(changeEvent);

            productCard.classList.add('flipped');
        }

        if (event.target.matches('.product-catalog-card__amount-btn--plus') || event.target.closest('.product-catalog-card__amount-btn--plus')) {
            event.preventDefault();
            const input = event.target.closest('.product-catalog-card__amount').querySelector('.product-catalog-card__amount-input');
            
            input.value = Number(input.value) + 1;

            if (Number(input.value) >= 0) {
                const minusBtn = event.target.closest('.product-catalog-card__amount').querySelector('.product-catalog-card__amount-btn--minus');
                minusBtn.disabled = false;
            }
            
            const changeEvent = new Event('change');
            input.dispatchEvent(changeEvent);
        }
        if (event.target.matches('.product-catalog-card__amount-btn--minus') || event.target.closest('.product-catalog-card__amount-btn--minus')) {
            event.preventDefault();
            const input = event.target.closest('.product-catalog-card__amount').querySelector('.product-catalog-card__amount-input');
           
            input.value = Number(input.value) - 1;

            if (Number(input.value) <= 0) {
                input.value = 0;
                const btn = event.target.matches('.product-catalog-card__amount-btn--minus')
                ? event.target
                : event.target.closest('.product-catalog-card__amount-btn--minus');

                const card = event.target.closest('.product-catalog-card');

                card.classList.remove('flipped');
              
                btn.disabled = true;
            }
            const changeEvent = new Event('change');
            input.dispatchEvent(changeEvent);
        }
    });
}
