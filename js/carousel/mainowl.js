$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin:150,  
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
});

const burgerCompButtons = document.querySelectorAll('.burgers__slider__comp');

for (const CompButton of burgerCompButtons) {
    CompButton.addEventListener('mouseenter', e => {
        let CompButton = e.currentTarget;
        let CompValues = CompButton.querySelector('.burgers__slider__comp-values');
        
        CompValues.style.display = 'initial';
    })
    CompButton.addEventListener('mouseleave', e => {
      let CompButton = e.currentTarget;
      let CompValues = CompButton.querySelector('.burgers__slider__comp-values');
      
      CompValues.style.display = 'none';
  })

}