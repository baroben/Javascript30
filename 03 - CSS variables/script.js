const root = document.documentElement;
const spacingRange = document.querySelector('#spacing-range');
const blurRange = document.querySelector('#blur-range');
const colorPicker = document.querySelector('#color-picker');

spacingRange.addEventListener('input', () => {
    root.style.setProperty('--spacing-value', `${spacingRange.value}px`);
});

blurRange.addEventListener('input', () => {
    root.style.setProperty('--blur-value', `${blurRange.value}px`);
});

colorPicker.addEventListener('input', () => {
    root.style.setProperty('--color-value', `${colorPicker.value}`);
});


