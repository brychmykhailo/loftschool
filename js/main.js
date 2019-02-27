
const deliveryForm = document.getElementById('order-form');
const deliveryFormModal = document.querySelector('.delivery__form__modal_bg');

deliveryForm.onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(deliveryForm);
    formData.append("to", "brychmykhailo@gmail.com");
    const request = new XMLHttpRequest();
    request.open("POST", "https://webdev-api.loftschool.com/sendmail");
    request.send(formData);
    console.log(request);
    request.addEventListener ("load", function() {
        const response = JSON.parse(request.response);
        if (request.status) {
            deliveryFormModal.style.display = 'flex';
            deliveryFormModal.querySelector('.delivery__form__modal-text').innerHTML = response.message;
            let body = document.querySelector('body');
            body.classList.add('body-fixed');
            setTimeout(function(){
                deliveryFormModal.style.display = 'none';
              }, 4000);
        } else {
            deliveryFormModal.style.display = 'flex';
            deliveryFormModal.querySelector('.delivery__form__modal-text').innerHTML = response.message;
            let body = document.querySelector('body');
            body.classList.add('body-fixed');
            setTimeout(function(){
                deliveryFormModal.style.display = 'none';
              }, 4000);
        }
    })

    deliveryFormModal.querySelector('.delivery__form__modal-close').addEventListener("click", function() {
        deliveryFormModal.style.display = 'none';
        let body = document.querySelector('body');
        body.classList.remove('body-fixed');
    });
}



const reviewsItems = document.querySelectorAll('.reviews-item');

for (var reviewsItem of reviewsItems) {

    const reviewsName = reviewsItem.querySelector('.reviews-title').innerHTML;
    const reviewsText = reviewsItem.querySelector('.reviews-text').innerHTML;
  
    reviewsItem.querySelector('.reviews-btn').addEventListener("click", e => {
    e.preventDefault();

    document.querySelector('.reviews__modal-name').innerHTML = reviewsName;
    document.querySelector('.reviews__modal-text').innerHTML = reviewsText;
    document.querySelector('.reviews__modal_bg').style.display = 'flex';
    let body = document.querySelector('body');
    body.classList.add('body-fixed');
    
  });

  reviewsItem.querySelector('.reviews-btn-mob').addEventListener("click", e => {
    e.preventDefault();
    
    document.querySelector('.reviews__modal-name').innerHTML = reviewsName;
    document.querySelector('.reviews__modal-text').innerHTML = reviewsText;
    document.querySelector('.reviews__modal_bg').style.display = 'flex';
    let body = document.querySelector('body');
    body.classList.add('body-fixed');
  });

}

document.querySelector('.reviews__modal-btn').addEventListener("click", function(){
    document.querySelector('.reviews__modal_bg').style.display = 'none';
    let body = document.querySelector('body');
    body.classList.remove('body-fixed');
});


const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
  $('.fixed-menu-point').eq(itemEq).addClass('fixed-menu-point-active')
    .siblings().removeClass('fixed-menu-point-active')
} 

const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if (inScroll) return;

  inScroll = true;

  sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translate(0, ${position})`,
    "-webkit-transform": `translate(0, ${position})`
  });

  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, 1300); // продолжительность анимации + 300ms - потому что закончится инерция
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "up" && prevSection.length) {
    performTransition(prevSection.index());
  }

  if (direction === "down" && nextSection.length) {
    performTransition(nextSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "down" : "up";

    scrollToSection(direction);
  },
  keydown: e => {
    switch (e.keyCode) {
      case 40:
        scrollToSection("down");
        break;

      case 38:
        scrollToSection("up");
        break;
    }
  },
  touchmove: e => e.preventDefault()

  // touchstart touchend touchmove 
});


$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));


  performTransition(target);

})

if (isMobile) {
  $(document).swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      /**
       * плагин возвращает фактическое...
       * ...
       */
      const scrollDirection = direction === 'down' ? 'up' : 'down';
      
      scrollToSection(scrollDirection);
    }
  });
}