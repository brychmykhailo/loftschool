
document.querySelector('.mobile__menu__btn').addEventListener("click", function() {
    let element = document.querySelector('.fullscreen__menu');
    element.classList.add('fullscreen__menu-active');
    let body = document.querySelector('body');
    body.classList.add('body-fixed');
})


document.querySelector('.mobile__menu__btn-active').addEventListener("click", function() {
    let element = document.querySelector('.fullscreen__menu');
    element.classList.remove('fullscreen__menu-active');
    let body = document.querySelector('body');
    body.classList.remove('body-fixed');
})