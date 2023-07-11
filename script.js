const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
    menu.classList.add('show');
});

close.addEventListener('click', function () {
    menu.classList.remove('show');
});