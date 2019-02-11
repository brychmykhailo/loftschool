
document.querySelector('.mobile__menu__btn').addEventListener("click", function() {
    console.log('нажал')
    let element = document.querySelector('.fullscreen__menu');
    element.classList.add('fullscreen__menu-active');
})


document.querySelector('.mobile__menu__btn-active').addEventListener("click", function() {
    console.log('удалил')
    let element = document.querySelector('.fullscreen__menu');
    element.classList.remove('fullscreen__menu-active');
})