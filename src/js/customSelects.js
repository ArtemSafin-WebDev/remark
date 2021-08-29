import Choices from 'choices.js';

export default function customSelects() {
    const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

    customSelects.forEach(select => {
        const parentForm = select.closest('form');

        const instance = new Choices(select, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false
        });

        const defaultValue = instance.getValue(true);
        console.log('Default value', defaultValue)


        if (parentForm) {
            parentForm.addEventListener('reset', () => {
                console.log('Parent form reset');

                instance.setChoiceByValue(defaultValue);
            })
        }

    });
}
