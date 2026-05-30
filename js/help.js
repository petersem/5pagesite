document.getElementById('help-link').addEventListener('click', function (e) {
    e.preventDefault(); // stops jump-to-top

    const popup = document.getElementById('help-popup');
    const isOpen = popup.style.display === 'block';

    popup.style.display = isOpen ? 'none' : 'block';
    this.setAttribute('aria-expanded', !isOpen);
});
