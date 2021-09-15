document.addEventListener('DOMContentLoaded', () => {
    let footerForm = document.querySelector('#footer-form');

    if (footerForm) {
        footerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(footerForm)
                    .parsley()
                    .isValid()
            ) {
                footerForm.reset();
                $(footerForm)
                    .parsley()
                    .reset();
                if (typeof window.openModal === 'function') {
                    window.openModal('#success');
                }
            }
        });
    }
});
